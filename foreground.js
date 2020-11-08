const removeBrowse = () => {
  console.log("aadasdads")
  const { pathname } = window.location;
  if (pathname === "/") {
    const grid = document.getElementsByTagName(
      "ytd-two-column-browse-results-renderer"
    )[0];
    grid.style.display = "none";
  }
  if (pathname === "/watch") {
    document.getElementById("secondary").style.display = "none";
  }
};

window.onload = () => {
  removeBrowse();
};

chrome.runtime.onMessage.addListener(() => {
  removeBrowse();
});
