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
