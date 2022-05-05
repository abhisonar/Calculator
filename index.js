// document.onkeydown = (e) => {
//     return false;
// }
cal_input = document.getElementById("cal-input-field");
// cal_input.defaultValue = "0";
cal_input.focus();
const clear = () => {
  cal_input.value += 10;
};

const display = (value) => {
  cal_input.value += value;
};

const calculate = () => {
  var p = cal_input.value;
  var result = eval(p);
  cal_input.value = result;
};

document.addEventListener("keyup", (e) => {
  if (e.key == 'Enter') {
      console.log("enter key is pressed");
      calculate();
    }
})
