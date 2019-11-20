import { Value } from "../";
import { Pair } from "../";

export class Code extends Value {
  constructor(value) {
    super(value);
    const relationships = [
      new Pair("service"),
    ]
    super.setRelationships(relationships)
  }
}