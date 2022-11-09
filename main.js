
var matchTag = "ytd-rich-section-renderer";

document.addEventListener("mouseover", function(event) {
  rets = document.getElementsByTagName(matchTag);
  rets[0].parentNode.removeChild(rets[0]);
});



