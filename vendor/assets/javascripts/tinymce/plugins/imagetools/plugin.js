!function(){"use strict";var t=function(e){var n=e,o=function(){return n};return{get:o,set:function(t){n=t},clone:function(){return t(o())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.util.Tools");function o(t,e){return i(document.createElement("canvas"),t,e)}function r(t){return t.getContext("2d")}function i(t,e,n){return t.width=e,t.height=n,t}var a,u,c,l,s={create:o,clone:function(t){var e;return r(e=o(t.width,t.height)).drawImage(t,0,0),e},resize:i,get2dContext:r,get3dContext:function(t){var e=null;try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(n){}return e||(e=null),e}},f={getWidth:function(t){return t.naturalWidth||t.width},getHeight:function(t){return t.naturalHeight||t.height}},d=window.Promise?window.Promise:function(){var t=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],c(t,n(i,this),n(a,this))},e=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(t){setTimeout(t,1)};function n(t,e){return function(){t.apply(e,arguments)}}var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function r(t){var n=this;null!==this._state?e(function(){var e=n._state?t.onFulfilled:t.onRejected;if(null!==e){var o;try{o=e(n._value)}catch(r){return void t.reject(r)}t.resolve(o)}else(n._state?t.resolve:t.reject)(n._value)}):this._deferreds.push(t)}function i(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void c(n(e,t),n(i,this),n(a,this))}this._state=!0,this._value=t,u.call(this)}catch(o){a.call(this,o)}}function a(t){this._state=!1,this._value=t,u.call(this)}function u(){for(var t=0,e=this._deferreds.length;t<e;t++)r.call(this,this._deferreds[t]);this._deferreds=null}function c(t,e,n){var o=!1;try{t(function(t){o||(o=!0,e(t))},function(t){o||(o=!0,n(t))})}catch(r){if(o)return;o=!0,n(r)}}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype.then=function(e,n){var o=this;return new t(function(t,i){r.call(o,new function(t,e,n,o){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=o}(e,n,t,i))})},t.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&o(arguments[0])?arguments[0]:arguments);return new t(function(t,n){if(0===e.length)return t([]);var o=e.length;function r(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(t){r(i,t)},n)}e[i]=a,0==--o&&t(e)}catch(c){n(c)}}for(var i=0;i<e.length;i++)r(i,e[i])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.race=function(e){return new t(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},t}(),h=function(t){return function(){return t}},p={noop:function(){},noarg:function(t){return function(){return t()}},compose:function(t,e){return function(){return t(e.apply(null,arguments))}},constant:h,identity:function(t){return t},tripleEquals:function(t,e){return t===e},curry:function(t){for(var e=new Array(arguments.length-1),n=1;n<arguments.length;n++)e[n-1]=arguments[n];return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];var r=e.concat(n);return t.apply(null,r)}},not:function(t){return function(){return!t.apply(null,arguments)}},die:function(t){return function(){throw new Error(t)}},apply:function(t){return t()},call:function(t){t()},never:h(!1),always:h(!0)},m=p.never,g=p.always,v=function(){return y},y=(l={fold:function(t,e){return t()},is:m,isSome:m,isNone:g,getOr:c=function(t){return t},getOrThunk:u=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},or:c,orThunk:u,map:v,ap:v,each:function(){},bind:v,flatten:v,exists:m,forall:g,filter:v,equals:a=function(t){return t.isNone()},equals_:a,toArray:function(){return[]},toString:p.constant("none()")},Object.freeze&&Object.freeze(l),l),b=function(t){var e=function(){return t},n=function(){return r},o=function(e){return e(t)},r={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:g,isNone:m,getOr:e,getOrThunk:e,getOrDie:e,or:n,orThunk:n,map:function(e){return b(e(t))},ap:function(e){return e.fold(v,function(e){return b(e(t))})},each:function(e){e(t)},bind:o,flatten:e,exists:o,forall:o,filter:function(e){return e(t)?r:y},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(m,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return r},w={some:b,none:v,from:function(t){return null===t||t===undefined?y:b(t)}},x="undefined"!=typeof window?window:Function("return this;")(),R=function(t,e){for(var n=e!==undefined&&null!==e?e:x,o=0;o<t.length&&n!==undefined&&null!==n;++o)n=n[t[o]];return n},I=function(t,e){var n=t.split(".");return R(n,e)},T=function(t,e){var n=I(t,e);if(n===undefined||null===n)throw t+" not available on this browser";return n},k=function(t,e){return new(T("Blob"))(t,e)},C=function(){return new(T("FileReader"))},B=function(t){return new(T("Uint8Array"))(t)},U={atob:function(t){return T("atob")(t)},requestAnimationFrame:function(t){T("requestAnimationFrame")(t)}};function M(t){return new d(function(e,n){var o=URL.createObjectURL(t),r=new Image,i=function(){r.removeEventListener("load",a),r.removeEventListener("error",u)};function a(){i(),e(r)}function u(){i(),n("Unable to load data of type "+t.type+": "+o)}r.addEventListener("load",a),r.addEventListener("error",u),r.src=o,r.complete&&a()})}function j(t){return new d(function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="blob",n.onload=function(){200==this.status&&e(this.response)},n.send()})}function A(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0]);if(!n)return w.none();for(var o=n[1],r=e[1],i=U.atob(r),a=i.length,u=Math.ceil(a/1024),c=new Array(u),l=0;l<u;++l){for(var s=1024*l,f=Math.min(s+1024,a),d=new Array(f-s),h=s,p=0;h<f;++p,++h)d[p]=i[h].charCodeAt(0);c[l]=B(d)}return w.some(k(c,{type:o}))}function z(t){return new d(function(e,n){A(t).fold(function(){n("uri is not base64: "+t)},e)})}function E(t){return new d(function(e){var n=new C;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}var S={blobToImage:M,imageToBlob:function(t){return(e=t,new d(function(t){e.complete?t(e):e.addEventListener("load",function n(){e.removeEventListener("load",n),t(e)})})).then(function(t){var e=t.src;return 0===e.indexOf("blob:")?j(e):0===e.indexOf("data:")?z(e):j(e)});var e},blobToDataUri:E,blobToBase64:function(t){return E(t).then(function(t){return t.split(",")[1]})},dataUriToBlobSync:A,canvasToBlob:function(t,e,n){return e=e||"image/png",HTMLCanvasElement.prototype.toBlob?new d(function(o){t.toBlob(function(t){o(t)},e,n)}):z(t.toDataURL(e,n))},canvasToDataURL:function(t,e,n){return e=e||"image/png",t.then(function(t){return t.toDataURL(e,n)})},blobToCanvas:function(t){return M(t).then(function(t){var e,n;return e=t,URL.revokeObjectURL(e.src),n=s.create(f.getWidth(t),f.getHeight(t)),s.get2dContext(n).drawImage(t,0,0),n})},uriToBlob:function(t){return 0===t.indexOf("blob:")?j(t):0===t.indexOf("data:")?z(t):null}},L=function(t){return S.blobToImage(t)},H=function(t){return S.imageToBlob(t)};function O(t,e,n){var o=e.type;function r(e,n){return t.then(function(t){return S.canvasToDataURL(t,e,n)})}return{getType:p.constant(o),toBlob:function(){return d.resolve(e)},toDataURL:function(){return n},toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then(function(t){return S.canvasToBlob(t,e,n)})},toAdjustedDataURL:r,toAdjustedBase64:function(t,e){return r(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function(){return t.then(s.clone)}}}function _(t){return S.blobToDataUri(t).then(function(e){return O(S.blobToCanvas(t),t,e)})}var D={fromBlob:_,fromCanvas:function(t,e){return S.canvasToBlob(t,e).then(function(e){return O(d.resolve(t),e,t.toDataURL())})},fromImage:function(t){return S.imageToBlob(t).then(function(t){return _(t)})},fromBlobAndUrlSync:function(t,e){return O(S.blobToCanvas(t),t,e)}};function F(t,e,n){return(t=parseFloat(t))>n?t=n:t<e&&(t=e),t}var P=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];function W(t,e){var n,o,r,i,a=[],u=new Array(10);for(n=0;n<5;n++){for(o=0;o<5;o++)a[o]=e[o+5*n];for(o=0;o<5;o++){for(i=0,r=0;r<5;r++)i+=t[o+5*r]*a[r];u[o+5*n]=i}}return u}function q(t,e){return e=F(e,0,1),t.map(function(t,n){return n%6==0?t=1-(1-t)*e:t*=e,F(t,0,1)})}var V={identity:function(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]},adjust:q,multiply:W,adjustContrast:function(t,e){var n;return e=F(e,-1,1),W(t,[(n=(e*=100)<0?127+e/100*127:127*(n=0==(n=e%1)?P[e]:P[Math.floor(e)]*(1-n)+P[Math.floor(e)+1]*n)+127)/127,0,0,0,.5*(127-n),0,n/127,0,0,.5*(127-n),0,0,n/127,0,.5*(127-n),0,0,0,1,0,0,0,0,0,1])},adjustBrightness:function(t,e){return W(t,[1,0,0,0,e=F(255*e,-255,255),0,1,0,0,e,0,0,1,0,e,0,0,0,1,0,0,0,0,0,1])},adjustSaturation:function(t,e){var n,o,r;return W(t,[(o=.3086)*(1-(n=1+((e=F(e,-1,1))>0?3*e:e)))+n,(r=.6094)*(1-n),.082*(1-n),0,0,o*(1-n),r*(1-n)+n,.082*(1-n),0,0,o*(1-n),r*(1-n),.082*(1-n)+n,0,0,0,0,0,1,0,0,0,0,0,1])},adjustHue:function(t,e){var n,o,r,i,a;return e=F(e,-180,180)/180*Math.PI,n=Math.cos(e),o=Math.sin(e),W(t,[(r=.213)+.787*n+o*-r,(i=.715)+n*-i+o*-i,(a=.072)+n*-a+.928*o,0,0,r+n*-r+.143*o,i+n*(1-i)+.14*o,a+n*-a+-.283*o,0,0,r+n*-r+-.787*o,i+n*-i+o*i,a+.928*n+o*a,0,0,0,0,0,1,0,0,0,0,0,1])},adjustColors:function(t,e,n,o){return W(t,[e=F(e,0,2),0,0,0,0,0,n=F(n,0,2),0,0,0,0,0,o=F(o,0,2),0,0,0,0,0,1,0,0,0,0,0,1])},adjustSepia:function(t,e){return W(t,q([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e=F(e,0,1)))},adjustGrayscale:function(t,e){return W(t,q([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e=F(e,0,1)))}};function N(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,u=s.get2dContext(o),a=function(t,e){var n,o,r,i,a,u=t.data,c=e[0],l=e[1],s=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],v=e[9],y=e[10],b=e[11],w=e[12],x=e[13],R=e[14],I=e[15],T=e[16],k=e[17],C=e[18],B=e[19];for(a=0;a<u.length;a+=4)n=u[a],o=u[a+1],r=u[a+2],i=u[a+3],u[a]=n*c+o*l+r*s+i*f+d,u[a+1]=n*h+o*p+r*m+i*g+v,u[a+2]=n*y+o*b+r*w+i*x+R,u[a+3]=n*I+o*T+r*k+i*C+B;return t}(u.getImageData(0,0,o.width,o.height),i),u.putImageData(a,0,0),D.fromCanvas(o,r);var o,r,i,a,u})}function X(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,c=s.get2dContext(o),a=c.getImageData(0,0,o.width,o.height),u=c.getImageData(0,0,o.width,o.height),u=function(t,e,n){var o,r,i,a,u,c,l,s,f,d,h,p,m,g,v,y,b;function w(t,e,n){return t>n?t=n:t<e&&(t=e),t}for(i=Math.round(Math.sqrt(n.length)),a=Math.floor(i/2),o=t.data,r=e.data,y=t.width,b=t.height,c=0;c<b;c++)for(u=0;u<y;u++){for(l=s=f=0,h=0;h<i;h++)for(d=0;d<i;d++)p=w(u+d-a,0,y-1),m=w(c+h-a,0,b-1),g=4*(m*y+p),v=n[h*i+d],l+=o[g]*v,s+=o[g+1]*v,f+=o[g+2]*v;r[g=4*(c*y+u)]=w(l,0,255),r[g+1]=w(s,0,255),r[g+2]=w(f,0,255)}return e}(a,u,i),c.putImageData(u,0,0),D.fromCanvas(o,r);var o,r,i,a,u,c})}function $(t){return function(e,n){return e.toCanvas().then(function(o){return function(e,n,o){var r,i,a=s.get2dContext(e),u=new Array(256);for(i=0;i<u.length;i++)u[i]=t(i,o);return r=function(t,e){var n,o=t.data;for(n=0;n<o.length;n+=4)o[n]=e[o[n]],o[n+1]=e[o[n+1]],o[n+2]=e[o[n+2]];return t}(a.getImageData(0,0,e.width,e.height),u),a.putImageData(r,0,0),D.fromCanvas(e,n)}(o,e.getType(),n)})}}function G(t){return function(e,n){return N(e,t(V.identity(),n))}}function Y(t){return function(e){return X(e,t)}}var J,K={invert:(J=[-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0],function(t){return N(t,J)}),brightness:G(V.adjustBrightness),hue:G(V.adjustHue),saturate:G(V.adjustSaturation),contrast:G(V.adjustContrast),grayscale:G(V.adjustGrayscale),sepia:G(V.adjustSepia),colorize:function(t,e,n,o){return N(t,V.adjustColors(V.identity(),e,n,o))},sharpen:Y([0,-1,0,-1,5,-1,0,-1,0]),emboss:Y([-2,-1,0,-1,1,1,0,1,2]),gamma:$(function(t,e){return 255*Math.pow(t/255,1-e)}),exposure:$(function(t,e){return 255*(1-Math.exp(-t/255*e))}),colorFilter:N,convoluteFilter:X},Z={scale:function te(t,e,n){var o=f.getWidth(t),r=f.getHeight(t),i=e/o,a=n/r,u=!1;(i<.5||i>2)&&(i=i<.5?.5:2,u=!0),(a<.5||a>2)&&(a=a<.5?.5:2,u=!0);var c,l,h,p=(c=t,l=i,h=a,new d(function(t){var e=f.getWidth(c),n=f.getHeight(c),o=Math.floor(e*l),r=Math.floor(n*h),i=s.create(o,r),a=s.get2dContext(i);a.drawImage(c,0,0,e,n,0,0,o,r),t(i)}));return u?p.then(function(t){return te(t,e,n)}):p}},Q={rotate:function(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=s.create(o.width,o.height),u=s.get2dContext(a),c=0,l=0,90!=(i=i<0?360+i:i)&&270!=i||s.resize(a,a.height,a.width),90!=i&&180!=i||(c=a.width),270!=i&&180!=i||(l=a.height),u.translate(c,l),u.rotate(i*Math.PI/180),u.drawImage(o,0,0),D.fromCanvas(a,r);var o,r,i,a,u,c,l})},flip:function(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=s.create(o.width,o.height),u=s.get2dContext(a),"v"==i?(u.scale(1,-1),u.drawImage(o,0,-a.height)):(u.scale(-1,1),u.drawImage(o,-a.width,0)),D.fromCanvas(a,r);var o,r,i,a,u})},crop:function(t,e,n,o,r){return t.toCanvas().then(function(i){return a=i,u=t.getType(),c=e,l=n,f=o,d=r,h=s.create(f,d),s.get2dContext(h).drawImage(a,-c,-l),D.fromCanvas(h,u);var a,u,c,l,f,d,h})},resize:function(t,e,n){return t.toCanvas().then(function(o){return Z.scale(o,e,n).then(function(e){return D.fromCanvas(e,t.getType())})})}},tt={invert:function(t){return K.invert(t)},sharpen:function(t){return K.sharpen(t)},emboss:function(t){return K.emboss(t)},brightness:function(t,e){return K.brightness(t,e)},hue:function(t,e){return K.hue(t,e)},saturate:function(t,e){return K.saturate(t,e)},contrast:function(t,e){return K.contrast(t,e)},grayscale:function(t,e){return K.grayscale(t,e)},sepia:function(t,e){return K.sepia(t,e)},colorize:function(t,e,n,o){return K.colorize(t,e,n,o)},gamma:function(t,e){return K.gamma(t,e)},exposure:function(t,e){return K.exposure(t,e)},flip:function(t,e){return Q.flip(t,e)},crop:function(t,e,n,o,r){return Q.crop(t,e,n,o,r)},resize:function(t,e,n){return Q.resize(t,e,n)},rotate:function(t,e){return Q.rotate(t,e)}},et=function(t){return t.toBlob()},nt={blobToImageResult:function(t){return D.fromBlob(t)},fromBlobAndUrlSync:function(t,e){return D.fromBlobAndUrlSync(t,e)},imageToImageResult:function(t){return D.fromImage(t)},imageResultToBlob:function(t,e,n){return e===undefined&&n===undefined?et(t):t.toAdjustedBlob(e,n)},imageResultToOriginalBlob:et,imageResultToDataURL:function(t){return t.toDataURL()}},ot=function(){return T("URL")},rt={createObjectURL:function(t){return ot().createObjectURL(t)},revokeObjectURL:function(t){ot().revokeObjectURL(t)}},it=tinymce.util.Tools.resolve("tinymce.util.Delay"),at=tinymce.util.Tools.resolve("tinymce.util.Promise"),ut=tinymce.util.Tools.resolve("tinymce.util.URI"),ct=function(t){return t.getParam("imagetools_toolbar","rotateleft rotateright | flipv fliph | crop editimage imageoptions")},lt=function(t){return t.getParam("imagetools_proxy")},st={getImageSize:function(t){var e,n;function o(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?o(e)&&o(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)},setImageSize:function(t,e){var n,o;e&&(n=t.style.width,o=t.style.height,(n||o)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,o=t.height,(n||o)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))},getNaturalImageSize:function(t){return{w:t.naturalWidth,h:t.naturalHeight}}},ft=(Array.prototype.indexOf,undefined,Array.prototype.push,Array.prototype.slice,function(t,e){for(var n=0,o=t.length;n<o;n++){var r=t[n];if(e(r,n,t))return w.some(r)}return w.none()}),dt=function(t){return null!==t&&t!==undefined},ht={traverse:function(t,e){var n;return n=e.reduce(function(t,e){return dt(t)?t[e]:undefined},t),dt(n)?n:null},readBlob:function(t){return new at(function(e){var n=new C;n.onload=function(t){var n=t.target;e(n.result)},n.readAsText(t)})},requestUrlAsBlob:function(t,e){return new at(function(o){var r;(r=new function(){return new(T("XMLHttpRequest"))}).onreadystatechange=function(){4===r.readyState&&o({status:r.status,blob:this.response})},r.open("GET",t,!0),n.each(e,function(t,e){r.setRequestHeader(e,t)}),r.responseType="blob",r.send()})},parseJson:function(t){var e;try{e=JSON.parse(t)}catch(n){}return e}},pt=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],mt=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],gt=function(t){return"ImageProxy HTTP error: "+ft(pt,function(e){return t===e.code}).fold(p.constant("Unknown ImageProxy error"),function(t){return t.message})},vt=function(t){var e=gt(t);return at.reject(e)},yt=function(t){return ft(mt,function(e){return e.type===t}).fold(p.constant("Unknown service error"),function(t){return t.message})},bt=function(t,e){return ht.readBlob(e).then(function(t){var e,n,o,r=(e=t,n=ht.parseJson(e),"ImageProxy Service error: "+((o=ht.traverse(n,["error","type"]))?yt(o):"Invalid JSON in service error message"));return at.reject(r)})},wt={handleServiceErrorResponse:function(t,e){return 400===(n=t)||403===n||500===n?bt(0,e):vt(t);var n},handleHttpError:vt,getHttpErrorMsg:gt,getServiceErrorMsg:yt},xt=function(t,e){return ht.requestUrlAsBlob((n=t,o=e,r=-1===n.indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)||!o?n:n+r+"apiKey="+encodeURIComponent(o)),{"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e}).then(function(t){return t.status<200||t.status>=300?wt.handleServiceErrorResponse(t.status,t.blob):at.resolve(t.blob)});var n,o,r},Rt=function(t,e){return e?xt(t,e):(n=t,ht.requestUrlAsBlob(n,{}).then(function(t){return t.status<200||t.status>=300?wt.handleHttpError(t.status):at.resolve(t.blob)}));var n},It=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Tt=tinymce.util.Tools.resolve("tinymce.ui.Factory"),kt=function(){var t=[],e=-1;function n(){return e>0}function o(){return-1!==e&&e<t.length-1}return{data:t,add:function(n){var o;return o=t.splice(++e),t.push(n),{state:n,removed:o}},undo:function(){if(n())return t[--e]},redo:function(){if(o())return t[++e]},canUndo:n,canRedo:o}},Ct=tinymce.util.Tools.resolve("tinymce.geom.Rect"),Bt=function(t){return new at(function(e){var n=function(){t.removeEventListener("load",n),e(t)};t.complete?e(t):t.addEventListener("load",n)})},Ut=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),Mt=tinymce.util.Tools.resolve("tinymce.util.Observable"),jt=tinymce.util.Tools.resolve("tinymce.util.VK"),At=0,zt=function(t,e,o,r,i){var a,u,c,l,s="mce-",f=s+"crid-"+At++;function d(t,e){return{x:e.x-t.x,y:e.y-t.y,w:e.w,h:e.h}}function h(e,n,r,i){var u,c,l,s,f;u=n.x,c=n.y,l=n.w,s=n.h,u+=r*e.deltaX,c+=i*e.deltaY,l+=r*e.deltaW,s+=i*e.deltaH,l<20&&(l=20),s<20&&(s=20),f=t=Ct.clamp({x:u,y:c,w:l,h:s},o,"move"===e.name),f=d(o,f),a.fire("updateRect",{rect:f}),g(f)}function p(t){function o(t,e){e.h<0&&(e.h=0),e.w<0&&(e.w=0),Ut("#"+f+"-"+t,r).css({left:e.x,top:e.y,width:e.w,height:e.h})}n.each(u,function(e){Ut("#"+f+"-"+e.name,r).css({left:t.w*e.xMul+t.x,top:t.h*e.yMul+t.y})}),o("top",{x:e.x,y:e.y,w:e.w,h:t.y-e.y}),o("right",{x:t.x+t.w,y:t.y,w:e.w-t.x-t.w+e.x,h:t.h}),o("bottom",{x:e.x,y:t.y+t.h,w:e.w,h:e.h-t.y-t.h+e.y}),o("left",{x:e.x,y:t.y,w:t.x-e.x,h:t.h}),o("move",t)}function m(e){p(t=e)}function g(t){var e,n;m((e=o,{x:(n=t).x+e.x,y:n.y+e.y,w:n.w,h:n.h}))}return u=[{name:"move",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:"Crop Mask"},{name:"nw",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:"Top Left Crop Handle"},{name:"ne",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:"Top Right Crop Handle"},{name:"sw",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:"Bottom Left Crop Handle"},{name:"se",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:"Bottom Right Crop Handle"}],l=["top","right","bottom","left"],Ut('<div id="'+f+'" class="'+s+'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(r),n.each(l,function(t){Ut("#"+f,r).append('<div id="'+f+"-"+t+'"class="'+s+'croprect-block" style="display: none" data-mce-bogus="all">')}),n.each(u,function(t){Ut("#"+f,r).append('<div id="'+f+"-"+t.name+'" class="'+s+"croprect-handle "+s+"croprect-handle-"+t.name+'"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="'+t.label+'" aria-grabbed="false">')}),c=n.map(u,function(e){var n;return new(Tt.get("DragHelper"))(f,{document:r.ownerDocument,handle:f+"-"+e.name,start:function(){n=t},drag:function(t){h(e,n,t.deltaX,t.deltaY)}})}),p(t),Ut(r).on("focusin focusout",function(t){Ut(t.target).attr("aria-grabbed","focus"===t.type)}),Ut(r).on("keydown",function(e){var o;function r(t,e,n,r,i){t.stopPropagation(),t.preventDefault(),h(o,n,r,i)}switch(n.each(u,function(t){if(e.target.id===f+"-"+t.name)return o=t,!1}),e.keyCode){case jt.LEFT:r(e,0,t,-10,0);break;case jt.RIGHT:r(e,0,t,10,0);break;case jt.UP:r(e,0,t,0,-10);break;case jt.DOWN:r(e,0,t,0,10);break;case jt.ENTER:case jt.SPACEBAR:e.preventDefault(),i()}}),a=n.extend({toggleVisibility:function(t){var e;e=n.map(u,function(t){return"#"+f+"-"+t.name}).concat(n.map(l,function(t){return"#"+f+"-"+t})).join(","),t?Ut(e,r).show():Ut(e,r).hide()},setClampRect:function(e){o=e,p(t)},setRect:m,getInnerRect:function(){return d(o,t)},setInnerRect:g,setViewPortRect:function(n){e=n,p(t)},destroy:function(){n.each(c,function(t){t.destroy()}),c=[]}},Mt)},Et={create:function(t){return new(Tt.get("Control").extend({Defaults:{classes:"imagepanel"},selection:function(t){return arguments.length?(this.state.set("rect",t),this):this.state.get("rect")},imageSize:function(){var t=this.state.get("viewRect");return{w:t.w,h:t.h}},toggleCropRect:function(t){this.state.set("cropEnabled",t)},imageSrc:function(t){var e=this,n=new Image;n.src=t,Bt(n).then(function(){var t,o,r=e.state.get("viewRect");if((o=e.$el.find("img"))[0])o.replaceWith(n);else{var i=document.createElement("div");i.className="mce-imagepanel-bg",e.getEl().appendChild(i),e.getEl().appendChild(n)}t={x:0,y:0,w:n.naturalWidth,h:n.naturalHeight},e.state.set("viewRect",t),e.state.set("rect",Ct.inflate(t,-20,-20)),r&&r.w===t.w&&r.h===t.h||e.zoomFit(),e.repaintImage(),e.fire("load")})},zoom:function(t){return arguments.length?(this.state.set("zoom",t),this):this.state.get("zoom")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var t,e,n,o,r,i;t=this.$el.find("img"),e=this.getEl().clientWidth,n=this.getEl().clientHeight,o=t[0].naturalWidth,r=t[0].naturalHeight,(i=Math.min((e-10)/o,(n-10)/r))>=1&&(i=1),this.zoom(i)},repaintImage:function(){var t,e,n,o,r,i,a,u,c,l,s;s=this.getEl(),c=this.zoom(),l=this.state.get("rect"),a=this.$el.find("img"),u=this.$el.find(".mce-imagepanel-bg"),r=s.offsetWidth,i=s.offsetHeight,n=a[0].naturalWidth*c,o=a[0].naturalHeight*c,t=Math.max(0,r/2-n/2),e=Math.max(0,i/2-o/2),a.css({left:t,top:e,width:n,height:o}),u.css({left:t,top:e,width:n,height:o}),this.cropRect&&(this.cropRect.setRect({x:l.x*c+t,y:l.y*c+e,w:l.w*c,h:l.h*c}),this.cropRect.setClampRect({x:t,y:e,w:n,h:o}),this.cropRect.setViewPortRect({x:0,y:0,w:r,h:i}))},bindStates:function(){var t=this;t.state.on("change:cropEnabled",function(e){t.cropRect.toggleVisibility(e.value),t.repaintImage()}),t.state.on("change:zoom",function(){t.repaintImage()}),t.state.on("change:rect",function(e){var n,o=e.value;t.cropRect||(n=o,t.cropRect=zt(n,t.state.get("viewRect"),t.state.get("viewRect"),t.getEl(),function(){t.fire("crop")}),t.cropRect.on("updateRect",function(e){var n=e.rect,o=t.zoom();n={x:Math.round(n.x/o),y:Math.round(n.y/o),w:Math.round(n.w/o),h:Math.round(n.h/o)},t.state.set("rect",n)}),t.on("remove",t.cropRect.destroy)),t.cropRect.setRect(o)})}}))(t)}};function St(t){return{blob:t,url:rt.createObjectURL(t)}}function Lt(t){t&&rt.revokeObjectURL(t.url)}function Ht(t){n.each(t,Lt)}function Ot(t,e,o,r){var i,a,u,c,l,s,f,d,h,p,m,g,v,y,b,w,x,R,I,T,k,C,B,U,M,j,A,z=kt();function E(t){var e,n,o,r;e=i.find("#w")[0],n=i.find("#h")[0],o=parseInt(e.value(),10),r=parseInt(n.value(),10),i.find("#constrain")[0].checked()&&U&&M&&o&&r&&("w"===t.control.settings.name?(r=Math.round(o*j),n.value(r)):(o=Math.round(r*A),e.value(o))),U=o,M=r}function S(t){return Math.round(100*t)+"%"}function L(){i.find("#undo").disabled(!z.canUndo()),i.find("#redo").disabled(!z.canRedo()),i.statusbar.find("#save").disabled(!z.canUndo())}function H(){i.find("#undo").disabled(!0),i.find("#redo").disabled(!0)}function O(t){t&&d.imageSrc(t.url)}function _(t){return function(){var e=n.grep(B,function(e){return e.settings.name!==t});n.each(e,function(t){t.hide()}),t.show(),t.focus()}}function D(t){O(c=St(t))}function F(t){O(e=St(t)),Ht(z.add(e).removed),L()}function P(){var t=d.selection();nt.blobToImageResult(e.blob).then(function(e){tt.crop(e,t.x,t.y,t.w,t.h).then(X).then(function(t){F(t),q()})})}var W=function(t){var n=[].slice.call(arguments,1);return function(){var o=c||e;nt.blobToImageResult(o.blob).then(function(e){t.apply(this,[e].concat(n)).then(X).then(D)})}};function q(){O(e),Lt(c),_(a)(),L()}function V(){c?(F(c.blob),q()):function e(n,o){c?o():setTimeout(function(){n-- >0?e(n,o):t.windowManager.alert("Error: failed to apply image operation.")},10)}(100,V)}function N(t){return Tt.create("Form",{layout:"flex",direction:"row",labelGap:5,border:"0 0 1 0",align:"center",pack:"center",padding:"0 10 0 10",spacing:5,flex:0,minHeight:60,defaults:{classes:"imagetool",type:"button"},items:t})}var X=function(t){return t.toBlob()};function $(t,n){return N([{text:"Back",onclick:q},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}]).hide().on("show",function(){H(),nt.blobToImageResult(e.blob).then(function(t){return n(t)}).then(X).then(function(t){var e=St(t);O(e),Lt(c),c=e})})}function G(t,n,o,r,i){return N([{text:"Back",onclick:q},{type:"spacer",flex:1},{type:"slider",flex:1,ondragend:function(t){var o;o=t.value,nt.blobToImageResult(e.blob).then(function(t){return n(t,o)}).then(X).then(function(t){var e=St(t);O(e),Lt(c),c=e})},minValue:r,maxValue:i,value:o,previewFilter:S},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}]).hide().on("show",function(){this.find("slider").value(o),H()})}l=N([{text:"Back",onclick:q},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:P}]).hide().on("show hide",function(t){d.toggleCropRect("show"===t.type)}).on("show",H),s=N([{text:"Back",onclick:q},{type:"spacer",flex:1},{type:"textbox",name:"w",label:"Width",size:4,onkeyup:E},{type:"textbox",name:"h",label:"Height",size:4,onkeyup:E},{type:"checkbox",name:"constrain",text:"Constrain proportions",checked:!0,onchange:function(t){!0===t.control.value()&&(j=M/U,A=U/M)}},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:"submit"}]).hide().on("submit",function(t){var n=parseInt(i.find("#w").value(),10),o=parseInt(i.find("#h").value(),10);t.preventDefault(),function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=[].slice.call(arguments,1);return function(){nt.blobToImageResult(e.blob).then(function(e){t.apply(this,[e].concat(r)).then(X).then(F)})}}(tt.resize,n,o)(),q()}).on("show",H),f=N([{text:"Back",onclick:q},{type:"spacer",flex:1},{icon:"fliph",tooltip:"Flip horizontally",onclick:W(tt.flip,"h")},{icon:"flipv",tooltip:"Flip vertically",onclick:W(tt.flip,"v")},{icon:"rotateleft",tooltip:"Rotate counterclockwise",onclick:W(tt.rotate,-90)},{icon:"rotateright",tooltip:"Rotate clockwise",onclick:W(tt.rotate,90)},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}]).hide().on("show",H),m=$(0,tt.invert),I=$(0,tt.sharpen),T=$(0,tt.emboss),g=G(0,tt.brightness,0,-1,1),v=G(0,tt.hue,180,0,360),y=G(0,tt.saturate,0,-1,1),b=G(0,tt.contrast,0,-1,1),w=G(0,tt.grayscale,0,0,1),x=G(0,tt.sepia,0,0,1),R=function(t,n){function o(){var t,o,r;t=i.find("#r")[0].value(),o=i.find("#g")[0].value(),r=i.find("#b")[0].value(),nt.blobToImageResult(e.blob).then(function(e){return n(e,t,o,r)}).then(X).then(function(t){var e=St(t);O(e),Lt(c),c=e})}return N([{text:"Back",onclick:q},{type:"spacer",flex:1},{type:"slider",label:"R",name:"r",minValue:0,value:1,maxValue:2,ondragend:o,previewFilter:S},{type:"slider",label:"G",name:"g",minValue:0,value:1,maxValue:2,ondragend:o,previewFilter:S},{type:"slider",label:"B",name:"b",minValue:0,value:1,maxValue:2,ondragend:o,previewFilter:S},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:V}]).hide().on("show",function(){i.find("#r,#g,#b").value(1),H()})}(0,tt.colorize),k=G(0,tt.gamma,0,-1,1),C=G(0,tt.exposure,1,0,2),u=N([{text:"Back",onclick:q},{type:"spacer",flex:1},{text:"hue",icon:"hue",onclick:_(v)},{text:"saturate",icon:"saturate",onclick:_(y)},{text:"sepia",icon:"sepia",onclick:_(x)},{text:"emboss",icon:"emboss",onclick:_(T)},{text:"exposure",icon:"exposure",onclick:_(C)},{type:"spacer",flex:1}]).hide(),a=N([{tooltip:"Crop",icon:"crop",onclick:_(l)},{tooltip:"Resize",icon:"resize2",onclick:_(s)},{tooltip:"Orientation",icon:"orientation",onclick:_(f)},{tooltip:"Brightness",icon:"sun",onclick:_(g)},{tooltip:"Sharpen",icon:"sharpen",onclick:_(I)},{tooltip:"Contrast",icon:"contrast",onclick:_(b)},{tooltip:"Color levels",icon:"drop",onclick:_(R)},{tooltip:"Gamma",icon:"gamma",onclick:_(k)},{tooltip:"Invert",icon:"invert",onclick:_(m)}]),d=Et.create({flex:1,imageSrc:e.url}),h=Tt.create("Container",{layout:"flex",direction:"column",border:"0 1 0 0",padding:5,spacing:5,items:[{type:"button",icon:"undo",tooltip:"Undo",name:"undo",onclick:function(){O(e=z.undo()),L()}},{type:"button",icon:"redo",tooltip:"Redo",name:"redo",onclick:function(){O(e=z.redo()),L()}},{type:"button",icon:"zoomin",tooltip:"Zoom in",onclick:function(){var t=d.zoom();t<2&&(t+=.1),d.zoom(t)}},{type:"button",icon:"zoomout",tooltip:"Zoom out",onclick:function(){var t=d.zoom();t>.1&&(t-=.1),d.zoom(t)}}]}),p=Tt.create("Container",{type:"container",layout:"flex",direction:"row",align:"stretch",flex:1,items:[h,d]}),B=[a,l,s,f,u,m,g,v,y,b,w,x,R,I,T,k,C],(i=t.windowManager.open({layout:"flex",direction:"column",align:"stretch",minWidth:Math.min(It.DOM.getViewPort().w,800),minHeight:Math.min(It.DOM.getViewPort().h,650),title:"Edit image",items:B.concat([p]),buttons:[{text:"Save",name:"save",subtype:"primary",onclick:function(){o(e.blob),i.close()}},{text:"Cancel",onclick:"close"}]})).on("close",function(){r(),Ht(z.data),z=null,c=null}),z.add(e),L(),d.on("load",function(){U=d.imageSize().w,M=d.imageSize().h,j=M/U,A=U/M,i.find("#w").value(U),i.find("#h").value(M)}),d.on("crop",P)}var _t={edit:function(t,e){return new at(function(n,o){return e.toBlob().then(function(e){Ot(t,St(e),n,o)})})}},Dt=0,Ft=function(t,e){t.notificationManager.open({text:e,type:"error"})},Pt=function(t){return t.selection.getNode()},Wt=function(t,e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new ut(n).host===t.documentBaseURI.host},qt=function(t,e){return-1!==n.inArray(t.settings.imagetools_cors_hosts,new ut(e.src).host)},Vt=function(t){var e,n,o,r,i,a;return(e=t.editorUpload.blobCache.getByUri(Pt(t).src))?at.resolve(e.blob()):(n=t,o=Pt(t),a=o.src,qt(n,o)?Rt(o.src,null):Wt(n,o)?H(o):(a=lt(n),a+=(-1===a.indexOf("?")?"?":"&")+"url="+encodeURIComponent(o.src),r=(i=n).settings.api_key||i.settings.imagetools_api_key,Rt(a,r)))},Nt=function(t,e){var n=it.setEditorTimeout(t,function(){t.editorUpload.uploadImagesAuto()},t.settings.images_upload_timeout||3e4);e.set(n)},Xt=function(t){clearTimeout(t.get())},$t=function(t,e,n,o){return e.toBlob().then(function(r){var i,a,u,c,l,s,f;return u=t.editorUpload.blobCache,i=(l=Pt(t)).src,t.settings.images_reuse_filename&&((c=u.getByUri(i))?(i=c.uri(),a=c.name()):(s=t,a=(f=i.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?s.dom.encode(f[1]):null)),c=u.create({id:"imagetools"+Dt++,blob:r,base64:e.toBase64(),uri:i,name:a}),u.add(c),t.undoManager.transact(function(){t.$(l).on("load",function e(){t.$(l).off("load",e),t.nodeChanged(),n?t.editorUpload.uploadImagesAuto():(Xt(o),Nt(t,o))}),t.$(l).attr({src:c.blobUri()}).removeAttr("data-mce-src")}),c})},Gt=function(t,e,n){return function(){return t._scanForImages().then(p.curry(Vt,t)).then(nt.blobToImageResult).then(n).then(function(n){return $t(t,n,!1,e)},function(e){Ft(t,e)})}},Yt={rotate:function(t,e,n){return function(){return Gt(t,e,function(e){var o=st.getImageSize(Pt(t));return o&&st.setImageSize(Pt(t),{w:o.h,h:o.w}),tt.rotate(e,n)})()}},flip:function(t,e,n){return function(){return Gt(t,e,function(t){return tt.flip(t,n)})()}},editImageDialog:function(t,e){return function(){var n=Pt(t),o=st.getNaturalImageSize(n),r=function(t){return new at(function(e){L(t).then(function(r){var i=st.getNaturalImageSize(r);o.w===i.w&&o.h===i.h||st.getImageSize(n)&&st.setImageSize(n,i),rt.revokeObjectURL(r.src),e(t)})})};Vt(t).then(nt.blobToImageResult).then(p.curry(function(t,n){return _t.edit(t,n).then(r).then(nt.blobToImageResult).then(function(n){return $t(t,n,!0,e)},function(){})},t),function(e){Ft(t,e)})}},isEditableImage:function(t,e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&(Wt(t,e)||qt(t,e)||t.settings.imagetools_proxy)},cancelTimedUpload:Xt},Jt=function(t,e){n.each({mceImageRotateLeft:Yt.rotate(t,e,-90),mceImageRotateRight:Yt.rotate(t,e,90),mceImageFlipVertical:Yt.flip(t,e,"v"),mceImageFlipHorizontal:Yt.flip(t,e,"h"),mceEditImage:Yt.editImageDialog(t,e)},function(e,n){t.addCommand(n,e)})},Kt=function(t,e,n){t.on("NodeChange",function(o){var r=n.get();r&&r.src!==o.element.src&&(Yt.cancelTimedUpload(e),t.editorUpload.uploadImagesAuto(),n.set(null)),Yt.isEditableImage(t,o.element)&&n.set(o.element)})},Zt=function(t){t.addButton("rotateleft",{title:"Rotate counterclockwise",cmd:"mceImageRotateLeft"}),t.addButton("rotateright",{title:"Rotate clockwise",cmd:"mceImageRotateRight"}),t.addButton("flipv",{title:"Flip vertically",cmd:"mceImageFlipVertical"}),t.addButton("fliph",{title:"Flip horizontally",cmd:"mceImageFlipHorizontal"}),t.addButton("editimage",{title:"Edit image",cmd:"mceEditImage"}),t.addButton("imageoptions",{title:"Image options",icon:"options",cmd:"mceImage"})},Qt=function(t){t.addContextToolbar(p.curry(Yt.isEditableImage,t),ct(t))};e.add("imagetools",function(e){var n=t(0),o=t(null);Jt(e,n),Zt(e),Qt(e),Kt(e,n,o)})}();