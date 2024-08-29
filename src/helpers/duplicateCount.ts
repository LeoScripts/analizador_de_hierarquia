export function duplicateCount(categories: [string]) {
  const count: any = [];
  let test: any;
  categories.forEach((category) => {
    const result = categories.reduce(
      (acc: { category: string; count: number }[], category: string) => {
        const existingCategory = acc.find((item) => item.category === category);
        if (existingCategory) {
          existingCategory.count += 1;
        } else {
          acc.push({ category, count: 1 });
        }
        return acc;
      },
      []
    );
    test = result;
  });
  return test;
}
