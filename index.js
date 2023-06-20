const sideBar = document.getElementById('side-bar');
const sideBtn = document.getElementById('btn');
const content = document.querySelector('.content');

sideBtn.addEventListener('click', () => {
	sideBar.classList.toggle('active');
});

content.addEventListener('click', () => {
	sideBar.classList.remove('active');
});
