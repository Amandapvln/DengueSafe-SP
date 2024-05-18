// Busca a tabela de moradores
const table = document.querySelector('table');

// Requisição GET para listar todos os moradores
fetch('/api/moradores')
    .then(response => response.json())
    .then(data => {
        data.forEach(morador => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${morador.idMorador}</td>
                <td>${morador.nome}</td>
                <td>${morador.email}</td>
                <td>${morador.telefone}</td>
                <td>${morador.endereco}</td>
                <td>${morador.bairro}</td>
                <td>${morador.regiao}</td>
                <td>
                    <a href="/editarMorador.html?id=${morador.idMorador}">Editar</a>
                    <a href="#" onclick="deleteMorador(${morador.idMorador})">Excluir</a>
                </td>
            `;
            table.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro:', error));

// Função para deletar morador
function deleteMorador(idMorador) {
    if (confirm('Tem certeza que deseja excluir este morador?')) {
        fetch(`/api/moradores/${idMorador}`, {
            method: 'DELETE'
        })
        .then(() => location.reload())
        .catch(error => console.error('Erro ao excluir morador:', error));
    }
}
