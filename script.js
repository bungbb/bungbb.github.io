const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const auth_key = urlParams.get("code")
document.getElementById("code").innerHTML = auth_key;
