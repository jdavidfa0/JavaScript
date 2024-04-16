let num1, num2;


num1= parseFloat(prompt('Ingrese primer numero'))
num2= parseFloat(prompt('Ingrese segundo numero'))
let suma= num1+num2;
let resta= num1-num2;
let multi = num1*num2;
let divi = num1/num2;

if(num1>num2)
{
    document.write(`<br> La suma es: ${suma}`);
    document.write(`<br> La diferencia es: ${resta}`);

}
else{
    document.write(`<br> El producto es: ${multi}`);
    document.write(`<br> La división es: ${divi}`);
}


