import React from 'react';
import styles from "./buttonCancelarDeletar.module.css";

const ButtonCancelarDeletar = ({ texto, ...props}) => {
    return (
        <button className={styles.btn} {...props}>
            {texto}
        </button>
    );
};

export default ButtonCancelarDeletar;
