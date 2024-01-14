// getting all required elements
const replacements = {
  "🍅": 0,
  "🥪": 0.1,
  "🥐": 0.2,
  "🥩": 9.5
};
emojiKey = {
  v: "🍅",
  veg: "🍅",
  del: "🥪",
  deli: "🥪",
  bak: "🥐",
  bake: "🥐",
  m: "🥩",
  meat: "🥩"
};
const inputBox = document.querySelector(".inputField .item");
const aisleBox = document.querySelector(".inputField .aisle");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const storedAisles = {...localStorage};
delete storedAisles["New Todo"];

const config = 
{
    placeHolder: "Item name",
    data: {
        src: Object.keys(storedAisles).map(item => `[${storedAisles[item]}] ${item}`)
    },
    resultItem: {
        highlight: {
            render: true
        }
    },
    events: {
      input: {
          selection: (event) => {
              const selection = event.detail.selection.value.replace(/\[.*\] /, "");
              aisleBox.value = storedAisles[selection];
              autoCompleteJS.input.value = selection;
          }
      }
  }
}
const autoCompleteJS = new autoComplete(config);

// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

showTasks(); //calling showTask function

addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value.toLowerCase(); //getting input field value\
  let aisle = aisleBox.value.toLowerCase();
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(aisle === "") {
    aisle = localStorage.getItem(userEnteredValue);
  }
  if(aisle == null || aisle === "") {
    aisle = "?";
  }
  if(isNaN(aisle)) {
    if(emojiKey.hasOwnProperty(aisle)) {
      aisle = emojiKey[aisle];
    }
  }
  let listArray = {};
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = {}; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }

  listArray[userEnteredValue] = aisle;
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  if(aisle != "" && aisle != "?") {
      localStorage.setItem(userEnteredValue, aisle);
  }
  
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = {};
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  if(Object.keys(listArray).length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  let sortable = [];
  for(let item in listArray){
    sortable.push([item, listArray[item]]);
  }
  // modify sort array to substitute string value for number
  sortable.sort(function(a, b) {
    // deep copy strings
    let aClone = {...a};
    let bClone = {...b};
    if(isNaN(aClone[1])) {
      aClone[1] = replacements[aClone[1]] != null ? replacements[aClone[1]] : -1;
    }
    if(isNaN(bClone[1])) {
      bClone[1] = replacements[bClone[1]] != null ? replacements[bClone[1]] : -1;
    }
    return aClone[1] - bClone[1];
});
  sortable.forEach((element, index) => {
    newLiTag += `<li>[${element[1]}] ${element[0]}<span class="icon" onclick="deleteTask('${element[0]}')"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
  aisleBox.value = "";

  
}

// delete task function
function deleteTask(element){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  delete listArray[element];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  listArray = {}; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}