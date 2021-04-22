//responzivni nav

function responseNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// funkce pro schovani menu

function hide() {
  var topNav = document.querySelector('#myTopnav');
  topNav.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      topNav.classList.remove('responsive');
    }
  });
}

