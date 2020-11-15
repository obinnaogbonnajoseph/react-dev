import { createElement } from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return createElement(
        "div", {}, [
        createElement("h1", { id: "something-important" }, "Adopt Me!"),
        createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
        createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
        createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
    ]
    )
};

render(createElement(App), document.getElementById("root"))