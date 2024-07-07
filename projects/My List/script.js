const myInput = document.getElementById("myInput");
const numberItems = document.getElementById("numberItems");
const myList = document.getElementById("myList");

var firstArray =[];

function addItem() {

    if (myInput.value =="") {
        alert("are u stupid??")
    } else {
        const items = myInput.value;
        firstArray.push(items);
        myInput.value = "";
        itemsCount();

    }
}

function itemsCount() {
    const count = firstArray.length;
    numberItems.innerText = count;
}


function theItems() {

    if (firstArray.length == 0) {
        alert("Nothing is found ya stupid");
    } else {
        listClear();
        for (let index = 0; index < firstArray.length; index++) {
            const element = firstArray[index];
            const newItem = document.createElement("li");
            newItem.innerText = element;
            myList.appendChild(newItem);
        }
    }
}


function listClear() {
    myList.innerHTML = "";
}


function deleteList() {
    firstArray = [];
    listClear();
    itemsCount();
}