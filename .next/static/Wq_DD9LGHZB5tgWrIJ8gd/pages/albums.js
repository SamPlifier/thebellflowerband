(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0yw6":function(e,n){e.exports="/_next/static/images/album-front-e7c1f2a4a62f97b3fe42cdd82d0d2ab1.png"},EdJK:function(e,n,t){"use strict";n.a=[{item:"Bellflower album",name:"Changes On The Way",urlName:"changes-on-the-way",albumImages:"public/changes-on-the-way",releaseDate:"September 30, 2019",writers:["Franklin Bellflower","Natasha Wilson","David Criswell"],songs:"10",price:"$10",songNames:["Changes on the Way","Feeling You","Blowing the Wind","Looking for the One","Candy Crunch","Kind of Like Jolene","Bradford Pear","Fire to the Feast","What Is Love","To the End"],vendors:[{vendorName:"iTunes",vendorLink:"https://music.apple.com/us/album/changes-on-the-way/1480122305"},{vendorName:"CD Baby",vendorLink:"https://store.cdbaby.com/cd/bellflower"},{vendorName:"Google Play",vendorLink:"https://play.google.com/store/music/album/Bellflower_Changes_on_the_Way?id=Bix7j567nfnaili7n6utbonfe34"},{vendorName:"Amazon Prime",vendorLink:"https://www.amazon.com/Changes-Way-Bellflower/dp/B07XLXV6W8"}]}]},PMsv:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums",function(){return t("jl0i")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cGbi:function(e,n,t){"use strict";var r=t("MX0m"),o=t.n(r),a=t("q1tI"),i=t.n(a).a.createElement;n.a=function(e){return i("div",null,i("h2",null,"PURCHASE ON"),i("div",{className:"jsx-1242560693 vendors"},e.vendor.map(function(e){return i("a",{key:e.vendorName,href:e.vendorLink,className:"jsx-1242560693 vendor"},e.vendorName)}),i(o.a,{id:"4267077026"},['.vendors.jsx-1242560693{width:100%;display:grid;grid-template-areas:"topLeft topRight" "bottomLeft bottomRight";grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}',".vendor.jsx-1242560693{border:2px solid #f69d1a;padding:1rem;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;background:#f69d1a;color:#222;}"]),i(o.a,{id:"3725597374"},[".vendorAvail{text-align:center;}"])))}},cTJO:function(e,n,t){"use strict";var r=t("/HRN"),o=t("WaGi"),a=t("ZDA2"),i=t("/+P4"),s=t("N9n2"),l=t("5Uuq"),c=t("KI45");n.__esModule=!0,n.default=void 0;var f,u=c(t("LX0d")),p=t("CxY0"),d=l(t("q1tI")),m=(c(t("17x9")),c(t("nOHt"))),h=(t("P5f7"),t("g/15"));function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var b=new u.default,g=window.IntersectionObserver;function w(){return f||(g?f=new g(function(e){e.forEach(function(e){if(b.has(e.target)){var n=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),n())}})},{rootMargin:"200px"}):void 0)}var y=function(e){function n(e){var t;return r(this,n),(t=a(this,i(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(o,a){if(r&&o===n&&a===t)return r;var i=e(o,a);return n=o,t=a,r=i,i}}(function(e,n){return{href:v(e),as:n?v(n):n}}),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,s=a.as;if(function(e){var n=(0,p.parse)(e,!1,!0),t=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var l=window.location.pathname;i=(0,p.resolve)(l,i),s=s?(0,p.resolve)(l,s):i,e.preventDefault();var c=t.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},t.p=!1!==e.prefetch,t}return s(n,e),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var n=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,n){var t=w();return t?(t.observe(e),b.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}b.delete(e)}):function(){}}(e,function(){n.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=(0,p.resolve)(e,n);m.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"===typeof n&&(n=d.default.createElement("a",null,n));var a=d.Children.only(n),i={ref:function(n){e.handleRef(n),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(n):"object"===typeof a.ref&&(a.ref.current=n))},onMouseEnter:function(n){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(n),e.prefetch()},onClick:function(n){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),d.default.cloneElement(a,i)}}]),n}(d.Component);y.propTypes=void 0;var x=y;n.default=x},jl0i:function(e,n,t){"use strict";t.r(n);var r=t("MX0m"),o=t.n(r),a=t("q1tI"),i=t.n(a),s=t("12V9"),l=t("EdJK"),c=t("cGbi"),f=t("YFqc"),u=t.n(f),p=i.a.createElement;n.default=function(){return p(s.a,null,p("section",{className:"jsx-1270321536"},l.a.map(function(e){return p("div",{key:e.name,className:"jsx-1270321536 album"},p("h2",{className:"jsx-1270321536"},e.name),p("p",{className:"jsx-1270321536 deets"},"click album for details"),p(u.a,{href:"/album/[albumName]",as:"/album/".concat(e.urlName)},p("div",{className:"jsx-1270321536"},p("div",{className:"jsx-1270321536 albumImgContainer"},p("img",{alt:"Front cover of Bellflower album ".concat(e.name),src:t("po3c")("./".concat(e.urlName,"/album-front.png")),className:"jsx-1270321536"})))),p(c.a,{vendor:e.vendors}))})),p(o.a,{id:"1270321536"},[".albumImgContainer.jsx-1270321536{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".album.jsx-1270321536 img.jsx-1270321536{width:100%;}",".deets.jsx-1270321536{color:#f69d1a;}"]))}},po3c:function(e,n,t){var r={"./changes-on-the-way/album-front.png":"0yw6"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="po3c"}},[["PMsv",1,0]]]);