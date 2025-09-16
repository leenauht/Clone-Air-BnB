export const normalLizeId = (value: string | null): number | undefined => {
  if (!value) return undefined;
  return Number(Array.isArray(value) ? value[0] : value);
};
