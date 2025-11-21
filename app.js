const ratingBtn = document.querySelectorAll(".ratingBtn");
const star = document.getElementById("star");
const submit = document.getElementById("submitBtn");
const mainContainer = document.getElementById("mainContainer");
const hiddenContainer = document.getElementById("hidden");
const ratingSpan = document.getElementById("ratingSpan");

let clicked = false;

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingSpan.textContent = btn.value;
    console.log(ratingSpan.textContent);
    submit.textContent = "SUBMIT"
    clicked = true;
  });
});

submit.addEventListener("click", () => {
  if (clicked) {
    mainContainer.style.display = "none";
    hiddenContainer.style.display = "flex";
  }else{
    submit.textContent = "Please give a rating before submitting"
  }
});
