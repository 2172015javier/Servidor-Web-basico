const express = require('express');
const path = require('path');

const starServer = (option) =>{
    const {port, public_path = "public"} = option
    
    const app = express();
    // para poder usar middlewares se usa app (express)
    app.get(express.static(public_path)) //contenido statico que ponemos disponible

    app.get('*',(req,res) =>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto ${port}`);                         
        
        
    })
    

}

module.exports = {
    starServer
}