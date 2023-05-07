export const reducer = (state, { type, payload }) => {
  if (type === "ADD") {
    const isPresent = state.some((product) => product.id === payload.id);
    if (isPresent) {
      return state;
    }
    return [...state, payload];
  }
  if (type === "REMOVE_ITEM") {
    const newRes = state.filter((item) => item.id !== payload);
    return newRes;
  }
  if (type === "INCREASE") {
    const newRes = state.map((item) => {
      if (item.id === payload) {
        return { ...item, amt: item.amt + 1 };
      }
      return item;
    });
    return newRes;
  }
  if (type === "DECREASE") {
    const newRes = state.map((item) => {
      if (item.id === payload) {
        if (item.amt <= 1) {
          return item;
        }
        return { ...item, amt: item.amt - 1 };
      }
      return item;
    });
    return newRes;
  }
  if (type === "CLEAR_CART") {
    return [];
  }

  throw new Error("action not specified");
};
