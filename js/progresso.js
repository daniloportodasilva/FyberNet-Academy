function calcularProgresso() {

    const aulas = [
        "aula1_concluida",
        "aula2_concluida",
        "aula3_concluida"
    ];


    let concluidas = 0;


    aulas.forEach(function(aula) {

        if (localStorage.getItem(aula)) {

            concluidas++;

        }

    });


    const percentual =
        Math.round(
            (concluidas / aulas.length) * 100
        );


    const barra =
        document.getElementById("barraProgresso");

    const texto =
        document.getElementById("progressoTexto");


    if (barra) {

        barra.style.width =
            percentual + "%";

    }


    if (texto) {

        texto.textContent =
            percentual + "%";

    }


    for (let i = 1; i <= 3; i++) {

        const status =
            document.getElementById("status" + i);


        if (
            status &&
            localStorage.getItem(
                "aula" + i + "_concluida"
            )
        ) {

            status.textContent = "✓";

            status.classList.add("completed");

        }

    }

}


calcularProgresso();
