const changeStyle = () => {
  const paragraph = document.getElementById("parrafo");

  paragraph.style.fontFamily = "Georgia, serif";
  paragraph.style.fontSize = "20px";
  paragraph.style.color = "#764ba2";
};

const openAlert = () => {
  const links = document.querySelectorAll("a");

  const total = links.length;
  const first = links[0].href;
  const last = links[total - 1].href;

  const messageAll = `Número total de links: ${total}`;
  const messageFirst = `Primer enlace: ${first}`;
  const messageLast = `Último enlace: ${last}`;

  const messages = [messageAll, messageFirst, messageLast];
  alert(messages.join("\n"));
};

const form = document.getElementById("form1");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements["fname"].value;
  const lastName = form.elements["lname"].value;

  console.log("Nombre: " + name);
  console.log("Apellido: " + lastName);
});

/* Tarea Extra */
const container = document.getElementById("contenedor");
console.log(container);

const itemsSecond = document.querySelectorAll(".segundo");
console.log(itemsSecond);

const itemsThird = document.querySelector("ol li.tercero");
console.log(itemsThird);

const textInContainer = document.querySelector("#contenedor p");
textInContainer.textContent = '¡Hola!'
console.log(textInContainer);

const footer = document.querySelector(".footer");
footer.classList.add('principal')
console.log(footer);

footer.classList.remove('principal')
console.log(footer);

const listFourth = document.querySelector("ul");
const newItem = document.createElement('li');
newItem.textContent = 'cuatro';
newItem.classList.add('cuatro');

listFourth.appendChild(newItem);
console.log(listFourth);

