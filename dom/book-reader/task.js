
const font_size = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

function reset_font_size() {
  font_size.forEach(font_size  => {
    font_size.classList.remove('font-size_active')
  });
}

font_size.forEach(font_size => {

  font_size.addEventListener('click', e => {
    e.preventDefault();

    console.log(font_size);
    console.log('click');
    book.classList.remove('book_fs-big')
    book.classList.remove('book_fs-small')

    if (font_size.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small')
    }

    if (font_size.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big')
    }
    reset_font_size();
    font_size.classList.add('font-size_active')
  });
});
