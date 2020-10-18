// const firstName = localStorage.setItem("First Name", "Rahul");
// const secondName = sessionStorage.setItem("Second Name", "Sameer");

// const result = localStorage.getItem("First Name");
// const result2 = sessionStorage.getItem("Second Name");

// console.log(result);
// console.log(result2);
localStorage.clear();
const names = ["Rahul", "Shaw", "Sameer", "Suraj"];
const local = localStorage.setItem("Name", JSON.stringify(names));
const result = localStorage.getItem("Name");
console.log(JSON.parse(result));
