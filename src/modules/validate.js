const validate = () => {
const input = document.querySelectorAll('.form-control');

  input.forEach(i => {
    if(i.name == 'fio'){
      i.classList.add('fio-form');
    }
    if(i.classList.contains('fio-form')) {
      i.addEventListener('input', (e)=> {
        console.log(e.target);
        e.target.value = e.target.value.replace(/[^а-яё\ \s]/i, '');

        if (e.target.value != '') {
          e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        }
        
      });
    }
  });

  
};

export default validate;