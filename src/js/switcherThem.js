const body = document.querySelector('body');
const switcher = document.querySelector("#theme-switch-toggle");
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme

switcher.addEventListener('change',  onChangeTheme);

function  onChangeTheme({ target }) {
    const { checked } = target
   
    if (checked) {
        body.classList.replace(LIGHT, DARK);
        localStorage.setItem("theme", DARK);
    } else {
        body.classList.replace(DARK, LIGHT);
        localStorage.setItem("theme", LIGHT);
    }
    
    
    // const theme = checked ? Theme.DARK : Theme.LIGHT;
    // localStorage.setItem("theme", theme);
}

function getCurrentTheme() {
    const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme) {
    switcher.checked = selectedTheme === DARK
  }
    return selectedTheme ? selectedTheme : LIGHT;
}

// function initTheme() {  }

const theme = getCurrentTheme();
body.classList.add(theme)