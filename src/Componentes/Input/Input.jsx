import React from 'react';
import styles from "./input.module.css";

const Input = ({ label, value, onChange }) => {
    return (
        <div className={styles.gridTitulo}>
            <label className={styles.labelTitulo} htmlFor={label}>Título</label>
            <input
                className={styles.inputTitulo}
                id={label}
                name={label}
                value={value}
                onChange={onChange}
                type="text"
            />
        </div>
    );
};

export default Input;
