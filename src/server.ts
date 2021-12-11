import express from "express";

const app = express();

/* 
*GET - Buscar uma informação
*POST - Inserir (Criar) uma informação
*PUT - Alterar uma informação
*DELETE - remover um dado
*PATCH - Alterar uma informação especifica
*/
app.get('/test', (request, response) => {
  return response.send('Teste get')
})

app.post('/test-post', (request, response) => {
  return response.send('Teste post')
}
)

app.listen(3000, () => console.log('Server Run test'))



