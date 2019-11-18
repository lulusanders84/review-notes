export class Relationship {
  constructor(keyValue) {
    this.key = keyValue;
  }
  setRelationship = (type) => {
    this.build(type);
  }
  build = (type) => {
    return {
      [this.key]: type
    }
  }
  get = () => {
    return this.relationship;
  }
}