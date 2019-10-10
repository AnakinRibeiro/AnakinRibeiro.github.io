// Script para colocar borda azul nos itens do menu
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Script para mudar a cor e padding da navbar quando o scroll passar da section landing
(function() {
  var menu = document.getElementById('menu'); // colocar em cache
  window.addEventListener('scroll', function() {
    if (window.scrollY > 600) {
      menu.classList.add('menuFixo');
      document.getElementById('navbtn').style.color = 'black';
    } else {
      menu.classList.remove('menuFixo');
      document.getElementById('navbtn').style.color = 'white';
    }
  });
})();

// Script para mostrar o menu mobile
function openNav() {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('navbtn').style.display = 'none';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('navbtn').style.display = 'flex';
  document.getElementById('navbtn').style.flexDirection = 'row-reverse';
}
