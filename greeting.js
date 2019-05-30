const form = document.querySelector('.js_form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js_greeting');

const USER_LS = "Registered User",
USER_CN = "valid";

function saveName(username){
  localStorage.setItem(USER_LS, username);
}

function handleSubmit(event){
  event.preventDefault();
  const username = input.value;
  printGreeting(username);
  saveName(username);
}

function askUserName(){
  form.classList.add(USER_CN);
  form.addEventListener('submit', handleSubmit);
}

function printGreeting(username) {
  form.classList.remove(USER_CN);
  greeting.classList.add(USER_CN);
  greeting.innerText = "Good day, "+username+"!";
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askUserName();
  } else {
    printGreeting(currentUser);
  }
}

function runit() {
  loadName();
}

runit();
