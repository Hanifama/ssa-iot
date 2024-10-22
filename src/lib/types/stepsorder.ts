export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface OrderStepsData {
  title: string;
  description: string;
  steps: Step[];
}
