import styles from  './MyInput.module.css';


const MyInput = ({label, icon}) => {
    return (
        <>
        <input type='text'
            className={styles.MyInput}
            placeholder={label}>
        </input>
        </>
     );
}

export default MyInput;
