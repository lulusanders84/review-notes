export interface IVisibilityProperties {
  valueKey: string,
  keyProperty?: string,
  value?: string | number,
  test: string | number,
  operator: "===" | "!==",
}
