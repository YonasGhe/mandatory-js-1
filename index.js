document.querySelector("h1").textContent = "Fruits & Vegetables Corp";

let lenkar = document.querySelectorAll("a")[2].textContent = "Vegetables";

let main = document.querySelector('#main');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');

main.insertBefore(about, contact);

about.textContent ="";

let aboutElement = document.createElement("h2")
aboutElement.textContent="About";
about.appendChild(aboutElement).childNodes[0];
about.replaceChild(aboutElement, about.childNodes[0]);

let contactElement = document.createElement("h2")
contactElement.textContent="Contact";
contact.appendChild(contactElement).childNodes[0];
contact.replaceChild(contactElement, contact.childNodes[0]);

let aboutText = document.createElement("p")
about.appendChild(aboutText);
aboutText.textContent =("We're the best in fruits & vegetables");

let change = document.querySelectorAll("thead td");
for (let td of change) {
  let result = document.createElement("th");
  result.textContent= td.textContent;
  td.replaceWith(result);
}

let head = document.querySelector("head");
let css = document.createElement("link");
css.setAttribute("rel", "stylesheet");
css.setAttribute("href", "main.css");
head.appendChild(css);

document.querySelector("title").textContent="Fruits & Vegetables Corp";
