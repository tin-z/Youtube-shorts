
var matchTags = ["ytd-rich-section-renderer", "ytd-reel-shelf-renderer"];

document.addEventListener("mouseover", function(event) {

  for (let index = 0; index < matchTags.length; ++index) {
    const matchTag = matchTags[index];
    rets = document.getElementsByTagName(matchTag);
    if (rets.length > 0)
      rets[0].parentNode.removeChild(rets[0]);
  }

});
