const reachDestination = (distance, speed) => {
  if (distance === 0 && speed === 0) {
    return "I am here";
  }
  if (distance > 0 && speed === 0) {
    return "The train has broken down";
  }
  
  return `I will be there in ${Math.round((distance / speed) * 2) / 2} hours.`;
};

module.exports = reachDestination;