(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0py2":function(e,t,n){"use strict";n.r(t);var a=n("MX0m"),r=n.n(a),s=n("q1tI"),i=n.n(s),o=(n("YFqc"),n("12V9")),c=n("11Qv"),l=n.n(c),p=n("AE7E"),f=n.n(p),u=n("0yw6"),m=n.n(u),d=[{name:"T-shirt",price:"20",availableAt:"Performances.",imgSrc:f.a},{name:"Sticker",price:"0",availableAt:"Performances.",imgSrc:l.a},{name:"Album (Changes On The Way)",price:"10",availableAt:"Performances and online.",imgSrc:m.a}],h=i.a.createElement;t.default=function(){var e=d;return console.log(e),h(o.a,null,h("section",{className:"jsx-770515978"},h("h2",{className:"jsx-770515978"},"ITEMS"),h("div",{className:"jsx-770515978 merchContainer"},e.map(function(e,t){return h("div",{key:t,className:"jsx-770515978 merchItem"},h("div",{className:"jsx-770515978 description"},h("p",{className:"jsx-770515978"},"Item: ",e.name),h("p",{className:"jsx-770515978"},"Price: $",e.price),h("p",{className:"jsx-770515978"},"Get at: ",e.availableAt),h("div",{className:"jsx-770515978 imgContainer"},h("img",{src:e.imgSrc,className:"jsx-770515978"}))))})),h("h2",{className:"jsx-770515978"},"PURCHASING"),h("p",{className:"jsx-770515978"},"We currently accept ",h("span",{className:"jsx-770515978"},"Credit Cards"),", ",h("span",{className:"jsx-770515978"},"Venmo"),", and ",h("span",{className:"jsx-770515978"},"Paypal"),". Contact us below if you have any questions about stock or payment details.")),h(r.a,{id:"770515978"},[".payment-types.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","span.jsx-770515978{color:#f69d1a;}",".merchContainer.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".merchItem.jsx-770515978{border:2px solid #f69d1a;padding:2rem;margin:2rem 0;}",".merchItem.jsx-770515978 .imgContainer.jsx-770515978{height:auto;}",".merchItem.jsx-770515978 .imgContainer.jsx-770515978 img.jsx-770515978{width:70%;object-fit:contain;}",".description.jsx-770515978 p.jsx-770515978{text-align:left;}"]))}},"0yw6":function(e,t){e.exports="/_next/static/images/album-front-e7c1f2a4a62f97b3fe42cdd82d0d2ab1.png"},"11Qv":function(e,t){e.exports="/_next/static/images/sticker-151fc66497ee6d6e8c111aa44731c7db.svg"},AE7E:function(e,t){e.exports="/_next/static/images/shirt1-4aa423598235e460e0dd29a28babb57b.svg"},H6VG:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/merchandise",function(){return n("0py2")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("/HRN"),r=n("WaGi"),s=n("ZDA2"),i=n("/+P4"),o=n("N9n2"),c=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var p,f=l(n("LX0d")),u=n("CxY0"),m=c(n("q1tI")),d=(l(n("17x9")),l(n("nOHt"))),h=(n("P5f7"),n("g/15"));function x(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var v=new f.default,b=window.IntersectionObserver;function y(){return p||(b?p=new b(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return a(this,t),(n=s(this,i(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,a=null;return function(r,s){if(a&&r===t&&s===n)return a;var i=e(r,s);return t=r,n=s,a=i,i}}(function(e,t){return{href:x(e),as:t?x(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=n.formatUrls(n.props.href,n.props.as),i=s.href,o=s.as;if(function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,u.resolve)(c,i),o=o?(0,u.resolve)(c,o):i,e.preventDefault();var l=n.props.scroll;null==l&&(l=o.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](i,o,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return o(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),v.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,u.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=m.default.createElement("a",null,t));var s=m.Children.only(t),i={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch()},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(i.href=r||a),m.default.cloneElement(s,i)}}]),t}(m.Component);g.propTypes=void 0;var w=g;t.default=w}},[["H6VG",1,0]]]);