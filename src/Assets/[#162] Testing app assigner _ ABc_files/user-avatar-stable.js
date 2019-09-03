const CDN = '//accounts.freshworks.com/freshworks-components' || '//accounts.freshworks.com/freshworks-components'

var createScriptTag = function (source, cb) {
  var el = document.createElement('script');
  el.setAttribute('src', source);

  el.onload = cb;

  return el;
}

var insertScriptTag = function (el) {
  document.body.append(el)
}

function main() {
  var webcomponentsPolyfillLoader =
    createScriptTag(CDN + '/webcomponentsjs/webcomponents-loader.js', function () {
       WebComponents.waitFor(function () {
         var component = createScriptTag(CDN + '/user-avatar-bundle-stable.js')
         insertScriptTag(component)
       })
    })

  insertScriptTag(webcomponentsPolyfillLoader)
}

if (Element.prototype.hasOwnProperty('previousElementSibling')) {
  
  
  
  main()
}
