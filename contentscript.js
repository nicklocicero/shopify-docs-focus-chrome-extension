chrome.storage.local.get('toggle', function (data) {
  if (data.toggle === false) {
    return;
  } else {
    var element = document.querySelector('header');
    element.parentElement.removeChild(element);
    var sidebar = document.querySelector('nav.sidebar');
    sidebar.parentElement.removeChild(sidebar);
    var toc = document.querySelector('div.toc-container');
    toc.parentElement.removeChild(toc);
  }
});

chrome.storage.onChanged.addListener(function (changes, areaName) {
  if (areaName == "local" && changes.toggle) {
    if (changes.toggle.newValue) {
      var element = document.querySelector('header');
      element.parentElement.removeChild(element);
      var sidebar = document.querySelector('nav.sidebar');
      sidebar.parentElement.removeChild(sidebar);
      var toc = document.querySelector('div.toc-container');
      toc.parentElement.removeChild(toc);
    } else {
      return;
    }
  }
});