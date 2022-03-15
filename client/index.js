
let options = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'z', 'x', 'y',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  '!', '#', '$', '%', '&', '/', '?', '*', '-', '_', '.',
]

const text = document.getElementById('text');
const gumb = document.getElementById('btn');
const gumbCopy = document.getElementById('btnCopy');
const clearBtn = document.getElementById('clearBtn');
const addBtn = document.getElementById('addBtn');
const o1 = document.getElementById('o1');
const o2 = document.getElementById('o2');
const o3 = document.getElementById('o3');
const paslen = document.getElementById('paslen');
const warning = document.getElementById('warningID');
const localStorage = window.localStorage;

const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
  const change = document.getElementById('body');
  change.classList.toggle('darkmode')  
})

let passCount = localStorage.getItem('passCount');

const makeEazyPass = () => {
  let passlenght = paslen.value;
  let pass = ' ';

  for (let i = 0; i < passlenght; i++) {
    pass += charOnly();
  }
  text.innerHTML = pass;
}

const makeMediumPass = () => {
  let passlenght = paslen.value;
  console.log(passlenght);
  let pass = ' ';

  for (let i = 0; i < passlenght; i++) {
    pass += charNum();
  }
  text.innerHTML = pass;
}

const makeHardPass = () => {
  let passlenght = paslen.value;
  let pass = ' ';

  for (let i = 0; i < passlenght; i++) {
    pass += everything();
  }
  text.innerHTML = pass;
}


const charOnly = () => {
  let rand = Math.floor(Math.random() * (24 - 0) + 0);
  let rand1 = Math.floor(Math.random() * 2);
  let char = options[rand];
  if (rand1 == 1) {
    return char.toUpperCase();
  }
  else {
    return char;
  }
}

const charNum = () => {
  let rand = Math.floor(Math.random() * (34 - 0) + 0);
  let rand1 = Math.floor(Math.random() * 2);
  let char = options[rand];
  if (rand1 == 1) {
    return char.toUpperCase();
  }
  else {
    return char;
  }
}

const everything = () => {
  let rand = Math.floor(Math.random() * (44 - 0) + 0);
  let rand1 = Math.floor(Math.random() * 2);
  let char = options[rand];
  if (rand1 == 1) {
    return char.toUpperCase();
  }
  else {
    return char;
  }
}

function toggle1() {
  if(o1.checked == true) {
    o2.setAttribute('disabled', true);
    o3.setAttribute('disabled', true);
    warning.classList.add("hidden")
  }
  else {
    o2.removeAttribute('disabled', false);
    o3.removeAttribute('disabled', false);
    warning.classList.remove("hidden")
  }
}
function toggle2() {
  if(o2.checked == true) {
    o1.setAttribute('disabled', true);
    o3.setAttribute('disabled', true);
    warning.classList.add("hidden")
  }
  else {
    o1.removeAttribute('disabled', false);
    o3.removeAttribute('disabled', false);
    warning.classList.remove("hidden")
  }
}
function toggle3() {
  if(o3.checked == true) {
    o1.setAttribute('disabled', true);
    o2.setAttribute('disabled', true);
    warning.classList.add("hidden")
  }
  else {
    o1.removeAttribute('disabled', false);
    o2.removeAttribute('disabled', false);
    warning.classList.remove("hidden")
  }
}

gumbCopy.addEventListener('click', () => {
  var r = document.createRange();
  r.selectNode(document.getElementById('text'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
})

addBtn.addEventListener('click', () => {
  passCount++;

  localStorage.setItem(`passCount`, passCount);
  const passName = prompt('Enter username for this password:');
  localStorage.setItem(passName, text.innerHTML);
  
});

clearBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all passwords?')) {
    localStorage.clear();
    passCount = 0;
  }
})


gumb.addEventListener('click', () => {
  let passlenght = paslen.value;
  if(passlenght < 8 || passlenght > 32) {
    warning.innerHTML = "Password length must be between 8 and 32 characters";
    warning.classList.remove("hidden");
    setTimeout(function(){
      warning.classList.add("hidden");
    }, 5000);
  }
  else {
    if (o1.checked == true) {
      makeEazyPass();
    }
    else if (o2.checked == true) {
      makeMediumPass();
    }
    else if (o3.checked == true) {
      makeHardPass();
    }
  }
})
