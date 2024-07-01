import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

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
    <div className="page">
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>-- Qudus Pizza Co. --</h1>
    </header>
  );
}
function Menu() {
  return (
    <div>
      <div className="upper-menu">
        <h2>OUR MENU</h2>
        <p className="comment">
          Authentic nigerian cusine with 6 creative dishes to choose from All
          from our stone oven. all organic, all delicious.
        </p>
      </div>
      <ul className="pizza-container">
        {pizzaData.map((pizza) =>
          !pizza.soldOut ? <Pizza pizzaObj={pizza} /> : null
        )}
      </ul>
    </div>
  );
}

// function Our(){

//     return <h2>OUR MENU</h2>
// }

// function HeaderComment(){
//     return <p>Authentic nigerian cusine with 6 creative dishes to choose from All from our stone oven. all organic, all delicious.</p>
// }
function Footer() {
  const openHour = 12;
  const closingHour = 22;
  const currentHour = 12;
  const isOpen = currentHour >= openHour && currentHour <= closingHour;
  console.log(isOpen);

  return (
    <div className="footer">
      {isOpen && (
        <div>
          <p className="">{new Date().toLocaleDateString()} we're open</p>
          <button>Order Now</button>
        </div>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <div className="img">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      </div>
      <div className="info">
        <h3>{pizzaObj.name}</h3>
        <p className="p">{pizzaObj.ingredients}</p>
        <p>{pizzaObj.price}</p>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function App() {
//   return (
//     <body>
//       <div>
//         <Img />
//         <Menu />
//       </div>
//     </body>
//   );
// }

// function Img() {
//   return (
//     <p className="img">
//       <img src="pizzas/focaccia.jpg" alt="pizzas" />
//     </p>
//   );
// }

// function Menu() {
//   return (
//     <menu>
//       <h1>Qudus Olanrewaju</h1>
//       <p className="msg">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
//         ratione sequi nihil itaque tenetur nemo reiciendis minus velit nostrum
//         doloremque vitae dicta magnam labore, quo repellat nulla voluptates
//         voluptatem officiis.
//       </p>
//       <p className="skill">
//         <Skill />
//         <Skill />
//       </p>
//       <p className="skill">
//         <Skill />
//         <Skill />
//       </p>
//       <p className="skill">
//         <Skill />
//         <Skill />
//       </p>
//     </menu>
//   );
// }

// function Skill() {
//   return <span>HTML and CSS 🥇</span>;
// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
