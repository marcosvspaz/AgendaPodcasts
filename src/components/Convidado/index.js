import Image from 'next/image';
import Link from 'next/link';

import {
  Convidado, CardImg, Podcast,ConvidadoNome, MediaSpacing, Datas
} from './styles';

function ConvidadoBox({posts}) {
  return (
    <>
        <Convidado>
  
        <Datas>23/2</Datas> 

          <CardImg>
            <img
              src="/seg.png"
              alt="Segunda"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />

          </CardImg>
          
        </Convidado>

        <Convidado      >
         
 <CardImg >

 <img
              src="/convidados/mcnegaodabl.jpg"
              alt="Segunda"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />

 </CardImg>
        </Convidado>




        <Convidado>
          <CardImg>
          <b><Podcast>FLOW</Podcast></b>
 
 <b> <ConvidadoNome>Diogo Portugal</ConvidadoNome> </b>

            <Link href="https://twitter.com/McNegaodabl" target="_blank">
              
              <img
                src="/convidados/mcnegaodabl.jpg"
                alt="MC Negao da bl"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}></img>
             
              
            </Link>

          </CardImg>
          
        </Convidado>






        <Convidado>
          <CardImg>
          <b><Podcast>FLOW</Podcast></b>
 
 <b> <ConvidadoNome>Diogo Portugal</ConvidadoNome> </b>

            <Link href="https://twitter.com/McNegaodabl" target="_blank">
              
              <img
                src="/convidados/mcnegaodabl.jpg"
                alt="MC Negao da bl"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}></img>
             
              
            </Link>

          </CardImg>
          
        </Convidado>






     







   

    </>
  );
}

export default ConvidadoBox;
