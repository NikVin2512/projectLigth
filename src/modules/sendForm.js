'use strict';

const sendForm = ({formId}) => {
  const form = document.getElementById(formId);
  const btnCallback = document.getElementById('btn-callback');
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Выш запрос отправлен! Наш менеджер с вами свяжется!';


  const validate = (list) => {
    let success = true;

    list.forEach(input => {
      if(input.value.length >= 11 && input.name == 'tel') {
        success = true;
      } else {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body:  JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };
  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });


    if(validate(formElements)) {
      sendData(formBody)
        .then(date => {
          statusBlock.textContent = successText;

          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch(error => {
          statusBlock.textContent = successText;
        });
    } else {
      statusBlock.textContent = errorText;
      
    }
  };



  btnCallback.addEventListener('click', (e) => {
      e.preventDefault();
  
      submitForm();
    });

};

export default sendForm;