const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const company = e.target[2].value;
  const industry = e.target[3].value;
  const details = e.target[4].value;

  const data = {
    name,
    email,
    company,
    industry,
    details
  };

  axios
    .post("https://api.amp.studio/contact/websites-from-795", data)
    .then(response => {
      if (response.status === 200) {
        success();
      } else {
        error();
      }
    });
});
