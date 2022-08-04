var texto = document.getElementById("texto_lineas");
var btn = document.getElementById("boton");
var d = document.getElementById("dibujito");

var lienzo = d.getContext("2d");
var ancho = d.width;
console.log(lienzo);
btn.addEventListener("click", dibujoPorClick);//se le da la funcion para que se ejecute en el evento

dibujarLinea("#AFA", 1, 1, 1, ancho - 1);
dibujarLinea("#AFA", 1, 1, ancho - 1, 1);
dibujarLinea("#AFA", ancho - 1, 1, ancho - 1, ancho - 1);
dibujarLinea("#AFA", 1, ancho - 1, ancho - 1, ancho - 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal )
{
    lienzo.beginPath();//arranca trazo
    lienzo.strokeStyle = color;//color trazo
    lienzo.moveTo(xinicial, yinicial);//donde inicia el trazo
    lienzo.lineTo(xfinal, yfinal);//donce finaliza el trazo
    lienzo.stroke();//realiza el trazo
    lienzo.closePath();//finaliza el trazo
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);//value da el valor de una caja de texto
    var espacio = ancho / lineas;
    var l = 0;
    var yi, xf;
   
    do
    {
        yi = ancho - (espacio * l);
        xf = ancho - (l * espacio);
        dibujarLinea("red", ancho, yi, xf, 0);
        l++;
    }
    while(l<lineas);

    for(l=0; l<lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("#AAF", 0, yi, xf, ancho);
        console.log("Linea " + 1);
    }

    for(l=0; l<lineas; l++)
    {
        yi = espacio * l;
        xf = ancho - (l * espacio);
        dibujarLinea("#AAF", ancho, yi, xf, ancho);
    }

    l = 0;
    while(l < lineas)
    {
        yi = ancho - (espacio * l);
        xf = l * espacio;
        dibujarLinea("red", 0, yi, xf, 0);
        l ++;
    }
    
}