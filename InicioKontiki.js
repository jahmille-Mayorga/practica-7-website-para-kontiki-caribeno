/*var changingImages=function image()
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
*/
/*https://www.youtube.com/watch?v=UliJeDbc4cw&ab_channel=AdamKhoury

How to import a JS file to HTML:
https://www.youtube.com/watch?v=06oqCcAnyjc&ab_channel=JavaScriptTutorials
*/
function canton(s1,s2){
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    var optionArray;
    s2.innerHTML=""; /*Siempre que se corra esta funcion se va a limpiar el elemento(este select del canton) de todo lo que tenga adentro*/
    if(s1.value=="San Jose"){
        optionArray=["|","san jose|San Jose","escazu|Escazu","desamparados|Desamparados","puriscal|Puriscal","tarrazu|Tarrazu","aserri|Aserri","mora|Mora","goicochea|Goicochea","santa ana|Santa Ana","alajuelita|Alajuelita","vasquez de coronado|Vazquez de Coronado","acosta|Acosta","tibas|Tibas","moravia|Moravia","montes de oca|Montes de Oca","turrubares|Turrubares","dota|Dota","curridabat|Curridabat","perez zeledon|Perez Zeledon","leon cortes|Leon Cortes"];
    }
    else if(s1.value=="Heredia"){
       optionArray=["|","heredia|Heredia","barva|Barva","santo domingo|Santo Domingo","santa barbara|Santa Barbara","san isidro|San Rafael","belen|Belen","san pablo|San Pablo","sarapiqui|Sarapiqui"];
    }
    else if(s1.value=="Alajuela"){
        optionArray=["|","alajuela|Alajuela","san ramon|San Ramon","grecia|Grecia","san mateo|San Mateo","atenas|Atenas","palmares|Palmares","san pedro|San Pedro","orotina|Orotina","quesada|Quesada","zarcero|Zarcero","sarchi|Sarchi","upala|Upala","los chiles|Los Chiles","san rafael|San Rafael","rio cuarto|Rio Cuarto"];
    }
    else if(s1.value=="Cartago"){
        optionArray=["|","alvarado|Alvarado","cartago|Cartago","el guarco|El Guarco","jimenez|Jimenez","la union|La Union","oreamuno|Oreamuno","paraiso|Paraiso","turrialba|Turrialba"];
    }
    else if(s1.value="Puntarenas"){
        optionArray=["|","buenos aires|Buenos Aires","corredores|Corredores","coto brus|Coto Brus","esparza|Esparza","montes de oro|Montes de Oro","osa|Osa","parrita|Parrita","puntarenas|Puntarenas","quepos|Quepos"];
    }
    else if(s1.value=="Guanacaste"){
        optionArray=["|","liberia|Liberia","nicoya|Nicoya","santa cruz|Santa Cruz","Canas|Canas","bagaces|Bagaces","las juntas|Las Juntas","tilaran|Tilaran","filadelfia|Filadelfia"];
    }
    else{
        var optionArray=["|","limon|Limon","pococi|Pococi","siquirres|Siquirres","talamanca|Talamanca","matina|Matina","guacimo|Guacimo"];
    }
    for(var option in optionArray){
        var pair=optionArray[option].split("|");/*Crea un array nuevo y le asigna dos elementos en base al split a partir de u character(en este caso |), con ello asignamos un value y un element a continuacion */
        var newOption=document.createElement("option");
        newOption.value=pair[0];//como se dijo el la primera linea despues del for y el valor de la nueva opcion es el valor solo en minuscula
        newOption.innerHTML=pair[1];//como se dijo el la primera linea despues del for
        s2.options.add(newOption);
    }
}
