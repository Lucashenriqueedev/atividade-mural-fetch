const botao = document.querySelector("#btn-carregar");
const filtro = document.querySelector("#filtro");
const mensagem = document.querySelector("#mensagem");
const painel = document.querySelector("#lista-posts");

const url = "https://jsonplaceholder.typicode.com/posts?_limit=6";
let publicacoes = [];

function renderizarPublicacoes(lista) {
  painel.replaceChildren();

  lista.forEach((publicacao) => {
    const cartao = document.createElement("article");
    cartao.className = "cartao";

    const numero = document.createElement("p");
    numero.className = "numero";
    numero.textContent = `Publicação #${publicacao.id}`;

    const titulo = document.createElement("h2");
    titulo.textContent = publicacao.title;

    const texto = document.createElement("p");
    texto.textContent = publicacao.body;

    cartao.append(numero, titulo, texto);
    painel.append(cartao);
  });
}

function carregarPublicacoes() {
  mensagem.className = "carregando";
  mensagem.textContent = "Carregando publicações...";
  botao.disabled = true;
  filtro.disabled = true;

  fetch(url)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }

      return resposta.json();
    })
    .then((dados) => {
      publicacoes = dados;
      filtro.value = "";
      renderizarPublicacoes(publicacoes);
      mensagem.className = "";
      mensagem.textContent = "";
      filtro.disabled = false;
    })
    .catch((erro) => {
      console.error(erro);
      publicacoes = [];
      renderizarPublicacoes([]);
      mensagem.className = "erro";
      mensagem.textContent =
        "Não foi possível carregar as publicações. Tente novamente.";
    })
    .finally(() => {
      botao.disabled = false;
    });
}

botao.addEventListener("click", carregarPublicacoes);

filtro.addEventListener("input", () => {
  const termo = filtro.value.trim().toLowerCase();
  const encontradas = publicacoes.filter((publicacao) =>
    publicacao.title.toLowerCase().includes(termo)
  );

  renderizarPublicacoes(encontradas);

  mensagem.textContent = encontradas.length === 0
    ? "Nenhuma publicação encontrada."
    : "";
});