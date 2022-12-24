const heading = React.createElement("h1", { id: "title" }, "Hello!!");
const heading2 = React.createElement("h1", { id: "title2" }, "Hi!!");
const container = React.createElement("div", { class: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);


//using innerHTML

// const root  = document.getElementById("root");
// const heading1 = document.createElement("h1");
// const content = "hello"
// heading1.innerHTML = content;
// root.appendChild(heading1)

//using createTextNode

// const root = document.getElementById("root")
// const heading1 = document.createElement("h1");
// const newText = document.createTextNode("hello world");
// const content=heading1.appendChild(newText)
// root.appendChild(content)
