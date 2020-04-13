const conexao = require('../database/connection');

module.exports = {
    async list(request, response){
        const ong_id = reques.params.authorization;

        const casos = await conexao('casos')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(casos);
    }
} 

