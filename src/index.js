import modal from './modules/modal';
import validate from './modules/validate';
import sendForm from './modules/sendForm';
import scroll from './modules/scroll';
import topSlider from './modules/topSlider';
import carousel from './modules/carousel';
import accordeon from './modules/accordeon';



modal();
validate();
sendForm({ formId: 'form-callback',
someElem: [
  {
    type: 'block',
    id: 'total'
  }
]
});
scroll();
topSlider();
carousel();
accordeon();