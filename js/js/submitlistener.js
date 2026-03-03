const form = document.querySelector('#submitForm');

const submit = document.querySelector('.submitit');
const details = document.querySelector('.details');
const fname = document.querySelector('.fname');
const email = document.querySelector('.email');
const msg = document.querySelector('.msg');

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(event);
    details.style.display = 'block';
    fname.textContent = `${form[0].value}`;
    email.textContent = `${form[1].value}`;
    msg.textContent = `${form[2].value}`;
    
})