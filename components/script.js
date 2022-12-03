const btnMobile = document.getElementById('btn-mobile');


function toggleMenu() {
  const nav = document.getElementById('nav');
  const butao = document.getElementById('icone-menu')

  nav.classList.toggle('active');


  if (nav.classList == 'active') {
    butao.setAttribute('name', 'x')
  } else {
    butao.setAttribute('name', 'menu')
  }

}

btnMobile.addEventListener('click', toggleMenu);


