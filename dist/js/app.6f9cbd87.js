(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)i=s[d],o[i]&&h.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},o={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),o=r.n(a);o.a},"0438":function(e,t,r){"use strict";var a=r("1a1e"),o=r.n(a);o.a},1881:function(e,t,r){e.exports=r.p+"img/profile_2.915cc08c.jpg"},"1a1e":function(e,t,r){},"1b00":function(e,t,r){e.exports=r.p+"img/email.6d5a67a0.svg"},"2cdc":function(e,t,r){e.exports=r.p+"img/github-logo.f9385dc2.png"},"2fa2":function(e,t,r){},3796:function(e,t,r){},"3b50":function(e,t,r){e.exports=r.p+"img/profile_photo_1.bbe6cd63.png"},"3ea3":function(e,t,r){},"4af3":function(e,t,r){"use strict";var a=r("3ea3"),o=r.n(a);o.a},"4e81":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"myNav"}},[r("ul",[r("li",{attrs:{id:"testID"},on:{click:e.showAboutPage}},[e._v("About")]),r("li",{attrs:{id:"testID"},on:{click:e.showResumePage}},[e._v("Resume")]),r("li",{attrs:{id:"testID"},on:{click:e.showWorkPage}},[e._v("Projects")]),r("li",{attrs:{id:"testID"},on:{click:e.showMainPage}},[e._v("Home")]),e._m(0)])]),r("div",{attrs:{id:"myContent"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAbout,expression:"showAbout"}],attrs:{id:"aboutPage"}},[r("aboutMe")],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showWork,expression:"showWork"}],attrs:{id:"workStuffs"}},[r("work")],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showResume,expression:"showResume"}],attrs:{id:"resumePage"}},[r("resume")],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showMain,expression:"showMain"}],attrs:{id:"mainPage"}},[e._m(1),e._m(2),e._m(3)]),r("myFooter")],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{attrs:{id:"profileImg",src:r("3b50"),width:"60",height:"70",cursor:"pointer"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"intro"},[r("h2",[e._v("Hi! Welcome to my little project hub. Feel free to take a look around, check out what I've done and what I'm working on right now!")]),r("h3",[e._v("If you want to chat about projects, work, games, or really anything, head over to my about page for contact details!")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"CurrentProjects"},[r("h3",[e._v("Current Projects:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"OldProjects"},[r("h3",[e._v("Older Projects:")]),r("br"),r("br"),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/4rx7Z99PztU?start=80",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),r("br"),r("br"),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/tGfXXczZ4Js",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"aboutMe"}},[a("div",{attrs:{id:"photo"}},[a("img",{attrs:{src:r("1881"),width:"250",height:"320"}})]),a("br"),a("br"),a("div",{attrs:{id:"blurb"}},[a("h2",{staticStyle:{"margin-left":"30%"}},[e._v("\n      Hey There - I'm DK.\n    ")]),a("p",[e._v(" \n      I am currently pursuing bachelors in Computer Science as well as Interactive Media and Game Development (Tech)\n      at Worcester Polytechnic Institute. I have a passion for something probably but don't know what that is \n      - maybe tech? I love games and telling stories through them, whether they be for escapism, to make a statement,\n      or just for plain old fun. \n    ")])]),a("br"),a("div",{attrs:{id:"contact"}},[e._v("\n     If you want to ask about projects, work, or just chat, here are some ways to contact me:\n     "),a("br"),a("br"),a("div",{attrs:{id:"links"}},[a("a",{attrs:{id:"refPhoto",href:"https://www.linkedin.com/in/diana-kumykova-426b69176"}},[a("img",{attrs:{src:r("a79e"),width:"50",height:"50"}})]),a("a",{attrs:{id:"refPhoto",href:"#"}},[a("img",{attrs:{src:r("1b00"),width:"50",height:"50"}})]),a("a",{attrs:{id:"refPhoto",href:"https://www.github.com/dkumykova"}},[a("img",{attrs:{src:r("2cdc"),width:"50",height:"50"}})])])])])}],c={name:"aboutMe",props:{msg:String}},l=c,u=(r("a056"),r("2877")),d=Object(u["a"])(l,i,s,!1,null,"77552cf1",null),h=d.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"myFooter"}},[r("ul",[r("li",[e._v("Copyright Diana Kumykova 2019")])])])}],f={name:"footer"},g=f,v=(r("751f"),Object(u["a"])(g,m,p,!1,null,"1098ae48",null)),w=v.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"workPage"}},[r("h1",[e._v("Work Experience")]),r("div",{staticClass:"grid-container"},[r("div",{staticClass:"box1"},[r("projBox",{staticClass:"Intern",attrs:{title:"Software Developer Intern",description:"\r\n      Worked independently on a project involving integrating a new telematics IoT device into \r\n      an Android application connecting through Wifi Direct and transmitting data over a TCP socket\r\n      connection. Application was completed in Xamarin (C#). Worked with a team of developers on an ASP.NET \r\n      Core website building tools in Vue for easier page deep linking and making Angular to Vue conversions \r\n      of webpages."}})],1),r("div",{staticClass:"box2"},[r("projBox",{staticClass:"UXDM",attrs:{title:"UXDM Software Developer",description:"\r\n      Working with a team of PHD, graduate, and undergraduate students under \r\n      a WPI professor to research innovation in User Experience Design. \r\n      Worked independently on a game in C# that will utilize Tobii eye-tracking \r\n      software to play, and will be used by future WPI students to collect data on UX. \r\n      Currently working on improving an eye-tracking research software built in C# and Vue."}})],1)]),r("h1",[e._v("Projects")]),r("div",{staticClass:"grid-container2"},[r("div",{staticClass:"box3"},[r("projBox",{staticClass:"Karen",attrs:{title:"Call Of Karen",description:"Upcoming comedy PC adventure game made in Unreal. \r\n      Karen is a typical 1950s suburban housewife, trapped in an unhappy marriage and taking care of an \r\n      ungrateful child. If that wasn’t bad enough, the stars are right and Cthulhu is descending upon the world, \r\n      starting with her home. Play through minigames of what a suburban mom would do as her house slowly\r\n      descends into chaos."}})],1),r("div",{staticClass:"box4"},[r("projBox",{staticClass:"Fighters",attrs:{title:"Forest Fighters",description:"2D fighting game created in GameMaker as a local game jam project - play as birch,\r\n      oak, or any other of your favorite muscley trees and fight to the death!"}})],1),r("div",{staticClass:"box5"},[r("projBox",{staticClass:"Error",attrs:{title:"Fatal Error",description:"2D fighting game created in Dragonfly Game Engine. In this game you and your opponent \r\n      fight as one of the 5 most well-known programming languages, and are pitted against one another in order to show off your language’s most outstanding \r\n      abilities. Set in the forbidden block of memory from which no language can allocate, players fight to death in a Tekken-like 1v1 arena, and take out \r\n      aggression against their most hated language. You can play as Python, C, C++, Lisp, or Java, and prove once and for all which is the best programming language!"}})],1),r("div",{staticClass:"box6"},[r("projBox",{staticClass:"Boids",attrs:{title:"Birds and Boids",description:"Birds and Boids is designed to be a tranquil, relaxing experience that allows users to interact\r\n     with boids as they float across the screen and bring music where they go. Uses the Leap Motion for more immersive boid-to-human interaction."}})],1),r("div",{staticClass:"box7"},[r("projBox",{staticClass:"Dragonfly",attrs:{title:"Dragonfly Game Engine",description:"Created fully functional ASCII-based game engine in C++, utilizing the SFML library for grahphics\r\n      and audio. Implemented functionality such as game loop manager, graphics and audio managers, game objects, and 2D physics."}})],1),r("div",{staticClass:"box8"},[r("projBox",{staticClass:"Doll",attrs:{title:"Russian Doll Generator",description:"Utilized paramterized procedural\r\n      generation to create a customizable Russian Doll set generator! Completed during the last half of Procjam 2019."}})],1)])])},y=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mainBox",on:{mouseenter:e.addOverlay,mouseleave:e.removeOverlay}},[r("h2",[e._v(e._s(e.title))]),r("div",{attrs:{id:"descriptionBox"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}]},[e._v(e._s(e.description))])])])},k=[],x=(r("6762"),r("2fdb"),{data:function(){return{showDescription:!1}},props:{title:String,subtitle:String,description:String},methods:{addOverlay:function(){for(var e=document.getElementsByClassName("mainBox"),t=0;t<e.length;t++)this.title.includes(e[t].classList[1])&&e[t].classList.add("mainBoxHover");this.showDescription=!0},removeOverlay:function(){for(var e=document.getElementsByClassName("mainBox"),t=0;t<e.length;t++)e[t].classList.remove("mainBoxHover");this.showDescription=!1}}}),C=x,P=(r("0438"),Object(u["a"])(C,_,k,!1,null,null,null)),j=P.exports,D={name:"work",components:{projBox:j},methods:{}},I=D,E=(r("4af3"),Object(u["a"])(I,b,y,!1,null,"9dfeb4b6",null)),M=E.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"resumePage"}},[r("div",{attrs:{id:"embeddedResume"}},[r("iframe",{attrs:{src:"https://docs.google.com/document/d/e/2PACX-1vSuf7rry0ZI7hufHn9V_83tidC0aPPV6W7xoeSSEEKh-E54O5_Qsbuym5eesxTqzWTaib338ml0mtYU/pub?embedded=true",height:"1000px",width:"60%"}})])])}],S={name:"resume",methods:{}},W=S,A=(r("b608"),Object(u["a"])(W,O,B,!1,null,"e1be0b1c",null)),$=A.exports,R={name:"app",components:{aboutMe:h,myFooter:w,work:M,resume:$},data:function(){return{showAbout:!1,showWork:!1,showMain:!0,showResume:!1}},methods:{showAboutPage:function(){this.showAbout=!0,this.showWork=!1,this.showMain=!1,this.showResume=!1},showWorkPage:function(){this.showWork=!0,this.showMain=!1,this.showAbout=!1,this.showResume=!1},showMainPage:function(){this.showMain=!0,this.showWork=!1,this.showAbout=!1,this.showResume=!1},showResumePage:function(){this.showResume=!0,this.showWork=!1,this.showAbout=!1,this.showMain=!1}}},T=R,U=(r("034f"),Object(u["a"])(T,o,n,!1,null,null,null)),F=U.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(F)}}).$mount("#app")},"64a9":function(e,t,r){},"751f":function(e,t,r){"use strict";var a=r("4e81"),o=r.n(a);o.a},a056:function(e,t,r){"use strict";var a=r("3796"),o=r.n(a);o.a},a79e:function(e,t,r){e.exports=r.p+"img/linkedin.4b475fb3.svg"},b608:function(e,t,r){"use strict";var a=r("2fa2"),o=r.n(a);o.a}});
//# sourceMappingURL=app.6f9cbd87.js.map