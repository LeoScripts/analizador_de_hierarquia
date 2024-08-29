export function insertDepht(currentPath: string[], currentDepth: number) {
  let filteredData = [];
  let positions = [currentDepth - 1, currentPath.length];
  for (let positon of positions) {
    filteredData.push(currentPath[positon]);
  }
  return filteredData[0];
}
