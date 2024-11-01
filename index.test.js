const request = require("supertest");
const app = require("./index"); 

describe('testar rotas da API', () => {


  test('testar a rota GET para retormar um indice ', async () => {
    const response = await request(app).get("/veiculo")
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  })

  test('testar a rota post', async () => {
    const response = await request(app).get('/veiculo/0');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('placa','ABC1D23' )
  })

  test('testar a rota post ', async () =>{

    const novoVeiculo = ( {
      "id": "2",
      "placa": "EFG2H23",
      "renavam": "23456789902",
      "modelo": "mustang",
      "marca": "ford",
      "ano": "2024"
    })
    const response = await request(app).post('/veiculo').send(novoVeiculo)
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining(novoVeiculo)]))

  })

  test("PUT /veiculo/:index - Deve atualizar um veículo específico", async () => {
    const veiculoAtualizado = {
      id: 1,
      placa: "ABC1D23",
      chassi: "9BWZZZ377VT004251",
      renavam: 12345678901,
      modelo: "GOL GT",
      marca: "VOLKSWAGEN",
      ano: 2020
    };

    const response = await request(app).put("/veiculo/0").send(veiculoAtualizado);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("modelo", "GOL GT");
    expect(response.body.ano).toBe(2020);
  });


  test("testar a rota delete", async () => {
    const response = await request(app).delete('/veiculo/0')
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
})

})

