var userInput = document.querySelector("#todo");
var display = document.querySelector("ol");
const array = [];

// Function To Add Task
function addTask() {
  if (userInput.value == "") {
    alert("Please Enter a Task!!!");
  } else {
    array.push(userInput.value);
    render();
  }
}

//Function To Show Task In List
function render() {
  display.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    display.innerHTML += `<li>
    <input type="text" value="${array[i]}" id ="displayinput" disabled >
    <button onclick="Delete(${i})" id ="deletebtn"><i class="fa-solid fa-xmark" style="color: #ec091f;" id ="deleteicon"></i>Delete</button>
    <button onclick="Update(${i})" id ="updatebtn"><i class="fa-regular fa-pen-to-square" style="color: #29cf07;" id ="updateicon"></i>Update</button>
    </li>`;
  }
  userInput.value = "";
}

//Function To Delete
function Delete(Index) {
  array.splice(Index, 1);
  render();
}

//Function To Update
function Update(Index) {
  const updatedTask = prompt("Enter Updated Value:", array[Index]);
  if (updatedTask == "") {
    alert("Please Enter A Updated Task!!!");
  } else {
    array[Index] = updatedTask;
    render();
  }
}
