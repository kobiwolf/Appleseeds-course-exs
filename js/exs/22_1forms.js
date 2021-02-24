let but = document.querySelector('button');
let form = document.querySelector('form');
function confirmation(event) {
  event.preventDefault();
  confirm(`ARE YOU SURE THESE YOUR DETAIL
    ${form.name.value} ${form.age.value} ${form.email.value}`)
    ? form.submit()
    : console.log('try again');
}
but.addEventListener('click', confirmation);
