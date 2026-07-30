function controlla() {
    let testo = document.getElementById("campo").value;

    if (testo === "Spolverone") {
        document.getElementById("risultato").innerText = "Hai indovinato!";
        coriandoli();
        vittoria();
        
    } else {
        document.getElementById("risultato").innerText = "Sbagliato! 🤡";
    }
}

function vittoria() {
    document.getElementById("vittoria").play();
}

function coriandoli() {
    for (let i = 0; i < 170; i++) {
        let c = document.createElement("div");
        c.className = "confetto";

        c.style.left = Math.random() * window.innerWidth + "px";
        c.style.top = Math.random() * window.innerHeight + "px";

        c.style.setProperty("--i", Math.random());

        let dx = (Math.random() - 0.5) * 500;
        let dy = (Math.random() - 0.5) * 300;

        c.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 2300,
            easing: "ease-out",
            fill: "forwards"
        });

        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2300);
    }
}

document.getElementById("inizioQuizBtn").addEventListener("click", function() {

    // suono
    document.getElementById("suonoInizio").play();

    // tutti gli elementi della schermata 1
    let elementi = document.querySelectorAll("#schermata1 *");

    // FASE 1: gli altri elementi escono normalmente
    elementi.forEach(el => {
        if (el.id !== "messaggioTransizione") {
            el.classList.add("esci-sinistra");
        }
    });

    // FASE 2: la scritta rallenta
    let scritta = document.getElementById("messaggioTransizione");
    scritta.style.display = "block";
    scritta.classList.add("scritta-lenta");

    // FASE 3: dopo 2.5s la scritta accelera
    setTimeout(() => {
        scritta.classList.remove("scritta-lenta");
        scritta.classList.add("scritta-veloce");
    }, 2500);

    // FASE 4: redirect dopo l’uscita veloce
    setTimeout(() => {
        window.location.href = "seconda.html";
    }, 3000);
});

