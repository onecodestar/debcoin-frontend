(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0NlK":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),i=a("jrRI"),o=a("L3zb"),l=s.a.createElement;t.default=function(e){return l("div",null,l("div",{class:" d-flex row  p-2",style:{backgroundColor:"#ebf9f4"}},l("div",{class:"col-12"},l("span",{class:"text-left font-14-18"},"Giftcard Amount"),l("span",{class:"float-right font-14-18"},"BTC Value"),l("br",null)),l("div",{class:"col-12"},l("span",null,"$25"),l("span",{class:"float-right"},"0.000183411 / $20.66"))),l("div",{className:" d-flex row mt-2 "},l("div",{className:"col-6  p-3 text-center",style:{backgroundColor:"#eaecf3 "}},l(i.a,{check:!0,className:"float-right"},l(o.a,{type:"checkbox"})),l("img",{src:"/assets/images/home/btc.png"}),l("br",null),"MYBTC")),l("button",{className:"btn primary-btn btn-default text-uppercase mt-3",onClick:function(t){t.preventDefault(),e.isClicked()}},"select"))}},L3zb:function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),i=a("JX7q"),o=a("dI71"),l=a("q1tI"),c=a.n(l),r=a("17x9"),d=a.n(r),u=a("TSYQ"),f=a.n(u),p=a("33Jr"),b={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.o,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,o=e.bsSize,l=e.valid,r=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),m=["radio","checkbox"].indexOf(i)>-1,v=new RegExp("\\D","g"),w=d||("select"===i||"textarea"===i?i:"input"),x="form-control";b?(x+="-plaintext",w=d||"input"):"file"===i?x+="-file":"range"===i?x+="-range":m&&(x=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var k=Object(p.k)(f()(t,r&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,x),a);return("input"===w||d&&"function"===typeof d)&&(g.type=i),g.children&&!b&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(p.r)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(w,Object(n.a)({},g,{ref:h,className:k,"aria-invalid":r}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},cueW:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/Accordian/selectWallet",function(){return a("0NlK")}])},jrRI:function(e,t,a){"use strict";var n=a("wx14"),s=a("zLVn"),i=a("q1tI"),o=a.n(i),l=a("17x9"),c=a.n(l),r=a("TSYQ"),d=a.n(r),u=a("33Jr"),f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.o,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.row,l=e.disabled,c=e.check,r=e.inline,f=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(u.k)(d()(t,!!i&&"row",c?"form-check":"form-group",!(!c||!r)&&"form-check-inline",!(!c||!l)&&"disabled"),a);return"fieldset"===f&&(p.disabled=l),o.a.createElement(f,Object(n.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p}},[["cueW",0,1]]]);