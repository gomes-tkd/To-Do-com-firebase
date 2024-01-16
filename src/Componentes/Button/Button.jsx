import React from 'react';
import styles from "./button.module.css";

const Button = ({ texto, onClick }) => {
    return (
        <button
            className={styles.btn}
            onClick={onClick}
        >
            { texto }
        </button>
    );
};

export default Button;
