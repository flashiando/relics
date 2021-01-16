function showContent() {
    element = document.getElementById("datosTelefono");
    check = document.getElementById("defaultCheck1");
    if (check.checked) {
        element.classList.remove("d-none");
    } else {
        element.classList.add("d-none");
    }
}

function enviarMail() {
    if (document.getElementById("validationCustom01").value != "" && document.getElementById("exampleInputEmail1").value != "" &&
        document.getElementById("Textarea1").value != "" && document.getElementById("validationCustom02").value != "") {
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