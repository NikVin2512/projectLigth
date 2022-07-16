const modal = () => {

  const modalCallback = document.querySelector('.modal-callback');
  const modalClose = document.querySelector('.modal-close > img');
  const modalOverlay = document.querySelector('.modal-overlay');
  const callbackBtn = document.querySelectorAll('.callback-btn');
  const buttonServices = document.querySelector('.button-services');
  const body = document.querySelector('body');
  const wrapper = document.querySelectorAll('.services-item  .img-wrapper');

  wrapper.forEach(btn => {
    btn.addEventListener('click', () => {
      modalBlock();
    });
  });

  const modalBlock = () => {
    modalCallback.style.display = 'block';
    modalOverlay.style.display = 'block';
  };

  callbackBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modalBlock();
    });
  });
  body.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('button-services')){
      modalBlock();
    }
    if(e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close > img')){
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }

  });
  
};

export default modal;