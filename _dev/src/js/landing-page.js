const form = document.querySelector("form");
const animate = document.querySelectorAll(".animate");

// Fields
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message");

// Labels
const nameLabel = document.querySelector("#name-label");
const emailLabel = document.querySelector("#email-label");
const messageLabel = document.querySelector("#message-label");

const responseField = document.querySelector("#response");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const company = e.target[2].value;
  const industry = e.target[3].value;
  const message = e.target[4].value;

  const data = {
    name,
    email,
    company,
    industry,
    message
  };

  axios
    .post("http://localhost:9001/contact/landing-page", data)
    .then(response => {
      const errors = response.data;

      if (errors.name) {
        handleError(nameLabel, nameField, "Please enter your name:", false);
      } else {
        handleError(nameLabel, nameField, "Your name:", true);
      }

      if (errors.email) {
        handleError(emailLabel, emailField, "Please enter your email:", false);
      } else {
        handleError(emailLabel, emailField, "Your email:", true);
      }

      if (errors.message) {
        handleError(
          messageLabel,
          messageField,
          "Please enter your message:",
          false
        );
      } else {
        handleError(
          messageLabel,
          messageField,
          "Describe your new website:",
          true
        );
      }

      if (!errors) {
        for (var i = 0; i < animate.length; i++) {
          animate[i].classList.add("success");
        }
      }
    })

    .catch(error => {
      responseField.innerHTML =
        "<img src='/assets/img/error-icon.svg' /> <p class='error'>Error, please try again.</p>";
    });
});

function handleError(label, input, text, success) {
  label.innerHTML = text;
  if (success) {
    label.classList.remove("error");
    input.classList.remove("error");
  } else {
    label.classList.add("error");
    input.classList.add("error");
  }
}
