const card = document.querySelector(".card");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");

let ratingValue;

const ratingHandler = (e) => {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("active");
    ratingValue = e.target.textContent;
  });

  if (e.target.classList.contains("rating-btn")) {
    e.target.classList.add("active");
  } else {
    e.target.parentElement.classList.add("active");
  }
};

const displayThankYouState = (container, ratingValue) => {
  container.innerHTML = `<div class="card-thank-you-state">
          <div class="top">
            <img
              src="images/illustration-thank-you.svg"
              alt="thank you illustration"
            />
            <p class="rating-msg">You selected ${ratingValue} out of 5</p>
            <h2>Thank you!</h2>
          </div>
          <p class="rating-appreciation">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>`;
};

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", ratingHandler);
});

submitBtn.addEventListener("click", (e) => {
  if (!ratingValue) {
    alert("Please select a rating");
    return;
  }
  displayThankYouState(card, ratingValue);
});
