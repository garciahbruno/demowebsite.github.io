function sendMail(){
  let parms = {
    name : document.getElementbyId("demo-name").value,
    email : document.getElementbyId("demo-email").value,
    message : document.getElementbyId("demo-message").value,
  }
  emailjs.send("service_0f734hc","template_fzlymrv",parms).then(alert("Email Sent!!"))
}
