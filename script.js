const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const auth_key = urlParams.get("code")
console.log(auth_key);
