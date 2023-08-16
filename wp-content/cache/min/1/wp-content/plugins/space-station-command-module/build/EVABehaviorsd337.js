window.EVASuit=window.EVASuit||{};window.EVASuit.Behaviors=window.EVASuit.Behaviors||{};window.EVASuit.Behaviors.Behavior=function(Element,Document,Behaviors){"use strict";const LOCATED_INSTANCES=Symbol("locatedInstances");class Behavior{static find_markup(context){var results=[],i,splitArgs=[],Class=this,nodelist;function processElem(index,elem){var locateArgs=[elem].concat(splitArgs);results.push(Class.locate.apply(Class,locateArgs))}
for(i=1;i<arguments.length;i+=1){splitArgs.push(arguments[i])}
if(context instanceof Element||context instanceof Document){nodelist=Array.prototype.slice.call(context.querySelectorAll(Class.QUERY));nodelist.forEach(element=>{processElem(undefined,element)});if(context.matches&&context.matches(Class.QUERY)){processElem(undefined,context)}}else if(context.filter&&context.find){context.filter(Class.QUERY).each(processElem);context.find(Class.QUERY).each(processElem)}else{throw new Behaviors.ElementMissingError("Behavior.find_markup called without valid context object")}}
static locate(elem,...objectArgs){var Class=this,instance;if(elem instanceof Element||elem instanceof Document){if(Class[LOCATED_INSTANCES]===undefined){Class[LOCATED_INSTANCES]=new WeakMap()}
if(!Class[LOCATED_INSTANCES].has(elem)){Class[LOCATED_INSTANCES].set(elem,new Class(elem,...objectArgs))}
return Class[LOCATED_INSTANCES].get(elem)}else if(elem.length!==undefined&&elem.length>0){return self.locate(elem[0],...objectArgs)}else{throw new Behaviors.ElementMissingError("Behavior.locate called without valid element")}}
static content_ready(context){this.find_markup(context)}
static content_removal(context){var Class=this,nodelist;function deinitialize_elem(elem){var instance=Class.locate(elem);instance.deinitialize()}
if(context instanceof Element){nodelist=Array.prototype.slice.call(context.querySelectorAll(Class.QUERY));nodelist.forEach(deinitialize_elem);if(context.matches(Class.QUERY)){deinitialize_elem(elem)}}else if(context.filter&&context.find){context.filter(Class.QUERY).each((index,elem)=>deinitialize_elem(elem));context.find(Class.QUERY).each((index,elem)=>deinitialize_elem(elem))}else{throw new Behaviors.ElementMissingError("Behavior.content_removal called without valid context object")}}
constructor(elem){this.elem=elem;if(window.jQuery){this.$elem=window.jQuery(elem)}}
deinitialize(){}
presented(){}
dismissed(){}}
return Behavior}(window.Element,window.Document,window.EVASuit.Behaviors);window.EVASuit=window.EVASuit||{};window.EVASuit.Behaviors=window.EVASuit.Behaviors||{};window.EVASuit.Behaviors.ElementMissingError=function(){"use strict";class ElementMissingError extends Error{constructor(message){super(message);this.name="ElementMissingError"}}
return ElementMissingError}();window.EVASuit=window.EVASuit||{};window.EVASuit.Behaviors=window.EVASuit.Behaviors||{};window.EVASuit.Behaviors.Focus=(function(){"use strict";var module={},element_states=new WeakMap();function make_element_unfocusable(elem){var i;if(elem.attributes.tabIndex!==undefined&&(!element_states.has(elem)||elem.tabIndex!==-1)){element_states.set(elem,elem.tabIndex)}
elem.tabIndex=-1;for(i=0;i<elem.children.length;i+=1){if(elem.children[i]){make_element_unfocusable(elem.children[i])}}}
function make_element_focusable(elem){var i;if(element_states.has(elem)){elem.tabIndex=element_states.get(elem)}else{delete elem.tabIndex;delete elem.removeAttribute("tabIndex")}
for(i=0;i<elem.children.length;i+=1){if(elem.children[i]){make_element_focusable(elem.children[i])}}}
module.make_element_focusable=make_element_focusable;module.make_element_unfocusable=make_element_unfocusable;return module}());window.EVASuit=window.EVASuit||{};window.EVASuit.Behaviors=window.EVASuit.Behaviors||{};(window.EVASuit.Behaviors.Hooks=function(Behaviors){"use strict";class Hooks{constructor(){this.hooks={}}
define_hook_type(hook_name){if(!this.hooks.hasOwnProperty(hook_name)){this.hooks[hook_name]=[]}}
attach(hook_name,impl){this.hooks[hook_name].push(impl)}
trigger(hook_name,value,instance){var i,new_value,context=[value,instance];for(i=3;i<arguments.length;i+=1){context.push(arguments[i])}
for(i=0;i<this.hooks[hook_name].length;i+=1){new_value=this.hooks[hook_name][i].apply(this,context);if(new_value!==undefined){context[0]=new_value}}
return context[0]}}
return Hooks}(window.Behaviors));window.EVASuit=window.EVASuit||{};window.EVASuit.Behaviors=window.EVASuit.Behaviors||{};window.EVASuit.Behaviors=(function(module){"use strict";var presentation_stack=[],stack_is_locked=!1;class PresentationLogicError extends Error{constructor(message){super(message);this.name="PresentationLogicError"}}
function present(item){var stack_cleaned=!1,i;if(stack_is_locked){throw new PresentationLogicError("Cannot present items recursively.")}
stack_is_locked=!0;while(presentation_stack.length>0&&!stack_cleaned){var iter=item.elem;while(iter!==undefined){if(presentation_stack[presentation_stack.length-1]===iter){stack_cleaned=!0;break}
iter=iter.parent}
try{presentation_stack.pop().dismissed()}catch(e){stack_is_locked=!1;throw e}}
presentation_stack.push(item);try{item.presented()}finally{stack_is_locked=!1}}
function dismiss(item){var stack_index,i=0;if(stack_is_locked){throw new PresentationLogicError("Cannot dismiss items recursively.")}
if(presentation_stack.length===0){throw new PresentationLogicError("Cannot dismiss without presenting first.")}
if(item===undefined){stack_index=presentation_stack.length-1;item=presentation_stack[stack_index]}else{stack_index=presentation_stack.indexOf(item)}
if(stack_index===-1){throw new PresentationLogicError("Cannot dismiss elements that were not presented.")}
while(presentation_stack.length>stack_index){try{presentation_stack.pop().dismissed()}catch(e){stack_is_locked=!1;throw e}}
stack_is_locked=!1}
function toggle(item){if(presentation_stack.indexOf(item)!==-1){dismiss(item)}else{present(item)}}
document.addEventListener("keyup",function(evt){if(evt.isComposing||evt.keyCode===229){return}
if(evt.key==="Esc"||evt.key==="Escape"||evt.keyCode===27){if(presentation_stack.length>0){dismiss()}}});module.present=present;module.dismiss=dismiss;module.toggle=toggle;return module}(window.EVASuit.Behaviors));window.EVASuit=window.EVASuit||{};window.EVASuit.Behaviors=window.EVASuit.Behaviors||{};(function(Behaviors){"use strict";var behavior_registry={},content_ready_listeners=[];function register_behavior(Class,name){if(name===undefined){name=Class.QUERY}
if(behavior_registry[name]===Class){console.warn("Attempted to register the same behavior twice to CSS selector \""+name+"\"");return}
if(behavior_registry[name]!==undefined){console.error("Attempted to register a second behavior onto CSS selector \""+name+"\". Only one behavior may be registered to a given CSS selector "+"at a given time. The offending classes are "+Class.name+" and "+behavior_registry[name].name+".");return}
behavior_registry[name]=Class}
function register_content_listener(func){content_ready_listeners.push(func)}
function content_ready(context){var k,i;function do_later(obj,func){window.setTimeout(func.bind(obj,context),0)}
for(i=0;i<content_ready_listeners.length;i+=1){do_later(undefined,content_ready_listeners[i])}
for(k in behavior_registry){if(behavior_registry.hasOwnProperty(k)){do_later(behavior_registry[k],behavior_registry[k].content_ready)}}}
function content_removal(context){var k,i;function do_later(obj,func){window.setTimeout(func.bind(obj,context),0)}
for(k in behavior_registry){if(behavior_registry.hasOwnProperty(k)){do_later(behavior_registry[k],behavior_registry[k].content_removal)}}}
window.document.addEventListener("DOMContentLoaded",function(){content_ready(window.document)});Behaviors.register_behavior=register_behavior;Behaviors.register_content_listener=register_content_listener;Behaviors.content_ready=content_ready;Behaviors.content_removal=content_removal}(window.EVASuit.Behaviors));window.EVASuit=window.EVASuit||{};window.EVASuit.Behaviors=window.EVASuit.Behaviors||{};window.EVASuit.Behaviors.throttle_single=function(){"use strict";function throttle_single(func,timeout){var lastTimeout,afterLastArgs,afterLastThis;function unthrottle(){if(afterLastArgs!==undefined){func.apply(afterLastThis,afterLastArgs);afterLastArgs=undefined;lastTimeout=window.setTimeout(unthrottle,timeout)}else{lastTimeout=undefined}}
return function(){var myThis=this,myArgs=[],i;for(i=0;i<arguments.length;i+=1){myArgs.push(arguments[i])}
if(lastTimeout===undefined){func.apply(myThis,myArgs);lastTimeout=window.setTimeout(unthrottle,timeout)}else{afterLastArgs=myArgs;afterLastThis=myThis}}}
return throttle_single}()