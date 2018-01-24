const https = require("https");
const fs = require("fs");
const cron = require("node-cron");

function updateGoogle() {
  var file = fs.createWriteStream("./_site/assets/js/google-min.js");
  var request = https.get(
    "https://www.google-analytics.com/analytics.js",
    response => {
      if (response.statusCode === 200) {
        console.log("200 Successfully Google Analytics code");
        response.pipe(file);
      } else {
        console.log(
          response.statusCode + "Error updating Google Analytics code"
        );
      }
    }
  );
}

function updateFacebook() {
  var file = fs.createWriteStream("./_site/assets/js/facebook-min.js");
  var request = https.get(
    "https://connect.facebook.net/en_US/fbevents.js",
    response => {
      if (response.statusCode === 200) {
        console.log("200 Successfully updated Facebook Pixel code");
        response.pipe(file);
      } else {
        console.log(response.statusCode + "Error updating Facebook Pixel code");
      }
    }
  );
}

updateGoogle();
updateFacebook();

// Every day at 4am, update the analytics script
cron.schedule("0 4 * * *", () => {
  updateGoogle();
  updateFacebook();
});
