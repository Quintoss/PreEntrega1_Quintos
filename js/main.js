let number1 = "";
let number2 = "";
let operation = "";

const getNumber = (number) => {
  if(operation === ""){
    number1 += number.toString();
    displayValue(number1);
    return;
  }
  number2 = number2 + number.toString();
  displayValue(number2);
};

const getOperation = (ope) => { //+
  if(ope === "C") {
    number1 = "";
    displayValue("0");
    number2 = "";
    operation = "";
    return;
  }
  if((operation !== "") && (number1 !== "") && (number2 !== "")){ //realizar operacion cuando se ingreso valor1, operacion y valor2
    doOperation(operation);
    return;
  }
  if((operation === "" || operation === "=") && (number1 === "")){ // Cuando se le pica por primera vez al (=, /, +, -, *)  y no ha ingresado valores
    return alert("Ingresa un valor antes de realizar una operacion!!");
  }
  if((operation !== "") && (number2 === "")){ // Cuando debe de ingresar el segundo valor pero selecciona una operacion
    return alert("Termina la operacion!!!");
  }
  if(ope === "="){ // realizar operacion
    doOperation(operation);
    return;
  }
  displayValue(ope); // Grabar la operacion a Realizar
  operation = ope;
};

const doOperation = (ope) => {
  let total = 0;
  switch (ope) {
    case "+":
      total = +number1 + +number2;
      cleanValuesNewOperation(total);
      break;
    case "-":
      total = +number1 - +number2;
      cleanValuesNewOperation(total);
      break;
    case "*":
      total = (+number1) * (+number2);
      cleanValuesNewOperation(total);
      break;
    case "/":
      total = (+number1) / (+number2);
      cleanValuesNewOperation(total);
      break;
    default:
      break;
  }
};

const cleanValuesNewOperation = (total) => {
  number1 = total.toString();
  displayValue(total);
  number2 = "";
  operation = "";
}

const displayValue = (value) => {
  document.getElementById("displayValue").value = value;
}