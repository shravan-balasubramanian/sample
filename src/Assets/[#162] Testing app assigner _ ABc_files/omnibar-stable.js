




(function(window) {
  var POLYFILL_CDN_URL = 'https://polyfill.io/v3/polyfill.js?features=es5,es6,fetch,CustomEvent,Element.prototype.remove,Element.prototype.classList,Element.prototype.append&flags=gated&callback=polyfillLoadCompleteCallback';

  
  
  var OMNIBAR_FILE_NAME = 'omnibar-core-stable.js';
  var CDN_URL = 'https://accounts.freshworks.com/';

  createScriptTagAndInsert(POLYFILL_CDN_URL);

  function createScriptTagAndInsert(src, callback) {
    var scriptElem = document.createElement('script');
    scriptElem.src = src;
    if (typeof callback === 'function') {
      scriptElem.onload = callback;
    }
    document.body.appendChild(scriptElem);
  }

  function loadOmnibarCore() {
    var omnibarFilePath = CDN_URL + 'omnibar/omnibar-core-js/' + OMNIBAR_FILE_NAME;;
    createScriptTagAndInsert(omnibarFilePath);
  }

  window.polyfillLoadCompleteCallback = function() {
    loadOmnibarCore();
  };
})(window);