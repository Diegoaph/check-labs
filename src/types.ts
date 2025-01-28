export type Test = {
  name: string;
  type?: 'ratio';
  range: {
    min: number;
    max: number;
    unit: string;
    gender?: 'female' | 'male';
  };
  inputs?: { name: string; unit: string }[];
};
