webpackJsonp([1,0],[function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var n=s(6),a=e(n),c=s(3),o=e(c);new a.default({el:"#app",template:"<App/>",components:{App:o.default}})},function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"app",data:function(){return{msg:"Welcome to Your Vue.js App",isFixed:!1,menuIndex:0,menuList:[],indexHeight:[0]}},created:function(){this.menuList=data.menuList},mounted:function(){var t=this;new Swiper(".swiper-container",{loop:!0,direction:"horizontal",speed:500,autoplay:5e3,autoplayDisableOnInteraction:!1,pagination:".swiper-pagination",paginationClickable:!0});for(var i=1;i<=this.menuList.length;i++){var s=document.getElementById(i.toString());this.indexHeight.push(s.offsetTop-60)}window.onscroll=function(){var i=document.documentElement.scrollTop||document.body.scrollTop;i>=115?t.isFixed=!0:t.isFixed=!1;for(var s=0;s<t.indexHeight.length;s++)i>=t.indexHeight[s]&&i<t.indexHeight[s+1]&&(t.menuIndex=s),i>=t.indexHeight[s]&&(t.menuIndex=s)}},methods:{menuEvent:function(t){var i=document.getElementById(t.toString());0===t?$.scrollTo(0,600,{axis:"y"}):$.scrollTo(i.offsetTop-60,600,{axis:"y"})},location:function(t){t.site||t.href&&window.open(t.href)},officeSitEvent:function(t,i){i?window.open(t.site.model):""!==t.site.official&&window.open(t.site.official)}}}},function(t,i){},function(t,i,s){s(2);var e=s(4)(s(1),s(5),"data-v-58663a66",null);t.exports=e.exports},,function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"index-box"},[s("div",{staticClass:"header"},[t._m(0),t._v(" "),s("div",{staticClass:"box2",class:{fixed:t.isFixed}},[s("div",{staticClass:"bb"},[s("div",{staticClass:"menu"},[s("div",{staticClass:"a",class:{active:0===t.menuIndex},on:{click:function(i){t.menuEvent(0)}}},[s("span",{staticClass:"title"},[t._v("网站首页")]),t._v(" "),s("span",{staticClass:"english"},[t._v("Home")])]),t._v(" "),t._l(t.menuList,function(i,e){return s("div",{staticClass:"a",class:{active:e+1===t.menuIndex},on:{click:function(i){t.menuEvent(e+1)}}},[s("span",{staticClass:"title"},[t._v(t._s(i.text))]),t._v(" "),s("span",{staticClass:"english"},[t._v(t._s(i.english))])])})],2)])])]),t._v(" "),t._m(1),t._v(" "),t._l(t.menuList,function(i,e){return s("div",{staticClass:"kuai-box",class:{bgfff:e%2===1},attrs:{id:e+1}},[s("div",{staticClass:"kuai-main"},[s("h3",[t._v(t._s(i.text))]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(i.desc))]),t._v(" "),s("div",{staticClass:"list"},[t._l(i.items,function(i,n){return s("div",{staticClass:"item",class:{nom:(n+1)%3===0},on:{click:function(s){t.location(i)}}},[s("div",{staticClass:"shadow"}),t._v(" "),s("div",{staticClass:"img-box"},[s("img",{class:{img:1===e},attrs:{src:i.img}}),t._v(" "),s("div",{staticClass:"imgma-box",attrs:{if:"item.imgma"}},[s("img",{staticClass:"imgma",attrs:{src:i.imgma}})])]),t._v(" "),s("div",{class:{descinfo1:1===e,descinfo:1!==e}},[s("div",{staticClass:"a-box"},[s("h6",[t._v(t._s(i.title))]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(i.time))]),t._v(" "),s("p",{class:{height:0===e},attrs:{title:i.content}},[t._v(t._s(i.content))]),t._v(" "),0===e?s("div",{staticClass:"button"},[s("div",{staticClass:"btn",on:{click:function(s){t.officeSitEvent(i,!1)}}},[t._v("查看[官网]")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(s){t.officeSitEvent(i,!0)}}},[t._v("查看[模仿]")])]):t._e()])])])}),t._v(" "),s("div",{staticClass:"kong"})],2)]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"70px"}})])}),t._v(" "),t._m(2)],2)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box1"},[s("div",{staticClass:"logo"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"banner"},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide bg1"},[t._v("这世上最快的捷径就是脚踏实地")]),t._v(" "),s("div",{staticClass:"swiper-slide bg2"},[t._v("笔耕不掇，天道酬勤")]),t._v(" "),s("div",{staticClass:"swiper-slide bg3"},[t._v("十年磨一剑，一朝试锋芒")])]),t._v(" "),s("div",{staticClass:"swiper-pagination"})])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"footer"},[s("div",{staticClass:"bo"},[t._v("划船不用浆，一生全靠浪！")])])}]}}]);
//# sourceMappingURL=app.edaff9e53aa4ab4508ff.js.map