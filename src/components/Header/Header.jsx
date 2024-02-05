import styles from './header.module.css';

export function Header(){
    
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>React TODO!</h1>            
        </header>
    )

}

