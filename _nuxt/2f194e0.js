(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,16],{249:function(n,e,t){var content=t(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("695c1cfc",content,!0,{sourceMap:!1})},250:function(n,e,t){"use strict";t.r(e);t(251);var r=t(18),component=Object(r.a)({},(function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("div",{attrs:{id:"dottedbackground"}})])}],!1,null,"6f6dd507",null);e.default=component.exports},251:function(n,e,t){"use strict";t(249)},252:function(n,e,t){var r=t(36)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n#dottedbackground[data-v-6f6dd507]{\n  background:linear-gradient(90deg,var(--background)21px,transparent 1%) 50%,linear-gradient(var(--background)21px,transparent 1%) 50%,#d1c5f3;\n  background-size:22px 22px;\n  position:absolute;\n  width:100%;\n  height:100%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},256:function(n,e,t){var content=t(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("7897e710",content,!0,{sourceMap:!1})},273:function(n,e,t){n.exports=t.p+"img/coding-laptop-min.74b3f45.jpeg"},274:function(n,e,t){"use strict";t(256)},275:function(n,e,t){var r=t(36)((function(i){return i[1]}));r.push([n.i,'/*purgecss start ignore*/\n.portfolio-container{\n  position:relative;\n  color:#fff;\n  padding:.5rem 8rem\n}\n.wrapper{\n  display:grid;\n  grid-template-columns:repeat(4,2fr);\n  grid-auto-rows:18rem;\n  gap:10px;\n  margin:.2rem;\n  min-height:100vh\n}\n@media screen and (max-width:769px){\n.wrapper{\n    grid-template-columns:repeat(2,1fr)\n}\n}\n@media only screen and (max-device-width:480px){\n.wrapper{\n    grid-template-columns:repeat(1,1fr)\n}\n}\n.css-grid{\n  border-radius:10px;\n  position:relative;\n  background:rgba(248,248,250,.6509803921568628)\n}\n.card-overlay{\n  position:absolute;\n  height:100%;\n  width:100%;\n  background:#2d61f2;\n  background:linear-gradient(90deg,rgba(45,98,242,.479) 7%,rgba(174,78,230,.76) 90%);\n  transform:translateX(-18rem);\n  transition:all .3s ease-in;\n  opacity:0;\n  z-index:-2\n}\n.css-grid:hover .card-overlay{\n  transform:translateX(0);\n  opacity:1;\n  z-index:1\n}\n.card-wrapper{\n  display:block\n}\n.card-image img{\n  border-radius:10px\n}\n.card{\n  background:#f092f0;\n  position:relative\n}\n#dotted-background{\n  position:relative;\n  width:100%;\n  height:100%;\n  overflow:hidden;\n  z-index:10\n}\n.portfolio-section{\n  background-color:#2d262e;\n  background:linear-gradient(90deg,var(--background) 21px,transparent 1%) 50%,linear-gradient(var(--background) 21px,transparent 1%) 50%,#d1c5f3;\n  background-size:22px 22px\n}\n.project-wrapper{\n  display:flex;\n  flex-wrap:wrap;\n  height:100%;\n  justify-content:center;\n  align-items:center;\n  padding:1rem auto\n}\n.project-div{\n  position:relative;\n  box-shadow:4px 13px 24px 10px rgba(75,72,72,.479);\n  margin:.8rem 1rem;\n  z-index:8;\n  background:transparent;\n  -webkit-animation:skewed 3.25s infinite;\n          animation:skewed 3.25s infinite;\n  transition:margin 1s linear\n}\n.project{\n  min-width:15rem;\n  position:relative;\n  text-align:center;\n  min-height:20rem\n}\n.project:after,.project:before{\n  content:"";\n  width:100%;\n  height:100%;\n  position:absolute;\n  transition:.3s linear\n}\n.project:before{\n  top:3%;\n  left:3%;\n  border:3px solid #bec6f0\n}\n.project:before,.project:hover:before{\n  content:"";\n  width:100%;\n  height:100%;\n  z-index:-3\n}\n.project:hover:before{\n  top:-4%;\n  left:-4%;\n  border:3px solid #f8f8fa\n}\n.project:after{\n  top:-3%;\n  left:-3%;\n  z-index:-3;\n  background-color:rgba(222,126,251,.5803921568627451)\n}\n.project:after,.project:hover:after{\n  content:"";\n  width:100%;\n  height:100%;\n  position:absolute\n}\n.project:hover:after{\n  top:4%;\n  left:4%;\n  z-index:1;\n  background-color:transparent;\n  border:3px solid #fff\n}\n.item{\n  width:100%;\n  height:22rem;\n  position:relative;\n  box-shadow:4px 13px 14px 10px rgba(0,0,0,.5);\n  background-color:#f092f0;\n  background-image:linear-gradient(0deg,#f092f0,#97d9e1)\n}\n.project:hover .item{\n  cursor:pointer;\n  z-index:10;\n  color:#fff;\n  position:relative;\n  box-shadow:4px 8px 26px 6px rgba(245,242,242,.863);\n  overflow:hidden;\n  z-index:9\n}\n@-webkit-keyframes slidebg{\nto{\n    background-position:20vw\n}\n}\n@keyframes slidebg{\nto{\n    background-position:20vw\n}\n}\n@-webkit-keyframes slidein{\n0%{\n    transform:translateX(-20rem)\n}\nto{\n    transform:translateX(20rem)\n}\n}\n@keyframes slidein{\n0%{\n    transform:translateX(-20rem)\n}\nto{\n    transform:translateX(20rem)\n}\n}\n@-webkit-keyframes skewed{\n0%{\n    transform:skewY(-2deg)\n}\n50%{\n    transform:skewY(2deg)\n}\nto{\n    transform:skewY(-2deg)\n}\n}\n@keyframes skewed{\n0%{\n    transform:skewY(-2deg)\n}\n50%{\n    transform:skewY(2deg)\n}\nto{\n    transform:skewY(-2deg)\n}\n}\n\n/*purgecss end ignore*/',""]),r.locals={},n.exports=r},302:function(n,e,t){"use strict";t.r(e);var r=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"section-title"},[t("h1",{staticClass:"title"},[n._v("Hello title")])])},function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"wrapper",staticStyle:{"background-image":"url('~/assets/coding-laptop-min.jpeg')"}},[r("div",{staticClass:"css-grid"},[r("div",{staticClass:"card-overlay"}),n._v(" "),r("div",{staticClass:"card-wrapper"},[r("div",{staticClass:"car-image"},[r("img",{staticClass:"card-image",attrs:{src:t(273),alt:""}})]),n._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h1",[n._v("Hello")])]),n._v(" "),r("div",{staticClass:"card-body"})])])]),n._v(" "),r("div",{staticClass:"css-grid"},[n._v("Two")]),n._v(" "),r("div",{staticClass:"css-grid"},[n._v("Three")]),n._v(" "),r("div",{staticClass:"css-grid"},[n._v("Four")]),n._v(" "),r("div",{staticClass:"css-grid"},[n._v("Five")]),n._v(" "),r("div",{staticClass:"css-grid"},[n._v("Six")]),n._v(" "),r("div",{staticClass:"css-grid"},[n._v("Seven")]),n._v(" "),r("div",{staticClass:"css-grid"},[n._v("Eight")])])}],o={components:{DottedBackground:t(250).default},transition:{name:"portfolio",mode:"out-in"}},d=(t(274),t(18)),component=Object(d.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"portfolio-section min-h-screen p-6 w-full"},[t("div",{staticClass:"section portfolio-container"},[t("div",{attrs:{id:"dotted-background"}},[t("dotted-background")],1),n._v(" "),n._m(0),n._v(" "),n._m(1)])])}),r,!1,null,null,null);e.default=component.exports}}]);