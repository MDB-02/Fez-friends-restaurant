
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    const icons = document.querySelector('.icons');
    icons.style.display = 'none';
}

function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    const icons = document.querySelector('.icons');
    icons.style.display = 'flex';
}




function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value
    };
  const templateID = "template_cdcg0xk";
  const serviceID = "service_s202wyj";
emailjs.send(serviceID, templateID, params)
.then(res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully!");
    })
.catch(err=>console.log(err));
}


  


