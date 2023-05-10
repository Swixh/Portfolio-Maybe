const eyes = document.querySelectorAll('.eyes');
const darkEyes = document.getElementById('dark-eye');
const lightEyes = document.getElementById('light-eye');

if (document.documentElement.getAttribute('data-theme') === 'dark') {
  darkEyes.classList.toggle('hidden');
} else {
  lightEyes.classList.toggle('hidden');
}

eyes.forEach((eye) => {
  eye.addEventListener('click', () => {
    // start eye is has no hidden class
    // so if we click on it it should add the class hidden and remove the eye that has the hidden class already
    if (eye.id === 'dark-eye') {
      darkEyes.classList.toggle('hidden');
      lightEyes.classList.remove('hidden');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      lightEyes.classList.toggle('hidden');
      darkEyes.classList.remove('hidden');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
});
