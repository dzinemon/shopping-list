// Get the input field
const itemInput = document.getElementById('item-input');

// Get the shopping list div
const shoppingList = document.getElementById('shopping-items');
// document get the current input value
let itemInputValue = () => {
    let inputString = itemInput.value;
    console.log(inputString);
    let arrayOfItem = inputString.slice(0,1);
    
    let firstLetter = arrayOfItem[0].toUpperCase();
    console.log(firstLetter);

    let rest = inputString.slice(1);
    console.log(rest);

    return firstLetter + rest
};

// reset the input
let resetInput = () => itemInput.value = '';



// add event listener on key press == enter
itemInput.addEventListener('keydown', function(e){
   if (e.key == 'Enter') {
    createItem();
   } 
});
// remove item function
const removeItem = (e) => {
    let currentItem = e.target;
    currentItem.parentNode.remove();
    console.log(currentItem.parentNode);
    itemInput.focus();
}
// get all the buttons
let deleteBtns = Array.prototype.slice.call(document.getElementsByClassName('delete'));
deleteBtns.forEach(element => {
    element.addEventListener('click', removeItem);
});


// create new Div with text and delete button

let createItem = () => {
    //div
    let newItemDiv = document.createElement('div');
    newItemDiv.classList.add('notification', 'is-info');
    //text node
    let text = document.createTextNode(itemInputValue());
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', removeItem);
    newItemDiv.appendChild(deleteButton);
    newItemDiv.appendChild(text);
    // add item
    shoppingList.insertBefore(newItemDiv, shoppingList.childNodes[0]);

    // reset the value
    resetInput();
}



