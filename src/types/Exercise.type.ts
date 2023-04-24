export interface ExerciseItem {
  name: string;
  consumption: number;
  consumptionUnit: "kcal" | "cal";
  duration: number;
  durationUnit: "min" | "h";
}
