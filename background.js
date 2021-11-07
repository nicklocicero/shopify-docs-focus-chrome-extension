function getToggle(callback) {
  chrome.storage.local.get('toggle', function(data){
    if(data.toggle === undefined) {
      callback(false);
    } else {
      callback(data.toggle);
    }
  });
}

function setToggle(value, callback) {
  chrome.storage.local.set({toggle : value}, function(){
    if(chrome.runtime.lastError) {
      throw Error(chrome.runtime.lastError);
    } else {
      callback();
    }
  })
}

chrome.action.onClicked.addListener( function(tab) {
  getToggle(function(toggle){
    setToggle(!toggle, function(){
      setIcon(!toggle);
    });
  });
});