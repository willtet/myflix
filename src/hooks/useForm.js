import React  from 'react'

function useForm(valorInicial) {
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

    function clearForm() {
        setValues(valorInicial)        
    }

    return{
        values, handler , clearForm
    }
}

export default useForm