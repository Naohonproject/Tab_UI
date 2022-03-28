/** @format */
// let $ = document.querySelector.bind(document);
// let $$ = document.querySelectorAll.bind(document);

const $ = (css, parent = document) => parent.querySelector(css);
const $$ = (css, parent = document) => Array.from(parent.querySelectorAll(css));

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");

const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
	const pane = panes[index];
	tab.onclick = function () {
		$(".tab-pane.active").classList.remove("active");
		$(".tab-item.active").classList.remove("active");
		this.classList.add("active");
		pane.classList.add("active");
		line.style.left = this.offsetLeft + "px";
		line.style.width = this.offsetWidth + "px";
	};
});
