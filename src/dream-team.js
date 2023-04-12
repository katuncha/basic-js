const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

const numbers = [1, 2, 3];
console.log(Array.isArray(numbers)); // => true
function createDreamTeam(members) {
  let result = "";
  const index = 0;
  if (Array.isArray(members)) {
    for(let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        result += members[i].trim()[index];
      }
    }
    return result.split('').sort().join('').toUpperCase();
  }
  return false;
}

module.exports = {
  createDreamTeam
};
