// JS for Modal And BG Blur....
document.addEventListener('DOMContentLoaded', () => {
  // Set the scroll position to the top when the page loads (homepage)
  // window.removeEventListener('scroll', setActiveNavItem );
  window.scrollTo(0, 0);
});
var sendBtn = document.getElementById("sendBtn");
var contactForm = document.getElementById("contactFormShow");
var main = document.getElementById("main");
var submitBtn = document.getElementById("contactFormBtn");
var show = document.getElementById("contactModal");
var thanks = document.getElementById("thanksModal");
const navItems = document.querySelectorAll(".nav-items");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


function setActiveNavItem(){
  const section = document.querySelectorAll('section');
  const navItem = document.querySelectorAll('nav ul li a');

  const isAtTop = window.scrollY === 0;

  section.forEach((section, index) => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    if((isAtTop && index === 0) || window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      navItem[index].classList.add('checked');
    }
    else {
      navItem[index].classList.remove('checked');
    }
  });
}

function handleNavItemClicked(event){
  event.preventDefault();

  window.removeEventListener('scroll', setActiveNavItem );

  const targetSecId = event.target.getAttribute('href');
  const targetSec = document.querySelector(targetSecId);
  targetSec.scrollIntoView({ behavior : 'smooth'});

  const navItemAll = document.querySelectorAll('nav ul li a');
  navItemAll.forEach(navItem => {
    navItem.classList.remove('clicked-link','checked');
  });
  event.target.classList.add('clicked-link');

  // window.addEventListener('scroll', setActiveNavItem);
  setTimeout(() => {
    window.addEventListener('scroll', setActiveNavItem);
  }, 500);
}

const navItemAll = document.querySelectorAll('nav ul li a');
navItemAll.forEach(navItem => {
  navItem.addEventListener('click', handleNavItemClicked);
});

window.addEventListener('scroll', setActiveNavItem);

window.addEventListener('load', () => {
  const navItemAll = document.querySelectorAll('nav ul li a');
  navItemAll.forEach(navItem => {
    navItem.classList.remove('clicked-link','checked');
  });

  const heroNavItem = document.querySelector('nav ul li a[href="#heroSec"]');
  heroNavItem.classList.add('clicked-link','checked');
})

setActiveNavItem();




// For SIDEBARS Buttons....
document.querySelector(".ham").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  document.getElementById("ham").style.display = "none";
});

document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  document.getElementById("ham").style.display = "block";
});

// For MODAL And Back Ground Blur......
document.body.addEventListener("click", (event) => {
  if (event.target === sendBtn) {
    main.classList.add("blurStart");
    // contactForm.classList.add("visible");
    // contactForm.classList.add("open");
  }else if (!show.classList.contains("show")) {
      main.classList.remove("blurStart");
    }
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(item => {
      item.classList.remove('checked');
    });

    item.classList.add('checked');
  });
});


// scroll to top button 

let myButton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// For On Message Submit......
// function sendEmail() {
//   var fname = document.getElementById("firstName").value;
//   var lname = document.getElementById("lastName").value;
//   var emailS = document.getElementById("email").value;
//   var yourMessage = document.getElementById("yourMessage").value;
//   var body =
//     "Name: " +
//     fname +
//     " " +
//     lname +
//     "<br> Email Id: " +
//     emailS +
//     "<br> Message : " +
//     yourMessage;
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "dhruvkonwar95@gmail.com",
//     Password: "DF60E9E4C188AC0B1F53169EE91933E2AC09",
//     To: "dhruvkonwar95@gmail.com",
//     From: "http://127.0.0.1:5500/",
//     Subject: "New Mail",
//     Body: body,
//   }).then(message => alert(message));
// }
