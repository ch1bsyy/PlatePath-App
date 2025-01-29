const DrawerInitiator = {
  init({ menuButton, drawer }) {
    menuButton.addEventListener('click', (event) => {
      event.stopPropagation();
      drawer.classList.toggle('nav--open');
    });

    document.addEventListener('click', (event) => {
      if (!drawer.contains(event.target) && event.target !== menuButton) {
        drawer.classList.remove('nav--open');
      }
    });
  },
};

export default DrawerInitiator;
