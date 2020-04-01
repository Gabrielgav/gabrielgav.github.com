//console.log("holas culiados");

//DOM
/* let table = document.querySelector(".table");
console.log(table);

let links = document.querySelectorAll("a");
console.log(link);
*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener('click', function(){
    console.log(this);
  })
});
*/

//obtener los elementos de la clase .close
let links = document.querySelectorAll('.close');
//recorrerlos
/*links.forEach(function(link)){

});
*/
//agregar un evento click a cada uno de ellos

links.forEach(function(link){
  link.addEventListener('click', function(ev){
    //console.log(":)");
    ev.preventDefault();
    let content = document.querySelector('.content');
    //quitarle las clases de animacion que ya tiene
    content.classList.remove("zoomInDown");
    content.classList.remove("animated");

    //agregar clases para animar su salida fadeOutUp
    content.classList.add('fadeOutUp');
    content.classList.add('animated');

    setTimeout(function(){
      location.href = "/";
    }, 600);
    //setInterval
    return false;
    })
  });
