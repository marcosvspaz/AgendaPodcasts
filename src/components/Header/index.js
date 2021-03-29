import { Container, AgendaPodcasts, Menu, MenuContainer, backgroundImage } from './styles'
import Link from 'next/link'


function Header() {
    return <Container>

    
        <AgendaPodcasts>Agenda Podcasts</AgendaPodcasts>
        <MenuContainer>
        <Link href='/'> 
        <Menu>Podcasts</Menu>
        </Link>
        {/* <Link href='/sobre'> 
        <Menu>sobre</Menu>
        </Link> */}
        <Link href='/contato'> 
        <Menu>Contato</Menu>
        </Link>
        <Link href='/apoiase'> 
        <Menu>Apoia-se</Menu>
        </Link>

</MenuContainer>


        
           </Container>
}

export default Header