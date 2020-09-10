
import config from '../config'

const ULR_CATEGORIES = `${config.URL}/categorias`

function getAll() {
    return fetch(`${ULR_CATEGORIES}`).then(async (resp)=>{
        if(resp.ok){
            const resposta = await resp.json()
            return resposta
        }

        throw new Error('Não foi possivel pegar os dados')
        
        
    })
}

function getAllWithVideo() {
    return fetch(`${ULR_CATEGORIES}?_embed=videos`).then(async (resp)=>{
        if(resp.ok){
            const resposta = await resp.json()
            return resposta
        }

        throw new Error('Não foi possivel pegar os dados')
        
        
    })
}

export default {
    getAllWithVideo,
    getAll
}