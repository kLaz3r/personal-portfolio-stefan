import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const MOCKUPS_DIR = path.join(process.cwd(), 'mockups-gallery');
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'graphics-gallery');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'graphics-projects.ts');

interface GraphicsProject {
  id: string;
  title: string;
  client: string;
  type: string;
  dimensions: string;
  finish: string;
  description: string;
  tools: string[];
  images: Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
    blurDataURL?: string;
  }>;
}

interface ImageMetadata {
  width: number;
  height: number;
  blurDataURL: string;
}

async function getImageMetadata(imagePath: string): Promise<ImageMetadata> {
  const image = sharp(imagePath);
  const metadata = await image.metadata();

  // Generate blur placeholder
  const blurBuffer = await image
    .resize(10, 10, { fit: 'inside' })
    .blur(5)
    .png()
    .toBuffer();

  const blurDataURL = `data:image/png;base64,${blurBuffer.toString('base64')}`;

  return {
    width: metadata.width || 0,
    height: metadata.height || 0,
    blurDataURL
  };
}

function parseMarkdown(content: string, folderName: string): Partial<GraphicsProject> {
  const lines = content.split('\n');
  const project: Partial<GraphicsProject> = {
    id: folderName,
    tools: [],
    dimensions: 'Various sizes', // Default value
    client: 'Various clients', // Default value
    type: 'Design Project', // Default value
    finish: 'Professional finish', // Default value
    title: folderName // Default value
  };

  let currentSection = '';
  let descriptionLines: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('# ')) {
      project.title = trimmedLine.substring(2).trim();
    } else if (trimmedLine.startsWith('## Project Details')) {
      currentSection = 'details';
    } else if (trimmedLine.startsWith('## Description')) {
      currentSection = 'description';
    } else if (trimmedLine.startsWith('## Tools Used')) {
      currentSection = 'tools';
    } else if (trimmedLine.startsWith('## ')) {
      currentSection = '';
    } else if (currentSection === 'details') {
      const match = trimmedLine.match(/^\*\*(.+?):\*\*\s*(.+)$/);
      if (match) {
        const key = match[1].toLowerCase().replace(/\s+/g, '');
        const value = match[2].trim();

        if (key === 'client') project.client = value;
        else if (key === 'type') project.type = value;
        else if (key === 'dimensions') project.dimensions = value;
        else if (key === 'finish') project.finish = value;
      }
    } else if (currentSection === 'description') {
      if (trimmedLine) {
        descriptionLines.push(trimmedLine);
      }
    } else if (currentSection === 'tools') {
      if (trimmedLine.startsWith('- ')) {
        const tool = trimmedLine.substring(2).trim();
        const cleanTool = tool.replace(/\s*\(.*?\)\s*/g, '').trim();
        if (cleanTool) {
          project.tools!.push(cleanTool);
        }
      }
    }
  }

  project.description = descriptionLines.join(' ').replace(/\s+/g, ' ').trim();

  return project;
}

async function processProject(folderName: string): Promise<GraphicsProject | null> {
  const folderPath = path.join(MOCKUPS_DIR, folderName);
  const targetFolder = path.join(PUBLIC_DIR, folderName);

  if (!fs.statSync(folderPath).isDirectory()) return null;

  // Find info file
  const files = fs.readdirSync(folderPath);
  const infoFile = files.find(f => f.endsWith('-info.md'));

  if (!infoFile) {
    console.warn(`No info file found for ${folderName}`);
    return null;
  }

  // Parse markdown
  const mdContent = fs.readFileSync(path.join(folderPath, infoFile), 'utf-8');
  const project = parseMarkdown(mdContent, folderName) as GraphicsProject;

  // Create target directory
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Process images
  const imageFiles = files.filter(f => f.endsWith('.png'));
  project.images = [];

  for (const imageFile of imageFiles) {
    const srcPath = path.join(folderPath, imageFile);
    const destPath = path.join(targetFolder, imageFile);

    // Copy image
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
    }

    // Get metadata
    const metadata = await getImageMetadata(destPath);

    project.images.push({
      src: `/graphics-gallery/${folderName}/${imageFile}`,
      width: metadata.width,
      height: metadata.height,
      alt: `${project.title} - ${imageFile.replace('.png', '')}`,
      blurDataURL: metadata.blurDataURL
    });
  }

  // Sort images by name
  project.images.sort((a, b) => {
    const extractNumber = (s: string) => {
      const match = s.match(/(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    };
    return extractNumber(a.src) - extractNumber(b.src);
  });

  return project;
}

function generateTypeScriptFile(projects: GraphicsProject[]): void {
  const content = `// Auto-generated file - do not edit manually
// Generated by scripts/generate-graphics-data.ts

export interface GraphicsProject {
  id: string;
  title: string;
  client: string;
  type: string;
  dimensions: string;
  finish: string;
  description: string;
  tools: string[];
  images: Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
    blurDataURL?: string;
  }>;
}

export const graphicsProjects: GraphicsProject[] = ${JSON.stringify(projects, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
}

async function main() {
  console.log('Generating graphics projects data...');

  // Ensure directories exist
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const srcDataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(srcDataDir)) {
    fs.mkdirSync(srcDataDir, { recursive: true });
  }

  // Get all project folders
  const folders = fs.readdirSync(MOCKUPS_DIR).filter(f => {
    const stat = fs.statSync(path.join(MOCKUPS_DIR, f));
    return stat.isDirectory();
  });

  console.log(`Found ${folders.length} project folders`);

  // Process each project
  const projects: GraphicsProject[] = [];

  for (const folder of folders) {
    console.log(`Processing ${folder}...`);
    const project = await processProject(folder);
    if (project) {
      projects.push(project);
    }
  }

  // Sort projects alphabetically
  projects.sort((a, b) => a.title.localeCompare(b.title));

  // Generate TypeScript file
  generateTypeScriptFile(projects);

  console.log(`Generated ${projects.length} projects`);
  console.log(`Output: ${OUTPUT_FILE}`);
}

main().catch(console.error);
