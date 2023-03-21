// First challenge
function distanceFromHqInBlocks(block) {
  const hqLocation = 42;
  return Math.abs(block - hqLocation);

}
// Second challenge

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

// Third challenge

function distanceTravelledInFeet(startBlock, destination) {
  return Math.abs(startBlock - destination) * 264;
}


// Fourth challenge with switch statement
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let fare;

  switch (true) {
    case distance <= 400:
      fare = 0;
      break;
    case distance > 400 && distance <= 2000:
      fare = (distance - 400) * 0.02;
      break;
    case distance > 2000 && distance < 2500:
      fare = 25;
      break;
    default:
      fare = 'cannot travel that far';
      break;
  }
  return fare;
}
