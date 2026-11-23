# Meu Mural de Publicações

## Objetivo

Criar uma página com HTML, CSS e JavaScript puro que consulta a API
JSONPlaceholder e exibe seis publicações. Cada cartão mostra o ID, o título
e o texto da publicação. A página também permite filtrar os posts pelo título.

## Como executar

1. Baixe os arquivos do repositório e mantenha todos na mesma pasta.
2. Abra o arquivo `index.html` no navegador. É preciso ter acesso à internet
   para consultar a API.
3. Clique em **Carregar publicações**.
4. Digite uma palavra no campo de busca para filtrar os títulos.

## Perguntas da atividade

### 1. O que é uma API e por que usamos fetch()?

Uma API define como um programa pode pedir dados ou usar recursos de outro
serviço. Neste projeto, usamos `fetch()` para fazer uma requisição HTTP e
buscar as publicações na API JSONPlaceholder.

### 2. Qual é o papel de resposta.json()?

O método `resposta.json()` lê o corpo da resposta e converte o JSON em valores
que o JavaScript consegue usar. Neste projeto, o resultado é um array de
publicações.

### 3. Qual é a diferença entre filtrar o array e fazer uma nova requisição?

Filtrar o array é pesquisar nos dados que já foram carregados. Uma nova
requisição envia outro pedido ao servidor pela internet.