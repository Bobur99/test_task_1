import Container from '../container/container';
import BodyContent from './bodyContent/bodyContent';
import styles from './bodySidebar.module.css'
import Sidebar from './bodySidebar/sidebar';

const Body = () => {
    return (
        <Container>
            <div className={styles.body_block}>
                <div className={styles.body_sidebar}>
                    <Sidebar />
                    <BodyContent/>
                </div>
                <div className={styles.body_content}></div>
            </div>
        </Container>
    )
}

export default Body;    