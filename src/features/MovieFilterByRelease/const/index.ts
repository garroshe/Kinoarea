const CURRENT_YEAR = new Date().getFullYear();
const YEARS_BACK = 5;

export const LIST_ITEMS_BY_RELEASE = [
  { label: "Весь час", date: null, key: 1 },
  ...Array.from({ length: YEARS_BACK + 1 }, (_, i) => {
    const year = CURRENT_YEAR - i;
    return {
      label: year.toString(),
      date: year,
      key: i + 2,
    };
  }),
];
