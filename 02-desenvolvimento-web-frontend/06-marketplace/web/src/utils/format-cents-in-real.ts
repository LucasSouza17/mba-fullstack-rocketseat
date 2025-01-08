export function formatCentsInReal(cents: number): string {
  return (cents / 100).toFixed(2).replace('.', ',');
};