const button = document.querySelector('#participate');
const confirmation = document.querySelector('#confirmation');

button.addEventListener('click', () => {
  confirmation.textContent = 'Merci ! Votre demande de participation est prise en compte. Ceci est une démonstration.';
});
