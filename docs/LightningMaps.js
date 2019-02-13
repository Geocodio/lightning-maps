!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("LightningMaps",[],e):"object"==typeof exports?exports.LightningMaps=e():t.LightningMaps=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";t.exports=function(t,e,n){var i=t*e,r=o*t,s=r-(r-t),a=t-s,l=o*e,u=l-(l-e),c=e-u,h=a*c-(i-s*u-a*u-s*c);if(n)return n[0]=h,n[1]=i,n;return[h,i]};var o=+(Math.pow(2,27)+1)},function(t,e,n){t.exports=function(t,e){for(var n=e[0],i=e[1],r=t.length,s=1,a=r,l=0,u=r-1;l<a;u=l++){var c=t[l],h=t[u],f=c[1],v=h[1];if(v<f){if(v<i&&i<f){var m=o(c,h,e);if(0===m)return 0;s^=0<m|0}else if(i===f){var p=t[(l+1)%r],d=p[1];if(f<d){var m=o(c,h,e);if(0===m)return 0;s^=0<m|0}}}else if(f<v){if(f<i&&i<v){var m=o(c,h,e);if(0===m)return 0;s^=m<0|0}else if(i===f){var p=t[(l+1)%r],d=p[1];if(d<f){var m=o(c,h,e);if(0===m)return 0;s^=m<0|0}}}else if(i===f){var g=Math.min(c[0],h[0]),y=Math.max(c[0],h[0]);if(0===l){for(;u>0;){var b=(u+r-1)%r,k=t[b];if(k[1]!==i)break;var M=k[0];g=Math.min(g,M),y=Math.max(y,M),u=b}if(0===u)return g<=n&&n<=y?0:1;a=u+1}for(var w=t[(u+r-1)%r][1];l+1<a;){var k=t[l+1];if(k[1]!==i)break;var M=k[0];g=Math.min(g,M),y=Math.max(y,M),l+=1}if(g<=n&&n<=y)return 0;var x=t[(l+1)%r][1];n<g&&w<i!=x<i&&(s^=1)}}return 2*s-1};var o=n(2)},function(t,e,n){"use strict";var o=n(0),i=n(3),r=n(4),s=n(6),a=5;function l(t,e){for(var n=new Array(t.length-1),o=1;o<t.length;++o)for(var i=n[o-1]=new Array(t.length-1),r=0,s=0;r<t.length;++r)r!==e&&(i[s++]=t[o][r]);return n}function u(t){if(1===t.length)return t[0];if(2===t.length)return["sum(",t[0],",",t[1],")"].join("");var e=t.length>>1;return["sum(",u(t.slice(0,e)),",",u(t.slice(e)),")"].join("")}function c(t){if(2===t.length)return[["sum(prod(",t[0][0],",",t[1][1],"),prod(-",t[0][1],",",t[1][0],"))"].join("")];for(var e=[],n=0;n<t.length;++n)e.push(["scale(",u(c(l(t,n))),",",(o=n,1&o?"-":""),t[0][n],")"].join(""));return e;var o}function h(t){for(var e=[],n=[],a=function(t){for(var e=new Array(t),n=0;n<t;++n){e[n]=new Array(t);for(var o=0;o<t;++o)e[n][o]=["m",o,"[",t-n-1,"]"].join("")}return e}(t),h=[],f=0;f<t;++f)0==(1&f)?e.push.apply(e,c(l(a,f))):n.push.apply(n,c(l(a,f))),h.push("m"+f);var v=u(e),m=u(n),p="orientation"+t+"Exact",d=["function ",p,"(",h.join(),"){var p=",v,",n=",m,",d=sub(p,n);return d[d.length-1];};return ",p].join("");return new Function("sum","prod","scale","sub",d)(i,o,r,s)}var f=h(3),v=h(4),m=[function(){return 0},function(){return 0},function(t,e){return e[0]-t[0]},function(t,e,n){var o,i=(t[1]-n[1])*(e[0]-n[0]),r=(t[0]-n[0])*(e[1]-n[1]),s=i-r;if(i>0){if(r<=0)return s;o=i+r}else{if(!(i<0))return s;if(r>=0)return s;o=-(i+r)}var a=3.3306690738754716e-16*o;return s>=a||s<=-a?s:f(t,e,n)},function(t,e,n,o){var i=t[0]-o[0],r=e[0]-o[0],s=n[0]-o[0],a=t[1]-o[1],l=e[1]-o[1],u=n[1]-o[1],c=t[2]-o[2],h=e[2]-o[2],f=n[2]-o[2],m=r*u,p=s*l,d=s*a,g=i*u,y=i*l,b=r*a,k=c*(m-p)+h*(d-g)+f*(y-b),M=7.771561172376103e-16*((Math.abs(m)+Math.abs(p))*Math.abs(c)+(Math.abs(d)+Math.abs(g))*Math.abs(h)+(Math.abs(y)+Math.abs(b))*Math.abs(f));return k>M||-k>M?k:v(t,e,n,o)}];function p(t){var e=m[t.length];return e||(e=m[t.length]=h(t.length)),e.apply(void 0,t)}!function(){for(;m.length<=a;)m.push(h(m.length));for(var e=[],n=["slow"],o=0;o<=a;++o)e.push("a"+o),n.push("o"+o);var i=["function getOrientation(",e.join(),"){switch(arguments.length){case 0:case 1:return 0;"];for(o=2;o<=a;++o)i.push("case ",o,":return o",o,"(",e.slice(0,o).join(),");");i.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"),n.push(i.join(""));var r=Function.apply(void 0,n);for(t.exports=r.apply(void 0,[p].concat(m)),o=0;o<=a;++o)t.exports[o]=m[o]}()},function(t,e,n){"use strict";t.exports=function(t,e){var n=0|t.length,o=0|e.length;if(1===n&&1===o)return function(t,e){var n=t+e,o=n-t,i=t-(n-o)+(e-o);if(i)return[i,n];return[n]}(t[0],e[0]);var i,r,s=new Array(n+o),a=0,l=0,u=0,c=Math.abs,h=t[l],f=c(h),v=e[u],m=c(v);f<m?(r=h,(l+=1)<n&&(h=t[l],f=c(h))):(r=v,(u+=1)<o&&(v=e[u],m=c(v)));l<n&&f<m||u>=o?(i=h,(l+=1)<n&&(h=t[l],f=c(h))):(i=v,(u+=1)<o&&(v=e[u],m=c(v)));var p,d,g=i+r,y=g-i,b=r-y,k=b,M=g;for(;l<n&&u<o;)f<m?(i=h,(l+=1)<n&&(h=t[l],f=c(h))):(i=v,(u+=1)<o&&(v=e[u],m=c(v))),(b=(r=k)-(y=(g=i+r)-i))&&(s[a++]=b),k=M-((p=M+g)-(d=p-M))+(g-d),M=p;for(;l<n;)(b=(r=k)-(y=(g=(i=h)+r)-i))&&(s[a++]=b),k=M-((p=M+g)-(d=p-M))+(g-d),M=p,(l+=1)<n&&(h=t[l]);for(;u<o;)(b=(r=k)-(y=(g=(i=v)+r)-i))&&(s[a++]=b),k=M-((p=M+g)-(d=p-M))+(g-d),M=p,(u+=1)<o&&(v=e[u]);k&&(s[a++]=k);M&&(s[a++]=M);a||(s[a++]=0);return s.length=a,s}},function(t,e,n){"use strict";var o=n(0),i=n(5);t.exports=function(t,e){var n=t.length;if(1===n){var r=o(t[0],e);return r[0]?r:[r[1]]}var s=new Array(2*n),a=[.1,.1],l=[.1,.1],u=0;o(t[0],e,a),a[0]&&(s[u++]=a[0]);for(var c=1;c<n;++c){o(t[c],e,l);var h=a[1];i(h,l[0],a),a[0]&&(s[u++]=a[0]);var f=l[1],v=a[1],m=f+v,p=m-f,d=v-p;a[1]=m,d&&(s[u++]=d)}a[1]&&(s[u++]=a[1]);0===u&&(s[u++]=0);return s.length=u,s}},function(t,e,n){"use strict";t.exports=function(t,e,n){var o=t+e,i=o-t,r=e-i,s=t-(o-i);if(n)return n[0]=s+r,n[1]=o,n;return[s+r,o]}},function(t,e,n){"use strict";t.exports=function(t,e){var n=0|t.length,o=0|e.length;if(1===n&&1===o)return function(t,e){var n=t+e,o=n-t,i=t-(n-o)+(e-o);if(i)return[i,n];return[n]}(t[0],-e[0]);var i,r,s=new Array(n+o),a=0,l=0,u=0,c=Math.abs,h=t[l],f=c(h),v=-e[u],m=c(v);f<m?(r=h,(l+=1)<n&&(h=t[l],f=c(h))):(r=v,(u+=1)<o&&(v=-e[u],m=c(v)));l<n&&f<m||u>=o?(i=h,(l+=1)<n&&(h=t[l],f=c(h))):(i=v,(u+=1)<o&&(v=-e[u],m=c(v)));var p,d,g=i+r,y=g-i,b=r-y,k=b,M=g;for(;l<n&&u<o;)f<m?(i=h,(l+=1)<n&&(h=t[l],f=c(h))):(i=v,(u+=1)<o&&(v=-e[u],m=c(v))),(b=(r=k)-(y=(g=i+r)-i))&&(s[a++]=b),k=M-((p=M+g)-(d=p-M))+(g-d),M=p;for(;l<n;)(b=(r=k)-(y=(g=(i=h)+r)-i))&&(s[a++]=b),k=M-((p=M+g)-(d=p-M))+(g-d),M=p,(l+=1)<n&&(h=t[l]);for(;u<o;)(b=(r=k)-(y=(g=(i=v)+r)-i))&&(s[a++]=b),k=M-((p=M+g)-(d=p-M))+(g-d),M=p,(u+=1)<o&&(v=-e[u]);k&&(s[a++]=k);M&&(s[a++]=M);a||(s[a++]=0);return s.length=a,s}},function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"lon2tile",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=(t+180)/360*Math.pow(2,e);return n?Math.floor(o):o}},{key:"lat2tile",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=(1-Math.log(Math.tan(t*Math.PI/180)+1/Math.cos(t*Math.PI/180))/Math.PI)/2*Math.pow(2,e);return n?Math.floor(o):o}},{key:"tile2lon",value:function(t,e){return t/Math.pow(2,e)*360-180}},{key:"tile2lat",value:function(t,e){var n=Math.PI-2*Math.PI*t/Math.pow(2,e);return 180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))}},{key:"tile2boundingBox",value:function(e,n,o){return{ne:[t.tile2lat(n,o),t.tile2lon(e+1,o)],sw:[t.tile2lat(n+1,o),t.tile2lon(e,o)]}}},{key:"pixelToLatLon",value:function(e,n,o,i){var r=[e[0]/i,e[1]/i],s=t.lon2tile(n[1],o,!1)-r[0],a=t.lat2tile(n[0],o,!1)-r[1];return[t.tile2lat(a,o),t.tile2lon(s,o)]}},{key:"latLonToPixel",value:function(e,n,o,i){var r=t.lon2tile(e[1],o,!1),s=t.lat2tile(e[0],o,!1),a=0,l=0;return n&&(a=t.lon2tile(n[1],o,!1),l=t.lat2tile(n[0],o,!1)),[-(r-a)*i,-(s-l)*i]}}],(n=null)&&o(e.prototype,n),i&&o(e,i),t}();function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var s=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._x=e,this._y=n,this._zoom=o}var e,n,o;return e=t,(n=[{key:"isValid",value:function(){var t=1<<this.zoom;return!(this.x>=t||this.x<0||this.y>=t||this.y<0)}},{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"zoom",get:function(){return this._zoom}},{key:"id",get:function(){return[this.x,this.y,this.zoom].join("|")}}])&&r(e.prototype,n),o&&r(e,o),t}();function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.map=e,this.tilesZoomLevel=n,this.shouldBeDeleted=!1,this.context=e.context,this.state={grid:[],gridHash:null,relativeTileOffset:[0,0]}}var e,n,o;return e=t,(n=[{key:"toJSON",value:function(){return[this.state,this.loadedPercentage()]}},{key:"getTilesCount",value:function(t){var e=Math.ceil(t/this.map.options.tileSize)*this.map.options.tileAreaMultiplier;return e%2==0&&e++,e}},{key:"calculateGrid",value:function(){var t=this.map,e=t.state,n=t.options,o=i.lat2tile(n.center[0],Math.round(this.tilesZoomLevel||n.zoom),!1),r=i.lon2tile(n.center[1],Math.round(this.tilesZoomLevel||n.zoom),!1),a=[o,r].join(",");if(this.state.gridHash!==a){var l=this.getTilesCount(e.canvasDimensions[0]),u=this.getTilesCount(e.canvasDimensions[1]),c=Math.floor(o),h=Math.floor(r);this.state.relativeTileOffset=[Math.abs(r-h),Math.abs(o-c)];for(var f=h-Math.floor(l/2),v=c-Math.floor(u/2),m=[],p=0;p<u;p++)for(var d=0;d<l;d++){m[d]||(m[d]=[]);var g=new s(f+d,v+p,Math.round(this.tilesZoomLevel||n.zoom));g.isValid()&&(this.ensureTileAsset(g),m[d][p]=g)}this.state.grid=m,this.state.gridHash=a}}},{key:"ensureTileAsset",value:function(t){var e=this;if(!(t.id in this.map.state.tiles)){var n=this.map.options.source(Math.floor(t.x),Math.floor(t.y),t.zoom);this.map.state.tiles[t.id]=new Image,this.map.state.tiles[t.id].tileId=t.id,this.map.state.tiles[t.id].src=n,this.map.state.tiles[t.id].loaded=!1,this.map.state.tiles[t.id].onload=function(){e.map.state.tiles[t.id].loaded=!0}}this.map.state.tiles[t.id].lastRequested=(new Date).getTime()}},{key:"drawTiles",value:function(t){var e=this.map.state.canvasDimensions[0],n=this.map.state.canvasDimensions[1],o=this.map.options.tileSize*t,i=[o/2-this.state.relativeTileOffset[0]*o,o/2-this.state.relativeTileOffset[1]*o];this.context.fillStyle="#EEE",this.context.fillRect(0,0,e,n);for(var r=this.getTilesCount(e),s=this.getTilesCount(n),a=r*o-e,l=s*o-n,u=0;u<s;u++)for(var c=0;c<r;c++){var h=this.state.grid[c][u];if(h){var f=this.map.state.moveOffset[0]+i[0]+(c*o-a/2),v=this.map.state.moveOffset[1]+i[1]+(u*o-l/2);try{this.map.state.tiles[h.id].loaded?this.context.drawImage(this.map.state.tiles[h.id],f,v,o,o):this.drawGenericBackground(f,v,o)}catch(t){this.drawGenericBackground(f,v,o)}this.map.options.debug&&(this.context.strokeStyle="green",this.context.strokeRect(f,v,o,o))}}this.map.options.debug&&(this.context.fillStyle="rgba(200, 0, 0, 0.7)",this.context.beginPath(),this.context.arc(e/2,n/2,5,0,2*Math.PI),this.context.fill())}},{key:"drawGenericBackground",value:function(t,e,n){var o=n/8;this.context.beginPath();for(var i=o;i<n;i+=o)for(var r=o;r<n;r+=o)this.context.moveTo(t,e+r),this.context.lineTo(t+n,e+r),this.context.moveTo(t+i,e),this.context.lineTo(t+i,e+n);this.context.strokeStyle="#DDD",this.context.stroke(),this.context.strokeStyle="#CCC",this.context.strokeRect(t,e,n,n)}},{key:"loadedPercentage",value:function(){for(var t=this.getTilesCount(this.map.state.canvasDimensions[0]),e=this.getTilesCount(this.map.state.canvasDimensions[1]),n=0,o=0,i=0;i<e;i++)for(var r=0;r<t;r++){var s=this.state.grid[r][i];s&&n++;var a=s&&this.map.state.tiles[s.id];a&&a.loaded&&o++}return o/n}}])&&a(e.prototype,n),o&&a(e,o),t}();function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(e,n,o,i,r,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._center=e,this._zoom=n,this._targetZoom=o,this._tileSize=i,this._canvasDimensions=r,this._moveOffset=s}var e,n,o;return e=t,(n=[{key:"center",get:function(){return this._center}},{key:"zoom",get:function(){return this._zoom}},{key:"targetZoom",get:function(){return this._targetZoom}},{key:"tileSize",get:function(){return this._tileSize}},{key:"canvasDimensions",get:function(){return this._canvasDimensions}},{key:"moveOffset",get:function(){return this._moveOffset}}])&&u(e.prototype,n),o&&u(e,o),t}(),h={source:function(t,e,n){return"https://maps.geocod.io/tiles/base/".concat(n,"/").concat(t,"/").concat(e,".png")},zoom:12,center:[38.841779,-77.088312],attribution:"© OpenStreetMap contributors",tileSize:256,panAccelerationMultiplier:2,maxPanAcceleration:3.5,throwTimingThresholdMs:100,throwVelocityThreshold:3e3,animationDurationMs:300,debounceIntervalMs:350,tileAreaMultiplier:2,debug:!1},f={color:"rgba(0, 0, 200, 0.7)",type:"marker"},v={enableStroke:!0,strokeStyle:"rgba(50, 25, 50, 1.0)",lineDash:[],lineWidth:.25,enableFill:!0,fillStyle:"rgba(0, 0, 0, 0.2)"},m={strokeStyle:"red",lineWidth:.5};function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e||!e.getContext)throw new Error("Could not get canvas context");this.canvas=e,this.context=this.canvas.getContext("2d"),this.options=Object.assign({},h,n),this.initializeState(),this.attachEvents(),this.lastDrawState=null,this.onMarkerClicked=null,this.onMarkerHover=null,this.onPolygonHover=null,this.draw=this.draw.bind(this),window.requestAnimationFrame(this.draw)}var e,n,o;return e=t,(n=[{key:"initializeState",value:function(){this.state={canvasDimensions:[this.canvas.width,this.canvas.height],tiles:{},moveOffset:[0,0],targetMoveOffset:[0,0],targetMoveOffsetIsCoord:!1,moveAnimationStart:null,dragStartPosition:null,lastZoomEventActionTime:null,startZoom:this.options.zoom,targetZoom:this.options.zoom,zoomAnimationStart:null,scale:1,lastMouseMoveEvent:null,mouseVelocities:[],markers:[],polygons:[],tileLayers:[new l(this)],mousePosition:{x:0,y:0}}}},{key:"getZoom",value:function(){return this.options.zoom}},{key:"setZoom",value:function(t){this.zoomValueIsValid(t)&&this.isReadyForZoomEvent()&&(t=Math.round(t),this.state.tileLayers.push(new l(this,t)),this.state.lastZoomEventActionTime=window.performance.now(),this.state.zoomAnimationStart=window.performance.now(),this.state.targetZoom=t,this.state.startZoom=this.options.zoom)}},{key:"setCenter",value:function(t){if(!Array.isArray(t)||2!==t.length)throw new Error("Please provide a valid array with a lat/lon");t=t.map(function(t){return parseFloat(t)}),this.state.moveAnimationStart=window.performance.now(),this.state.targetMoveOffset=t,this.state.targetMoveOffsetIsCoord=!0}},{key:"setTargetMoveOffset",value:function(t,e){!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?(this.state.moveAnimationStart=window.performance.now(),this.state.targetMoveOffset=i.pixelToLatLon([t,e],this.options.center,this.options.zoom,this.options.tileSize),this.state.targetMoveOffsetIsCoord=!0):(this.state.targetMoveOffset=[t,e],this.state.targetMoveOffsetIsCoord=!1,this.state.moveOffset=this.state.targetMoveOffset)}},{key:"zoomValueIsValid",value:function(t){return t>=1&&t<=18}},{key:"isReadyForZoomEvent",value:function(){return!this.state.lastZoomEventActionTime||window.performance.now()-this.state.lastZoomEventActionTime>this.options.debounceIntervalMs}},{key:"calculateVelocity",value:function(t,e,n,o){return(t-e)/(n-o)*1e3}},{key:"attachEvents",value:function(){var t=this;this.canvas.addEventListener("wheel",function(e){e.preventDefault(),e.deltaY>5?t.setZoom(t.options.zoom-1):e.deltaY<-5&&t.setZoom(t.options.zoom+1)}),this.canvas.addEventListener("dblclick",function(e){e.preventDefault();var n=t.getCanvasCenter();t.setTargetMoveOffset(-(e.clientX-n[0]),-(e.clientY-n[1])),t.setZoom(t.options.zoom+1)}),this.canvas.addEventListener("mousedown",function(e){e.preventDefault(),t.handleMouseEventInteraction(e,"mousedown")||(t.state.mouseVelocities=[],t.state.dragStartPosition=[e.clientX-t.state.moveOffset[0],e.clientY-t.state.moveOffset[1]])}),this.canvas.addEventListener("mouseup",function(e){if(e.preventDefault(),t.state.dragStartPosition){var n=-(t.state.dragStartPosition[0]-e.clientX),o=-(t.state.dragStartPosition[1]-e.clientY);if(0!==t.state.moveOffset[0]||0!==t.state.moveOffset[1]){var i=window.performance.now()-t.options.throwTimingThresholdMs,r=t.state.mouseVelocities.filter(function(t){return t[0]>i}).map(function(t){return t[1]}),s=r.reduce(function(t,e){return t+e},0)/r.length;if(s>=t.options.throwVelocityThreshold){var a=s/t.options.throwVelocityThreshold*t.options.panAccelerationMultiplier;a=Math.min(a,t.options.maxPanAcceleration),t.setTargetMoveOffset(n*a,o*a)}else t.updateCenter()}t.state.dragStartPosition=null}else t.handleMouseEventInteraction(e,"mouseup")}),this.canvas.addEventListener("mousemove",function(e){if(e.preventDefault(),t.state.dragStartPosition){var n=-(t.state.dragStartPosition[0]-e.clientX),o=-(t.state.dragStartPosition[1]-e.clientY),i=window.performance.now(),r=t.calculateVelocity(t.state.moveOffset[0],n,i,t.state.lastMouseMoveEvent),s=t.calculateVelocity(t.state.moveOffset[1],o,i,t.state.lastMouseMoveEvent),a=Math.round(Math.sqrt(r*r+s*s));t.state.mouseVelocities.push([i,a]),t.setTargetMoveOffset(n,o,!1),t.state.lastMouseMoveEvent=window.performance.now()}else t.handleMouseEventInteraction(e,"mousemove");return!1})}},{key:"easeOutQuad",value:function(t){return t*(2-t)}},{key:"updateMoveOffset",value:function(){if(this.state.moveOffset!==this.state.targetMoveOffset){var t=window.performance.now(),e=Math.max(t-this.state.moveAnimationStart,0),n=this.easeOutQuad(e/this.options.animationDurationMs),o=this.state.targetMoveOffset;this.state.targetMoveOffsetIsCoord&&(o=i.latLonToPixel(this.state.targetMoveOffset,this.options.center,this.options.zoom,this.options.tileSize)),this.state.moveOffset=n>=.99?o:[this.state.moveOffset[0]+(o[0]-this.state.moveOffset[0])*n,this.state.moveOffset[1]+(o[1]-this.state.moveOffset[1])*n],this.state.moveOffset===o&&this.updateCenter()}}},{key:"updateCenter",value:function(){var t=i.pixelToLatLon(this.state.moveOffset,this.options.center,this.options.zoom,this.options.tileSize);this.setTargetMoveOffset(0,0,!1),this.options.center=t}},{key:"updateZoom",value:function(){if(this.options.zoom!==this.state.targetZoom){var t=Math.max(window.performance.now()-this.state.zoomAnimationStart,0),e=this.easeOutQuad(t/this.options.animationDurationMs),n=Math.abs(this.state.targetZoom-this.state.startZoom);this.state.targetZoom<=this.state.startZoom&&(n*=-1);var o=n*e,i=this.options.animationDurationMs-t;this.options.zoom=i<=5?this.state.targetZoom:this.state.startZoom+o;var r=Math.round(this.options.zoom),s=this.options.zoom-r;this.state.scale=Math.pow(2,s),this.options.zoom===this.state.targetZoom&&(this.state.tileLayers.shift(),this.state.tileLayers[0].tilesZoomLevel=null)}else this.state.scale=1}},{key:"garbageCollect",value:function(){var t=this,e=Object.values(this.state.tiles);if(e.length>this.maxTilesToKeep()){var n=(new Date).getTime()-5e3,o=e.filter(function(t){return t.lastRequested<n}).sort(function(t,e){return~~(t.lastRequested<e.lastRequested)}),i=this.maxTilesToKeep()-(e.length-o.length);o.splice(o.length-i).forEach(function(e){e.src="",delete t.state.tiles[e.tileId]})}}},{key:"maxTilesToKeep",value:function(){return 1e3}},{key:"shouldRedraw",value:function(){var t=JSON.stringify([this.state,this.options]);return this.lastDrawState!==t&&(this.lastDrawState=t,!0)}},{key:"draw",value:function(){this.updateMoveOffset(),this.updateZoom(),this.state.tileLayers.forEach(function(t){return t.calculateGrid()}),this.garbageCollect(),this.shouldRedraw()&&(this.state.tileLayers.length>0&&this.state.tileLayers[0].drawTiles(this.state.scale),this.renderPolygons(),this.renderMarkers(),this.renderControls(),this.renderAttribution()),window.requestAnimationFrame(this.draw)}},{key:"getMapBounds",value:function(){var t=this.getCanvasCenter();return{nw:i.pixelToLatLon([t[0],t[1]],this.options.center,this.options.zoom,this.options.tileSize),se:i.pixelToLatLon([-t[0],-t[1]],this.options.center,this.options.zoom,this.options.tileSize)}}},{key:"getVisibleMarkers",value:function(){var t=this.getMapBounds();return this.state.markers.filter(function(e){return e.coords[0]<=t.nw[0]&&e.coords[0]>=t.se[0]&&e.coords[1]>=t.nw[1]&&e.coords[1]<=t.se[1]})}},{key:"getCanvasCenter",value:function(){return[this.state.canvasDimensions[0]/2,this.state.canvasDimensions[1]/2]}},{key:"renderMarkers",value:function(){var t=this,e=this.getVisibleMarkers(),n=this.getCanvasCenter();e.map(function(e){var o=i.latLonToPixel(e.coords,t.options.center,t.options.zoom,t.options.tileSize);e.render(t.context,[n[0]-o[0]+t.state.moveOffset[0],n[1]-o[1]+t.state.moveOffset[1]])})}},{key:"renderPolygons",value:function(){var t=this,e=new c(this.options.center,this.options.zoom,this.state.targetZoom,this.options.tileSize,this.state.canvasDimensions,this.state.moveOffset);this.state.polygons.map(function(n){n.render(t.context,e),n.handleMouseOver(t.context,e,t.state.mousePosition)})}},{key:"handleMouseEventInteraction",value:function(t,e){var n=this;this.state.mousePosition={x:t.clientX,y:t.clientY};var o=this.getControlObjects().filter(function(t){return n.isMouseOverObject(t.bounds)}),i=o.length<=0&&(this.onMarkerClicked||this.onMarkerHover)?this.getMarkersBounds().filter(function(t){return n.isMouseOverObject(t.bounds)}):[];if("mouseup"===e){if(o.length>0){var r=o[0];this.setZoom("+"===r.label?this.options.zoom+1:this.options.zoom-1)}this.onMarkerClicked&&i.map(function(t){return n.onMarkerClicked(t.marker)})}else this.onMarkerHover&&i.map(function(t){return n.onMarkerHover(t.marker)});var s=o.length>0||i.length>0,a=[];if(!s){var l=new c(this.options.center,this.options.zoom,this.state.targetZoom,this.options.tileSize,this.state.canvasDimensions,this.state.moveOffset);a=this.state.polygons.map(function(t){return t.handleMouseOver(n.context,l,n.state.mousePosition)}).filter(function(t){return t.length>0})}return a.length>0&&(s=!0,this.onPolygonHover&&a.map(function(t){return t.map(function(t){return n.onPolygonHover(t)})})),this.canvas.style.cursor=s?"pointer":"grab",s}},{key:"getControlObjects",value:function(){return[{bounds:{x:4,y:4,width:30,height:30},label:"+"},{bounds:{x:4,y:38,width:30,height:30},label:"-"}]}},{key:"getMarkersBounds",value:function(){var t=this,e=this.getVisibleMarkers(),n=this.getCanvasCenter();return e.map(function(e){var o=i.latLonToPixel(e.coords,t.options.center,t.options.zoom,t.options.tileSize),r=e.size,s=e.offset;return{bounds:{x:n[0]-o[0]+t.state.moveOffset[0]-r[0]/2+s[0],y:n[1]-o[1]+t.state.moveOffset[1]-r[1]/2+s[1],width:r[0],height:r[1]},marker:e}})}},{key:"renderControls",value:function(){var t=this;this.getControlObjects().map(function(e){return t.renderControl(e.bounds,e.label)})}},{key:"renderControl",value:function(t,e){this.context.fillStyle=this.isMouseOverObject(t)?"rgba(100, 100, 100, 0.7)":"rgba(0, 0, 0, 0.7)",this.roundedRectangle(t.x,t.y,t.width,t.height,10),this.context.font="bold 25px courier",this.context.textAlign="center",this.context.textBaseline="middle",this.context.fillStyle="rgba(255, 255, 255)",this.context.fillText(e,t.x+t.width/2,t.y+t.height/2)}},{key:"isMouseOverObject",value:function(t){return this.state.mousePosition.x>=t.x&&this.state.mousePosition.x<=t.x+t.width&&this.state.mousePosition.y>=t.y&&this.state.mousePosition.y<=t.y+t.height}},{key:"renderAttribution",value:function(){this.context.font="bold 12px sans-serif",this.context.textAlign="left",this.context.textBaseline="alphabetic";var t=this.context.measureText(this.options.attribution),e=this.state.canvasDimensions[0]-t.width-4,n=this.state.canvasDimensions[1]-2-4;this.context.fillStyle="rgba(255, 255, 255, 0.7)",this.roundedRectangle(e-4,n-15,t.width+80,80),this.context.fillStyle="rgba(0, 0, 0, 0.7)",this.context.fillText(this.options.attribution,e,n)}},{key:"roundedRectangle",value:function(t,e,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5;this.context.beginPath(),this.context.moveTo(t+i,e),this.context.lineTo(t+n-i,e),this.context.quadraticCurveTo(t+n,e,t+n,e+i),this.context.lineTo(t+n,e+o-i),this.context.quadraticCurveTo(t+n,e+o,t+n-i,e+o),this.context.lineTo(t+i,e+o),this.context.quadraticCurveTo(t,e+o,t,e+o-i),this.context.lineTo(t,e+i),this.context.quadraticCurveTo(t,e,t+i,e),this.context.closePath(),this.context.fill()}},{key:"addMarker",value:function(t){this.state.markers.push(t)}},{key:"addMarkers",value:function(t){var e=this;t.map(function(t){return e.addMarker(t)})}},{key:"setMarkers",value:function(t){this.state.markers=t}},{key:"addPolygon",value:function(t){this.state.polygons.push(t)}},{key:"setPolygons",value:function(t){this.state.polygons=t}}])&&p(e.prototype,n),o&&p(e,o),t}();function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._coords=e,this._options=Object.assign({},f,n)}var e,n,o;return e=t,(n=[{key:"render",value:function(t,e){var n=null;switch(this.options.type){case"marker":n=this.renderMarker;break;case"circle":n=this.renderCircle;break;case"donut":n=this.renderDonut;break;case"image":n=this.renderImage}if(!n)throw new Error('Unsupported marker type: "'.concat(this.options.type,'"'));t.fillStyle=this.options.color,t.strokeStyle=this.options.color,(n=n.bind(this))(t,e)}},{key:"renderCircle",value:function(t,e){t.save(),t.beginPath(),t.arc(e[0],e[1],this.size[0]/2,0,2*Math.PI),t.fill(),t.restore()}},{key:"renderDonut",value:function(t,e){t.save(),t.beginPath(),t.lineWidth=5,t.arc(e[0],e[1],this.size[0]/2,0,2*Math.PI),t.stroke(),t.restore()}},{key:"renderMarker",value:function(t,e){var n=this.size,o=e[0]-n[0]/2,i=e[1]-n[1];t.save(),t.transform(.184386,0,0,.184386,.551658+o,4.09576+i),t.beginPath(),t.lineWidth=1.667195,t.moveTo(45,-22.212949),t.bezierCurveTo(18.494941,-22.212949,-2.991863,-.726145,-2.991863,25.778914),t.bezierCurveTo(-2.991863,52.282306,45,112.21295,45,112.21295),t.bezierCurveTo(45,112.21295,92.991863,52.282306,92.991863,25.777247),t.bezierCurveTo(92.991863,-.726145,71.505059,-22.212949,45,-22.212949),t.moveTo(45,43.827962),t.bezierCurveTo(33.553042,43.827962,24.273437,34.550024,24.273437,23.103067),t.bezierCurveTo(24.273437,11.656109,33.553042,2.376504,45,2.376504),t.bezierCurveTo(56.446958,2.376504,65.726563,11.654442,65.726563,23.101399),t.bezierCurveTo(65.726563,34.548357,56.446958,43.827962,45,43.827962),t.fill(),t.restore()}},{key:"renderImage",value:function(t,e){if(this.options.image){var n=this.size,o=e[0]-n[0]/2,i=e[1]-n[1]/2;t.drawImage(this.options.image,o,i,n[0],n[1])}}},{key:"coords",get:function(){return this._coords}},{key:"options",get:function(){return this._options}},{key:"size",get:function(){switch(this.options.type){case"marker":return[17.698069,24.786272];case"circle":return[10,10];case"donut":return[14,14];case"image":return this.options.image?[this.options.image.width,this.options.image.height]:null;default:return null}}},{key:"offset",get:function(){return"marker"===this.options.type?[0,-this.size[1]/2]:[0,0]}}])&&g(e.prototype,n),o&&g(e,o),t}(),b=function(t){return t},k=function(t){if(null==t)return b;var e,n,o=t.scale[0],i=t.scale[1],r=t.translate[0],s=t.translate[1];return function(t,a){a||(e=n=0);var l=2,u=t.length,c=new Array(u);for(c[0]=(e+=t[0])*o+r,c[1]=(n+=t[1])*i+s;l<u;)c[l]=t[l],++l;return c}},M=function(t,e){for(var n,o=t.length,i=o-e;i<--o;)n=t[i],t[i++]=t[o],t[o]=n},w=function(t,e){return"GeometryCollection"===e.type?{type:"FeatureCollection",features:e.geometries.map(function(e){return x(t,e)})}:x(t,e)};function x(t,e){var n=e.id,o=e.bbox,i=null==e.properties?{}:e.properties,r=O(t,e);return null==n&&null==o?{type:"Feature",properties:i,geometry:r}:null==o?{type:"Feature",id:n,properties:i,geometry:r}:{type:"Feature",id:n,bbox:o,properties:i,geometry:r}}function O(t,e){var n=k(t.transform),o=t.arcs;function i(t,e){e.length&&e.pop();for(var i=o[t<0?~t:t],r=0,s=i.length;r<s;++r)e.push(n(i[r],r));t<0&&M(e,s)}function r(t){return n(t)}function s(t){for(var e=[],n=0,o=t.length;n<o;++n)i(t[n],e);return e.length<2&&e.push(e[0]),e}function a(t){for(var e=s(t);e.length<4;)e.push(e[0]);return e}function l(t){return t.map(a)}return function t(e){var n,o=e.type;switch(o){case"GeometryCollection":return{type:o,geometries:e.geometries.map(t)};case"Point":n=r(e.coordinates);break;case"MultiPoint":n=e.coordinates.map(r);break;case"LineString":n=s(e.arcs);break;case"MultiLineString":n=e.arcs.map(s);break;case"Polygon":n=l(e.arcs);break;case"MultiPolygon":n=e.arcs.map(l);break;default:return null}return{type:o,coordinates:n}}(e)}var z=n(1),T=n.n(z);function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var S=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=Object.assign({},v,o),this._hoverOptions=Object.assign({},v,m,i),this.geometry=w(e,e.objects[n])}var e,n,o;return e=t,(n=[{key:"handleMouseOver",value:function(t,e,n){var o=this,i=Math.round(e.zoom)!==e.zoom;if(!this.geometry||!this.projectedGeometry||i)return[];var r=[e.canvasDimensions[0]/2,e.canvasDimensions[1]/2],s=this.determineOriginZoom(e),a=this.calculateCenterOffset(e,s),l=[n.x-a[0]-r[0],n.y-a[1]-r[1]];return this.projectedGeometry.filter(function(n){var i=n.geometry.filter(function(t){return-1===T()(t,l)}).length>0;return i&&(t.beginPath(),n.geometry.map(function(e){e.map(function(e,n){e=[e[0]+a[0]+r[0],e[1]+a[1]+r[1]],0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1])})}),o.applyContextStyles(t,o.hoverOptions,e.zoom),o.options.enableStroke&&t.fill(),o.options.enableFill&&t.stroke()),i})}},{key:"calculateCenterOffset",value:function(t,e){return[-i.lon2tile(t.center[1],e,!1)*t.tileSize,-i.lat2tile(t.center[0],e,!1)*t.tileSize]}},{key:"render",value:function(t,e){var n=this;if(this.geometry){var o=this.determineOriginZoom(e),i=o?e.zoom-o:0,r=0!==i?Math.pow(2,i):1,s=this.renderedMapCenter!==e.center,a=0===i&&this.renderedZoomLevel!==e.zoom,l=s||a,u=null;l&&(this.renderedZoomLevel=e.zoom,this.renderedMapCenter=e.center,this.projectedGeometry=this.geometry.features.map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){C(t,e,n[e])})}return t}({},t,{geometry:n.projectGeometry(t.geometry,e)})}),u=this.calculateCenterOffset(e,o),this.calculatePolygonExtends(u));var c=[e.canvasDimensions[0]/2,e.canvasDimensions[1]/2],h=[c[0]+e.moveOffset[0]+this.polygonExtends.minX*r,c[1]+e.moveOffset[1]+this.polygonExtends.minY*r],f={left:Math.floor(-1*h[0]),right:Math.ceil(Math.abs(h[0])+e.canvasDimensions[0]),top:Math.floor(-1*h[1]),bottom:Math.ceil(Math.abs(h[1])+e.canvasDimensions[1])};l&&this.renderOffscreenCanvas(e,u,f);var v=[e.moveOffset[0]-c[0]*(r-1),e.moveOffset[1]-c[1]*(r-1)],m=this.polygonDimensions[0]*r,p=this.polygonDimensions[1]*r;t.drawImage(this.offscreenCanvas,v[0],v[1],m,p)}}},{key:"determineOriginZoom",value:function(t){var e=t.zoom;return t.targetZoom>t.zoom?e=Math.floor(t.zoom):t.targetZoom<t.zoom&&(e=Math.ceil(t.zoom)),e}},{key:"createOffscreenCanvas",value:function(t){return this.polygonDimensions=[t.right-t.left,t.bottom-t.top],this.offscreenCanvas=document.createElement("canvas"),this.offscreenCanvas.width=this.polygonDimensions[0],this.offscreenCanvas.height=this.polygonDimensions[1],this.offscreenCanvas.getContext("2d")}},{key:"calculatePolygonExtends",value:function(t){var e,n,o,i=null;this.mapGeometry(function(r){r=[r[0]+t[0],r[1]+t[1]],(!n||r[0]>n)&&(n=r[0]),(!e||r[0]<e)&&(e=r[0]),(!i||r[1]>i)&&(i=r[1]),(!o||r[1]<o)&&(o=r[1])}),this.polygonDimensions=[Math.ceil(n-e),Math.ceil(i-o)],this.polygonExtends={minX:e,maxX:n,minY:o,maxY:i}}},{key:"renderOffscreenCanvas",value:function(t,e,n){var o=this,i=this.createOffscreenCanvas(n);i.beginPath(),i.font="bold 8px helvetica",this.projectedGeometry.map(function(t){return t.geometry.map(function(t){t.filter(function(t){return(t=[t[0]-o.polygonExtends.minX+e[0],t[1]-o.polygonExtends.minY+e[1]])[0]>=n.left&&t[0]<=n.right&&t[1]>=n.top&&t[1]<=n.bottom}).length>0&&t.map(function(t,r){t=[t[0]-o.polygonExtends.minX+e[0]-n.left,t[1]-o.polygonExtends.minY+e[1]-n.top],0===r?i.moveTo(t[0],t[1]):i.lineTo(t[0],t[1])})})}),this.applyContextStyles(i,this.options,t.zoom),this.options.enableStroke&&i.fill(),this.options.enableFill&&i.stroke()}},{key:"applyContextStyles",value:function(t,e,n){t.fillStyle=e.fillStyle,t.strokeStyle=e.strokeStyle,t.lineWidth=e.lineWidth*n,t.setLineDash(e.lineDash),t.lineJoin="round"}},{key:"mapGeometry",value:function(t){return this.projectedGeometry.map(function(e){return e.geometry.map(function(e){return e.map(t)})})}},{key:"projectGeometry",value:function(t,e){var n=this;switch(t.type){case"Polygon":return[t.coordinates[0].map(function(t){return n.projectPoint(e,t[0],t[1])})];case"MultiPolygon":return t.coordinates.map(function(t){return t[0].map(function(t){return n.projectPoint(e,t[0],t[1])})})}return[]}},{key:"projectPoint",value:function(t,e,n){var o=i.latLonToPixel([n,e],null,t.zoom,t.tileSize);return[-o[0],-o[1]]}},{key:"options",get:function(){return this._options}},{key:"hoverOptions",get:function(){return this._hoverOptions}},{key:"geometry",get:function(){return window._geometry},set:function(t){window._geometry=t}},{key:"projectedGeometry",get:function(){return window._projectedGeometry},set:function(t){window._projectedGeometry=t}},{key:"projectedGeometryState",get:function(){return this._projectedGeometryState},set:function(t){this._projectedGeometryState=t}}])&&P(e.prototype,n),o&&P(e,o),t}();n.d(e,"Map",function(){return d}),n.d(e,"Marker",function(){return y}),n.d(e,"Polygon",function(){return S})}])});
//# sourceMappingURL=LightningMaps.min.js.map