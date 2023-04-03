function sendMail() {
    var params = {
      from_name: document.getElementById("fullname").value,
      email_id: document.getElementById("email_id").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    };
    const serviceID = "service_kpv0e5j";
    const templateID = "template_j0gwj2m";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("fullname").value = "";
          document.getElementById("email_id").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  