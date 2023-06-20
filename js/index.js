// JS for Modal And BG Blur....
var sendBtn = document.getElementById("sendBtn");
var contactForm = document.getElementById("contactFormShow");
var main = document.getElementById("main");
var submitBtn = document.getElementById("contactFormBtn");
var show = document.getElementById("contactModal");
var thanks = document.getElementById("thanksModal");


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
