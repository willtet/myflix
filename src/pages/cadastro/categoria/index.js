import React from 'react';

import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {  
    const [categorias, setCategorias] = React.useState([])

    const valorInicial = {
        nome: 'Nome inicial',
        descricao: 'Descricao inicial',
        cor: '#000000'
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
                <FormField label= 'Nome da Categoria:' type ='text' name='nome' value={values.nome}  onChange={handler}/>
                <FormField label= 'Descricao:' type ='text' name='descricao' value={values.descricao}  onChange={handler}/>
                <FormField label= 'Cor:' type ='color' name='cor' value={values.cor}  onChange={handler}/>
 
                <div>
                    <button>Cadastrar</button>
                </div>
                
            </form>

            <ul>
                {categorias.map((categoria,indice)=>{
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })

                }
            </ul>
            
            <Link to='/'>
                Ir para Home
            </Link>


        </PageDefault>
    )
}

export default CadastroCategoria;