import CalculatePercentage from './calculate-percentage';

function CalculateAdjective(x, y) {
  const z = CalculatePercentage(y, x);

  if (z > 3) {
    return 'more expensive';
  }

  if (z < -3) {
    return 'less expensive';
  }

  return 'about the same';
}

export default CalculateAdjective;
