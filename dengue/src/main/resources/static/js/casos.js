// Busca a tabela de casos
const table = document.querySelector('table');

// Requisição GET para listar todos os casos
fetch('/api/casos')
    .then(response => response.json())
    .then(data => {
        data.forEach(caso => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${caso.idCaso}</td>
                <td>${caso.dataRegistro}</td>
                <td>${caso.status}</td>
                <td>${caso.sintomas}</td>
                <td>${caso.tratamento}</td>
                <td>${caso.latitude}</td>
                <td>${caso.longitude}</td>
                <td>${caso.bairro}</td>
                <td>${caso.regiao}</td>
                <td>
                    <a href="/editarCaso.html?id=${caso.idCaso}">Editar</a>
                    <a href="#" onclick="deleteCaso(${caso.idCaso})">Excluir</a>
                </td>
            `;
            table.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro:', error));

// Função para deletar caso
function deleteCaso(idCaso) {
    if (confirm('Tem certeza que deseja excluir este caso?')) {
        fetch(`/api/casos/${idCaso}`, {
            method: 'DELETE'
        })
        .then(() => location.reload())
        .catch(error => console.error('Erro ao excluir caso:', error));
    }
}
