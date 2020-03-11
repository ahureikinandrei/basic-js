const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD; // rate constant

module.exports = function dateSample(sampleActivity ) {
  let numsampleActivity = parseFloat(sampleActivity);
  if(typeof(sampleActivity) !== 'string' || isNaN(numsampleActivity) || Number(numsampleActivity) <= 0 || Number(numsampleActivity) > MODERN_ACTIVITY) //Specific requirements
  { 
    return false;
  } else {

    return Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / k));
  }
};
