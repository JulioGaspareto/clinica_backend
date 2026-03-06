import express from 'express'

const app = express()

const port = 3000 

app.get('/',(requisicao,resposta) => {
    console.log(resposta)
    resposta.send("hellow word")
})


app.listen(port, ()=>{
    console.log("servidor funcional")
})