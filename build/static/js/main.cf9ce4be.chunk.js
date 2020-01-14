(this["webpackJsonpcfb-machine"]=this["webpackJsonpcfb-machine"]||[]).push([[0],{40:function(e,t,a){e.exports=a(55)},46:function(e,t,a){},47:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(46),a(37)),s=a(13),m=(a(47),a(59)),u=a(60),i=function(){return c.a.createElement(m.a,{sticky:"top",expand:"lg"},c.a.createElement(m.a.Brand,{href:"/"},"CFB Machine"),c.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(u.a,{className:"mr-auto"},c.a.createElement(u.a.Link,{href:"/match-history"},"Match History"),c.a.createElement(u.a.Link,{href:"/team-stats"},"Team Stats"),c.a.createElement(u.a.Link,{href:"/rosters"},"Rosters"),c.a.createElement(u.a.Link,{href:"/about"},"About")),c.a.createElement(u.a,{inline:!0},c.a.createElement(u.a.Link,{href:"https://andydavisson.com"},"Back to andydavisson.com"))))},p=function(){return c.a.createElement("div",{className:"home container"},c.a.createElement("h1",null,"CFB Machine"),c.a.createElement("p",null,"Welcome to the CFB Machine. Explore this site to find historical college football stats."))},f=a(5),h=a.n(f),E=a(6),b=a(58),v=a(57),d=function(e){var t=Object(n.useState)({}),a=Object(E.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(E.a)(o,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){!function(){var t,a;h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.awrap(fetch("https://api.collegefootballdata.com/teams/matchup?team1=".concat(e.team1,"&team2=").concat(e.team2)));case 2:return t=n.sent,n.next=5,h.a.awrap(t.json());case 5:a=n.sent,l(a),u(!0);case 8:case"end":return n.stop()}}))}()})),c.a.createElement("div",{className:"matchups"},c.a.createElement("h3",null,"Results"),c.a.createElement("p",null,"Wins for ",e.team1,": ",r.team1Wins),c.a.createElement("p",null,"Wins for ",e.team2,": ",r.team2Wins),c.a.createElement("p",null,"Ties: ",r.ties),!!m&&r.games.map((function(e){return c.a.createElement("div",{className:"game"},c.a.createElement("h5",null,e.season),c.a.createElement("p",null,"Winner: ",e.winner),c.a.createElement("p",null,"Score: ",e.awayTeam," ",e.awayScore," - ",e.homeScore," ",e.homeTeam),c.a.createElement("p",null,"Venue: ",e.venue?e.venue:"N/A"))})),console.log(r.games))},j=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(E.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)(""),i=Object(E.a)(u,2),p=i[0],f=i[1],j=Object(n.useState)(!1),g=Object(E.a)(j,2),O=g[0],y=g[1];Object(n.useEffect)((function(){!function(){var e,t;h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(fetch("https://api.collegefootballdata.com/teams/fbs"));case 2:return e=a.sent,a.next=5,h.a.awrap(e.json());case 5:t=a.sent,r(t),m(t[0].school),f(t[0].school);case 9:case"end":return a.stop()}}))}()}),[]);var S=function(e){e.preventDefault(),y(!0)},w=function(){y(!1)};return c.a.createElement("div",{className:"match-history container"},c.a.createElement("h1",null,"Match History"),!O&&c.a.createElement("p",null,"Select two teams to see results of all of the games they have played against each other."),!O&&c.a.createElement(b.a,{onSubmit:S},c.a.createElement(b.a.Group,{controlId:"team.ControlSelect1"},c.a.createElement(b.a.Label,null,"First Team"),c.a.createElement(b.a.Control,{as:"select",value:s,onChange:function(e){return m(e.target.value)}},a.map((function(e){return c.a.createElement("option",{key:"1_"+e.id,value:e.school},e.school," ",e.mascot)})))),c.a.createElement(b.a.Group,{controlId:"team.ControlSelect2"},c.a.createElement(b.a.Label,null,"Second Team"),c.a.createElement(b.a.Control,{as:"select",value:p,onChange:function(e){return f(e.target.value)}},a.map((function(e){return c.a.createElement("option",{key:"2_"+e.id,value:e.school},e.school," ",e.mascot)})))),c.a.createElement(v.a,{variant:"primary",type:"submit"},"Submit")),O&&c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{onClick:w},"Change Teams"),c.a.createElement(d,{team1:s,team2:p})))},g=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(E.a)(o,2),m=s[0],u=s[1];Object(n.useEffect)((function(){!function(){var t,a;h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.awrap(fetch("https://api.collegefootballdata.com/stats/season?year=".concat(e.year,"&team=").concat(e.team)));case 2:return t=n.sent,n.next=5,h.a.awrap(t.json());case 5:a=n.sent,l(a),u(!0);case 8:case"end":return n.stop()}}))}()}));return c.a.createElement("div",{className:"team-stats-results"},c.a.createElement("h3",null,e.year," Stats for ",e.team),c.a.createElement("div",{className:"stats"},!!m&&r.map((function(e){return c.a.createElement("p",null,function(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}(e.statName),": ",e.statValue)}))))},O=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(2019),o=Object(E.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)([]),i=Object(E.a)(u,2),p=i[0],f=i[1],d=Object(n.useState)(!1),j=Object(E.a)(d,2),O=j[0],y=j[1],S=Object(n.useState)([]),w=Object(E.a)(S,2),C=w[0],x=w[1];Object(n.useEffect)((function(){!function(){var e,t;h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(fetch("https://api.collegefootballdata.com/teams/fbs"));case 2:return e=a.sent,a.next=5,h.a.awrap(e.json());case 5:t=a.sent,f(t),r(t[0].school);case 8:case"end":return a.stop()}}))}();for(var e=new Date,t=[],a=1900;a<=e.getFullYear();a++)t.push(a);x(t)}),[]);var k=function(e){e.preventDefault(),y(!0)};return c.a.createElement("div",{className:"team-stats container"},c.a.createElement("h1",null,"Team Stats"),!O&&c.a.createElement(b.a,{onSubmit:k},c.a.createElement(b.a.Group,{controlId:"team.ControlSelect"},c.a.createElement(b.a.Label,null,"Team"),c.a.createElement(b.a.Control,{as:"select",value:a,onChange:function(e){return r(e.target.value)}},p.map((function(e){return c.a.createElement("option",{key:"1_"+e.id,value:e.school},e.school," ",e.mascot)})))),c.a.createElement(b.a.Group,{controlId:"year.ControlSelect"},c.a.createElement(b.a.Label,null,"Year"),c.a.createElement(b.a.Control,{as:"select",value:s,onChange:function(e){return m(e.target.value)}},C.map((function(e){return c.a.createElement("option",{value:e},e)})))),c.a.createElement(v.a,{varian:"primary",type:"submit"},"Submit")),O&&c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{onClick:function(){return y(!1)}},"Edit Team/Year"),c.a.createElement(g,{team:a,year:s})))},y=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){!function(){var t,a;h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.awrap(fetch("https://api.collegefootballdata.com/roster?team=".concat(e.team)));case 2:return t=n.sent,n.next=5,h.a.awrap(t.json());case 5:a=n.sent,l(a);case 7:case"end":return n.stop()}}))}()})),c.a.createElement("div",{className:"roster-results"},r.map((function(e){return c.a.createElement("div",{className:"player"},c.a.createElement("h5",null,"#",e.jersey," ",e.first_name," ",e.last_name),c.a.createElement("p",null,"Position: ",e.position),c.a.createElement("p",null,"Height: ",e.height,'"'),c.a.createElement("p",null,"Weight: ",e.weight," lbs."),c.a.createElement("p",null,"Hometown: ",e.home_city,", ",e.home_state,", ",e.home_country))})))},S=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(E.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)(!1),i=Object(E.a)(u,2),p=i[0],f=i[1];Object(n.useEffect)((function(){!function(){var e,t;h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(fetch("https://api.collegefootballdata.com/teams/fbs"));case 2:return e=a.sent,a.next=5,h.a.awrap(e.json());case 5:t=a.sent,r(t),m(t[0].school);case 8:case"end":return a.stop()}}))}()}),[]);var d=function(e){e.preventDefault(),f(!0)};return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Rosters"),!p&&c.a.createElement(b.a,{onSubmit:d},c.a.createElement(b.a.Group,{controlId:"team.ControlSelect"},c.a.createElement(b.a.Label,null,"Team"),c.a.createElement(b.a.Control,{as:"select",value:s,onChange:function(e){return m(e.target.value)}},a.map((function(e){return c.a.createElement("option",{key:"1_"+e.id,value:e.school},e.school," ",e.mascot)})))),c.a.createElement(v.a,{varian:"primary",type:"submit"},"Submit")),p&&c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{onClick:function(){return f(!1)}},"Change Team"),c.a.createElement(y,{team:s})))},w=function(){return c.a.createElement("div",{className:"about container"},c.a.createElement("h1",null,"About"),c.a.createElement("p",null,c.a.createElement("em",null,"This page is pulling all data from ",c.a.createElement("a",{href:"https://api.collegefootballdata.com/"},"api.collegefootballdata.com/"),".")))};var C=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(s.a,{exact:!0,path:"/",component:p}),c.a.createElement(s.a,{path:"/match-history",component:j}),c.a.createElement(s.a,{path:"/team-stats",component:O}),c.a.createElement(s.a,{path:"/rosters",component:S}),c.a.createElement(s.a,{path:"/about",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.cf9ce4be.chunk.js.map