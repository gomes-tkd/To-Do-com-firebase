import React from 'react';
import styles from "./buttonDeletar.module.css";

const ButtonDeletar = ({ texto, ...props}) => {
    return (
        <button className={styles.btn} {...props}>
            {texto}
        </button>
    );
};

export default ButtonDeletar;
