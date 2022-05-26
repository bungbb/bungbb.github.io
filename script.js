const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const auth_key = urlParams.get("code")
document.getElementById("code").innerHTML = auth_key;

function copyButton() {
  var copyText = document.getElementById(auth_key);
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}
