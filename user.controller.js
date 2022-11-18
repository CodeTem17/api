const user ={
    list:(req,res)=>{
        res.status(200).send('Hola mundo')
    },
    get:(req,res)=>{
        res.status(200).send('Este es un mundo')
    },
    create:(req,res)=>{
        res.status(201).send('Creando mundo')
    },
    update:(req,res)=>{
        res.status(204).send('Actualizando mundo')
    },
    destroy:(req,res)=>{
        res.status(204).send('Boorando mundo')
    }
}


module.exports = user;