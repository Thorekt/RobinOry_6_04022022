/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
class ContactForm {
  constructor(idPhotographer) {
    this.contactModal = document.querySelector('#contact_modal');
    this.contactModal.querySelectorAll('.modal_close').forEach(
      (element) => element.addEventListener('click', () => this.closeContactModal()),
    );
    document.querySelector('.contact_button').addEventListener('click', () => this.displayContactModal());
    const form = this.contactModal.querySelector('form');
    form.querySelector('#id').value = idPhotographer;
    form.addEventListener('submit', () => {
      const submit = this.submitContactForm(form);
      if (!submit) {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
      }
    }, false);
  }

  // eslint-disable-next-line class-methods-use-this
  stringIsValidName(string) {
    return string
      .match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
  }

  // take a string
  // check if the string is a mail
  // eslint-disable-next-line class-methods-use-this
  stringIsMail(string) {
    return string
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  displayContactModal() {
    this.contactModal.style.display = 'block';
  }

  // close modal form
  closeContactModal() {
    this.contactModal.style.display = 'none';
  }

  // eslint-disable-next-line no-unused-vars
  submitContactForm(element) {
    const firstName = element.querySelector('#first_name').value;
    const lastName = element.querySelector('#last_name').value;
    const mail = element.querySelector('#mail').value;
    const message = element.querySelector('#message').value;

    if (!this.stringIsValidName(firstName) || !this.stringIsValidName(lastName)
      || !this.stringIsMail(mail) || firstName < 2 || lastName < 2
      || mail < 2 || message < 2) {
      return false;
    }
    console.log(firstName);
    console.log(lastName);
    console.log(mail);
    console.log(message);
    return true;
  }
}
