let listContainerEl =document.getElementById("listContainer");

let todoArray = [
    {
        text:"Html",
        uniqueId:1
    },
    {
        text:"Css",
        uniqueId:2
    },
    {
        text:"Sql",
        uniqueId:3
    },
    {
        text:"Javascript",
        uniqueId:4
    },
]



function createAndAppend(todo){
    

let listEl = document.createElement("li");
listEl.classList.add("d-flex", "flex-row");
listContainerEl.appendChild(listEl);

let inputEl = document.createElement("input");
inputEl.type="checkbox";
inputEl.classList.add("check-box");
inputEl.id="myCheckBox";
listEl.appendChild(inputEl);

let labelContainerEl = document.createElement("div");
labelContainerEl.classList.add("d-flex", "flex-row","justify-content-between","label-container","mb-5");
listEl.appendChild(labelContainerEl);

let lbelEl = document.createElement("label");
lbelEl.setAttribute("for","myCheckBox");
lbelEl.classList.add("m-3")
lbelEl.textContent = todo.text;
labelContainerEl.appendChild(lbelEl);

let createDeleteConatiner = document.createElement("div");
createDeleteConatiner.classList.add("delete-icon-container");
labelContainerEl.appendChild(createDeleteConatiner);

let createDeleteIcon = document.createElement("i");
createDeleteIcon.classList.add("far", "fa-trash-alt", "delete-icon","mr-5","m-3");
createDeleteConatiner.appendChild(createDeleteIcon);

}

for(let todo of todoArray){
    createAndAppend(todo);
}
