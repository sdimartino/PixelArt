var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta= document.getElementById('paleta');
var grillaPixeles= document.getElementById('grilla-pixeles');
var indicadordecolor= document.getElementById('indicador-de-color');
var mousePresionado=false;
colorPersonalizado.addEventListener('change', 
  (function(e) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    seleccionaColor(e);
  })
);
var generarPaletaDeColores= function(){
  for(var i=0; i < nombreColores.length; i++)
  {
      var divColor= document.createElement('div');
      var color=nombreColores[i];
      divColor.style.backgroundColor=color;
      divColor.addEventListener('click',seleccionaColor);
      divColor.className="color-paleta";
      paleta.appendChild(divColor);
  }
}
var generarGrillaDePixeles= function(){
  for(var i=0; i < 1750; i++)
  {
    var divPixel= document.createElement('div');
    divPixel.id =i;
    divPixel.addEventListener('click', pintarGrilla);
    divPixel.addEventListener('mousedown',activarPintadoEnMovimiento);
    divPixel.addEventListener('mouseover', pintarEnMovimiento);
    divPixel.addEventListener('mouseup',desactivarPintadoEnMovimiento);
    grillaPixeles.appendChild(divPixel);
  }
}
function activarPintadoEnMovimiento(){
  mousePresionado=true;
}
function desactivarPintadoEnMovimiento(){
  mousePresionado=false;
}
function pintarEnMovimiento(e){
  if (mousePresionado){
    pintarGrilla(e);
  }
}
function seleccionaColor(e){
    if (e.target.id=='color-personalizado'){
      color= e.target.value;
    }
    else{
      color= e.target.style.backgroundColor;
    }
    indicadordecolor.style.background = color;
}
function pintarGrilla(e){
  var tamañoBrocha = $("#sel1")[0].selectedIndex;
  e.target.style.background=indicadordecolor.style.background;
  if (tamañoBrocha>0)
  {
    var id = e.target.id;
    for (var i=1;i<= tamañoBrocha; i++)
    {
      id=  parseInt(id)+ 1;
      nid="#"+id;
      $(nid)[0].style.backgroundColor = indicadordecolor.style.background;
    }
  }
}
function borrarTodo(){
  $("#grilla-pixeles").children().animate({"backgroundColor":"white"},2000);
}
function plantilla(){
  $("#grilla-pixeles").children().css("backgroundColor" , indicadordecolor.style.background) ;
}
$("#batman").click(function(){
  getjsSuperheroe("batman.js");
  cargarSuperheroe(batman);
});
$("#wonder").click(function(){
  getjsSuperheroe("wonder.js");
  cargarSuperheroe(wonder);
});
$("#flash").click(function(){
  getjsSuperheroe("flash.js");
  cargarSuperheroe(flash);
});
$("#invisible").click(function(){
  getjsSuperheroe("invisible.js");
  cargarSuperheroe(invisible);
});
function getjsSuperheroe(src){
    var jsfile= $("<script type='text/javascript' src='js/"+src+"'>");
    $("head").append(jsfile);
}
var iniciar= function()
{
  generarGrillaDePixeles();
  generarPaletaDeColores();
}
iniciar();