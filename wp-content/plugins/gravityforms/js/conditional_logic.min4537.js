var __gf_timeout_handle;function gf_apply_rules(t,e,i){jQuery(document).trigger("gform_pre_conditional_logic",[t,e,i]),gform.utils.trigger({event:"gform/conditionalLogic/applyRules/start",native:!1,data:{formId:t,fields:e,isInit:i}});for(var a=0;a<e.length;a++)gf_apply_field_rule(t,e[a],i,function(){a>=e.length-1&&(jQuery(document).trigger("gform_post_conditional_logic",[t,e,i]),gform.utils.trigger({event:"gform/conditionalLogic/applyRules/end",native:!1,data:{formId:t,fields:e,isInit:i}}),window.gformCalculateTotalPrice)&&window.gformCalculateTotalPrice(t)})}function gf_check_field_rule(t,e,i,a){var n,e=gf_get_field_logic(t,e);return e?"hide"!=(n=gf_get_field_action(t,e.section))?gf_get_field_action(t,e.field):n:"show"}function gf_get_field_logic(t,e){var i=rgars(window,"gf_form_conditional_logic/"+t);if(i){t=rgars(i,"logic/"+e);if(t)return t;var a=rgar(i,"dependents");if(a)for(var n in a)if(-1!==a[n].indexOf(e))return rgars(i,"logic/"+n)}return!1}function gf_apply_field_rule(t,e,i,a){gf_do_field_action(t,gf_check_field_rule(t,e,i,a),e,i,a);a=window.gf_form_conditional_logic[t].logic[e];a.nextButton&&gf_do_next_button_action(t,gf_get_field_action(t,a.nextButton),e,i)}function gf_get_field_action(t,e){if(!e)return"show";for(var i=0,a=0;a<e.rules.length;a++)gf_is_match(t,gform.applyFilters("gform_rule_pre_evaluation",jQuery.extend({},e.rules[a]),t,e))&&i++;return"all"==e.logicType&&i==e.rules.length||"any"==e.logicType&&0<i?e.actionType:"show"==e.actionType?"hide":"show"}function gf_is_match(t,e){var i=jQuery,a=e.fieldId,n=gformExtractFieldId(a),a=gformExtractInputIndex(a),a=i(!1!==a?"#input_{0}_{1}_{2}".gformFormat(t,n,a):'input[id="input_{0}_{1}"], input[id^="input_{0}_{1}_"], input[id^="choice_{0}_{1}_"], select#input_{0}_{1}, textarea#input_{0}_{1}'.gformFormat(t,n)),i=-1!==i.inArray(a.attr("type"),["checkbox","radio"])?gf_is_match_checkable(a,e,t,n):gf_is_match_default(a.eq(0),e,t,n);return gform.applyFilters("gform_is_value_match",i,t,e)}function gf_is_match_checkable(t,n,r,o){var l;return""===n.value?"is"===n.operator?gf_is_checkable_empty(t):!gf_is_checkable_empty(t):(l=!1,t.each(function(){var t=jQuery(this),e=gf_get_value(t.val()),i=-1!==jQuery.inArray(n.operator,["<",">"]),a=-1!==jQuery.inArray(n.operator,["contains","starts_with","ends_with"]);if(e==n.value||i||a)return t.is(":checked")?"gf_other_choice"==e&&(e=jQuery("#input_{0}_{1}_other".gformFormat(r,o)).val()):e="",gf_matches_operation(e,n.value,n.operator)?!(l=!0):void 0}),l)}function gf_is_checkable_empty(t){var e=!0;return t.each(function(){jQuery(this).is(":checked")&&(e=!1)}),e}function gf_is_match_default(t,e,i,a){for(var t=t.val(),n=t instanceof Array?t:[t],r=0,o=Math.max(n.length,1),l=0;l<o;l++){var d=!n[l]||0<=n[l].indexOf("|"),_=gf_get_value(n[l]),s=gf_get_field_number_format(e.fieldId,i,"value"),d=(s&&!d&&(_=gf_format_number(_,s)),e.value);gf_matches_operation(_,d,e.operator)&&r++}return"isnot"==e.operator?r==o:0<r}function gf_format_number(t,e){return decimalSeparator=".","currency"==e?decimalSeparator=gformGetDecimalSeparator("currency"):"decimal_comma"==e?decimalSeparator=",":"decimal_dot"==e&&(decimalSeparator="."),t=gformCleanNumber(t,"","",decimalSeparator),number=(t=t||0).toString()}function gf_try_convert_float(t){var e="decimal_dot";return gformIsNumeric(t,e)?gformCleanNumber(t,"","","."):t}function gf_matches_operation(t,e,i){switch(t=t?t.toLowerCase():"",e=e?e.toLowerCase():"",i){case"is":return t==e;case"isnot":return t!=e;case">":return t=gf_try_convert_float(t),e=gf_try_convert_float(e),!(!gformIsNumber(t)||!gformIsNumber(e))&&e<t;case"<":return t=gf_try_convert_float(t),e=gf_try_convert_float(e),!(!gformIsNumber(t)||!gformIsNumber(e))&&t<e;case"contains":return 0<=t.indexOf(e);case"starts_with":return 0==t.indexOf(e);case"ends_with":var a=t.length-e.length;return a<0?!1:e==t.substring(a)}return!1}function gf_get_value(t){return t?(t=t.split("|"))[0]:""}function gf_do_field_action(t,e,i,a,n){for(var r=window.gf_form_conditional_logic[t],o=r.dependents[i],l=0;l<o.length;l++){var d=0==i?"#gform_submit_button_"+t:"#field_"+t+"_"+o[l],_=r.defaults[o[l]],s=(do_callback=l+1==o.length?n:null,gform.applyFilters("gform_abort_conditional_logic_do_action",!1,e,d,r.animation,_,a,t,do_callback));s||gf_do_action(e,d,r.animation,_,a,do_callback,t),gform.doAction("gform_post_conditional_logic_field_action",t,e,d,_,a)}}function gf_do_next_button_action(t,e,i,a){var n=window.gf_form_conditional_logic[t],i="#gform_next_button_"+t+"_"+i;gform.applyFilters("gform_abort_conditional_logic_do_action",!1,e,i,n.animation,null,a,t,null)||gf_do_action(e,i,n.animation,null,a,null,t)}function gf_do_action(t,e,i,a,n,r,o){var l=jQuery(e);l.data("gf-disabled-assessed")||(l.find(":input:disabled").addClass("gf-default-disabled"),l.data("gf-disabled-assessed",!0)),l.hasClass("gfield--type-honeypot")||("show"==t?(l.find("select").each(function(){var t=jQuery(this);t.attr("tabindex",t.data("tabindex"))}),i&&!n?0<l.length?(l.find(":input:hidden:not(.gf-default-disabled)").removeAttr("disabled"),(l.is('input[type="submit"]')||l.hasClass("gform_next_button"))&&(l.removeAttr("disabled").css("display",""),l.attr("data-conditional-logic","hidden"),"1"==gf_legacy.is_legacy)&&l.removeClass("screen-reader-text"),l.slideDown(r)):r&&r():(""!=(t=l.data("gf_display"))&&"none"!=t||(t="1"===gf_legacy.is_legacy?"list-item":"block"),l.find(":input:hidden:not(.gf-default-disabled)").removeAttr("disabled").attr("data-conditional-logic","visible"),l.is('input[type="submit"]')||l.hasClass("gform_next_button")?(l.removeAttr("disabled").css("display",""),l.attr("data-conditional-logic","visible"),"1"==gf_legacy.is_legacy&&l.removeClass("screen-reader-text")):(l.css("display",t),"none"==t?l.attr("data-conditional-logic","hidden"):l.attr("data-conditional-logic","visible")),r&&r())):(0<(t=l.children().first()).length&&gform.applyFilters("gform_reset_pre_conditional_logic_field_action",!0,o,e,a,n)&&!gformIsHidden(t)&&gf_reset_to_default(e,a),l.find("select").each(function(){var t=jQuery(this);t.data("tabindex",t.attr("tabindex")).removeAttr("tabindex")}),l.data("gf_display")||l.data("gf_display",l.css("display")),i&&!n?l.is('input[type="submit"]')||l.hasClass("gform_next_button")?(l.attr("disabled","disabled").hide(),"1"===gf_legacy.is_legacy&&l.addClass("screen-reader-text")):0<l.length&&l.is(":visible")?l.slideUp(r):r&&r():(l.is('input[type="submit"]')||l.hasClass("gform_next_button")?(l.attr("disabled","disabled").hide(),l.attr("data-conditional-logic","hidden"),"1"===gf_legacy.is_legacy&&l.addClass("screen-reader-text")):(l.css("display","none"),l.attr("data-conditional-logic","hidden")),l.find(":input:hidden:not(.gf-default-disabled)").attr("disabled","disabled"),r&&r())))}function gf_reset_to_default(t,a){var e=jQuery(t).find(".gfield_date_month input, .gfield_date_day input, .gfield_date_year input, .gfield_date_dropdown_month select, .gfield_date_dropdown_day select, .gfield_date_dropdown_year select");if(0<e.length)e.each(function(){var t,e=jQuery(this);val=a?(t="d",e.parents().hasClass("gfield_date_month")||e.parents().hasClass("gfield_date_dropdown_month")?t="m":(e.parents().hasClass("gfield_date_year")||e.parents().hasClass("gfield_date_dropdown_year"))&&(t="y"),a[t]):"","SELECT"==e.prop("tagName")&&""!=val&&(val=parseInt(val,10)),e.val()!=val?e.val(val).trigger("change"):e.val(val)});else{var i=jQuery(t).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], input[type="hidden"], input[type="email"], input[type="tel"], input[type="url"], textarea'),n=0;if(a&&0<i.parents(".ginput_list").length&&i.length<a.length)for(;i.length<a.length;)gformAddListItem(i.eq(0),0),i=jQuery(t).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], textarea');i.each(function(){var t,e="",i=jQuery(this);i.is('[type="hidden"]')&&!gf_is_hidden_pricing_input(i)||("gf_other_choice"==i.prev("input").attr("value")?e=i.attr("value"):jQuery.isArray(a)&&!i.is("select[multiple]")?e=a[n]:jQuery.isPlainObject(a)?(!(e=a[i.attr("name")])&&i.attr("id")&&(t=i.attr("id").split("_").slice(2).join("."),e=a[t]),!e&&i.attr("name")&&(t=i.attr("name").split("_")[1],e=a[t])):a&&(e=a),i.is("select:not([multiple])")&&!e&&(e=i.find("option").not(":disabled").eq(0).val()),i.val()!=e?(i.val(e).trigger("change"),i.is("select")&&i.next().hasClass("chosen-container")&&i.trigger("chosen:updated"),gf_is_hidden_pricing_input(i)&&(t=gf_get_ids_by_html_id(i.parents(".gfield").attr("id")),jQuery("#input_"+t[0]+"_"+t[1]).text(gformFormatMoney(i.val())),i.val(gformFormatMoney(i.val())))):i.val(e),n++)}),jQuery(t).find('input[type="radio"], input[type="checkbox"]:not(".copy_values_activated")').each(function(){var t=!!jQuery(this).is(":checked"),e=!!a&&-1<jQuery.inArray(jQuery(this).attr("id"),a);t!=e&&("checkbox"==jQuery(this).attr("type")?jQuery(this).trigger("click"):jQuery(this).prop("checked",e).change())})}}function gf_is_hidden_pricing_input(t){return!(!t.attr("id")||0!==t.attr("id").indexOf("ginput_base_price"))||"hidden"===t.attr("type")&&t.parents(".gfield_shipping").length}gform.addAction("gform_input_change",function(t,e,i){window.gf_form_conditional_logic&&(i=rgars(gf_form_conditional_logic,[e,"fields",gformExtractFieldId(i)].join("/")))&&gf_apply_rules(e,i)},10);