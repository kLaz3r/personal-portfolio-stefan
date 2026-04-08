"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKeys = NestedKeyOf<ReturnType<typeof getTranslation>>;

export function useTranslation() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  function translate(
    key: TranslationKeys | string,
    variables?: Record<string, string>,
  ): string {
    const keys = key.split(".");
    let value: unknown = t;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    if (typeof value !== "string") {
      return key;
    }

    if (variables) {
      return Object.entries(variables).reduce((acc, [varKey, varValue]) => {
        return acc.replace(new RegExp(`\\{${varKey}\\}`, "g"), varValue);
      }, value);
    }

    return value;
  }

  return {
    t: translate,
    language,
  };
}
