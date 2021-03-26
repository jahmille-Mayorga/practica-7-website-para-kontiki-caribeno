var changingImages=function image()
{
    for(i=0;i<3;i++)
    {
        document.getElementById(riceandbeans).src="imagenes pagina principal\rice and beans tradicional.jpg";
        Delay
        document.getElementById(riceandbeans).src="imagenes pagina principal\rice and beans with shrimps.jpg";
        delay
        document.getElementById(riceandbeans).src="imagenes pagina principal\rice and beans con pollo.jpg";
        if(i==2)
        {
            i=0;
        }
    }
}