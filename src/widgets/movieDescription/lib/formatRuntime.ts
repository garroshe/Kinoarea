export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0 && mins > 0) {
    return `${hours} год ${mins} хв`;
  } else if (hours > 0) {
    return `${hours} год`;
  } else {
    return `${mins} хв`;
  }
};
