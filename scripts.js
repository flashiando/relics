// sin usar por ahora si no se usa borrar

function showContent() {
    element = document.getElementById("datosTelefono");
    check = document.getElementById("defaultCheck1");
    if (check.checked) {
        element.classList.remove("d-none");
    } else {
        element.classList.add("d-none");
    }
}

//sin usar por ahora si no se usa borrar

function enviarMail() {
    if (document.getElementById("validationCustom01").value != "" && document.getElementById("InputEmail1").value != "" &&
        document.getElementById("Textarea1").value != "") {
        if (document.getElementById("defaultCheck1").checked == true) {
            if (document.getElementById("inputPhone").value != "" && document.getElementById("inputTime").value != "") {
                document.getElementById("myForm").submit();
                document.getElementById("myForm").reset();
                document.getElementById("myForm").classList.add("d-none");
                document.getElementById("sentSuccess").classList.remove("d-none");
                showContent();
            }
        } else {
            document.getElementById("myForm").submit();
            document.getElementById("myForm").reset();
            document.getElementById("myForm").classList.add("d-none");
            document.getElementById("sentSuccess").classList.remove("d-none");
            showContent();
        }

    } else {
        document.getElementById("myForm").classList.add("was-validated");
    }
}

function clearForm() {
    document.getElementById("myForm").reset();
    showContent();
    document.getElementById("sentSuccess").classList.add("d-none");
    document.getElementById("myForm").classList.remove("d-none");
    document.getElementById("myForm").classList.remove("was-validated");
}

console.log("form ok");

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

console.log("popovers ok")

function translate() {

    document.querySelectorAll(".esp").forEach((el) => {
        el.classList.toggle('d-none');
    });
    document.querySelectorAll(".eng").forEach((el) => {
        el.classList.toggle('d-none');
    });

}

console.log("traducciones ok");