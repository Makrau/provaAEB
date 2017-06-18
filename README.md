# provaAEB
Projeto utilizando Angular 4

Para a realização deste projeto e aprendizado de Angular, foi seguido o tutorial proposto pelo próprio Angular, disponível em: https://angular.io/tutorial

Durante a execução do tutorial foram sendo realizadas adaptações para em vez de usar os "Heróis" proposto pelo tutorial, foram usados Usuários, que é o objetivo da implementação deste trabalho.

Alguns elementos foram explorados a mais com relação ao tutorial. Todos os códigos que ficavam nas variáveis "templates" dos components foram removidos e colocados em arquivos htmls, que se localizavam dentro de uma pasta chamada "view", e o template foi mudado para templateUrl para poder referenciar esses arquivos. Isso melhorou a legibilidade do código html, além de melhorar a organização dos arquivos, juntando todas as views em uma única pasta. O mesmo foi feito com os css.

Contudo, a aplicação ainda apresenta problemas para executar os métodos POST, PUT e DELETE com a API disponibilizada. Assim, para testar esse métodos foram utilizados uma api _mockup_. O código desta está em uma branch separada, visto que existem algumas pequenas adaptações necessárias para fazer ela funcionar.

Foi implementado também uma aba de busca de usuário por nome, contudo atualmente ela só funciona para os usuários mockup.