const { User } = require("../Schemas/userSchema");

const userController = {

    create: async(req,res) => { 
        try{
        const user = {
            id_usuario: req.body.id_usuario,
            nome: req.body.nome,
            email: req.body.email,
            price: req.body.email,
            data_nasc: req.body.data_nasc,
            senha:req.body.senha,
            telefone:req.body.telefone,
            cpf:req.body.cpf,
        };
        const response = await User.create(user)
        res.status(201).json({response, msg:"Usuario criado com sucesso!!"})
    }catch(err) {
        console.log(`Erro userrouter:${err}`)
      }
    }


}

module.exports = userController