import PhotoshopIcon from './icons/PhotoshopIcon';
import IllustratorIcon from './icons/IllustratorIcon';
import InDesignIcon from './icons/InDesignIcon';
import CorelDrawIcon from './icons/CorelDrawIcon';
import GeminiIcon from './icons/GeminiIcon';

interface ToolIconProps {
  toolName: string;
  className?: string;
}

const toolIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Adobe Photoshop': PhotoshopIcon,
  'Adobe Illustrator': IllustratorIcon,
  'Adobe InDesign': InDesignIcon,
  'CorelDRAW': CorelDrawIcon,
  'Google AI Studio': GeminiIcon,
  'Gemini': GeminiIcon,
};

export default function ToolIcon({ toolName, className = 'w-5 h-5' }: ToolIconProps) {
  const IconComponent = toolIconMap[toolName];

  if (!IconComponent) {
    // Return a fallback span with the tool name if no icon is found
    return (
      <span className={`text-sm ${className}`}>
        {toolName}
      </span>
    );
  }

  return <IconComponent className={className} />;
}
