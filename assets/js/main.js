function openCity(evt, cityName) {
    // Declare all variables
    var tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function mostrar(event, elementId) {
  var i, buttoncontent, buttonlinks;
  buttoncontent = document.getElementsByClassName('buttoncontent');
  for(var i = 0 ; i < buttoncontent.length ; i++){
    buttoncontent[i].style.display = "none";
  }
  buttonlinks = document.getElementsByClassName('buttonlink');
  for(var i = 0 ; i < buttonlinks.length ; i++){
    buttonlinks[i].className =  buttonlinks[i].className.replace(" active", "");
  }
  document.getElementById(elementId).style.display = "block";
  event.currentTarget.className += " active";
  /*
  document.getElementById('all').style.display = "none";
  document.getElementById('physical').style.display = "none";
  document.getElementById('virtual').style.display = "none";
  document.getElementById(elementId).style.display = "block";*/
}
