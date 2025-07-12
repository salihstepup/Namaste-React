//having one children

// const heading = React.createElement(
//   "h2",
//   { id: "heading" }, //u can give any attrbute here
//   "hey react developer"
// );

// console.log("heading", heading); //it will get object not an h2 tag (imp)

// const sroot = ReactDOM.createRoot(document.getElementById("root"));
// sroot.render(heading);

//having multiple children h1 inside another div inside another div somthng like that

//notes : ReactElement(Object) => HTML(Browser understands)
// const heading2 = React.createElement(
//   "div",
//   { id: "parent" }, //u can give any attrbute here
//   React.createElement(
//     "div",
//     { id: "child" },
//     // React.createElement("h1", {}, "thaliyee") if it is 1 subling
//     [
//       React.createElement("h1", {}, "thaliyee"), //if we have more than1 siblings we need add in an array
//       React.createElement("h2", {}, "thaliyee2"),
//     ]
//   )
// );

// console.log("heading", heading2); //it will get object not an  tag (imp)

// const proot = ReactDOM.createRoot(document.getElementById("root"));
// proot.render(heading2);

//if having multiple siblings inside it

import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";

// const heading2 = React.createElement(
//   "div",
//   { id: "parent" }, //u can give any attrbute here
//   [
//     React.createElement(
//       "div",
//       { id: "child" },
//       // React.createElement("h1", {}, "thaliyee") if it is 1 subling
//       [
//         React.createElement("h1", {}, "thaliyee"), //if we have more than1 siblings we need add in an array
//         React.createElement("h2", {}, "thaliyee2"),
//       ]
//     ),
//     ,
//     React.createElement(
//       "div",
//       { id: "child" },
//       // React.createElement("h1", {}, "thaliyee") if it is 1 subling
//       [
//         React.createElement("h1", {}, "thaliyee"), //if we have more than1 siblings we need add in an array
//         React.createElement("h2", {}, "thaliyee2"),
//       ]
//     ),
//   ]
// );

// console.log("heading", heading2); //it will get object not an  tag (imp)

//using jsx wrt react element and also using component here

const heading2 = <h1>Sali</h1>;

const heading1 = <h2>thumbu</h2>;

const Sample = () => (
  <div>
    {heading1}

    {heading2}
  </div>
);

// const container = document.getElementById("root");
// const proot = createRoot(container);
// proot.render(heading2);

//or

const proot = ReactDOM.createRoot(document.getElementById("root"));
proot.render(<Sample />); //use angle tag for component , and for element we can put directly here

//or

// const proot = createRoot(document.getElementById("root"));
// proot.render(heading2);
