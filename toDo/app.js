
function userName(){
user=document.getElementById("userName").value;
document.getElementById("user1").innerHTML = `${user}`;

}

function addTask(){

task=document.getElementById("task").value;

document.getElementById("task-list").innerHTML +=`<li>${task}<button onclick="deleteItem()">  Delete </button></li>`;

}

function deleteItem() {
  var list = document.getElementById("task-list");
  list.removeChild(list.childNodes[0]);
}



