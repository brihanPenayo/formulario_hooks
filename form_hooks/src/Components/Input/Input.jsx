import React from 'react'
import styles from './Input.module.css';

const Input = ({ tipo, labelText, data, handleData }) => {
    const manejoDatos = (e) => {
        e.preventDefault();
        handleData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={styles.boxInput}>
            <input
                className={styles.inpt}
                id={labelText}
                name={labelText}
                value={data[labelText]}
                type={tipo}
                onChange={manejoDatos}
                required
                placeholder={labelText} />
            <label className={styles.lbl} htmlFor={labelText}>{labelText}</label>
        </div>
    )
}

export default Input