import { Relationship } from "./Relationship";

export class Search extends Relationship {
  constructor(keyValue, ranges) {
    super(keyValue);
    this.ranges = ranges;
    this.setRelationship(this.relationship)
  }
  relationship = (input) => {
    const { value } = input;
    let results = [];
    this.ranges.forEach(range => {
      const rangeResults = range.reduce((acc, rangeItem) => {
        rangeItem === value
          ? acc.push(rangeItem)
          : null;
        return acc;
      }, [])
    results = [...results, ...rangeResults];
    })
    return results;    
  }
}