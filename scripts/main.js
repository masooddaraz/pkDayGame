"use strict";window.g_aus=class{constructor(c,a){this.g_aut=c,this.g_auu=a,this.g_auv=!1,this.g_afz=()=>this.g_IM()}g_auw(){}g_aux(e,a,b,c){this.g_aut.g_auy(this.g_auu,e,a,!!b,c)}g_auz(e,a,b,c){return this.g_aut.g_auA(this.g_auu,e,a,!!b,c)}g_auB(d,a,b){this.g_aut.g_auC()?this.g_aux(d,a,b):this.g_aut.g_auD()._OnMessageFromDOM({type:"event",component:this.g_auu,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_auE(c,a){this.g_aut.g_auF(this.g_auu,c,a)}g_auG(d){for(const[a,b]of d)this.g_auE(a,b)}g_auH(){return this.g_aut}g_auI(){return this.g_auu}g_XA(){this.g_auv||(this.g_aut.g_auJ(this.g_afz),this.g_auv=!0)}g_Xo(){this.g_auv&&(this.g_aut.g_auK(this.g_afz),this.g_auv=!1)}g_IM(){}},"use strict",window.g_auL=class extends g_aus{constructor(c,a){super(c,a),this.g_auM=new Map,this.g_auN=!0,this.g_auE("create",b=>this.g_auO(b)),this.g_auE("destroy",b=>this.g_auP(b)),this.g_auE("set-visible",b=>this.g_auQ(b)),this.g_auE("update-position",b=>this.g_auR(b)),this.g_auE("update-state",b=>this.g_auS(b)),this.g_auE("focus",b=>this.g_auT(b)),this.g_auE("set-css-style",b=>this.g_auU(b))}g_auV(b){this.g_auN=!!b}g_auW(c,e){this.g_auE(c,b=>{const a=b.elementId,c=this.g_auM.get(a);return e(c,b)})}g_auO(d){const a=d.elementId,b=this.g_X_(a,d);this.g_auM.set(a,b),this.g_auN&&document.body.appendChild(b)}g_X_(){throw new Error("required override")}g_auX(){}g_auP(d){const a=d.elementId,b=this.g_auM.get(a);this.g_auX(b),this.g_auN&&b.parentElement.removeChild(b),this.g_auM.delete(a)}g_auY(d,a,b){b||(b={}),b.elementId=a,this.g_aux(d,b)}g_auZ(d,a,b){b||(b={}),b.elementId=a,this.g_auB(d,b)}g_auQ(c){if(this.g_auN){const a=this.g_auM.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_auR(d){if(this.g_auN){const a=this.g_auM.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_auS(c){const a=this.g_auM.get(c.elementId);this.g_au_(a,c)}g_au_(){throw new Error("required override")}g_auT(c){const a=this.g_auM.get(c.elementId);c.focus?a.focus():a.blur()}g_auU(c){const a=this.g_auM.get(c.elementId);a.style[c.prop]=c.val}g_au$(b){return this.g_auM.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_ava=class b{constructor(b){this.g_avb=b.g_avc,this.g_avd=null,this.g_aeB="",this.g_ave=b.g_avf,this.g_avg={},this.g_avh=null,this.g_avi=null,this.g_avj=[],this.g_avk=null,this.g_acB=null,this.g_agj=null,this.g_adi=-1,this.g_avl=()=>this.g_avm(),this.g_avn=[],this.g_aeG=b.g_avo,this.g_avp=!1,this.g_avq=null,("html5"===this.g_aeG||"playable-ad"===this.g_aeG)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_auF("runtime","cordova-fetch-local-file",b=>this.g_avr(b)),this.g_auF("runtime","create-job-worker",b=>this.g_avs(b)),"cordova"===this.g_aeG?document.addEventListener("deviceready",()=>this.g_Ws(b)):this.g_Ws(b)}g_eK(){this.g_avt(),this.g_avd&&(this.g_avd.onmessage=null,this.g_avd=null),this.g_avh&&(this.g_avh.terminate(),this.g_avh=null),this.g_avi&&(this.g_avi.g_eK(),this.g_avi=null),this.g_acB&&(this.g_acB.parentElement.removeChild(this.g_acB),this.g_acB=null)}g_avu(){return this.g_acB}g_fB(){return this.g_aeB}g_auC(){return this.g_avb}g_Ax(){return this.g_aeG}g_agB(){return"cordova"===this.g_aeG&&a}g_avv(){if(!this.g_agB())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_Ws(d){if("playable-ad"===this.g_aeG){this.g_avq=self.c3_base64files,await this.g_avw();for(let a=0,b=d.g_avx.length;a<b;++a){const b=d.g_avx[a].toLowerCase();this.g_avq.hasOwnProperty(b)&&(d.g_avx[a]=URL.createObjectURL(this.g_avq[b]))}}if(d.g_avy)this.g_aeB=d.g_avy;else{const c=location.origin;this.g_aeB=("null"===c?"file:///":c)+location.pathname;const a=this.g_aeB.lastIndexOf("/");-1!==a&&(this.g_aeB=this.g_aeB.substr(0,a+1))}if(d.g_avz)for(const[a,b]of Object.entries(d.g_avz))this.g_avg[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_avd=a.port1,this.g_avd.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_avA(b)),this.g_agj=new self.g_avB(this),await this.g_agj.g_$X(),this.g_avC(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_avD(),this.g_avb?await this.g_avE(d,a.port2):await this.g_avF(d,a.port2)}g_avG(b){return this.g_avg.hasOwnProperty(b)?this.g_avg[b]:"playable-ad"===this.g_aeG&&this.g_avq.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_avq[b.toLowerCase()]):b}async g_avH(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_agB()){const a=await this.g_An(this.g_ave+f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_avC(){if(this.g_avv()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_avI(d){return{baseUrl:this.g_aeB,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_adM(),projectData:d.g_avJ,previewImageBlobs:window.cr_previewImageBlobs||this.g_avq,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_avo,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_avK,jobScheduler:this.g_agj.g_avL(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_ave+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_ave+"opus.wasm.wasm",isWKWebView:this.g_agB(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_avE(e,a){const b=this.g_avG(e.g_avM);this.g_avh=await this.g_avH(b,this.g_aeB,{name:"Runtime"}),this.g_acB=document.createElement("canvas"),this.g_acB.style.display="none";const c=this.g_acB.transferControlToOffscreen();document.body.appendChild(this.g_acB),this.g_avh.postMessage(Object.assign(this.g_avI(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_avN||[],engineScripts:e.g_avx}),[a,c,...this.g_agj.g_avO()]),this.g_avj=h.map(b=>new b(this)),this.g_avP()}async g_avF(a,b){this.g_acB=document.createElement("canvas"),this.g_acB.style.display="none",document.body.appendChild(this.g_acB),this.g_avj=h.map(b=>new b(this)),this.g_avP();const c=a.g_avx.map(b=>new URL(b,this.g_aeB).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_avI(a),{isInWorker:!1,messagePort:b,canvas:this.g_acB});this.g_avi=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_avi,d)}async g_avs(){const b=await this.g_agj.g_avQ();return{outputPort:b,transferables:[b]}}g_auD(){if(this.g_avb)throw new Error("not available in worker mode");return this.g_avi}g_auy(f,a,b,c,d){this.g_avd.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_avp?void 0:d)}g_auA(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_avd.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_avp?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_avR(c);else if("result"===a)this.g_avS(c);else if("runtime-ready"===a)this.g_avT();else throw new Error(`unknown message '${a}'`)}g_avR(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_avU(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_avU(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_avU(c,!1,d.toString())}):this.g_avU(c,!0,f))}g_avU(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_avd.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_avS(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_auF(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_avV(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_avP(){for(const b of this.g_avj)if("runtime"===b.g_auI())return void(this.g_avk=b);throw new Error("cannot find runtime DOM handler")}g_avA(b){this.g_auy("debugger","message",b)}g_avT(){for(const b of this.g_avj)b.g_auw()}static g_adM(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_auJ(b){this.g_avn.push(b),this.g_avW()}g_auK(c){const a=this.g_avn.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_avn.splice(a,1),this.g_avn.length||this.g_avt()}g_avW(){-1===this.g_adi&&this.g_avn.length&&(this.g_adi=requestAnimationFrame(this.g_avl))}g_avt(){-1!==this.g_adi&&(cancelAnimationFrame(this.g_adi),this.g_adi=-1)}g_avm(){this.g_adi=-1;for(const b of this.g_avn)b();this.g_avW()}g_avX(b){this.g_avk.g_avX(b)}g_avY(b){this.g_avk.g_avY(b)}g_avZ(){this.g_avk.g_avZ()}g_av_(b){this.g_avk.g_av_(b)}g_AP(b){return!!c[b]}async g_agm(c){const a=await this.g_auA("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_gm(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gn(b){return!this.g_gm(b)}async g_avr(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ar(a);case"blob":return await this.g_An(a);case"blob-url":return await this.g_av$(a);case"buffer":return await this.g_At(a);default:throw new Error("unsupported type");}}g_awa(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ar(b){const a=await this.g_awa(b);return await q(a)}g_awb(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_awc(b.filename,b.g_awd,b.g_awe)}}g_At(f){return new Promise((g,b)=>{d.push({filename:f,g_awd:b=>{e--,this.g_awb(),g(b)},g_awe:c=>{e--,this.g_awb(),b(c)}}),this.g_awb()})}async g_awc(c,a,b){try{const b=await this.g_awa(c),d=await r(b);a(d)}catch(c){b(c)}}async g_An(d,a){a||(a=s(d));const e=await this.g_At(d);return new Blob([e],{type:a})}async g_av$(c){const a=await this.g_An(c);return URL.createObjectURL(a)}async g_avw(){const d=[];for(const[a,b]of Object.entries(this.g_avq))d.push(this.g_awf(a,b));await Promise.all(d)}async g_awf(e,a){if("object"==typeof a)this.g_avq[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_avq[e]=c}}g_avD(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_avp=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_aus{constructor(c){super(c,"runtime"),this.g_awg=!0,this.g_awh="any",this.g_awi=null,c.g_auF("canvas","update-size",b=>this.g_awj(b)),c.g_auF("runtime","invoke-download",b=>this.g_awk(b)),c.g_auF("runtime","raster-svg-image",b=>this.g_awl(b)),c.g_auF("runtime","set-target-orientation",b=>this.g_awm(b)),c.g_auF("runtime","register-sw",()=>this.g_awn()),c.g_auF("runtime","post-to-debugger",b=>this.g_awo(b)),c.g_auF("runtime","before-start-ticking",()=>this.g_awp()),c.g_auF("runtime","debug-highlight",b=>this.g_awq(b));const a=c.g_avu();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_adz()),this.g_awr=new Set,this.g_aws=new WeakSet,this.g_awt=!1}g_awp(){return window.addEventListener("visibilitychange",()=>this.g_agl(document.hidden)),document.addEventListener("pause",()=>this.g_agl(!0)),document.addEventListener("resume",()=>this.g_agl(!1)),{isSuspended:!!(document.hidden||c)}}g_auw(){window.addEventListener("focus",()=>this.g_awu("window-focus")),window.addEventListener("blur",()=>this.g_awu("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_adA()),window.addEventListener("webkitfullscreenchange",()=>this.g_adA()),window.addEventListener("mozfullscreenchange",()=>this.g_adA()),window.addEventListener("fullscreenerror",b=>this.g_adB(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_adB(b)),window.addEventListener("mozfullscreenerror",b=>this.g_adB(b)),window.addEventListener("keydown",b=>this.g_awv("keydown",b)),window.addEventListener("keyup",b=>this.g_awv("keyup",b)),window.addEventListener("mousemove",b=>this.g_aww("mousemove",b)),window.addEventListener("mousedown",b=>this.g_aww("mousedown",b)),window.addEventListener("mouseup",b=>this.g_aww("mouseup",b)),window.addEventListener("dblclick",b=>this.g_aww("dblclick",b)),window.addEventListener("wheel",b=>this.g_awx("wheel",b)),"undefined"==typeof g_awy?(window.addEventListener("touchstart",b=>this.g_awz("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_awz("pointermove",b)),window.addEventListener("touchend",b=>this.g_awz("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_awz("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_awA("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_awA("pointermove",b)),window.addEventListener("pointerup",b=>this.g_awA("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_awA("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_apS(b)),window.addEventListener("devicemotion",b=>this.g_apT(b));const c=()=>this.g_avZ();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_awu(c,a){this.g_aux(c,a||null,!0)}g_adz(){this.g_aux("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_awm(b){this.g_awh=b.targetOrientation}g_awB(){const c=this.g_awh;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_adA(){const b=g_ava.g_adM();b&&"any"!==this.g_awh&&this.g_awB(),this.g_aux("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_adB(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aux("fullscreenerror",{isFullscreen:g_ava.g_adM(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_agl(b){b?this.g_aut.g_avt():this.g_aut.g_avW(),this.g_aux("visibilitychange",{hidden:b})}g_awv(c,a){this.g_auB(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_aww(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_auB(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_awx(c,a){this.g_aux(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_awA(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_auB(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_awz(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_auB(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_apS(b){this.g_aux("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_apT(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_aux("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_awj(d){const a=this.g_auH(),b=a.g_avu();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_avC(),this.g_awg&&(b.style.display="",this.g_awg=!1)}g_awk(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_awl(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_avZ(){const c=[...this.g_awr];if(this.g_awr.clear(),!this.g_awt)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aws.has(d)||this.g_awr.add(d)})}}g_avX(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aws.delete(c);let a;try{a=c.play()}catch(a){return void this.g_awr.add(c)}a&&a.catch(()=>{this.g_aws.has(c)||this.g_awr.add(c)})}g_avY(b){this.g_awr.delete(b),this.g_aws.add(b)}g_av_(b){this.g_awt=!!b}g_awq(d){const a=d.show;if(!a)return void(this.g_awi&&(this.g_awi.style.display="none"));this.g_awi||(this.g_awi=document.createElement("div"),this.g_awi.id="inspectOutline",document.body.appendChild(this.g_awi));const b=this.g_awi;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_awn(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_awo(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_ava.g_avV(d)}{const c=document.currentScript.src;self.g_avB=class{constructor(a){this.g_awC=a,this.g_aeB=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fB(),this.g_air=Math.min(navigator.hardwareConcurrency||2,16),this.g_awD=null,this.g_awE=[],this.g_aip=null,this.g_awF=null}async g_$X(){if(this.g_awG)throw new Error("already initialised");this.g_awG=!0;const c=this.g_awC.g_avG("dispatchWorker.js");this.g_awD=await this.g_awC.g_avH(c,this.g_aeB,{name:"DispatchWorker"});const a=new MessageChannel;this.g_aip=a.port1,this.g_awD.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_awF=await this.g_avQ()}async g_avQ(){const f=this.g_awE.length,a=this.g_awC.g_avG("jobWorker.js"),b=await this.g_awC.g_avH(a,this.g_aeB,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_awD.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_awE.push(b),d.port1}g_avL(){return{inputPort:this.g_aip,outputPort:this.g_awF,maxNumWorkers:this.g_air}}g_avO(){return[this.g_aip,this.g_awF]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_ava({g_avc:!1,g_avM:"workerMain.js",g_avx:["scripts/c3runtime.js"],g_avf:"scripts/",g_avo:"html5"})}