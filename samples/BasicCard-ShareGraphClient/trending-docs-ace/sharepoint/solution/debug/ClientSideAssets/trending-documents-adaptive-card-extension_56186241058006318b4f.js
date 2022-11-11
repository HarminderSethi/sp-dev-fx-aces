define("c310be49-9daa-4c96-a07c-4c4c4a639f58_0.0.1",["TrendingDocumentsAdaptiveCardExtensionStrings","@microsoft/sp-loader","@microsoft/sp-core-library","@microsoft/sp-adaptive-card-extension-base","@microsoft/sp-http"],function(n,a,i,r,o){return function(e){function t(t){for(var n,i,r=t[0],o=t[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},a={1:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){for(var n=[],o=function(e){return{0:[{i:"f9e737b7-f0df-4597-ba8c-3060f82380db",v:"1.15.0",m:"26ea"}]}[e]||[]}(t),s=0;s<o.length;s++)e[o[s].m]||function(t){n.push(r.SPComponentLoader.loadComponentById(t.i,t.v).then(function(n){e[t.m]=function(e){e.exports=n}}))}(o[s]);var c=a[t];if(0!==c)if(c)n.push(c[2]);else{var d=new Promise(function(e,n){c=a[t]=[e,n]});n.push(c[2]=d);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunk."+({0:"TrendingDocuments-property-pane"}[e]||e)+"_"+{0:"76fb1c5e341b1af220f1"}[e]+".js"}(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=i("I6O9");i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonpc310be49_9daa_4c96_a07c_4c4c4a639f58_0_0_1=window.webpackJsonpc310be49_9daa_4c96_a07c_4c4c4a639f58_0_0_1||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return function(){var e,t=document.getElementsByTagName("script"),n=/trending-documents-adaptive-card-extension_56186241058006318b4f\.js/i;if(t&&t.length)for(var a=0;a<t.length;a++)if(t[a]){var r=t[a].getAttribute("src");if(r&&r.match(n)){e=r.substring(0,r.lastIndexOf("/")+1);break}}if(!e)for(var o in window.__setWebpackPublicPathLoaderSrcRegistry__)if(o&&o.match(n)){e=o.substring(0,o.lastIndexOf("/")+1);break}i.p=e}(),i(i.s="GdsK")}({"4Rht":function(e,t){e.exports=n},GdsK:function(e,t,n){"use strict";n.r(t),n.d(t,"QUICK_VIEW_REGISTRY_ID",function(){return I});var a,i=n("lz/E"),r=n("4Rht"),o=(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"cardButtons",{get:function(){return[{title:r.QuickViewButton,action:{type:"QuickView",parameters:{view:I}}}]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return{primaryText:r.PrimaryText,title:this.properties.title}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onCardSelection",{get:function(){return{type:"ExternalLink",parameters:{target:"https://www.bing.com"}}},enumerable:!1,configurable:!0}),t}(i.BaseBasicCardView),c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{subTitle:r.SubTitle,title:r.Title}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("UsHJ")},enumerable:!1,configurable:!0}),t}(i.BaseAdaptiveCardView),l=n("UWqr"),u=n("vlQI"),f=function(){return f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},f.apply(this,arguments)},p=function(){function e(e){this.httpClient=e}return e.prototype.get=function(e,t){return this.httpClient.get(e,u.AadHttpClient.configurations.v1,f(f({},t),{headers:f(f({},null==t?void 0:t.headers),{Accept:"application/json",ConsistencyLevel:"eventual","Content-Type":"application/json"})}))},e.prototype.post=function(e,t){return this.httpClient.post(e,u.AadHttpClient.configurations.v1,t)},e.prototype.patch=function(e,t){return this.httpClient.fetch(e,u.AadHttpClient.configurations.v1,f(f({},t),{headers:f(f({},null==t?void 0:t.headers),{Accept:"application/json",ConsistencyLevel:"eventual","Content-Type":"application/json"}),method:"PATCH"}))},e.prototype.put=function(e,t){return this.httpClient.fetch(e,u.AadHttpClient.configurations.v1,f(f({},t),{headers:f(f({},null==t?void 0:t.headers),{Accept:"application/json",ConsistencyLevel:"eventual","Content-Type":"application/json"}),method:"PUT"}))},e.prototype.delete=function(e){return this.httpClient.fetch(e,u.AadHttpClient.configurations.v1,{method:"DELETE"})},e}(),m=function(){function e(){}return e.splitToMaxLength=function(e,t){for(var n=[],a=0;a<e.length;)n.push(e.slice(a,a+t)),a+=t;return n},e.getSubMap=function(e,t){var n=new Map;return t.forEach(function(t){return n.set(t,e.get(t))}),n},e}(),_=function(){return _=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},_.apply(this,arguments)},h=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},b=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},g=function(){function e(e,t,n,a){void 0===a&&(a=0);var i=this;this.baseClient=e,this.registeredPromises=t,this.batch=n,this.retries=a,this.requestBatch=function(e,t){return void 0===t&&(t="beta"),h(i,void 0,void 0,function(){var n,a;return b(this,function(i){switch(i.label){case 0:return n={headers:{Accept:"application/json",ConsistencyLevel:"eventual","Content-Type":"application/json"},body:e},[4,this.baseClient.post("https://graph.microsoft.com/".concat(t,"/$batch"),n)];case 1:return(a=i.sent()).ok?[4,a.json()]:[3,3];case 2:return[2,i.sent()];case 3:return[2]}})})}}return e.prototype.executeBatch=function(){return h(this,void 0,void 0,function(){var e,t,n,a,i,r,o;return b(this,function(s){switch(s.label){case 0:return e=this.batch.filter(function(e){return e.url.indexOf("v1.0/")<0}),t=this.batch.filter(function(e){return e.url.indexOf("v1.0/")>=0}),n=JSON.stringify({requests:e}),a=JSON.stringify({requests:t.map(function(e){return _(_({},e),{url:e.url.replace("v1.0/","")})})}),i=[],e.length>0?[4,this.requestBatch(n)]:[3,2];case 1:r=s.sent(),i.push.apply(i,r.responses),s.label=2;case 2:return t.length>0?[4,this.requestBatch(a,"v1.0")]:[3,4];case 3:o=s.sent(),i.push.apply(i,o.responses),s.label=4;case 4:return this.processBatchResponse(i),this.batch.length>0&&this.retries>0&&(this.retries--,this.executeBatch()),[2]}})})},e.prototype.processBatchResponse=function(e){var t=this,n=[],a=new Map;this.registeredPromises.forEach(function(i,r){var o=e.filter(function(e){return e.id===r})[0];o&&429===o.status&&t.retries>0?(n.push({url:r,id:r,method:"GET"}),a.set(r,i)):t.handleSingleResponse(o,i)}),n.length>0?(this.registeredPromises=a,this.batch=n):(this.batch=[],this.registeredPromises.clear())},e.prototype.handleSingleResponse=function(e,t){e?t.forEach(function(t){t.resolve({json:function(){return Promise.resolve(e.body)},ok:200===e.status,text:function(){return Promise.resolve(JSON.stringify(e.body))}})}):t.forEach(function(t){t.error({json:function(){return Promise.resolve(e)},ok:!1,text:function(){return Promise.resolve(JSON.stringify(e))}})})},e.maxRetries=5,e}(),v=function(){function e(e,t,n){void 0===t&&(t=500),void 0===n&&(n=15);var a=this;this.baseClient=e,this.batchWaitTime=t,this.batchSplitThreshold=n,this.batch=[],this.registeredPromises=new Map,this.generateBatch=function(){return e=a,void 0,n=function(){var e,t,n,a,i,r,o;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(s){switch(s.label){case 0:e=function(e,t,n){if(n||2===arguments.length)for(var a,i=0,r=t.length;i<r;i++)!a&&i in t||(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}([],this.batch,!0),this.batch=[],t=new Map(this.registeredPromises),this.registeredPromises.clear(),n=m.splitToMaxLength(e,this.batchSplitThreshold),a=0,i=n,s.label=1;case 1:return a<i.length?(r=i[a],o=m.getSubMap(t,r.map(function(e){return e.id})),[4,new g(this.baseClient,o,r,g.maxRetries).executeBatch()]):[3,4];case 2:s.sent(),s.label=3;case 3:return a++,[3,1];case 4:return[2]}})},new((t=void 0)||(t=Promise))(function(a,i){function r(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(r,o)}s((n=n.apply(e,[])).next())});var e,t,n},this.createGetBatchRequest=function(e,t){0===a.batch.length&&setTimeout(a.generateBatch,a.batchWaitTime);var n=encodeURIComponent(e),i=new URL(e,"https://graph.microsoft.com"),r=i.pathname+i.search;a.batch.filter(function(e){return e.id===n})[0]?a.registeredPromises.get(n).push(t):(a.batch.push({url:r,id:n,method:"GET",headers:{ConsistencyLevel:"eventual"}}),a.registeredPromises.set(n,[t]))}}return e.prototype.get=function(e,t){var n=this;return new Promise(function(t,a){n.createGetBatchRequest(e,{resolve:t,error:a})})},e.prototype.post=function(e,t){return this.baseClient.post(e,t)},e.prototype.patch=function(e,t){return this.baseClient.patch(e,t)},e.prototype.put=function(e,t){return this.baseClient.put(e,t)},e.prototype.delete=function(e){return this.baseClient.delete(e)},e}(),y=function(){function e(e){var t=this;this.serviceScope=e,e.whenFinished(function(){return t.clientFactory=e.consume(u.AadHttpClientFactory.serviceKey)})}return e.prototype.getGraphClient=function(){return e=this,void 0,n=function(){var e,t;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(n){switch(n.label){case 0:return this.client?[3,2]:[4,this.clientFactory.getClient("https://graph.microsoft.com")];case 1:e=n.sent(),t=new p(e),this.client=new v(t),n.label=2;case 2:return[2,this.client]}})},new((t=void 0)||(t=Promise))(function(a,i){function r(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(r,o)}s((n=n.apply(e,[])).next())});var e,t,n},e.serviceKey=l.ServiceKey.create("pnp-sample:GraphClientProvider",e),e}(),S=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),D="TrendingDocuments_CARD_VIEW",I="TrendingDocuments_QUICK_VIEW",x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return S(t,e),t.prototype.onInit=function(){return e=this,void 0,n=function(){var e;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(t){switch(t.label){case 0:return this.state={},this.cardNavigator.register(D,function(){return new s}),this.quickViewNavigator.register(I,function(){return new d}),[4,this.context.serviceScope.consume(y.serviceKey).getGraphClient()];case 1:return[4,t.sent().get("https://graph.microsoft.com/v1.0/me/insights/trending")];case 2:return[4,t.sent().json()];case 3:return e=t.sent(),console.log(e),[2,Promise.resolve()]}})},new((t=void 0)||(t=Promise))(function(a,i){function r(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(r,o)}s((n=n.apply(e,[])).next())});var e,t,n},t.prototype.loadPropertyPaneResources=function(){var e=this;return n.e(0).then(n.bind(null,"Fa6u")).then(function(t){e._deferredPropertyPane=new t.TrendingDocumentsPropertyPane})},t.prototype.renderCard=function(){return D},t.prototype.getPropertyPaneConfiguration=function(){return this._deferredPropertyPane.getPropertyPaneConfiguration()},t}(i.BaseAdaptiveCardExtension);t.default=x},I6O9:function(e,t){e.exports=a},UWqr:function(e,t){e.exports=i},UsHJ:function(e){e.exports=JSON.parse('{"schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.2","body":[{"type":"TextBlock","weight":"Bolder","text":"${title}"},{"type":"ColumnSet","columns":[{"type":"Column","items":[{"type":"TextBlock","weight":"Bolder","text":"${subTitle}","wrap":true}]}]}]}')},"lz/E":function(e,t){e.exports=r},vlQI:function(e,t){e.exports=o}})});