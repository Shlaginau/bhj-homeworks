
const bookSize = document.querySelector('.book');
const controlSize = Array.from(document.querySelectorAll('.font-size'));


controlSize.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    bookSize.classList.remove('book_fs-big', 'book_fs-small');
    controlSize.forEach(s => s.classList.remove('font-size_active'));
    item.classList.add('font-size_active');

    const fontSize = item.dataset.size;
    if (fontSize === 'big') {
      bookSize.classList.add('book_fs-big');
    } else if (fontSize === 'small') {
      bookSize.classList.add('book_fs-small');
    }
  });
});
