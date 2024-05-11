import styles from './container.module.css';

const Container = ({ children }) => {
    return (
        <div className={`${styles.сontainer}`}>
            {children}
        </div>
    )
}

export default Container