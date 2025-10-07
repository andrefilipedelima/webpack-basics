import * as style from './index.css';
import "./clearButton";
import logo from './assets/webpack_logo.png';
import "./assets/fonts/AlanSans-Regular.ttf";

const btn1 = document.getElementById("button1");
const logoEl = document.getElementById("logo");

btn1.addEventListener("click", function () {
    const el = document.getElementById("header");
    el.innerHTML = "Hey I have updated the code !";
    el.classList.add([style.header]);

    const listItems = ["Apple", "Orange", "Banana"];
    const ul = document.getElementById("shoppingList");

    _.forEach(listItems, function(item) {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});

btn1.classList.add([style.button]);
logoEl.src = logo;