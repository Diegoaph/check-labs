type Range = {
  min: number;
  max: number;
  unit: string;
  gender?: 'female' | 'male';
};

export function checkRange(value: number, range: Range): string {
  if (value < range.min) return 'low';
  if (value > range.max) return 'high';
  return 'normal';
}
