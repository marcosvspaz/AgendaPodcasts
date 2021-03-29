import { Container, Datas, Convidado,CardImg, CardText } from './styles'
import Image from 'next/image'
import Link from 'next/link'

function Box () {
 return <>


<Container>
<Convidado>
            <CardImg>
     <Image src='/seg.png'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>


     <Convidado>
            <CardImg>
     <Image src='/froid.jpg'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>
    
     </Container> 



     <Container>
{/*******************TERÇA*********************/}
<Convidado>
            <CardImg>
     <Image src='/ter.png'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>
    <Convidado>
            <CardImg>
     <Image src='/froid.jpg'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

    
     </Container> 
{/*********************QUARTA*******************/}

     <Container>
<Convidado>
            <CardImg>
     <Image src='/qua.png'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

 

    <Convidado>
            <CardImg>
     <Image src='/froid.jpg'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>
    
    
    
     </Container> 
{/*******************QUINTA*********************/}
<Container>
<Convidado>
            <CardImg>
     <Image src='/qui.png'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

    <Convidado>
            <CardImg>
     <Image src='/froid.jpg'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

    
    

    
     </Container> 
{/*****************SEXTA***********************/}
<Container>
<Convidado>
            <CardImg>
     <Image src='/sex.png'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

   
    
    <Convidado>
            <CardImg>
     <Image src='/froid.jpg'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

    
     </Container> 
{/*****************SABADO***********************/}
<Container>
<Convidado>
            <CardImg>
     <Image src='/sab.png'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

    <Convidado>
            <CardImg>
     <Image src='/froid.jpg'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

  
  
    
     </Container> 
{/*****************DOM***********************/}
<Container>
<Convidado>
            <CardImg>
     <Image src='/dom.png'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

 
    <Convidado>
            <CardImg>
     <Image src='/froid.jpg'
     alt='froid'
     width={200}
     height={200}
     position='absolute'
     objectFit="cover"
     quality={100}
     />
            </CardImg>  
         <CardText>
         </CardText>
    </Convidado>

   
     </Container> 
{/****************************************/}

     </>
}

export default Box

