(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1w3K":function(e,t,n){"use strict";var a=r(n("Si88")),o=r(n("PAGr")),s=r(n("UnXY")),i=r(n("S3Uj"));function r(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:i.default,TransitionGroup:s.default,ReplaceTransition:o.default,CSSTransition:a.default}},"8PcY":function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=s,t.getInitialChildMapping=function(e,t){return o(e.children,function(n){return(0,a.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:i(n,"appear",e),enter:i(n,"enter",e),exit:i(n,"exit",e)})})},t.getNextChildMapping=function(e,t,n){var r=o(e.children),l=s(t,r);return Object.keys(l).forEach(function(o){var s=l[o];if((0,a.isValidElement)(s)){var c=o in t,d=o in r,p=t[o],u=(0,a.isValidElement)(p)&&!p.props.in;!d||c&&!u?d||!c||u?d&&c&&(0,a.isValidElement)(p)&&(l[o]=(0,a.cloneElement)(s,{onExited:n.bind(null,s),in:p.props.in,exit:i(s,"exit",e),enter:i(s,"enter",e)})):l[o]=(0,a.cloneElement)(s,{in:!1}):l[o]=(0,a.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:i(s,"exit",e),enter:i(s,"enter",e)})}}),l};var a=n("q1tI");function o(e,t){var n=Object.create(null);return e&&a.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=function(e){return t&&(0,a.isValidElement)(e)?t(e):e}(e)}),n}function s(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,o=Object.create(null),s=[];for(var i in e)i in t?s.length&&(o[i]=s,s=[]):s.push(i);var r={};for(var l in t){if(o[l])for(a=0;a<o[l].length;a++){var c=o[l][a];r[o[l][a]]=n(c)}r[l]=n(l)}for(a=0;a<s.length;a++)r[s[a]]=n(s[a]);return r}function i(e,t,n){return null!=n[t]?n[t]:e.props[t]}},CaDr:function(e,t,n){"use strict";var a=n("wx14"),o=n("zLVn"),s=n("q1tI"),i=n.n(s),r=n("17x9"),l=n.n(r),c=n("TSYQ"),d=n.n(c),p=n("33Jr"),u={tag:p.o,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),l=Object(p.k)(d()(t,"modal-body"),n);return i.a.createElement(s,Object(a.a)({},r,{className:l}))};f.propTypes=u,f.defaultProps={tag:"div"},t.a=f},DCcX:function(e,t,n){"use strict";var a=n("vpQ4"),o=n("wx14"),s=n("JX7q"),i=n("dI71"),r=n("q1tI"),l=n.n(r),c=n("17x9"),d=n.n(c),p=n("TSYQ"),u=n.n(p),f=n("i8i4"),m=n.n(f),h=n("33Jr"),b={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},n.render=function(){return h.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),m.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);g.propTypes=b;var v=g,y=n("zLVn"),E=n("1w3K"),x=Object(a.a)({},E.Transition.propTypes,{children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:h.o,baseClass:d.a.string,baseClassActive:d.a.string,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])}),N=Object(a.a)({},E.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:h.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function C(e){var t=e.tag,n=e.baseClass,a=e.baseClassActive,s=e.className,i=e.cssModule,r=e.children,c=e.innerRef,d=Object(y.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(h.m)(d,h.a),f=Object(h.l)(d,h.a);return l.a.createElement(E.Transition,p,function(e){var d="entered"===e,p=Object(h.k)(u()(s,n,d&&a),i);return l.a.createElement(t,Object(o.a)({className:p},f,{ref:c}),r)})}C.propTypes=x,C.defaultProps=N;var O=C;function k(){}var _=d.a.shape(O.propTypes),S={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:_,modalTransition:_,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:h.p},j=Object.keys(S),w={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:k,onClosed:k,modalTransition:{timeout:h.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:h.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},T=function(e){function t(t){var n;return(n=e.call(this,t)||this)._element=null,n._originalBodyPadding=null,n.getFocusableChildren=n.getFocusableChildren.bind(Object(s.a)(n)),n.handleBackdropClick=n.handleBackdropClick.bind(Object(s.a)(n)),n.handleBackdropMouseDown=n.handleBackdropMouseDown.bind(Object(s.a)(n)),n.handleEscape=n.handleEscape.bind(Object(s.a)(n)),n.handleStaticBackdropAnimation=n.handleStaticBackdropAnimation.bind(Object(s.a)(n)),n.handleTab=n.handleTab.bind(Object(s.a)(n)),n.onOpened=n.onOpened.bind(Object(s.a)(n)),n.onClosed=n.onClosed.bind(Object(s.a)(n)),n.manageFocusAfterClose=n.manageFocusAfterClose.bind(Object(s.a)(n)),n.clearBackdropAnimationTimeout=n.clearBackdropAnimationTimeout.bind(Object(s.a)(n)),n.state={isOpen:!1,showStaticBackdropAnimation:!1},n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.isOpen,n=e.autoFocus,a=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),n&&this.setFocus()),a&&a(),this._isMounted=!0},n.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},n.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},n.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||k)(e,t)},n.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||k)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},n.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},n.getFocusableChildren=function(){return this._element.querySelectorAll(h.f.join(", "))},n.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(n){e=t[0]}return e},n.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},n.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),n=t.length;if(0!==n){for(var a=this.getFocusedChild(),o=0,s=0;s<n;s+=1)if(t[s]===a){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[n-1].focus()):e.shiftKey||o!==n-1||(e.preventDefault(),t[0].focus())}}},n.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},n.handleEscape=function(e){this.props.isOpen&&e.keyCode===h.j.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},n.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout(function(){e.setState({showStaticBackdropAnimation:!1})},100)},n.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(h.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(h.g)(),Object(h.e)(),0===t.openCount&&(document.body.className=u()(document.body.className,Object(h.k)("modal-open",this.props.cssModule))),t.openCount+=1},n.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},n.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},n.close=function(){if(t.openCount<=1){var e=Object(h.k)("modal-open",this.props.cssModule),n=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(n," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(h.n)(this._originalBodyPadding)},n.renderModalDialog=function(){var e,t=this,n=Object(h.l)(this.props,j);return l.a.createElement("div",Object(o.a)({},n,{className:Object(h.k)(u()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(h.k)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},n.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var n=this.props,s=n.wrapClassName,i=n.modalClassName,r=n.backdropClassName,c=n.cssModule,d=n.isOpen,p=n.backdrop,f=n.role,m=n.labelledBy,b=n.external,g=n.innerRef,y={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":m,role:f,tabIndex:"-1"},E=this.props.fade,x=Object(a.a)({},O.defaultProps,{},this.props.modalTransition,{baseClass:E?this.props.modalTransition.baseClass:"",timeout:E?this.props.modalTransition.timeout:0}),N=Object(a.a)({},O.defaultProps,{},this.props.backdropTransition,{baseClass:E?this.props.backdropTransition.baseClass:"",timeout:E?this.props.backdropTransition.timeout:0}),C=p&&(E?l.a.createElement(O,Object(o.a)({},N,{in:d&&!!p,cssModule:c,className:Object(h.k)(u()("modal-backdrop",r),c)})):l.a.createElement("div",{className:Object(h.k)(u()("modal-backdrop","show",r),c)}));return l.a.createElement(v,{node:this._element},l.a.createElement("div",{className:Object(h.k)(s)},l.a.createElement(O,Object(o.a)({},y,x,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(h.k)(u()("modal",i,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:g}),b,this.renderModalDialog()),C))}return null},n.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.a.Component);T.propTypes=S,T.defaultProps=w,T.openCount=0;t.a=T},OBzv:function(e,t,n){"use strict";var a=n("wx14"),o=n("zLVn"),s=n("q1tI"),i=n.n(s),r=n("17x9"),l=n.n(r),c=n("TSYQ"),d=n.n(c),p=n("33Jr"),u={tag:p.o,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),l=Object(p.k)(d()(t,"modal-footer"),n);return i.a.createElement(s,Object(a.a)({},r,{className:l}))};f.propTypes=u,f.defaultProps={tag:"div"},t.a=f},PAGr:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;i(n("17x9"));var a=i(n("q1tI")),o=n("i8i4"),s=i(n("UnXY"));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var t,n;function i(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=i.prototype;return r.handleLifecycle=function(e,t,n){var s,i=this.props.children,r=a.default.Children.toArray(i)[t];r.props[e]&&(s=r.props)[e].apply(s,n),this.props[e]&&this.props[e]((0,o.findDOMNode)(this))},r.render=function(){var e=this.props,t=e.children,n=e.in,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","in"]),i=a.default.Children.toArray(t),r=i[0],l=i[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,a.default.createElement(s.default,o,n?a.default.cloneElement(r,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):a.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},i}(a.default.Component);r.propTypes={};var l=r;t.default=l,e.exports=t.default},S3Uj:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n("17x9")),o=r(n("q1tI")),s=r(n("i8i4")),i=n("VCL8");n("xfxO");function r(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var c="exited";t.EXITED=c;var d="entering";t.ENTERING=d;var p="entered";t.ENTERED=p;t.EXITING="exiting";var u=function(e){var t,n;function a(t,n){var a;a=e.call(this,t,n)||this;var o,s=n.transitionGroup,i=s&&!s.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(o=c,a.appearStatus=d):o=p:o=t.unmountOnExit||t.mountOnEnter?l:c,a.state={status:o},a.nextCallback=null,a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==p&&(t=d):n!==d&&n!==p||(t="exiting")}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=s.default.findDOMNode(this);t===d?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},i.performEnter=function(e,t){var n=this,a=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,s=this.getTimeouts(),i=o?s.appear:s.enter;t||a?(this.props.onEnter(e,o),this.safeSetState({status:d},function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i,function(){n.safeSetState({status:p},function(){n.props.onEntered(e,o)})})})):this.safeSetState({status:p},function(){n.props.onEntered(e)})},i.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,function(){t.safeSetState({status:c},function(){t.props.onExited(e)})})})):this.safeSetState({status:c},function(){t.props.onExited(e)})},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,a=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"===typeof n)return n(e,a);var s=o.default.Children.only(n);return o.default.cloneElement(s,a)},a}(o.default.Component);function f(){}u.contextTypes={transitionGroup:a.object},u.childContextTypes={transitionGroup:function(){}},u.propTypes={},u.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},u.UNMOUNTED=0,u.EXITED=1,u.ENTERING=2,u.ENTERED=3,u.EXITING=4;var m=(0,i.polyfill)(u);t.default=m},Si88:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}t.default=e}(n("17x9"));var a=r(n("ycFn")),o=r(n("VOcB")),s=r(n("q1tI")),i=r(n("S3Uj"));n("xfxO");function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,a.default)(e,t)})},d=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,o.default)(e,t)})},p=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).onEnter=function(e,n){var a=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,a),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,a),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,s=n?a+" "+o:o;t.removeClasses(e,n?"appear":"enter"),c(e,s),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,o=a?(a&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:a?o+"-active":n[e+"Active"],doneClassName:a?o+"-done":n[e+"Done"]}},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),a=n.className,o=n.activeClassName,s=n.doneClassName;a&&d(e,a),o&&d(e,o),s&&d(e,s)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},o.render=function(){var e=l({},this.props);return delete e.classNames,s.default.createElement(i.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(s.default.Component);p.defaultProps={classNames:""},p.propTypes={};var u=p;t.default=u,e.exports=t.default},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},Ub4G:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/Settings/Verification",function(){return n("YIdI")}])},UnXY:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=r(n("17x9")),o=r(n("q1tI")),s=n("VCL8"),i=n("8PcY");function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},p=function(e){var t,n;function a(t,n){var a,o=(a=e.call(this,t,n)||this).handleExited.bind(c(c(a)));return a.state={handleExited:o,firstRender:!0},a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},s.componentDidMount=function(){this.appeared=!0,this.mounted=!0},s.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(e,t){var n=t.children,a=t.handleExited;return{children:t.firstRender?(0,i.getInitialChildMapping)(e,a):(0,i.getNextChildMapping)(e,n,a),firstRender:!1}},s.handleExited=function(e,t){var n=(0,i.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=l({},t.children);return delete n[e.key],{children:n}}))},s.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["component","childFactory"]),s=d(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?s:o.default.createElement(t,a,s)},a}(o.default.Component);p.childContextTypes={transitionGroup:a.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var u=(0,s.polyfill)(p);t.default=u,e.exports=t.default},VCL8:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function s(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,r=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?r="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==r){var l=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=s;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;d.call(this,e,t,a)}}return e}n.r(t),n.d(t,"polyfill",function(){return i}),a.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0},VOcB:function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}},YIdI:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),s=n("1Yj4"),i=n("ok1R"),r=n("rhny"),l=n("sOKU"),c=n("DCcX"),d=n("vkoW"),p=n("CaDr"),u=n("OBzv"),f=o.a.createElement;t.default=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],o=Object(a.useState)(!1),m=o[0],h=o[1],b=function(){return n(!t)},g=function(){return h(!m)},v={backgroundColor:"#f25767",borderRadius:"50%",display:"inline-flex",width:"3.125rem",height:"3.125rem"},y={backgroundColor:"#ffbe3d",borderRadius:"50%",display:"inline-flex",width:"3.125rem",height:"3.125rem"},E={backgroundColor:"#5cc9a7",borderRadius:"50%",display:"inline-flex",width:"3.125rem",height:"3.125rem"};return f(s.a,null,f("h4",{className:"text-dark mb-2 mt-2"},"Verification"),f(i.a,{className:"mt-3"},f(r.a,{md:"12",lg:"4"},f("div",{className:"p-4 shadow-showcase text-center shadow"},f("div",{style:{backgroundColor:"#5cc9a7",boxShadow:"0 .5rem 1rem rgba(0, 138, 255, .4)",padding:"1rem"}},f("img",{alt:"stay-connected",src:"/assets/images/home/sheild_tier_1.png",style:{maxWidth:"50px"}}),f("p",{className:"m-0 f-18 text-center text-white"},"Tier 1")),f("p",{className:"mt-2"},"Trade Volume"),f("h5",{class:"h3 font-weight-bolder mb-1 mt-3"},"0$ - $499"),f("br",null),f("div",{class:"  text-white rounded-circle",style:E},f("i",{className:"fa fa-mobile",style:{fontSize:"2rem",padding:"9px 16px"}})),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check  mr-2",style:{color:"#5cc9a7"}}),"SMS verification required"),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check  mr-2 invisible",style:{color:"#5cc9a7"}})),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check invisible mr-2",style:{color:"#5cc9a7"}})))),f(r.a,{md:"12",lg:"4"},f("div",{className:"p-4 shadow-showcase text-center shadow"},f("div",{style:{backgroundColor:"#ffbe3d",boxShadow:"0 .5rem 1rem rgba(255, 190, 61, .4)",padding:"1rem"}},f("img",{alt:"stay-connected",src:"/assets/images/home/sheild_tier_2.png",style:{maxWidth:"50px"}}),f("p",{className:"m-0 f-18 text-center text-white"},"Tier 2")),f("p",{className:"mt-2"},"Trade Volume"),f("h5",{class:"h3 font-weight-bolder mb-1 mt-3"},"$500 - $1999"),f("br",null),f("div",{class:"  text-white rounded-circle",style:y},f("i",{className:"fa fa-id-card",style:{fontSize:"20px",padding:"15px 13px"}})),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check  mr-2",style:{color:"#ffbe3d"}}),"SMS verification required"),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check  mr-2",style:{color:"#ffbe3d"}}),"Government issued ID required"),f("p",{className:"mt-2 mb-0 invisible"},f("i",{className:"fa fa-check  mr-2",style:{color:"#ffbe3d"}})))),f(r.a,{md:"12",lg:"4"},f("div",{className:"p-4 shadow-showcase text-center shadow"},f("div",{style:{backgroundColor:"#f25767",boxShadow:"0 .5rem 1rem rgba(242, 87, 103, .4)",padding:"1rem"}},f("img",{alt:"stay-connected",src:"/assets/images/home/sheild_tier_3.png",style:{maxWidth:"50px"}}),f("p",{className:"m-0 f-18 text-center text-white"},"Tier 3")),f("p",{className:"mt-2"},"Trade Volume"),f("h5",{class:"h3 font-weight-bolder mb-1 mt-3"},"$2000+"),f("br",null),f("div",{class:"  text-white rounded-circle",style:v},f("i",{className:"fa fa-file",style:{fontSize:"20px",padding:"15px 15px"}})),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check  mr-2",style:{color:"#f25767"}}),"SMS verification required"),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check  mr-2",style:{color:"#f25767"}}),"Government issued ID required"),f("p",{className:"mt-2 mb-0"},f("i",{className:"fa fa-check  mr-2",style:{color:"#f25767"}}),"Proof of Address required")))),f("h4",{className:"mt-5 text-dark"},"Submit your Verification Documents"),f("div",{className:"p-4  shadow-sm"},f(i.a,{className:"mt-3 ml-0"},f(r.a,{sm:"12",md:"2"},f("div",{class:"  text-white rounded-circle",style:E},f("i",{className:"fa fa-mobile",style:{fontSize:"2rem",padding:"9px 16px"}}))),f(r.a,{sm:"12",md:"7"},f("h5",{className:"mb-2"}," SMS Verification"),f("p",null,"Your mobile number 9165810509 is successfully verified via SMS.")),f(r.a,{sm:"12",md:"3",className:"text-right"},f(l.a,{style:{backgroundColor:"#5cc9a7"},disabled:!0},"Verified")))),f("div",{className:"p-4  shadow-sm"},f(i.a,{className:"mt-3 ml-0"},f(r.a,{sm:"12",md:"2"}," ",f("div",{class:"  text-white rounded-circle",style:y},f("i",{className:"fa fa-id-card",style:{fontSize:"20px",padding:"15px 13px"}}))),f(r.a,{sm:"12",md:"6"}," ",f("h5",{className:"mb-2"},"ID Verification"," ",f("i",{className:"fa fa-question-circle pl-2",onClick:b})),f("p",null,"Your mobile number 9165810509 is successfully verified via SMS.")),f(r.a,{sm:"12",md:"4",className:"text-right"}," ",f(l.a,{style:{backgroundColor:"#ffbe3d"}},"Start")))),f("div",{className:"p-4  shadow-sm"},f(i.a,{className:"mt-3 ml-0"},f(r.a,{sm:"12",md:"2"}," ",f("div",{class:"  text-white rounded-circle",style:v},f("i",{className:"fa fa-file",style:{fontSize:"20px",padding:"15px 15px"}}))),f(r.a,{sm:"12",md:"6"},f("h5",{className:"mb-2"},"Proof of Address",f("i",{className:"fa fa-question-circle pl-2",onClick:g})),f("p",null,"A utility bill is required to unlock Tier 3 limit. Make sure this includes your name and the address associated with your ID. Acceptable forms of Proof of Address include, but are not limited to:"),f("ul",{style:{listStyleType:"disc"},className:"mt-3"},f("li",null,"Electric Bill"),f("li",null,"Water Bill"),f("li",null,"Insurance Bill"),f("li",null,"Insurance Bill"),f("li",null,"Bank Statement"))),f(r.a,{sm:"12",md:"4",className:"text-right"},f(l.a,{style:{backgroundColor:"#ffbe3d"}},"Start")))),f(c.a,{isOpen:t,toggle:b},f(d.a,{toggle:b},"ID Verification"),f(p.a,null,f("img",{alt:"",className:"img-fluid team",src:"/assets/images/home/id.svg"})),f(u.a,null,f(l.a,{color:"secondary",onClick:b},"Close"))),f(c.a,{isOpen:m,toggle:g},f(d.a,{toggle:g},"Proof of Address"),f(p.a,null,f("img",{alt:"",className:"img-fluid team",src:"/assets/images/home/poa.svg"})),f(u.a,null,f(l.a,{color:"secondary",onClick:g},"Close"))))}},sOKU:function(e,t,n){"use strict";var a=n("wx14"),o=n("zLVn"),s=n("JX7q"),i=n("dI71"),r=n("q1tI"),l=n.n(r),c=n("17x9"),d=n.n(c),p=n("TSYQ"),u=n.n(p),f=n("33Jr"),m={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:f.o,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(s.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],s=e.block,i=e.className,r=e.close,c=e.cssModule,d=e.color,p=e.outline,m=e.size,h=e.tag,b=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+d,y=Object(f.k)(u()(i,{close:r},r||"btn",r||v,!!m&&"btn-"+m,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),c);g.href&&"button"===h&&(h="a");var E=r?"Close":null;return l.a.createElement(h,Object(a.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:y,ref:b,onClick:this.onClick,"aria-label":n||E}))},t}(l.a.Component);h.propTypes=m,h.defaultProps={color:"secondary",tag:"button"},t.a=h},vkoW:function(e,t,n){"use strict";var a=n("wx14"),o=n("zLVn"),s=n("q1tI"),i=n.n(s),r=n("17x9"),l=n.n(r),c=n("TSYQ"),d=n.n(c),p=n("33Jr"),u={tag:p.o,wrapTag:p.o,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},f=function(e){var t,n=e.className,s=e.cssModule,r=e.children,l=e.toggle,c=e.tag,u=e.wrapTag,f=e.closeAriaLabel,m=e.charCode,h=e.close,b=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(p.k)(d()(n,"modal-header"),s);if(!h&&l){var v="number"===typeof m?String.fromCharCode(m):m;t=i.a.createElement("button",{type:"button",onClick:l,className:Object(p.k)("close",s),"aria-label":f},i.a.createElement("span",{"aria-hidden":"true"},v))}return i.a.createElement(u,Object(a.a)({},b,{className:g}),i.a.createElement(c,{className:Object(p.k)("modal-title",s)},r),h||t)};f.propTypes=u,f.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=f},vpQ4:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}n.d(t,"a",function(){return o})},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var a;(a=n("17x9"))&&a.__esModule;t.timeoutsShape=null;t.classNamesShape=null},yD6e:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=a(n("yD6e"));e.exports=t.default}},[["Ub4G",0,1]]]);