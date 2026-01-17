document.getElementById('toggleBtn').addEventListener('click', function () {
const text = document.getElementById('extraText');


if (text.style.display === 'none' || text.style.display === '') {
text.style.display = 'block';
this.textContent = 'Show Less';
} else {
text.style.display = 'none';
this.textContent = 'Show More';
}
});
