(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,a){},34:function(t,e,a){t.exports=a(70)},39:function(t,e,a){},59:function(t,e,a){},70:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a.n(i),c=a(16),r=a.n(c),o=(a(39),a(7)),s=a(8),l=a(10),m=a(9),p=a(11),u=(a(18),[{id:"sa",city:"Riyadh",pic:"https://imgur.com/6SXeDa8.jpg",time:3},{id:"us",city:"New York",pic:"https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/united-states/newyork/newyork_NationalGeographic_2328428.adapt.1900.1.jpg",time:-4},{id:"jp",city:"Tokyo",pic:"https://imgur.com/BYLrmXM.jpg",time:3},{id:"kr",city:"Seoul",pic:"https://imgur.com/NUNDa97.jpg",time:6},{id:"gb",city:"London",pic:"https://imgur.com/tW0gmn9.jpg",time:-2},{id:"de",city:"Berlin",pic:"https://imgur.com/EBFI75U.jpg",time:-1},{id:"fr",city:"Paris",pic:"https://imgur.com/RyfnhQT.jpg",time:-1},{id:"gr",city:"Athens",pic:"https://imgur.com/SdStD7q.jpg",time:0},{id:"ae",city:"Dubai",pic:"https://imgur.com/j8uiVSb.jpg",time:1},{id:"cn",city:"Beijing",pic:"https://imgur.com/d7uexKN.jpg",time:5},{id:"hk",city:"Hong Kong",pic:"https://imgur.com/hv2MgYp.jpg",time:5},{id:"ng",city:"Abuja",pic:"https://i.imgur.com/HOAC0ow.jpg",time:-2},{id:"au",city:"Sydney",pic:"https://imgur.com/AJnU1a0.jpg",time:8},{id:"ca",city:"Toronto",pic:"https://imgur.com/qSlXtx0.jpg",time:-8},{id:"ru",city:"Moscow",pic:"https://imgur.com/7CMWULA.jpg",time:3},{id:"tr",city:"Istanbul",pic:"https://imgur.com/w2xvvJ2.jpg",time:0},{id:"eg",city:"Cairo",pic:"https://imgur.com/EJpvqHM.jpg",time:-1},{id:"nz",city:"Wellington",pic:"https://imgur.com/NfTyANK.jpg",time:10},{id:"za",city:"Cape Town",pic:"https://imgur.com/NgBvP3g.jpg",time:-1},{id:"it",city:"Rome",pic:"https://imgur.com/LvsolhW.jpg",time:-1}]),g=a(75),h=a(76),d=a(77),y=a(78),b=a(79),j=a(80),f=a(81);function v(t){return t<10&&(t="0"+t),t}var O=function(t){function e(){var t,a;Object(o.a)(this,e);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={date:""},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"startTime",value:function(){var t=this,e=new Date,a=(new Date).getUTCHours()+this.props.time;a>23&&(a-=24);var i=v(e.getMinutes()),n=v(e.getSeconds());this.setState({date:a+":"+i+":"+n}),this.timeout=setTimeout(function(){return t.startTime()},500)}},{key:"componentDidMount",value:function(){this.startTime()}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,this.state.date)}}]),e}(n.a.Component),E=a(6),w=a(71),k=a(89),x=a(72),C=a(73),F=a(74),S=a(17),N=a.n(S),A=[{name:"Rain",src:"https://i.imgur.com/zB3l1VL.png"},{name:"Snow",src:"https://i.imgur.com/EobP6qm.png"},{name:"Clear",src:"https://i.imgur.com/F9BbdUc.png"},{name:"Clouds",src:"https://i.imgur.com/KFgFk2z.png"},{name:"Drizzle",src:"https://i.imgur.com/Ivqn0ta.png"},{name:"Thunderstorm",src:"https://i.imgur.com/IiFb1k6.png"},{name:"Dust",src:"https://i.imgur.com/3VtUFjz.png"},{name:"Fog",src:"https://i.imgur.com/tcx5gr0.png"}],D=function(t){function e(){var t,a;Object(o.a)(this,e);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={temp:[],icon:""},a.setIcon=function(){},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.city&&N.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.props.city,"&units=metric&appid=e5641209c168c9ca6b5e2aed090e203d")).then(function(e){t.setState({temp:Math.floor(e.data.main.temp),icon:e.data.weather[0].main});var a=A.filter(function(e){return e.name===t.state.icon});t.setState({icon:a[0].src})})}},{key:"render",value:function(){return console.log("im icons",A),console.log("**icon",this.state.icon),n.a.createElement("div",null,n.a.createElement("img",{src:this.state.icon,style:{height:"23px",width:"23px",marginRight:"10px"},alt:"NO "})," ",this.state.temp," \xb0C ")}}]),e}(n.a.Component),M=function(t){function e(){var t,a;Object(o.a)(this,e);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={art:[]},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;N.a.get("https://newsapi.org/v2/top-headlines?country=".concat(this.props.cityId,"&apiKey=4102d268d5a14bd6bb780903083fc404")).then(function(e){t.setState({art:e.data.articles})})}},{key:"render",value:function(){var t=this.state.art.map(function(t,e){if(e<5)return n.a.createElement("p",null,n.a.createElement("a",{style:{textDecoration:"none",color:"#000"},key:e,href:t.url},t.title))});return n.a.createElement("div",{style:{backgroundColor:"",borderRadius:"10px"}},t)}}]),e}(n.a.Component),T=(a(59),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={modal:!1},a.toggle=a.toggle.bind(Object(E.a)(Object(E.a)(a))),a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"toggle",value:function(){this.setState(function(t){return{modal:!t.modal}})}},{key:"render",value:function(){var t=n.a.createElement("button",{className:"close",style:{position:"absolute",top:"15px",right:"15px"},onClick:this.toggle},"\xd7");return n.a.createElement("div",null,n.a.createElement(w.a,{color:"danger",onClick:this.toggle},this.props.buttonLabel),n.a.createElement(k.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,external:t},n.a.createElement(x.a,{style:{backgroundColor:"#FF3F3F",letterSpacing:"2px",fontFamily:"Helvetica",color:"white"},className:"styleName"}," ",this.props.city," ",n.a.createElement(D,{style:{},city:this.props.city})),n.a.createElement("h3",{style:{margin:"5px auto"}},"Latest News"),n.a.createElement(C.a,null,n.a.createElement(M,{cityId:this.props.cityId})),n.a.createElement(F.a,null)))}}]),e}(n.a.Component)),B=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.cities.map(function(t){return n.a.createElement(g.a,{md:3,key:t.id},n.a.createElement(h.a,{inverse:!0,style:{margin:"15px 0"}},n.a.createElement(d.a,{width:"100%",height:"220px",src:t.pic,alt:"Card image cap"}),n.a.createElement(y.a,null,n.a.createElement(T,{city:t.city,cityId:t.id}),n.a.createElement(b.a,{style:{textShadow:"0px 0px 6px #000000",textAlign:"Center",fontSize:"30px"}},t.city),n.a.createElement(j.a,{style:{textShadow:"0px 0px 6px #000000",textAlign:"Center",fontSize:"30px"}},n.a.createElement(O,{time:t.time})))))});return n.a.createElement("div",{className:"cardHolder"},n.a.createElement(f.a,null,t))}}]),e}(i.Component),I=a(82),z=a(83),H=a(84),U=a(85),W=a(86),L=a(87),R=a(88),q=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).toggle=a.toggle.bind(Object(E.a)(Object(E.a)(a))),a.state={isOpen:!1},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(I.a,{color:"",style:{backgroundColor:"#FF3F3F",letterSpacing:"2px",fontFamily:"Helvetica"},light:!0,expand:"md"},n.a.createElement("img",{src:"https://i.imgur.com/QNcUZpX.png",alt:"logo",style:{height:"50px",width:"50px",margin:"0 20px"}}),n.a.createElement(z.a,{href:"/",style:{color:"#F1F0F1",fontWeight:"Bold"}},"Paper Rocket"),n.a.createElement(H.a,{onClick:this.toggle}),n.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(W.a,{className:"ml-auto",navbar:!0},n.a.createElement(L.a,null,n.a.createElement(R.a,{href:"https://en.wikipedia.org/wiki/Mahatma_Gandhi"},"About Me")),n.a.createElement(L.a,null,n.a.createElement(R.a,{href:"https://github.com/iomaraa"},"GitHub"))))))}}]),e}(n.a.Component),J=function(t){function e(){var t,a;Object(o.a)(this,e);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={cities:u},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(q,null),n.a.createElement("div",{className:"cardHolder",style:{backgroundColor:"",margin:"20px"}},n.a.createElement(B,{cities:this.state.cities})))}}]),e}(i.Component);a(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.4f60e985.chunk.js.map