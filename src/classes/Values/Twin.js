import { Relationship } from "./Relationship";

export class Twin extends Relationship {
  constructor(value, keyValue) {
    super(keyValue, "twin");
  }
}