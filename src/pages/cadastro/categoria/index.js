import React ,{useEffect} from 'react'
import useForm from '../../../hooks/useForm'
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

    const { values, handler, clearForm }= useForm(valorInicial)

    

    useEffect(()=>{
        const URL = 'https://alura-myflix.herokuapp.com/categorias';
        fetch(URL).then(async (resp)=>{
            if(resp.ok){
                const resposta = await resp.json();
                setCategorias(
                  resposta, 
                )
            return
            }
        });
        
    },[]);

    return (
        <PageDefault>
            <h1> Pagina de cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handlerSubmit(info){
                info.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])
                clearForm()
            }}>
                <FormField label= 'Nome da Categoria:' name='nome' value={values.nome}  onChange={handler}/>
                <FormField label= 'Descricao:' type ='textarea' name='descricao' value={values.descricao}  onChange={handler}/>
                <FormField label= 'Cor:' type ='color' name='cor' value={values.cor}  onChange={handler}/>
 
                <Button>Cadastrar</Button>
                
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
            
            <Link to='/'>
                Ir para Home
            </Link>


        </PageDefault>
    )
}

export default CadastroCategoria;