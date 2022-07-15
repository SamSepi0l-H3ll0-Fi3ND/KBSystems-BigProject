import styles from './Form.module.css'

const Form = ({children}) => {
    return (
      <form className={styles.asd}>   
        <h1>Podaj imie</h1>
        <input></input>
        {children}
    </form> 
     );
}


 
export default Form;