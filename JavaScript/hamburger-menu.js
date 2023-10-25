const toggleButton = document.getElementById('toggleButton');
const list = document.getElementById('list');

toggleButton.onclick = function() {
    list.style.display = (list.style.display === 'none') ? 'flex' : 'none';
};