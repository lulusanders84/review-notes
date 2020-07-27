import { getStorage } from "../utils";
import { medicarePolicies } from "../data/medicarePolicies";

export class InfoGrid {
  constructor(lob) {
    this.infoGrid = lob === "commercial" 
      ? getStorage("bcbsmnPolicies", [])
      : lob === "fep"
        ? getStorage("fepPolicies", [])
        : medicarePolicies;
  }
  get() {
    return this.infoGrid;
  }
}