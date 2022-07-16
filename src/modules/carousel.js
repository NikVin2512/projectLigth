const carousel = () => {
  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 2;
  const servicesElements = document.querySelector('.services-elements');
  const servicesCarousel = document.querySelector('.services-carousel');
  const servicesItems = document.querySelectorAll('.services-item');
  const prev = document.querySelector('.arrow-left');
  const next = document.querySelector('.arrow-right');

  const itemWidth = servicesElements.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const itemCount = servicesItems.length;

  servicesItems.forEach(item => {
    item.style.minWidth = `${itemWidth}px`;
  });

  next.addEventListener('click', () => {
    const item = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= item >= slidesToScroll ? movePosition : item * itemWidth;

    setPosition();
    checkBtn();
  });

  prev.addEventListener('click', () => {
    const item = Math.abs(position) / itemWidth;

    position += item >= slidesToScroll ? movePosition : item * itemWidth;

    setPosition();
    checkBtn();
  });
  const setPosition = () => {
    servicesCarousel.style.transform = `translateX(${position}px)`;
  };

  const checkBtn = () => {
    prev.disabled = position === 0;
    // next.disabled = position <= -(item - slidesToShow) * itemWidth;
  };

  checkBtn();
  
};

export default carousel;