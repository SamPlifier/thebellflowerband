(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{6431:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendar",function(){return t(9450)}])},9450:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var c=t(5893),a=t(5988),s=t.n(a),i=t(9008),r=t(6937),l=t(7294),d=t(9669),o=t.n(d),u=function(e){return e.error?(0,c.jsx)("p",{className:"title",children:"Sorry, calendar data could not be fetched. Refresh this page in a few seconds to try again."}):1===e.events?(0,c.jsxs)("p",{className:"title",children:["There is ",e.events," event in the next 30 days."]}):(0,c.jsxs)("p",{className:"title",children:["There are ",e.events," events in the next 30 days."]})};function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function M(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,n){return!n||"object"!==f(n)&&"function"!==typeof n?j(e):n}function x(e,n){return x=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},x(e,n)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,c=b(e);if(n){var a=b(this).constructor;t=Reflect.construct(c,arguments,a)}else t=c.apply(this,arguments);return m(this,t)}}var y=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&x(e,n)}(b,e);var n,a,l,d=N(b);function b(){var e;return g(this,b),I(j(e=d.apply(this,arguments)),"state",{calendarEvents:[],fetchError:!1}),e}return n=b,(a=[{key:"componentDidMount",value:function(){var e=this,n=new Date,t=new Date(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0),c=new Date(n.getFullYear(),n.getMonth()+1,n.getDate(),23,59,59);o().get("https://www.googleapis.com/calendar/v3/calendars/thebellflowerband%40gmail.com/events?key=AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8").then((function(n){var a=n.data.items;a=a.sort((function(e,n){return Date.parse(e.start.dateTime.toString())>Date.parse(n.start.dateTime.toString())?1:-1}));var s=[];a.map((function(e,n){var a=new Date(e.start.dateTime);return a>t&&a<c&&s.push(e),!0})),e.setState({calendarEvents:s})})).catch((function(n){e.setState({fetchError:!0})}))}},{key:"date",value:function(e,n){var t,c=new Date(e),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["January","February","March","April","May","June","July","August","September","October","Novermber","December"],i={get day(){return a[c.getDay()]},get dayNum(){return c.getDate()},get month(){return s[c.getMonth()]},get year(){return c.getFullYear()},get hour(){return c.getHours()},get minute(){return c.getMinutes()},get localTime(){return c.toLocaleTimeString().slice(0,-6).concat(c.toLocaleTimeString().slice(-3))}};switch(n){case"day":t=i.day;break;case"dayNum":t=i.dayNum;break;case"month":t=i.month;break;case"year":t=i.year;break;case"hour":t=i.hour;break;case"minute":t=i.minute;break;case"localTime":t=i.localTime}return t}},{key:"formatMapsUrl",value:function(e){return"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(e)}},{key:"render",value:function(){var e=this,n=this.state.calendarEvents.map((function(n,a){return(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 eventCard",children:[(0,c.jsx)("h3",{className:"jsx-e0729cd5aec961f6",children:n.summary}),(0,c.jsx)("div",{className:"jsx-e0729cd5aec961f6 detailsContainer",children:(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 details",children:[(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 event",children:[(0,c.jsx)("img",{src:t(7176),className:"jsx-e0729cd5aec961f6 icon"}),(0,c.jsxs)("p",{className:"jsx-e0729cd5aec961f6 time",children:[e.date(n.start.dateTime,"day"),", ",e.date(n.start.dateTime,"month")," ",e.date(n.start.dateTime,"dayNum"),"  ",e.date(n.start.dateTime,"localTime")," - ",e.date(n.end.dateTime,"localTime")]})]}),(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 event",children:[(0,c.jsx)("img",{src:t(1730),className:"jsx-e0729cd5aec961f6 icon"}),(0,c.jsx)("p",{className:"jsx-e0729cd5aec961f6 pin",children:n.location})]}),(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 event",children:[(0,c.jsx)("img",{src:t(2254),className:"jsx-e0729cd5aec961f6 icon"}),(0,c.jsx)("p",{className:"jsx-e0729cd5aec961f6 description",children:n.description})]}),(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 buttons",children:[(0,c.jsx)("a",{alt:"directions link",href:e.formatMapsUrl(n.location),className:"jsx-e0729cd5aec961f6 directions",children:(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 event",children:[(0,c.jsx)("img",{src:t(7302),className:"jsx-e0729cd5aec961f6 icon"}),(0,c.jsx)("p",{className:"jsx-e0729cd5aec961f6 navigate",children:"Navigate"})]})}),(0,c.jsx)("a",{alt:"view in google calendar",href:n.htmlLink,className:"jsx-e0729cd5aec961f6 openInCalendar",children:(0,c.jsxs)("div",{className:"jsx-e0729cd5aec961f6 event",children:[(0,c.jsx)("img",{src:t(381),className:"jsx-e0729cd5aec961f6 icon"}),(0,c.jsx)("p",{className:"jsx-e0729cd5aec961f6 calendar",children:"Calendar"})]})})]})]})}),(0,c.jsx)(s(),{id:"e0729cd5aec961f6",children:".eventCard.jsx-e0729cd5aec961f6{padding:1rem;\nmargin:2rem 0;\ntext-align:left}\n.eventCard.jsx-e0729cd5aec961f6:last-child{margin-bottom:0}\n.icon.jsx-e0729cd5aec961f6{height:1.5rem;\nposition:relative;\ntop:5px}\n.event.jsx-e0729cd5aec961f6{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:baseline;\n-webkit-box-align:baseline;\n-ms-flex-align:baseline;\nalign-items:baseline;\nwidth:100%;\nword-break:break-word}\n.time.jsx-e0729cd5aec961f6{margin-left:10px}\n.pin.jsx-e0729cd5aec961f6{margin-left:6px}\n.description.jsx-e0729cd5aec961f6{margin-left:9px}\n.calendar.jsx-e0729cd5aec961f6{margin-left:10px}\n.navigate.jsx-e0729cd5aec961f6{margin-left:9px}\n.buttons.jsx-e0729cd5aec961f6{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\nmargin:1rem 0;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\n.buttons.jsx-e0729cd5aec961f6 .event.jsx-e0729cd5aec961f6:first-child{margin:0 0 1rem 0}\n.buttons.jsx-e0729cd5aec961f6 .event.jsx-e0729cd5aec961f6:last-child{margin:1rem 0 0 0}\n.buttons.jsx-e0729cd5aec961f6:hover{cursor:pointer}\n.buttons.jsx-e0729cd5aec961f6 .event.jsx-e0729cd5aec961f6{width:100%;\nborder:2px solid #fff;\ntext-align:center;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nbackground:var(--main-orange);\n-webkit-transition:background ease .5s;\ntransition:background ease .5s;\nmargin:1rem}\n.buttons.jsx-e0729cd5aec961f6 .event.jsx-e0729cd5aec961f6:hover{background:#fff}\n.buttons.jsx-e0729cd5aec961f6 .event.jsx-e0729cd5aec961f6 p.jsx-e0729cd5aec961f6{color:#333}\n.buttons.jsx-e0729cd5aec961f6 .icon.jsx-e0729cd5aec961f6{top:0px}\n@media only screen and (min-width:700px) {.buttons.jsx-e0729cd5aec961f6{-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\n.buttons.jsx-e0729cd5aec961f6 .event.jsx-e0729cd5aec961f6:first-child, .buttons.jsx-e0729cd5aec961f6 .event.jsx-e0729cd5aec961f6:last-child{margin:0;\npadding:0 1rem;\nbox-sizing:border-box}\n.directions.jsx-e0729cd5aec961f6, .openInCalendar.jsx-e0729cd5aec961f6{width:calc(50% - 1rem)}}"})]},a)}));return(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(i.default,{children:(0,c.jsx)("title",{children:"Calendar"})}),(0,c.jsx)("section",{className:"calendarPageContainer",children:(0,c.jsxs)("div",{className:"calendarPage",children:[(0,c.jsx)("div",{className:"numOfEvents",children:(0,c.jsx)(u,{events:this.state.calendarEvents.length,error:this.state.fetchError})}),(0,c.jsx)("div",{className:"eventListContainer",children:n})]})})]})}}])&&M(n.prototype,a),l&&M(n,l),b}(l.Component),z=y},381:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzMzMzMzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS4yMiwzLjU0djI0LjUzaDI1LjlWMy41NEgxLjIyeiBNMjYuMTMsMjYuODRIMi4yMVY4Ljc3aDIzLjkyVjI2Ljg0eiIvPgoJPHJlY3QgeD0iMTkuMTMiIHk9IjAuMjgiIGNsYXNzPSJzdDAiIHdpZHRoPSIzLjM3IiBoZWlnaHQ9IjYuNzEiLz4KCTxyZWN0IHg9IjUuODUiIHk9IjAuMjgiIGNsYXNzPSJzdDAiIHdpZHRoPSIzLjM3IiBoZWlnaHQ9IjYuNzEiLz4KPC9nPgo8L3N2Zz4K"},2254:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjQ5LDBIMy41djI4LjM1aDIxLjM0VjUuMzVMMTkuNDksMHogTTIyLjY0LDIyLjM5SDUuN3YtMy40NmgxNi45NFYyMi4zOXogTTIyLjY0LDE1LjlINS43di0zLjQ2aDE2Ljk0VjE1LjkKCXogTTIyLjY0LDkuNDFINS43VjUuOTVoMTYuOTRWOS40MXoiLz4KPC9zdmc+Cg=="},7302:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMzMzMzMzO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Ljk0LDE0Ljg4TDE0Ljg4LDI2Ljk0Yy0wLjM5LDAuMzktMS4wMywwLjM5LTEuNDEsMEwxLjQxLDE0Ljg4Yy0wLjM5LTAuMzktMC4zOS0xLjAzLDAtMS40MUwxMy40NywxLjQxCgljMC4zOS0wLjM5LDEuMDMtMC4zOSwxLjQxLDBsMTIuMDYsMTIuMDZDMjcuMzMsMTMuODYsMjcuMzMsMTQuNDksMjYuOTQsMTQuODh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOS42MywxMy4wN2gtOS4yMWMtMC40MSwwLTAuNzUsMC4zMS0wLjc1LDAuNjh2NC45MiIvPgo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIyLjM4LDEzLjA3IDE1LjMxLDguOTkgMTUuMzEsMTcuMTUgIi8+Cjwvc3ZnPgo="},1730:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjYzLDkuNDVjMC01LjIyLTQuMjMtOS40NS05LjQ1LTkuNDVTNC43Miw0LjIzLDQuNzIsOS40NWMwLDEuNzgsMC41LDMuNDMsMS4zNSw0Ljg1bDguMTEsMTQuMDRsOC4xNS0xNC4xMQoJaC0wLjAxQzIzLjE0LDEyLjgzLDIzLjYzLDExLjIsMjMuNjMsOS40NXogTTE0LjE3LDE1Ljc0Yy0zLjUsMC02LjM0LTIuODQtNi4zNC02LjM0czIuODQtNi4zNCw2LjM0LTYuMzRjMy41LDAsNi4zNCwyLjg0LDYuMzQsNi4zNAoJUzE3LjY3LDE1Ljc0LDE0LjE3LDE1Ljc0eiIvPgo8L3N2Zz4K"},7176:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LjE3LDBDNi4zNSwwLDAsNi4zNSwwLDE0LjE3czYuMzUsMTQuMTcsMTQuMTcsMTQuMTdTMjguMzUsMjIsMjguMzUsMTQuMTdTMjIsMCwxNC4xNywweiBNMTQuMTcsMjUuNwoJYy02LjM3LDAtMTEuNTMtNS4xNi0xMS41My0xMS41M1M3LjgxLDIuNjUsMTQuMTcsMi42NWM2LjM3LDAsMTEuNTMsNS4xNiwxMS41MywxMS41M1MyMC41NCwyNS43LDE0LjE3LDI1Ljd6Ii8+Cjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjguOTksMjAuMDIgMTQuNTEsMTQuOTQgMTQuNTEsNC45MiAiLz4KPC9zdmc+Cg=="}},function(e){e.O(0,[774,888,179],(function(){return n=6431,e(e.s=n);var n}));var n=e.O();_N_E=n}]);