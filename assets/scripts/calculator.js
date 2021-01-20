const button = (number) => {
  document.getElementById("viewfinder").value += number;
};

const clearScreen = () => {
  document.getElementById("viewfinder").value = "";
};

const calculate = () => {
  let result = 0;

  result = document.getElementById("viewfinder").value;

  document.getElementById("viewfinder").value = "";

  document.getElementById("viewfinder").value = eval(result);
};
