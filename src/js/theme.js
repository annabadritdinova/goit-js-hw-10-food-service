const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitchButton = document.querySelector('.theme-switch__toggle');
const setTheme = localStorage.getItem('theme');

body.classList.add(Theme.LIGHT);

if (setTheme === Theme.DARK) {
  body.classList.replace(Theme.LIGHT, Theme.DARK)
  themeSwitchButton.setAttribute('checked', 'checked');
} 

function changeColor() {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('theme', body.getAttribute('class'));
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT)
    localStorage.setItem('theme', body.getAttribute('class'));
  }
}
themeSwitchButton.addEventListener('click', changeColor);
