export const getItemsFromLC = () => {
  const data = localStorage.getItem('items');
  const json = data ? JSON.parse(data) : [];

  return { items: json };
};
