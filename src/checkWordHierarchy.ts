import { duplicateCount } from "./helpers/duplicateCount";
import { insertDepht } from "./helpers/insertDepth";

export function checkWordsInHierarchy(
  hierarchy: any,
  words: string[],
  dedthValue: number
) {
  let deths: any = [];
  function searchHierarchy(obj: object, path: string[] = []): void {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = [...path, key];
      if (Array.isArray(value)) {
        value.forEach((word: string) => {
          if (words.includes(word)) {
            const dedth = insertDepht(currentPath, dedthValue);
            deths.push(dedth);
            hierarchy = duplicateCount(deths);
          }
        });
      } else {
        searchHierarchy(value, currentPath);
      }
    }
  }

  searchHierarchy(hierarchy);
  return hierarchy;
}
