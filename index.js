function findMatching(array, driverName) {
    const newArray = array.filter(driver => driver.toLowerCase() === driverName.toLowerCase());
    return newArray;
};

function fuzzyMatch(array, letters) {
    const fuzzyArray = array.filter(driver => driver.startsWith(letters));
    return fuzzyArray;
};

function matchName(array, str) {
    const exactMatch = array.filter(driver => driver.name === str);
    return exactMatch;
};