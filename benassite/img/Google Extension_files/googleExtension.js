
let myLinks = []
let oldLinks = []
const click = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const reset = document.getElementById("reset-btn")
const del = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLinks = leadsFromLocalStorage
  render(myLinks)
}

function render(links) {
  let listItem = ""
  for (let i = 0; i < links.length; i++) {
    listItem +=
      `<li>
        <a target='blank' href=' ${links[i]}'>
          ${links[i]}
        </a>
      </li>`
  }
  ulEl.innerHTML = listItem
}

click.addEventListener("click", function () {
  myLinks.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLinks", JSON.stringify(myLinks))
  render(myLinks)

})

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLinks.push(tabs[0].url)
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
  });

})

reset.addEventListener('click', function () {
  localStorage.clear()
  myLinks = []
  render(myLinks)
  alert("are you sure")
})


// arrow function example
// const array = (arr) => {
//   for (let i = 0; i < arr.length; i++) {


// let coba = localStorage.setItem("link", "www.google.com")
// localStorage.clear()
let get = localStorage.getItem("link")
console.log(get);
