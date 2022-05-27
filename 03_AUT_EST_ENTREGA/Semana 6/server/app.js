const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const sqlite = require('sqlite')
var bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(express.json()) //Irá suportar JSON
app.use(cors())
app.use(bodyParser.urlencoded({ // Irá suportar urlenconded
    extended: true
}));

app.post('/postContact', async (req, res) => {
    console.log(req.body)

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
        console.log(resul)
    })

    return
})

app.listen(3001, () => {
    console.log(`Server running at PORT: 3001`);
});