// return true if local storage supported
// otherwise return false
function storageSupported() {
  return typeof Storage !== "undefined";
  /* if (typeof Storage !== "undefined") {
        //   // local storage is supported
        //   return true;
        // } else {
        //   // local storage is NOT supported
        //   return false;
         }*/
}

function validateJson() {
  // get the json text from the textarea
  const jsonTextareaText = document.getElementById("jsonInput").value;

  // save user input into local storage
  if (storageSupported()) {
    localStorage.setItem("userInput", jsonTextareaText);
  }

  // get message span
  const messageSpan = document.getElementById("messageDisplay");

  // parse the json text
  // try catch displaying msg on span
  try {
    JSON.parse(jsonTextareaText);
    messageSpan.innerHTML = "<span style='color:green;'>JSON is valid</span>";
  } catch (ex) {
    var message = "Error: " + ex.message;
    messageSpan.innerHTML = "<span style='color:red'>" + message + "</span>";
  }
}

// retrieve user input from local storage
//   and display it in the text area
function initApp() {
  if (storageSupported()) {
    //  retrieve previous user input from local storage
    var jsonText = localStorage.getItem("userInput");

    // display previous user input in the textarea
    if (jsonText != null) {
      var jsonTextarea = (document.getElementById("jsonInput").value =
        jsonText);
    }
  }
}
