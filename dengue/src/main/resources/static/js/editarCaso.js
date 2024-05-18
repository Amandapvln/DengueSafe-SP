const formCaso = document.getElementById('formCaso');
const urlParams = new URLSearchParams(window.location.search);
const idCaso = urlParams.get('id');

if (idCaso) {
    fetch(`/api/casos/${idCaso}`)
        .then(response => response.json())
        .then(caso => {
            document.getElementById('idCaso').value = caso.idCaso;
            document.getElementById('dataRegistro').value = caso.dataRegistro;
            document.getElementById('status').value = caso.status;
            document.getElementById('sintomas').value = caso.sintomas;
            document.getElementById('tratamento').value = caso.tratamento;
            document.getElementById('latitude').value = caso.latitude;
            document.getElementById('longitude').value = caso.longitude;
            document.getElementById('bairro').value = caso.bairro;
            document.getElementById('regiao').value = caso.regiao;
        })
        .catch(error => console.error('Erro:', error));
}

formCaso.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formCaso);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch(`/api/casos/${idCaso}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
        alert('Caso atualizado com sucesso!');
        window.location.href = '/casos.html';
    })
    .catch(error => console.error('Erro:', error));
});
