// navbar drop down logic or javascript
document.getElementById('btn-message').addEventListener('click', function(event) {
    event.stopPropagation();
    document.getElementById('profileDropdown').classList.toggle('show');
  });

  window.onclick = function(event) {
    if (!event.target.matches('#btn-message')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }