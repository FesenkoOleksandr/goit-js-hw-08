import throttle from 'lodash.throttle';
const inputEl = document.querySelector(".feedback-form");
const storageItem = "feedback-form-state";
let localData = {};

function formSubmit(event) {
  event.preventDefault();
  if (inputEl[0].value.trim() === '' || inputEl[1].value.trim() === '' ){
    return alert("Error! Будь ласка, нагайно заповніть всі поля");
  }
  console.log(localData);
  localStorage.removeItem(storageItem);
  inputEl.reset()
};
inputEl.addEventListener("submit", formSubmit)

inputEl.addEventListener("input", throttle((e) => {
  localData[e.target.name] = e.target.value;
localStorage.setItem(storageItem, JSON.stringify(localData))
}, 500)
);

if (localStorage.getItem(storageItem)){
  localData = JSON.parse(localStorage.getItem(storageItem))
  inputEl[0].value = localData.email;
  inputEl[1].value = localData.message;
}
