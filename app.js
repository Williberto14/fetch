let contenedor = document.querySelector("#contenedor");
let busqueda = document.querySelector("#busqueda");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  renderizar();
});

function renderizar() {
  fetch(`http://www.omdbapi.com/?t=${busqueda.value}&apikey=5d668009`)
    .then((resolve) => {
      return resolve.json();
    })
    .then((respuesta) => {
      contenedor.innerHTML = `
        <h2>${respuesta.Title}</h2>
        <img src="${respuesta.Poster}" alt="">
        `;
    });
}
