/*
<div id="parent">
    <div id="child">
    <h1>This is an h1 tag</h1>
    <h2>This is an h2 tag </h2>
    </div>
</div>
ReactElement(obj) =>Html(Browser Understand)
*/

const parent=React.createElement(
    "div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"This is an h1 tag"),
React.createElement("h2",{},"This is an h2 tag")

]),
);



// const heading=React.createElement(
//     "h1",{
//     id:"heading",
//     xyz:"abc"
// },"Hello World");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);