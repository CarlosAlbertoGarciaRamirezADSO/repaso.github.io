const icono_menu = document.querySelector(".icono_menu");
const menu = document.querySelector("#menure");

icono_menu.addEventListener("click", (() => {
  menure.classList.toggle("active")
  document.body.classList.toggle('opacity');

  const rutaActual=e.target.getAttribute('src');

  if(rutaActual == 'Frame.svg'){
    e.target.setAttribute('src','Frame.svg');
  }else{
    e.target.setAttribute('src','Frame.svg');
  }
}))