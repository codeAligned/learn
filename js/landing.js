"use strict"; var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } function detectmob() { if (window.innerWidth < 1024 && window.innerHeight < 800) { return true; } else { return false; } } if (detectmob()) { document.querySelector(".beoncomp").style.display = "flex"; document.querySelectorAll(".row")[1].style.display = "none"; document.querySelectorAll(".expand")[1].style.display = "none"; } var Menu=(function () { function Menu() { _classCallCheck(this, Menu); this.state = false; this.toggle = document.getElementById("menu-toggle"); this.links = document.querySelectorAll("nav ul a"); this.ul = document.querySelector("nav ul"); this.open = this.open.bind(this); this.close = this.close.bind(this); this.swap = this.swap.bind(this); this._addEventListeners(); } _createClass(Menu, [{ key: "_addEventListeners", value: function _addEventListeners() { var _this=this; this.links.forEach(function (l) { return l.addEventListener("click", _this.close); }); this.toggle.addEventListener("click", this.swap); window.addEventListener("scroll", this.close); window.addEventListener("resize", this.close); } }, { key: "open", value: function open() { this.ul.classList.add("active"); this.state = true; } }, { key: "close", value: function close() { this.ul.classList.remove("active"); this.state = false; } }, { key: "swap", value: function swap() { if (this.state == true) this.close();else if (this.state == false) this.open(); } }]); return Menu; })(); var m=new Menu(); var Expand=(function () { function Expand() { _classCallCheck(this, Expand); this.state = false; this.toggles = document.querySelectorAll(".expand> .more"); var noob=document.querySelectorAll(".noob > *"); var js=document.querySelectorAll(".js > *"); var noobItems = []; for (var i = 0; i < noob.length - 8; i++) { noobItems.push(noob[i + 8]); } var jsItems = []; for (var i = 0; i < js.length - 8; i++) { jsItems.push(js[i + 8]); } this.sections = [noobItems, jsItems]; this.hide({ id: 0 }); this.hide({ id: 1 }); this._addEventListeners(); } _createClass(Expand, [{ key: "_addEventListeners", value: function _addEventListeners() { for (var i = 0; i < this.toggles.length; i++) { this.toggles[i].addEventListener("click", function (ev) { return e.toggle(ev.currentTarget); }); } } }, { key: "hide", value: function hide(el) { this.sections[el.id].forEach(function (el) { el.style.display = "none"; }); el.innerHTML = "More <i class=\"material-icons\">expand_more</i>"; this.state = false; } }, { key: "show", value: function show(el) { this.sections[el.id].forEach(function (el) { el.style.display = "block"; }); el.innerHTML = "Less <i class=\"material-icons\">expand_less</i>"; this.state = true; } }, { key: "toggle", value: function toggle(el) { if (this.state == true) this.hide(el);else if (this.state == false) this.show(el); } }]); return Expand; })(); var e=new Expand(); var Done=(function () { function Done() { _classCallCheck(this, Done); if (!localStorage.getItem("CrypTools Learn Done")) { this.init(); } } _createClass(Done, [{ key: "init", value: function init() { localStorage.setItem("CrypTools Learn Done", JSON.stringify({ noob: [], js: [] })); } }, { key: "get", value: function get() { var str=localStorage.getItem("CrypTools Learn Done"); return JSON.parse(str); } }, { key: "addNoob", value: function addNoob() { var _json$noob; var json=this.get(); (_json$noob = json.noob).push.apply(_json$noob, arguments); localStorage.setItem("CrypTools Learn Done", JSON.stringify(json)); } }, { key: "addJS", value: function addJS() { var _json$js; var json=this.get(); (_json$js = json.js).push.apply(_json$js, arguments); localStorage.setItem("CrypTools Learn Done", JSON.stringify(json)); } }, { key: "isDone", value: function isDone(id, name) { return this.get()[id].includes(name); } }]); return Done; })(); var done=new Done(); document.querySelectorAll(".row > a").forEach(function (el) { el.addEventListener("click", function (e) { e.preventDefault(); localStorage.setItem("CrypToolsLearn", el.hash); window.open(el.href, "_self"); }); }); /* Done */ document.querySelectorAll(".js > a").forEach(function (el) { if (done.isDone("js", el.id)) { el.querySelector(".done").style.opacity = 1; } var width=done.get().js.length / document.querySelectorAll(".js > a").length * 100; document.querySelectorAll(".progress")[1].style.width = "calc(" + width + "% - 20px)"; }); document.querySelectorAll(".noob > a").forEach(function (el) { if (done.isDone("noob", el.id)) { el.querySelector(".done").style.opacity = 1; } var width=done.get().noob.length / document.querySelectorAll(".noob > a").length * 100; document.querySelectorAll(".progress")[0].style.width = "calc(" + width + "% - 20px)"; });