import modal from './modules/modal';
import validate from './modules/validate';
import scroll from './modules/scroll';
import topSlider from './modules/topSlider';
import carousel from './modules/carousel';
import accordeon from './modules/accordeon';
import sendForm from './modules/sendForm';


modal();
validate();
scroll();
topSlider();
carousel();
accordeon();
sendForm({ formId: 'form-callback'});