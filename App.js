const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child1" }, "Hello from child1"),
  React.createElement("h2", { id: "child2" }, "Hello from child2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
