module.exports = server => {

    server.get('/', (req,res)=>{
        res.send("Rota index funcionando.")
    })

}