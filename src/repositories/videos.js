
import config from '../config'

const ULR_VIDEOS = `${config.URL}/videos`

function createVideos(obj) {
    return fetch(`${ULR_VIDEOS}?_embed=videos`,{
        method : 'POST',
        headers :{
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(obj)
    }).then(async (resp)=>{
        if(resp.ok){
            const resposta = await resp.json()
            return resposta
        }

        throw new Error('Não foi possivel Cadastrar os dados')
        
        
    })
}

export default {
    createVideos
}