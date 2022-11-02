const submitButton = document.querySelector("#submit");
const emailAddress = document.querySelector("#email-address");
const labelEmailAddress = document.querySelector("#label-email-address");

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener("click", (event) => {
  if (emailAddress.value === "" || !regexEmail.test(emailAddress.value)) {
    emailAddress.classList.add("border-red");
    emailAddress.classList.add("email-placeholder");
    emailAddress.placeholder = "example@email.com";
    labelEmailAddress.classList.add("display-initial");
    event.preventDefault();
  } else {
    labelEmailAddress.classList.remove("display-initial");
    emailAddress.classList.remove("border-red");
  }
});
