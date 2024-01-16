import React from 'react';
import styles from "./buttonCancelar.module.css";

const ButtonCancelar = ({ texto, ...props }) => {
    return (
        <button className={styles.btnCancelar} {...props}>
            { texto }
        </button>
    );
};

export default ButtonCancelar;
