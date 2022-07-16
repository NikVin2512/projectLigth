const accordeon = () => {
const accordeonItem = document.querySelectorAll('.accordeon-item');
const accordeon = document.querySelector('.accordeon');
const elementСontent = document.querySelectorAll('.accordeon-item .element-content');


  accordeonItem.forEach((item, i) => {

    item.addEventListener('click', () => {
      const elemActive = document.querySelectorAll('.accordeon-item.active');
      const elemBlock = document.querySelectorAll('.element-content.block');
      
      elemActive.forEach(elem => {
        elem.classList.remove('active');
      });
      elemBlock.forEach(block => {
        block.classList.remove('block');
      });

      if(!item.classList.contains('active')){
        elementСontent[i].classList.add('block');
        item.classList.add('active');
      } 
    });
  });

};

export default accordeon;