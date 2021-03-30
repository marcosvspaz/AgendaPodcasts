import { Container, AgendaPodcasts,ImageLogo, Menu, MenuContainer, backgroundImage } from './styles'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return <Container>
<ImageLogo>
<Image src='/calendario.png'
     alt='froid'
     width={50}
     height={50}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
</ImageLogo>

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