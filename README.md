Desafio

- Criar Usuário (Terá duas Permissões de Usuários > Comum e o Master)

- Cada Usuário poderá incluir cadastrar pacientes

- Cada Usuário poderá atualizar os dados do paciente 

- Cada Usuário poderá apagar os dados do paciente 

- Cada Usuário poderá incluir Evolução de Paciente

- Cada Paciente terá 3 estágios: Cancelado, Renunciado, Ativo

- Criar Filtro de Status dos Pacientes e Valor Total de Pacientes Cadastrados

- Criar Filtro para Pesquisar pelo Status e Data de Evolução de Paciente

- Criar Validação na Rota de DELETE, para apenas o "User Master" deletar pacientes

  -----

  

Desenvolver CRUD - Servidor (Node) e Banco de Dados (Mysql ou PostgreSQL) com às seguintes dependências:

- Adonis ou Express
-  JWT
-  Prisma ou Sequelize ou Type ORM 
-  Typescript (Opcional)
-  Mysql ou PostgreSQL
-  Joi (Opcional com Adonis)
-  Celebrate (Opcional com Adonis)
-  Axios

-----



(Fluxograma para Entendimento Referente à 1º Etapa). Cada Usuário ao Realizar o Login, deve conter "Email. Senha, ID e Tipo de Usuário: sendo eles (Usuário Comum e Usuário Master)"

![etapa 1](https://user-images.githubusercontent.com/53840467/145675722-629e9de8-0e26-4ba7-bf85-e0320ffaafe4.png)

1º Etapa - Login com JTW (Expirar Token Após 1 hora)

![Backend-1](https://user-images.githubusercontent.com/53840467/145675711-b3eb1d29-e361-4f80-852a-34ff16985e39.png)



(Fluxograma para Entendimento Referente à 2º Etapa). Cadastro para os Seguintes Campos. Contendo o 1 dos 3 Status do Paciente. E o ID do Usuário que Cadastrou o paciente.



2º Etapa - Criar Cadastro de Paciente (POST)



![backend-2](https://user-images.githubusercontent.com/53840467/145675742-84175dd0-866a-4546-b325-59ea4a9dfef8.png)



(Fluxograma para Entendimento Referente à 3º Etapa). Atualização dos Seguintes Campos Logo Abaixo. Adicionando o Usuário Responsável que Atualizou as Informações, e Adicionar a Descrição da Atualização

![etapa 2](https://user-images.githubusercontent.com/53840467/145675780-eafce6e0-f2fc-4164-9221-1949c6551af1.png)

3º Etapa - Criar Atualização de Paciente (PUT)



![backend-3](https://user-images.githubusercontent.com/53840467/145675743-c2bb895e-ec3d-449a-96c2-c3428c8b91c8.png)



4º Etapa - Deletar Pacientes (DELETE)

![backend-4](https://user-images.githubusercontent.com/53840467/145675744-196537a1-1cb1-4e80-b2b8-a9f0e0f5b4dc.png)



(Fluxograma para Entendimento Referente à 5º Etapa). Especificação da tarefa logo abaixo. Cada Usuário poderá fazer a Evolução de um Paciente, contendo os seguintes campos abaixo: Descrição, ID do Usuário, Data da Evolução



![Teste2](https://user-images.githubusercontent.com/53840467/145675782-fb9ad5fb-a252-41a8-9d66-10dc07d74a2b.jpeg)



5º Etapa - Incluir Evolução de Pacientes (POST)

![Backend-5](https://user-images.githubusercontent.com/53840467/145675746-5f416c6f-bc87-4ffa-90f6-9434dfd90c45.jpeg)

6º Etapa - Realizar Filtros de Pacientes (Ativos, Renunciados e Cancelados)

![backend-6](https://user-images.githubusercontent.com/53840467/145675745-046d1f32-abe5-4c6f-b17b-a3f36e7a7754.png)

​	

7º Etapa - Realizar Filtro com (Valor: Valor de Todos os Pacientes Cadastrados, Valor de Todas as Evoluções dos Pacientes Cadastradas, Valor de Todos os Usuários Criados)

![Teste3](https://user-images.githubusercontent.com/53840467/145675783-26830b93-6c55-491b-98af-9cb1c9f1aeff.jpeg)



8º Etapa - Criar Validações nas Rotas *

- [ ] Criar Validação na Rota de DELETE, para apenas o "User Master" deletar pacientes



Não Será necessário Frontend - Realizar o Video Explicativo com Alguma plataforma para teste de API - (Postman, Insomnia e etc ) *

- [ ] Tarefa Completa

- [ ] Cadastro de Usuário

- [ ] Login

- [ ] Cadastro de Paciente

- [ ] Atualização de Paciente

- [ ] Filtro de Status

- [ ] Filtro de Pacientes Cadastrados

- [ ] Validação para DELETE

- [ ] Incluir Evolução de Paciente

- [ ] Filtro Etapa 7

- [ ] Filtro Etapa 8

- [ ] Cadastro de Usuário

- [ ] Login

- [ ] Cadastro de Paciente

- [ ] Atualização de Paciente

- [ ] Filtro de Status

- [ ] Filtro de Pacientes Cadastrados

- [ ] Validação para DELETE
  
- [ ] Incluir Evolução de Paciente

- [ ] Filtro Etapa 7

- [ ] Filtro Etapa 8

Quilgo Submission ID (do not edit) *

⚠️ DO NOT EDIT this field or your time will not be recorded.

 9enbzPtc0zjPOBDN

---



[Instalação de Pacotes da aplicação no notion](https://indigo-hisser-408.notion.site/CRUD-SIP-c0ef411c038d44c9ba616924ae6251f0)



