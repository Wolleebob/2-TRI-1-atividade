const express = require("express")
const app = express()
const port = 3464

app.get("/ola", (req, res)=>{
    res.send("Olá mundo!")
})

app.get("/aluno", (req, res)=>{
    res.json({
        aluno: "Guilherme",
        turma: "3DSB"
    })
})

app.listen(port, ()=> {
    console.log("API executando na porta " + port)
})