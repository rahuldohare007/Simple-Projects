const prompt = require("prompt-sync")();
const filesystem = require("fs");
let Data = require("./Data.json");

let start = true;

while (start) {
  console.log("------------------GAMEON-----------------------");
  console.log(
    "Press(1) - Add user \nPress(2) - Print Specific User \nPress(3) - Print All Users \nPress(0) - Exit"
  );
  const choice = parseInt(prompt("Enter Your Choice: "));

  switch (choice) {
    case 0:
      start = false;
      console.log("-----------------THANK YOU!---------------------");
      break;

    case 1:
      console.log("------------------Add-User-----------------------");
      let user = {
        ID: "",
        Name: "",
        Age: "",
        Address: "",
      };
      user.ID = parseInt(prompt("Enter ID: "));
      user.Name = prompt("Enter Name: ");
      user.Age = parseInt(prompt("Enter Age: "));
      user.Address = prompt("Enter Address: ");
      Data.push(user);
      filesystem.writeFileSync("Data.json", JSON.stringify(Data));
      console.log("User Added!");
      break;

    case 2:
      console.log("------------------Print-Specific-User---------------------");
      const searchID = parseInt(
        prompt("Enter ID of the user you want to search: ")
      );
      const searchData = Data.find((user) => user.ID === searchID);
      if (searchData) {
        console.log(searchData);
      } else {
        console.log("User not found!");
      }
      break;

    case 3:
      console.log("------------------Printing-All-Data-----------------------");
      console.log(Data);
      break;

    default:
      console.log("Enter above choice only!!!!!!!!!");
  }
}
