(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"4nFJ":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/404",function(){return r("PIHq")}])},PIHq:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),s=r("YFqc"),a=r.n(s),i=r("1Yj4"),c=r("ok1R"),l=r("rhny"),u=o.a.createElement;t.default=function(){return Object(n.useEffect)(function(){document.body.style.setProperty("--primary","#000000"),document.body.style.setProperty("--secondary","#434345"),document.body.style.setProperty("--light","#252525"),document.body.style.setProperty("--dark","#000000")}),u("div",{className:"bg-purple"},u("div",{className:"section-404"},u("div",{className:"stars"},u(i.a,null,u(c.a,null,u(l.a,{lg:"8",xs:"12",className:"offset-lg-2"},u("div",{className:"central-body"},u("h1",{className:"text-inner"},"404"),u("h3",{className:"sub-text text-white"},"page not found"),u("p",{className:"text-404 text-white text-center"},"The Page You Are Attempting To Reach Is Currently Not Available. This May Be Because The Page Does Not Exist Or Has Been Moved."),u(a.a,{href:"/layouts/app1"},u("a",{className:"btn btn-default m-t-20"},"back to home"))))))),u("div",{className:"objects"},u("img",{alt:"object_rocket",className:"object_rocket",src:"/assets/images/404/rocket.svg"}),u("div",{className:"earth-moon"},u("img",{alt:"object_earth",className:"object_earth",src:"/assets/images/404/earth.svg"}),u("img",{alt:"object_moon",className:"object_moon",src:"/assets/images/404/moon.svg"})),u("div",{className:"box_astronaut"},u("img",{alt:"object_astronaut",className:"object_astronaut",src:"/assets/images/404/astronaut.svg"}))),u("div",{className:"glowing_stars"},u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}),u("div",{className:"star"}))))}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("pbKT"),o=r("/HRN"),s=r("WaGi"),a=r("N9n2"),i=r("ZDA2"),c=r("/+P4");function l(e){var t=function(){if("undefined"===typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,o=c(e);if(t){var s=c(this).constructor;r=n(o,arguments,s)}else r=o.apply(this,arguments);return i(this,r)}}var u=r("5Uuq"),f=r("KI45");t.__esModule=!0,t.default=void 0;var p,h=f(r("LX0d")),d=r("CxY0"),v=u(r("q1tI")),m=(f(r("17x9")),f(r("nOHt"))),y=(r("P5f7"),r("g/15"));function g(e){return e&&"object"===typeof e?(0,y.formatWithValidation)(e):e}var b=new h.default,N=window.IntersectionObserver;function w(){return p||(N?p=new N(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var k=function(e){a(r,e);var t=l(r);function r(e){var n;return o(this,r),(n=t.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,r=null,n=null;return function(o,s){if(n&&o===t&&s===r)return n;var a=e(o,s);return t=o,r=s,n=a,a}}(function(e,t){return{href:g(e),as:t?g(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=n.formatUrls(n.props.href,n.props.as),a=s.href,i=s.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,y.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),i=i?(0,d.resolve)(c,i):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=i.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](a,i,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return s(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&N&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),b.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,d.resolve)(e,t);m.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=v.default.createElement("a",null,t));var s=v.Children.only(t),a={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch()},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(a.href=o||n),v.default.cloneElement(s,a)}}]),r}(v.Component);k.propTypes=void 0;var _=k;t.default=_}},[["4nFJ",0,1]]]);