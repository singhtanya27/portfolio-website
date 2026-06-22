const cards = document.querySelectorAll(".skill, .project");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-8px)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0)";
});

});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

btn.addEventListener("click", () => {

console.log("Button clicked");

});

});
