//prevent refresh on submit

const button = document.querySelector('.submit_button');
const confirmMessage = document.getElementById('confirmal_message');
const errorMessage = document.getElementById('error_message');

button.addEventListener('click', (e) => {
  e.preventDefault();
  //disable button
  button.disabled = true;
  button.classList.add('after_submit_button');
});
//Sending email with emailjs
function sendMail() {
  //get all infos to send
  var params = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  let inputs = Object.values(params);
  let hasErrors = false;
  //check if any of inputs are empty
  inputs.forEach((input) => {
    if (input === '') {
      hasErrors = true;
    }
  });

  if (hasErrors === true) {
    errorMessage.classList.add('display');
    setTimeout(() => {
      errorMessage.classList.remove('display');
      button.disabled = false;
      button.classList.remove('after_submit_button');
    }, 2000);
  } else {
    //Send an actuall email
    emailjs
      .send('service_t3aw5v8', 'template_jzfnqbe', params)
      .then((res) => {
        console.log(res);
        //display confrim message
        confirmMessage.classList.add('display');
        //empty inputs
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        //enable button again
        button.disabled = false;
        button.classList.remove('after_submit_button');
        setTimeout(() => {
          confirmMessage.classList.remove('display');
        }, 2000);
      })
      .catch((err) => console.log(err));
  }
}
