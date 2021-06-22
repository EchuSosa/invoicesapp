const getButtonColor = (status) => {
  const colorByStatus = {
    paid: "rgb(93, 193, 185, 0.1)", //"#5DC1B9",
    pending: "rgb(255, 128, 0, 0.1)", //#FF8000",
    draft: "rgb(155, 155, 155, 0.1)", //"#9B9B9B",
  };
  return colorByStatus[status];
};

export default getButtonColor;
