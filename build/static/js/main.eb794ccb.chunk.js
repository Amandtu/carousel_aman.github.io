(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(3),i=a.n(s),o=a(4),l=a(5),m=a(7),u=a(6),d=a(1),p=a(8),f=(a(15),a(16),function(e){return c.a.createElement("div",{className:"imgContainer"},c.a.createElement("img",{src:e.image,alt:""}),c.a.createElement("p",{className:"caption"},e.caption))}),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={imgUrls:[],imgSize:"",currIndex:0},a.setAutoplay=function(){var e=Object(d.a)(a);n=setInterval(function(){a.moveImage(e.state.currIndex+1)},3e3)},a.moveImage=function(e){var t,n,r=a.state.currIndex,c=document.getElementsByClassName("imgContainer"),s=document.getElementsByClassName("dots"),i={current:"",next:""};if(e>r?(e>=c.length&&(e=0),i.current="moveCurrentLeft",i.next="moveNextLeft"):e<r&&(e<0&&(e=c.length-1),i.current="moveCurrentRight",i.next="moveNextRight"),e!==r){t=c[r],n=c[e];for(var o=0;o<c.length;o++)c[o].className="imgContainer",c[o].style.opacity=0,s[o].classList.remove("active");t.classList.add(i.current),n.classList.add(i.next),n.style.opacity=1,s[e].classList.add("active"),a.setState({currIndex:e})}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=window.innerWidth;a<768?e="small":a>=768&&(e="regular");fetch("https://api.unsplash.com/photos/?client_id=2e071958e3ead1490d476d8df27d16853eebbb6d223efcf25d7b899cec80a836").then(function(e){return e.json()}).then(function(a){t.setState({imgUrls:a.slice(0,t.props.no_of_slides),imgSize:e},function(){document.getElementsByClassName("imgContainer")[0].style.opacity=1,document.getElementsByClassName("dots")[0].classList.add("active"),t.setAutoplay()})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.imgUrls,r=t.currIndex,s=t.imgSize;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"carousel"},a.map(function(t,a){return c.a.createElement(f,{key:a,image:t.urls[s],caption:e.props.titles[a]})}),c.a.createElement("div",{className:"leftArrow",onClick:function(){clearTimeout(n),e.setAutoplay(),e.moveImage(r-1)}},c.a.createElement("span",{className:"arrow left_arrow"})),c.a.createElement("div",{className:"rightArrow",onClick:function(){clearTimeout(n),e.setAutoplay(),e.moveImage(r+1)}},c.a.createElement("span",{className:"arrow right_arrow"}))),c.a.createElement("div",{className:"pagination"},a.map(function(t,a){return c.a.createElement("span",{key:a,className:"dots",onClick:function(){clearTimeout(n),e.setAutoplay(),e.moveImage(a)}})})))}}]),t}(r.Component),v=[],h=function(){for(var e=0;e<10;e++)v.push("Title ".concat(e+1));return c.a.createElement("div",null,c.a.createElement(g,{titles:v,no_of_slides:10}))};i.a.render(c.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.eb794ccb.chunk.js.map