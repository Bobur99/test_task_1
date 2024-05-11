import Container from "../container/container"
import styles from "./footer.module.css"
import FooterContent from "./footerContent/footerContent";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <FooterContent/>
            </Container>
        </div>
    )
}

export default Footer;