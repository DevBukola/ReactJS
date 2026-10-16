import React from "react";
import ReactDOM from "react-dom/client";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/funghi.jpg" alt="funghi pizza image." />
      <h2>Pizza Funghii</h2>
      <p>Tomato, mozarella, mushrooms, and onion</p>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Savory React Pizza Co.</h1>
    </div>
  );
}

const Menu = () => {
  return (
    <div>
      <h2>Our Menu:</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  let alrt = "";
  if (hour >= openHour && hour <= closeHour) alrt = "We are currently open."; else alrt = "We are closed."
  
  return (
    <div>
      <footer>{new Date().toLocaleTimeString()}</footer>
      <p>{alrt}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
