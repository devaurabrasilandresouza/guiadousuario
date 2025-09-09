
# Projeto Avarias – Guia do Operador


**Versão:** v1.0.0 (alpha)
**Autor:** Andre Rodrigues de Deus Souza 
**Email:**`andre.souza@aurabrasil.com.br`
**Data de criação:** 29/07/2025
**Última atualização:** 08/09/2025


Este projeto é um sistema web responsivo para consulta, cadastro e orientação de operadores de equipamentos, desenvolvido em HTML, CSS e JavaScript puro.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Estrutura das Telas

- **cadastro.html**: Tela inicial de cadastro do usuário, empresa e localização via GPS. Após o envio, os dados são enviados por e-mail e o usuário é redirecionado para a tela principal.
- **index.html**: Tela principal com logo, fundo personalizado e três botões para acessar as áreas do sistema.
- **avaria.html**: Consulta interativa de avarias comuns, separadas por categoria. O usuário clica nos botões para visualizar os detalhes de cada tipo.
- **manuais.html**: Seleção de tipo e modelo de equipamento. Disponibiliza o download do manual PDF correspondente ao modelo escolhido (os PDFs devem ser adicionados na pasta `pdfs/`).
- **responsabilidades.html**: Lista visual das principais responsabilidades do operador, com explicações detalhadas.
- **solicitar-manutencao.html**: Tela para solicitação de manutenção, com envio dos dados do usuário para uma conta `Netlify`.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Funcionalidades

- **Responsividade:** Todas as telas se adaptam para uso em celulares, tablets e desktops.
- **Cadastro com GPS:** O usuário informa nome, empresa e permite acesso à localização. Os dados são enviados por e-mail (mailto) para o responsável.
- **Navegação intuitiva:** Botões com ícones, efeitos de hover e layout centralizado.
- **Consulta de avarias:** Botões interativos mostram informações detalhadas por categoria.
- **Download de manuais:** Seleção dinâmica de tipo/modelo, com download do PDF correto (os arquivos devem estar na pasta `pdfs/`).
- **Solicitação de manutenção:** Envio de solicitação de manutenção para uma conta `Netlify`.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Como usar

1. Abra o arquivo `cadastro.html` para iniciar o cadastro.
2. Após o cadastro, navegue pelas telas usando os botões.
3. Para adicionar manuais, crie a pasta `pdfs/` na raiz do projeto, coloque os arquivos PDF nela e ajuste os nomes conforme o objeto `modelosPorTipo` em `script.js`.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Personalização

- Para alterar o e-mail de destino do cadastro, edite o arquivo `script.js` na função responsável pelo envio (procure por `mailto`).
- Para trocar imagens, altere os links das logos e ícones nos arquivos HTML.
- Para adicionar ou remover modelos/tipos de equipamentos, edite o objeto `modelosPorTipo` em `script.js`.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Observações

- O envio de e-mail depende do cliente de e-mail do usuário (mailto).
- O acesso ao GPS requer permissão do navegador.
- O projeto não utiliza frameworks, facilitando a manutenção e personalização.
- Para funcionamento completo dos manuais, crie a pasta `pdfs/` e adicione os arquivos necessários.


Desenvolvido para facilitar a operação, consulta e segurança dos usuários de equipamentos.

Copyright © 2025 AURABRASIL MÁQUINAS E EQUIPAMENTOS
