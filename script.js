const wishes = [
    "May this year bring clarity, quiet strength, and meaningful success.",
    "May 2026 reward your discipline, patience, and courage.",
    "May you grow without losing your peace.",
    "Let this year refine you, not rush you.",
    "May every effort you make compound into greatness.",
    "Wishing you focus, health, and progress that lasts.",
    "May 2026 be the year your potential becomes visible."
];

let index = 0;
const wishText = document.getElementById("wishText");

function changeWish() {
    index = (index + 1) % wishes.length;
    wishText.style.opacity = 0;

    setTimeout(() => {
        wishText.textContent = wishes[index];
        wishText.style.opacity = 1;
    }, 300);
}
