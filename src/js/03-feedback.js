import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const local = 'feedback-form-state';

const newLocal = throttle(() => {
  const client = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(local, JSON.stringify(client));
}, 500);

form.addEventListener('input', newLocal);

const savedClient = JSON.parse(localStorage.getItem(local));
if (savedClient) {
  emailInput.value = savedClient.email;
  messageInput.value = savedClient.message;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const client = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.removeItem(local);
  emailInput.value = '';
  messageInput.value = '';
  console.log(client);
});
