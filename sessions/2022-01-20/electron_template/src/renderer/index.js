let i = 0;
const colors = [
  "#c62828",
  "#6a1b9a",
  "#283593",
  "#00695c",
  "#9e9d24",
  "#ef6c00"
]

setInterval(() => {
  console.log("Executed " + i)
  const main = document.getElementById("main");
  main.style.color = colors[i];
  i = i + 1;
  if (i >= colors.length) {
    i = 0;
  }
}, 1000)

const fs = require('fs');

const dirList = document.getElementById("dir-list")

const dir = fs.readdirSync("./");

dir.forEach(d => {
  const li = document.createElement('li')
  li.innerText = d;
  dirList.appendChild(li);
})