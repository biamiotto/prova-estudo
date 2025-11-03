import * as ComidasControllers from './../models/comidasModel.js'

export const listarTodos = async (req, res) => {
    try {
        const comida = await ComidasControllers.encontreTodos();

        if(!comida || comida.length === 0){
            res.status(404).json({
                total: 0,
                mensagem: 'Não há comidas na lista',
                comida
            })
        }

        res.status(200).json({
            total: comida.length,
            mensagem: 'Lista de comidas',
            comida
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comida = await ComidasControllers.encontreUm(id);

        if(!comida){
            return res.status(404).json({
                erro: "Comida não encontrado",
                mensagem: 'Verifique o id do comida',
                id: id
            })
        }

        res.status(200).json({
            message: 'Comida encontrado',
            comida
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const { nome, tipo, preco, descricao } = req.body;
        
        const dado = { nome, tipo, preco, descricao }

    const novaComida = await ComidasControllers.criar(req.body)
    
    res.status(201).json({
        mensagem: 'Comida criado com sucesso!',
        comida: novaComida
    })

    } catch (error) {
        res.status(500).json({
            erro: 'erro o criar Comida',
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const comidaExiste = await ComidasControllers.encontreUm(id);

        if(!comidaExiste){
            return res.status(404).json({
                erro: 'Comida com esse id não encontrado',
                id: id
            })
        }

        await ComidasControllers.deletar(id)

        res.status(200).json({
            message: 'Comida apagado com sucesso',
            comidaRemovida: comidaExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar comida',
            detalhes: error.message
        })
        
    }
}

export const atualizar = async (req, res) => {
    try {
    
    const id = parseInt(req.params.id);
    const dados = req.body;

    const comidaExiste = await ComidasControllers.encontreUm(id);

    if(!comidaExiste) {
        return res.status(404).json({
            erro: 'Esse comida não existe',
            id: id
        })
    }

    const comidaAtualizado = await ComidasControllers.atualizar(id, dados)

    return res.status(200).json({
        mensagem: 'Comida atualizada com sucesso!',
        comida: comidaAtualizado
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar a comida',
            detalhes: error.message
        })
    }
}