this.contactModal = document.querySelector('#contact_modal');

function stringIsValidName(string) {
  return string
    .match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
}

// take a string
// check if the string is a mail
function stringIsMail(string) {
  return string
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// eslint-disable-next-line no-unused-vars
function displayContactModal() {
  this.contactModal.style.display = 'block';
}

// close modal form
// eslint-disable-next-line no-unused-vars
function closeContactModal() {
  this.contactModal.style.display = 'none';
}

// eslint-disable-next-line no-unused-vars
function submitContactForm(element) {
  const firstName = element.querySelector('#first_name').value;
  const lastName = element.querySelector('#last_name').value;
  const mail = element.querySelector('#mail').value;
  const message = element.querySelector('#message').value;

  if (!stringIsValidName(firstName) || !stringIsValidName(lastName) || !stringIsMail(mail)
    || firstName < 2 || lastName < 2 || mail < 2 || message < 2) {
    return false;
  }

  // eslint-disable-next-line no-param-reassign
  element.querySelector('#id').value = this.id;
  console.log(firstName);
  console.log(lastName);
  console.log(mail);
  console.log(message);
  return true;
}

function initContact() {
  this.contactModal = document.querySelector('#contact_modal');
  this.contactModal.querySelectorAll('.modal_close').forEach(
    (element) => element.addEventListener('click', () => closeContactModal()),
  );
}

initContact();
