const body = document.querySelector('body');
const switcher = document.querySelector("#theme-switch-toggle");
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switcher.addEventListener('change',  onChangeTheme);

function  onChangeTheme({ target }) {
    const { checked } = target
   
    if (checked) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem("theme", Theme.DARK);
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem("theme", Theme.LIGHT);
    }
    
    
    // const theme = checked ? Theme.DARK : Theme.LIGHT;
    // localStorage.setItem("theme", theme);
}

function getCurrentTheme() {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {switcher.checked = selectedTheme === Theme.DARK}
    return selectedTheme ? selectedTheme : Theme.LIGHT;
}

// function initTheme() {  }

const theme = getCurrentTheme();
body.classList.add(theme)