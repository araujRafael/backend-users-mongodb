const {User} = require("../models/User")

module.exports = server => {

    server.get('/register', (req,res) => {
        try{
            res.status(200).send("Rota /register OK!")
        }catch(err){
            console.log(err);
            res.status(400).send("PAGE ERROR")
        }
    })

    server.post('/register',async (req,res) => {
        try{
            const user = await User.create(req.body.header("Content-type:application/json"))
            res.status(200).send(user)
        }catch(err){
            res.send(req.body)
            // console.log(err);
            res.status(400).send("Error")
        }
    }) 

}