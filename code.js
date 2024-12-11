const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

 function addTask(){
  if (inputBox.value === ''){
    alert("You must write something!");
  }
  else {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.className ="task-checkbox";

    checkbox.addEventListener("change", function(){
      if(this.checked){
        li.classList.add("checked");
      } else {
        li.classList.remove("checked");
      }
      saveData();
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(inputBox.value));
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML= "\u00d7";
    span.addEventListener("click", function(){
      li.remove();
      saveData();
    });
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
 

listContainer.addEventListener("click", function(e){
   if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
  saveData();
},false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML= localStorage.getItem("data");
}
showTask(); 
 
 
