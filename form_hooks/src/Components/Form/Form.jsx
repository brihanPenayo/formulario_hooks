import React from 'react'
import styles from './Form.module.css';
import { useState } from 'react';

let aux;
const MostrarDato = ({ data }) => {
    const aux = { ...data }
    return (
        <div className={styles.formBox}>
            <p>Usuario: {aux.Nombres}</p>
            <p>Apellido: {aux.Apellidos}</p>
            <p>Email: {aux.Email}</p>
            <p>Contrasenha: {aux.Contrasenha}</p>
        </div>
    )
}
const Form = ({ data, setData, children }) => {
    const [enviado, setEnviado] = useState(false);
    const manejoDatos = (e) => {
        e.preventDefault();
        setEnviado(true);
        aux = { ...data };
        setData({
            Nombres: "",
            Apellidos: "",
            Email: "",
            Contrasenha: "",
            Confirmar: "",
        });
        console.log(data);
    }

    // setEnviado(false)
    return (<>
        <form className={styles.formBox} onSubmit={manejoDatos}>
            {children}
        </form>
        {enviado && <MostrarDato data={aux} />}
    </>

    )
}

export default Form