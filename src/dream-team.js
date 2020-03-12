module.exports = function createDreamTeam(members) {
  let team = [];

  if (Array.isArray(members)) { 
 
    for (let j = 0; j < members.length; j++) {
      if (typeof members[j] == 'string'){
      members[j] = members[j].trim();
      }
    }
    for (let k = 0; k < members.length; k++) {
      
      if (typeof members[k] == 'string') {
      team.push(members[k][0].toUpperCase());
      }
    }
    return team.sort().join('');
  } else return false;
} ;
