var resultadoIdioma = localStorage.getItem("idiomaX");

window.onload = (event) => {

    if (resultadoIdioma == "") {

        var lang = navigator.language;
        var reducidoIdioma = lang.split("-");

        localStorage.setItem("idiomaX", reducidoIdioma[0]);

        resultadoIdioma = localStorage.getItem("idiomaX");

    } else if (resultadoIdioma == "es") {

        document.querySelectorAll(".eng").forEach((el) => {
            el.classList.add('d-none');
        });
        document.querySelectorAll(".esp").forEach((el) => {
            el.classList.remove('d-none');
        });

        localStorage.setItem("idiomaX", "es");

    } else if (resultadoIdioma == "en") {

        document.querySelectorAll(".esp").forEach((el) => {
            el.classList.add('d-none');
        });
        document.querySelectorAll(".eng").forEach((el) => {
            el.classList.remove('d-none');
        });

        localStorage.setItem("idiomaX", "en");

    }

}

function enviarMail() {

    if (document.getElementById("validationCustom01").value != "" && document.getElementById("InputEmail1").value != "" &&
        document.getElementById("Textarea1").value != "") {
        if (document.getElementById("defaultCheck1").checked == true) {
            if (document.getElementById("inputPhone").value != "" && document.getElementById("inputTime").value != "") {
                document.getElementById("myForm").submit();
                document.getElementById("myForm").reset();
                document.getElementById("myForm").classList.add("d-none");
                document.getElementById("sentSuccess").classList.remove("d-none");
            }
        } else {
            document.getElementById("myForm").submit();
            document.getElementById("myForm").reset();
            document.getElementById("myForm").classList.add("d-none");
            document.getElementById("sentSuccess").classList.remove("d-none");
        }

    } else {
        document.getElementById("myForm").classList.add("was-validated");
    }

}

function clearForm() {
    document.getElementById("myForm").reset();
    document.getElementById("sentSuccess").classList.add("d-none");
    document.getElementById("myForm").classList.remove("d-none");
    document.getElementById("myForm").classList.remove("was-validated");
}

document.addEventListener("DOMContentLoaded", function(event) {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

function translate() {
    if (resultadoIdioma == "en") {

        document.querySelectorAll(".eng").forEach((el) => {
            el.classList.add('d-none');
        });
        document.querySelectorAll(".esp").forEach((el) => {
            el.classList.remove('d-none');
        });

        resultadoIdioma = "es";
        localStorage.setItem("idiomaX", "es");

    } else {

        document.querySelectorAll(".esp").forEach((el) => {
            el.classList.add('d-none');
        });
        document.querySelectorAll(".eng").forEach((el) => {
            el.classList.remove('d-none');
        });

        resultadoIdioma = "en";
        localStorage.setItem("idiomaX", "en");

    }
}

function galAll() {

    document.querySelectorAll(".gal1").forEach((el) => {
        el.classList.remove('d-none');
    });
    document.querySelectorAll(".gal0").forEach((el) => {
        el.classList.remove('d-none');
    });

}

function gal1() {

    document.querySelectorAll(".gal1").forEach((el) => {
        el.classList.remove('d-none');
    });
    document.querySelectorAll(".gal0").forEach((el) => {
        el.classList.add('d-none');
    });

}

function gal0() {

    document.querySelectorAll(".gal0").forEach((el) => {
        el.classList.remove('d-none');
    });
    document.querySelectorAll(".gal1").forEach((el) => {
        el.classList.add('d-none');
    });

}