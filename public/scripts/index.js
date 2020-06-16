const inputNome = document.querySelector("#nomeid");
const btnEnviar = document.querySelector("#enviarid");


btnEnviar.addEventListener('click', () => {
    alert(`Obrigado sr(a) ${inputNome.value}, os seus dados foram encaminhados com sucesso!!!`)
})