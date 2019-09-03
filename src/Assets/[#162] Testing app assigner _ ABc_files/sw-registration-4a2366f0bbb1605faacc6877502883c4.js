(function(){"use strict"
var e=[],r=[],n=function(){caches.keys().then(function(e){e.forEach(function(e){caches.delete(e)})})}
"true"==function(e){var r=void 0,n=void 0,t=void 0,o=document.cookie.split(";")
for(r=0;r<o.length;r++)if(n=o[r].substr(0,o[r].indexOf("=")),t=o[r].substr(o[r].indexOf("=")+1),(n=n.replace(/^\s+|\s+$/g,""))==e)return unescape(t)}("service_worker")?"serviceWorker"in navigator&&navigator.serviceWorker.register("/a/sw.js",{scope:"/a/"}).then(function(r){for(var n=Promise.resolve(),t=0;t<e.length;t++)(function(t){n=n.then(function(){return e[t](r)})})(t)
return n.then(function(){console.log("Service Worker registration succeeded. Scope is "+r.scope)})}).catch(function(e){for(var n=Promise.resolve(),t=0;t<r.length;t++)(function(t){n=n.then(function(){return r[t](e)})})(t)
return n.then(function(){console.log("Service Worker registration failed with "+e)})}):"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(e){var r=!0,t=!1,o=void 0
try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)i.value.unregister()}catch(e){t=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(t)throw o}}n()}).catch(function(e){console.log("Service Worker registration failed: ",e)})})()

//# sourceMappingURL=sw-registration.map