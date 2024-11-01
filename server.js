const app = require("./index")
const PORT = 3005


app.listen(PORT, () =>{
    console.log(`servidor funcionado na porta ${PORT}`)

})

module.exports = app;