function showForm(){
  document.querySelector('.hidden').style.display="inline";
}

var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var userName = document.querySelector('#userName');

document.querySelector('form.hidden').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(firstName.value);
    console.log(lastName.value);
    console.log(userName.value);
});
