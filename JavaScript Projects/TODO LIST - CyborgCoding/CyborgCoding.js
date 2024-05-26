let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let msg = document.getElementById("msg");

//Global array to store todo items
let gArr = [];
// Fetch todo items from localStorage
getData();

// Edit variable to track editing state
let isEdit = "";

// Function to set todo data in localStorage
function setData(data) {
  localStorage.setItem("todo", JSON.stringify(data));
}

// Function to get todo data from localStorage
function getData() {
  gArr = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
}

cardPrint();

// Event listener for todo submission
submit.addEventListener("click", todoHandler);

// Function to handle todo submission
function todoHandler() {
  if (!msg.value) {
    alert("You must have to give some text");
  } else {
    if (isEdit) {
      // Update existing todo item
      let newArr = gArr.map((item) => {
        if (item.id == isEdit.id) {
          let obj = { id: item.id, text: msg.value };
          return obj;
        } else {
          return item;
        }
      });
      gArr = newArr;

      // Reset editing state
      isEdit = "";
      submit.innerText = "ADD";
    } else {
      // Add new todo item
      let obj = {
        id: Math.trunc(Math.random() * 10000),
        text: msg.value,
      };
      gArr.unshift(obj);
    }
    // Update localStorage and display todos
    setData(gArr);
    cardPrint();
  }
  // Clear input field after submission
  msg.value = "";
}

// Function to handle todo deletion
function deleteHandler(id) {
  gArr = gArr.filter((item) => {
    return item.id != id;
  });
  setData(gArr);
  cardPrint();
}

// Function to handle todo editing
function editHandler(id) {
  let findData = gArr.find((item) => {
    return item.id == id;
  });
  isEdit = findData;
  msg.value = findData.text;
  submit.innerText = "UPDATE";
}

// Function to display todo items
function cardPrint() {
  let template = "";
  let body = document.getElementById("body");
  let count = document.getElementById("count");
  let todoLength = gArr.length;
  if (gArr.length == 0) {
    template += '<h4 style="text-align:center">No Data</h4>';
  } else {
    gArr.forEach((item) => {
      console.log("testing", item);
      template += `    <div class="col-md-3 m-3" >
             <div class="card bg-dark text-white">
        <div class="card-body">
          <p>${item.text}</p>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary" onclick="editHandler(${item.id})">edit</button>
            <button class="btn btn-danger" onclick="deleteHandler(${item.id})">delete</button>
          </div>
        </div>
      </div>
    </div>`;
    });
  }

  body.innerHTML = template;
  count.innerText = todoLength;
}

// Event listener for clearing all todos
clear.addEventListener("click", () => {
  gArr = [];
  setData(gArr);
  cardPrint();
});
