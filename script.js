const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const auth_key = urlParams.get("code")
if (auth_key != null){
    document.getElementById("code").innerHTML = auth_key;
}else{
    document.getElementById("code").innerHTML = "ERROR: No code found in URL";
};

function copyButton()
{
  if (auth_key != null){
      navigator.clipboard.writeText(auth_key);
      alert("Copied the text: " + auth_key);
  }else{
      alert("No text to copy");
  }
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + auth_key;
};
