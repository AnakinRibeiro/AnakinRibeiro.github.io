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

(function() {
  var menu = document.getElementById('menu'); // colocar em cache
  window.addEventListener('scroll', function() {
    if (window.scrollY > 600) menu.classList.add('menuFixo');
    // > 0 ou outro valor desejado
    else menu.classList.remove('menuFixo');
  });
})();
