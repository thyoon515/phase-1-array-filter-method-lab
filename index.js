// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    const newDrivers = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return newDrivers;
}

function fuzzyMatch(drivers, string){
    const firstLetter = drivers.filter(element => element.slice(0, string.length) === string)
    return firstLetter;
}

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(driver, string){
      const driverName = driver.filter(driver => driver.name === string);
      return driverName;
  }