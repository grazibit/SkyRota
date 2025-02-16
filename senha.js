//mecanismo pra visualizar a senha
function togglePassword() {
    let senhaInput = document.getElementById("senha");
    let icon = document.querySelector(".toggle-password");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        senhaInput.type = "password";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    }
}