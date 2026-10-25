# Portfólio do Professor Jeovanne Freire

Site responsivo feito com **HTML, CSS e JavaScript puro**, pronto para abrir no Visual Studio Code.

## Como abrir no VS Code

1. Extraia o arquivo ZIP para uma pasta no computador.
2. Abra o Visual Studio Code e selecione **Arquivo → Abrir Pasta**.
3. Selecione a pasta `portfolio_professor`.
4. Abra `index.html` no navegador. Para facilitar a pré-visualização, você pode usar a extensão **Live Server** no VS Code e clicar em **Go Live**.

O projeto não precisa de Node.js, npm ou etapa de compilação. As fontes do Google Fonts precisam de conexão com a internet; se estiver offline, o site usa fontes alternativas locais.

## Personalizações importantes

- **Foto:** substitua `assets/foto-professor.png`, mantendo o mesmo nome de arquivo, ou altere o caminho da imagem em `index.html`.
- **Nome e apresentação:** edite os textos em `index.html`.
- **E-mail do formulário:** abra `script.js` e substitua `seu-email@exemplo.com` na variável `CONTACT_EMAIL` pelo seu endereço. O formulário apenas abre o aplicativo de e-mail do visitante com a mensagem preenchida; ele não envia dados para um servidor.
- **Cores e estilo:** ajuste as variáveis CSS no início de `style.css`.
- **Componentes curriculares:** edite os cartões em `index.html`. Os termos no atributo `data-search` ajudam a busca a encontrar conteúdos relacionados.

## Recursos incluídos

- Layout adaptável para computador, tablet e celular.
- Menu compacto para dispositivos móveis.
- Tema escuro e claro com alternância manual.
- Busca instantânea entre os 10 componentes curriculares.
- Animações discretas de entrada, com respeito à preferência por movimento reduzido.
- Formulário de contato com validação no navegador e geração de e-mail.
- Boas práticas básicas de acessibilidade e HTML semântico.

## Componentes curriculares incluídos

1. Programação Front End
2. Programação Back End
3. Modelagem de Software
4. Banco de Dados
5. Sistemas Operacionais
6. Montagem e Manutenção de Computadores
7. Arquitetura de Computadores
8. Qualidade e Teste de Software
9. Desenvolvimento de Projeto de Sistema
10. Segurança da Informação
