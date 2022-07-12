const modal = () => {

  const modalCallback = document.querySelector('.modal-callback');
  const modalClose = document.querySelector('.modal-close > img');
  const modalOverlay = document.querySelector('.modal-overlay');
  const callbackBtn = document.querySelectorAll('.callback-btn');
  const body = document.querySelector('body');

  callbackBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';
    });
  });
  body.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close > img')){
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }

  });
  
};

export default modal;