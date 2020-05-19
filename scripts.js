const price = document.querySelector("#price");
const qty = document.querySelector("#qty");
const total = document.querySelector("#total");

function changeTotal(price, qty) {
	total.value = Number(price) * Number(qty);
	total.value = (Math.round(total.value * 100) / 100).toFixed(2);
}

price.addEventListener("keyup", (e) => {
	changeTotal(price.value, qty.value);
});

qty.addEventListener("keyup", () => {
	qty.value = String(Math.floor(Number(qty.value)));
	changeTotal(price.value, qty.value);
});

// Limit number of periods to one
price.addEventListener("keydown", (e) => {
	if (price.value.includes(".") && (e.keyCode === 190 || e.keyCode === 110)) {
		e.preventDefault();
	}
});
