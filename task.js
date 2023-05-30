const adsElements = document.querySelectorAll('.rotator__case')


function changeAds(adsElements)  {
    const currentElement = document.querySelector('.rotator__case.rotator__case_active');
    adsElements.forEach(element => {
        element.classList.remove('rotator__case_active');
    });

    let nextElement = currentElement.nextElementSibling
    if (nextElement === null) {
        nextElement = currentElement.parentNode.firstElementChild
      };
    
    nextElement.style.color = nextElement.getAttribute('data-color');
    nextElement.classList.add('rotator__case_active');
    return document.querySelector('.rotator__case.rotator__case_active').getAttribute('data-speed');
}

function endlessAds () {
    interval = changeAds(adsElements);
    setTimeout(endlessAds, interval);
}

endlessAds();

