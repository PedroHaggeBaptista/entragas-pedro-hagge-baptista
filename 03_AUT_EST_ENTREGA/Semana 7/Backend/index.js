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

app.delete('/removeContact/:id', async (req, res) => {
    //Pega o id do parametro da requisição
    const id = req.params.id

    //Instanciação do DB
    const db = await sqlite.open({ filename: './curriculo.db', driver: sqlite3.Database });

    //Efutua a deleção
    db.run(`DELETE FROM contatos WHERE id="${id}"`).then( (resul) => {
        res.status(200).send("Usuário Deletado")
    })

    return
})

app.put('/updateContact/:id', async (req, res) => {

    const id = req.params.id
    
    const { name, email, message } = req.body

    //Instanciação do DB
    const db = await sqlite.open({ filename: './curriculo.db', driver: sqlite3.Database });

    //Criação variavel query
    let queryComponent = []

    //Verificar se o contato passado é válido
    if (!id) {
        res.status(400).send('Nenhum ID passado')
    }

    const rowsId = await db.all(`SELECT * \ FROM contatos \ WHERE id = "${id}"`);

    if (!rowsId[0]){
        res.status(400).send('Nenhum contato com esse ID encontrado')
    }
    
    //Verificação quais informações foram solicitada a alteração
    if(name) {
        queryComponent.push(`name="${name}"`)
    }
    if(email) {
        queryComponent.push(`email="${email}"`)
    }
    if(message) {
        queryComponent.push(`message="${message}"`)
    }
    //Validação se nenhum dado foi passado
    if (!name && !email && !message) {
        res.status(400).send('Nenhuma informação passada para ser atualizada')
    }
    //Junto todas as informações que foram solicitada a alteração
    const queryJoined = queryComponent.join(',')

    //Efetua a chamada para o DB, fazendo a atualização
    const Update = await db.run(`UPDATE contatos SET ${queryJoined} WHERE id="${id}"`)

    if (Update.changes == 0) {
        res.status(400).send('Problema com DB. Tente Novamente por favor')
    }

    //Informa a atualização
    res.status(200).send('Informações atualizadas')
})

app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});