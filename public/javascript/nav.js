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



  // signup page java script : 
  function toggleRMPFields() {
    var isDoctor = document.getElementById("isDoctor").value;
    var rmpFields = document.getElementById("rmpFields");

    if (isDoctor === "yes") {
        rmpFields.style.display = "block";
    } else {
        rmpFields.style.display = "none";
    }
}

function toggleRMPFields() {
  const isDoctor = document.getElementById('isDoctor').value;
  const rmpFields = document.getElementById('rmpFields');
  const rmpImage = document.getElementById('rmpImage');
  const rmpNumber = document.getElementById('rmpNumber');

  if (isDoctor === 'yes') {
      rmpFields.style.display = 'block';
      rmpImage.required = true;
      rmpNumber.required = true;
  } else {
      rmpFields.style.display = 'none';
      rmpImage.required = false;
      rmpNumber.required = false;
  }
}