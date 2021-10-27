import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




function Menu() {
    // MÉTODO GET
    const [pratos, setPratos] = useState([])

    // Effect para trazer todo conteúdo do objeto
    useEffect(() => {
        fetch("/rest/menu").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setPratos(resp)
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    // MÉTODO DELETE
    const handleDelete = (id) => {
        fetch("rest/menu/" + id, {
            method: "delete"
        }).then(() => {
            window.location = "/menu"
        }).catch((error) => {
            console.log(error)
        })
    }

    // State que auxilia na criação de um novo usuário (POST)
    let id = ""

    const [novoPrato, setNovoPrato] = useState({
        id: id,
        nomePrato: "",
        receita: "",
        kcal: ""
    })



    // MÉTODO POST
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/rest/menu/" + id, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(novoPrato)
        }).then(() => {
            window.location = "/menu"
        })
    }

    // MÉTODO PUT
    const handleChange = (e) => {
        setNovoPrato({ ...novoPrato, [e.target.name]: e.target.value })
    }

    //Effect para atualizar os dados do objeto
    useEffect(() => {
        if (id) {
            fetch("/rest/menu/" + id).then(resp => {
                return (resp.json())
            }).then(dados => {
                setNovoPrato(dados)
            })
        }
    }, [id])



    // FUNÇÃO PARA ESCONDER/MOSTRAR O FORMULÁRIO
    const [mostraForm, setMostraForm] = useState(false)

    const showForm = () => {
        setMostraForm(!mostraForm)
    }



    return (
        <div>
            <div>
                <h1>Menu</h1>
                <h2>Abaixo, trago uma lista de pratos cadastrados</h2>
            </div>
            <div>
                <h1>Lista de Pratos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Receita</th>
                            <th>Calorias</th>
                            <th>*****</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pratos.map((prato) => (
                            <tr key={prato.id}>
                                <td>{prato.nomePrato}</td>
                                <td>{prato.receita}</td>
                                <td>{prato.kcal}</td>
                                <td><Link title="editar" to={`editar/${prato.id}`}>Editar prato</Link>  |
                                    <button onClick={handleDelete.bind(this, prato.id)}>Excluir </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={showForm}>Add Novo Prato</button>
            <div>
                {mostraForm && (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Novo Prato</legend>
                            <div>
                                <input type='text' name="nomePrato" placeholder='Nome'
                                    value={novoPrato.nomePrato} onChange={handleChange} />Nome
                                <input type='text' name="receita" placeholder=''
                                    value={novoPrato.receita} onChange={handleChange} />Email
                                <input type='number' name="kcal" placeholder='Calorias'
                                    value={novoPrato.kcal} onChange={handleChange} />Senha
                                <input type="submit" />Enviar
                            </div>
                        </fieldset>

                    </form>)}
            </div>
        </div>
    )
}

export default Menu
