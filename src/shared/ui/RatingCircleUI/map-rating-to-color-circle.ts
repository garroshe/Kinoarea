export const mapRatingToColorCircle = (rating: number) => {
  const color: Record<number, string> = {
    10: "#28FF04",
    9: "#34EA16",
    8: "#4BCB36",
    7: "#78CB36",
    6: "#89CB36",
    5: "#CB6C36",
    4: "#CB3F36",
    3: "#DA3434",
    2: "#F13030",
    1: "#FF0000",
  };

  return color[rating];
};
