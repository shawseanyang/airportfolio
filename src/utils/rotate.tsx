export function getRandomRotationDegree(): number {
  const minDegree = -5;
  const maxDegree = 5;

  // Generate a random number between minDegree and maxDegree
  const randomDegree = Math.floor(Math.random() * (maxDegree - minDegree + 1)) + minDegree;

  return randomDegree;
}