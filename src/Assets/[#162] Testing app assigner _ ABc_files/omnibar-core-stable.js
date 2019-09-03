(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unreachable"
return new Error(t)}function e(t,e){if(!t)throw new Error(e||"assertion failure")}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},a=Object.keys
function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]
if(null!==r&&"object"===(void 0===r?"undefined":n(r)))for(var o=a(r),i=0;i<o.length;i++){var s=o[i]
t[s]=r[s]}}return t}function c(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=null
return e}var p=0
function l(t){return t._guid=++p}function h(t){return t._guid||l(t)}function d(){return Object.create(null)}var f=function(){function t(){r(this,t),this.dict=d()}return t.prototype.add=function(t){return"string"==typeof t?this.dict[t]=t:this.dict[h(t)]=t,this},t.prototype.delete=function(t){"string"==typeof t?delete this.dict[t]:t._guid&&delete this.dict[t._guid]},t}(),m=function(){function t(){r(this,t),this.stack=[],this.current=null}return t.prototype.push=function(t){this.current=t,this.stack.push(t)},t.prototype.pop=function(){var t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t},t.prototype.isEmpty=function(){return 0===this.stack.length},o(t,[{key:"size",get:function(){return this.stack.length}}]),t}(),y=function(){function t(){r(this,t),this.clear()}return t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.clear=function(){this._head=this._tail=null},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t.next},t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=e.next},t.prototype.insertBefore=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)},t.prototype.append=function(t){var e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t},t.prototype.remove=function(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t},t}(),g=function(){function t(e,n){r(this,t),this._head=e,this._tail=n}return t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=this.nextNode(e)},t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t===this._tail?null:t.next},t}(),v=(new g(null,null),Object.freeze([])),b=1,w=function(){function t(){r(this,t)}return t.prototype.validate=function(t){return this.value()===t},t}()
w.id=0
var k=[],E=[],_=function(){function t(e,n){r(this,t),this.type=e,this.inner=n}return t.prototype.value=function(){return(0,k[this.type])(this.inner)},t.prototype.validate=function(t){return(0,E[this.type])(this.inner,t)},t}()
function S(t){var e=k.length
k.push(function(t){return t.value()}),E.push(function(t,e){return t.validate(e)}),t.id=e}k.push(function(){return 0}),E.push(function(t,e){return 0===e})
var C=new _(0,null)
k.push(function(){return NaN}),E.push(function(t,e){return NaN===e})
var P=new _(1,null)
k.push(function(){return N}),E.push(function(t,e){return e===N})
new _(2,null)
function O(t){return t.tag===C}function A(t){return t===C}var N=b,L=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N
r(this,e)
var o=s(this,t.call(this))
return o.revision=n,o}return i(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N
return new _(this.id,new e(t))},e.prototype.value=function(){return this.revision},e.prototype.dirty=function(){this.revision=++N},e}(w)
function x(t){for(var e=[],n=0,r=t.length;n<r;n++){var o=t[n].tag
if(o===P)return P
o!==C&&e.push(o)}return R(e)}function T(t){for(var e=[],n=t.head();null!==n;){var r=n.tag
if(r===P)return P
r!==C&&e.push(r),n=t.nextNode(n)}return R(e)}function D(t){for(var e=[],n=0,r=t.length;n<r;n++){var o=t[n]
if(o===P)return P
o!==C&&e.push(o)}return R(e)}function R(t){switch(t.length){case 0:return C
case 1:return t[0]
case 2:return I.create(t[0],t[1])
default:return F.create(t)}}S(L)
var B=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.lastChecked=null,n.lastValue=null,n}return i(e,t),e.prototype.value=function(){var t=this.lastChecked
this.lastValue
return t!==N&&(this.lastChecked=N,this.lastValue=this.compute()),this.lastValue},e.prototype.invalidate=function(){this.lastChecked=null},e}(w),I=function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this))
return i.first=n,i.second=o,i}return i(e,t),e.create=function(t,n){return new _(this.id,new e(t,n))},e.prototype.compute=function(){return Math.max(this.first.value(),this.second.value())},e}(B)
S(I)
var F=function(t){function e(n){r(this,e)
var o=s(this,t.call(this))
return o.tags=n,o}return i(e,t),e.create=function(t){return new _(this.id,new e(t))},e.prototype.compute=function(){for(var t=this.tags,e=-1,n=0;n<t.length;n++){var r=t[n].value()
e=Math.max(r,e)}return e},e}(B)
S(F)
var j=function(t){function e(n){r(this,e)
var o=s(this,t.call(this))
return o.tag=n,o.lastUpdated=b,o}return i(e,t),e.create=function(t){return new _(this.id,new e(t))},e.prototype.compute=function(){return Math.max(this.lastUpdated,this.tag.value())},e.prototype.update=function(t){t!==this.tag&&(this.tag=t,this.lastUpdated=N,this.invalidate())},e}(B)
S(j)
var M=function(){function t(){r(this,t),this.lastRevision=null,this.lastValue=null}return t.prototype.value=function(){var t=this.tag,e=this.lastRevision,n=this.lastValue
return null!==e&&t.validate(e)||(n=this.lastValue=this.compute(),this.lastRevision=t.value()),n},t.prototype.invalidate=function(){this.lastRevision=null},t}(),U=(function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this))
return i.tag=n.tag,i.reference=n,i.mapper=o,i}i(e,t),e.prototype.compute=function(){var t=this.reference
return(0,this.mapper)(t.value())}}(M),function(){function t(e){r(this,t),this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}return t.prototype.peek=function(){return this.initialized?this.lastValue:this.initialize()},t.prototype.revalidate=function(){if(!this.initialized)return this.initialize()
var t=this.reference,e=this.lastRevision,n=t.tag
if(n.validate(e))return H
this.lastRevision=n.value()
var r=this.lastValue,o=t.value()
return o===r?H:(this.lastValue=o,o)},t.prototype.initialize=function(){var t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e},t}()),H="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
var V,z=function(){function t(e){r(this,t),this.inner=e,this.tag=C}return t.prototype.value=function(){return this.inner},t}(),W=function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this,n.valueReferenceFor(o)))
return i.retained=!1,i.seen=!1,i.key=o.key,i.iterable=n,i.memo=n.memoReferenceFor(o),i}return i(e,t),e.prototype.update=function(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)},e.prototype.shouldRemove=function(){return!this.retained},e.prototype.reset=function(){this.retained=!1,this.seen=!1},e}(function t(e){r(this,t),this.next=null,this.prev=null,this.value=e}),q=function(){function t(e){r(this,t),this.iterator=null,this.map=d(),this.list=new y,this.tag=e.tag,this.iterable=e}return t.prototype.isEmpty=function(){return(this.iterator=this.iterable.iterate()).isEmpty()},t.prototype.iterate=function(){var t=void 0
return t=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,t},t.prototype.has=function(t){return!!this.map[t]},t.prototype.get=function(t){return this.map[t]},t.prototype.wasSeen=function(t){var e=this.map[t]
return void 0!==e&&e.seen},t.prototype.append=function(t){var e=this.map,n=this.list,r=this.iterable,o=e[t.key]=new W(r,t)
return n.append(o),o},t.prototype.insertBefore=function(t,e){var n=this.map,r=this.list,o=this.iterable,i=n[t.key]=new W(o,t)
return i.retained=!0,r.insertBefore(i,e),i},t.prototype.move=function(t,e){var n=this.list
t.retained=!0,n.remove(t),n.insertBefore(t,e)},t.prototype.remove=function(t){this.list.remove(t),delete this.map[t.key]},t.prototype.nextNode=function(t){return this.list.nextNode(t)},t.prototype.head=function(){return this.list.head()},t}(),G=function(){function t(e){r(this,t),this.iterator=null
var n=new q(e)
this.artifacts=n}return t.prototype.next=function(){var t=this.artifacts,e=(this.iterator=this.iterator||t.iterate()).next()
return null===e?null:t.append(e)},t}();(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(V||(V={}))
var Y=function(){function t(e){var n=e.target,o=e.artifacts
r(this,t),this.target=n,this.artifacts=o,this.iterator=o.iterate(),this.current=o.head()}return t.prototype.sync=function(){for(var t=V.Append;;)switch(t){case V.Append:t=this.nextAppend()
break
case V.Prune:t=this.nextPrune()
break
case V.Done:return void this.nextDone()}},t.prototype.advanceToKey=function(t){for(var e=this.current,n=this.artifacts,r=e;null!==r&&r.key!==t;)r.seen=!0,r=n.nextNode(r)
null!==r&&(this.current=n.nextNode(r))},t.prototype.nextAppend=function(){var t=this.iterator,e=this.current,n=this.artifacts,r=t.next()
if(null===r)return this.startPrune()
var o=r.key
return null!==e&&e.key===o?this.nextRetain(r):n.has(o)?this.nextMove(r):this.nextInsert(r),V.Append},t.prototype.nextRetain=function(t){var e=this.artifacts,n=this.current;(n=n).update(t),this.current=e.nextNode(n),this.target.retain(t.key,n.value,n.memo)},t.prototype.nextMove=function(t){var e=this.current,n=this.artifacts,r=this.target,o=t.key,i=n.get(t.key)
i.update(t),n.wasSeen(t.key)?(n.move(i,e),r.move(i.key,i.value,i.memo,e?e.key:null)):this.advanceToKey(o)},t.prototype.nextInsert=function(t){var e=this.artifacts,n=this.target,r=this.current,o=e.insertBefore(t,r)
n.insert(o.key,o.value,o.memo,r?r.key:null)},t.prototype.startPrune=function(){return this.current=this.artifacts.head(),V.Prune},t.prototype.nextPrune=function(){var t=this.artifacts,e=this.target,n=this.current
if(null===n)return V.Done
var r=n
return this.current=t.nextNode(r),r.shouldRemove()?(t.remove(r),e.delete(r.key)):r.reset(),V.Prune},t.prototype.nextDone=function(){this.target.done()},t}()
function K(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
var r=e[0],o=e[1],i=e[2]
return"string"==typeof r?function(t,n,r){return X(t,n,r,e)}:i?X(r,o,i,[]):void function(t,e){var n=Symbol(e)
Q(t).trackedProperties[e]=!0,void 0!==t[e]&&t[e]
Object.defineProperty(t,e,{configurable:!0,get:function(){return this[n]},set:function(t){Q(this).dirtyableTagFor(e).inner.dirty(),this[n]=t,tt()}})}(r,o)}function X(t,e,n,r){var o=Q(t)
return o.trackedProperties[e]=!0,o.trackedPropertyDependencies[e]=r||[],{enumerable:!0,configurable:!1,get:n.get,set:function(){Q(this).dirtyableTagFor(e).inner.dirty(),n.set.apply(this,arguments),tt()}}}var J=function(){function t(e){r(this,t),this.tags=d(),this.computedPropertyTags=d(),this.trackedProperties=e?Object.create(e.trackedProperties):d(),this.trackedPropertyDependencies=e?Object.create(e.trackedPropertyDependencies):d()}return t.prototype.tagFor=function(t){var e=this.tags[t]
if(e)return e
var n
return(n=this.trackedPropertyDependencies[t])?this.tags[t]=function(t,e,n){var r=[t.dirtyableTagFor(e)]
if(n&&n.length)for(var o=0;o<n.length;o++)r.push(t.tagFor(n[o]))
return D(r)}(this,t,n):this.tags[t]=L.create()},t.prototype.dirtyableTagFor=function(t){return this.trackedPropertyDependencies[t]?this.computedPropertyTags[t]||(this.computedPropertyTags[t]=L.create()):this.tags[t]||(this.tags[t]=L.create())},t}()
var $=Symbol("ember-object")
function Q(t){var e=t[$]
return e&&function(t,e){return Z.call(t,e)}(t,$)?e:t[$]=new J(e)}var Z=Object.prototype.hasOwnProperty
var tt=function(){};(function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this,i))
return a.target=n,a.key=o,a}i(e,t),e.for=function(t,n){return new e(t,n,"The property '"+n+"' on "+t+" was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.")}})(Error)
function et(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2]
return"object"===(void 0===t?"undefined":n(t))&&t?Q(t).tagFor(e):C}var nt=function(){function t(e){r(this,t),this.debugName=null,this.__args__=null,Object.assign(this,e)}return t.create=function(t){return new this(t)},t.prototype.didInsertElement=function(){},t.prototype.didUpdate=function(){},t.prototype.willDestroy=function(){},t.prototype.destroy=function(){this.willDestroy()},t.prototype.toString=function(){return this.debugName+" component"},o(t,[{key:"element",get:function(){var t=this.bounds
return e(t&&t.firstNode===t.lastNode,"The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes."),t.firstNode}},{key:"args",get:function(){return this.__args__},set:function(t){this.__args__=t,Q(this).dirtyableTagFor("args").inner.dirty()}}]),t}(),rt={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!0,attributeHook:!0,elementHook:!0},ot=function(){function t(e,n,o,i){r(this,t),this.name=e,this.manager=n,this.ComponentClass=o,this.layout=i,this.state={name:e,capabilities:rt,ComponentClass:o,layout:i}}return t.prototype.toJSON=function(){return{GlimmerDebug:'<component-definition name="'+this.name+'">'}},t}(),it=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
r(this,t),this._registry=e,this._resolver=n,this._lookups={},this._factoryDefinitionLookups={}}return t.prototype.factoryFor=function(t){var e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)},t.prototype.lookup=function(t){var e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
var n=this.factoryFor(t)
if(n){if(!1===this._registry.registeredOption(t,"instantiate"))return n.class
var r=n.create()
return e&&r&&(this._lookups[t]=r),r}},t.prototype.defaultInjections=function(t){return{}},t.prototype.buildInjections=function(t){for(var e=this.defaultInjections(t),n=this._registry.registeredInjections(t),r=void 0,o=0;o<n.length;o++)e[(r=n[o]).property]=this.lookup(r.source)
return e},t.prototype.buildFactory=function(t,e){var n=this.buildInjections(t)
return{class:e,create:function(t){var r=Object.assign({},n,t)
return e.create(r)}}},t}(),st=function(){function t(e){r(this,t),this._registrations={},this._registeredOptions={},this._registeredInjections={},e&&e.fallback&&(this._fallback=e.fallback)}return t.prototype.register=function(t,e,n){this._registrations[t]=e,n&&(this._registeredOptions[t]=n)},t.prototype.registration=function(t){var e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e},t.prototype.unregister=function(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]},t.prototype.registerOption=function(t,e,n){var r=this._registeredOptions[t]
r||(r={},this._registeredOptions[t]=r),r[e]=n},t.prototype.registeredOption=function(t,e){var n=void 0,r=this.registeredOptions(t)
return r&&(n=r[e]),void 0===n&&void 0!==this._fallback&&(n=this._fallback.registeredOption(t,e)),n},t.prototype.registeredOptions=function(t){var e=this._registeredOptions[t]
if(void 0===e){var n=t.split(":")[0]
e=this._registeredOptions[n]}return e},t.prototype.unregisterOption=function(t,e){var n=this._registeredOptions[t]
n&&delete n[e]},t.prototype.registerInjection=function(t,e,n){var r=this._registeredInjections[t]
void 0===r&&(this._registeredInjections[t]=r=[]),r.push({property:e,source:n})},t.prototype.registeredInjections=function(t){var e=t.split(":")[0],n=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(n,this._registeredInjections[e]),Array.prototype.push.apply(n,this._registeredInjections[t]),n},t}(),at="__owner__"
function ut(t){return t[at]}function ct(t,e){t[at]=e}var pt,lt=function(){function t(e){r(this,t),this._bounds=e}return o(t,[{key:"firstNode",get:function(){return this._bounds.firstNode()}},{key:"lastNode",get:function(){return this._bounds.lastNode()}}]),t}(),ht=new(function(){function t(){r(this,t),this.evaluateOpcode=c(78).slice()}return t.prototype.add=function(t,e){this.evaluateOpcode[t]=e},t.prototype.evaluate=function(t,e,n){(0,this.evaluateOpcode[n])(t,e)},t}()),dt=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.next=null,n.prev=null,n}return i(e,t),e}(function t(){r(this,t),l(this)});(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1",t[t.v0=8]="v0"})(pt||(pt={}))
var ft,mt=function(t){function e(n){return r(this,e),s(this,t.call(this,n))}return i(e,t),e.create=function(t){return void 0===t?vt:null===t?bt:!0===t?wt:!1===t?kt:"number"==typeof t?new gt(t):new yt(t)},e.prototype.get=function(t){return vt},e}(z),yt=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.lengthReference=null,n}return i(e,t),e.prototype.get=function(e){if("length"===e){var n=this.lengthReference
return null===n&&(n=this.lengthReference=new gt(this.inner.length)),n}return t.prototype.get.call(this,e)},e}(mt),gt=function(t){function e(n){return r(this,e),s(this,t.call(this,n))}return i(e,t),e}(mt),vt=new gt(void 0),bt=new gt(null),wt=new gt(!0),kt=new gt(!1),Et=function(){function t(e){r(this,t),this.inner=e,this.tag=e.tag}return t.prototype.value=function(){return this.toBool(this.inner.value())},t.prototype.toBool=function(t){return!!t},t}(),_t=function(t){function e(n){r(this,e)
var o=s(this,t.call(this))
return o.parts=n,o.tag=x(n),o}return i(e,t),e.prototype.compute=function(){for(var t=new Array,e=0;e<this.parts.length;e++){var n=this.parts[e].value()
null!==n&&void 0!==n&&(t[e]=St(n))}return t.length>0?t.join(""):null},e}(M)
function St(t){return"function"!=typeof t.toString?"":String(t)}function Ct(t){return function(e){return Array.isArray(e)&&e[0]===t}}ht.add(1,function(t,e){var n=e.op1,r=t.stack,o=t.constants.resolveHandle(n)(t,r.pop())
t.loadValue(pt.v0,o)}),ht.add(4,function(t,e){var n=e.op1,r=t.referenceForSymbol(n)
t.stack.push(r)}),ht.add(2,function(t,e){var n=e.op1,r=t.stack.pop()
t.scope().bindSymbol(n,r)}),ht.add(3,function(t,e){var n=e.op1,r=t.stack.pop(),o=t.stack.pop(),i=t.stack.pop(),s=i?[r,o,i]:null
t.scope().bindBlock(n,s)}),ht.add(76,function(t,e){var n=e.op1,r=t.constants.getString(n),o=t.scope().getPartialMap()[r]
void 0===o&&(o=t.getSelf().get(r)),t.stack.push(o)}),ht.add(17,function(t,e){var n=e.op1,r=e.op2
t.pushRootScope(n,!!r)}),ht.add(5,function(t,e){var n=e.op1,r=t.constants.getString(n),o=t.stack.pop()
t.stack.push(o.get(r))}),ht.add(6,function(t,e){var n=e.op1,r=t.stack,o=t.scope().getBlock(n)
o?(r.push(o[2]),r.push(o[1]),r.push(o[0])):(r.push(null),r.push(null),r.push(null))}),ht.add(7,function(t,e){var n=e.op1,r=!!t.scope().getBlock(n)
t.stack.push(r?wt:kt)}),ht.add(8,function(t){var e=t.stack.pop(),n=e&&e.parameters.length
t.stack.push(n?wt:kt)}),ht.add(9,function(t,e){for(var n=e.op1,r=new Array(n),o=n;o>0;o--){r[o-1]=t.stack.pop()}t.stack.push(new _t(r))}),function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.OpenSplattedElement=7]="OpenSplattedElement",t[t.FlushElement=8]="FlushElement",t[t.CloseElement=9]="CloseElement",t[t.StaticAttr=10]="StaticAttr",t[t.DynamicAttr=11]="DynamicAttr",t[t.AttrSplat=12]="AttrSplat",t[t.Yield=13]="Yield",t[t.Partial=14]="Partial",t[t.DynamicArg=15]="DynamicArg",t[t.StaticArg=16]="StaticArg",t[t.TrustingAttr=17]="TrustingAttr",t[t.Debugger=18]="Debugger",t[t.ClientSideStatement=19]="ClientSideStatement",t[t.Unknown=20]="Unknown",t[t.Get=21]="Get",t[t.MaybeLocal=22]="MaybeLocal",t[t.HasBlock=23]="HasBlock",t[t.HasBlockParams=24]="HasBlockParams",t[t.Undefined=25]="Undefined",t[t.Helper=26]="Helper",t[t.Concat=27]="Concat",t[t.ClientSideExpression=28]="ClientSideExpression"}(ft||(ft={}))
var Pt,Ot,At=Ct(ft.Get),Nt=Ct(ft.MaybeLocal);(Ot=Pt||(Pt={}))[Ot.OpenComponentElement=0]="OpenComponentElement",Ot[Ot.DidCreateElement=1]="DidCreateElement",Ot[Ot.SetComponentAttrs=2]="SetComponentAttrs",Ot[Ot.DidRenderLayout=3]="DidRenderLayout",Ot[Ot.Debugger=4]="Debugger"
var Lt=ft,xt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
r(this,t),this.offset=e,this.names=d(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.compile=function(t,e){var n=t[this.offset],r=this.names[n],o=this.funcs[r]
o(t,e)},t}(),Tt=void 0
function Dt(t,e,n){var r=t[1],o=t[2],i=t[3]
n.expr(o),i?n.dynamicAttr(r,i,e):n.dynamicAttr(r,null,e)}var Rt=void 0
var Bt=function t(){r(this,t)
var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new It,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Ft
return t.add("if",function(t,e,n,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),o.expr(t[0]),o.toBoolean(),o.enter(1),o.jumpUnless("ELSE"),o.invokeStaticBlock(n),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStaticBlock(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("unless",function(t,e,n,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),o.expr(t[0]),o.toBoolean(),o.enter(1),o.jumpIf("ELSE"),o.invokeStaticBlock(n),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStaticBlock(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("with",function(t,e,n,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),o.expr(t[0]),o.dup(),o.toBoolean(),o.enter(2),o.jumpUnless("ELSE"),o.invokeStaticBlock(n,1),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStaticBlock(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("each",function(t,e,n,r,o){o.startLabels(),o.pushFrame(),o.returnTo("END"),e&&"key"===e[0][0]?o.expr(e[1][0]):o.pushPrimitiveReference(null),o.expr(t[0]),o.enter(2),o.putIterator(),o.jumpUnless("ELSE"),o.pushFrame(),o.returnTo("ITER"),o.dup(pt.fp,1),o.enterList("BODY"),o.label("ITER"),o.iterate("BREAK"),o.label("BODY"),o.invokeStaticBlock(n,2),o.pop(2),o.exit(),o.return(),o.label("BREAK"),o.exitList(),o.popFrame(),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStaticBlock(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("in-element",function(t,e,n,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #in-element requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END")
for(var i=e[0],s=e[1],a=0;a<i.length;a++){var u=i[a]
if("nextSibling"!==u&&"guid"!==u)throw new Error("SYNTAX ERROR: #in-element does not take a `"+i[0]+"` option")
o.expr(s[a])}o.expr(t[0]),o.dup(),o.enter(4),o.jumpUnless("ELSE"),o.pushRemoteElement(),o.invokeStaticBlock(n),o.popRemoteElement(),o.label("ELSE"),o.exit(),o.return(),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("-with-dynamic-vars",function(t,e,n,r,o){if(e){var i=e[0],s=e[1]
o.compileParams(s),o.pushDynamicScope(),o.bindDynamicScope(i),o.invokeStaticBlock(n),o.popDynamicScope()}else o.invokeStaticBlock(n)}),t.add("component",function(t,e,n,r,o){var i=t[0],s=t.slice(1)
o.dynamicComponent(i,s,e,!0,n,r)}),e.add("component",function(t,e,n,r){var o=e[0],i=e.slice(1)
return r.dynamicComponent(o,i,n,!0,null,null),!0}),{blocks:t,inlines:e}}(),n=e.blocks,o=e.inlines
this.blocks=n,this.inlines=o},It=function(){function t(){r(this,t),this.names=d(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e,n,r,o,i){var s=this.names[t]
void 0===s?(0,this.missing)(t,e,n,r,o,i):(0,this.funcs[s])(e,n,r,o,i)},t}(),Ft=function(){function t(){r(this,t),this.names=d(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e){var n=t[1]
if(!Array.isArray(n))return["expr",n]
var r=void 0,o=void 0,i=void 0
if(n[0]===Lt.Helper)r=n[1],o=n[2],i=n[3]
else{if(n[0]!==Lt.Unknown)return["expr",n]
r=n[1],o=i=null}var s=this.names[r]
if(void 0===s&&this.missing){var a=(0,this.missing)(r,o,i,e)
return!1===a?["expr",n]:a}if(void 0!==s){var u=(0,this.funcs[s])(r,o,i,e)
return!1===u?["expr",n]:u}return["expr",n]},t}()
var jt=function(){function t(e,n,o,i){r(this,t),this.statements=e,this.containingLayout=n,this.options=o,this.symbolTable=i,this.compiled=null,this.statementCompiler=function(){if(Tt)return Tt
var t=Tt=new xt
t.add(Lt.Text,function(t,e){e.text(t[1])}),t.add(Lt.Comment,function(t,e){e.comment(t[1])}),t.add(Lt.CloseElement,function(t,e){e.closeElement()}),t.add(Lt.FlushElement,function(t,e){e.flushElement()}),t.add(Lt.Modifier,function(t,e){var n=e.lookup,r=e.referrer,o=t[1],i=t[2],s=t[3],a=n.lookupModifier(o,r)
if(!a)throw new Error("Compile Error "+o+" is not a modifier: Helpers may not be used in the element form.")
e.modifier(a,i,s)}),t.add(Lt.StaticAttr,function(t,e){var n=t[1],r=t[2],o=t[3]
e.staticAttr(n,o,r)}),t.add(Lt.DynamicAttr,function(t,e){Dt(t,!1,e)}),t.add(Lt.TrustingAttr,function(t,e){Dt(t,!0,e)}),t.add(Lt.OpenElement,function(t,e){e.openPrimitiveElement(t[1])}),t.add(Lt.OpenSplattedElement,function(t,e){e.setComponentAttrs(!0),e.putComponentOperations(),e.openElementWithOperations(t[1])}),t.add(Lt.Component,function(t,e){var n=t[1],r=t[2],o=t[3],i=t[4],s=e.lookup,a=e.referrer,u=s.lookupComponentSpec(n,a)
if(null===u)throw new Error("Compile Error: Cannot find component "+n)
var c=s.getCapabilities(u),p=[[Lt.ClientSideStatement,Pt.SetComponentAttrs,!0]].concat(r,[[Lt.ClientSideStatement,Pt.SetComponentAttrs,!1]]),l=e.inlineBlock({statements:p,parameters:v}),h=e.template(i)
if(!1===c.dynamicLayout){var d=s.getLayout(u)
e.pushComponentDefinition(u),e.invokeStaticComponent(c,d,l,null,o,!1,h&&h)}else e.pushComponentDefinition(u),e.invokeComponent(l,null,o,!1,h&&h)}),t.add(Lt.Partial,function(t,e){var n=t[1],r=t[2],o=e.referrer
e.startLabels(),e.pushFrame(),e.returnTo("END"),e.expr(n),e.dup(),e.enter(2),e.jumpUnless("ELSE"),e.invokePartial(o,e.evalSymbols(),r),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()}),t.add(Lt.Yield,function(t,e){var n=t[1],r=t[2]
e.yield(n,r)}),t.add(Lt.AttrSplat,function(t,e){var n=t[1]
e.yield(n,[]),e.didCreateElement(pt.s0),e.setComponentAttrs(!1)}),t.add(Lt.Debugger,function(t,e){var n=t[1]
e.debugger(e.evalSymbols(),n)}),t.add(Lt.ClientSideStatement,function(t,n){e.compile(t,n)}),t.add(Lt.Append,function(t,e){var n=t[1],r=t[2]
if(!0!==(e.macros.inlines.compile(t,e)||n)){var o=At(n),i=Nt(n)
r?e.guardedAppend(n,!0):o||i?e.guardedAppend(n,!1):(e.expr(n),e.dynamicContent(!1))}}),t.add(Lt.Block,function(t,e){var n=t[1],r=t[2],o=t[3],i=t[4],s=t[5],a=e.template(i),u=e.template(s),c=a&&a,p=u&&u
e.macros.blocks.compile(n,r,o,c,p,e)})
var e=new xt(1)
return e.add(Pt.OpenComponentElement,function(t,e){e.putComponentOperations(),e.openElementWithOperations(t[2])}),e.add(Pt.DidCreateElement,function(t,e){e.didCreateElement(pt.s0)}),e.add(Pt.SetComponentAttrs,function(t,e){e.setComponentAttrs(t[2])}),e.add(Pt.Debugger,function(){}),e.add(Pt.DidRenderLayout,function(t,e){e.didRenderLayout(pt.s0)}),t}()}return t.topLevel=function(e,n){return new t(e.statements,{block:e,referrer:n.referrer},n,{referrer:n.referrer,hasEval:e.hasEval,symbols:e.symbols})},t.prototype.compile=function(){var t=this.compiled
if(null!==t)return t
for(var e=this.options,n=this.statements,r=this.containingLayout,o=r.referrer,i=e.program,s=e.lookup,a=e.macros,u=e.asPartial,c=new(0,e.Builder)(i,s,o,a,r,u),p=0;p<n.length;p++)this.statementCompiler.compile(n[p],c)
var l=c.commit(i.heap)
return this.compiled=l},t}(),Mt=function(){function t(e){r(this,t),this.builder=e}return t.prototype.static=function(t,e){var n=e[0],r=e[1],o=e[2],i=e[3],s=this.builder,a=s.lookup
if(null!==t){var u=a.getCapabilities(t)
if(!1===u.dynamicLayout){var c=a.getLayout(t)
s.pushComponentDefinition(t),s.invokeStaticComponent(u,c,null,n,r,!1,o,i)}else s.pushComponentDefinition(t),s.invokeComponent(null,n,r,!1,o,i)}},t}(),Ut=function(){function t(e){r(this,t),this.buffer=e,this.typePos=0,this.size=0}return t.prototype.encode=function(t){var e=this
if(t>255)throw new Error("Opcode type over 8-bits. Got "+t+".")
for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o]
this.buffer.push(t|r.length<<8),this.typePos=this.buffer.length-1,r.forEach(function(t){if(t>65535)throw new Error("Operand over 16-bits. Got "+t+".")
e.buffer.push(t)}),this.size=this.buffer.length},t.prototype.compact=function(t){return String.fromCharCode.apply(String,t)},t.prototype.patch=function(t,e){if(-1!==this.buffer[t+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[t+1]=e},t}(),Ht=function(){function t(){r(this,t),this.labels=d(),this.targets=[]}return t.prototype.label=function(t,e){this.labels[t]=e},t.prototype.target=function(t,e,n){this.targets.push({at:t,Target:e,target:n})},t.prototype.patch=function(t){for(var e=this.targets,n=this.labels,r=0;r<e.length;r++){var o=e[r],i=o.at,s=n[o.target]-i
t.patch(i,s)}},t}(),Vt=function(){function e(t,n,o,i,s,a){r(this,e),this.program=t,this.lookup=n,this.referrer=o,this.macros=i,this.containingLayout=s,this.asPartial=a,this.encoder=new Ut([]),this.labelsStack=new m,this.isComponentAttrs=!1,this.component=new Mt(this),this.constants=t.constants,this.expressionCompiler=function(){if(Rt)return Rt
var t=Rt=new xt
return t.add(Lt.Unknown,function(t,e){var n=e.lookup,r=e.asPartial,o=e.referrer,i=t[1],s=n.lookupHelper(i,o)
null!==s?e.helper(s,null,null):r?e.resolveMaybeLocal(i):(e.getVariable(0),e.getProperty(i))}),t.add(Lt.Concat,function(t,e){for(var n=t[1],r=0;r<n.length;r++)e.expr(n[r])
e.concat(n.length)}),t.add(Lt.Helper,function(t,e){var n=e.lookup,r=e.referrer,o=t[1],i=t[2],s=t[3]
if("component"!==o){var a=n.lookupHelper(o,r)
if(null===a)throw new Error("Compile Error: "+o+" is not a helper")
e.helper(a,i,s)}else{var u=i[0],c=i.slice(1)
e.curryComponent(u,c,s,!0)}}),t.add(Lt.Get,function(t,e){var n=t[1],r=t[2]
e.getVariable(n)
for(var o=0;o<r.length;o++)e.getProperty(r[o])}),t.add(Lt.MaybeLocal,function(t,e){var n=t[1]
if(e.asPartial){var r=n[0]
n=n.slice(1),e.resolveMaybeLocal(r)}else e.getVariable(0)
for(var o=0;o<n.length;o++)e.getProperty(n[o])}),t.add(Lt.Undefined,function(t,e){return e.pushPrimitiveReference(void 0)}),t.add(Lt.HasBlock,function(t,e){e.hasBlock(t[1])}),t.add(Lt.HasBlockParams,function(t,e){e.hasBlockParams(t[1])}),t}()}return e.prototype.expr=function(t){Array.isArray(t)?this.expressionCompiler.compile(t,this):this.pushPrimitiveReference(t)},e.prototype.upvars=function(t){return c(t)},e.prototype.reserve=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=0;r<e;r++)n[r]=-1
this.push.apply(this,[t].concat(n))},e.prototype.push=function(t){for(var e=this.encoder,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o]
e.encode.apply(e,[t].concat(r))},e.prototype.commit=function(t){this.push(20)
for(var e=this.encoder.buffer,n=t.malloc(),r=0;r<e.length;r++)t.push(e[r])
return t.finishMalloc(n,this.containingLayout.block.symbols.length),n},e.prototype.setComponentAttrs=function(t){this.isComponentAttrs=t},e.prototype.pushArgs=function(t,e){var n=this.constants.stringArray(t)
this.push(61,n,e)},e.prototype.startLabels=function(){this.labelsStack.push(new Ht)},e.prototype.stopLabels=function(){this.labelsStack.pop().patch(this.encoder)},e.prototype.pushComponentDefinition=function(t){this.push(59,this.constants.handle(t))},e.prototype.pushDynamicComponentManager=function(t){this.push(60,this.constants.serializable(t))},e.prototype.prepareArgs=function(t){this.push(63,t)},e.prototype.createComponent=function(t,e,n){var r=(!0===e?1:0)|(!0===n?1:0)<<1
this.push(64,r,t)},e.prototype.registerComponentDestructor=function(t){this.push(65,t)},e.prototype.beginComponentTransaction=function(){this.push(71)},e.prototype.commitComponentTransaction=function(){this.push(72)},e.prototype.putComponentOperations=function(){this.push(66)},e.prototype.getComponentSelf=function(t){this.push(67,t)},e.prototype.getComponentTagName=function(t){this.push(68,t)},e.prototype.getComponentLayout=function(t){this.push(69,t)},e.prototype.invokeComponentLayout=function(){this.push(70)},e.prototype.didCreateElement=function(t){this.push(73,t)},e.prototype.didRenderLayout=function(t){this.push(74,t)},e.prototype.invokePartial=function(t,e,n){var r=this.constants.serializable(t),o=this.constants.stringArray(e),i=this.constants.array(n)
this.push(75,r,o,i)},e.prototype.resolveMaybeLocal=function(t){this.push(76,this.string(t))},e.prototype.debugger=function(t,e){this.push(77,this.constants.stringArray(t),this.constants.array(e))},e.prototype.dynamicContent=function(t){this.push(24,t?1:0)},e.prototype.text=function(t){this.push(22,this.constants.string(t))},e.prototype.openPrimitiveElement=function(t){this.push(25,this.constants.string(t))},e.prototype.openElementWithOperations=function(t){this.push(26,this.constants.string(t))},e.prototype.openDynamicElement=function(){this.push(27)},e.prototype.flushElement=function(){this.push(31)},e.prototype.closeElement=function(){this.push(32)},e.prototype.staticAttr=function(t,e,n){var r=this.constants.string(t),o=e?this.constants.string(e):0
if(this.isComponentAttrs)this.pushPrimitiveReference(n),this.push(30,r,1,o)
else{var i=this.constants.string(n)
this.push(28,r,i,o)}},e.prototype.dynamicAttr=function(t,e,n){var r=this.constants.string(t),o=e?this.constants.string(e):0
this.isComponentAttrs?this.push(30,r,!0===n?1:0,o):this.push(29,r,!0===n?1:0,o)},e.prototype.comment=function(t){var e=this.constants.string(t)
this.push(23,e)},e.prototype.modifier=function(t,e,n){this.pushFrame(),this.compileArgs(e,n,null,!0),this.push(33,this.constants.handle(t)),this.popFrame()},e.prototype.putIterator=function(){this.push(55)},e.prototype.enterList=function(t){this.reserve(53),this.labels.target(this.pos,53,t)},e.prototype.exitList=function(){this.push(54)},e.prototype.iterate=function(t){this.reserve(56),this.labels.target(this.pos,56,t)},e.prototype.setVariable=function(t){this.push(2,t)},e.prototype.setBlock=function(t){this.push(3,t)},e.prototype.getVariable=function(t){this.push(4,t)},e.prototype.getProperty=function(t){this.push(5,this.string(t))},e.prototype.getBlock=function(t){this.push(6,t)},e.prototype.hasBlock=function(t){this.push(7,t)},e.prototype.hasBlockParams=function(t){this.getBlock(t),this.resolveBlock(),this.push(8)},e.prototype.concat=function(t){this.push(9,t)},e.prototype.load=function(t){this.push(15,t)},e.prototype.fetch=function(t){this.push(16,t)},e.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt.sp,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.push(13,t,e)},e.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
return this.push(14,t)},e.prototype.pushRemoteElement=function(){this.push(34)},e.prototype.popRemoteElement=function(){this.push(35)},e.prototype.label=function(t){this.labels.label(t,this.nextPos)},e.prototype.pushRootScope=function(t,e){this.push(17,t,e?1:0)},e.prototype.pushChildScope=function(){this.push(18)},e.prototype.popScope=function(){this.push(19)},e.prototype.returnTo=function(t){this.reserve(21),this.labels.target(this.pos,21,t)},e.prototype.pushDynamicScope=function(){this.push(37)},e.prototype.popDynamicScope=function(){this.push(38)},e.prototype.primitive=function(t){var e=0,r=void 0
switch(void 0===t?"undefined":n(t)){case"number":t%1==0?t>-1?r=t:(r=this.negative(t),e=4):(r=this.float(t),e=1)
break
case"string":r=this.string(t),e=2
break
case"boolean":r=0|t,e=3
break
case"object":r=2,e=3
break
case"undefined":r=3,e=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(11,r<<3|e)},e.prototype.float=function(t){return this.constants.float(t)},e.prototype.negative=function(t){return this.constants.negative(t)},e.prototype.pushPrimitiveReference=function(t){this.primitive(t),this.primitiveReference()},e.prototype.primitiveReference=function(){this.push(12)},e.prototype.helper=function(t,e,n){this.pushFrame(),this.compileArgs(e,n,null,!0),this.push(1,this.constants.handle(t)),this.popFrame(),this.fetch(pt.v0)},e.prototype.bindDynamicScope=function(t){this.push(36,this.names(t))},e.prototype.enter=function(t){this.push(50,t)},e.prototype.exit=function(){this.push(51)},e.prototype.return=function(){this.push(20)},e.prototype.pushFrame=function(){this.push(48)},e.prototype.popFrame=function(){this.push(49)},e.prototype.invokeVirtual=function(){this.push(42)},e.prototype.invokeYield=function(){this.push(44)},e.prototype.toBoolean=function(){this.push(52)},e.prototype.jump=function(t){this.reserve(45),this.labels.target(this.pos,45,t)},e.prototype.jumpIf=function(t){this.reserve(46),this.labels.target(this.pos,46,t)},e.prototype.jumpUnless=function(t){this.reserve(47),this.labels.target(this.pos,47,t)},e.prototype.string=function(t){return this.constants.string(t)},e.prototype.names=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n]
e[n]=this.constants.string(r)}return this.constants.array(e)},e.prototype.symbols=function(t){return this.constants.array(t)},e.prototype.inlineBlock=function(t){var e=t.parameters,n=t.statements,r={parameters:e,referrer:this.containingLayout.referrer},o={program:this.program,macros:this.macros,Builder:this.constructor,lookup:this.lookup,asPartial:this.asPartial,referrer:this.referrer}
return new jt(n,this.containingLayout,o,r)},e.prototype.evalSymbols=function(){var t=this.containingLayout.block
return t.hasEval?t.symbols:null},e.prototype.compileParams=function(t){if(!t)return 0
for(var e=0;e<t.length;e++)this.expr(t[e])
return t.length},e.prototype.compileArgs=function(t,e,n,r){n&&(this.pushYieldableBlock(n.main),this.pushYieldableBlock(n.else),this.pushYieldableBlock(n.attrs))
var o=this.compileParams(t)<<4
r&&(o|=8),n&&(o|=7)
var i=v
if(e){i=e[0]
for(var s=e[1],a=0;a<s.length;a++)this.expr(s[a])}this.pushArgs(i,o)},e.prototype.invokeStaticBlock=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.symbolTable.parameters,r=n.length,o=Math.min(e,r)
if(this.pushFrame(),o){this.pushChildScope()
for(var i=0;i<o;i++)this.dup(pt.fp,e-i),this.setVariable(n[i])}this.pushBlock(t),this.resolveBlock(),this.invokeVirtual(),o&&this.popScope(),this.popFrame()},e.prototype.guardedAppend=function(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(e),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},e.prototype.yield=function(t,e){this.compileArgs(e,null,null,!1),this.getBlock(t),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()},e.prototype.invokeComponent=function(t,e,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments[6]
this.fetch(pt.s0),this.dup(pt.sp,1),this.load(pt.s0),this.pushFrame()
var a={main:o,else:i,attrs:t}
this.compileArgs(e,n,a,r),this.prepareArgs(pt.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(pt.s0,null!==o,null!==i),this.registerComponentDestructor(pt.s0),this.getComponentSelf(pt.s0),s?(this.pushSymbolTable(s.symbolTable),this.pushLayout(s),this.resolveLayout()):this.getComponentLayout(pt.s0),this.invokeComponentLayout(),this.didRenderLayout(pt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(pt.s0)},e.prototype.invokeStaticComponent=function(e,n,r,o,i,s,a){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,c=n.symbolTable
if(c.hasEval||e.prepareArgs)this.invokeComponent(r,o,i,s,a,u,n)
else{this.fetch(pt.s0),this.dup(pt.sp,1),this.load(pt.s0)
var p=c.symbols
e.createArgs&&(this.pushFrame(),this.compileArgs(null,i,null,s)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(pt.s0,null!==a,null!==u),e.createArgs&&this.popFrame(),this.registerComponentDestructor(pt.s0)
var l=[]
this.getComponentSelf(pt.s0),l.push({symbol:0,isBlock:!1})
for(var h=0;h<p.length;h++){var d=p[h]
switch(d.charAt(0)){case"&":var f=null
if("&default"===d)f=a
else if("&inverse"===d)f=u
else{if("&attrs"!==d)throw t()
f=r}f?(this.pushYieldableBlock(f),l.push({symbol:h+1,isBlock:!0})):(this.pushYieldableBlock(null),l.push({symbol:h+1,isBlock:!0}))
break
case"@":if(!i)break
var m=i[0],y=i[1],g=d
s&&(g=d.slice(1))
var v=m.indexOf(g);-1!==v&&(this.expr(y[v]),l.push({symbol:h+1,isBlock:!1}))}}this.pushRootScope(p.length+1,!!(a||u||r))
for(var b=l.length-1;b>=0;b--){var w=l[b],k=w.symbol
w.isBlock?this.setBlock(k):this.setVariable(k)}this.pushFrame(),this.invokeStatic(n),this.didRenderLayout(pt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(pt.s0)}},e.prototype.dynamicComponent=function(t,e,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null
this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,e,n,r,o,i),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},e.prototype.isComponent=function(){this.push(57)},e.prototype.curryComponent=function(t,e,n,r){var o=this.referrer
this.pushFrame(),this.compileArgs(e,n,null,r),this.expr(t),this.push(58,this.constants.serializable(o)),this.popFrame(),this.fetch(pt.v0)},e.prototype.pushSymbolTable=function(t){if(t){var e=this.constants.table(t)
this.push(41,e)}else this.primitive(null)},e.prototype.pushBlockScope=function(){this.push(40)},e.prototype.pushYieldableBlock=function(t){this.pushSymbolTable(t&&t.symbolTable),this.pushBlockScope(),this.pushBlock(t)},e.prototype.template=function(t){return t?this.inlineBlock(t):null},o(e,[{key:"pos",get:function(){return this.encoder.typePos}},{key:"nextPos",get:function(){return this.encoder.size}},{key:"labels",get:function(){return this.labelsStack.current}}]),e}(),zt=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.pushBlock=function(t){t?this.pushOther(t):this.primitive(null)},e.prototype.resolveBlock=function(){this.push(39)},e.prototype.pushLayout=function(t){t?this.pushOther(t):this.primitive(null)},e.prototype.resolveLayout=function(){this.push(39)},e.prototype.invokeStatic=function(t){this.pushOther(t),this.push(39),this.push(42)},e.prototype.pushOther=function(t){this.push(10,this.other(t))},e.prototype.other=function(t){return this.constants.other(t)},e}(Vt),Wt=(function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}i(e,t),e.prototype.pushBlock=function(t){var e=t?t.compile():null
this.primitive(e)},e.prototype.resolveBlock=function(){},e.prototype.pushLayout=function(t){t?this.primitive(t.compile()):this.primitive(null)},e.prototype.resolveLayout=function(){},e.prototype.invokeStatic=function(t){var e=t.compile()
this.push(43,e)}}(Vt),function(){function t(){r(this,t),this.stack=null,this.positional=new qt,this.named=new Yt,this.blocks=new Xt}return t.prototype.setup=function(t,e,n,r,o){this.stack=t
var i=this.named,s=e.length,a=t.sp-s+1
i.setup(t,a,s,e,o)
var u=a-r
this.positional.setup(t,u,r)
var c=this.blocks,p=n.length,l=u-3*p
c.setup(t,l,p,n)},t.prototype.at=function(t){return this.positional.at(t)},t.prototype.realloc=function(t){if(t>0){for(var e=this.positional,n=this.named,r=this.stack,o=e.base+t,i=e.length+n.length-1;i>=0;i--)r.set(r.get(i,e.base),i,o)
e.base+=t,n.base+=t,r.sp+=t}},t.prototype.capture=function(){var t=0===this.positional.length?Qt:this.positional.capture(),e=0===this.named.length?$t:this.named.capture()
return{tag:this.tag,length:this.length,positional:t,named:e}},t.prototype.clear=function(){var t=this.stack,e=this.length
t.pop(e)},o(t,[{key:"tag",get:function(){return x([this.positional,this.named])}},{key:"base",get:function(){return this.blocks.base}},{key:"length",get:function(){return this.positional.length+this.named.length+3*this.blocks.length}}]),t}()),qt=function(){function t(){r(this,t),this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}return t.prototype.setup=function(t,e,n){this.stack=t,this.base=e,this.length=n,0===n?(this._tag=C,this._references=v):(this._tag=null,this._references=null)},t.prototype.at=function(t){var e=this.base,n=this.length,r=this.stack
return t<0||t>=n?vt:r.get(t,e)},t.prototype.capture=function(){return new Gt(this.tag,this.references)},t.prototype.prepend=function(t){var e=t.length
if(e>0){var n=this.base,r=this.length,o=this.stack
this.base=n-=e,this.length=r+e
for(var i=0;i<e;i++)o.set(t.at(i),i,n)
this._tag=null,this._references=null}},o(t,[{key:"tag",get:function(){var t=this._tag
return t||(t=this._tag=x(this.references)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.stack,n=this.base,r=this.length
t=this._references=e.slice(n,n+r)}return t}}]),t}(),Gt=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length
r(this,t),this.tag=e,this.references=n,this.length=o}return t.empty=function(){return new t(C,v,0)},t.prototype.at=function(t){return this.references[t]},t.prototype.value=function(){return this.references.map(this.valueOf)},t.prototype.get=function(t){var e=this.references,n=this.length
if("length"===t)return mt.create(n)
var r=parseInt(t,10)
return r<0||r>=n?vt:e[r]},t.prototype.valueOf=function(t){return t.value()},t}(),Yt=function(){function t(){r(this,t),this.base=0,this.length=0,this._tag=null,this._references=null,this._names=v,this._atNames=v}return t.prototype.setup=function(t,e,n,r,o){this.stack=t,this.base=e,this.length=n,0===n?(this._tag=C,this._references=v,this._names=v,this._atNames=v):(this._tag=null,this._references=null,o?(this._names=r,this._atNames=null):(this._names=null,this._atNames=r))},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.base,r=this.stack,o=(e?this.names:this.atNames).indexOf(t)
return-1===o?vt:r.get(o,n)},t.prototype.capture=function(){return new Kt(this.tag,this.names,this.references)},t.prototype.merge=function(t){var e=t.length
if(e>0){var n=this.names,r=this.length,o=this.stack,i=t.names
Object.isFrozen(n)&&0===n.length&&(n=[])
for(var s=0;s<e;s++){var a=i[s];-1===n.indexOf(a)&&(r=n.push(a),o.push(t.references[s]))}this.length=r,this._tag=null,this._references=null,this._names=n,this._atNames=null}},t.prototype.toSyntheticName=function(t){return t.slice(1)},t.prototype.toAtName=function(t){return"@"+t},o(t,[{key:"tag",get:function(){return x(this.references)}},{key:"names",get:function(){var t=this._names
return t||(t=this._names=this._atNames.map(this.toSyntheticName)),t}},{key:"atNames",get:function(){var t=this._atNames
return t||(t=this._atNames=this._names.map(this.toAtName)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.base,n=this.length,r=this.stack
t=this._references=r.slice(e,e+n)}return t}}]),t}(),Kt=function(){function t(e,n,o){r(this,t),this.tag=e,this.names=n,this.references=o,this.length=n.length,this._map=null}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names,n=this.references,r=e.indexOf(t)
return-1===r?vt:n[r]},t.prototype.value=function(){for(var t=this.names,e=this.references,n=d(),r=0;r<t.length;r++){n[t[r]]=e[r].value()}return n},o(t,[{key:"map",get:function(){var t=this._map
if(!t){var e=this.names,n=this.references
t=this._map=d()
for(var r=0;r<e.length;r++){t[e[r]]=n[r]}}return t}}]),t}(),Xt=function(){function t(){r(this,t),this.internalValues=null,this.internalTag=null,this.names=v,this.length=0,this.base=0}return t.prototype.setup=function(t,e,n,r){this.stack=t,this.names=r,this.base=e,this.length=n,0===n?(this.internalTag=C,this.internalValues=v):(this.internalTag=null,this.internalValues=null)},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.base,n=this.stack,r=this.names,o=r.indexOf(t)
if(-1===r.indexOf(t))return null
var i=n.get(3*o,e),s=n.get(3*o+1,e),a=n.get(3*o+2,e)
return null===a?null:[a,s,i]},t.prototype.capture=function(){return new Jt(this.names,this.values)},o(t,[{key:"values",get:function(){var t=this.internalValues
if(!t){var e=this.base,n=this.length,r=this.stack
t=this.internalValues=r.slice(e,e+3*n)}return t}}]),t}(),Jt=function(){function t(e,n){r(this,t),this.names=e,this.values=n,this.length=e.length}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names.indexOf(t)
return-1===e?null:[this.values[3*e+2],this.values[3*e+1],this.values[3*e]]},t}(),$t=new Kt(C,v,v),Qt=new Gt(C,v),Zt={tag:C,length:0,positional:Qt,named:$t},te="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
function ee(t){return!(!t||!t[te])}var ne=function(){function t(e,n){r(this,t),this.inner=e,this.args=n,this[te]=!0}return t.prototype.unwrap=function(t){t.realloc(this.offset)
for(var e=this;;){var n=e,r=n.args,o=n.inner
if(r&&(t.positional.prepend(r.positional),t.named.merge(r.named)),!ee(o))return o
e=o}},o(t,[{key:"offset",get:function(){var t=this.inner,e=this.args,n=e?e.positional.length:0
return ee(t)?n+t.offset:n}}]),t}(),re=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.create=function(t){return new e(t)},e.prototype.toBool=function(t){return ee(t)},e}(Et)
ht.add(24,function(t,e){var n=e.op1,r=t.stack.pop(),o=r.value(),i=void 0
i=n?t.elements().appendTrustingDynamicContent(o):t.elements().appendCautiousDynamicContent(o),O(r)||t.updateWith(new oe(r,i))})
var oe=function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this))
return i.reference=n,i.content=o,i.tag=n.tag,i}return i(e,t),e.prototype.evaluate=function(t){var e=this.content,n=this.reference
e.update(t.env,n.value())},e}(dt)
ht.add(18,function(t){return t.pushChildScope()}),ht.add(19,function(t){return t.popScope()}),ht.add(37,function(t){return t.pushDynamicScope()}),ht.add(38,function(t){return t.popDynamicScope()}),ht.add(10,function(t,e){var n=e.op1
t.stack.push(t.constants.getOther(n))}),ht.add(11,function(t,e){var n=e.op1,r=t.stack,o=n>>3
switch(7&n){case 0:r.push(o)
break
case 1:r.push(t.constants.getFloat(o))
break
case 2:r.push(t.constants.getString(o))
break
case 3:switch(o){case 0:r.push(!1)
break
case 1:r.push(!0)
break
case 2:r.push(null)
break
case 3:r.push(void 0)}break
case 4:r.push(t.constants.getNegative(o))}}),ht.add(12,function(t){var e=t.stack
e.push(mt.create(e.pop()))}),ht.add(13,function(t,e){var n=e.op1,r=e.op2,o=t.fetchValue(n)-r
t.stack.dup(o)}),ht.add(14,function(t,e){var n=e.op1
t.stack.pop(n)}),ht.add(15,function(t,e){var n=e.op1
t.load(n)}),ht.add(16,function(t,e){var n=e.op1
t.fetch(n)}),ht.add(36,function(t,e){var n=e.op1,r=t.constants.getArray(n)
t.bindDynamicScope(r)}),ht.add(48,function(t){t.pushFrame()}),ht.add(49,function(t){t.popFrame()}),ht.add(50,function(t,e){var n=e.op1
t.enter(n)}),ht.add(51,function(t){t.exit()}),ht.add(41,function(t,e){var n=e.op1
t.stack.push(t.constants.getSymbolTable(n))}),ht.add(40,function(t){t.stack.push(t.scope())}),ht.add(39,function(t){var e=t.stack,n=e.pop()
e.push(n?n.compile():null)}),ht.add(42,function(t){t.call(t.stack.pop())}),ht.add(43,function(t,e){var n=e.op1
t.call(n)}),ht.add(44,function(t){var e=t.stack,n=e.pop(),r=e.pop(),o=e.pop(),i=e.pop()
if(null===o)return t.pushFrame(),void t.pushScope(r)
var s=r,a=o.parameters,u=a.length
if(u>0){s=s.child()
for(var c=0;c<u;c++)s.bindSymbol(a[c],i.at(c))}t.pushFrame(),t.pushScope(s),t.call(n)}),ht.add(45,function(t,e){var n=e.op1
t.goto(n)}),ht.add(46,function(t,e){var n=e.op1,r=t.stack.pop()
if(O(r))r.value()&&t.goto(n)
else{var o=new U(r)
o.peek()&&t.goto(n),t.updateWith(new ie(o))}}),ht.add(47,function(t,e){var n=e.op1,r=t.stack.pop()
if(O(r))r.value()||t.goto(n)
else{var o=new U(r)
o.peek()||t.goto(n),t.updateWith(new ie(o))}}),ht.add(20,function(t){t.return()}),ht.add(21,function(t,e){var n=e.op1
t.returnTo(n)}),ht.add(52,function(t){var e=t.env,n=t.stack
n.push(e.toConditionalReference(n.pop()))})
var ie=function(t){function e(n){r(this,e)
var o=s(this,t.call(this))
return o.type="assert",o.tag=n.tag,o.cache=n,o}return i(e,t),e.prototype.evaluate=function(t){var e=this.cache
e.revalidate()!==H&&t.throw()},e}(dt),se=function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this))
return i.target=o,i.type="jump-if-not-modified",i.tag=n,i.lastRevision=n.value(),i}return i(e,t),e.prototype.evaluate=function(t){var e=this.tag,n=this.target,r=this.lastRevision
!t.alwaysRevalidate&&e.validate(r)&&t.goto(n)},e.prototype.didModify=function(){this.lastRevision=this.tag.value()},e}(dt),ae=function(t){function e(n){r(this,e)
var o=s(this,t.call(this))
return o.target=n,o.type="did-modify",o.tag=C,o}return i(e,t),e.prototype.evaluate=function(){this.target.didModify()},e}(dt),ue=function(){function t(e){r(this,t),this.tag=C,this.type="label",this.label=null,this.prev=null,this.next=null,l(this),this.label=e}return t.prototype.evaluate=function(){},t.prototype.inspect=function(){return this.label+" ["+this._guid+"]"},t}()
ht.add(22,function(t,e){var n=e.op1
t.elements().appendText(t.constants.getString(n))}),ht.add(26,function(t,e){var n=e.op1,r=t.constants.getString(n)
t.elements().openElement(r)}),ht.add(23,function(t,e){var n=e.op1
t.elements().appendComment(t.constants.getString(n))}),ht.add(25,function(t,e){var n=e.op1
t.elements().openElement(t.constants.getString(n))}),ht.add(27,function(t){var e=t.stack.pop().value()
t.elements().openElement(e)}),ht.add(34,function(t){var e=t.stack.pop(),n=t.stack.pop(),r=void 0,o=void 0,i=t.stack.pop().value()
if(O(e))r=e.value()
else{var s=new U(e)
r=s.peek(),t.updateWith(new ie(s))}if(O(n))o=n.value()
else{var a=new U(n)
o=a.peek(),t.updateWith(new ie(a))}t.elements().pushRemoteElement(r,i,o)}),ht.add(35,function(t){t.elements().popRemoteElement()}),ht.add(31,function(t){var e=t.fetchValue(pt.t0)
e&&(e.flush(t),t.loadValue(pt.t0,null)),t.elements().flushElement()}),ht.add(32,function(t){t.elements().closeElement()}),ht.add(33,function(t,e){var n=e.op1,r=t.constants.resolveHandle(n),o=t.stack.pop(),i=t.elements(),s=i.constructing,a=i.updateOperations,u=t.dynamicScope(),c=r.create(s,o,u,a)
t.env.scheduleInstallModifier(c,r)
var p=r.getDestructor(c)
p&&t.newDestroyable(p)
var l=r.getTag(c)
A(l)||t.updateWith(new ce(l,r,c))})
var ce=function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this))
return a.tag=n,a.manager=o,a.modifier=i,a.type="update-modifier",a.lastUpdated=n.value(),a}return i(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.modifier,r=this.tag,o=this.lastUpdated
r.validate(o)||(t.env.scheduleUpdateModifier(n,e),this.lastUpdated=r.value())},e}(dt)
ht.add(28,function(t,e){var n=e.op1,r=e.op2,o=e.op3,i=t.constants.getString(n),s=t.constants.getString(r),a=o?t.constants.getString(o):null
t.elements().setStaticAttribute(i,s,a)}),ht.add(29,function(t,e){var n=e.op1,r=e.op2,o=e.op3,i=t.constants.getString(n),s=t.stack.pop(),a=s.value(),u=o?t.constants.getString(o):null,c=t.elements().setDynamicAttribute(i,a,!!r,u)
O(s)||t.updateWith(new pe(s,c))})
var pe=function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this))
return i.reference=n,i.attribute=o,i.type="patch-element",i.tag=n.tag,i.lastRevision=i.tag.value(),i}return i(e,t),e.prototype.evaluate=function(t){var e=this.attribute,n=this.reference,r=this.tag
r.validate(this.lastRevision)||(this.lastRevision=r.value(),e.update(n.value(),t.env))},e}(dt)
function le(t,e,n){var r=t.lookupComponent(e,n)
return r}var he=function(){function t(e,n,o,i){r(this,t),this.inner=e,this.resolver=n,this.meta=o,this.args=i,this.tag=e.tag,this.lastValue=null,this.lastDefinition=null}return t.prototype.value=function(){var t=this.inner,e=this.lastValue,n=t.value()
if(n===e)return this.lastDefinition
var r=null
if(ee(n))r=n
else if("string"==typeof n&&n){r=le(this.resolver,n,this.meta)}return r=this.curry(r),this.lastValue=n,this.lastDefinition=r,r},t.prototype.get=function(){return vt},t.prototype.curry=function(t){var e=this.args
return!e&&ee(t)?t:t?new ne(t,e):null},t}()
function de(t){return fe(t)?"":String(t)}function fe(t){return null===t||void 0===t||"function"!=typeof t.toString}function me(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t&&"function"==typeof t.toHTML}function ye(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t&&"number"==typeof t.nodeType}function ge(t){return ye(t)&&11===t.nodeType}function ve(t){return"string"==typeof t}var be=function(){function t(e){r(this,t),this.list=e,this.tag=x(e),this.list=e}return t.prototype.value=function(){for(var t=[],e=this.list,n=0;n<e.length;n++){var r=de(e[n].value())
r&&t.push(r)}return 0===t.length?null:t.join(" ")},t}(),we=new Wt
ht.add(57,function(t){var e=t.stack,n=e.pop()
e.push(re.create(n))}),ht.add(58,function(t,e){var n=e.op1,r=t.stack,o=r.pop(),i=r.pop(),s=null
i.length&&(s=i.capture())
var a=t.constants.getSerializable(n),u=t.constants.resolver
t.loadValue(pt.v0,new he(o,u,a,s))}),ht.add(59,function(t,e){var n=e.op1,r=t.constants.resolveHandle(n),o=r.manager
t.stack.push({definition:r,manager:o,state:null})}),ht.add(60,function(e,n){var r=n.op1,o=e.stack,i=o.pop().value(),s=void 0
if("string"==typeof i){var a=e.constants
s=le(e.constants.resolver,i,a.getSerializable(r))}else{if(!ee(i))throw t()
s=i}o.push({definition:s,manager:null,state:null})}),ht.add(61,function(t,e){var n=e.op1,r=e.op2,o=t.stack,i=t.constants.getStringArray(n),s=r>>4,a=8&r,u=[]
4&r&&u.push("main"),2&r&&u.push("else"),1&r&&u.push("attrs"),we.setup(o,i,u,s,!!a),o.push(we)}),ht.add(63,function(t,e){var n=e.op1,r=t.stack,o=t.fetchValue(n),i=o.definition,s=void 0
ee(i)?(s=r.pop(),i=o.definition=i.unwrap(s)):s=r.pop()
var a=i,u=a.manager,c=a.state
if(o.manager=i.manager,!0===u.getCapabilities(c).prepareArgs){var p=s.blocks.values,l=s.blocks.names,h=u.prepareArgs(c,s)
if(h){s.clear()
for(var d=0;d<p.length;d++)r.push(p[d])
for(var f=h.positional,m=h.named,y=f.length,g=0;g<y;g++)r.push(f[g])
for(var v=Object.keys(m),b=0;b<v.length;b++)r.push(m[v[b]])
s.setup(r,v,l,y,!0)}r.push(s)}else r.push(s)}),ht.add(64,function(t,e){var n=e.op1,r=e.op2,o=t.dynamicScope(),i=t.fetchValue(r),s=i.definition,a=i.manager,u=1&n,c=null
a.getCapabilities(s.state).createArgs&&(c=t.stack.peek())
var p=a.create(t.env,s.state,c,o,t.getSelf(),!!u)
i.state=p
var l=a.getTag(p)
A(l)||t.updateWith(new Ee(l,p,a,o))}),ht.add(65,function(t,e){var n=e.op1,r=t.fetchValue(n),o=r.manager,i=r.state,s=o.getDestructor(i)
s&&t.newDestroyable(s)}),ht.add(71,function(t){t.beginCacheGroup(),t.elements().pushSimpleBlock()}),ht.add(66,function(t){t.loadValue(pt.t0,new ke)}),ht.add(30,function(t,e){var n=e.op1,r=e.op2,o=e.op3,i=t.constants.getString(n),s=t.stack.pop(),a=o?t.constants.getString(o):null
t.fetchValue(pt.t0).setAttribute(i,s,!!r,a)})
var ke=function(){function t(){r(this,t),this.attributes=d(),this.classes=[]}return t.prototype.setAttribute=function(t,e,n,r){var o={value:e,namespace:r,trusting:n}
"class"===t&&this.classes.push(e),this.attributes[t]=o},t.prototype.flush=function(t){for(var e in this.attributes){var n=this.attributes[e],r=n.value,o=n.namespace,i=n.trusting
"class"===e&&(r=new be(this.classes))
var s=t.elements().setDynamicAttribute(e,r.value(),i,o)
O(r)||t.updateWith(new pe(r,s))}},t}()
ht.add(73,function(t,e){var n=e.op1,r=t.fetchValue(n),o=r.definition,i=r.state,s=o.manager,a=t.fetchValue(pt.t0)
s.didCreateElement(i,t.elements().expectConstructing("DidCreateElementOpcode#evaluate"),a)}),ht.add(67,function(t,e){var n=e.op1,r=t.fetchValue(n),o=r.definition,i=r.state,s=o.manager
t.stack.push(s.getSelf(i))}),ht.add(68,function(t,e){var n=e.op1,r=t.fetchValue(n),o=r.definition,i=r.state,s=o.manager
t.stack.push(s.getTagName(i))}),ht.add(69,function(e,n){var r=n.op1,o=e.fetchValue(r),i=o.manager,s=o.definition,a=e.constants.resolver,u=e.stack,c=o.state,p=s.state,l=void 0
if(function(t,e){return!1===e.getCapabilities(t).dynamicLayout}(p,i))l=i.getLayout(p,a)
else{if(!function(t,e){return!0===e.getCapabilities(t).dynamicLayout}(p,i))throw t()
l=i.getDynamicLayout(c,a)}u.push(l.symbolTable),u.push(l.handle)}),ht.add(70,function(t){var e=t.stack,n=e.pop(),r=e.pop(),o=r.symbols,i=r.hasEval,s=t.pushRootScope(o.length+1,!0)
s.bindSelf(e.pop())
var a=t.stack.pop(),u=null
i&&(o.indexOf("$eval")+1,u=d())
for(var c=a.named.atNames,p=c.length-1;p>=0;p--){var l=c[p],h=o.indexOf(c[p]),f=a.named.get(l,!1);-1!==h&&s.bindSymbol(h+1,f),i&&(u[l]=f)}var m=function(t,e){var n=o.indexOf(t),r=y.get(e);-1!==n&&s.bindBlock(n+1,r),u&&(u[t]=r)},y=a.blocks
m("&attrs","attrs"),m("&inverse","else"),m("&default","main"),u&&s.bindEvalScope(u),t.call(n)}),ht.add(74,function(t,e){var n=e.op1,r=t.fetchValue(n),o=r.manager,i=r.state,s=t.elements().popBlock()
o.didRenderLayout(i,s),t.env.didCreate(i,o),t.updateWith(new _e(o,i,s))}),ht.add(72,function(t){t.commitCacheGroup()})
var Ee=function(t){function e(n,o,i,a){r(this,e)
var u=s(this,t.call(this))
return u.tag=n,u.component=o,u.manager=i,u.dynamicScope=a,u.type="update-component",u}return i(e,t),e.prototype.evaluate=function(t){var e=this.component,n=this.manager,r=this.dynamicScope
n.update(e,r)},e}(dt),_e=function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this))
return a.manager=n,a.component=o,a.bounds=i,a.type="did-update-layout",a.tag=C,a}return i(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.component,r=this.bounds
e.didUpdateLayout(n,r),t.env.didUpdate(n,e)},e}(dt)
var Se=function(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")},Ce=function(){function t(e,n,o){r(this,t),this.scope=e,this.locals=d()
for(var i=0;i<o.length;i++){var s=o[i],a=n[s-1],u=e.getSymbol(s)
this.locals[a]=u}}return t.prototype.get=function(t){var e=this.scope,n=this.locals,r=t.split("."),o=t.split("."),i=o[0],s=o.slice(1),a=e.getEvalScope(),u=void 0
return"this"===i?u=e.getSelf():n[i]?u=n[i]:0===i.indexOf("@")&&a[i]?u=a[i]:(u=this.scope.getSelf(),s=r),s.reduce(function(t,e){return t.get(e)},u)},t}()
ht.add(77,function(t,e){var n=e.op1,r=e.op2,o=t.constants.getStringArray(n),i=t.constants.getArray(r),s=new Ce(t.scope(),o,i)
Se(t.getSelf().value(),function(t){return s.get(t).value()})}),ht.add(75,function(t,e){var n=e.op1,r=e.op2,o=e.op3,i=t.constants,s=t.constants.resolver,a=t.stack.pop().value(),u=i.getSerializable(n),c=i.getStringArray(r),p=i.getArray(o),l=s.lookupPartial(a,u),h=s.resolve(l).getPartial(),f=h.symbolTable,m=h.handle,y=f.symbols,g=t.scope(),v=t.pushRootScope(y.length,!1)
v.bindCallerScope(g.getCallerScope()),v.bindEvalScope(g.getEvalScope()),v.bindSelf(g.getSelf())
for(var b=d(),w=0;w<p.length;w++){var k=p[w],E=c[k-1],_=g.getSymbol(k)
b[E]=_}for(var S=g.getEvalScope(),C=0;C<y.length;C++){var P=C+1,O=S[y[C]]
void 0!==O&&v.bind(P,O)}v.bindPartialMap(b),t.pushFrame(),t.call(m)})
var Pe=function(){function t(e){r(this,t),this.tag=e.tag,this.artifacts=e}return t.prototype.value=function(){return!this.artifacts.isEmpty()},t}()
ht.add(55,function(t){var e=t.stack,n=e.pop(),r=e.pop(),o=t.env.iterableFor(n,r.value()),i=new G(o)
e.push(i),e.push(new Pe(i.artifacts))}),ht.add(53,function(t,e){var n=e.op1
t.enterList(n)}),ht.add(54,function(t){t.exitList()}),ht.add(56,function(t,e){var n=e.op1,r=t.stack.peek().next()
if(r){var o=t.iterate(r.memo,r.value)
t.enterItem(r.key,o)}else t.goto(n)})
var Oe=function t(e,n){r(this,t),this.element=e,this.nextSibling=n},Ae=function(){function t(e,n,o){r(this,t),this.parentNode=e,this.first=n,this.last=o}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.first},t.prototype.lastNode=function(){return this.last},t}(),Ne=function(){function t(e,n){r(this,t),this.parentNode=e,this.node=n}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.node},t.prototype.lastNode=function(){return this.node},t}()
function Le(t,e,n){return new Ae(t,e,n)}function xe(t,e){return new Ne(t,e)}function Te(t,e){for(var n=t.parentElement(),r=t.firstNode(),o=t.lastNode(),i=r;i;){var s=i.nextSibling
if(n.insertBefore(i,e),i===o)return s
i=s}return null}function De(t){for(var e=t.parentElement(),n=t.firstNode(),r=t.lastNode(),o=n;o;){var i=o.nextSibling
if(e.removeChild(o),o===r)return i
o=i}return null}var Re="http://www.w3.org/2000/svg"
function Be(t,e,n){if(!t)return e
if(!function(t,e){var n=t.createElementNS(e,"svg")
try{n.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==n.childNodes.length||n.firstChild.namespaceURI!==Re}}(t,n))return e
var o=t.createElement("div")
return function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.insertHTMLBefore=function(e,r,i){return null===i||""===i?t.prototype.insertHTMLBefore.call(this,e,r,i):e.namespaceURI!==n?t.prototype.insertHTMLBefore.call(this,e,r,i):function(t,e,n,r){var o="<svg>"+n+"</svg>"
e.innerHTML=o
var i=function(t,e,n){var r=t.firstChild,o=null,i=r
for(;i;)o=i,i=i.nextSibling,e.insertBefore(o,n)
return[r,o]}(e.firstChild,t,r),s=i[0],a=i[1]
return new Ae(t,s,a)}(e,o,i,r)},e}(e)}function Ie(t,e){return t&&function(t){var e=t.createElement("div")
if(e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2===e.childNodes.length)return!1
return!0}(t)?function(t){function e(n){r(this,e)
var o=s(this,t.call(this,n))
return o.uselessComment=n.createComment(""),o}return i(e,t),e.prototype.insertHTMLBefore=function(e,n,r){if(null===r)return t.prototype.insertHTMLBefore.call(this,e,n,r)
var o=!1,i=n?n.previousSibling:e.lastChild
i&&i instanceof Text&&(o=!0,e.insertBefore(this.uselessComment,n))
var s=t.prototype.insertHTMLBefore.call(this,e,n,r)
return o&&e.removeChild(this.uselessComment),s},e}(e):e}var Fe="http://www.w3.org/2000/svg",je={foreignObject:1,desc:1,title:1},Me=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(function(t){return Me[t]=1})
var Ue="undefined"==typeof document?null:document
var He,Ve=function(){function t(e){r(this,t),this.document=e,this.setupUselessElement()}return t.prototype.setupUselessElement=function(){this.uselessElement=this.document.createElement("div")},t.prototype.createElement=function(t,e){var n=void 0,r=void 0
if(e?(n=e.namespaceURI===Fe||"svg"===t,r=je[e.tagName]):(n="svg"===t,r=!1),n&&!r){if(Me[t])throw new Error("Cannot create a "+t+" inside an SVG context")
return this.document.createElementNS(Fe,t)}return this.document.createElement(t)},t.prototype.insertBefore=function(t,e,n){t.insertBefore(e,n)},t.prototype.insertHTMLBefore=function(t,e,n){return function(t,e,n,r){var o=e,i=t,s=n,a=s?s.previousSibling:o.lastChild,u=void 0
if(null===r||""===r)return new Ae(o,null,null)
null===s?(o.insertAdjacentHTML("beforeend",r),u=o.lastChild):s instanceof HTMLElement?(s.insertAdjacentHTML("beforebegin",r),u=s.previousSibling):(o.insertBefore(i,s),i.insertAdjacentHTML("beforebegin",r),u=i.previousSibling,o.removeChild(i))
var c=a?a.nextSibling:o.firstChild
return new Ae(o,c,u)}(this.uselessElement,t,e,n)},t.prototype.createTextNode=function(t){return this.document.createTextNode(t)},t.prototype.createComment=function(t){return this.document.createComment(t)},t}();(function(t){var e=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.createElementNS=function(t,e){return this.document.createElementNS(t,e)},e.prototype.setAttribute=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
r?t.setAttributeNS(r,e,n):t.setAttribute(e,n)},e}(Ve)
t.TreeConstruction=e
var n=e
n=Ie(Ue,n),n=Be(Ue,n,Fe),t.DOMTreeConstruction=n})(He||(He={}))
var ze=function(t){function e(n){r(this,e)
var o=s(this,t.call(this,n))
return o.document=n,o.namespace=null,o}return i(e,t),e.prototype.setAttribute=function(t,e,n){t.setAttribute(e,n)},e.prototype.removeAttribute=function(t,e){t.removeAttribute(e)},e.prototype.insertAfter=function(t,e,n){this.insertBefore(t,e,n.nextSibling)},e}(Ve)
var We=ze
We=Ie(Ue,We)
var qe=We=Be(Ue,We,Fe),Ge=He.DOMTreeConstruction,Ye=["javascript:","vbscript:"],Ke=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],Xe=["EMBED"],Je=["href","src","background","action"],$e=["src"]
function Qe(t,e){return-1!==t.indexOf(e)}function Ze(t,e){return(null===t||Qe(Ke,t))&&Qe(Je,e)}function tn(t,e){return null!==t&&(Qe(Xe,t)&&Qe($e,e))}function en(t,e){return Ze(t,e)||tn(t,e)}function nn(t,e,n,r){var o=null
if(null===r||void 0===r)return r
if(me(r))return r.toHTML()
o=e?e.tagName.toUpperCase():null
var i=de(r)
if(Ze(o,n)){var s=t.protocolForURL(i)
if(Qe(Ye,s))return"unsafe:"+i}return tn(o,n)?"unsafe:"+i:i}function rn(t,e){var n,r,o,i=void 0,s=void 0
if(e in t)s=e,i="prop"
else{var a=e.toLowerCase()
a in t?(i="prop",s=a):(i="attr",s=e)}return"prop"===i&&("style"===s.toLowerCase()||(n=t.tagName,r=s,(o=on[n.toUpperCase()])&&o[r.toLowerCase()]))&&(i="attr"),{normalized:s,type:i}}var on={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
function sn(t,e){var n=t.tagName
if(t.namespaceURI===Fe)return an(n,e)
var r=rn(t,e),o=r.type,i=r.normalized
return"attr"===o?an(n,i):function(t,e){if(en(t,e))return ln
if(function(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}(t,e))return dn
if(function(t,e){return"OPTION"===t&&"selected"===e}(t,e))return fn
return pn}(n,i)}function an(t,e){return en(t,e)?hn:cn}var un=function t(e){r(this,t),this.attribute=e},cn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.set=function(t,e,n){var r=mn(e)
if(null!==r){var o=this.attribute,i=o.name,s=o.namespace
t.__setAttribute(i,r,s)}},e.prototype.update=function(t,e){var n=mn(t),r=this.attribute,o=r.element,i=r.name
null===n?o.removeAttribute(i):o.setAttribute(i,n)},e}(un),pn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.set=function(t,e,n){if(null!==e&&void 0!==e){var r=this.attribute.name
this.value=e,t.__setProperty(r,e)}},e.prototype.update=function(t,e){var n=this.attribute,r=n.element,o=n.name
this.value!==t&&(r[o]=this.value=t,null!==t&&void 0!==t||this.removeAttribute())},e.prototype.removeAttribute=function(){var t=this.attribute,e=t.element,n=t.name,r=t.namespace
r?e.removeAttributeNS(r,n):e.removeAttribute(n)},e}(un),ln=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.set=function(e,n,r){var o=this.attribute,i=nn(r,o.element,o.name,n)
t.prototype.set.call(this,e,i,r)},e.prototype.update=function(e,n){var r=this.attribute,o=nn(n,r.element,r.name,e)
t.prototype.update.call(this,o,n)},e}(pn),hn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.set=function(e,n,r){var o=this.attribute,i=nn(r,o.element,o.name,n)
t.prototype.set.call(this,e,i,r)},e.prototype.update=function(e,n){var r=this.attribute,o=nn(n,r.element,r.name,e)
t.prototype.update.call(this,o,n)},e}(cn),dn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.set=function(t,e){t.__setProperty("value",de(e))},e.prototype.update=function(t){var e=this.attribute.element,n=e.value,r=de(t)
n!==r&&(e.value=r)},e}(pn),fn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.set=function(t,e){null!==e&&void 0!==e&&!1!==e&&t.__setProperty("selected",!0)},e.prototype.update=function(t){var e=this.attribute.element
e.selected=!!t},e}(pn)
function mn(t){return!1===t||void 0===t||null===t||void 0===t.toString?null:!0===t?"":"function"==typeof t?null:String(t)}var yn=function(){function t(e,n,o,i){r(this,t),this.slots=e,this.callerScope=n,this.evalScope=o,this.partialMap=i}return t.root=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=new Array(n+1),o=0;o<=n;o++)r[o]=vt
return new t(r,null,null,null).init({self:e})},t.sized=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=new Array(e+1),r=0;r<=e;r++)n[r]=vt
return new t(n,null,null,null)},t.prototype.init=function(t){var e=t.self
return this.slots[0]=e,this},t.prototype.getSelf=function(){return this.get(0)},t.prototype.getSymbol=function(t){return this.get(t)},t.prototype.getBlock=function(t){return this.get(t)},t.prototype.getEvalScope=function(){return this.evalScope},t.prototype.getPartialMap=function(){return this.partialMap},t.prototype.bind=function(t,e){this.set(t,e)},t.prototype.bindSelf=function(t){this.set(0,t)},t.prototype.bindSymbol=function(t,e){this.set(t,e)},t.prototype.bindBlock=function(t,e){this.set(t,e)},t.prototype.bindEvalScope=function(t){this.evalScope=t},t.prototype.bindPartialMap=function(t){this.partialMap=t},t.prototype.bindCallerScope=function(t){this.callerScope=t},t.prototype.getCallerScope=function(){return this.callerScope},t.prototype.child=function(){return new t(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)},t.prototype.get=function(t){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
return this.slots[t]},t.prototype.set=function(t,e){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
this.slots[t]=e},t}(),gn=function(){function t(){r(this,t),this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}return t.prototype.didCreate=function(t,e){this.createdComponents.push(t),this.createdManagers.push(e)},t.prototype.didUpdate=function(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)},t.prototype.scheduleInstallModifier=function(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)},t.prototype.scheduleUpdateModifier=function(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)},t.prototype.didDestroy=function(t){this.destructors.push(t)},t.prototype.commit=function(){for(var t=this.createdComponents,e=this.createdManagers,n=0;n<t.length;n++){var r=t[n]
e[n].didCreate(r)}for(var o=this.updatedComponents,i=this.updatedManagers,s=0;s<o.length;s++){var a=o[s]
i[s].didUpdate(a)}for(var u=this.destructors,c=0;c<u.length;c++)u[c].destroy()
for(var p=this.scheduledInstallManagers,l=this.scheduledInstallModifiers,h=0;h<p.length;h++){var d=p[h],f=l[h]
d.install(f)}for(var m=this.scheduledUpdateModifierManagers,y=this.scheduledUpdateModifiers,g=0;g<m.length;g++){var v=m[g],b=y[g]
v.update(b)}},t}(),vn=function(){function t(e){var n=e.appendOperations,o=e.updateOperations
r(this,t),this._transaction=null,this.appendOperations=n,this.updateOperations=o}return t.prototype.toConditionalReference=function(t){return new Et(t)},t.prototype.getAppendOperations=function(){return this.appendOperations},t.prototype.getDOM=function(){return this.updateOperations},t.prototype.getIdentity=function(t){return h(t)+""},t.prototype.begin=function(){this._transaction=new gn},t.prototype.didCreate=function(t,e){this.transaction.didCreate(t,e)},t.prototype.didUpdate=function(t,e){this.transaction.didUpdate(t,e)},t.prototype.scheduleInstallModifier=function(t,e){this.transaction.scheduleInstallModifier(t,e)},t.prototype.scheduleUpdateModifier=function(t,e){this.transaction.scheduleUpdateModifier(t,e)},t.prototype.didDestroy=function(t){this.transaction.didDestroy(t)},t.prototype.commit=function(){var t=this.transaction
this._transaction=null,t.commit()},t.prototype.attributeFor=function(t,e,n){arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return sn(t,e)},o(t,[{key:"transaction",get:function(){return this._transaction}}]),t}(),bn=(function(t){function e(n){if(r(this,e),!n){var o=window.document
n={appendOperations:new Ge(o),updateOperations:new ze(o)}}return s(this,t.call(this,n))}i(e,t)}(vn),function(){function t(e){r(this,t),this.trusting=e}return t.prototype.retry=function(t,e){var n=this.bounds,r=n.parentElement(),o=De(n),i=On.forInitialRender(t,{element:r,nextSibling:o})
return this.trusting?i.__appendTrustingDynamicContent(e):i.__appendCautiousDynamicContent(e)},t}()),wn=function(){function t(e){r(this,t),this.inner=e,this.bounds=e.bounds}return t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.update=function(t,e){var n=this.inner=this.inner.update(t,e)
return this.bounds=n.bounds,this},t}(),kn=function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this,i))
return a.bounds=n,a.lastValue=o,a}return i(e,t),e.prototype.update=function(t,e){var n=this.lastValue
if(e===n)return this
if(ye(e)||me(e))return this.retry(t,e)
var r=void 0;(r=fe(e)?"":ve(e)?e:String(e))!==n&&(this.bounds.firstNode().nodeValue=this.lastValue=r)
return this},e}(bn),En=function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this,i))
return a.bounds=n,a.lastValue=o,a}return i(e,t),e.prototype.update=function(t,e){return e===this.lastValue?this:this.retry(t,e)},e}(bn),_n=function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this,i))
return a.bounds=n,a.lastValue=o,a}return i(e,t),e.prototype.update=function(t,e){var n=this.lastValue
return e===n?this:me(e)&&e.toHTML()===n.toHTML()?(this.lastValue=e,this):this.retry(t,e)},e}(bn),Sn=function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this,i))
return a.bounds=n,a.lastValue=o,a}return i(e,t),e.prototype.update=function(t,e){var n=this.lastValue
return e===n?this:function(t){return fe(t)?"":ve(t)?t:me(t)?t.toHTML():ye(t)?t:String(t)}(e)===n?this:this.retry(t,e)},e}(bn),Cn=function(){function t(e){r(this,t),this.node=e}return t.prototype.firstNode=function(){return this.node},t}(),Pn=function(){function t(e){r(this,t),this.node=e}return t.prototype.lastNode=function(){return this.node},t}(),On=function(){function t(e,n,o){r(this,t),this.constructing=null,this.operations=null,this.cursorStack=new m,this.blockStack=new m,this.pushElement(n,o),this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM()}return t.forInitialRender=function(t,e){var n=new this(t,e.element,e.nextSibling)
return n.pushSimpleBlock(),n},t.resume=function(t,e,n){var r=new this(t,e.parentElement(),n)
return r.pushSimpleBlock(),r.pushBlockTracker(e),r},t.prototype.expectConstructing=function(t){return this.constructing},t.prototype.block=function(){return this.blockStack.current},t.prototype.popElement=function(){this.cursorStack.pop(),this.cursorStack.current},t.prototype.pushSimpleBlock=function(){return this.pushBlockTracker(new An(this.element))},t.prototype.pushUpdatableBlock=function(){return this.pushBlockTracker(new Ln(this.element))},t.prototype.pushBlockList=function(t){return this.pushBlockTracker(new xn(this.element,t))},t.prototype.pushBlockTracker=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.blockStack.current
return null!==n&&(n.newDestroyable(t),e||n.didAppendBounds(t)),this.__openBlock(),this.blockStack.push(t),t},t.prototype.popBlock=function(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()},t.prototype.__openBlock=function(){},t.prototype.__closeBlock=function(){},t.prototype.openElement=function(t){var e=this.__openElement(t)
return this.constructing=e,e},t.prototype.__openElement=function(t){return this.dom.createElement(t,this.element)},t.prototype.flushElement=function(){var t=this.element,e=this.constructing
this.__flushElement(t,e),this.constructing=null,this.operations=null,this.pushElement(e,null),this.didOpenElement(e)},t.prototype.__flushElement=function(t,e){this.dom.insertBefore(t,e,this.nextSibling)},t.prototype.closeElement=function(){this.willCloseElement(),this.popElement()},t.prototype.pushRemoteElement=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this.__pushRemoteElement(t,e,n)},t.prototype.__pushRemoteElement=function(t,e,n){this.pushElement(t,n)
var r=new Nn(t)
this.pushBlockTracker(r,!0)},t.prototype.popRemoteElement=function(){this.popBlock(),this.popElement()},t.prototype.pushElement=function(t,e){this.cursorStack.push(new Oe(t,e))},t.prototype.didAddDestroyable=function(t){this.block().newDestroyable(t)},t.prototype.didAppendBounds=function(t){return this.block().didAppendBounds(t),t},t.prototype.didAppendNode=function(t){return this.block().didAppendNode(t),t},t.prototype.didOpenElement=function(t){return this.block().openElement(t),t},t.prototype.willCloseElement=function(){this.block().closeElement()},t.prototype.appendText=function(t){return this.didAppendNode(this.__appendText(t))},t.prototype.__appendText=function(t){var e=this.dom,n=this.element,r=this.nextSibling,o=e.createTextNode(t)
return e.insertBefore(n,o,r),o},t.prototype.__appendNode=function(t){return this.dom.insertBefore(this.element,t,this.nextSibling),t},t.prototype.__appendFragment=function(t){var e=t.firstChild
if(e){var n=Le(this.element,e,t.lastChild)
return this.dom.insertBefore(this.element,t,this.nextSibling),n}return xe(this.element,this.__appendComment(""))},t.prototype.__appendHTML=function(t){return this.dom.insertHTMLBefore(this.element,this.nextSibling,t)},t.prototype.appendTrustingDynamicContent=function(t){var e=new wn(this.__appendTrustingDynamicContent(t))
return this.didAppendBounds(e),e},t.prototype.__appendTrustingDynamicContent=function(t){if(ve(t))return this.trustedContent(t)
if(fe(t))return this.trustedContent("")
if(me(t))return this.trustedContent(t.toHTML())
if(ge(t)){var e=this.__appendFragment(t)
return new En(e,t,!0)}if(ye(t)){var n=this.__appendNode(t)
return new En(xe(this.element,n),n,!0)}return this.trustedContent(String(t))},t.prototype.appendCautiousDynamicContent=function(t){var e=new wn(this.__appendCautiousDynamicContent(t))
return this.didAppendBounds(e.bounds),e},t.prototype.__appendCautiousDynamicContent=function(t){if(ve(t))return this.untrustedContent(t)
if(fe(t))return this.untrustedContent("")
if(ge(t)){var e=this.__appendFragment(t)
return new En(e,t,!1)}if(ye(t)){var n=this.__appendNode(t)
return new En(xe(this.element,n),n,!1)}if(me(t)){var r=t.toHTML(),o=this.__appendHTML(r)
return new _n(o,t,!1)}return this.untrustedContent(String(t))},t.prototype.trustedContent=function(t){var e=this.__appendHTML(t)
return new Sn(e,t,!0)},t.prototype.untrustedContent=function(t){var e=this.__appendText(t),n=xe(this.element,e)
return new kn(n,t,!1)},t.prototype.appendComment=function(t){return this.didAppendNode(this.__appendComment(t))},t.prototype.__appendComment=function(t){var e=this.dom,n=this.element,r=this.nextSibling,o=e.createComment(t)
return e.insertBefore(n,o,r),o},t.prototype.__setAttribute=function(t,e,n){this.dom.setAttribute(this.constructing,t,e,n)},t.prototype.__setProperty=function(t,e){this.constructing[t]=e},t.prototype.setStaticAttribute=function(t,e,n){this.__setAttribute(t,e,n)},t.prototype.setDynamicAttribute=function(t,e,n,r){var o=this.constructing,i=new(this.env.attributeFor(o,t,n,r))({element:o,name:t,namespace:r||null})
return i.set(this,e,this.env),i},o(t,[{key:"element",get:function(){return this.cursorStack.current.element}},{key:"nextSibling",get:function(){return this.cursorStack.current.nextSibling}}]),t}(),An=function(){function t(e){r(this,t),this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}return t.prototype.destroy=function(){var t=this.destroyables
if(t&&t.length)for(var e=0;e<t.length;e++)t[e].destroy()},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){return this.first&&this.first.firstNode()},t.prototype.lastNode=function(){return this.last&&this.last.lastNode()},t.prototype.openElement=function(t){this.didAppendNode(t),this.nesting++},t.prototype.closeElement=function(){this.nesting--},t.prototype.didAppendNode=function(t){0===this.nesting&&(this.first||(this.first=new Cn(t)),this.last=new Pn(t))},t.prototype.didAppendBounds=function(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)},t.prototype.newDestroyable=function(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)},t.prototype.finalize=function(t){this.first||t.appendComment("")},t}(),Nn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),De(this)},e}(An),Ln=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.reset=function(t){var e=this.destroyables
if(e&&e.length)for(var n=0;n<e.length;n++)t.didDestroy(e[n])
var r=De(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,r},e}(An),xn=function(){function t(e,n){r(this,t),this.parent=e,this.boundList=n,this.parent=e,this.boundList=n}return t.prototype.destroy=function(){this.boundList.forEachNode(function(t){return t.destroy()})},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){var t=this.boundList.head()
return t&&t.firstNode()},t.prototype.lastNode=function(){var t=this.boundList.tail()
return t&&t.lastNode()},t.prototype.openElement=function(t){},t.prototype.closeElement=function(){},t.prototype.didAppendNode=function(t){},t.prototype.didAppendBounds=function(t){},t.prototype.newDestroyable=function(t){},t.prototype.finalize=function(t){},t}()
var Tn=function(){function t(e,n,o){var i=o.alwaysRevalidate,s=void 0!==i&&i
r(this,t),this.frameStack=new m,this.env=e,this.constants=n.constants,this.dom=e.getDOM(),this.alwaysRevalidate=s}return t.prototype.execute=function(t,e){var n=this.frameStack
for(this.try(t,e);!n.isEmpty();){var r=this.frame.nextStatement()
null!==r?r.evaluate(this):this.frameStack.pop()}},t.prototype.goto=function(t){this.frame.goto(t)},t.prototype.try=function(t,e){this.frameStack.push(new Fn(this,t,e))},t.prototype.throw=function(){this.frame.handleException(),this.frameStack.pop()},o(t,[{key:"frame",get:function(){return this.frameStack.current}}]),t}(),Dn=function(t){function e(n,o,i,a){r(this,e)
var u=s(this,t.call(this))
return u.start=n,u.state=o,u.type="block",u.next=null,u.prev=null,u.children=a,u.bounds=i,u}return i(e,t),e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.evaluate=function(t){t.try(this.children,null)},e.prototype.destroy=function(){this.bounds.destroy()},e.prototype.didDestroy=function(){this.state.env.didDestroy(this.bounds)},e}(dt),Rn=function(t){function e(n,o,i,a){r(this,e)
var u=s(this,t.call(this,n,o,i,a))
return u.type="try",u.tag=u._tag=j.create(C),u}return i(e,t),e.prototype.didInitializeChildren=function(){this._tag.inner.update(T(this.children))},e.prototype.evaluate=function(t){t.try(this.children,this)},e.prototype.handleException=function(){var t=this,e=this.state,n=this.bounds,r=this.children,o=this.start,i=this.prev,s=this.next
r.clear()
var a=On.resume(e.env,n,n.reset(e.env)),u=Un.resume(e,a),c=new y
u.execute(o,function(n){n.stack=Mn.restore(e.stack),n.updatingOpcodeStack.push(c),n.updateWith(t),n.updatingOpcodeStack.push(r)}),this.prev=i,this.next=s},e}(Dn),Bn=function(){function t(e,n){r(this,t),this.opcode=e,this.marker=n,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}return t.prototype.insert=function(t,e,n,r){var o=this.map,i=this.opcode,s=this.updating,a=null,u=null
a=r?(u=o[r]).bounds.firstNode():this.marker
var c=i.vmForInsertion(a),p=null,l=i.start
c.execute(l,function(r){o[t]=p=r.iterate(n,e),r.updatingOpcodeStack.push(new y),r.updateWith(p),r.updatingOpcodeStack.push(p.children)}),s.insertBefore(p,u),this.didInsert=!0},t.prototype.retain=function(t,e,n){},t.prototype.move=function(t,e,n,r){var o=this.map,i=this.updating,s=o[t],a=o[r]||null
Te(s,r?a.firstNode():this.marker),i.remove(s),i.insertBefore(s,a)},t.prototype.delete=function(t){var e=this.map,n=e[t]
n.didDestroy(),De(n),this.updating.remove(n),delete e[t],this.didDelete=!0},t.prototype.done=function(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)},t}(),In=function(t){function e(n,o,i,a,u){r(this,e)
var c=s(this,t.call(this,n,o,i,a))
c.type="list-block",c.map=d(),c.lastIterated=b,c.artifacts=u
var p=c._tag=j.create(C)
return c.tag=D([u.tag,p]),c}return i(e,t),e.prototype.didInitializeChildren=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(T(this.children))},e.prototype.evaluate=function(e){var n=this.artifacts,r=this.lastIterated
if(!n.tag.validate(r)){var o=this.bounds,i=e.dom,s=i.createComment("")
i.insertAfter(o.parentElement(),s,o.lastNode())
var a=new Bn(this,s)
new Y({target:a,artifacts:n}).sync(),this.parentElement().removeChild(s)}t.prototype.evaluate.call(this,e)},e.prototype.vmForInsertion=function(t){var e=this.bounds,n=this.state,r=On.forInitialRender(n.env,{element:e.parentElement(),nextSibling:t})
return Un.resume(n,r)},e}(Dn),Fn=function(){function t(e,n,o){r(this,t),this.vm=e,this.ops=n,this.exceptionHandler=o,this.vm=e,this.ops=n,this.current=n.head()}return t.prototype.goto=function(t){this.current=t},t.prototype.nextStatement=function(){var t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t},t.prototype.handleException=function(){this.exceptionHandler&&this.exceptionHandler.handleException()},t}(),jn=function(){function t(e,n,o,i){r(this,t),this.env=e,this.program=n,this.updating=o,this.bounds=i}return t.prototype.rerender=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alwaysRevalidate:!1}).alwaysRevalidate,e=void 0!==t&&t,n=this.env,r=this.program,o=this.updating
new Tn(n,r,{alwaysRevalidate:e}).execute(o,this)},t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.handleException=function(){throw"this should never happen"},t.prototype.destroy=function(){this.bounds.destroy(),De(this.bounds)},t}(),Mn=function(){function t(e,n,o){r(this,t),this.stack=e,this.fp=n,this.sp=o}return t.empty=function(){return new this([],0,-1)},t.restore=function(t){return new this(t.slice(),0,t.length-1)},t.prototype.push=function(t){this.stack[++this.sp]=t},t.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sp
this.push(this.stack[t])},t.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.stack[this.sp]
return this.sp-=t,e},t.prototype.peek=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.stack[this.sp-t]},t.prototype.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fp
return this.stack[e+t]},t.prototype.set=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.fp
this.stack[n+e]=t},t.prototype.slice=function(t,e){return this.stack.slice(t,e)},t.prototype.capture=function(t){var e=this.sp+1,n=e-t
return this.stack.slice(n,e)},t.prototype.reset=function(){this.stack.length=0},t.prototype.toArray=function(){return this.stack.slice(this.fp,this.sp+1)},t}(),Un=function(){function t(e,n,o,i,s){r(this,t),this.program=e,this.env=n,this.elementStack=s,this.dynamicScopeStack=new m,this.scopeStack=new m,this.updatingOpcodeStack=new m,this.cacheGroups=new m,this.listBlockStack=new m,this.stack=Mn.empty(),this._pc=-1,this.ra=-1,this.currentOpSize=0,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=n,this.heap=e.heap,this.constants=e.constants,this.elementStack=s,this.scopeStack.push(o),this.dynamicScopeStack.push(i)}return t.prototype.fetch=function(t){this.stack.push(this[pt[t]])},t.prototype.load=function(t){this[pt[t]]=this.stack.pop()},t.prototype.fetchValue=function(t){return this[pt[t]]},t.prototype.loadValue=function(t,e){this[pt[t]]=e},t.prototype.pushFrame=function(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1},t.prototype.popFrame=function(){this.sp=this.fp-1,this.ra=this.stack.get(0),this.fp=this.stack.get(1)},t.prototype.goto=function(t){var e=this.pc+t-this.currentOpSize
this.pc=e},t.prototype.call=function(t){this.ra=this.pc,this.pc=this.heap.getaddr(t)},t.prototype.returnTo=function(t){var e=this.pc+t-this.currentOpSize
this.ra=e},t.prototype.return=function(){this.pc=this.ra},t.initial=function(e,n,r,o,i,s,a){var u=e.heap.scopesizeof(a),c=new t(e,n,yn.root(r,u),i,s)
return c.pc=c.heap.getaddr(a),c.updatingOpcodeStack.push(new y),c},t.resume=function(e,n){return new t(e.program,e.env,e.scope,e.dynamicScope,n)},t.prototype.capture=function(t){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(t)}},t.prototype.beginCacheGroup=function(){this.cacheGroups.push(this.updating().tail())},t.prototype.commitCacheGroup=function(){var t=new ue("END"),e=this.updating(),n=this.cacheGroups.pop(),r=n?e.nextNode(n):e.head(),o=e.tail(),i=T(new g(r,o)),s=new se(i,t)
e.insertBefore(s,r),e.append(new ae(s)),e.append(t)},t.prototype.enter=function(t){var e=new y,n=this.capture(t),r=this.elements().pushUpdatableBlock(),o=new Rn(this.heap.gethandle(this.pc),n,r,e)
this.didEnter(o)},t.prototype.iterate=function(t,e){var n=this.stack
n.push(e),n.push(t)
var r=this.capture(2),o=this.elements().pushUpdatableBlock()
return new Rn(this.heap.gethandle(this.pc),r,o,new y)},t.prototype.enterItem=function(t,e){this.listBlock().map[t]=e,this.didEnter(e)},t.prototype.enterList=function(t){var e=new y,n=this.capture(0),r=this.elements().pushBlockList(e),o=this.stack.peek().artifacts,i=this.pc+t-this.currentOpSize,s=this.heap.gethandle(i),a=new In(s,n,r,e,o)
this.listBlockStack.push(a),this.didEnter(a)},t.prototype.didEnter=function(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)},t.prototype.exit=function(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()},t.prototype.exitList=function(){this.exit(),this.listBlockStack.pop()},t.prototype.updateWith=function(t){this.updating().append(t)},t.prototype.listBlock=function(){return this.listBlockStack.current},t.prototype.updating=function(){return this.updatingOpcodeStack.current},t.prototype.elements=function(){return this.elementStack},t.prototype.scope=function(){return this.scopeStack.current},t.prototype.dynamicScope=function(){return this.dynamicScopeStack.current},t.prototype.pushChildScope=function(){this.scopeStack.push(this.scope().child())},t.prototype.pushDynamicScope=function(){var t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t},t.prototype.pushRootScope=function(t,e){var n=yn.sized(t)
return e&&n.bindCallerScope(this.scope()),this.scopeStack.push(n),n},t.prototype.pushScope=function(t){this.scopeStack.push(t)},t.prototype.popScope=function(){this.scopeStack.pop()},t.prototype.popDynamicScope=function(){this.dynamicScopeStack.pop()},t.prototype.newDestroyable=function(t){this.elements().didAddDestroyable(t)},t.prototype.getSelf=function(){return this.scope().getSelf()},t.prototype.referenceForSymbol=function(t){return this.scope().getSymbol(t)},t.prototype.execute=function(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
for(var n=void 0;!(n=this.next()).done;);return n.value},t.prototype.next=function(){var t=this.env,e=this.program,n=this.updatingOpcodeStack,r=this.elementStack,o=this.nextStatement(),i=void 0
return null!==o?(ht.evaluate(this,o,o.type),i={done:!1,value:null}):(this.stack.reset(),i={done:!0,value:new jn(t,e,n.pop(),r.popBlock())}),i},t.prototype.nextStatement=function(){var t=this.pc,e=this.program
if(-1===t)return null
var n=this.program.opcode(t).size,r=this.currentOpSize=n
return this.pc+=r,e.opcode(t)},t.prototype.bindDynamicScope=function(t){for(var e=this.dynamicScope(),n=t.length-1;n>=0;n--){var r=this.constants.getString(t[n])
e.set(r,this.stack.pop())}},o(t,[{key:"pc",get:function(){return this._pc},set:function(t){this._pc=t}},{key:"fp",get:function(){return this.stack.fp},set:function(t){this.stack.fp=t}},{key:"sp",get:function(){return this.stack.sp},set:function(t){this.stack.sp=t}}]),t}(),Hn=function(){function t(e){r(this,t),this.vm=e}return t.prototype.next=function(){return this.vm.next()},t}(),Vn=0
var zn=function(){function t(e,n){r(this,t),this.options=e,this.parsedLayout=n,this.layout=null,this.partial=null
var o=n.block
this.symbols=o.symbols,this.hasEval=o.hasEval,this.statements=o.statements,this.referrer=n.referrer,this.id=n.id||"client-"+Vn++}return t.prototype.renderLayout=function(t){var e=t.env,n=t.self,r=t.dynamicScope,o=t.args,i=void 0===o?Zt:o,s=t.builder,a=this.asLayout().compile(),u=Un.initial(this.options.program,e,n,i,r,s,a)
return new Hn(u)},t.prototype.asLayout=function(){return this.layout?this.layout:this.layout=Wn(this.parsedLayout,this.options,!1)},t.prototype.asPartial=function(){return this.partial?this.partial:this.partial=Wn(this.parsedLayout,this.options,!0)},t}()
function Wn(t,e,n){var r=t.block,o=t.referrer,i=r.hasEval,s=r.symbols,a=u({},e,{asPartial:n,referrer:o})
return new jt(r.statements,t,a,{referrer:o,hasEval:i,symbols:s})}var qn=function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this,n,o))
return a.startingBlockDepth=i,a.candidate=null,a.injectedOmittedNode=!1,a.openBlockDepth=i-1,a}return i(e,t),e}(Oe);(function(t){function e(n,o,i){r(this,e)
var a=s(this,t.call(this,n,o,i))
if(a.unmatchedAttributes=null,a.blockDepth=0,i)throw new Error("Rehydration with nextSibling not supported")
return a.candidate=a.currentCursor.element.firstChild,a}i(e,t),e.prototype.pushElement=function(t,e){var n=this.blockDepth,r=new qn(t,e,void 0===n?0:n),o=this.currentCursor
o&&o.candidate&&(r.candidate=t.firstChild,o.candidate=t.nextSibling),this.cursorStack.push(r)},e.prototype.clearMismatch=function(t){var e=t,n=this.currentCursor
if(null!==n){var r=n.openBlockDepth
if(r>=n.startingBlockDepth)for(;e&&(!Gn(e)||Yn(e)!==r);)e=this.remove(e)
else for(;null!==e;)e=this.remove(e)
n.nextSibling=e,n.candidate=null}},e.prototype.__openBlock=function(){var t=this.currentCursor
if(null!==t){var e=this.blockDepth
this.blockDepth++
var n,r=t.candidate
if(null!==r)Gn(r)&&((n=r.nodeValue.match(/^%\+block:(\d+)%$/))&&n[1]?Number(n[1]):null)===e?(t.candidate=this.remove(r),t.openBlockDepth=e):this.clearMismatch(r)}},e.prototype.__closeBlock=function(){var t=this.currentCursor
if(null!==t){var e=t.openBlockDepth
this.blockDepth--
var n=t.candidate
null!==n&&(Gn(n)&&Yn(n)===e?(t.candidate=this.remove(n),t.openBlockDepth--):this.clearMismatch(n)),t.openBlockDepth===this.blockDepth&&(t.candidate=this.remove(t.nextSibling),t.openBlockDepth--)}},e.prototype.__appendNode=function(e){var n=this.candidate
return n||t.prototype.__appendNode.call(this,e)},e.prototype.__appendHTML=function(e){var n=this.markerBounds()
if(n){var r=n.firstNode(),o=n.lastNode(),i=Le(this.element,r.nextSibling,o.previousSibling)
return this.remove(r),this.remove(o),i}return t.prototype.__appendHTML.call(this,e)},e.prototype.remove=function(t){var e=t.parentNode,n=t.nextSibling
return e.removeChild(t),n},e.prototype.markerBounds=function(){var t=this.candidate
if(t&&Xn(t)){for(var e=t,n=e.nextSibling;n&&!Xn(n);)n=n.nextSibling
return Le(this.element,e,n)}return null},e.prototype.__appendText=function(e){var n=this.candidate
if(n){if(3===n.nodeType)return n.nodeValue!==e&&(n.nodeValue=e),this.candidate=n.nextSibling,n
if(n&&(function(t){return 8===t.nodeType&&"%sep%"===t.nodeValue}(n)||Jn(n)))return this.candidate=n.nextSibling,this.remove(n),this.__appendText(e)
if(Jn(n)){var r=this.remove(n)
this.candidate=r
var o=this.dom.createTextNode(e)
return this.dom.insertBefore(this.element,o,r),o}return this.clearMismatch(n),t.prototype.__appendText.call(this,e)}return t.prototype.__appendText.call(this,e)},e.prototype.__appendComment=function(e){var n=this.candidate
return n&&Gn(n)?(n.nodeValue!==e&&(n.nodeValue=e),this.candidate=n.nextSibling,n):(n&&this.clearMismatch(n),t.prototype.__appendComment.call(this,e))},e.prototype.__openElement=function(e){var n=this.candidate
if(n&&Kn(n)&&function(t,e){if(t.namespaceURI===Fe)return t.tagName===e
return t.tagName===e.toUpperCase()}(n,e))return this.unmatchedAttributes=[].slice.call(n.attributes),n
if(n){if(Kn(n)&&"TBODY"===n.tagName)return this.pushElement(n,null),this.currentCursor.injectedOmittedNode=!0,this.__openElement(e)
this.clearMismatch(n)}return t.prototype.__openElement.call(this,e)},e.prototype.__setAttribute=function(e,n,r){var o=this.unmatchedAttributes
if(o){var i=$n(o,e)
if(i)return i.value!==n&&(i.value=n),void o.splice(o.indexOf(i),1)}return t.prototype.__setAttribute.call(this,e,n,r)},e.prototype.__setProperty=function(e,n){var r=this.unmatchedAttributes
if(r){var o=$n(r,e)
if(o)return o.value!==n&&(o.value=n),void r.splice(r.indexOf(o),1)}return t.prototype.__setProperty.call(this,e,n)},e.prototype.__flushElement=function(e,n){var r=this.unmatchedAttributes
if(r){for(var o=0;o<r.length;o++)this.constructing.removeAttribute(r[o].name)
this.unmatchedAttributes=null}else t.prototype.__flushElement.call(this,e,n)},e.prototype.appendCautiousDynamicContent=function(e){var n=t.prototype.appendCautiousDynamicContent.call(this,e)
return n.update(this.env,e),n},e.prototype.willCloseElement=function(){var e=this.candidate,n=this.currentCursor
null!==e&&this.clearMismatch(e),n&&n.injectedOmittedNode&&this.popElement(),t.prototype.willCloseElement.call(this)},e.prototype.getMarker=function(t,e){var n=t.querySelector('script[glmr="'+e+'"]')
if(n)return n
throw new Error("Cannot find serialized cursor for `in-element`")},e.prototype.__pushRemoteElement=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.getMarker(t,e)
if(r.parentNode===t){var o=this.currentCursor,i=o.candidate
this.pushElement(t,n),o.candidate=i,this.candidate=this.remove(r)
var s=new Nn(t)
this.pushBlockTracker(s,!0)}},e.prototype.didAppendBounds=function(e){if(t.prototype.didAppendBounds.call(this,e),this.candidate){var n=e.lastNode()
this.candidate=n&&n.nextSibling}return e},o(e,[{key:"currentCursor",get:function(){return this.cursorStack.current}},{key:"candidate",get:function(){return this.currentCursor?this.currentCursor.candidate:null},set:function(t){this.currentCursor.candidate=t}}])})(On)
function Gn(t){return 8===t.nodeType}function Yn(t){var e=t.nodeValue.match(/^%\-block:(\d+)%$/)
return e&&e[1]?Number(e[1]):null}function Kn(t){return 1===t.nodeType}function Xn(t){return 8===t.nodeType&&"%glimmer%"===t.nodeValue}function Jn(t){return 8===t.nodeType&&"%empty%"===t.nodeValue}function $n(t,e){for(var n=0;n<t.length;n++){var r=t[n]
if(r.name===e)return r}}var Qn=function(){function t(){r(this,t)}return t.prototype.get=function(t){return er.create(this,t)},t}(),Zn=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n._lastRevision=null,n._lastValue=null,n}return i(e,t),e.prototype.value=function(){var t=this.tag,e=this._lastRevision,n=this._lastValue
return e&&t.validate(e)||(n=this._lastValue=this.compute(),this._lastRevision=t.value()),n},e}(Qn),tr=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.children=d(),n}return i(e,t),e.prototype.get=function(t){var e=this.children[t]
return e||(e=this.children[t]=new nr(this.inner,t)),e},e}(z),er=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.create=function(t,e){return O(t)?new nr(t.value(),e):new rr(t,e)},e.prototype.get=function(t){return new rr(this,t)},e}(Zn),nr=function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this))
return i._parentValue=n,i._propertyKey=o,i.tag=et(n,o),i}return i(e,t),e.prototype.compute=function(){return this._parentValue[this._propertyKey]},e}(er),rr=function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this)),a=n.tag,u=j.create(C)
return i._parentReference=n,i._parentObjectTag=u,i._propertyKey=o,i.tag=D([a,u]),i}return i(e,t),e.prototype.compute=function(){var t=this._parentReference,e=this._parentObjectTag,r=this._propertyKey,o=t.value()
return e.inner.update(et(o,r)),"string"==typeof o&&"length"===r?o.length:"object"===(void 0===o?"undefined":n(o))&&o?o[r]:void 0},e}(er),or=function(t){function e(n){r(this,e)
var o=s(this,t.call(this))
return o.tag=L.create(),o._value=n,o}return i(e,t),e.prototype.value=function(){return this._value},e.prototype.update=function(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)},e}(Qn),ir=(function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}i(e,t),e.create=function(t){if(O(t)){var n=t.value()
return mt.create(n)}return new e(t)}}(Et),function(){function t(e,n,o){r(this,t)
var i=e.ComponentClass,s=e.name
this.args=n
var a={debugName:s,args:this.namedArgsSnapshot()}
ct(a,o),this.component=i.create(a)}return t.prototype.namedArgsSnapshot=function(){return Object.freeze(this.args.named.value())},o(t,[{key:"tag",get:function(){return this.args.tag}}]),t}()),sr=function(){function t(e){r(this,t),this.env=e.env}return t.create=function(e){return new t(e)},t.prototype.prepareArgs=function(t,e){return null},t.prototype.getCapabilities=function(t){return t.capabilities},t.prototype.getLayout=function(t,e){var n=t.name,r=t.layout
return e.compileTemplate(n,r)},t.prototype.create=function(t,e,n,r,o,i){var s=ut(this.env)
return new ir(e,n.capture(),s)},t.prototype.getSelf=function(t){return new tr(t.component)},t.prototype.didCreateElement=function(t,e){},t.prototype.didRenderLayout=function(t,e){t.component.bounds=new lt(e)},t.prototype.didCreate=function(t){t&&t.component.didInsertElement()},t.prototype.getTag=function(t){return t.tag},t.prototype.update=function(t,e){t.component.args=t.namedArgsSnapshot()},t.prototype.didUpdateLayout=function(){},t.prototype.didUpdate=function(t){t.component.didUpdate()},t.prototype.getDestructor=function(t){return t.component},t}()
function ar(t,e,n){function r(){return Reflect.construct(HTMLElement,[],r)}r.prototype=Object.create(HTMLElement.prototype,{constructor:{value:r},connectedCallback:{value:function(){var e=this,r=document.createElement("span"),o=this.parentNode
o.insertBefore(r,this),o.removeChild(this),t.renderComponent(n,o,r),function t(e,n){e._rendering?requestAnimationFrame(function(){t(e,n)}):n()}(t,function(){var t=e,n=r.previousElementSibling
r.remove(),function(t,e){for(var n=t.attributes,r=0;r<n.length;r++){var o=n.item(r),i=o.name,s=o.value
e.setAttribute(i,s)}}(t,n)})}}}),window.customElements.define(e,r)}function ur(){}(function(){var t=new function(){},e=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "))
function n(t){var n=e.has(t)
return t=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t),!n&&t}function r(t){var e=t.isConnected
if(void 0!==e)return e
for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0)
return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function o(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode
return e&&e!==t?e.nextSibling:null}function i(t,e,n){n=n||new Set
for(var r=t;r;){if(r.nodeType===Node.ELEMENT_NODE){var s=r
e(s)
var a=s.localName
if("link"===a&&"import"===s.getAttribute("rel")){if((r=s.import)instanceof Node&&!n.has(r))for(n.add(r),r=r.firstChild;r;r=r.nextSibling)i(r,e,n)
r=o(t,s)
continue}if("template"===a){r=o(t,s)
continue}if(s=s.__CE_shadowRoot)for(s=s.firstChild;s;s=s.nextSibling)i(s,e,n)}r=r.firstChild?r.firstChild:o(t,r)}}function s(t,e,n){t[e]=n}function a(){this.a=new Map,this.s=new Map,this.f=[],this.b=!1}function u(t,e){t.b=!0,t.f.push(e)}function c(t,e){t.b&&i(e,function(e){return p(t,e)})}function p(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0
for(var n=0;n<t.f.length;n++)t.f[n](e)}}function l(t,e){var n=[]
for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e]
1===r.__CE_state?t.connectedCallback(r):f(t,r)}}function h(t,e){var n=[]
for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e]
1===r.__CE_state&&t.disconnectedCallback(r)}}function d(t,e,n){var r=(n=n||{}).w||new Set,o=n.i||function(e){return f(t,e)},s=[]
if(i(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import
n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import
if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0
var i=new Set(r)
i.delete(n),d(t,n,{w:i,i:o})}})}else s.push(e)},r),t.b)for(e=0;e<s.length;e++)p(t,s[e])
for(e=0;e<s.length;e++)o(s[e])}function f(t,e){if(void 0===e.__CE_state){var n=e.ownerDocument
if((n.defaultView||n.__CE_isImportDocument&&n.__CE_hasRegistry)&&(n=t.a.get(e.localName))){n.constructionStack.push(e)
var o=n.constructor
try{try{if(new o!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{n.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=n,n.attributeChangedCallback)for(n=n.observedAttributes,o=0;o<n.length;o++){var i=n[o],s=e.getAttribute(i)
null!==s&&t.attributeChangedCallback(e,i,null,s,null)}r(e)&&t.connectedCallback(e)}}}function m(t,e){this.c=t,this.a=e,this.b=void 0,d(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function y(t){t.b&&t.b.disconnect()}function g(t){if(t.a)throw Error("Already resolved.")
t.a=void 0,t.b&&t.b(void 0)}function v(t){this.j=!1,this.c=t,this.o=new Map,this.l=function(t){return t()},this.g=!1,this.m=[],this.u=new m(t,document)}a.prototype.connectedCallback=function(t){var e=t.__CE_definition
e.connectedCallback&&e.connectedCallback.call(t)},a.prototype.disconnectedCallback=function(t){var e=t.__CE_definition
e.disconnectedCallback&&e.disconnectedCallback.call(t)},a.prototype.attributeChangedCallback=function(t,e,n,r,o){var i=t.__CE_definition
i.attributeChangedCallback&&-1<i.observedAttributes.indexOf(e)&&i.attributeChangedCallback.call(t,e,n,r,o)},m.prototype.f=function(t){var e=this.a.readyState
for("interactive"!==e&&"complete"!==e||y(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,r=0;r<n.length;r++)d(this.c,n[r])},v.prototype.define=function(t,e){var r,o,i,s,a,u=this
if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.")
if(!n(t))throw new SyntaxError("The element name '"+t+"' is not valid.")
if(this.c.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.")
if(this.j)throw Error("A custom element is already being defined.")
this.j=!0
try{var c=function(t){var e=p[t]
if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.")
return e},p=e.prototype
if(!(p instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.")
r=c("connectedCallback"),o=c("disconnectedCallback"),i=c("adoptedCallback"),s=c("attributeChangedCallback"),a=e.observedAttributes||[]}catch(t){return}finally{this.j=!1}e={localName:t,constructor:e,connectedCallback:r,disconnectedCallback:o,adoptedCallback:i,attributeChangedCallback:s,observedAttributes:a,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.s.set(n.constructor,n)}(this.c,t,e),this.m.push(e),this.g||(this.g=!0,this.l(function(){return function(t){if(!1!==t.g){t.g=!1
for(var e=t.m,n=[],r=new Map,o=0;o<e.length;o++)r.set(e[o].localName,[])
for(d(t.c,document,{i:function(e){if(void 0===e.__CE_state){var o=e.localName,i=r.get(o)
i?i.push(e):t.c.a.get(o)&&n.push(e)}}}),o=0;o<n.length;o++)f(t.c,n[o])
for(;0<e.length;){for(var i=e.shift(),o=i.localName,i=r.get(i.localName),s=0;s<i.length;s++)f(t.c,i[s]);(o=t.o.get(o))&&g(o)}}}(u)}))},v.prototype.i=function(t){d(this.c,t)},v.prototype.get=function(t){if(t=this.c.a.get(t))return t.constructor},v.prototype.whenDefined=function(t){if(!n(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."))
var e=this.o.get(t)
return e?e.f:(e=new function(){var t=this
this.b=this.a=void 0,this.f=new Promise(function(e){t.b=e,t.a&&e(t.a)})},this.o.set(t,e),this.c.a.get(t)&&!this.m.some(function(e){return e.localName===t})&&g(e),e.f)},v.prototype.v=function(t){y(this.u)
var e=this.l
this.l=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=v,v.prototype.define=v.prototype.define,v.prototype.upgrade=v.prototype.i,v.prototype.get=v.prototype.get,v.prototype.whenDefined=v.prototype.whenDefined,v.prototype.polyfillWrapFlushCallback=v.prototype.v
var b=window.Document.prototype.createElement,w=window.Document.prototype.createElementNS,k=window.Document.prototype.importNode,E=window.Document.prototype.prepend,_=window.Document.prototype.append,S=window.DocumentFragment.prototype.prepend,C=window.DocumentFragment.prototype.append,P=window.Node.prototype.cloneNode,O=window.Node.prototype.appendChild,A=window.Node.prototype.insertBefore,N=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,x=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),T=window.Element.prototype.attachShadow,D=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),R=window.Element.prototype.getAttribute,B=window.Element.prototype.setAttribute,I=window.Element.prototype.removeAttribute,F=window.Element.prototype.getAttributeNS,j=window.Element.prototype.setAttributeNS,M=window.Element.prototype.removeAttributeNS,U=window.Element.prototype.insertAdjacentElement,H=window.Element.prototype.insertAdjacentHTML,V=window.Element.prototype.prepend,z=window.Element.prototype.append,W=window.Element.prototype.before,q=window.Element.prototype.after,G=window.Element.prototype.replaceWith,Y=window.Element.prototype.remove,K=window.HTMLElement,X=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),J=window.HTMLElement.prototype.insertAdjacentElement,$=window.HTMLElement.prototype.insertAdjacentHTML
function Q(t,e,n){function o(e){return function(n){for(var o=[],i=0;i<arguments.length;++i)o[i-0]=arguments[i]
i=[]
for(var s=[],a=0;a<o.length;a++){var u=o[a]
if(u instanceof Element&&r(u)&&s.push(u),u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)i.push(u)
else i.push(u)}for(e.apply(this,o),o=0;o<s.length;o++)h(t,s[o])
if(r(this))for(o=0;o<i.length;o++)(s=i[o])instanceof Element&&l(t,s)}}n.h&&(e.prepend=o(n.h)),n.append&&(e.append=o(n.append))}var Z,tt=window.customElements
if(!tt||tt.forcePolyfill||"function"!=typeof tt.define||"function"!=typeof tt.get){var et=new a
Z=et,window.HTMLElement=function(){function e(){var e=this.constructor
if(!(r=Z.s.get(e)))throw Error("The custom element being constructed was not registered with `customElements`.")
var n=r.constructionStack
if(!n.length)return n=b.call(document,r.localName),Object.setPrototypeOf(n,e.prototype),n.__CE_state=1,n.__CE_definition=r,p(Z,n),n
var r,o=n[r=n.length-1]
if(o===t)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.")
return n[r]=t,Object.setPrototypeOf(o,e.prototype),p(Z,o),o}return e.prototype=K.prototype,e}(),function(){var t=et
s(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e)
if(n)return new n.constructor}return e=b.call(this,e),p(t,e),e}),s(Document.prototype,"importNode",function(e,n){return e=k.call(this,e,n),this.__CE_hasRegistry?d(t,e):c(t,e),e}),s(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var r=t.a.get(n)
if(r)return new r.constructor}return e=w.call(this,e,n),p(t,e),e}),Q(t,Document.prototype,{h:E,append:_})}(),Q(et,DocumentFragment.prototype,{h:S,append:C}),function(){var t=et
function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,e)
else{var o=void 0
if(this.firstChild){var i=this.childNodes,s=i.length
if(0<s&&r(this)){o=Array(s)
for(var a=0;a<s;a++)o[a]=i[a]}}if(n.set.call(this,e),o)for(e=0;e<o.length;e++)h(t,o[e])}}})}s(Node.prototype,"insertBefore",function(e,n){if(e instanceof DocumentFragment){var o=Array.prototype.slice.apply(e.childNodes)
if(e=A.call(this,e,n),r(this))for(n=0;n<o.length;n++)l(t,o[n])
return e}return o=r(e),n=A.call(this,e,n),o&&h(t,e),r(this)&&l(t,e),n}),s(Node.prototype,"appendChild",function(e){if(e instanceof DocumentFragment){var n=Array.prototype.slice.apply(e.childNodes)
if(e=O.call(this,e),r(this))for(var o=0;o<n.length;o++)l(t,n[o])
return e}return n=r(e),o=O.call(this,e),n&&h(t,e),r(this)&&l(t,e),o}),s(Node.prototype,"cloneNode",function(e){return e=P.call(this,e),this.ownerDocument.__CE_hasRegistry?d(t,e):c(t,e),e}),s(Node.prototype,"removeChild",function(e){var n=r(e),o=N.call(this,e)
return n&&h(t,e),o}),s(Node.prototype,"replaceChild",function(e,n){if(e instanceof DocumentFragment){var o=Array.prototype.slice.apply(e.childNodes)
if(e=L.call(this,e,n),r(this))for(h(t,n),n=0;n<o.length;n++)l(t,o[n])
return e}o=r(e)
var i=L.call(this,e,n),s=r(this)
return s&&h(t,n),o&&h(t,e),s&&l(t,e),i}),x&&x.get?e(Node.prototype,x):u(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent)
return t.join("")},set:function(t){for(;this.firstChild;)N.call(this,this.firstChild)
O.call(this,document.createTextNode(t))}})})}(),function(){var t=et
function e(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var o=this,s=void 0
if(r(this)&&(s=[],i(this,function(t){t!==o&&s.push(t)})),n.set.call(this,e),s)for(var a=0;a<s.length;a++){var u=s[a]
1===u.__CE_state&&t.disconnectedCallback(u)}return this.ownerDocument.__CE_hasRegistry?d(t,this):c(t,this),e}})}function n(e,n){s(e,"insertAdjacentElement",function(e,o){var i=r(o)
return e=n.call(this,e,o),i&&h(t,o),r(e)&&l(t,o),e})}function o(e,n){function r(e,n){for(var r=[];e!==n;e=e.nextSibling)r.push(e)
for(n=0;n<r.length;n++)d(t,r[n])}s(e,"insertAdjacentHTML",function(t,e){if("beforebegin"===(t=t.toLowerCase())){var o=this.previousSibling
n.call(this,t,e),r(o||this.parentNode.firstChild,this)}else if("afterbegin"===t)o=this.firstChild,n.call(this,t,e),r(this.firstChild,o)
else if("beforeend"===t)o=this.lastChild,n.call(this,t,e),r(o||this.firstChild,null)
else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")
o=this.nextSibling,n.call(this,t,e),r(this.nextSibling,o)}})}T&&s(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=T.call(this,t)}),D&&D.get?e(Element.prototype,D):X&&X.get?e(HTMLElement.prototype,X):u(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){return P.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,r=b.call(document,this.localName)
for(r.innerHTML=t;0<n.childNodes.length;)N.call(n,n.childNodes[0])
for(t=e?r.content:r;0<t.childNodes.length;)O.call(n,t.childNodes[0])}})}),s(Element.prototype,"setAttribute",function(e,n){if(1!==this.__CE_state)return B.call(this,e,n)
var r=R.call(this,e)
B.call(this,e,n),n=R.call(this,e),t.attributeChangedCallback(this,e,r,n,null)}),s(Element.prototype,"setAttributeNS",function(e,n,r){if(1!==this.__CE_state)return j.call(this,e,n,r)
var o=F.call(this,e,n)
j.call(this,e,n,r),r=F.call(this,e,n),t.attributeChangedCallback(this,n,o,r,e)}),s(Element.prototype,"removeAttribute",function(e){if(1!==this.__CE_state)return I.call(this,e)
var n=R.call(this,e)
I.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)}),s(Element.prototype,"removeAttributeNS",function(e,n){if(1!==this.__CE_state)return M.call(this,e,n)
var r=F.call(this,e,n)
M.call(this,e,n)
var o=F.call(this,e,n)
r!==o&&t.attributeChangedCallback(this,n,r,o,e)}),J?n(HTMLElement.prototype,J):U?n(Element.prototype,U):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),$?o(HTMLElement.prototype,$):H?o(Element.prototype,H):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Q(t,Element.prototype,{h:V,append:z}),function(t){var e=Element.prototype
function n(e){return function(n){for(var o=[],i=0;i<arguments.length;++i)o[i-0]=arguments[i]
i=[]
for(var s=[],a=0;a<o.length;a++){var u=o[a]
if(u instanceof Element&&r(u)&&s.push(u),u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)i.push(u)
else i.push(u)}for(e.apply(this,o),o=0;o<s.length;o++)h(t,s[o])
if(r(this))for(o=0;o<i.length;o++)(s=i[o])instanceof Element&&l(t,s)}}W&&(e.before=n(W)),W&&(e.after=n(q)),G&&s(e,"replaceWith",function(e){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o]
o=[]
for(var i=[],s=0;s<n.length;s++){var a=n[s]
if(a instanceof Element&&r(a)&&i.push(a),a instanceof DocumentFragment)for(a=a.firstChild;a;a=a.nextSibling)o.push(a)
else o.push(a)}for(s=r(this),G.apply(this,n),n=0;n<i.length;n++)h(t,i[n])
if(s)for(h(t,this),n=0;n<o.length;n++)(i=o[n])instanceof Element&&l(t,i)}),Y&&s(e,"remove",function(){var e=r(this)
Y.call(this),e&&h(t,this)})}(t)}(),document.__CE_hasRegistry=!0
var nt=new v(et)
Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:nt})}}).call(self)
var cr=function(){function t(e,n){r(this,t),this.cache=ur,this.inner=null,this.chains=null,this.lastParentValue=ur,this._guid=0,this.tag=P,this.parent=e,this.property=n}return t.prototype.value=function(){var t=this.lastParentValue,e=this.property,r=this.inner,o=this._parentValue()
if(null===o||void 0===o)return this.cache=void 0
if(t===o)r=this.inner
else{var i="object"===(void 0===o?"undefined":n(o))?gr.for(o).referenceTypeFor(e):vr
r=this.inner=new i(o,e,this)}return this.cache=r.value()},t.prototype.get=function(e){var n=this._getChains()
return e in n?n[e]:n[e]=new t(this,e)},t.prototype.label=function(){return"[reference Direct]"},t.prototype._getChains=function(){return this.chains?this.chains:this.chains=d()},t.prototype._parentValue=function(){var t=this.parent.value()
return this.lastParentValue=t,t},t}(),pr=function(){function t(e){r(this,t),this.chains=d(),this.tag=P,this.object=e}return t.prototype.value=function(){return this.object},t.prototype.update=function(t){this.object=t},t.prototype.get=function(t){var e=this.chains
return t in e?e[t]:e[t]=new cr(this,t)},t.prototype.chainFor=function(t){var e=this.chains
return t in e?e[t]:null},t.prototype.path=function(t){return this.referenceFromParts(t.split("."))},t.prototype.referenceFromParts=function(t){return t.reduce(function(t,e){return t.get(e)},this)},t.prototype.label=function(){return"[reference Root]"},t}(),lr={destroy:function(){}},hr=function(){function t(e,n){r(this,t),this.tag=P,this.parent=e}return t.prototype.chain=function(){return lr},t.prototype.notify=function(){},t.prototype.value=function(){return this.parent[this.property]},t.prototype.get=function(e){return new t(this.parent[this.property],e)},t}(),dr=function(){function t(e){r(this,t),this.tag=P,this.inner=e}return t.prototype.update=function(t){this.inner=t},t.prototype.chain=function(){return lr},t.prototype.notify=function(){},t.prototype.value=function(){return this.inner},t.prototype.referenceFromParts=function(t){throw new Error("Not implemented")},t.prototype.chainFor=function(t){throw new Error("Not implemented")},t.prototype.get=function(t){return new hr(this.inner,t)},t}(),fr=function(){function t(e){r(this,t),this.object=e}return t.prototype.root=function(){return new dr(this.object)},t}(),mr="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",yr=Object.hasOwnProperty,gr=function(){function t(e,n){var o=n.RootReferenceFactory,i=n.DefaultPathReferenceFactory
r(this,t),this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=e,this.RootReferenceFactory=o||pr,this.DefaultPathReferenceFactory=i||vr}return t.for=function(e){if(null===e||void 0===e)return new t(e,{})
if(yr.call(e,"_meta")&&e._meta)return e._meta
if(!Object.isExtensible(e))return new fr(e)
var n=t
e.constructor&&e.constructor[mr]?n=e.constructor[mr].InstanceMetaConstructor:e[mr]&&(n=e[mr].InstanceMetaConstructor)
return e._meta=new n(e,{})},t.exists=function(t){return"object"===(void 0===t?"undefined":n(t))&&t._meta},t.metadataForProperty=function(t){return null},t.prototype.addReference=function(t,e){var n=this.references=this.references||d();(n[t]=n[t]||new f).add(e)},t.prototype.addReferenceTypeFor=function(t,e){this.referenceTypes=this.referenceTypes||d(),this.referenceTypes[t]=e},t.prototype.referenceTypeFor=function(t){return this.referenceTypes&&this.referenceTypes[t]||vr},t.prototype.removeReference=function(t,e){this.references&&this.references[t].delete(e)},t.prototype.getReferenceTypes=function(){return this.referenceTypes=this.referenceTypes||d(),this.referenceTypes},t.prototype.referencesFor=function(t){return this.references?this.references[t]:null},t.prototype.getSlots=function(){return this.slots=this.slots||d()},t.prototype.root=function(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)},t}(),vr=function(){function t(e,n,o){r(this,t),this.tag=P,this.object=e,this.property=n}return t.prototype.value=function(){return this.object[this.property]},t.prototype.label=function(){return"[reference Property]"},t}()
var br,wr=function(){function t(e,n){r(this,t),this._registry=e,this._resolver=n}return t.prototype.register=function(t,e,n){var r=this._toAbsoluteSpecifier(t)
this._registry.register(r,e,n)},t.prototype.registration=function(t){var e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)},t.prototype.unregister=function(t){var e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)},t.prototype.registerOption=function(t,e,n){var r=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(r,e,n)},t.prototype.registeredOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(n,e)},t.prototype.registeredOptions=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)},t.prototype.unregisterOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(n,e)},t.prototype.registerInjection=function(t,e,n){var r=this._toAbsoluteOrTypeSpecifier(t),o=this._toAbsoluteSpecifier(n)
this._registry.registerInjection(r,e,o)},t.prototype.registeredInjections=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)},t.prototype._toAbsoluteSpecifier=function(t,e){return this._resolver.identify(t,e)},t.prototype._toAbsoluteOrTypeSpecifier=function(t){return function(t){return-1===t.indexOf(":")}(t)?t:this._toAbsoluteSpecifier(t)},t}(),kr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
r(this,t),this.bucket=e?u({},e):{}}return t.prototype.get=function(t){return this.bucket[t]},t.prototype.set=function(t,e){return this.bucket[t]=e},t.prototype.child=function(){return new t(this.bucket)},t}(),Er=function(){function t(e,n){r(this,t),this.position=0,this.array=e,this.keyFor=n}return t.prototype.isEmpty=function(){return 0===this.array.length},t.prototype.next=function(){var t=this.position,e=this.array,n=this.keyFor
if(t>=e.length)return null
var r=e[t],o=n(r,t),i=t
return this.position++,{key:o,value:r,memo:i}},t}(),_r=function(){function t(e,n,o){r(this,t),this.position=0,this.keys=e,this.values=n,this.keyFor=o}return t.prototype.isEmpty=function(){return 0===this.keys.length},t.prototype.next=function(){var t=this.position,e=this.keys,n=this.values,r=this.keyFor
if(t>=e.length)return null
var o=n[t],i=e[t],s=r(o,i)
return this.position++,{key:s,value:o,memo:i}},t}(),Sr=new(function(){function t(){r(this,t)}return t.prototype.isEmpty=function(){return!0},t.prototype.next=function(){throw new Error("Cannot call next() on an empty iterator")},t}()),Cr=function(){function t(e,n){r(this,t),this.tag=e.tag,this.ref=e,this.keyFor=n}return t.prototype.iterate=function(){var t=this.ref,e=this.keyFor,r=t.value()
if(Array.isArray(r))return r.length>0?new Er(r,e):Sr
if(void 0===r||null===r)return Sr
if(void 0!==r.forEach){var o=[]
return r.forEach(function(t){o.push(t)}),o.length>0?new Er(o,e):Sr}if("object"===(void 0===r?"undefined":n(r))){var i=Object.keys(r)
return i.length>0?new _r(i,i.map(function(t){return r[t]}),e):Sr}throw new Error("Don't know how to {{#each "+r+"}}")},t.prototype.valueReferenceFor=function(t){return new or(t.value)},t.prototype.updateValueReference=function(t,e){t.update(e.value)},t.prototype.memoReferenceFor=function(t){return new or(t.memo)},t.prototype.updateMemoReference=function(t,e){t.update(e.memo)},t}(),Pr={},Or=Object.freeze([]),Ar=function(){function t(){r(this,t),this.strings=[],this.arrays=[Or],this.tables=[],this.handles=[],this.serializables=[],this.resolved=[],this.floats=[],this.negatives=[]}return t.prototype.float=function(t){var e=this.floats.indexOf(t)
return e>-1?e:this.floats.push(t)-1},t.prototype.negative=function(t){return this.negatives.push(t)-1},t.prototype.string=function(t){var e=this.strings.indexOf(t)
return e>-1?e:this.strings.push(t)-1},t.prototype.stringArray=function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=this.string(t[n])
return this.array(e)},t.prototype.array=function(t){if(0===t.length)return 0
var e=this.arrays.indexOf(t)
return e>-1?e:this.arrays.push(t)-1},t.prototype.table=function(t){var e=this.tables.indexOf(t)
return e>-1?e:this.tables.push(t)-1},t.prototype.handle=function(t){return this.resolved.push(Pr),this.handles.push(t)},t.prototype.serializable=function(t){var e=this.serializables.indexOf(t)
return e>-1?e:this.serializables.push(t)-1},t.prototype.toPool=function(){return{strings:this.strings,arrays:this.arrays,tables:this.tables,handles:this.handles,serializables:this.serializables,floats:this.floats,negatives:this.negatives}},t}(),Nr=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.others=[],n}return i(e,t),e.prototype.getOther=function(t){return this.others[t-1]},e.prototype.other=function(t){return this.others.push(t)},e}(function(t){function e(n,o){r(this,e)
var i=s(this,t.call(this))
return i.resolver=n,o&&(i.strings=o.strings,i.arrays=o.arrays,i.tables=o.tables,i.handles=o.handles,i.serializables=o.serializables,i.floats=o.floats,i.negatives=o.negatives,i.resolved=i.handles.map(function(){return Pr})),i}return i(e,t),e.prototype.getFloat=function(t){return this.floats[t]},e.prototype.getNegative=function(t){return this.negatives[t]},e.prototype.getString=function(t){return this.strings[t]},e.prototype.getStringArray=function(t){for(var e=this.getArray(t),n=new Array(e.length),r=0;r<e.length;r++){var o=e[r]
n[r]=this.getString(o)}return n},e.prototype.getArray=function(t){return this.arrays[t]},e.prototype.getSymbolTable=function(t){return this.tables[t]},e.prototype.resolveHandle=function(t){var e=t-1,n=this.resolved[e]
if(n===Pr){var r=this.handles[e]
n=this.resolved[e]=this.resolver.resolve(r)}return n},e.prototype.getSerializable=function(t){return this.serializables[t]},e}(Ar)),Lr=function(){function t(e){r(this,t),this.heap=e,this.offset=0}return o(t,[{key:"size",get:function(){return 1+((768&this.heap.getbyaddr(this.offset))>>8)}},{key:"type",get:function(){return 255&this.heap.getbyaddr(this.offset)}},{key:"op1",get:function(){return this.heap.getbyaddr(this.offset+1)}},{key:"op2",get:function(){return this.heap.getbyaddr(this.offset+2)}},{key:"op3",get:function(){return this.heap.getbyaddr(this.offset+3)}}]),t}();(function(t){t[t.Allocated=0]="Allocated",t[t.Freed=1]="Freed",t[t.Purged=2]="Purged",t[t.Pointer=3]="Pointer"})(br||(br={}))
function xr(t,e,n){return t|e<<16|n<<30}function Tr(t,e){return t|e<<30}var Dr=function(){function t(e){if(r(this,t),this.offset=0,this.handle=0,e){var n=e.buffer,o=e.table,i=e.handle
this.heap=new Uint16Array(n),this.table=o,this.offset=this.heap.length,this.handle=i}else this.heap=new Uint16Array(1048576),this.table=[]}return t.prototype.push=function(t){this.heap[this.offset++]=t},t.prototype.getbyaddr=function(t){return this.heap[t]},t.prototype.setbyaddr=function(t,e){this.heap[t]=e},t.prototype.malloc=function(){this.table.push(this.offset,0)
var t=this.handle
return this.handle+=2,t},t.prototype.finishMalloc=function(t,e){var n=this.table[t],r=xr(this.offset-n,e,br.Allocated)
this.table[t+1]=r},t.prototype.size=function(){return this.offset},t.prototype.getaddr=function(t){return this.table[t]},t.prototype.gethandle=function(t){this.table.push(t,xr(0,0,br.Pointer))
var e=this.handle
return this.handle+=2,e},t.prototype.sizeof=function(t){return-1},t.prototype.scopesizeof=function(t){return(1073676288&this.table[t+1])>>16},t.prototype.free=function(t){var e=this.table[t+1]
this.table[t+1]=Tr(e,br.Freed)},t.prototype.compact=function(){for(var t=0,e=this.table,n=this.table.length,r=this.heap,o=0;o<n;o+=2){var i=e[o],s=e[o+1],a=65535&s,u=-1&s
if(u!==br.Purged)if(u===br.Freed)e[o+1]=Tr(s,br.Purged),t+=a
else if(u===br.Allocated){for(var c=i;c<=o+a;c++)r[c-t]=r[c]
e[o]=i-t}else u===br.Pointer&&(e[o]=i-t)}this.offset=this.offset-t},t.prototype.capture=function(){var t=function(t,e,n){if(t instanceof Uint16Array){if(void 0!==t.slice)return t.slice(e,n).buffer
for(var r=new Uint16Array(n);e<n;e++)r[e]=t[e]
return r.buffer}return null}(this.heap,0,this.offset)
return{handle:this.handle,table:this.table,buffer:t}},t}(),Rr=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e}(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Ar,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Dr
r(this,t),this.constants=e,this.heap=n,this._opcode=new Lr(this.heap)}return t.prototype.opcode=function(t){return this._opcode.offset=t,this._opcode},t}())
function Br(t,e){var r=t.getSelf(),o=e.capture(),i=o.positional.at(0).value()
return"function"!=typeof i&&function(t,e){var r=function(t){var e="",r=void 0,o=void 0
if(null===t||void 0===t)return e
"parent"in t&&"property"in t?(r=t.parent.value(),o=t.property):"_parentValue"in t&&"_propertyKey"in t&&(r=t._parentValue,o=t._propertyKey)
void 0!==o&&(e+="('"+o+"' on "+function(t){var e=void 0===t?"undefined":n(t)
if(null===t||void 0===t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}(r)+") ")
return e}(e)
throw new Error("You tried to create an action with the {{action}} helper, but the first argument "+r+"was "+(void 0===t?"undefined":n(t))+" instead of a function.")}(i,o.positional.at(0)),new pr(function(){var t=o.positional.value()
t.shift(),t.push.apply(t,arguments),i.apply(r&&r.value(),t)})}var Ir=function(){function t(){r(this,t),this.byName=d(),this.byHandle=d()}return t.prototype.hasName=function(t){return t in this.byName},t.prototype.getHandle=function(t){return this.byName[t]},t.prototype.hasHandle=function(t){return t in this.byHandle},t.prototype.getByHandle=function(t){return this.byHandle[t]},t.prototype.register=function(t,e,n){this.byHandle[t]=n,this.byName[e]=t},t}(),Fr=function(){function t(e,n){r(this,t),this.tag=P,this.parent=e,this.property=n}return t.prototype.value=function(){return this.parent.value()[this.property]},t.prototype.get=function(e){return new t(this,e)},t}(),jr=function(){function t(e,n){r(this,t),this.tag=P,this.helper=e,this.args=n.capture()}return t.prototype.value=function(){var t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())},t.prototype.get=function(t){return new Fr(this,t)},t}(),Mr=function(){function t(e){r(this,t),this.owner=e,this.handleLookup=[],this.cache={component:new Ir,template:new Ir,compiledTemplate:new Ir,helper:new Ir,manager:new Ir,modifier:new Ir}}return t.prototype.setCompileOptions=function(t){this.templateOptions=t},t.prototype.lookup=function(t,e,n){return this.cache[t].hasName(e)?this.cache[t].getHandle(e):null},t.prototype.register=function(t,e,n){var r=this.cache[t],o=this.handleLookup.length
return this.handleLookup.push(r),this.cache[t].register(o,e,n),o},t.prototype.lookupModifier=function(t,e){var n=this.lookup("modifier",t)
if(null===n)throw new Error("Modifier for "+t+" not found.")
return n},t.prototype.compileTemplate=function(t,e){if(!this.cache.compiledTemplate.hasName(t)){var n=this.resolve(e),r=n.block,o=n.meta,i=n.id,s=JSON.parse(r),a=new zn(this.templateOptions,{id:i,block:s,referrer:o}).asLayout(),u={handle:a.compile(),symbolTable:a.symbolTable}
return this.register("compiledTemplate",t,u),u}var c=this.lookup("compiledTemplate",t)
return this.resolve(c)},t.prototype.registerHelper=function(t,e){return this.register("helper",t,function(t,n){return new jr(e,n)})},t.prototype.registerInternalHelper=function(t,e){this.register("helper",t,e)},t.prototype.registerComponent=function(t,e,n,r){var o=this.registerTemplate(e,r),i=this.managerFor(o.meta.managerId),s=new ot(t,i,n,o.handle)
return this.register("component",t,s)},t.prototype.lookupComponentHandle=function(t,e){return this.cache.component.hasName(t)||this.lookupComponent(t,e),this.lookup("component",t,e)},t.prototype.managerFor=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=void 0
if(this.cache.manager.hasName(t)){var n=this.cache.manager.getHandle(t)
return this.cache.manager.getByHandle(n)}var r=this.owner.rootName
if(!(e=this.owner.lookup("component-manager:/"+r+"/component-managers/"+t)))throw new Error("No component manager found for ID "+t+".")
return this.register("manager",t,e),e},t.prototype.registerTemplate=function(t,e){return{name:t,handle:this.register("template",t,e),meta:e.meta}},t.prototype.lookupComponent=function(t,e){var n=void 0
if(this.cache.component.hasName(t))n=this.lookup("component",t,e)
else{var r=function(t,e){if(null===t||void 0===t)throw new Error(e)
return t}(this.identifyComponent(t,e),"Could not find the component '"+t+"'"),o=this.owner.lookup("template",r),i=this.owner.identify("component",r),s=null
s=void 0!==i?this.owner.factoryFor(i):{create:function(t){return nt.create(t)}},n=this.registerComponent(t,r,s,o)}return this.resolve(n)},t.prototype.lookupHelper=function(t,e){if(!this.cache.helper.hasName(t)){var n=this.owner,r="helper:"+t,o=e.specifier,i=n.identify(r,o)
if(void 0===i)return null
var s=this.owner.lookup(i,e.specifier)
return this.registerHelper(t,s)}return this.lookup("helper",t,e)},t.prototype.lookupPartial=function(t,e){throw new Error("Partials are not available in Glimmer applications.")},t.prototype.resolve=function(t){return this.handleLookup[t].getByHandle(t)},t.prototype.identifyComponent=function(t,e){var n=this.owner,r="template:"+t,o=e.specifier,i=n.identify(r,o)
if(void 0===i&&n.identify("component:"+t,o))throw new Error("The component '"+t+"' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.")
return i},t}(),Ur={id:"j7SGa6Pm",block:'{"symbols":["root"],"statements":[[4,"each",[[22,["roots"]]],[["key"],["id"]],{"statements":[[4,"in-element",[[21,1,["parent"]]],[["guid","nextSibling"],["%cursor:0%",[21,1,["nextSibling"]]]],{"statements":[[1,[26,"component",[[21,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/application/src/templates/main"}},Hr=function(){function t(e){r(this,t),this.resolver=e}return t.prototype.getComponentDefinition=function(t){var n=this.resolver.resolve(t)
return e(!!n,"Couldn't find a template for "+t),n},t.prototype.getCapabilities=function(t){var e=this.getComponentDefinition(t),n=e.manager,r=e.state
return n.getCapabilities(r)},t.prototype.getLayout=function(t){var e=this.getComponentDefinition(t),n=e.manager.getLayout(e,this.resolver)
return{compile:function(){return n.handle},symbolTable:n.symbolTable}},t.prototype.lookupHelper=function(t,e){return this.resolver.lookupHelper(t,e)},t.prototype.lookupModifier=function(t,e){return this.resolver.lookupModifier(t,e)},t.prototype.lookupComponentSpec=function(t,e){return this.resolver.lookupComponentHandle(t,e)},t.prototype.lookupPartial=function(t,e){return this.resolver.lookupPartial(t,e)},t}(),Vr=function(t){function e(n){r(this,e)
var o=s(this,t.call(this,{appendOperations:n.appendOperations,updateOperations:new qe(n.document||document)}))
ct(o,ut(n))
var i=o.resolver=new Mr(ut(o)),a=o.program=new Rr(new Nr(i)),u=new Bt,c=new Hr(i)
return o.compileOptions={program:a,macros:u,lookup:c,Builder:zt},o.resolver.setCompileOptions(o.compileOptions),i.registerTemplate("main",Ur),i.registerInternalHelper("action",Br),i.registerHelper("if",function(t){return t[0]?t[1]:t[2]}),o.uselessAnchor=n.document.createElement("a"),o}return i(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new Ge(t.document),new e(t)},e.prototype.protocolForURL=function(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol},e.prototype.iterableFor=function(t,e){var n=void 0
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":n=function(t,e){return String(e)}
break
case"@primitive":n=function(t){return String(t)}
break
default:n=function(t){return t[e]}}return new Cr(t,n)},e}(vn),zr=function(){function t(e){r(this,t),this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._notifiers=[],this.rootName=e.rootName,this.resolver=e.resolver,this.document=e.document||"undefined"!=typeof window&&window.document}return t.prototype.renderComponent=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this._roots.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:n}),this.scheduleRerender()},t.prototype.boot=function(){this.initialize(),this.env=this.lookup("environment:/"+this.rootName+"/main/main"),this._render()},t.prototype.scheduleRerender=function(){var t=this
!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(function(){t._scheduled=!1,t._rerender(),t._rendering=!1}))},t.prototype.initialize=function(){this.initRegistry(),this.initContainer()},t.prototype.registerInitializer=function(t){this._initializers.push(t)},t.prototype.initRegistry=function(){var t=this._registry=new st,e=new wr(this._registry,this.resolver)
t.register("environment:/"+this.rootName+"/main/main",Vr),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register("document:/"+this.rootName+"/main/main",this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document","document:/"+this.rootName+"/main/main"),t.registerInjection("component-manager","env","environment:/"+this.rootName+"/main/main")
for(var n=this._initializers,r=0;r<n.length;r++)n[r].initialize(e)
this._initialized=!0},t.prototype.initContainer=function(){var t=this
this._container=new it(this._registry,this.resolver),this._container.defaultInjections=function(e){var n={}
return ct(n,t),n}},t.prototype._rerender=function(){var t=this.env,e=this._result
if(!e)throw new Error("Cannot re-render before initial render has completed")
try{t.begin(),e.rerender(),t.commit(),this._didRender()}catch(t){this._didError(t)}},t.prototype._render=function(){var t=this.env,e=this.templateIterator
try{t.begin()
var n=void 0
do{n=e.next()}while(!n.done)
t.commit(),this._result=n.value,this._didRender()}catch(t){throw this._didError(t),t}},t.prototype._didRender=function(){this._rendered=!0
var t=this._notifiers
this._notifiers=[],t.forEach(function(t){return t[0]()})},t.prototype._didError=function(t){var e=this._notifiers
this._notifiers=[],e.forEach(function(e){return e[1](t)})},t.prototype.identify=function(t,e){return this.resolver.identify(t,e)},t.prototype.factoryFor=function(t,e){return this._container.factoryFor(this.identify(t,e))},t.prototype.lookup=function(t,e){return this._container.lookup(this.identify(t,e))},o(t,[{key:"mainLayout",get:function(){return(t=Ur,e=t.id,n=t.meta,r=t.block,o=void 0,i=e||"client-"+Vn++,{id:i,meta:n,create:function(t,e){var s=e?u({},e,n):n
return o||(o=JSON.parse(r)),new zn(t,{id:i,block:o,referrer:s})}}).create(this.env.compileOptions)
var t,e,n,r,o,i}},{key:"templateIterator",get:function(){var t=this.env,e=this.mainLayout,n=new pr({roots:this._roots}),r=new kr,o={element:this.document.body,nextSibling:null}
return e.renderLayout({env:t,self:n,dynamicScope:r,builder:function(t,e){return On.forInitialRender(t,e)}(t,o)})}}]),t}()
function Wr(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function qr(t){var e=t.type,n=function(t){var e=[]
t.rootName&&e.push(t.rootName)
t.collection&&e.push(t.collection)
t.namespace&&e.push(t.namespace)
t.name&&e.push(t.name)
if(e.length>0){var n=e.join("/")
return Wr(t)&&(n="/"+n),n}}(t)
return n?e+":"+n:e}function Gr(t){var e={}
if(t.indexOf(":")>-1){var n=t.split(":"),r=n[0],o=n[1]
e.type=r
var i=void 0
0===o.indexOf("/")?(i=o.substr(1).split("/"),e.rootName=i.shift(),e.collection=i.shift()):i=o.split("/"),i.length>0&&(e.name=i.pop(),i.length>0&&(e.namespace=i.join("/")))}else e.type=t
return e}function Yr(t,e){if(!e)throw new Error("Assertion Failed: "+t)}var Kr=function(){function t(e,n){r(this,t),this.config=e,this.registry=n}return t.prototype.identify=function(t,e){if(function(t){var e=t.split(":"),n=e[0],r=e[1]
return!!(n&&r&&0===r.indexOf("/")&&r.split("/").length>3)}(t))return t
var n=Gr(t),r=void 0
if(e){var o=Gr(e)
if(Wr(o)){Yr("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=o.rootName,n.collection=o.collection
var i=this._definitiveCollection(n.type)
if(!n.name)return n.namespace=o.namespace,n.name=o.name,this._serializeAndVerify(n)
if(n.namespace=o.namespace?o.namespace+"/"+o.name:o.name,function(t){var e=t.namespace,n=t.collection,r=e.lastIndexOf("/-")
if(r>-1){r+=2
var o=e.indexOf("/",r)
n=e.slice(r,o>-1?o:void 0)}return n}(n)===i&&(r=this._serializeAndVerify(n)))return r
if(i&&(n.namespace+="/-"+i,r=this._serializeAndVerify(n)))return r
n.rootName=n.collection=n.namespace=void 0}else Yr('Referrer must either be "absolute" or include a `type` to determine the associated type',o.type),n.collection=this._definitiveCollection(o.type),n.namespace||(n.namespace=o.rootName),Yr("'"+o.type+"' does not have a definitive collection",n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),Yr("'"+n.type+"' does not have a definitive collection",n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",r=this._serializeAndVerify(n))return r
n.namespace?(n.rootName=n.namespace,n.namespace=void 0):(n.rootName=n.name,n.name="main")}return(r=this._serializeAndVerify(n))?r:void 0},t.prototype.retrieve=function(t){return this.registry.get(t)},t.prototype.resolve=function(t,e){var n=this.identify(t,e)
if(n)return this.retrieve(n)},t.prototype._definitiveCollection=function(t){var e=this.config.types[t]
return Yr("'"+t+"' is not a recognized type",e),e.definitiveCollection},t.prototype._serializeAndVerify=function(t){var e=qr(t)
if(this.registry.has(e))return e},t}(),Xr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
r(this,t),this._entries=e}return t.prototype.has=function(t){return t in this._entries},t.prototype.get=function(t){return this._entries[t]},t}(),Jr=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},$r=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.accountNamePlaceholder={freshchat:"Freshchat App",freshmarketer:"CRO Suite",freshconnect:"Freshconnect Account"},n.productsHavingSubdomain=["freshdesk","freshsales","freshteam","freshcaller","freshservice","freshmarketer","freshconnect","freshrelease"],n.productsHavingSingleAccount=[],n}return i(e,t),e.prototype.getSubdomain=function(t){var e=void 0,n=void 0
try{n=(e=new URL(t).host).split(".").length>2?e.split(".")[0]:""}catch(e){console.error("Error while trying to deduce account name for "+t+" ",e)}return n},o(e,[{key:"normalizedName",get:function(){var t=this,e=void 0
if(-1!==this.productsHavingSubdomain.indexOf(this.args.productName.toLowerCase()))this.args.name&&this.args.name.length>0?e=this.args.name:this.args.urls.some(function(n){var r=t.getSubdomain(n)
return!!r&&(e=r,!0)})
else if(-1!==this.productsHavingSingleAccount.indexOf(this.args.productName.toLowerCase()))e=this.accountNamePlaceholder[this.args.productName.toLowerCase()]
else if(this.args.name)e=this.args.name
else if(e=this.accountNamePlaceholder[this.args.productName.toLowerCase()],"freshchat"===this.args.productName.toLowerCase())try{var n=this.args.domain.split(".")[0]
e=e+" - "+n}catch(t){console.error("Error deducing account name for freshchat",t)}return e}},{key:"isCurrentAccount",get:function(){return!!this.args.currentAccount&&this.args.currentAccount.domain===this.args.domain}},{key:"accountUrl",get:function(){return this.args.urls&&this.args.urls[0]}}]),e}(nt)
Jr([K("args")],$r.prototype,"normalizedName",null)
var Qr=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e}(nt),Zr=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.modalElement=document.getElementById("freshworks-overlay-background"),n}return i(e,t),e.prototype.handleClick=function(t){t.preventDefault(),t.stopImmediatePropagation(),this.args.togglePane()},e}(nt),to=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},eo=function(){function t(e){var n=e.name,o=e.displayName,i=e.title,s=e.description,a=e.marketingUrl,u=e.addAccountUrl,c=e.accounts,p=e.current
r(this,t),this.originalName=n,this.displayName=o,this.title=i,this.description=s,this.addAccountUrl=u,this.marketingUrl=a,this.accounts=c,this.current=p}return o(t,[{key:"hasUserSubscribed",get:function(){return this.accounts.length>0}},{key:"name",get:function(){return this.originalName&&this.originalName.toLowerCase()}}]),t}()
to([K("accounts")],eo.prototype,"hasUserSubscribed",null)
var no=["freshchat"],ro=["freshping","freshstatus"],oo=["eu","au","in"],io={eu:"https://eu.api.freshworks.com/api/v1",au:"https://au.api.freshworks.com/api/v1",in:"https://in.api.freshworks.com/api/v1"},so=function(t){return"/account/"+t+"/organisation"},ao="/organisations/-/token",uo={V1:"V1",V2:"V2"}
var co="application/x-postmate-v1+json",po=0,lo={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},ho=function(t,e){return("string"!=typeof e||t.origin===e)&&(!!t.data&&(("object"!==n(t.data)||"postmate"in t.data)&&(t.data.type===co&&!!lo[t.data.postmate])))},fo=function(t,e){var n="function"==typeof t[e]?t[e]():t[e]
return go.Promise.resolve(n)},mo=function(){function t(t){var e=this
this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.events={},this.listener=function(t){if(!ho(t,e.childOrigin))return!1
var n=((t||{}).data||{}).value||{},r=n.data,o=n.name
"emit"===t.data.postmate&&o in e.events&&e.events[o].call(e,r)},this.parent.addEventListener("message",this.listener,!1)}var e=t.prototype
return e.get=function(t){var e=this
return new go.Promise(function(n){var r=++po
e.parent.addEventListener("message",function t(o){o.data.uid===r&&"reply"===o.data.postmate&&(e.parent.removeEventListener("message",t,!1),n(o.data.value))},!1),e.child.postMessage({postmate:"request",type:co,property:t,uid:r},e.childOrigin)})},e.call=function(t,e){this.child.postMessage({postmate:"call",type:co,property:t,data:e},this.childOrigin)},e.on=function(t,e){this.events[t]=e},e.destroy=function(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame)},t}(),yo=function(){function t(t){var e=this
this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",function(t){if(ho(t,e.parentOrigin)){var n=t.data,r=n.property,o=n.uid,i=n.data
"call"!==t.data.postmate?fo(e.model,r).then(function(e){return t.source.postMessage({property:r,postmate:"reply",type:co,uid:o,value:e},t.origin)}):r in e.model&&"function"==typeof e.model[r]&&e.model[r].call(e,i)}})}return t.prototype.emit=function(t,e){this.parent.postMessage({postmate:"emit",type:co,value:{name:t,data:e}},this.parentOrigin)},t}(),go=function(){function t(t){var e=t.container,n=void 0===e?void 0!==n?n:document.body:e,r=t.model,o=t.url,i=t.classListArray,s=void 0===i?[]:i
return this.parent=window,this.frame=document.createElement("iframe"),this.frame.classList.add.apply(this.frame.classList,s),n.appendChild(this.frame),this.child=this.frame.contentWindow||this.frame.contentDocument.parentWindow,this.model=r||{},this.sendHandshake(o)}return t.prototype.sendHandshake=function(e){var n,r=this,o=function(t){var e=document.createElement("a")
e.href=t
var n=e.protocol.length>4?e.protocol:window.location.protocol,r=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host
return e.origin||n+"//"+r}(e),i=0
return new t.Promise(function(t,s){r.parent.addEventListener("message",function e(i){return!!ho(i,o)&&("handshake-reply"===i.data.postmate?(clearInterval(n),r.parent.removeEventListener("message",e,!1),r.childOrigin=i.origin,t(new mo(r))):s("Failed handshake"))},!1)
var a=function(){i++,r.child.postMessage({postmate:"handshake",type:co,model:r.model},o),5===i&&clearInterval(n)},u=function(){a(),n=setInterval(a,500)}
r.frame.attachEvent?r.frame.attachEvent("onload",u):r.frame.onload=u,r.frame.src=e})},t}()
go.debug=!1,go.Promise=function(){try{return window?window.Promise:Promise}catch(t){return null}}(),go.Model=function(){function t(t){return this.child=window,this.model=t,this.parent=this.child.parent,this.sendHandshakeReply()}return t.prototype.sendHandshakeReply=function(){var t=this
return new go.Promise(function(e,n){t.child.addEventListener("message",function r(o){if(o.data.postmate){if("handshake"===o.data.postmate){t.child.removeEventListener("message",r,!1),o.source.postMessage({postmate:"handshake-reply",type:co},o.origin),t.parentOrigin=o.origin
var i=o.data.model
return i&&Object.keys(i).forEach(function(e){t.model[e]=i[e]}),e(new yo(t))}return n("Handshake Reply Failed")}},!1)})},t}()
var vo={session:{endPoint:"/session",initFunc:"initSessionChecker",cancelFunc:"clearSessionChecker",dataReceive:"sessionData"},userIncludesProducts:{endPoint:"/users/current?include=products",initFunc:"initUserIncludesProducts",dataReceive:"userIncludesProductsData",dataReceiveError:"userIncludesProductsDataError"},products:{endPoint:"/products",initFunc:"initProducts",dataReceive:"productsData",dataReceiveError:"productsDataError"},organisation:{endPoint:"/organisations/-/token",initFunc:"iniOrganisation",dataReceive:"organisationData",dataReceiveError:"organisationDataError"},trackSessionChecker:{initFunc:"trackSessionChecker"}},bo="/sessionChecker/",wo=void 0,ko=""
function Eo(t){return ko=t,wo||(wo=new go({container:document.body,url:""+t+bo,classListArray:["hide-session-checker-iframe"]})),{getSession:Po,clearSession:Oo,getUserDetails:Co,getProducts:So,getOrganisation:_o,trackSessionChecker:Ao}}function _o(t,e){return No(vo.organisation,t,e)}function So(t,e){return No(vo.products,t,e)}function Co(t,e){return No(vo.userIncludesProducts,t,e)}function Po(t,e){return No(vo.session,t,e)}function Oo(){wo.then(function(t){t.call(vo.session.cancelFunc)})}function Ao(t){wo.then(function(e){e.call(vo.trackSessionChecker.initFunc,t)})}function No(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=(e=t.endPoint,ko+"/api/v2"+e)
wo.then(function(e){e.call(t.initFunc,{apiEndPoint:o}),e.on(t.dataReceive,n),e.on(t.dataReceiveError,r)})}var Lo,xo,To={qa:"https://qa1.fid.freshworksapi.com/api/v1",staging:"https://staging.fid.freshworksapi.com/api/v1",production:"https://api.freshworks.com/api/v1"},Do=function(){function t(e){var n,o
r(this,t),this.apiEndpoint="https://api.freshworks.com/api/v1",this.localStorageKeyProducts="freshworks-omnibar:products",this.env="production",this.productsAPIEndpoint="/product",this.userAPIEndpoint="/user?include=products",this.timeToExpire=864e5,this.alwaysLoadFromNetwork=!0,this.freshIdVersion=uo.V1,this.NAME_SPACE_V2="/api/v2",this.organisationUrl="","string"==typeof e.organisationdomain&&e.organisationdomain.length>0?(this.freshIdVersion=uo.V2,this.organisationUrl=this.getOrganisationUrl(e),this.changeAPIHost(""+this.organisationUrl+this.NAME_SPACE_V2),this.proxier=Eo(this.organisationUrl)):(e.environment&&To.hasOwnProperty(e.environment)&&this.changeAPIHost(To[e.environment]),e.region&&(e.region=e.region.toLowerCase()),"production"===e.environment&&(n=oo,o=e.region,-1!==n.indexOf(o))&&this.changeAPIHost(io[e.region])),this.config=e}return t.prototype.hasExpired=function(t){return Date.now()-t>this.timeToExpire},t.prototype.getOrganisationUrl=function(t){return"https://"+t.organisationdomain},t.prototype.changeAPIHost=function(t){return this.apiEndpoint=t,this},t.prototype.getProducts=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).force,e=void 0!==t&&t,n=Object.assign({},this.config,{force:e}),r=JSON.parse(localStorage.getItem(this.localStorageKeyProducts))
return!localStorage||!r||this.hasExpired(r.savedAt)||this.alwaysLoadFromNetwork||n.force?this.normalizeProducts():Promise.resolve(this.retrieveProductsFromLocalStorage())},t.prototype.getUserDetails=function(){var t=this
return this.userDetails?Promise.resolve(this.userDetails):this.fetchUserDetails().then(function(e){return t.userDetails=new function t(e){var n=e.email,o=e.uuid,i=e.first_name,s=e.last_name,a=e.company_name,u=e.products,c=e.admin,p=e.job_title,l=e.create_time,h=e.update_time,d=e.activate_time
r(this,t),this.email=n,this.uuid=o,this.firstName=i,this.lastName=s,this.companyName=a,this.products=u,this.isAdmin=c,this.jobTitle=p,this.createTime=l,this.updateTime=h,this.activateTime=d}(e),t.userDetails})},t.prototype.getCurrentAccount=function(){var t=this
return this.normalizeProducts().then(function(e){var n,r,o=(n=e.map(function(t){return t.accounts.map(function(e){return Object.assign({},e,{productName:t.displayName})})}),r=[],n.forEach(function(t){r=[].concat(r,t)}),r),i=void 0
try{i=o.filter(t.isCurrentAccount)}catch(t){console.warn("Could not deduce current account \n",t),i=[]}return i.length>0?i[0]:null})},t.prototype.getOrganisationForCurrentAccount=function(t){var e=this,n=""
if(this.isFreshIDVersion(uo.V2))return n=this.apiEndpoint+ao,new Promise(function(t,n){e.proxier.getOrganisation(function(e){var n=e.organisation,o=e.join_token
t(new function t(e,n){r(this,t),this.organisation=e,this.join_token=n}(n,o))},function(){n(null)})})
var o=t.domain
return n=this.apiEndpoint+so(o),fetch(n,{credentials:"include",headers:{"content-type":"application/json"}}).then(function(t){return t.json().then(function(t){return new function t(e){var n=e.id,o=e.name,i=e.address,s=e.phone,a=e.description,u=e.created_at,c=e.updated_at,p=e.join_token
r(this,t),this.id=n,this.name=o,this.address=i,this.phone=s,this.description=a,this.createdAt=u,this.updatedAt=c,this.joinToken=p}(t)})}).catch(function(){return null})},t.prototype.normalizeProducts=function(){var t=this,e=this.config
return this.getProductsPromise?this.getProductsPromise:(e.apihost&&this.changeAPIHost(e.apihost),this.getProductsPromise=Promise.all([this.fetchProducts(),this.getUserDetails()]).then(function(n){var r=n[0],o=n[1],i=r.filter(function(t){return t.display_name&&t.display_name.length>0}).map(function(n){var r={accounts:[]}
return t.isUserUsingProduct(o,n)&&(r.accounts=t.getAccountsForProduct(o,n)),r.name=n.name,r.displayName=n.display_name,r.title=n.title,r.description=n.description,t.isFreshIDVersion(uo.V1)&&(r.marketingUrl=n.marketing_url,r.addAccountUrl=n.add_account_url),t.isFreshIDVersion(uo.V2)&&o.isAdmin&&(r.marketingUrl=n.marketing_url,r.addAccountUrl=n.add_account_url),(e.product&&e.product.length>0&&e.product.toLowerCase())===r.displayName.toLowerCase()?r.current=!0:r.current=!1,new eo(r)})
return t.saveProductsToLocalStorage(i),i}).catch(function(t){return console.error("Omnibar could not be initiated because of network request failure \n",t),Promise.resolve(null)}),this.getProductsPromise)},t.prototype.isUserUsingProduct=function(t,e){return(t.products||[]).filter(function(t){return t.display_name&&t.display_name.length>0}).some(function(t){return t.display_name.toLowerCase()===e.display_name.toLowerCase()})},t.prototype.getAccountsForProduct=function(t,e){var n=[]
return t.products&&(n=t.products.filter(function(t){return t.display_name&&t.display_name.length>0}).filter(function(t){return t.display_name.toLowerCase()===e.display_name.toLowerCase()}).map(function(t){return t.accounts})[0]),n},t.prototype.fetchProducts=function(){var t=this,e=void 0
return this.isFreshIDVersion(uo.V2)?new Promise(function(e){t.proxier.getProducts(function(t){e(t.productList)})}):(e=this.productsAPIEndpoint,fetch(this.apiEndpoint+e,{credentials:"include",headers:{"content-type":"application/json"}}).then(function(t){return t.json().then(function(t){return t})}))},t.prototype.fetchUserDetails=function(){var t=this,e=void 0
return this.isFreshIDVersion(uo.V2)?new Promise(function(e){t.proxier.getUserDetails(function(t){e(Object.assign({},t.user,{products:t.productList}))})}):(e=this.userAPIEndpoint,fetch(this.apiEndpoint+e,{credentials:"include",headers:{"content-type":"application/json"}}).then(function(t){return t.json().then(function(t){return t})}))},t.prototype.retrieveProductsFromLocalStorage=function(){var t=JSON.parse(localStorage.getItem(this.localStorageKeyProducts))
return t.products&&!t.products.length?[]:t.products.map(function(t){return new eo(Object.assign({},t))})},t.prototype.saveProductsToLocalStorage=function(t){if("localStorage"in window){var e={products:t,savedAt:Date.now()}
localStorage.setItem(this.localStorageKeyProducts,JSON.stringify(e))}},t.prototype.isCurrentAccount=function(t){var e=window.location,n=e.pathname,r=e.host,o=t.urls,i=(t.productName||"").toLowerCase()
if(-1!==no.indexOf(i.toLowerCase())||-1!==ro.indexOf(i.toLowerCase()))return o.some(function(t){var e=new URL(t),o=e.host,i=e.pathname
return r===o&&n.includes(i)})
try{return o.some(function(t){return new URL(t).host===r})}catch(e){return console.error("\n          Error deducing current account status for account with url "+(t.urls&&t.urls.join(""))+" for "+i+"\n        ",e),!1}},t.prototype.isFreshIDVersion=function(t){return this.freshIdVersion===t},t}(),Ro={esc:27},Bo=function(t,e){Ro[t]?document.body.addEventListener("keydown",function(n){n&&(n.keyCode||n.which)===Ro[t]&&e(n)}):console.warn("WARNING! Key binding not found.")},Io=function(t){document.body.removeEventListener("keydown",t)}
Lo=window,xo=function(){var t=t||function(t,e){var n=Object.create||function(){function t(){}return function(e){var n
return t.prototype=e,n=new t,t.prototype=null,n}}(),r={},o=r.lib={},i=o.Base={extend:function(t){var e=n(this)
return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend()
return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])
t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},s=o.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},toString:function(t){return(t||u).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,o=t.sigBytes
if(this.clamp(),r%4)for(var i=0;i<o;i++){var s=n[i>>>2]>>>24-i%4*8&255
e[r+i>>>2]|=s<<24-(r+i)%4*8}else for(i=0;i<o;i+=4)e[r+i>>>2]=n[i>>>2]
return this.sigBytes+=o,this},clamp:function(){var e=this.words,n=this.sigBytes
e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this)
return t.words=this.words.slice(0),t},random:function(e){for(var n,r=[],o=function(e){e=e
var n=987654321,r=4294967295
return function(){var o=((n=36969*(65535&n)+(n>>16)&r)<<16)+(e=18e3*(65535&e)+(e>>16)&r)&r
return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}},i=0;i<e;i+=4){var a=o(4294967296*(n||t.random()))
n=987654071*a(),r.push(4294967296*a()|0)}return new s.init(r,e)}}),a=r.enc={},u=a.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255
r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4
return new s.init(n,e/2)}},c=a.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255
r.push(String.fromCharCode(i))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8
return new s.init(n,e)}},p=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=p.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,o=n.sigBytes,i=this.blockSize,a=o/(4*i),u=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*i,c=t.min(4*u,o)
if(u){for(var p=0;p<u;p+=i)this._doProcessBlock(r,p)
var l=r.splice(0,u)
n.sigBytes-=c}return new s.init(l,c)},clone:function(){var t=i.clone.call(this)
return t._data=this._data.clone(),t},_minBufferSize:0}),h=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new h.HMAC.init(t,n).finalize(e)}}}),r.algo={})
return r}(Math)
return t},"object"===("undefined"==typeof exports?"undefined":n(exports))?module.exports=exports=xo():"function"==typeof define&&define.amd?define([],xo):Lo.CryptoJS=xo(),function(t,e){"object"===("undefined"==typeof exports?"undefined":n(exports))?module.exports=exports=e(require("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(t.CryptoJS)}(window,function(t){return function(e){var n=t,r=n.lib,o=r.WordArray,i=r.Hasher,s=n.algo,a=[],u=[];(function(){function t(t){for(var n=e.sqrt(t),r=2;r<=n;r++)if(!(t%r))return!1
return!0}function n(t){return 4294967296*(t-(0|t))|0}for(var r=2,o=0;o<64;)t(r)&&(o<8&&(a[o]=n(e.pow(r,.5))),u[o]=n(e.pow(r,1/3)),o++),r++})()
var c=[],p=s.SHA256=i.extend({_doReset:function(){this._hash=new o.init(a.slice(0))},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],o=n[1],i=n[2],s=n[3],a=n[4],p=n[5],l=n[6],h=n[7],d=0;d<64;d++){if(d<16)c[d]=0|t[e+d]
else{var f=c[d-15],m=(f<<25|f>>>7)^(f<<14|f>>>18)^f>>>3,y=c[d-2],g=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10
c[d]=m+c[d-7]+g+c[d-16]}var v=r&o^r&i^o&i,b=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),w=h+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&p^~a&l)+u[d]+c[d]
h=l,l=p,p=a,a=s+w|0,s=i,i=o,o=r,r=w+(b+v)|0}n[0]=n[0]+r|0,n[1]=n[1]+o|0,n[2]=n[2]+i|0,n[3]=n[3]+s|0,n[4]=n[4]+a|0,n[5]=n[5]+p|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,o=8*t.sigBytes
return n[o>>>5]|=128<<24-o%32,n[14+(o+64>>>9<<4)]=e.floor(r/4294967296),n[15+(o+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this)
return t._hash=this._hash.clone(),t}})
n.SHA256=i._createHelper(p),n.HmacSHA256=i._createHmacHelper(p)}(Math),t.SHA256})
var Fo,jo,Mo="freshworksOmnibar:",Uo={SHOW_PROMOTION_FOR_PRODUCT:Mo+"showPromotionForProduct",OMNIBAR_OPENED:Mo+"opened",OMNIBAR_CLOSED:Mo+"closed",OMNIBAR_NEW_SIGNUP_OR_ACCOUNT_CLOSED:Mo+"newSignUpOrAccountClosed",OMNIBAR_NEW_ACCOUNT_OPENED:Mo+"newAccountOpened",NEW_SIGNUP_OPENED:Mo+"newSignupOpened",SESSION_STATE_CHANGED:Mo+"sessionStateChanged"},Ho=function(t){var e=function(t){if(!t&&"string"!=typeof t)return""
var e=t.replace(Mo,"")
return"on"+(e.charAt(0).toUpperCase()+e.substr(1,e.length))}(t)
if(""===e)return!1
var n=window.freshworksOmnibar[e]
return!(!n||"function"!=typeof n)&&n},Vo=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]},zo=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]},Wo=function(){var t=window.location.origin,e=window.location.port
return e&&(t=t.replace(":"+e,"")),t},qo=function(t){return t.split(".")[1]},Go=function(t,e,n){var r=t.sessionstate
if(function(t){return Vo("omnibarConfig",t),t.clientid?"string"!=typeof t.sessionstate?(zo("Session state is not set by the product. Cannot proceed with session checker."),!1):qo(t.sessionstate)?!!t.organisationdomain||(zo("Organisation Domain is not set by the product. Cannot proceed with session checker."),!1):(zo("Cannot get Salt from session state. Cannot proceed with session checker."),!1):(zo("Client ID is not set by the product. Cannot proceed with session checker."),!1)}(t)){var o=Eo(e),i=function(t,r){var i=r.clientid,s=r.sessionstate,a=qo(s),u=Wo()
o.trackSessionChecker({name:Uo.SESSION_STATE_CHANGED,properties:{clientid:i,sessionstate:s,salt:a,origin:u,organisationUrl:e,sessionId:t}}),setTimeout(function(){n(Uo.SESSION_STATE_CHANGED)},500)}
o.getSession(function(e){var n=e.success,o=e.sessionId
if(e.skip)Vo("SESSION_STATE","computation skipped")
else if(n){var s=null
try{s=function(t,e){var n=e.clientid,r=e.sessionstate,o=qo(r),i=Wo()
return btoa(CryptoJS.SHA256(n+" "+i+" "+t+" "+o))+"."+o}(o,t)}catch(e){i(o,t)}Vo("SESSION_STATE",r),Vo("computedSessionState",s),r!==s&&i(o,t)}else i(o,t)},function(t){console.error("Error initiating handshake with child iframe.",t)})}},Yo=function(t){Eo(t).clearSession()},Ko=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a};(function(t){t.CLOSE="close",t.OPEN="open"})(Fo||(Fo={})),function(t){t.CLOSE="close",t.OPEN="open"}(jo||(jo={}))
var Xo=function(t){function e(o){r(this,e)
var i=s(this,t.call(this,o))
return i.products=[],i.omnibarPaneMode=jo.CLOSE,i.productPromotionMode=Fo.CLOSE,i.isIntentAddNewAccount=!1,i.registeredEvents={},i.onEscPress=function(t){i.productPromotionMode!==Fo.OPEN&&i.omnibarPaneMode!==jo.OPEN||(i.productPromotionMode===Fo.OPEN?i.toggleProductPromotionContainer():i.omnibarPaneMode===jo.OPEN&&i.toggleOmnibarPane({close:!0}),t.stopPropagation())},"object"!==n(window.freshworksOmnibar)&&(window.freshworksOmnibar={}),i}return i(e,t),e.prototype.didInsertElement=function(){var t=this
this.eventTarget=this.bounds.firstNode.parentElement.querySelector("[data-omnibar-event-target]"),setTimeout(function(){t.acquireConfig(),t.initStore(),t.freshIdVersion===uo.V2&&t.initSessionChecker()},10),this.registeredEvents.toggleOmnibarPane=function(){t.toggleOmnibarPane()},this.eventTarget.addEventListener("toggleOmnibar",this.registeredEvents.toggleOmnibarPane),this.registeredEvents.showOmnibarPane=function(){t.toggleOmnibarPane({open:!0})},this.eventTarget.addEventListener("showOmnibar",this.registeredEvents.showOmnibarPane),this.registeredEvents.hideOmnibarPane=function(){t.toggleOmnibarPane({close:!0})},this.eventTarget.addEventListener("hideOmnibar",this.registeredEvents.hideOmnibarPane),this.registeredEvents.showPromotionForProduct=function(e){var n=e.detail.productName,r=(void 0===n?"":n).toLowerCase(),o=function(t){return t.map(function(t){return t.displayName.toLowerCase()})}
r?-1!==o(t.productsToPromote).indexOf(r)?(t.toggleOmnibarPane({open:!0}),t.toggleProductPromotionContainer(r)):-1!==o(t.productsAlreadySubscribed).indexOf(r)?console.error("You are trying to open signup page for "+r+". But the user already have an account with "+r):console.error("You are trying to open a signup page for "+r+". But looks the product is not listed in Omnibar"):console.error("To open a signup dialog for a product, you need to pass the product name")},this.eventTarget.addEventListener("showPromotionForProduct",this.registeredEvents.showPromotionForProduct),window.addEventListener("message",function(e){var n=e.data
"string"==typeof n.type&&n.type.startsWith&&!n.type.startsWith("freshworksOmnibar:")||n.type===Uo.SHOW_PROMOTION_FOR_PRODUCT&&t.registeredEvents.showPromotionForProduct(Object.assign({},e,n))}),this.registeredEvents.refreshUserAccounts=function(){t.updateStore()},this.eventTarget.addEventListener("refreshUserAccounts",this.registeredEvents.refreshUserAccounts),this.bindKeyboardEvents()},e.prototype.didUpdate=function(){var t=this,e=document.querySelector("body")
setTimeout(function(){t.shouldOmnibarBeExpanded?e.classList.add("omnibar-overlay-visible"):e.classList.remove("omnibar-overlay-visible"),e.classList.remove("product-promote-container-visible"),t.selectedPromotedProduct&&e.classList.add("product-promote-container-visible"),t.adjustHeighOfFreshworkProductsContainer()},0)},e.prototype.initSessionChecker=function(){Go(this.config,this.store.organisationUrl,this.emit.bind(this))},e.prototype.willDestroy=function(){var t=this.bounds.firstNode.parentElement.querySelector("[data-omnibar-event-target]")
for(var e in this.registeredEvents)this.registeredEvents.hasOwnProperty(e)&&t.removeEventListener(e,this.registeredEvents[e])
this.freshIdVersion===uo.V2&&Yo(this.store.organisationUrl),this.undbindKeyboardEvents()},e.prototype.updateStore=function(t){var e=this
return this.store.getProducts({force:!0}).then(function(t){return e.products=t,t})},e.prototype.toggleOmnibarPane=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return e.open?this.omnibarPaneMode=jo.OPEN:e.close?this.manageAnimationForOmnibarPane().then(function(){t.omnibarPaneMode=jo.CLOSE}):this.omnibarPaneMode===jo.CLOSE?this.omnibarPaneMode=jo.OPEN:this.omnibarPaneMode===jo.OPEN&&this.manageAnimationForOmnibarPane().then(function(){t.omnibarPaneMode=jo.CLOSE}),this.shouldOmnibarBeExpanded?this.emit(Uo.OMNIBAR_OPENED):this.emit(Uo.OMNIBAR_CLOSED),this.omnibarPaneMode},e.prototype.toggleProductPromotionContainer=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments[2]
if(!r||"keydown"!==r.type||"Enter"===r.key){var o,i
if(t){if(this.selectedPromotedProduct=t.toLowerCase(),this.productPromotionMode=Fo.OPEN,this.isIntentAddNewAccount=n,n){if(window.heap)window.heap.track("Omnibar - Add Account Intent",((o={}).Product=t.toLowerCase(),o))}else if(window.heap)window.heap.track("Omnibar - Signup For Product Intent",((i={}).Product=t.toLowerCase(),i))}else this.manageAnimationForPromotionContainer().then(function(){e.selectedPromotedProduct=null,e.isIntentAddNewAccount=null,e.productPromotionMode=Fo.CLOSE})
this.productPromotionMode===Fo.CLOSE?this.emit(Uo.OMNIBAR_NEW_SIGNUP_OR_ACCOUNT_CLOSED):this.productPromotionMode===Fo.OPEN&&(n?this.emit(Uo.OMNIBAR_NEW_ACCOUNT_OPENED,{product:t}):this.emit(Uo.NEW_SIGNUP_OPENED,{product:t}))}},e.prototype.acquireConfig=function(){var t,e,n=this.eventTarget
for(var r in window.freshworksOmnibar){var o
if(window.freshworksOmnibar.hasOwnProperty(r))this.config=Object.assign({},this.config,((o={})[r.toLowerCase()]=window.freshworksOmnibar[r],o))}for(var i in n.dataset)if(n.dataset.hasOwnProperty(i)&&-1!==i.toLowerCase().indexOf("omnibar")){var s,a,u=n.dataset[i],c=(void 0,-1!==(e=(t=i).indexOf("omnibar"))?t.slice(e+"omnibar".length).toLowerCase():t)
if(u)this.config=Object.assign({},this.config,((s={})[c]=n.dataset[i],s))
else if("eventtarget"!==c)this.config=Object.assign({},this.config,((a={})[c]=!0,a))}this.config.environment||(this.config=Object.assign({},this.config,{environment:"production"}))},e.prototype.initStore=function(){var t=this
this.store=new Do(this.config),this.store.getProducts().then(function(e){return t.products=e}).then(function(){return t.store.getUserDetails().then(function(e){return t.userDetails=e})}).then(function(){return t.store.getCurrentAccount().then(function(e){t.currentAccount=e})}),this.freshIdVersion=this.store.freshIdVersion},e.prototype.emit=function(t,e){var n=new CustomEvent(t,{detail:e}),r=Ho(t)
"function"==typeof r&&r(),this.eventTarget.dispatchEvent(n)},e.prototype.manageAnimationForOmnibarPane=function(){var t=document.querySelector(".omnibar-pane-container")
return new Promise(function(e){t.classList&&(t.classList.remove("fadeInLeft"),t.classList.add("fadeOutLeft")),setTimeout(e,200)})},e.prototype.manageAnimationForPromotionContainer=function(){var t=document.querySelector(".freshworks-product-promotion-background")
return new Promise(function(e){t.classList&&(t.classList.remove("zoomIn"),t.classList.add("fadeOutLeft")),setTimeout(e,400)})},e.prototype.adjustHeighOfFreshworkProductsContainer=function(){var t=document.querySelector(".promoted-products-container"),e=document.querySelector(".subscribed-products-container"),n=0
t&&(n=t.offsetHeight),e&&(e.style.bottom=n+20+"px")},e.prototype.bindKeyboardEvents=function(){Bo("esc",this.onEscPress)},e.prototype.undbindKeyboardEvents=function(){Io("esc",this.onEscPress)},o(e,[{key:"hasProductsLoaded",get:function(){return this.products.length>0}},{key:"hasUserDetailsLoaded",get:function(){return!(!this.userDetails||"string"!=typeof this.userDetails.email)}},{key:"shouldLoadOmnibar",get:function(){return!(!this.hasUserDetailsLoaded||!this.hasProductsLoaded||this.config.hide)}},{key:"shouldDisplayPromotedProducts",get:function(){return!this.config.hidepromotions}},{key:"productsAlreadySubscribed",get:function(){var t=this.products.filter(function(t){return t.hasUserSubscribed}),e=this.config.product
if(t.length>0&&e&&e.length>0){var n=null
t.forEach(function(t,r){t.displayName.toLowerCase()===e&&(n=r)})
var r=t.splice(n,1)[0]
t.splice(0,0,r)}return t}},{key:"productsToPromote",get:function(){return this.products.filter(function(t){return!t.hasUserSubscribed&&t.marketingUrl})}},{key:"shouldOmnibarBeExpanded",get:function(){return this.omnibarPaneMode===jo.OPEN}},{key:"selectedPromotedProductObj",get:function(){var t=this
return null===this.selectedPromotedProduct?null:this.products.filter(function(e){return e.displayName.toLowerCase()===t.selectedPromotedProduct})[0]}},{key:"getOrganisationForCurrentAccount",get:function(){var t=this
return function(){return t.store.getCurrentAccount().then(function(e){return e||t.freshIdVersion!==uo.V1?t.store.getOrganisationForCurrentAccount(e):Promise.reject("Cannot deduce current account")})}}}]),e}(nt)
Ko([K],Xo.prototype,"products",void 0),Ko([K],Xo.prototype,"userDetails",void 0),Ko([K],Xo.prototype,"omnibarPaneMode",void 0),Ko([K],Xo.prototype,"productPromotionMode",void 0),Ko([K],Xo.prototype,"isIntentAddNewAccount",void 0),Ko([K],Xo.prototype,"selectedPromotedProduct",void 0),Ko([K],Xo.prototype,"freshIdVersion",void 0),Ko([K("products")],Xo.prototype,"hasProductsLoaded",null),Ko([K("userDetails")],Xo.prototype,"hasUserDetailsLoaded",null),Ko([K("hasProductsLoaded","config")],Xo.prototype,"shouldLoadOmnibar",null),Ko([K("config")],Xo.prototype,"shouldDisplayPromotedProducts",null),Ko([K("products")],Xo.prototype,"productsAlreadySubscribed",null),Ko([K("products")],Xo.prototype,"productsToPromote",null),Ko([K("omnibarPaneMode")],Xo.prototype,"shouldOmnibarBeExpanded",null),Ko([K("selectedPromotedProduct")],Xo.prototype,"selectedPromotedProductObj",null)
var Jo=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.modalElement=document.getElementById("freshworks-products-sidebar-container"),n}return i(e,t),e}(nt),$o={staging:187911629,test:1862663748,production:3040207180}
function Qo(){var t=void 0,e=!0
return{start:function(n){var r=n.environment,o=n.force,i=n.userDetails,s=n.userRole,a=n.hostProduct,u=n.productsAlreadySubscribed
if(t=r,window.location.href.includes("localhost:4200")&&(t="development"),"development"!==t&&t||(e=!1),o&&(e=!0,t="test",console.warn("Tracking analytics in dev mode, use the `force` flag to stop tracking.")),e){if(window.heap&&(window.oldHeap=window.heap,window.heap=void 0),window.omnibarHeapInstance)window.heap=window.omnibarHeapInstance
else{var c,p
window.heap=window.heap||[],heap.load=function(t,e){window.heap.appid=t,window.heap.config=e=e||{}
var n=e.forceSSL||"https:"===document.location.protocol,r=document.createElement("script")
r.type="text/javascript",r.async=!0,r.src=(n?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+t+".js"
var o=document.getElementsByTagName("script")[0]
o.parentNode.insertBefore(r,o)
for(var i=function(t){return function(){heap.push([t].concat(Array.prototype.slice.call(arguments,0)))}},s=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],a=0;a<s.length;a++)heap[s[a]]=i(s[a])},window.heap.load($o[t]),window.omnibarHeapInstance=window.heap,window.heap.identify(i.uuid,"ID")
var l=function(t){var e={}
return t.products.forEach(function(t){var n=t.display_name,r=t.accounts.length
e["Number of accounts in "+n]=r}),e}(i)
window.heap.addUserProperties(Object.assign(((c={})["Company Name"]=i.companyName,c["User Role"]=s,c["Products Already Subscribed"]=u.join(" | "),c),l)),window.heap.addEventProperties(((p={})["Host product"]=a,p))}window.heap&&window.heap.track("Omnibar - Open")}else console.warn("Will not track analytics in dev mode, use the `force` flag to track")},stop:function(){e&&window.oldHeap&&(window.heap=window.oldHeap,window.oldHeap=void 0)},track:function(){var t
window.heap&&(t=window).heap.apply(t,arguments)}}}var Zo=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.modalElement=document.getElementById("freshworks-products-sidebar-container"),n}return i(e,t),e.prototype.didInsertElement=function(){if(this.omnibarTracker=Qo(),!this.args.disableAnalytics)try{this.omnibarTracker.start({environment:this.args.environment,hostProduct:this.args.hostProduct,productsAlreadySubscribed:this.args.productsAlreadySubscribed.map(function(t){return t.displayName.toLowerCase()}),userDetails:this.args.user,userRole:this.args.userRole,force:!1})}catch(t){console.error("There was some problem while initiating heap for omnibar",t)}this.isFreshIdVersion2&&this.computeStylesForManageOrgCard()},e.prototype.computeStylesForManageOrgCard=function(){var t=document.querySelector(".omnibar-pane-header-container"),e=document.querySelector(".freshworks-products-container"),n=0,r=0
t&&(n=t.offsetHeight,t.style.height=n+30+"px"),e&&(r=e.offsetHeight,e.style.marginTop="30px",e.style.height=r-60+"px")},e.prototype.willDestroy=function(){this.args.disableAnalytics||this.omnibarTracker.stop()},o(e,[{key:"getOrgDomain",get:function(){return this.args.organisationUrl.replace("https://","")}},{key:"isFreshIdVersion2",get:function(){return"V2"===this.args.freshIdVersion}}]),e}(nt),ti=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},ei=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),o(e,[{key:"canLinkLogoToOrgUrl",get:function(){return this.args.organisationUrl&&this.args.organisationUrl.length>0}}]),e}(nt)
ti([K("organisationUrl")],ei.prototype,"canLinkLogoToOrgUrl",null)
var ni=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e}(nt),ri=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},oi=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e.prototype.openPrimaryAccountUrl=function(t){t.stopPropagation(),this.primaryAccountUrl&&(t.metaKey||t.ctrlKey?window.open(this.primaryAccountUrl):window.location.href=this.primaryAccountUrl)},o(e,[{key:"primaryAccountUrl",get:function(){return this.args.accounts[0].urls[0].length?this.args.accounts[0].urls[0]:""}},{key:"displayName",get:function(){return this.args.displayName.toLowerCase()}}]),e}(nt)
ri([K("args")],oi.prototype,"primaryAccountUrl",null),ri([K("args")],oi.prototype,"displayName",null)
var ii=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},si=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.modalElement=document.getElementById("freshworks-product-promote-container"),n.organisationForCurrentAccount=null,n}return i(e,t),e.prototype.didInsertElement=function(){var t=document.getElementById("freshworks-omnibar-product-promote")
this.eventListenerForIframeEvents=this.eventListenerForIframeEvents.bind(this),window.addEventListener("message",this.eventListenerForIframeEvents,!1),t&&(t.querySelector("iframe").onload=function(){t.classList.add("child-iframe-loaded")}),this.organisationForCurrentAccount=this.args.getOrganisationForCurrentAccount()},e.prototype.willDestroy=function(){window.removeEventListener("message",this.eventListenerForIframeEvents)},e.prototype.shareFreshworksDataWithIframe=function(t){var e=this,n=function(n){var r={type:"init",user:e.args.user,currentAccount:e.args.currentAccount,freshIdVersion:e.args.freshIdVersion},o=e.args.freshIdVersion
o===uo.V1&&(r.organisationForCurrentAccount=n),o===uo.V2&&(r.joinToken=n&&n.join_token),t.contentWindow.postMessage(r,"*")}
this.organisationForCurrentAccount.then(n,n)},e.prototype.eventListenerForIframeEvents=function(t){if("omnibarSDKLoaded"===t.data.type){var e=document.getElementById("freshworks-omnibar-product-promote").querySelector("iframe")
this.shareFreshworksDataWithIframe(e)}else if("closeProductPromoteContainer"===t.data.type)this.args.toggleProductPromotion()
else if("openFreshworksUrl"===t.data.type){var n,r,o=t.data.url
if(setTimeout(function(){window.location.href=o},1e3),window.heap)if(this.args.isUserAddingAccount)window.heap.track("Omnibar - New Account Added Successfully",((n={}).Product=this.args.selectedProduct.displayName.toLowerCase(),n))
else window.heap.track("Omnibar - Product Signup Successful",((r={}).Product=this.args.selectedProduct.displayName.toLowerCase(),r))}},e.prototype.doesUrlHasParams=function(t){return!(!t||!t.marketingUrl)&&new URL(t.marketingUrl).search.length>0},o(e,[{key:"iframeURLParams",get:function(){var t=[]
return this.args.hostProduct&&this.args.hostProduct.length>0&&t.push("referring_product="+this.args.hostProduct),this.args.userRole&&this.args.userRole.length>0&&t.push("role="+this.args.userRole),(t=t.join("&")).length>0&&(t=this.doesUrlHasParams(this.args.selectedProduct)?"&"+t:"?"+t),t}}]),e}(nt)
ii([K("args")],si.prototype,"iframeURLParams",null)
var ai=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e}(nt),ui=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e}(nt),ci=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},pi=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),o(e,[{key:"displayName",get:function(){return this.args.displayName.toLowerCase()}},{key:"isHostProduct",get:function(){return this.args.hostProduct===this.displayName.toLowerCase()}}]),e}(nt)
ci([K("args")],pi.prototype,"displayName",null),ci([K("args","displayName")],pi.prototype,"isHostProduct",null)
var li=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),e}(nt),hi=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},di=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),o(e,[{key:"initial",get:function(){return this.args.name&&this.args.name.length>0?this.args.name[0]:""}}]),e}(nt)
hi([K("name")],di.prototype,"initial",null)
var fi=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o)
else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a)
return s>3&&a&&Object.defineProperty(e,r,a),a},mi=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return i(e,t),o(e,[{key:"organistaionDomain",get:function(){return this.args.organisationUrl&&this.args.organisationUrl.replace("https://","")}},{key:"region",get:function(){var t=this.args.region||"us"
return"us"===t.toLowerCase()&&(t=""),t}},{key:"userAccountUrl",get:function(){var t=this.region,e=window.location.origin
if(this.args.freshIdVersion===uo.V2)return this.args.organisationUrl+"/profile?redirect_uri="+e
switch(this.args.environment){case"development":case"qa":return"https://qa1.fid.freshworksapi.com/profile?redirect_uri="+e
case"staging":return"https://staging-ui.fid.freshworksapi.com/profile?redirect_uri="+e
case"production":default:return"https://"+(t?t+".":"")+"accounts.freshworks.com/profile?redirect_uri="+e}}},{key:"userLogoutUrl",get:function(){var t=window.location.origin,e=""
return e=this.args.freshIdVersion===uo.V2?"/logout?post_logout_redirect_uri="+t:"/logout/start?redirect_uri="+t,""+this.args.apiEndpoint+e}},{key:"isFreshIdVersion2",get:function(){return"V2"===this.args.freshIdVersion}}]),e}(nt)
fi([K("args")],mi.prototype,"organistaionDomain",null),fi([K("args")],mi.prototype,"region",null),fi([K("args")],mi.prototype,"userAccountUrl",null),fi([K("args")],mi.prototype,"userLogoutUrl",null)
var yi,gi={"component:/freshworks-omnibar/components/Account":$r,"template:/freshworks-omnibar/components/Account":{id:"oFyDCre5",block:'{"symbols":["@productName"],"statements":[[6,"li"],[10,"class","product-account"],[11,"data-is-current-account",[26,"if",[[22,["isCurrentAccount"]],true],null],null],[8],[0,"\\n  "],[6,"a"],[11,"title",[27,[[20,"normalizedName"]]]],[11,"href",[27,[[20,"accountUrl"]]]],[10,"target","_blank"],[10,"data-analytics-account-switch",""],[11,"data-analytics-product",[21,1,[]],null],[10,"tabindex","2"],[8],[0,"\\n      "],[1,[20,"normalizedName"],false],[0,"\\n    "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/Account"}},"component:/freshworks-omnibar/components/Accounts":Qr,"template:/freshworks-omnibar/components/Accounts":{id:"Z+TAddPG",block:'{"symbols":["account","index","@productName","@currentAccount","@accounts"],"statements":[[6,"ul"],[10,"class","accounts-for-product-container"],[11,"data-freshworks-product",[20,"product"],null],[8],[0,"\\n"],[4,"each",[[21,5,[]]],[["key"],["index"]],{"statements":[[0,"    "],[5,"Account",[],[["@index","@name","@domain","@urls","@productName","@currentAccount"],[[21,2,[]],[21,1,["name"]],[21,1,["domain"]],[21,1,["urls"]],[21,3,[]],[21,4,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1,2]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/Accounts"}},"component:/freshworks-omnibar/components/BackgroundOverlay":Zr,"template:/freshworks-omnibar/components/BackgroundOverlay":{id:"kQfRgyM7",block:'{"symbols":[],"statements":[[4,"in-element",[[22,["modalElement"]]],[["guid","nextSibling"],["%cursor:0%",null]],{"statements":[[0,"  "],[6,"div"],[10,"class","overlay-background"],[11,"onclick",[26,"action",[[22,["handleClick"]]],null],null],[8],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/BackgroundOverlay"}},"component:/freshworks-omnibar/components/FreshworksOmnibar":Xo,"template:/freshworks-omnibar/components/FreshworksOmnibar":{id:"RgwVK1Zi",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","freshworks-omnibar-event-target"],[10,"data-omnibar-event-target",""],[8],[0,"\\n"],[4,"if",[[22,["shouldLoadOmnibar"]]],null,{"statements":[[0,"    "],[6,"div"],[11,"class",[27,["trigger-button-container ",[26,"if",[[22,["shouldSidebarBeExpanded"]],"active"],null]]]],[8],[0,"\\n      "],[5,"OmnibarTriggerButton",[],[["@onTogglePane"],[[26,"action",[[22,["toggleOmnibarPane"]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n\\n"],[4,"if",[[22,["shouldOmnibarBeExpanded"]]],null,{"statements":[[0,"      "],[5,"OmnibarPane",[],[["@user","@productsAlreadySubscribed","@productsToPromote","@currentAccount","@selectedPromotedProductObj","@userRole","@environment","@organisationUrl","@region","@apiEndpoint","@disableAnalytics","@hostProduct","@hidePromotionalProducts","@onTogglePane","@toggleProductPromotion","@freshIdVersion"],[[20,"userDetails"],[20,"productsAlreadySubscribed"],[20,"productsToPromote"],[20,"currentAccount"],[20,"selectedPromotedProductObj"],[22,["config","userrole"]],[22,["config","environment"]],[22,["store","organisationUrl"]],[22,["config","region"]],[22,["store","apiEndpoint"]],[22,["config","disableanalytics"]],[22,["config","product"]],[22,["config","hidepromotions"]],[26,"action",[[22,["toggleOmnibarPane"]]],null],[26,"action",[[22,["toggleProductPromotionContainer"]]],null],[20,"freshIdVersion"]]],{"statements":[],"parameters":[]}],[0,"\\n\\n"],[0,"      "],[5,"BackgroundOverlay",[],[["@togglePane"],[[26,"action",[[22,["toggleOmnibarPane"]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n\\n\\n"],[4,"if",[[22,["selectedPromotedProductObj"]]],null,{"statements":[[0,"        "],[5,"ProductPromotionContainer",[],[["@selectedProduct","@isUserAddingAccount","@user","@hostProduct","@userRole","@toggleProductPromotion","@updateStore","@currentAccount","@getOrganisationForCurrentAccount","@freshIdVersion"],[[20,"selectedPromotedProductObj"],[20,"isIntentAddNewAccount"],[20,"userDetails"],[22,["config","product"]],[22,["config","userrole"]],[26,"action",[[22,["toggleProductPromotionContainer"]]],null],[26,"action",[[22,["updateStore"]]],null],[20,"currentAccount"],[20,"getOrganisationForCurrentAccount"],[20,"freshIdVersion"]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/FreshworksOmnibar"}},"component:/freshworks-omnibar/components/FreshworksProductsSidebar":Jo,"template:/freshworks-omnibar/components/FreshworksProductsSidebar":{id:"m8G0+1oi",block:'{"symbols":["product","@togglePromotedProductsPane","@productsToPromote","@selectedProduct","@toggleAccountsPaneForProduct","@isSidebarExpanded","@productsAlreadySubscribed","@hidePromotions","@toggleUserDetailsPane","&default"],"statements":[[4,"in-element",[[22,["modalElement"]]],[["guid","nextSibling"],["%cursor:0%",null]],{"statements":[[0,"  "],[6,"div"],[10,"class","freshworks-products-sidebar"],[11,"data-is-expanded",[21,6,[]],null],[8],[0,"\\n    "],[6,"div"],[10,"class","freshworks-logo-container"],[8],[0,"\\n      "],[6,"img"],[10,"class","freshworks-logo"],[11,"src",[26,"asset-url-src",["freshworks-dew.svg"],null],null],[8],[9],[0,"\\n    "],[9],[0,"\\n    "],[6,"ul"],[10,"class","products-container"],[8],[0,"\\n"],[4,"each",[[21,7,[]]],[["key"],["name"]],{"statements":[[0,"        "],[5,"Product",[],[["@name","@displayName","@title","@accounts","@addAccountUrl","@current","@active","@openPaneForAccounts"],[[21,1,["name"]],[21,1,["displayName"]],[21,1,["title"]],[21,1,["accounts"]],[21,1,["addAccountUrl"]],[21,1,["current"]],[26,"eq",[[21,1,["name"]],[21,4,[]]],null],[26,"action",[[21,5,[]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[9],[0,"\\n"],[4,"if",[[21,8,[]]],null,{"statements":[[4,"if",[[21,3,["length"]]],null,{"statements":[[0,"        "],[6,"div"],[10,"class","products-to-promote-trigger"],[11,"onclick",[26,"action",[[21,2,[]]],null],null],[8],[0,"\\n          "],[6,"div"],[10,"class","promote-icon-and-tag-container"],[8],[0,"\\n            "],[6,"img"],[10,"class","products-to-promote-icon"],[11,"src",[26,"asset-url-src",["add.svg"],null],null],[10,"alt","Try out these apps from Freshworks"],[8],[9],[0,"\\n            "],[6,"div"],[10,"class","one-word-tag"],[8],[0,"add"],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"    "],[6,"div"],[10,"class","sidebar-user-avatar-container"],[11,"onclick",[26,"action",[[21,9,[]]],null],null],[8],[0,"\\n      "],[6,"div"],[10,"class","profile-avatar-placeholder"],[8],[0,"\\n        "],[6,"img"],[11,"src",[26,"asset-url-src",["profile-avatar-placeholder.svg"],null],null],[8],[9],[0,"\\n      "],[9],[0,"\\n"],[0,"      "],[6,"div"],[10,"class","user-details-container"],[8],[9],[0,"\\n    "],[9],[0,"\\n    "],[13,10],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/FreshworksProductsSidebar"}},"component:/freshworks-omnibar/components/OmnibarPane":Zo,"template:/freshworks-omnibar/components/OmnibarPane":{id:"Oiw9n8Vy",block:'{"symbols":["@productsToPromote","@productsAlreadySubscribed","@selectedPromotedProductObj","@toggleProductPromotion","@hidePromotionalProducts","@hostProduct","@currentAccount","@user","@organisationUrl","@onTogglePane","@environment","@region","@apiEndpoint","@freshIdVersion"],"statements":[[4,"in-element",[[22,["modalElement"]]],[["guid","nextSibling"],["%cursor:0%",null]],{"statements":[[0,"  "],[6,"div"],[10,"class","omnibar-pane-container animated fadeInLeft"],[8],[0,"\\n    "],[6,"header"],[10,"class","omnibar-pane-header-container"],[8],[0,"\\n      "],[6,"div"],[10,"class","omnibar-pane-logo-container"],[8],[0,"\\n        "],[6,"div"],[10,"class","hide-omnibar-pane-conatiner"],[11,"onclick",[26,"action",[[21,10,[]]],null],null],[8],[0,"\\n          "],[6,"img"],[11,"src",[26,"asset-url-src",["close-icon.svg"],null],null],[10,"alt","Close"],[8],[9],[0,"\\n        "],[9],[0,"\\n\\n        "],[5,"OmnibarPaneHeader",[],[["@organisationUrl"],[[21,9,[]]]],{"statements":[],"parameters":[]}],[0,"\\n      "],[9],[0,"\\n\\n      "],[5,"UserDetails",[],[["@user","@environment","@region","@organisationUrl","@apiEndpoint","@freshIdVersion"],[[21,8,[]],[21,11,[]],[21,12,[]],[21,9,[]],[21,13,[]],[21,14,[]]]],{"statements":[],"parameters":[]}],[0,"\\n\\n"],[4,"if",[[22,["isFreshIdVersion2"]]],null,{"statements":[[0,"        "],[6,"div"],[10,"class","omnibar-pane-org-container"],[8],[0,"\\n          "],[6,"div"],[10,"class","omnibar-pane-org-card-hightlight"],[8],[0,"\\n          "],[9],[0,"\\n          "],[6,"div"],[10,"class","omnibar-pane-org-card-info"],[8],[0,"\\n"],[4,"if",[[21,8,["isAdmin"]]],null,{"statements":[[0,"              "],[6,"span"],[10,"class","omnibar-pane-org-domain-label"],[8],[0,"Manage your organization"],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"              "],[6,"span"],[10,"class","omnibar-pane-org-domain-label"],[8],[0,"Your organization URL"],[9],[0,"\\n"]],"parameters":[]}],[0,"            "],[6,"a"],[10,"class","omnibar-pane-org-domain-url"],[11,"href",[27,[[21,9,[]]]]],[10,"target","_blank"],[8],[1,[20,"getOrgDomain"],false],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[6,"section"],[10,"class","freshworks-products-container"],[8],[0,"\\n\\n"],[4,"if",[[21,2,["length"]]],null,{"statements":[[0,"      "],[5,"SubscribedProducts",[],[["@hostProduct","@products","@currentAccount","@toggleProductPromotion"],[[21,6,[]],[21,2,[]],[21,7,[]],[26,"action",[[21,4,[]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["length"]]],null,{"statements":[[4,"unless",[[21,5,[]]],null,{"statements":[[0,"          "],[5,"PromotedProducts",[],[["@products","@isExpanded","@currentPromotedProduct","@toggleProductPromotion"],[[21,1,[]],[26,"eq",[[21,2,["length"]],0],null],[21,3,[]],[26,"action",[[21,4,[]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/OmnibarPane"}},"component:/freshworks-omnibar/components/OmnibarPaneHeader":ei,"template:/freshworks-omnibar/components/OmnibarPaneHeader":{id:"U263CYNH",block:'{"symbols":["@organisationUrl"],"statements":[[6,"header"],[10,"class","freshworks-logo-container"],[8],[0,"\\n"],[4,"if",[[22,["canLinkLogoToOrgUrl"]]],null,{"statements":[[0,"    "],[6,"a"],[11,"href",[27,[[21,1,[]]]]],[10,"target","_blank"],[8],[0,"\\n      "],[6,"img"],[11,"src",[26,"asset-url-src",["freshworks-typography-logo.svg"],null],null],[8],[9],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[6,"img"],[11,"src",[26,"asset-url-src",["freshworks-typography-logo.svg"],null],null],[8],[9],[0,"\\n"]],"parameters":[]}],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/OmnibarPaneHeader"}},"component:/freshworks-omnibar/components/OmnibarTriggerButton":ni,"template:/freshworks-omnibar/components/OmnibarTriggerButton":{id:"aCAiCc+8",block:'{"symbols":["@onTogglePane"],"statements":[[6,"div"],[10,"id","omnibar-trigger-button"],[10,"class","freshworks-omnibar-tooltip-holder right wide"],[11,"onclick",[26,"action",[[21,1,[]]],null],null],[10,"data-freshworks-omnibar-tooltip","Freshworks Switcher"],[8],[0,"\\n  "],[6,"img"],[11,"src",[26,"asset-url-src",["apps.svg"],null],null],[8],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/OmnibarTriggerButton"}},"component:/freshworks-omnibar/components/Product":oi,"template:/freshworks-omnibar/components/Product":{id:"z6MApLpQ",block:'{"symbols":["@displayName","@current","@active","@name","@openPaneForAccounts","@title"],"statements":[[6,"li"],[11,"class",[27,["product-container ",[26,"if",[[21,3,[]],"active"],null]," ",[26,"if",[[21,2,[]],"current"],null]]]],[11,"data-is-current-proudct",[27,[[26,"if",[[21,2,[]],true,false],null]]]],[11,"data-freshworks-product-name",[20,"displayName"],null],[11,"onmouseenter",[26,"action",[[21,5,[]],[21,4,[]]],null],null],[11,"onmouseleave",[26,"action",[[21,5,[]],[21,4,[]]],null],null],[11,"onclick",[26,"action",[[22,["openPrimaryAccountUrl"]]],null],null],[8],[0,"\\n"],[0,"  "],[6,"div"],[10,"class","account-switcher-container"],[8],[9],[0,"\\n\\n  "],[6,"div"],[10,"class","product-icon-and-tag-container"],[8],[0,"\\n"],[4,"if",[[21,2,[]]],null,{"statements":[[0,"      "],[6,"img"],[10,"class","product-icon"],[11,"src",[26,"asset-url-src",[[21,1,[]],"-highlighted.svg"],null],null],[11,"alt",[27,[[21,1,[]]]]],[8],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[6,"img"],[10,"class","product-icon"],[11,"src",[26,"asset-url-src",[[21,1,[]],".svg"],null],null],[11,"alt",[27,[[21,1,[]]]]],[8],[9],[0,"\\n"]],"parameters":[]}],[0,"    "],[6,"div"],[10,"class","one-word-tag"],[8],[0,"\\n      "],[1,[21,6,[]],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/Product"}},"component:/freshworks-omnibar/components/ProductPromotionContainer":si,"template:/freshworks-omnibar/components/ProductPromotionContainer":{id:"3Y/XSjY9",block:'{"symbols":["@toggleProductPromotion","@selectedProduct"],"statements":[[4,"in-element",[[22,["modalElement"]]],[["guid","nextSibling"],["%cursor:0%",null]],{"statements":[[4,"if",[[21,2,[]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","freshworks-product-promotion-background animated fadeInLeft"],[8],[0,"\\n      "],[6,"div"],[10,"class","hide-freshworks-product-promotion"],[11,"onclick",[26,"action",[[21,1,[]],null],null],null],[8],[0,"\\n        "],[6,"img"],[11,"src",[26,"asset-url-src",["close-icon.svg"],null],null],[10,"alt","Close Signup"],[8],[9],[0,"\\n      "],[9],[0,"\\n      "],[6,"div"],[10,"id","freshworks-omnibar-product-promote"],[10,"class","freshworks-product-promote"],[10,"data-freshworks-product",""],[8],[0,"\\n          "],[6,"iframe"],[11,"src",[27,[[21,2,["marketingUrl"]],[20,"iframeURLParams"]]]],[8],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/ProductPromotionContainer"}},"component:/freshworks-omnibar/components/PromotedProduct":ai,"template:/freshworks-omnibar/components/PromotedProduct":{id:"Z7F0VLvx",block:'{"symbols":["@displayName","@toggleProductPromotion"],"statements":[[6,"li"],[10,"class","promoted-product-container"],[11,"onclick",[26,"action",[[21,2,[]],[21,1,[]],false],null],null],[11,"onkeydown",[26,"action",[[21,2,[]],[21,1,[]],false],null],null],[11,"data-freshworks-product",[21,1,[]],null],[10,"data-analytics-new-product-sign-up",""],[11,"data-analytics-product",[21,1,[]],null],[10,"tabindex","3"],[8],[0,"\\n  "],[6,"div"],[10,"class","promoted-product-logo-container"],[8],[0,"\\n    "],[6,"img"],[10,"class","promoted-product-icon"],[11,"alt",[21,1,[]],null],[11,"src",[26,"asset-url-src",[[21,1,[]],"-dew.svg"],null],null],[8],[9],[0,"\\n    "],[6,"div"],[10,"class","promoted-product-title"],[8],[0,"\\n      "],[1,[21,1,[]],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/PromotedProduct"}},"component:/freshworks-omnibar/components/PromotedProducts":ui,"template:/freshworks-omnibar/components/PromotedProducts":{id:"CNRikInK",block:'{"symbols":["product","index","@toggleProductPromotion","@isExpanded","@products"],"statements":[[6,"div"],[11,"class",[27,["promoted-products-container\\n  ",[26,"if",[[21,4,[]],"expanded-promoted-products"],null]]]],[8],[0,"\\n  "],[6,"div"],[10,"class","promoted-products-grid-container"],[8],[0,"\\n    "],[6,"header"],[10,"class","promoted-products-header"],[8],[0,"\\n      Other Products from Freshworks\\n    "],[9],[0,"\\n"],[4,"each",[[21,5,[]]],[["key"],["index"]],{"statements":[[4,"if",[[21,1,["marketingUrl"]]],null,{"statements":[[0,"        "],[5,"PromotedProduct",[],[["@name","@displayName","@toggleProductPromotion"],[[21,1,["name"]],[21,1,["displayName"]],[26,"action",[[21,3,[]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[1,2]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/PromotedProducts"}},"component:/freshworks-omnibar/components/SubscribedProduct":pi,"template:/freshworks-omnibar/components/SubscribedProduct":{id:"9L7LQuMH",block:'{"symbols":["@addNewAccountForProduct","@addAccountUrl","&default"],"statements":[[6,"div"],[10,"class","subscribed-product-container"],[11,"data-is-host-product",[26,"if",[[22,["isHostProduct"]],true],null],null],[8],[0,"\\n  "],[6,"header"],[10,"class","subscribed-product-logo-container"],[11,"data-freshworks-product",[20,"displayName"],null],[8],[0,"\\n    "],[6,"img"],[10,"class","product-logo"],[11,"src",[26,"asset-url-src",[[22,["displayName"]],"-typography-logo.svg"],null],null],[10,"data-analytics-add-new-ccount",""],[11,"data-analytics-product",[20,"displayName"],null],[8],[9],[0,"\\n\\n"],[4,"if",[[21,2,[]]],null,{"statements":[[0,"      "],[6,"div"],[10,"class","add-new-account freshworks-omnibar-tooltip-holder"],[11,"onclick",[26,"action",[[21,1,[]],[22,["displayName"]],true],null],null],[10,"data-freshworks-omnibar-tooltip","Add Account"],[8],[0,"\\n        "],[6,"img"],[11,"src",[26,"asset-url-src",["add-icon.svg"],null],null],[10,"alt","Add Account"],[8],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null],[0,"  "],[9],[0,"\\n  "],[13,3],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/SubscribedProduct"}},"component:/freshworks-omnibar/components/SubscribedProducts":li,"template:/freshworks-omnibar/components/SubscribedProducts":{id:"Rp9R0tGq",block:'{"symbols":["product","@hostProduct","@toggleProductPromotion","@currentAccount","@products"],"statements":[[6,"div"],[10,"class","subscribed-products-container"],[8],[0,"\\n"],[4,"each",[[21,5,[]]],[["key"],["originalName"]],{"statements":[[0,"    "],[5,"SubscribedProduct",[],[["@name","@displayName","@addAccountUrl","@hostProduct","@addNewAccountForProduct"],[[21,1,["originalName"]],[21,1,["displayName"]],[21,1,["addAccountUrl"]],[21,2,[]],[26,"action",[[21,3,[]]],null]]],{"statements":[[0,"\\n      "],[5,"Accounts",[],[["@accounts","@productName","@currentAccount"],[[21,1,["accounts"]],[21,1,["displayName"]],[21,4,[]]]],{"statements":[],"parameters":[]}],[0,"\\n    "]],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/SubscribedProducts"}},"component:/freshworks-omnibar/components/UserAvatarInitial":di,"template:/freshworks-omnibar/components/UserAvatarInitial":{id:"XaBRvT0p",block:'{"symbols":["@clickable","@size","@shape"],"statements":[[6,"div"],[10,"class","user-account-avatar-initial-container"],[8],[0,"\\n  "],[6,"div"],[11,"class",[27,["user-account-avatar-initial avatar-initial-",[21,3,[]]," avatar-initial-",[21,2,[]]," ",[26,"if",[[21,1,[]],"avatar-initial-clickable"],null]]]],[8],[0,"\\n    "],[1,[20,"initial"],false],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/UserAvatarInitial"}},"component:/freshworks-omnibar/components/UserDetails":mi,"template:/freshworks-omnibar/components/UserDetails":{id:"9KQHNu7b",block:'{"symbols":["@environment","@user"],"statements":[[6,"section"],[10,"class","user-details-container"],[11,"data-user-uuid",[21,2,["uuid"]],null],[8],[0,"\\n\\n  "],[6,"div"],[10,"class","freshworks-avatar-container"],[8],[0,"\\n"],[4,"if",[[22,["isFreshIdVersion2"]]],null,{"statements":[[0,"      "],[6,"freshworks-user-avatar"],[10,"data-width","60"],[11,"data-environment",[21,1,[]],null],[11,"data-organisation-domain",[20,"organistaionDomain"],null],[10,"data-round","true"],[8],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[6,"freshworks-user-avatar"],[10,"data-width","60"],[11,"data-environment",[21,1,[]],null],[11,"data-region",[20,"region"],null],[10,"data-round","true"],[8],[9],[0,"\\n"]],"parameters":[]}],[0,"  "],[9],[0,"\\n\\n  "],[6,"div"],[10,"class","text-container"],[11,"href",[20,"userAccountUrl"],null],[10,"tabindex","1"],[8],[0,"\\n    "],[6,"div"],[10,"class","user-name"],[11,"alt",[27,[[21,2,["firstName"]]," ",[21,2,["lastName"]]]]],[11,"title",[27,[[21,2,["firstName"]]," ",[21,2,["lastName"]]]]],[8],[0,"\\n      "],[1,[21,2,["firstName"]],false],[0," "],[1,[21,2,["lastName"]],false],[0,"\\n    "],[9],[0,"\\n    "],[6,"div"],[10,"class","user-email"],[11,"title",[27,[[21,2,["email"]]]]],[8],[0,"\\n      "],[1,[21,2,["email"]],false],[0,"\\n    "],[9],[0,"\\n    "],[6,"div"],[10,"class","user-profile-actions-container"],[8],[0,"\\n      "],[6,"a"],[10,"rel","noopener"],[10,"target","_blank"],[11,"href",[27,[[20,"userAccountUrl"]]]],[8],[0,"Edit Profile"],[9],[0,"\\n      "],[6,"a"],[11,"href",[27,[[20,"userLogoutUrl"]]]],[8],[0,"Logout"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/freshworks-omnibar/components/UserDetails"}},"helper:/freshworks-omnibar/components/asset-url-src":function(t){return"https://accounts.freshworks.com/omnibar/assets/"+t.map(function(t){return t.toLowerCase()}).join("")},"helper:/freshworks-omnibar/components/eq":function(t){return t[0]===t[1]}},vi={app:{name:"freshworks-omnibar",rootName:"freshworks-omnibar"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}},bi=new(function(t){function e(){r(this,e)
var n=new Xr(gi),o=new Kr(vi,n)
return s(this,t.call(this,{resolver:o,rootName:vi.app.rootName}))}return i(e,t),e}(zr)),wi=document.getElementById("app")
tt=function(){bi.scheduleRerender()},bi.registerInitializer({initialize:function(t){t.register("component-manager:/"+bi.rootName+"/component-managers/main",sr)}}),bi.renderComponent("FreshworksOmnibar",wi,null),bi.boot(),function(t,e){for(var n in e)ar(t,n,e[n])}(bi,{"freshworks-omnibar":"FreshworksOmnibar"}),navigator.userAgent.match(/Trident.*rv[ :]*11\./)||(yi=function(t,e){var n=document.createElement("script")
return n.setAttribute("src",t),"function"==typeof e&&(n.onload=e),n}("//accounts.freshworks.com/freshworks-components/user-avatar-stable.js"),document.body.appendChild(yi))})
