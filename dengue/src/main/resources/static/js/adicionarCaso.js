const formCaso = document.getElementById('formCaso');

formCaso.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formCaso);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/api/casos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
        alert('Caso adicionado com sucesso!');
        window.location.href = '/casos.html';
    })
    .catch(error => console.error('Erro:', error));
});
