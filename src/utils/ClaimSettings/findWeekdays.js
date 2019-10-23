const daysPerMonth = {
  28: [1],
  30: [3, 5, 8, 10],
  31: [0, 2, 4, 6, 7, 9, 11]
}

export const findWeekdays = (month, year) => {

  const daysInThisMonth = getDaysInThisMonth(month);
  let weekdays = [];
  for(let i=1; i< daysInThisMonth + 1; i++) {
    const date = new Date(`${month + 1}/${i}/${year}`)
    const dayOfWeek = date.getDay();
    const sun = 0;
    const sat = 6;
    if(dayOfWeek !== sun && dayOfWeek !== sat) {
      weekdays.push(date)
    }
  }
  return weekdays;
}

const getDaysInThisMonth = (month) => {
  return parseInt(Object.keys(daysPerMonth).reduce((acc, key) => {
    const monthFound = daysPerMonth[key].includes(month);
    if(monthFound) {
      acc = key;
    }
    return acc;
  }, false)) 
}
