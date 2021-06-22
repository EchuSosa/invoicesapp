const getLetterButtonColor = (status) => {
  const colorByStatus = {
    paid: "#5DC1B9",
    pending: "#FF8000",
    draft: "#9B9B9B",
  };
  return colorByStatus[status];
};

export default getLetterButtonColor;
