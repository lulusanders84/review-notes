export class Value {
  constructor(value) {
    this.name = value.name;
    this.value = value.value;
    this.relationships = [];
  }
  setRelationships(relationships) {
    this.relationships = relationships;
  }
}