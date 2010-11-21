(function(){var b=Object.prototype.hasOwnProperty;if(!Array.isArray)Array.isArray=function(c){return Object.prototype.toString.call(c)=="[object Array]"};if(!Object.keys){var k=true,u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];for(var q in{toString:null})k=false;Object.keys=function(c){if(typeof c!=="object"&&typeof c!=="function"||c===null)throw new TypeError("Object.keys called on a non-object");var e=[];for(var d in c)b.call(c,
d)&&e.push(d);if(k){c=0;for(d=dontEnumLength;c<d;c++){var a=u[c];b.call(o,a)&&e.push(a)}}return e}}if((!Object.create||!Object.defineProperties)&&window.jQuery&&jQuery.webshims){var i=jQuery.webshims;i.objectCreate=function(c,e){var d=function(){};d.prototype=c;d=new d;e&&i.defineProperties(d,e);return d};i.defineProperties=function(c,e){for(var d in e)b.call(e,d)&&i.defineProperty(c,d,e[d]);return c};i.defineProperty=function(c,e,d){if(typeof d!="object")return c;if(b.call(d,"value")){c[e]=d.value;
return c}if(Object.defineProperty)try{Object.defineProperty(c,e,d)}catch(a){}if(c.__defineGetter__){typeof d.get=="function"&&c.__defineGetter__(e,d.get);typeof d.set=="function"&&c.__defineSetter__(e,d.set)}return c}}if(isNaN(Date.parse("T00:00")))Date=function(c){var e=function(f,g,l,m,h,j,n){var p=arguments.length;if(this instanceof c){p=p===1&&String(f)===f?new c(e.parse(f)):p>=7?new c(f,g,l,m,h,j,n):p>=6?new c(f,g,l,m,h,j):p>=5?new c(f,g,l,m,h):p>=4?new c(f,g,l,m):p>=3?new c(f,g,l):p>=2?new c(f,
g):p>=1?new c(f):new c;p.constructor=e;return p}return c.apply(this,arguments)},d=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");for(var a in c)e[a]=c[a];e.now=c.now;e.UTC=c.UTC;e.prototype=c.prototype;e.prototype.constructor=e;e.parse=function(f){var g=d.exec(f);if(g){g.shift();for(var l=g[0]===undefined,m=0;m<10;m++)if(m!==7){g[m]=+(g[m]||(m<3?1:0));m===1&&g[m]--}if(l)return((g[3]*60+
g[4])*60+g[5])*1E3+g[6];l=(g[8]*60+g[9])*60*1E3;if(g[6]==="-")l=-l;return c.UTC.apply(this,g.slice(0,7))+l}return c.parse.apply(this,arguments)};return e}(Date);var r=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=function(c){var e=this;if(typeof e.apply!="function"||typeof e.call!="function")return new TypeError;var d=r.call(arguments),a=function(){if(this instanceof a){var f=Object.create(e.prototype);e.apply(f,d.concat(r.call(arguments)));return f}else return e.call.apply(e,
d.concat(r.call(arguments)))};a.bound=e;a.boundTo=c;a.boundArgs=d;a.length=typeof e=="function"?Math.max(e.length-d.length,0):0;return a}})();
jQuery.webshims.ready("es5",function(b,k,u,q,i){var r=b.support,c=function(h){h=b(h);return(h.data("inputUIReplace")||{visual:h}).visual},e={checkbox:1,radio:1},d=b([]),a=function(h){h=b(h);return e[h[0].type]&&h[0].name?b(q.getElementsByName(h[0].name)).not(h[0]):d};b.extend(b.expr.filters,{valid:function(h){return(b.attr(h,"validity")||{valid:true}).valid},invalid:function(h){return!b.expr.filters.valid(h)},willValidate:function(h){return b.attr(h,"willValidate")}});var f=b.attr,g={selectedIndex:1,
value:1,checked:1,disabled:1,readonly:1},l;b.attr=function(h,j,n){if(h.form&&g[j]&&n!==i&&b(h).hasClass("form-ui-invalid")){var p=f.apply(this,arguments);if(b.expr.filters.valid(h)){c(h).removeClass("form-ui-invalid");j=="checked"&&n&&a(h).removeClass("form-ui-invalid")}return p}return f.apply(this,arguments)};b(document).bind("focusout change refreshValidityStyle",function(h){if(!(l||!h.target||!h.target.form)){var j=b.attr(h.target,"html5element")||h.target;if(b.attr(j,"willValidate")){var n,p;
if(b.expr.filters.valid(h.target)){n="form-ui-valid";p="form-ui-invalid";e[h.target.type]&&h.target.checked&&a(j).removeClass(p)}else{n="form-ui-invalid";p="form-ui-valid";e[h.target.type]&&!h.target.checked&&a(j).removeClass(p)}c(j).addClass(n).removeClass(p);l=true;setTimeout(function(){l=false},9)}else c(j).removeClass("form-ui-invalid form-ui-valid")}});k.triggerInlineForm=function(){var h=function(j){if(typeof j!="string"||j.indexOf("-")!==-1||j.indexOf(".")!==-1||j.indexOf('"')!==-1)return"";
return"var "+j+' = this.form["'+j+'"];'};return function(j,n){var p=j["on"+n]||j.getAttribute("on"+n)||"",v;n=b.Event({type:n,target:j[0],currentTarget:j[0]});if(p&&typeof p=="string"&&j.form&&j.form.elements){var x="";v=0;for(var z=j.form.elements,s=z.length;v<s;v++){var t=z[v].name,w=z[v].id;if(t)x+=h(t);if(w&&w!==t)x+=h(w)}v=function(){eval(x+p)}.call(j,n)}b(j).trigger(n);return v}}();var m=function(){k.scrollRoot=b.browser.webkit||q.compatMode=="BackCompat"?b(q.body):b(q.documentElement)};m();
b(m);k.validityAlert=function(){var h=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",j={hideDelay:5E3,showFor:function(s,t,w){s=b(s);var y=c(s);z();j.clear();this.getMessage(s,t);this.position(y);this.show();if(this.hideDelay)p=setTimeout(v,this.hideDelay);w||this.setFocus(y,s[0])},setFocus:function(s,t){var w=b("input, select, textarea, .ui-slider-handle",s).filter(":visible:first");w[0]||(w=s);var y=k.scrollRoot.scrollTop(),A=w.offset().top,B;n.attr("for",k.getID(w));if(y>A){if((B=
t.id&&b("label[for="+t.id+"]",t.form).offset())&&B.top<A)A=B.top;k.scrollRoot.animate({scrollTop:A-5},{queue:false,duration:Math.max(Math.min(450,(y-A)*2),140)})}w.focus();k.scrollRoot.scrollTop(y);b(q).bind("focusout.validityalert",v)},getMessage:function(s,t){b("> span",n).text(t||s.attr("validationMessage"))},position:function(s){var t=s.offset();t.top+=s.outerHeight();n.css(t)},show:function(){n.css("display")==="none"?n.fadeIn():n.fadeTo(400,1)},hide:function(){j.clear();n.fadeOut()},clear:function(){clearTimeout(p);
b(q).unbind("focusout.validityalert");n.stop().removeAttr("for")},alert:b("<"+h+' class="validity-alert" role="alert"><span class="va-box" /></'+h+">").css({position:"absolute",display:"none"})},n=j.alert,p=false,v=b.proxy(j,"hide"),x=false,z=function(){if(!x){x=true;b(function(){n.appendTo("body")})}};return j}();(function(){var h,j=[],n;b(q).bind("invalid",function(p){var v=b(p.target).addClass("form-ui-invalid").removeClass("form-ui-valid");if(!h){h=b.Event("firstinvalid");v.trigger(h)}h&&h.isDefaultPrevented()&&
p.preventDefault();j.push(p.target);p.extraData="fix";clearTimeout(n);n=setTimeout(function(){var x={type:"lastinvalid",cancelable:false,invalidlist:b(j)};h=false;j=[];b(void 0).unbind("submit.preventInvalidSubmit");v.trigger(x,x)},9)})})();(function(){if(!(!r.validity||u.noHTMLExtFixes||r.fieldsetValidation)){var h=function(j){var n=(b.attr(j,"validity")||{valid:true}).valid;!n&&j.checkValidity()&&b(j).trigger("invalid");return n};k.addMethod("checkValidity",function(){if(this.elements||b.nodeName(this,
"fieldset")){var j=true;b(this.elements||"input, textarea, select",this).each(function(){h(this)||(j=false)});return j}else if(this.checkValidity)return h(this)})}})();k.createReadyEvent("form-core")},true);
jQuery.webshims.ready("form-core",function(b,k,u,q){var i=k.validityMessages;u=b.support;i.en=i.en||i["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};i["en-US"]=i["en-US"]||i.en;i[""]=i[""]||i["en-US"];i.de=i.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",
date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var r=i[""];b(q).bind("htmlExtLangChange",function(){k.activeLang(i,"form-message",function(c){r=c})});k.createValidationMessage=function(c,e){var d=r[e];if(d&&typeof d!=="string")d=d[(c.getAttribute("type")||"").toLowerCase()]||d.defaultMessage;d&&["value","min","max","title","maxlength","label"].forEach(function(a){if(d.indexOf("{%"+a)!==-1){var f=(a=="label"?b.trim(b("label[for="+
c.id+"]",c.form).text()).replace(/\*$|:$/,""):b.attr(c,a))||"";d=d.replace("{%"+a+"}",f);if("value"==a)d=d.replace("{%valueLen}",f.length)}});return d||""};q=k.overrideValidationMessages||k.implement.customValidationMessage?["customValidationMessage"]:[];u.validationMessage||q.push("validationMessage");b.each(q,function(c,e){k.attr(e,{elementNames:["input","select","textarea"],getter:function(d){var a="";if(!b.attr(d,"willValidate"))return a;var f=b.attr(d,"validity")||{valid:1};if(f.valid)return a;
if(f.customError||e==="validationMessage")if(a="validationMessage"in d?d.validationMessage:b.data(d,"customvalidationMessage"))return a;b.each(f,function(g,l){if(!(g=="valid"||!l))if(a=k.createValidationMessage(d,g))return false});return a||""}})})},true);
jQuery.webshims.ready("form-core",function(b,k,u){if(!b.support.validity){k.inputTypes=k.inputTypes||{};var q=k.inputTypes,i={radio:1,checkbox:1};k.addInputType=function(a,f){q[a]=f};var r={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},c={valueMissing:function(a,f,g){if(!a.attr("required"))return false;var l=false;if(!("type"in g))g.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
return l=g.nodeName=="select"?!f&&a[0].type=="select-one"&&a[0].size<2&&b("> option:first-child:not(:disabled)",a).attr("selected"):i[g.type]?!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!f},tooLong:function(a,f,g){if(f===""||g.nodeName=="select")return false;a=a.attr("maxlength");g=false;var l=f.length;if(l&&a>=0&&f.replace&&(typeof a=="number"||a&&a==a*1))g=l>a;return g},typeMismatch:function(a,f,g){if(f===""||g.nodeName=="select")return false;var l=false;if(!("type"in
g))g.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(q[g.type]&&q[g.type].mismatch)l=q[g.type].mismatch(f,a);return l},patternMismatch:function(a,f,g){if(f===""||g.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(f)}};k.addValidityRule=function(a,f){c[a]=f};k.addMethod("checkValidity",function(){var a,f=function(g){var l,m=b.attr(g,"validity");if(m)b.data(g,"cachedValidity",m);else return true;if(!m.valid){l=b.Event("invalid");
var h=b(g).trigger(l);if(!a&&!l.isDefaultPrevented()){k.validityAlert.showFor(h);a=true}}b.data(g,"cachedValidity",false);return m.valid};return function(){a=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var g=true,l=this.elements||b("input, textarea, select",this),m=0,h=l.length;m<h;m++)f(l[m])||(g=false);return g}else return this.form?f(this):true}}());k.addMethod("setCustomValidity",function(a){b.data(this,"customvalidationMessage",""+a)});b.event.special.invalid={add:function(){b.data(this,
"invalidEventShim")||b.event.special.invalid.setup.call(this)},setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var a=b(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(a){if(!(a.type!="submit"||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate")))if(!b(a.target).checkValidity()){!a.originalEvent&&
u.console&&console.log&&console.log("submit");a.stopImmediatePropagation();return false}}};k.attr("validity",{elementNames:["input","select","textarea"],getter:function(a){var f=b.data(a,"cachedValidity");if(f)return f;f=b.extend({},r);if(!b.attr(a,"willValidate"))return f;var g=b(a),l=g.val(),m={nodeName:a.nodeName.toLowerCase()};f.customError=!!b.data(a,"customvalidationMessage");if(f.customError)f.valid=false;b.each(c,function(h,j){if(j(g,l,m)){f[h]=true;f.valid=false}});return f}});k.createBooleanAttrs("required",
["input","textarea","select"]);k.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(f){return!!(f.name&&f.form&&!f.disabled&&!f.readOnly&&!a[f.type]&&b.attr(f.form,"novalidate")==null)}}()});k.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(f){return!a.test(f)}}()});k.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(f){return!a.test(f)}}()});var e=function(){var a=this;if(a.form){b.data(a.form,"novalidate",true);setTimeout(function(){b.data(a.form,"novalidate",false)},1)}},d={submit:1,button:1};b(document).bind("click",function(a){a.target&&a.target.form&&d[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&e.call(a.target)});k.addReady(function(a,f){var g=b("form",a).add(f.filter("form")).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",e).end();if(!document.activeElement||
!document.activeElement.form)b("input, select, textarea",g).filter("[autofocus]:first").focus()});k.createReadyEvent("form-extend")}},true);
(function(b){if(!b.support.placeholder){var k=function(c,e,d,a,f){if(!a){a=b.data(c,"placeHolder");if(!a)return}if(f=="focus"||!f&&c===document.activeElement)a.box.removeClass("placeholder-visible");else{if(e===false)e=b.attr(c,"value");if(e)a.box.removeClass("placeholder-visible");else{if(d===false)d=b.attr(c,"placeholder");a.box[d&&!e?"addClass":"removeClass"]("placeholder-visible")}}},u=function(c){c=b(c);var e=c.attr("id"),d=!!(c.attr("title")||c.attr("aria-labeledby"));if(!d&&e)d=!!b("label[for="+
e+"]",c[0].form)[0];return b(d?'<span class="placeholder-text"></span>':'<label for="'+(e||b.webshims.getID(c))+'" class="placeholder-text"></label>')},q=function(){var c=/\n|\r|\f|\t/g,e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(d){var a=b.data(d,"placeHolder");if(a)return a;a=b.data(d,"placeHolder",{text:u(d)});a.box=b(d).wrap('<span class="placeholder-box placeholder-box-'+(d.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",function(m){k(this,
false,false,a,m.type)}).parent();a.text.insertAfter(d).bind("mousedown.placeholder",function(){k(this,false,false,a,"focus");d.focus();return false});b.each(["Left","Top"],function(m,h){var j=(parseInt(b.curCSS(d,"padding"+h),10)||0)+Math.max(parseInt(b.curCSS(d,"margin"+h),10)||0,0)+(parseInt(b.curCSS(d,"border"+h+"Width"),10)||0);a.text.css("padding"+h,j)});var f=b.curCSS(d,"lineHeight"),g={width:b(d).width(),height:b(d).height()},l=b.curCSS(d,"float");a.text.css("lineHeight")!==f&&a.text.css("lineHeight",
f);g.width&&g.height&&a.text.css(g);l!=="none"&&a.box.addClass("placeholder-box-"+l);return a},update:function(d,a){if(e[b.attr(d,"type")]||b.nodeName(d,"textarea")){if(b.nodeName(d,"input"))a=a.replace(c,"");var f=q.create(d);d.setAttribute("placeholder",a);f.text.text(a);k(d,false,a,f)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(c,e){q.update(c,e)},getter:function(c){return c.getAttribute("placeholder")||""}});var i={elementNames:["input","textarea"],setter:function(c,
e,d){var a=c.getAttribute("placeholder");a&&"value"in c&&k(c,e,a);d()},getter:true};b.webshims.attr("value",i);var r=b.fn.val;b.fn.val=function(c){c!==undefined&&this.each(function(){this.nodeType===1&&i.setter(this,c,b.noop)});return r.apply(this,arguments)};b.webshims.addReady(function(c,e){b("input[placeholder], textarea[placeholder]",c).add(e.filter("input[placeholder], textarea[placeholder]")).attr("placeholder",function(d,a){return a})})}})(jQuery);
jQuery.webshims.ready("form-core",function(b,k){if(!("value"in document.createElement("output"))){var u=document;(function(){var i={input:1,textarea:1},r={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},c=function(e){var d,a=e.attr("value"),f=function(l){if(e){var m=e.attr("value");if(m!==a){a=m;if(!l||l.type!="input")k.triggerInlineForm(e[0],"input")}}},g=function(){e.unbind("focusout",g).unbind("input",f);clearInterval(d);f();e=null};clearInterval(d);d=setInterval(f,b.browser.mozilla?
250:111);setTimeout(f,9);e.bind("focusout",g).bind("input",f)};b(u).bind("focusin",function(e){if(e.target&&e.target.type&&!e.target.readonly&&!e.target.readOnly&&!e.target.disabled&&i[(e.target.nodeName||"").toLowerCase()]&&!r[e.target.type])c(b(e.target))})})();var q=function(i){if(!i.getAttribute("aria-live")){i=b(i);var r=(i.text()||"").trim(),c=i.attr("id"),e=i.attr("for"),d=b('<input class="output-shim" type="hidden" name="'+(i.attr("name")||"")+'" value="'+r+'" style="display: none" />').insertAfter(i),
a=d[0].form||u,f=function(g){d[0].value=g;g=d[0].value;i.text(g);i[0].value=g};i[0].defaultValue=r;i[0].value=r;i.attr({"aria-live":"polite"});if(c){d.attr("id",c);i.attr("aria-labeldby",k.getID(b("label[for="+c+"]",a)))}if(e){c=k.getID(i);e.split(" ").forEach(function(g){(g=a.getElementById(g))&&g.setAttribute("aria-controls",c)})}i.data("outputShim",f);d.data("outputShim",f);return f}};k.attr("value",{elementNames:["output","input"],getter:true,setter:function(i,r,c){var e=b.data(i,"outputShim");
if(!e)if(b.nodeName(i,"output"))e=q(i);else return c();e(r)}});k.addReady(function(i,r){b("output",i).add(r.filter("output")).each(function(){q(this)})});k.createReadyEvent("form-output")}},true);