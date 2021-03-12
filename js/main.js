const inputs = document.querySelectorAll('.form__input');
const phoneLink = document.querySelectorAll('.header__phone');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

function phoneDel() {
  let screenWidth = screen.width;
  let phoneText = phoneLink;
  if (screenWidth < 729) {
    phoneText.innerText = '';
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

phoneLink.forEach((link) => {
  link.addEventListener('beforeunload', phoneDel);
})



