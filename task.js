const sizeButtons = document.querySelectorAll('.font-size')
const bookDiv = document.querySelector('.book')

sizeButtons.forEach(element => {
    element.addEventListener('click', (event) => {

        sizeButtons.forEach(element => {
            element.classList.remove('font-size_active')
        });

        event.preventDefault();
        element.classList.add('font-size_active');

        const fontAttribute = element.getAttribute('data-size');
        if (fontAttribute) {
            bookDiv.classList.remove('book_fs-small', 'book_fs-big');
            bookDiv.classList.add('book_fs-' + fontAttribute);
        } else {bookDiv.classList.remove('book_fs-small', 'book_fs-big')}
    });
});