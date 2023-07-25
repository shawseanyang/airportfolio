export function getRandomRotationDegree(): number {
  const minDegree = -3;
  const maxDegree = 3;

  // Generate a random number between minDegree and maxDegree
  const randomDegree = Math.floor(Math.random() * (maxDegree - minDegree + 1)) + minDegree;

  return randomDegree;
}