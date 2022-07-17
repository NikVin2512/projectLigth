const validate = () => {
const input = document.querySelectorAll('.form-control');

  input.forEach(i => {
    if(i.name == 'fio'){
      i.addEventListener('input', (e)=> {
        e.target.value = e.target.value.replace(/[^а-яё\ \s]/i, '');

        if (e.target.value != '') {
          e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        }
        
      });
    }
    if(i.name == 'tel'){
      i.addEventListener('input', (e) => {
        e.target.classList.remove('form-error');
        e.target.value = e.target.value.replace(/[^0-9-()\+\s]/, '');
        if(e.target.value.length < 11) {
          e.target.classList.add('form-error');
          return false;
        }
      });
    }

  });

  
};

export default validate;