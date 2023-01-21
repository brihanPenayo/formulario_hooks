import React from 'react'
import styles from './Form.module.css';




const Form = props => {
    const manejoSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.get("Confirmar Contrasenha");
        data.get("Contrasenha");
    }


    return (
        <form className={styles} onSubmit={manejoSubmit}>
            {props.children}
        </form>
    )
}

export default Form