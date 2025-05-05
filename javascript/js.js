'use strict'

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Quiz Logic
const btns = document.querySelectorAll('.branch-quiz button');
const divs = document.querySelectorAll('.branch-quiz div');

const savedScene = localStorage.getItem('lastScene');
if(savedScene) {
  showScene(savedScene);
}

  function showScene(id) {
    divs.forEach(div => div.classList.add('hidden'));
  

  switch(id) { 
    case 'scene-0': document.querySelector('#sp1').classList.remove('hidden');
    break;

    case 'scene-1': document.querySelector('#sp2-1').classList.remove('hidden');
    break;
    case 'scene-2': document.querySelector('#sp2-2').classList.remove('hidden');
    break;
    case 'scene-3': document.querySelector('#sp2-3').classList.remove('hidden');
    break;

    case 'scene-4': document.querySelector('#sp2-1-1').classList.remove('hidden');
    break;
    case 'scene-5': document.querySelector('#sp2-1-2').classList.remove('hidden');
    break;
    case 'scene-6': document.querySelector('#sp2-1-3').classList.remove('hidden');
    break;

    case 'scene-7': document.querySelector('#sp2-2-1').classList.remove('hidden');
    break;
    case 'scene-8': document.querySelector('#sp2-2-2').classList.remove('hidden');
    break;
    case 'scene-9': document.querySelector('#sp2-2-3').classList.remove('hidden');
    break;

    case 'scene-10': document.querySelector('#sp2-3-1').classList.remove('hidden');
    break;
    case 'scene-11': document.querySelector('#sp2-3-2').classList.remove('hidden');
    break;
    case 'scene-12': document.querySelector('#sp2-3-3').classList.remove('hidden');
    break;
    case 'restart': document.querySelector('#sp0').classList.remove('hidden');
    break;
  }
}

const endings = ['scene-4', 'scene-5', 'scene-6', 'scene-7', 'scene-8', 'scene-9', 'scene-10', 'scene-11', 'scene-12']

function checkAnswer(e) {
  const sceneId = e.target.id;
  localStorage.setItem('lastScene', sceneId);
  showScene(sceneId);
}

btns.forEach(btn => {
  btn.addEventListener('click', checkAnswer);
});