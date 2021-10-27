import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PratoEspecifico(props) {

    // Aqui, pegamos o id que é passado pela URL (id do usuário específico)
    let id = null;

    if (props.match.path.toLowerCase().includes('editar')) {
        id = props.match.params.id
    }

    // MÉTODO GET
    const [prato, setPrato] = useState([])
    
    
    // Effect para trazer todo conteúdo do objeto (nesse caso, de um OBJETO ESPECÍFICO e setando no state acima)
    useEffect(() => {
        fetch("/rest/menu/" + id).then((resp) => {
            return resp.json()
        }).then((resp) => {
            setPrato(resp)
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    // Acho que esse Effect faz a mesma coisa que o effect de cima
    useEffect(() => {
        if (id) {
            fetch("/rest/menu/" + id).then(resp => {
                return (resp.json())
            }).then(dados => {
                setPrato(dados)
            })
        }
    }, [id])

    const handleChange = (e) => {
        setPrato({ ...prato, [e.target.name]: e.target.value })
    }


    const [mostraForm, setMostraForm] = useState(false)

    const showForm = () => {
        setMostraForm(!mostraForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/rest/menu/" + id, {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(prato)
        }).then(() => {
            window.location = "/menu"
        })
    }



    return (
        <div>
            <h1>Prato Específico</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Prato</th>
                        <th>Receita</th>
                        <th>Calorias</th>
                        <th>*****</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{prato.id}</td>
                        <td>{prato.nomePrato}</td>
                        <td>{prato.receita}</td>
                        <td>{prato.kcal}</td>
                        <button onClick={showForm}>Editar</button>
                    </tr>

                </tbody>
            </table>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Você está editando o prato: {prato.nomePrato}!</h3>
            </div>
            <div>
                {mostraForm && (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Novo Prato</legend>
                            <div>
                                <input type='text' name="nome" placeholder='Nome'
                                    value={prato.nomePrato} onChange={handleChange} />Nome do Prato
                                <input type='text' name="receita" placeholder='Receita'
                                    value={prato.receita} onChange={handleChange} />Receita
                                <input type='number' name="kcal" placeholder='Calorias'
                                    value={prato.kcal} onChange={handleChange} />Calorias
                                <input type="submit" />Enviar
                            </div>
                        </fieldset>

                    </form>)}
            </div>
        </div>

    )
}

export default PratoEspecifico
