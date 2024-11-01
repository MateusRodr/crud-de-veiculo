const express = require('express')

const app = express();

app.use(express.json())

const veiculo = [
  
 {id: 1, placa: 'ABC1D23', chassi: '9BWZZZ377VT004251', renavam: 12345678901, modelo: 'GOL', marca: 'VOLKSWAGEN', ano: 2018 } 
]


//retorna um veiculo
app.get('/veiculo/:index', (req,res) => {
  const {index} = req.params

  return res.json(veiculo[index])
})

// retornar todos os veiculos
app.get('/veiculo', (req, res) => {
  return res.json(veiculo)
})


// adicionar veiculo 

app.post('/veiculo', (req, res) => {
  const {id,placa, chassi, renavam, modelo, marca, ano } = req.body

  const novoVeiculo = {id,placa, chassi, renavam, modelo, marca, ano }

  veiculo.push(novoVeiculo);


  return res.json(veiculo)
})

// atualizar 

app.put('/veiculo/:index', (req, res) =>{
  const {index} = req.params;
  const {id,placa, chassi, renavam, modelo, marca, ano } = req.body
  
  if(index >= 0 && index < veiculo.length){
    veiculo[index] = {id, placa, chassi, renavam, modelo, marca, ano};

    return res.json(veiculo[index])
  }
})

// deletar

app.delete('/veiculo/:index', (req, res) => {
  const { index } = req.params;

  veiculo.splice(index, 1);
  return res.json()
});

const PORT = 3005


app.listen(PORT, () =>{
    console.log(`servidor funcionado na porta ${PORT}`)
})


module.exports = app