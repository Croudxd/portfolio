
window.onload = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') lightMode();
  if (theme === 'dark') darkMode();
};


function darkMode()
{
    document.documentElement.style.setProperty('--background-color', '#181C14');
    document.documentElement.style.setProperty('--font-color', '#FFFF');
    localStorage.setItem('theme', 'light');
}


// background-color: #FFFF;
//   color: #181C14;
//   accent-color: #181818;

function lightMode()
{
    document.documentElement.style.setProperty('--background-color', '#FFFF');
    document.documentElement.style.setProperty('--font-color', '#181C14');
    localStorage.setItem('theme', 'light');
}