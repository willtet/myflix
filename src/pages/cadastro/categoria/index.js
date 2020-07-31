import React from 'react'

import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button';

function CadastroCategoria() {  
    const [categorias, setCategorias] = React.useState([])

    const valorInicial = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [values, setValues] = React.useState(valorInicial);

    function setValue(chave,valor){
        setValues({
            ...values,
            [chave] : valor
        })
    }

    function handler(info){
        const {value } = info.target;
        setValue(
            info.target.getAttribute("name"),
            value
        )
    }

    React.useEffect(()=>{
        const URL = 'http://localhost:8080/categorias'
        fetch(URL).then(async (resp)=>{
            const resposta = await resp.json()
            setCategorias([
                ...resposta, 
            ])
        })
        
    });

    return (
        <PageDefault>
            <h1> Pagina de cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handlerSubmit(info){
                info.preventDefault();
                setCategorias([
                    ...categorias,values
                ])
                setValues(valorInicial)
            }}>
                <FormField label= 'Nome da Categoria:' name='nome' value={values.nome}  onChange={handler}/>
                <FormField label= 'Descricao:' type ='textarea' name='descricao' value={values.descricao}  onChange={handler}/>
                <FormField label= 'Cor:' type ='color' name='cor' value={values.cor}  onChange={handler}/>
 
                <div>
                    <Button>Cadastrar</Button>
                </div>
                
            </form>

            <ul>
                {categorias.map((categoria,indice)=>{
                    return(
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                    )
                })

                }
            </ul>
            
            <Link to='/home'>
                Ir para Home
            </Link>


        </PageDefault>
    )
}

export default CadastroCategoria;