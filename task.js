const revealBlocks = document.querySelectorAll('.reveal')

const isInView = (element) => {
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

window.addEventListener('scroll', function() {
        revealBlocks.forEach(element => {
            if (isInView(element)) {
                element.classList.add('reveal_active')
            } else {element.classList.remove('reveal_active')}
      });
  });