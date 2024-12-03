async function listarFilmes() {
    const url = "http://localhost:3000/films";
    const lista = document.getElementById("lista-filmes");

    try {
        const response = await fetch(url);
        const data = await response.json();
        lista.innerHTML = "";

        data.filmes.forEach((filme) => {
            const item = document.createElement("li");
            item.innerHTML = `
                <img src="${filme.image}" alt="${filme.nome}" width="100">
                <h3>${filme.nome}</h3>
                <p>${filme.sinopse}</p>
                <button onclick="editarFilme(${filme.id})">Editar</button>
                <button onclick="confirmarDelecao(${filme.id})">Deletar</button>
            `;
            lista.appendChild(item);
        });
    } catch (error) {
        alert("Erro ao carregar filmes.");
        console.error("Erro ao carregar filmes:", error);
    }
}

async function deletarFilme(id) {
    const url = `http://localhost:3000/films/${id}`;
    try {
        await fetch(url, { method: "DELETE" });
        alert("Registro excluído com sucesso!");
        listarFilmes();
    } catch (error) {
        alert("Erro ao excluir registro.");
        console.error("Erro ao deletar filme:", error);
    }
}

function confirmarDelecao(id) {
    const confirmacao = confirm("Deseja realmente excluir o registro?");
    if (confirmacao) {
        deletarFilme(id);
    }
}

function editarFilme(id) {
    window.location.href = `/put.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista-filmes");
    if (lista) {
        listarFilmes();
    }
});

document
    .getElementById("adicionar-filme-form")
    ?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const form = event.target;
        const filme = {
            nome: form.nome.value.trim(),
            sinopse: form.sinopse.value.trim(),
            image: form.image.value.trim(),
            valor: form.valor.value.trim(),
        };

        if (!filme.nome || !filme.sinopse || !filme.image || !filme.valor) {
            alert("Existem campos obrigatórios que não foram preenchidos.");
            return;
        }

        try {
            await fetch("http://localhost:3000/films", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(filme),
            });
            alert("Registro inserido com sucesso!");
            window.location.href = "/admin.html";
        } catch (error) {
            alert("Erro ao adicionar filme.");
            console.error("Erro ao adicionar filme:", error);
        }
    });

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const form = document.getElementById("editar-filme-form");

    if (form) {
        try {
            const response = await fetch(`http://localhost:3000/films${id}`);

            if (!response.ok) {
                throw new Error("Erro ao buscar o filme.");
            }

            const data = await response.json();
            const filme = data.filme[0];

            if (!filme) {
                throw new Error("Nenhum filme encontrado com o ID fornecido.");
            }

            console.log("Filme recebido:", filme);

            form.nome.value = filme.nome || "";
            form.sinopse.value = filme.sinopse || "";
            form.image.value = filme.image || "";
            form.valor.value = filme.valor || "";
        } catch (error) {
            alert("Erro ao carregar os dados do filme.");
            console.error("Erro ao carregar filme:", error);
        }
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const filmeAtualizado = {
            nome: form.nome.value.trim(),
            sinopse: form.sinopse.value.trim(),
            image: form.image.value.trim(),
            valor: form.valor.value.trim(),
        };

        if (
            !filmeAtualizado.nome ||
            !filmeAtualizado.sinopse ||
            !filmeAtualizado.image ||
            !filmeAtualizado.valor
        ) {
            alert("Existem campos obrigatórios que não foram preenchidos.");
            return;
        }

        try {
            await fetch(`http://localhost:3000/films${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(filmeAtualizado),
            });
            alert("Registro atualizado com sucesso!");
            window.location.href = "/admin.html";
        } catch (error) {
            alert("Erro ao atualizar registro.");
            console.error("Erro ao atualizar filme:", error);
        }
    });
});
