const popularArabMaleNames = [
  "Ali",
  "Rihab",
  "Qasim",
  "Aya",
  "Mubarak",
  "Naima",
  "Rashid",
  "Walid",
  "Thamer",
  "Adam"
];

const nameDisplay = document.getElementById('nameDisplay');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let randomName = popularArabMaleNames[Math.floor(Math.random() * popularArabMaleNames.length)];
nameDisplay.textContent += randomName;

function openImage() {
  window.open('./pics/WhatsApp Image 2024-11-05 at 00.15.07_b4fcd017.jpg', '_blank');
}

noButton.addEventListener('click', () => {
  randomName = popularArabMaleNames[Math.floor(Math.random() * popularArabMaleNames.length)];
  nameDisplay.textContent = 'Is your name... ' + randomName;
});
