// TODO:
// event listener for button click
// adds backdrop sibling element to dropdown
// event listener for click outside of dropdown to remove backdrop

const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownMenu = document.querySelector('#dropdown-menu');
const backdrop = document.querySelector('#dropdown-backdrop');

function enableBackdrop() {
	$('#dropdown-backdrop').toggleClass('show').css('display', 'block');
	$('#dropdown-menu').toggleClass('show').css('display', 'block');
}

function disableBackdrop() {
	$('#dropdown-backdrop').toggleClass('show').css('display', 'none');
	$('#dropdown-menu').toggleClass('show').css('display', 'none');
}

dropdownBtn.addEventListener('click', enableBackdrop);
backdrop.addEventListener('click', disableBackdrop);
