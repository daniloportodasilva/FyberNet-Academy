const usuarios = [
    {
        usuario: "antonio",
        senha: "123456",
        nome: "Antonio Danilo",
        setor: "suporte"
    },

    {
        usuario: "aluno",
        senha: "123456",
        nome: "Aluno Teste",
        setor: "suporte"
    }
];


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuarioDigitado =
        document.getElementById("usuario").value.trim();

    const senhaDigitada =
        document.getElementById("senha").value.trim();

    const usuarioEncontrado = usuarios.find(function(usuario) {

        return (
            usuario.usuario === usuarioDigitado &&
            usuario.senha === senhaDigitada
        );

    });


    if (usuarioEncontrado) {

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuarioEncontrado)
        );

        window.location.href = "home.html";

    } else {

        document.getElementById("loginErro").textContent =
            "Usuário ou senha inválidos.";

    }

});
