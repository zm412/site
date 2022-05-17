(()=>{var e={940:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ClientForms:()=>o});var n=r(569);class o{constructor(e){this.url=e}getClient(){const e=new n.JSONRPCClient((t=>fetch(this.url,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((r=>200===r.status?r.json().then((t=>e.receive(t))):void 0!==t.id?Promise.reject(new Error(r.statusText)):void 0))));return e}getForm(e,t){return this.getClient().request("get_form",e).then((e=>{console.log(e,"result"),t(e)}))}getForms(e){return this.getClient().request("get_forms").then((t=>{e(t),console.log(t,"result")}))}saveFormInst(e){return console.log(e,"newobj"),this.getClient().request("save_form_inst",e).then((e=>{console.log(e,"result")}))}getFormInst(e){return this.getClient().request("get_form_inst",e).then((e=>{console.log(e,"result")}))}}},99:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(81),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([e.id,"body{color:green}.hidden_bl{display:none}",""]);const u=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var u=0;u<this.length;u++){var a=this[u][0];null!=a&&(s[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},779:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{a(n.next(e))}catch(e){i(e)}}function u(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,u)}a((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.JSONRPCClient=void 0;var i=r(738),s=r(165),u=function(){function e(e,t){this._send=e,this.createID=t,this.idToResolveMap=new Map,this.id=0}return e.prototype._createID=function(){return this.createID?this.createID():++this.id},e.prototype.timeout=function(e,t){var r=this;void 0===t&&(t=function(e){return(0,i.createJSONRPCErrorResponse)(e,s.DefaultErrorCode,"Request timeout")});var n=function(n,o){var i=setTimeout((function(){n.forEach((function(e){var n=r.idToResolveMap.get(e);n&&(r.idToResolveMap.delete(e),n(t(e)))}))}),e);return o().then((function(e){return clearTimeout(i),e}),(function(e){return clearTimeout(i),Promise.reject(e)}))};return{request:function(e,t,o){var i=r._createID();return n([i],(function(){return r.requestWithID(e,t,o,i)}))},requestAdvanced:function(e,t){return function(e,t){var o=(Array.isArray(e)?e:[e]).map((function(e){return e.id})).filter(a);return n(o,(function(){return r.requestAdvanced(e,t)}))}(e,t)}}},e.prototype.request=function(e,t,r){return this.requestWithID(e,t,r,this._createID())},e.prototype.requestWithID=function(e,t,r,s){return n(this,void 0,void 0,(function(){var n,u;return o(this,(function(o){switch(o.label){case 0:return n={jsonrpc:i.JSONRPC,method:e,params:t,id:s},[4,this.requestAdvanced(n,r)];case 1:return void 0===(u=o.sent()).result||u.error?void 0===u.result&&u.error?[2,Promise.reject(new Error(u.error.message))]:[2,Promise.reject(new Error("An unexpected error occurred"))]:[2,u.result]}}))}))},e.prototype.requestAdvanced=function(e,t){var r=this,n=Array.isArray(e);Array.isArray(e)||(e=[e]);var o=e.filter((function(e){return a(e.id)})),u=o.map((function(e){return new Promise((function(t){return r.idToResolveMap.set(e.id,t)}))})),c=Promise.all(u).then((function(e){return n||!e.length?e:e[0]}));return this.send(n?e:e[0],t).then((function(){return c}),(function(e){return o.forEach((function(t){r.receive((0,i.createJSONRPCErrorResponse)(t.id,s.DefaultErrorCode,e&&e.message||"Failed to send a request"))})),c}))},e.prototype.notify=function(e,t,r){this.send({jsonrpc:i.JSONRPC,method:e,params:t},r).then(void 0,(function(){}))},e.prototype.send=function(e,t){return this._send(e,t)},e.prototype.rejectAllPendingRequests=function(e){this.idToResolveMap.forEach((function(t,r){return t((0,i.createJSONRPCErrorResponse)(r,s.DefaultErrorCode,e))})),this.idToResolveMap.clear()},e.prototype.receive=function(e){var t=this;Array.isArray(e)||(e=[e]),e.forEach((function(e){var r=t.idToResolveMap.get(e.id);r&&(t.idToResolveMap.delete(e.id),r(e))}))},e}();t.JSONRPCClient=u;var a=function(e){return null!=e}},569:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(779),t),o(r(738),t),o(r(479),t),o(r(451),t)},165:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultErrorCode=void 0,t.DefaultErrorCode=0},738:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.createJSONRPCErrorResponse=t.JSONRPCErrorCode=t.isJSONRPCResponses=t.isJSONRPCResponse=t.isJSONRPCRequests=t.isJSONRPCRequest=t.isJSONRPCID=t.JSONRPC=void 0,t.JSONRPC="2.0",t.isJSONRPCID=function(e){return"string"==typeof e||"number"==typeof e||null===e},t.isJSONRPCRequest=function(e){return e.jsonrpc===t.JSONRPC&&void 0!==e.method&&void 0===e.result&&void 0===e.error},t.isJSONRPCRequests=function(e){return Array.isArray(e)&&e.every(t.isJSONRPCRequest)},t.isJSONRPCResponse=function(e){return e.jsonrpc===t.JSONRPC&&void 0!==e.id&&(void 0!==e.result||void 0!==e.error)},t.isJSONRPCResponses=function(e){return Array.isArray(e)&&e.every(t.isJSONRPCResponse)},(r=t.JSONRPCErrorCode||(t.JSONRPCErrorCode={}))[r.ParseError=-32700]="ParseError",r[r.InvalidRequest=-32600]="InvalidRequest",r[r.MethodNotFound=-32601]="MethodNotFound",r[r.InvalidParams=-32602]="InvalidParams",r[r.InternalError=-32603]="InternalError",t.createJSONRPCErrorResponse=function(e,r,n,o){var i={code:r,message:n};return o&&(i.data=o),{jsonrpc:t.JSONRPC,id:e,error:i}}},451:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{a(n.next(e))}catch(e){i(e)}}function u(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,u)}a((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.JSONRPCServerAndClient=void 0;var i=r(738),s=function(){function e(e,t,r){var n;void 0===r&&(r={}),this.server=e,this.client=t,this.errorListener=null!==(n=r.errorListener)&&void 0!==n?n:console.warn}return e.prototype.applyServerMiddleware=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(e=this.server).applyMiddleware.apply(e,t)},e.prototype.addMethod=function(e,t){this.server.addMethod(e,t)},e.prototype.addMethodAdvanced=function(e,t){this.server.addMethodAdvanced(e,t)},e.prototype.timeout=function(e){return this.client.timeout(e)},e.prototype.request=function(e,t,r){return this.client.request(e,t,r)},e.prototype.requestAdvanced=function(e,t){return this.client.requestAdvanced(e,t)},e.prototype.notify=function(e,t,r){this.client.notify(e,t,r)},e.prototype.rejectAllPendingRequests=function(e){this.client.rejectAllPendingRequests(e)},e.prototype.receiveAndSend=function(e,t,r){return n(this,void 0,void 0,(function(){var n,s;return o(this,(function(o){switch(o.label){case 0:return(0,i.isJSONRPCResponse)(e)||(0,i.isJSONRPCResponses)(e)?(this.client.receive(e),[3,4]):[3,1];case 1:return(0,i.isJSONRPCRequest)(e)||(0,i.isJSONRPCRequests)(e)?[4,this.server.receive(e,t)]:[3,3];case 2:return(n=o.sent())?[2,this.client.send(n,r)]:[3,4];case 3:return s="Received an invalid JSON-RPC message",this.errorListener(s,e),[2,Promise.reject(new Error(s))];case 4:return[2]}}))}))},e}();t.JSONRPCServerAndClient=s},479:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{a(n.next(e))}catch(e){i(e)}}function u(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,u)}a((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},s=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.JSONRPCServer=void 0;var u=r(738),a=r(165),c=function(e){return(0,u.createJSONRPCErrorResponse)((0,u.isJSONRPCID)(e.id)?e.id:null,u.JSONRPCErrorCode.InvalidRequest,"Invalid Request")},l=function(){function e(e){var t;void 0===e&&(e={}),this.mapErrorToJSONRPCErrorResponse=h,this.nameToMethodDictionary={},this.middleware=null,this.errorListener=null!==(t=e.errorListener)&&void 0!==t?t:console.warn}return e.prototype.addMethod=function(e,t){this.addMethodAdvanced(e,this.toJSONRPCMethod(t))},e.prototype.toJSONRPCMethod=function(e){return function(t,r){var n=e(t.params,r);return Promise.resolve(n).then((function(e){return p(t.id,e)}))}},e.prototype.addMethodAdvanced=function(e,t){var r;this.nameToMethodDictionary=n(n({},this.nameToMethodDictionary),((r={})[e]=t,r))},e.prototype.receiveJSON=function(e,t){var r=this.tryParseRequestJSON(e);return r?this.receive(r,t):Promise.resolve((0,u.createJSONRPCErrorResponse)(null,u.JSONRPCErrorCode.ParseError,"Parse error"))},e.prototype.tryParseRequestJSON=function(e){try{return JSON.parse(e)}catch(e){return null}},e.prototype.receive=function(e,t){return Array.isArray(e)?this.receiveMultiple(e,t):this.receiveSingle(e,t)},e.prototype.receiveMultiple=function(e,t){return o(this,void 0,void 0,(function(){var r,n=this;return i(this,(function(o){switch(o.label){case 0:return[4,Promise.all(e.map((function(e){return n.receiveSingle(e,t)})))];case 1:return 1===(r=o.sent().filter(d)).length?[2,r[0]]:r.length?[2,r]:[2,null]}}))}))},e.prototype.receiveSingle=function(e,t){return o(this,void 0,void 0,(function(){var r,n;return i(this,(function(o){switch(o.label){case 0:return r=this.nameToMethodDictionary[e.method],(0,u.isJSONRPCRequest)(e)?[3,1]:[2,c(e)];case 1:return r?[4,this.callMethod(r,e,t)]:[3,3];case 2:return n=o.sent(),[2,v(e,n)];case 3:return void 0!==e.id?[2,(i=e.id,(0,u.createJSONRPCErrorResponse)(i,u.JSONRPCErrorCode.MethodNotFound,"Method not found"))]:[2,null];case 4:return[2]}var i}))}))},e.prototype.applyMiddleware=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.middleware?this.middleware=this.combineMiddlewares(s([this.middleware],e,!0)):this.middleware=this.combineMiddlewares(e)},e.prototype.combineMiddlewares=function(e){return e.length?e.reduce(this.middlewareReducer):null},e.prototype.middlewareReducer=function(e,t){return function(r,n,o){return e((function(e,n){return t(r,e,n)}),n,o)}},e.prototype.callMethod=function(e,t,r){var n=this,o=function(e){return n.errorListener('An unexpected error occurred while executing "'.concat(t.method,'" JSON-RPC method:'),e),Promise.resolve(n.mapErrorToJSONRPCErrorResponseIfNecessary(t.id,e))};try{return(this.middleware||f)((function(t,r){return e(t,r)}),t,r).then(void 0,o)}catch(e){return o(e)}},e.prototype.mapErrorToJSONRPCErrorResponseIfNecessary=function(e,t){return void 0!==e?this.mapErrorToJSONRPCErrorResponse(e,t):null},e}();t.JSONRPCServer=l;var d=function(e){return null!==e},f=function(e,t,r){return e(t,r)},p=function(e,t){return void 0!==e?{jsonrpc:u.JSONRPC,id:e,result:void 0===t?null:t}:null},h=function(e,t){return(0,u.createJSONRPCErrorResponse)(e,a.DefaultErrorCode,t&&t.message||"An unexpected error occurred")},v=function(e,t){return t||(void 0!==e.id?(0,u.createJSONRPCErrorResponse)(e.id,u.JSONRPCErrorCode.InternalError,"Internal error"):null)}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},s=[],u=0;u<e.length;u++){var a=e[u],c=n.base?a[0]+n.base:a[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var f=r(d),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,n);n.byIndex=u,t.splice(u,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var u=r(i[s]);t[u].references--}for(var a=n(e,o),c=0;c<i.length;c++){var l=r(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=a}}},777:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},149:(e,t,r)=>{const{ClientForms:n}=r(940);let o="https://datazm412.herokuapp.com/json-rpc";console.log(o,"url");let i=new n(o);function s(e,t,r=null){let n=e.appendChild(document.createElement(t));return"input"==t?n.value=r:n.innerHTML=r,n}function u(e){let t=document.querySelector("#form_inst"),r=(s(t,"h4",e[0].form.title),s(t,"form"));r.id="create_inst",r.dataset.id=e[0].form._id;let n=e.map((e=>{let t="";return t+=`<p>${e.question} (${e.description})</p>`,"input"==e.question_type?t+=`<input name=${e._id} class="quest">`:"textarea"==e.question_type?t+=`<textarea name=${e._id} class="quest"></textarea>`:"select"==e.question_type&&(t+=`<select name=${e._id} class="quest">`+e.opts.reduce(((e,t,r)=>e+`<option value=${r}>${t}</option>`),"")+"</select>"),t}));r.innerHTML=n,s(r,"button","Send"),r.onsubmit=e=>{let t=function(e){document.querySelector("#create_inst"),e.preventDefault();let t={};t.form=e.target.dataset.id,t.date=new Date,t.answers=[];let r=document.querySelectorAll(".quest");return Array.from(r).map((e=>{let r="SELECT"==e.tagName?e.options[e.options.selectedIndex].innerHTML:e.value;t.answers.push({question:e.name,answer:r})})),t}(e);i.saveFormInst(t)}}document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector("#form_inst")){let e=localStorage.getItem("show_f");i.getForm(e,u)}}))},351:(e,t,r)=>{const{JSONRPCClient:n}=r(569),{ClientForms:o}=r(940);let i="https://datazm412.herokuapp.com/json-rpc";console.log(i,"url");let s=new o(i);function u(e){let t=document.querySelector("#forms_list"),r=a(t,"ul");return e.map((e=>{let t=a(r,"li"),n=a(t,"a",e.title);n.href="/new_finst/",n.onclick=t=>localStorage.setItem("show_f",e._id)})),t}function a(e,t,r=null){let n=e.appendChild(document.createElement(t));return"input"==t?n.value=r:n.innerHTML=r,n}document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#forms_list")&&s.getForms(u)}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,(()=>{"use strict";r(569);var e=r(379),t=r.n(e),n=r(795),o=r.n(n),i=r(777),s=r.n(i),u=r(565),a=r.n(u),c=r(216),l=r.n(c),d=r(589),f=r.n(d),p=r(99),h={};h.styleTagTransform=f(),h.setAttributes=a(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,r(351),r(149)})()})();