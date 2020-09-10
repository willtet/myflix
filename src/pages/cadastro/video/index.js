import React, {useEffect, useState} from 'react'
import useForm from '../../../hooks/useForm'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button';
import videoRepositories from '../../../repositories/videos'
import categoriaRepositories from '../../../repositories/categorias'
import Span  from '../../../components/Span'

function CadastroVideo() {

    const history = useHistory()
    const[ categorias, setCategorias ] = useState([])
    const categoryTitles = categorias.map(({titulo})=> titulo)
    const { values, handler }= useForm({
        titulo: '',
        url: '',
        categoria: ''
    })

    const error = {
        categoria: 'Insert valid Category'
    }

    useEffect(()=>{
        categoriaRepositories.getAll().then((form)=>{
            setCategorias(form)
        })
    },[])
    
    return (
        <PageDefault>
            <h1> Pagina de cadastro de video</h1>

            <form onSubmit={(event)=>{
                event.preventDefault()
                
                const categoriaEscolhida = categorias.find((categoria)=>{
                    return categoria.titulo === values.categoria
                })

                videoRepositories.createVideos({
                    titulo : values.titulo,
                    url : values.url,
                    categoriaId: categoriaEscolhida
                }).then(()=>{
                    history.push('/')
                })
            }}>
                <FormField label='Titulo do Video:' name='titulo' value={values.titulo}  onChange={handler}/>
                <FormField label='Url do Video:' name='url' value={values.url}  onChange={handler}/>
                <FormField label='Categoria:' name='categoria' value={values.categoria}  onChange={handler} suggestions={categoryTitles}/>
                {error.categoria && <Span classname="formField_error">{error.categoria}</Span>}

                <Button>Cadastrar</Button>
            </form>

            <Link to='/cadastro/categoria'>
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;