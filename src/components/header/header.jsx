import Container  from '../container/container';
import './header.module.css'
import HeaderBanner from './headerBanner/headerBanner';
import Nav from './nav/nav';

const Header = () => {
    return (
        <Container>
            <Nav/>
            <HeaderBanner/>
        </Container>
    )
  }
  
  export default Header;