export const addSpacesToPascalCase = (input: string) => {
  return input.replace(/([a-z])([A-Z])/g, '$1 $2');
};
