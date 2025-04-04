document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error");

  if (username === "admin" && password === "admin123") {
    // Redireciona se o login for bem-sucedido
    window.location.href = "redirect.html";
  } else {
    // Mostra erro se o login falhar
    errorMessage.textContent = "Usuário ou senha incorretos.";
  }
});
