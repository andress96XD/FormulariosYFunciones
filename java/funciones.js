var multi;
var num1;
var num2;
var resultado;


multi = function (num1,num2) {
  num1=parseFloat(document.getElementById("num1").value);
  num2=parseFloat(document.getElementById("num2").value);
  resultado=num1*num2;
  return resultado;
}
