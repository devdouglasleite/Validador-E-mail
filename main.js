function validarEmail() {
    var input = document.getElementById("email");
    var email = input.value.trim();
  
    var resultado = document.getElementById("resultado");
  
    if (email === "") {
      resultado.innerText = "Por favor, digite um e-mail.";
      resultado.style.color = "red";
      resultado.style.display = "block";
    } else if (!validarFormatoEmail(email)) {
      resultado.innerText = "Por favor, digite um e-mail válido.";
      resultado.style.color = "red";
      resultado.style.display = "block";
    } else {
      resultado.innerText = "E-mail válido!";
      resultado.style.color = "#4CAF50";
      resultado.style.display = "block";
    }
  }
  
  function validarFormatoEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  