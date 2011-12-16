jQuery.webshims.register("form-extend",function(a,d,h,j,q,m){var i=h.Modernizr,h=i.inputtypes;if(i.formvalidation){var n=d.inputTypes,r={};d.addInputType=function(a,b){n[a]=b};d.addValidityRule=function(a,b){r[a]=b};d.addValidityRule("typeMismatch",function(a,b,c,d){if(""===b)return!1;d=d.typeMismatch;if(!("type"in c))c.type=(a[0].getAttribute("type")||"").toLowerCase();n[c.type]&&n[c.type].mismatch&&(d=n[c.type].mismatch(b,a));return d});var o=m.overrideMessages,s=!i.requiredSelect||!h.number||!h.time||
!h.range||o,c="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),m=o?["value","checked"]:["value"],f=o?["textarea"]:[],e=function(b,c){if(b){var d=(b.getAttribute&&b.getAttribute("type")||b.type||"").toLowerCase();if(o||!(i.requiredSelect||"select-one"!=d)||n[d])o&&!c&&"radio"==d&&b.name?a(j.getElementsByName(b.name)).each(function(){a.prop(this,"validity")}):a.prop(b,"validity")}},g={};["input","textarea","select"].forEach(function(b){var c=
d.defineNodeNameProperty(b,"setCustomValidity",{prop:{value:function(p){var p=p+"",f="input"==b?a(this).getNativeElement()[0]:this;c.prop._supvalue.call(f,p);d.bugs.validationMessage&&d.data(f,"customvalidationMessage",p);s&&(d.data(f,"hasCustomError",!!p),e(f))}}});g[b]=c.prop._supvalue});if(s||!i.input.valueAsNumber||o)m.push("min"),m.push("max"),m.push("step"),f.push("input");if(!i.requiredSelect||o)m.push("required"),f.push("select");if(s){var b;f.forEach(function(p){var f=d.defineNodeNameProperty(p,
"validity",{prop:{get:function(){if(!b){var e="input"==p?a(this).getNativeElement()[0]:this,l=f.prop._supget.call(e);if(!l)return l;var k={};c.forEach(function(a){k[a]=l[a]});if(!a.prop(e,"willValidate"))return k;b=!0;var i=a(e),h={type:(e.getAttribute&&e.getAttribute("type")||"").toLowerCase(),nodeName:(e.nodeName||"").toLowerCase()},j=i.val(),s=!!d.data(e,"hasCustomError"),m;b=!1;k.customError=s;if(k.valid&&k.customError)k.valid=!1;else if(!k.valid){var n=!0;a.each(k,function(a,b){if(b)return n=
!1});if(n)k.valid=!0}a.each(r,function(a,b){k[a]=b(i,j,h,k);if(k[a]&&(k.valid||!m))g[p].call(e,d.createValidationMessage(e,a)),k.valid=!1,m=!0});k.valid?(g[p].call(e,""),d.data(e,"hasCustomError",!1)):o&&!m&&!s&&a.each(k,function(a,b){if("valid"!==a&&b)return g[p].call(e,d.createValidationMessage(e,a)),!1});return k}},writeable:!1}})});m.forEach(function(a){d.onNodeNamesPropertyModify(f,a,function(){e(this)})});if(j.addEventListener){var l;j.addEventListener("change",function(a){clearTimeout(l);e(a.target)},
!0);j.addEventListener("input",function(a){clearTimeout(l);l=setTimeout(function(){e(a.target)},290)},!0)}var p=f.join(",");d.addReady(function(b,c){a(p,b).add(c.filter(p)).each(function(){a.prop(this,"validity")})});o&&d.ready("DOM form-message",function(){d.activeLang({register:"form-core",callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!d.data(this,"hasCustomError")){var b=this,c=a.prop(b,"validity")||{valid:!0},e;c.valid||(e=(b.nodeName||"").toLowerCase(),
a.each(c,function(a,c){if("valid"!==a&&c)return g[e].call(b,d.createValidationMessage(b,a)),!1}))}})}})})}}});jQuery.webshims.gcEval=function(a,d){with(d&&d.form||window)with(d||window)return function(a){eval(a)}.call(d||window,a)};
(function(a){var d=window.Modernizr,h=a.webshims;if(d.formvalidation){var j=a('<form action="#"><select /><input type="date" required name="a" /></form>'),q=a("input",j);d.validationmessage=!0;if(window.opera){j.appendTo("head");h.bugs.validationMessage=!q.prop("validationMessage");try{q.prop("valueAsNumber",0)}catch(m){}h.bugs.valueAsNumberSet="1970-01-01"!=q.prop("value");j.remove()}d.requiredSelect=!!("required"in a("select",j)[0]);if(!("bugfreeformvalidation"in d))d.bugfreeformvalidation=d.formvalidation&&
d.requiredSelect&&!h.bugs.valueAsNumberSet&&!h.bugs.validationMessage&&(!a.browser.webkit||-1!=navigator.userAgent.indexOf("hrome")&&534.19<h.browserVersion)&&!window.testGoodWithFix;if(!d.bugfreeformvalidation)h.addPolyfill("form-native-fix",{f:"forms",dependencies:["form-extend"]}),h.modules["form-extend"].test=a.noop;h.reTest(["form-extend","form-message","form-native-fix"]);h.isReady("form-number-date-api")&&h.reTest("form-number-date-api")}})(jQuery);
jQuery.webshims.register("form-core",function(a,d,h,j,q,m){var i={radio:1},n={checkbox:1,radio:1},r=a([]),o=function(b){var b=a(b),c=b[0].name;return i[b[0].type]&&c?a(b[0].form&&b[0].form[c]||j.getElementsByName(c)).not(b[0]):r},s=d.getContentValidationMessage=function(b,c){var e=b.getAttribute("x-moz-errormessage")||b.getAttribute("data-errormessage")||"";if(e&&-1!=e.indexOf("{")){try{e=jQuery.parseJSON(e)}catch(f){return e}"object"==typeof e&&(c=c||a.prop(b,"validity")||{valid:1},c.valid||a.each(c,
function(a,b){if(b&&"valid"!=a&&e[a])return e=e[a],!1}));d.data(b,"contentErrorMessage",e);if("object"==typeof e)e=e.defaultMessage}return e||""},c={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!c[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!c[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=
a.expr.filters[b+"-element"]});var f=a.prop,e={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,d){var g=f.apply(this,arguments);if(b&&"form"in b&&e[c]&&d!==q&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),"checked"==c&&d&&o(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return g};var g=function(b,c){var e;a.each(b,function(b,d){if(d)return e="customError"==b?a.prop(c,"validationMessage"):
b,!1});return e};a(j).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var c=a.data(b.target,"webshimsswitchvalidityclass");c&&clearTimeout(c);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var c=a(b.target).getNativeElement()[0],e=a.prop(c,"validity"),d=a(c).getShadowElement(),f,l,k,i;e.valid?d.hasClass("form-ui-valid")||(f="form-ui-valid",l="form-ui-invalid",i="changedvaliditystate",k="changedvalid",
n[c.type]&&c.checked&&o(c).removeClass(l).addClass(f).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(e=g(e,c),a.data(c,"webshimsinvalidcause")!=e&&(a.data(c,"webshimsinvalidcause",e),i="changedvaliditystate"),d.hasClass("form-ui-invalid")||(f="form-ui-invalid",l="form-ui-valid",n[c.type]&&!c.checked&&o(c).removeClass(l).addClass(f),k="changedinvalid"));f&&(d.addClass(f).removeClass(l),setTimeout(function(){a(c).trigger(k)},0));i&&setTimeout(function(){a(c).trigger(i)},0);a.removeData(b.target,
"webshimsswitchvalidityclass")},9))}});d.triggerInlineForm=function(b,c){b.jquery&&(b=b[0]);var e="on"+c,f=b[e]||b.getAttribute(e)||"",g,i,c=a.Event({type:c,target:b,currentTarget:b});f&&"string"==typeof f&&(i=d.gcEval(f,b),b[e]&&(g=!0,b[e]=!1));!1===i&&(c.stopPropagation(),c.preventDefault());a(b).trigger(c);g&&(b[e]=f);return i};h=function(){d.scrollRoot=a.browser.webkit||"BackCompat"==j.compatMode?a(j.body):a(j.documentElement)};h();d.ready("DOM",h);d.validityAlert=function(){var b=!a.browser.msie||
7<parseInt(a.browser.version,10)?"span":"label",c={top:0,left:0},e={hideDelay:5E3,getBodyOffset:function(){c=f.offset()},showFor:function(b,c,d,i){e._create();var b=a(b),l=a(b).getShadowElement(),h=e.getOffsetFromBody(l);e.clear();i?this.hide():(this.getMessage(b,c),this.position(l,h),f.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(g=setTimeout(r,this.hideDelay)));d||this.setFocus(l,h)},getOffsetFromBody:function(b){b=a(b).offset();a.swap(f[0],{visibility:"hidden",
display:"inline-block",left:0,top:0},e.getBodyOffset);b.top-=c.top;b.left-=c.left;return b},setFocus:function(c,e){var g=a(c).getShadowFocusElement(),i=d.scrollRoot.scrollTop(),l=(e||g.offset()).top-30,h;d.getID&&"label"==b&&f.attr("for",d.getID(g));i>l&&(d.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(i-l)),80)}),h=!0);try{g[0].focus()}catch(s){}h&&(d.scrollRoot.scrollTop(i),setTimeout(function(){d.scrollRoot.scrollTop(i)},0));setTimeout(function(){a(j).bind("focusout.validityalert",
r)},10)},getMessage:function(b,c){a("span.va-box",f).text(c||s(b[0])||b.prop("validationMessage"))},position:function(b,c){c=c?a.extend({},c):e.getOffsetFromBody(b);c.top+=b.outerHeight();f.css(c)},show:function(){"none"===f.css("display")&&f.css({opacity:0}).show();f.addClass("va-visible").fadeTo(400,1)},hide:function(){f.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(i);clearTimeout(g);a(j).unbind("focusout.validityalert");f.stop().removeAttr("for")},_create:function(){if(!f)f=
e.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),d.ready("DOM",function(){f.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&f.bgIframe()})}},f,g=!1,i=!1,r=a.proxy(e,"hide");return e}();(function(){var b,c=[],e;a(j).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var d=
a(f.target),g=d.getShadowElement();g.hasClass("form-ui-invalid")||(g.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(f.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=f.isDefaultPrevented,g=a.Event("firstinvalidsystem"),a(j).triggerHandler(g,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),d.trigger(b);b&&b.isDefaultPrevented()&&f.preventDefault();c.push(f.target);
f.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(f.target).trigger(e,e)},9);g=d=null}})})();m.replaceValidationUI&&d.ready("DOM",function(){a(j).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,d,h,j,q,m){var i=d.validityMessages,h=m.overrideMessages||m.customMessages?["customValidationMessage"]:[];i.en=i.en||i["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){i.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){i.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){i.en.rangeOverflow[a]=
"Value must be at or before {%max}."});i["en-US"]=i["en-US"]||i.en;i[""]=i[""]||i["en-US"];i.de=i.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){i.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){i.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){i.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var n=
i[""];d.createValidationMessage=function(d,i){var h=n[i];h&&"string"!==typeof h&&(h=h[a.prop(d,"type")]||h[(d.nodeName||"").toLowerCase()]||h.defaultMessage);h&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(-1!==h.indexOf("{%"+c)){var f=("label"==c?a.trim(a('label[for="'+d.id+'"]',d.form).text()).replace(/\*$|:$/,""):a.attr(d,c))||"";h=h.replace("{%"+c+"}",f);"value"==c&&(h=h.replace("{%valueLen}",f.length))}});return h||""};(d.bugs.validationMessage||!Modernizr.formvalidation)&&
h.push("validationMessage");d.activeLang({langObj:i,module:"form-core",callback:function(a){n=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var i=a("select",this);if(i[0]&&i[0].options&&i[0].options.length)d=i[0].options}return d}}});h.forEach(function(i){d.defineNodeNamesProperty(["fieldset","output","button"],
i,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(h){var j=d.defineNodeNameProperty(h,i,{prop:{get:function(){var c=this,f="";if(!a.prop(c,"willValidate"))return f;var e=a.prop(c,"validity")||{valid:1};if(e.valid||(f=d.getContentValidationMessage(c,e)))return f;if(e.customError&&c.nodeName&&(f=Modernizr.validationmessage&&j.prop._supget?j.prop._supget.call(c):d.data(c,"customvalidationMessage")))return f;a.each(e,function(a,b){if("valid"!=a&&b&&(f=d.createValidationMessage(c,
a)))return!1});return f||""},writeable:!1}})})});d.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return d.inputTypes[a]?a:this.type}}})});
jQuery.webshims.register("form-datalist",function(a,d,h,j,q){d.propTypes.element=function(h){d.createPropDefault(h,"attr");if(!h.prop)h.prop={get:function(){var d=h.attr.get.call(this);d&&(d=a("#"+d)[0])&&h.propNodeName&&!a.nodeName(d,h.propNodeName)&&(d=null);return d||null},writeable:!1}};(function(){if(!Modernizr.input.list){var m=0,i={submit:1,button:1,reset:1,hidden:1,range:1,date:1},n=a.browser.msie&&7>parseInt(a.browser.version,10),r={},o=function(a){if(!a)return[];if(r[a])return r[a];var f;
d.ready("json-storage",function(){try{f=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(e){}r[a]=f||[]});return f||[]},s={_create:function(c){if(!i[(c.input.getAttribute("type")||"").toLowerCase()||c.input.type]){var d=c.datalist,e=a.data(c.input,"datalistWidget");if(d&&e&&e.datalist!==d)e.datalist=d,e.id=c.id,e._resetListCached();else if(d){if(!(e&&e.datalist===d)){m++;var g=this;this.timedHide=function(){clearTimeout(g.hideTimer);g.hideTimer=setTimeout(a.proxy(g,"hideList"),9)};
this.datalist=d;this.id=c.id;this.hasViewableData=!0;this._autocomplete=a.attr(c.input,"autocomplete");a.data(c.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=c.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseover.datalistWidget mousedown.datalistWidget click.datalistWidget",function(b){var c=a("li:not(.hidden-item)",g.shadowList),e="mousedown"==b.type||"click"==b.type;g.markItem(c.index(b.target),e,c);"click"==
b.type&&g.hideList();return"mousedown"!=b.type}).bind("focusout",this.timedHide);c.input.setAttribute("autocomplete","off");a(c.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",a.proxy(this,"showHideOptions")).bind("keydown.datalistWidget",function(b){var c=b.keyCode;if(40==c&&!g.showList())return g.markItem(g.index+1,!0),!1;if(g.isListVisible){if(38==c)return g.markItem(g.index-1,!0),!1;if(!b.shiftKey&&(33==c||36==c))return g.markItem(0,!0),!1;if(!b.shiftKey&&(34==c||35==c))return b=
a("li:not(.hidden-item)",g.shadowList),g.markItem(b.length-1,!0,b),!1;if(13==c||27==c)return 13==c&&(b=a("li.active-item:not(.hidden-item)",g.shadowList),b[0]&&(a.prop(g.input,"value",b.attr("data-value")),a(g.input).triggerHandler("updateInput"))),g.hideList(),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&g.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,
"_resetListCached"));this._resetListCached();c.input.form&&c.input.id&&a(c.input.form).bind("submit.datalistWidget"+c.input.id,function(){var b=a.prop(c.input,"value");g.storedOptions=o(c.input.name||c.input.id);if(b&&-1==g.storedOptions.indexOf(b)){g.storedOptions.push(b);var b=c.input.name||c.input.id,e=g.storedOptions;if(b){e=e||[];try{localStorage.setItem("storedDatalistOptions"+b,JSON.stringify(e))}catch(d){}}}});a(h).bind("unload",function(){g.destroy()})}}else e&&e.destroy()}},destroy:function(){var c=
a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(j).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");c===q?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",c)},_resetListCached:function(a){var d=this;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";if(!this.updateTimer)this.updateTimer=
setTimeout(function(){d.updateListOptions(a&&j.activeElement==d.input);d=null},0)},updateListOptions:function(c){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});for(var d=[],e=[],g=[],b,i=a("option",this.datalist),h=0,j=a("option",this.datalist).length;h<j;h++){b=i[h];if(b.disabled)return;b={value:a(b).val()||"",text:a.trim(a.attr(b,"label")||b.textContent||b.innerText||
a.text([b])||""),className:b.className||"",style:a.attr(b,"style")||""};if(!b.text)b.text=b.value;e[h]=b.value;g[h]=b}this.storedOptions=o(this.input.name||this.input.id);this.storedOptions.forEach(function(a){-1==e.indexOf(a)&&g.push({value:a,text:a,className:"",style:""})});g.forEach(function(a,b){var c=-1!=a.value.indexOf('"')?"'"+a.value+"'":'"'+a.value+'"';d[b]="<li data-value="+c+' class="'+a.className+'" style="'+a.style+'" tabindex="-1" role="listitem">'+a.text+"</li>"});this.arrayOptions=
g;this.shadowList.html('<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+d.join("\n")+"</ul>");a.fn.bgIframe&&n&&this.shadowList.bgIframe();(c||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(){var c=a.prop(this.input,"value").toLowerCase();if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=c;var d=!1,e=a("li",this.shadowList);c?this.arrayOptions.forEach(function(g,b){if(!("lowerText"in
g))g.lowerText=g.text.toLowerCase(),g.lowerValue=g.value.toLowerCase();-1!==g.lowerText.indexOf(c)||-1!==g.lowerValue.indexOf(c)?(a(e[b]).removeClass("hidden-item"),d=!0):a(e[b]).addClass("hidden-item")}):(e.removeClass("hidden-item"),d=!0);(this.hasViewableData=d)?this.showList():(this.lastUnfoundValue=c,this.hideList())}},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return!1;var c=this,d=a(this.input).offset();
d.top+=a(this.input).outerHeight();d.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);n&&(this.shadowList.css("height","auto"),250<this.shadowList.height()&&this.shadowList.css("height",220));this.shadowList.css(d).addClass("datalist-visible");this.isListVisible=!0;a(j).bind("mousedown.datalist"+this.id+" focusin.datalist"+this.id,function(d){d.target===c.input||c.shadowList[0]===d.target||a.contains(c.shadowList[0],
d.target)?(clearTimeout(c.hideTimer),setTimeout(function(){clearTimeout(c.hideTimer)},0)):c.timedHide()});return!0},hideList:function(){if(!this.isListVisible)return!1;this.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");this.index=-1;this.isListVisible=!1;a(this.input).removeAttr("aria-activedescendant");a(j).unbind(".datalist"+this.id);return!0},scrollIntoView:function(c){var d=a("> ul",this.shadowList),e=c.position();e.top-=
(parseInt(d.css("paddingTop"),10)||0)+(parseInt(d.css("marginTop"),10)||0)+(parseInt(d.css("borderTopWidth"),10)||0);0>e.top?this.shadowList.scrollTop(this.shadowList.scrollTop()+e.top-2):(e.top+=c.outerHeight(),c=this.shadowList.height(),e.top>c&&this.shadowList.scrollTop(this.shadowList.scrollTop()+(e.top-c)+2))},markItem:function(c,d,e){e=e||a("li:not(.hidden-item)",this.shadowList);if(e.length)0>c?c=e.length-1:c>=e.length&&(c=0),e.removeClass("active-item"),this.shadowList.addClass("list-item-active"),
e=e.filter(":eq("+c+")").addClass("active-item"),d&&(a.prop(this.input,"value",e.attr("data-value")),a.attr(this.input,"aria-activedescendant",a.webshims.getID(e)),a(this.input).triggerHandler("updateInput"),this.scrollIntoView(e)),this.index=c}};(function(){d.defineNodeNameProperties("input",{list:{attr:{get:function(){var a=d.contentAttr(this,"list");return null==a?q:a},set:function(c){d.contentAttr(this,"list",c);d.objectCreate(s,q,{input:this,id:c,datalist:a.prop(this,"list")})}},initAttr:!0,
reflect:!0,propType:"element",propNodeName:"datalist"},selectedOption:{prop:{writeable:!1,get:function(){var c=a.prop(this,"list"),d=null,e;if(!c)return d;e=a.attr(this,"value");if(!e)return d;c=a.prop(c,"options");if(!c.length)return d;a.each(c,function(c,b){if(e==a.prop(b,"value"))return d=b,!1});return d}}},autocomplete:{attr:{get:function(){var c=a.data(this,"datalistWidget");return c?c._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(c){var d=
a.data(this,"datalistWidget");d?(d._autocomplete=c,"off"==c&&d.hideList()):"autocomplete"in this?this.autocomplete=c:this.setAttribute("autocomplete",c)}}}});d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=a("select",this);return c[0]?c[0].options:[]}}});d.addReady(function(c,d){d.filter("select, option").each(function(){var c=this.parentNode,d=a.nodeName(c,"datalist");if(c&&!d)c=c.parentNode,d=a.nodeName(c,"datalist");c&&d&&a(c).triggerHandler("updateDatalist")})})})()}})()});