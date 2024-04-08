class Item {
    constructor(name, price, unit,) {
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.sale = 0;
        this.remaining = unit;
    }
}
let itemArray = [];
const displayItems = () => {

    itemArray = JSON.parse(localStorage.getItem("item"));
    console.log(itemArray);

}
displayItems();
const createItem = (name, price, unit) => {
    const item = new Item(name, price, unit);
    return item;
}


const storeItem = (name, price, unit) => {
    let items = itemArray;
    console.log(items);
    let flag = true;
    for (let index = 0; index < items.length||0; index++) {
        const ele = items[index];
        if (ele.name == name) {
            ele.price = price;
            ele.unit = ele.unit + unit;
            flag = false;
        }
    }
    if (flag) {
        items=[...itemArray,createItem(name, price, unit)];
    }
    console.log(items);
    localStorage.setItem('item', JSON.stringify(items));
    itemArray = items;
    alert("New Item Added");
}


const sale = (name, sale) => {
    let items = itemArray;
    for (let index = 0; index < items.length; index++) {
        const ele = array[index];
        if (ele.name = name) {
            ele.price = price;
            ele.unit = ele.unit;
            ele.sale = sale;
            ele.remaining = ele.unit - ele.sale;

        }
    }

    localStorage.setItem('item', JSON.stringify(items));
    itemArray = items;
    alert("Sales has been updated");
}

const removeItem=(name)=>{
    let items = itemArray;
    items= items.filter((item)=>{
        return item.name!=name;
    })

    localStorage.setItem('item', JSON.stringify(items));
    itemArray = items;
    alert("Sales has been updated");
}












//add Item
const addButton=document.getElementById("addButton");
addButton.addEventListener('click',()=>{
    const name=document.getElementById("newItem");
    const unit=document.getElementById("addU");
    const price=document.getElementById("addPU");
    storeItem(name.value,parseInt(unit.value),parseFloat(price.value))   ;
    displayItems();
})

///
const addSelect=document.getElementById("newDrop");
for (let index = 0; index < itemArray.length; index++) {
    const ele = itemArray[index];

    addButton.appendChild(``)
}


// sale item
const  saleButton=document.getElementById("saleButton");
saleButton.addEventListener('click', ()=>{
    let name= document.getElementById("delItem").value;
    let unit= document.getElementById("delPu").value;
    for (let i = 0; i < itemArray.length; i++){
        if(name==itemArray[i].name){
            sale(name, unit);
        }
    }
});
