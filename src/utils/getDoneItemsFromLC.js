export const getDoneItemsFromLC = () => {
  const data = localStorage.getItem('doneItems');
  const json = data ? JSON.parse(data) : [];

  return { DoneItems: json };
};
