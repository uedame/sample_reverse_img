let py = 0;
section_top_array = [];
// const section_top = document.getElementById("")
const section = document.querySelectorAll("section");
console.log(section);
section.forEach((data) => {
		// section要素の上部の位置から100px上の位置を追加、、わかりずらかったらごめん
	section_top_array.push(data.offsetTop-100);
})

console.log(section_top_array);

// var rect = section_top1.getBoundingClientRect();
//addEventListener("scroll")でスクロール時のイベント取得
window.addEventListener("scroll", () => {
	// ページ上部のＹ値を取得
	py = window.pageYOffset;


	let m = 0;
	while (m < section.length) {
		// ページ上部のＹ値とsection要素のY値を比較
		if (section_top_array[m] <= py) {
			if (m % 2 == 0) {
				section[m].classList.add('rightOpen')
			} else {
				section[m].classList.add('leftOpen')
			}
		}

		if (section_top_array[m] >= py) {
			if (m % 2 == 0) {
				section[m].classList.remove('rightOpen')
			} else {
				section[m].classList.remove('leftOpen')
			}
		}
		m++
	}
})