export class Weekdays {
  constructor(month, year) {
    Object.assign(this, {
      month,
      year,
      daysPerMonth: {
        28: [1],
        30: [3, 5, 8, 10],
        31: [0, 2, 4, 6, 7, 9, 11],
      },
      daysInThisMonth: this.getDaysInThisMonth(month)
    });
  }
  getDaysInThisMonth() {
    return parseInt(Object.keys(this.daysPerMonth).reduce((acc, key) => {
      const monthFound = this.daysPerMonth[key].includes(this.month);
      if(monthFound) {
        acc = key;
      }
      return acc;
    }, false)) 
  }

  ;
  getWeekdays() {
    let weekdays = [];
    for(let i=1; i< this.daysInThisMonth + 1; i++) {
      const date = new Date(`${this.month + 1}/${i}/${this.year}`)
      const dayOfWeek = date.getDay();
      const sun = 0;
      const sat = 6;
      if(dayOfWeek !== sun && dayOfWeek !== sat) {
        weekdays.push(date)
      }
    }
    return weekdays;
  }
  
}


