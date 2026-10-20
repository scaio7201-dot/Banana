const recoveryForm = document.querySelector("[data-recovery-form]");

if (recoveryForm) {
    const options = recoveryForm.querySelectorAll('input[name="metodo"]');
    const panels = recoveryForm.querySelectorAll("[data-method-panel]");

    const updateMethod = () => {
        const selected = recoveryForm.querySelector('input[name="metodo"]:checked');

        panels.forEach((panel) => {
            const active = panel.dataset.methodPanel === selected.value;
            panel.hidden = !active;
            panel.querySelectorAll("input").forEach((input) => {
                input.disabled = !active;
            });
        });
    };

    options.forEach((option) => option.addEventListener("change", updateMethod));
    updateMethod();

    recoveryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        recoveryForm.querySelector(".form-message").textContent =
            "Protótipo visual: conecte o serviço de autenticação para enviar o código.";
    });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.querySelector(".form-message").textContent =
            "Protótipo visual: conecte o serviço de autenticação para validar o acesso.";
    });
});
