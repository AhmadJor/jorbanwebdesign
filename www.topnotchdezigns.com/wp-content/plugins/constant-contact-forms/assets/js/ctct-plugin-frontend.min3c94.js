!function(){var t={460:function(){!function(t,e){function n(){return e(".ctct-submitted").attr("disabled",null)}e(document).ready((function(){e(".ctct-submitted").on("click",(function(){setTimeout((function(){e(".ctct-submitted").attr("disabled","disabled"),setTimeout(n,3e3)}),100)}))}))}(window,jQuery)},313:function(){window.CTCTSupport={},function(t,e,n){var o=this;n.init=function(){n.cache(),n.bindEvents(),n.removePlaceholder()},n.removePlaceholder=function(){e(".ctct-form-field input, textarea").focus((function(){e(o).data("placeholder",e(o).attr("placeholder")).attr("placeholder","")})).blur((function(){e(o).attr("placeholder",e(o).data("placeholder"))}))},n.cache=function(){n.$c={$forms:[]},e(".ctct-form-wrapper").each((function(t,o){n.$c.$forms.push(e(o).find("form"))})),e.each(n.$c.$forms,(function(t,o){var c=e(o);n.$c.$forms[t].$honeypot=c.find(".ctct_usage_field"),n.$c.$forms[t].$submitButton=c.find("input[type=submit]"),n.$c.$forms[t].$recaptcha=c.find(".g-recaptcha")})),n.timeout=null},n.setAllInputsValid=function(){e(n.$c.$form+" .ctct-invalid").removeClass("ctct-invalid")},n.processError=function(t){void 0!==t.id&&e("#"+t.id).addClass("ctct-invalid")},n.checkHoneypot=function(t,e,n){0<e.val().length?n.attr("disabled","disabled"):n.attr("disabled",!1)},n.validateSubmission=function(t){return"on"===t.attr("data-doajax")&&(e.each(t.find("[required]"),(function(t,e){if(!1===e.checkValidity())return!1})),!0)},n.showMessage=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"log",i=t.parents(".ctct-form-wrapper");i.find("p.ctct-message").remove(),e("<p />",{class:"ctct-message "+o,text:n,role:c}).prepend(e("<button />",{class:"button button-secondary ctct-dismiss ctct-dismiss-ajax-notice",html:"&#10005;","aria-label":"Dismiss Notification"})).insertBefore(t).fadeIn(200),i.find(".ctct-dismiss-ajax-notice").on("click",(function(){e(this).parents(".ctct-message").remove()}))},n.submitForm=function(o){o.find(".ctct-submitted").prop("disabled",!0);var c={action:"ctct_process_form",data:o.serialize()};e.post(t.ajaxurl,c,(function(t){return o.find(".ctct-submitted").prop("disabled",!1),void 0!==t.status&&("success"!==t.status?(void 0!==t.errors?(n.setAllInputsValid(),t.errors.forEach(n.processError)):n.showMessage(o,t.message,"ctct-error","alert"),!1):(o.hide(),n.showMessage(o,t.message,"ctct-success","status"),void o[0].reset()))}))},n.handleSubmission=function(t,e){if(!n.validateSubmission(e))return!1;clearTimeout(n.timeout),e[0].checkValidity()&&(t.preventDefault(),n.timeout=setTimeout(n.submitForm,500,e))},n.bindEvents=function(){e.each(n.$c.$forms,(function(t,e){n.$c.$forms[t].on("click","input[type=submit]",(function(e){n.handleSubmission(e,n.$c.$forms[t])})),n.$c.$forms[t].$honeypot.on("change keyup",(function(e){n.checkHoneypot(e,n.$c.$forms[t].$honeypot,n.$c.$forms[t].$submitButton)})),0<n.$c.$forms[t].$recaptcha.length&&n.$c.$forms[t].$submitButton.attr("disabled","disabled")}))},e(n.init)}(window,jQuery,window.CTCTSupport)}},e={};function n(o){var c=e[o];if(void 0!==c)return c.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(460),n(313)}()}();
//# sourceMappingURL=ctct-plugin-frontend.min.js.map