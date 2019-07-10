function CalculatePercentage(x, y) {
  return Math.round(((x - y) / y) * 1000) / 10;
}

export default CalculatePercentage;
