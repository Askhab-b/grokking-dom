const createUl = document.createElement("ul");

createUl.className = "list";

const liCode = document.createElement("li");

liCode.textContent = "Привет, мир";

createUl.append(liCode);

document.body.prepend(createUl);
