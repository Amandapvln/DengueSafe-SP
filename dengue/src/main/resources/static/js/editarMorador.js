const formMorador = document.getElementById('formMorador');
const urlParams = new URLSearchParams(window.location.search);
const idMorador = urlParams.get('id');

if (idMorador) {
    fetch(`/api/moradores/${idMorador}`)
        .then(response => response.json())
        .then(morador => {
            document.getElementById('idMorador').value = morador.idMorador;
            document.getElementById('nome').value = morador.nome;
            document.getElementById('email').value = morador.email;
            document.getElementById('telefone').value = morador.telefone;
            document.getElementById('endereco').value = morador.endereco;
            document.getElementById('bairro').value = morador.bairro;
            document.getElementById('regiao').value = morador.regiao;
        })
        .catch(error => console.error('Erro:', error));
}

formMorador.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formMorador);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch(`/api/moradores/${idMorador}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
        alert('Morador atualizado com sucesso!');
        window.location.href = '/moradores.html';
    })
    .catch(error => console.error('Erro:', error));
});

