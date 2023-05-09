const eyes = document.querySelectorAll('.eyes');

if (document.documentElement.getAttribute('data-theme') === 'dark') {
  // If dark theme is selected the show light eye to switch to light
  // vise versa
  // get
  const darkEyes = document.getElementById('dark-eye');
  darkEyes.classList.toggle('hidden');
} else {
  const lightEye = document.getElementById('light-eye');
  lightEye.classList.toggle('hidden');
}
const darkEye = document.getElementById('dark-eye');
const lightEye = document.getElementById('light-eye');
eyes.forEach((eye) => {
  eye.addEventListener('click', () => {
    // start eye is has no hidden class
    // so if we click on it it should add the class hidden and remove the eye that has the hidden class already
    if (eye.id === 'dark-eye') {
      darkEye.classList.toggle('hidden');
      lightEye.classList.remove('hidden');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      lightEye.classList.toggle('hidden');
      darkEye.classList.remove('hidden');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
});
