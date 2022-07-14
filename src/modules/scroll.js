
const scroll = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  const up = document.querySelector('.up');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.up');
    scroll.classList.toggle('active-up', window.scrollY>500);
  });
};

export default scroll;