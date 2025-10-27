export const getFormatedDate = () => {
  const nowDate = new Date();
  const formattedDate = `${nowDate.getFullYear()}-${String(nowDate.getMonth() + 1).padStart(2, "0")}-${String(
    nowDate.getDate(),
  ).padStart(2, "0")} ${String(nowDate.getHours()).padStart(2, "0")}:${String(nowDate.getMinutes()).padStart(2, "0")}`;

  return { formattedDate };
};
