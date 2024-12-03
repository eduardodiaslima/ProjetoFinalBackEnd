async function carregarFilmes() {
    const url = "https://app-avaliacao-brh0avd2ahegehac.brazilsouth-01.azurewebsites.net/projeto1/fecaf/listar/filmes";

    try {
        const response = await fetch(url);
        const data = await response.json();
        const container = document.querySelector('.cards');
        container.innerHTML = '';

        if (data.filmes && data.filmes.length > 0) {
            data.filmes.forEach(filme => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${filme.image}" alt="${filme.nome}" class="card-image">
                    <div class="card-content">
                        <h3>${filme.nome}</h3>
                        <p><strong>Preço:</strong> R$ ${filme.valor}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p>Nenhum filme encontrado.</p>';
        }
    } catch (error) {
        console.error("Erro ao carregar os filmes:", error);
    }
}

document.addEventListener('DOMContentLoaded', carregarFilmes);