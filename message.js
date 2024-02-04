console.log("hellllllllllo")
function sendemail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "aceestacy@gmail.com",
      Password : "6057DB168DE3D92D3D844C478E8862AAED7B",
      To : 'aceestacy@gmail.com',
      From : 'aceestacy@gmail.com',
      Subject : document.querySelector("#Subject").value,
      Body :document.querySelector("#companyname").value+" <br/>" +document.querySelector("#name").value +" <br/>" + document.querySelector("#email").value+" <br/>"+ document.querySelector("#message").value
  }).then(
    message => document.querySelector("#recive").innerHTML = "Thank you for getting in touch we will get back to you  "
  )};