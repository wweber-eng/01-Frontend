(()=>{"use strict";var t=function(r,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},t(r,n)};function r(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function n(t){var r="function"==typeof Symbol&&Symbol.iterator,n=r&&t[r],e=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function e(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,o,i=n.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(t){o={error:t}}finally{try{e&&!e.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function o(t,r,n){if(n||2===arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return t.concat(e||Array.prototype.slice.call(r))}function i(t){return"function"==typeof t}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var u,c=((u=function(t){var r;r=this,Error.call(r),r.stack=(new Error).stack,this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}).prototype=Object.create(Error.prototype),u.prototype.constructor=u,u);function s(t,r){if(t){var n=t.indexOf(r);0<=n&&t.splice(n,1)}}var a=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}var r;return t.prototype.unsubscribe=function(){var t,r,u,s,a;if(!this.closed){this.closed=!0;var l=this._parentage;if(l)if(this._parentage=null,Array.isArray(l))try{for(var p=n(l),h=p.next();!h.done;h=p.next())h.value.remove(this)}catch(r){t={error:r}}finally{try{h&&!h.done&&(r=p.return)&&r.call(p)}finally{if(t)throw t.error}}else l.remove(this);var y=this.initialTeardown;if(i(y))try{y()}catch(t){a=t instanceof c?t.errors:[t]}var v=this._teardowns;if(v){this._teardowns=null;try{for(var d=n(v),b=d.next();!b.done;b=d.next()){var _=b.value;try{f(_)}catch(t){a=null!=a?a:[],t instanceof c?a=o(o([],e(a)),e(t.errors)):a.push(t)}}}catch(t){u={error:t}}finally{try{b&&!b.done&&(s=d.return)&&s.call(d)}finally{if(u)throw u.error}}}if(a)throw new c(a)}},t.prototype.add=function(r){var n;if(r&&r!==this)if(this.closed)f(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(r)}},t.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},t.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},t.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&s(r,t)},t.prototype.remove=function(r){var n=this._teardowns;n&&s(n,r),r instanceof t&&r._removeParent(this)},t.EMPTY=((r=new t).closed=!0,r),t}();function l(t){return t instanceof a||t&&"closed"in t&&i(t.remove)&&i(t.add)&&i(t.unsubscribe)}function f(t){i(t)?t():t.unsubscribe()}a.EMPTY;var p=null,h=null,y=void 0,v=!1,d=!1,b={setTimeout:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=b.delegate;return((null==n?void 0:n.setTimeout)||setTimeout).apply(void 0,o([],e(t)))},clearTimeout:function(t){var r=b.delegate;return((null==r?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function _(){}var m=w("C",void 0,void 0);function w(t,r,n){return{kind:t,value:r,error:n}}var g=null,x=function(t){function n(r){var n=t.call(this)||this;return n.isStopped=!1,r?(n.destination=r,l(r)&&r.add(n)):n.destination=P,n}return r(n,t),n.create=function(t,r,n){return new S(t,r,n)},n.prototype.next=function(t){this.isStopped?O(function(t){return w("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?O(w("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?O(m,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(a),S=function(t){function n(r,n,e){var o,u=t.call(this)||this;if(i(r))o=r;else if(r){var c;o=r.next,n=r.error,e=r.complete,u&&d?(c=Object.create(r)).unsubscribe=function(){return u.unsubscribe()}:c=r,o=null==o?void 0:o.bind(c),n=null==n?void 0:n.bind(c),e=null==e?void 0:e.bind(c)}return u.destination={next:o?T(o):_,error:T(null!=n?n:E),complete:e?T(e):_},u}return r(n,t),n}(x);function T(t,r){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{t.apply(void 0,o([],e(r)))}catch(t){v?function(t){v&&g&&(g.errorThrown=!0,g.error=t)}(t):function(t){b.setTimeout((function(){if(!p)throw t;p(t)}))}(t)}}}function E(t){throw t}function O(t,r){var n=h;n&&b.setTimeout((function(){return n(t,r)}))}var P={closed:!0,next:_,error:E,complete:_},A="function"==typeof Symbol&&Symbol.observable||"@@observable";function j(t){return t}var k=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var e,o=this,u=(e=t)&&e instanceof x||function(t){return t&&i(t.next)&&i(t.error)&&i(t.complete)}(e)&&l(e)?t:new S(t,r,n);return function(t){if(v){var r=!g;if(r&&(g={errorThrown:!1,error:null}),t(),r){var n=g,e=n.errorThrown,o=n.error;if(g=null,e)throw o}}else t()}((function(){var t=o,r=t.operator,n=t.source;u.add(r?r.call(u,n):n?o._subscribe(u):o._trySubscribe(u))})),u},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=C(r))((function(r,e){var o=new S({next:function(r){try{t(r)}catch(t){e(t),o.unsubscribe()}},error:e,complete:r});n.subscribe(o)}))},t.prototype._subscribe=function(t){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(t)},t.prototype[A]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(0===(n=t).length?j:1===n.length?n[0]:function(t){return n.reduce((function(t,r){return r(t)}),t)})(this);var n},t.prototype.toPromise=function(t){var r=this;return new(t=C(t))((function(t,n){var e;r.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(r){return new t(r)},t}();function C(t){var r;return null!==(r=null!=t?t:y)&&void 0!==r?r:Promise}var z,F,M=function(t){function n(r,n,e,o,i){var u=t.call(this,r)||this;return u.onFinalize=i,u._next=n?function(t){try{n(t)}catch(t){r.error(t)}}:t.prototype._next,u._error=o?function(t){try{o(t)}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._error,u._complete=e?function(){try{e()}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,u}return r(n,t),n.prototype.unsubscribe=function(){var r,n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(r=this.onFinalize)||void 0===r||r.call(this))},n}(x),U=[1,5,10];new k((function(t){var r=0,n=function(){t.next(U[r++]),r<U.length?setTimeout(n,1e3):t.complete()};n()})).pipe((z=function(t){return 2*t},F=function(t,r){var n=0;t.subscribe(new M(r,(function(t){r.next(z.call(void 0,t,n++))})))},function(t){if(function(t){return i(null==t?void 0:t.lift)}(t))return t.lift((function(t){try{return F(t,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")})).subscribe({next:function(t){console.log(t)},error:function(t){console.log(t)},complete:function(){console.log("Complete")}})})();