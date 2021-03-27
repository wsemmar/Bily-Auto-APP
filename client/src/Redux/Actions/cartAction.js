export const ADDCART = (productImg, productName, productPrice, id) => {
  return (disptch) => {
    disptch({
      type: "ADDCART",
      payload: {
        image: productImg,
        name: productName,
        price: productPrice,
        id: id,
      },
    });
  };
};
export const GETCART = (disptch) => {
  disptch({ type: "GETCART" });
};
