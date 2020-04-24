export interface IVisibilityProperties {
  valueKey: string,
  value?: string | number;
  test: string | number;
  operator: "===" | "!==";
}
