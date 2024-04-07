const items = document.getElementById("list-items");
const inputElement = document.getElementById("input-box");
const displayItemCountElement = document.getElementById("display-items-count");
const clearBtn = document.getElementById("clear-button");
const addBtn = document.getElementById("add-button");
let noOfItems = 0; //it is used to count the current number of items in the list


// keypress eventlistener on input element
inputElement.addEventListener("keypress",(event)=>{
    if(event.key === "Enter")
    {
        addItem();
    }
})

/* click eventlistener on add item button */
addBtn.addEventListener("click",addItem);


/* function to add item in the list*/
function addItem() {
    if(!inputElement.value.trim())
    {
        alert("Enter List Item");
        return;
    }
    noOfItems++;
    displayNoOfItems();
    const checkBox = document.createElement("input"); //creating a input type checkbox
    checkBox.classList.add("checkbox");
    checkBox.setAttribute("type","checkbox");
    const labelItem = document.createElement("label"); //create a label element 
    labelItem.textContent = inputElement.value;
    const crossBtn = document.createElement("button"); //create a cross button
    crossBtn.textContent="X";
    crossBtn.classList.add("cross-button");
    const newItem = document.createElement("li");  //create a li tag
    newItem.append(checkBox,labelItem,crossBtn); 
    crossBtn.addEventListener("click",()=> deleteItem(newItem)); //add click event listener on cross button
    items.appendChild(newItem);
    inputElement.value = "";
}

/* function to delete item from the list*/

function deleteItem(Item) {
    if(!confirm(`do you want to delete "${Item.querySelector('label').textContent}" item ?`))
        return;
    noOfItems--;
    Item.remove();
    displayNoOfItems();
}

/*function to show the current number of items present in the list */
function displayNoOfItems() {
    displayItemCountElement.textContent = " ";
    const textElement = document.createElement("p");  //create a p tag for displaying content
    textElement.classList.add("display-items-count-text")
    textElement.innerHTML = `<span>${noOfItems}</span> Items Left`;
    displayItemCountElement.appendChild(textElement);
}

//add click event listener on clear button and functionality also */
clearBtn.addEventListener("click",()=>{
    if(!confirm("do you want to clear the list"))
        return;
    items.innerHTML ="";
    noOfItems = 0;
    displayNoOfItems();
});