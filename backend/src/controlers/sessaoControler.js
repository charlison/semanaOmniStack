const conexao = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;
        const ong = await conexao('ongs')
        .where('id', id)
        .select('nome')
        .first();

        if(!ong){
            return response.status(400).json({error: 'Nenhuma ong encontrada'})
        }

        return response.json(ong);
    }
}