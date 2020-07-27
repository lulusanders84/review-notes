import { bcbsmnCodes } from "../data/bcbsmnCodes";
import { medicareCodes } from "../data/medicareCodes";

export class Codes {
  constructor(lob) {
    this.codes = lob === "commercial" 
      ? bcbsmnCodes
      : lob === "medicare"
        ? medicareCodes
        : {};
  }
  get() {
    return this.codes;
  }
}