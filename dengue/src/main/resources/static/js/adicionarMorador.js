const formMorador = document.getElementById('formMorador');

formMorador.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formMorador);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/api/moradores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
        alert('Morador adicionado com sucesso!');
        window.location.href = '/moradores.html';
    })
    .catch(error => console.error('Erro:', error));
});
