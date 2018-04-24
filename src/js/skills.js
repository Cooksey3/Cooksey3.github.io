const skills = document.querySelector('.items')
const other = document.querySelector('.container-home')

function toggleColor(event) {
	if (event.target === skills) {
		skills.style.backgroundColor = 'red';
	}
	// if (event.target !== skills) {
	// 	skills.style.backgroundColor = 'white';
	// }
}

skills.addEventListener('mouseover', toggleColor);
other.addEventListener('mouseover', toggleColor)