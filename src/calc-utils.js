export const totalAmount = (state) => {
  let totalAmt = 0;
  let totalItems = 0;
  // state.map((item) => {
  //   return (totalItems += item.amt);
  // });
  state.map((item) => {
    totalItems += item.amt;
    totalAmt += item.amt * item.price;
  });
  return { totalAmt, totalItems };
};
