const parent = React.createElement(
    "div",
     {id : "parent"},
     React.createElement("div", 
     {id : "child"},
     [React.createElement("h1", {},"i'm h1 Tag" ),React.createElement("h1", {},"i'm h2Tag" )]
     )
    )
 
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

/* How to create Nested Element
<div id="parent">
        <div id="child">
            <h1>im h1 tag</h1>
            <h2>ram</h2>
            if want to create sibling create array [-,-]
        </div>
   </div>

const parent = React.createElement(
    "div",
     {id : "parent"},
     React.createElement("div", 
     {id : "child"},
     [React.createElement("h1", {},"i'm h1 Tag" ),React.createElement("h1", {},"i'm h2Tag" )]
     )
    )
 
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)*/


/*React program
const heading = React.createElement("h1", {id : "heading", xyx: "abc"}, "Hello World from React")
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/


/*java script program
/* const heading = document.createElement("h1");
heading.innerHTML = "hello World from javascript"; 
const root = document.getElementById("root");
root.appendChild(heading);*/ 