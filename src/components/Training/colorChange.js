export default function  colorChange() {
	let items = document.getElementsByClassName("background-change");
	for (let i = 0; i < items.length; i++) {
		let el = items[i];
		if (el.id % 2 == 0) {
			el.style.backgroundColor = "lightgrey";
		}
	}
};
