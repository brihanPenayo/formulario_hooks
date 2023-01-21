import React from 'react'
import { useState } from 'react'
import styles from './Input.module.css';

const Input = props => {
    const { tipo, labelText } = props;
    const [valor, setValor] = useState("");
    return (
        <div className={styles.boxInput}>
            <input className={styles} id={labelText} name={labelText} value={valor} type={tipo} onChange={(e) => setValor(e.target.value)} required placeholder={labelText} />
            <label htmlFor={labelText}>{labelText}</label>
        </div>
    )
}

export default Input