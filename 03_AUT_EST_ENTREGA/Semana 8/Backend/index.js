const express = require('express');
const sqlite3 = require('sqlite3').verbose()
const sqlite = require('sqlite')
var bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const hostname = 'localhost';
const port = 3001;
app.use(express.static("../FrontEnd"));

app.use(express.json()) //Irá suportar JSON
app.use(cors())
app.use(bodyParser.urlencoded({ // Irá suportar urlenconded
    extended: true
}));

app.post('/postContact', async (req, res) => {
    //Instanciação do DB
    const db = await sqlite.open({ filename: './curriculo.db', driver: sqlite3.Database });

    if(!req.body.name) {
        res.status(400).send("Nome inválido")
    }
    if(!req.body.email) {
        res.status(400).send("Email inválido")
    }
    if(!req.body.message) {
        res.status(400).send("Mensagem inválida")
    }

    db.run(`INSERT INTO contatos (name, email, message) VALUES ("${req.body.name}","${req.body.email}","${req.body.message}")`).then( (resul) => {
        res.status(200).send('Cadastrado')
    })

    return
})

app.get('/getContact', async (req, res) => {

    //Instanciação do DB
    const db = await sqlite.open({ filename: './curriculo.db', driver: sqlite3.Database });

    db.all("SELECT * FROM contatos").then( (resul) => {
        res.status(200).send(resul)
    })

    return
})

app.delete('/removeContact', async (req, res) => {
    //Pega o id do parametro da requisição
    const email = req.body.email

    //Instanciação do DB
    const db = await sqlite.open({ filename: './curriculo.db', driver: sqlite3.Database });

    //Efutua a deleção
    db.run(`DELETE FROM contatos WHERE email="${email}"`).then( (resul) => {
        res.status(200).send("Usuário Deletado")
    })

    return
})

app.put('/updateContact', async (req, res) => {
    const { email, message } = req.body

    //Instanciação do DB
    const db = await sqlite.open({ filename: './curriculo.db', driver: sqlite3.Database });

    //Criação variavel query
    let queryComponent = []

    //Verificar se o contato passado é válido
    if (!email) {
        res.status(400).send('Nenhum email passado')
    }

    const rowsId = await db.all(`SELECT * \ FROM contatos \ WHERE email = "${email}"`);

    if (!rowsId[0]){
        res.status(400).send('Nenhum contato com esse email encontrado')
    }

    //Validação se nenhum dado foi passado
    if (!message) {
        res.status(400).send('Nenhuma informação passada para ser atualizada')
    }

    //Efetua a chamada para o DB, fazendo a atualização
    const Update = await db.run(`UPDATE contatos SET message="${message}" WHERE email="${email}"`)

    if (Update.changes == 0) {
        res.status(400).send('Problema com DB. Tente Novamente por favor')
    }

    //Informa a atualização
    res.status(200).send('Informações atualizadas')
})

app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});