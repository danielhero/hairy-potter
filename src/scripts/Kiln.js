export const firePottery = (potteryPiece, temperature) => {
  if (temperature > 2200) {
    return (potteryPiece.cracked = true);
  } else {
    return (potteryPiece.cracked = false);
  }
};
