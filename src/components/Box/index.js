import Image from 'next/image';
import Link from 'next/link';
import {
  Container, Convidado, CardImg, CardText,
} from './styles';

function Box() {
  return (
    <>
      <Container>
        <Convidado>
          <CardImg>
            <Image
              src="/seg.png"
              alt="Segunda"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />

          </CardImg>
          <CardText />
        </Convidado>

        <Convidado>
          <CardImg>
            <Link href="https://twitter.com/McNegaodabl" target="_blank">
              <Image
                src="/convidados/mcnegaodabl.jpg"
                alt="MC Negao da bl"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

        <Convidado>
          <CardImg>
            <Link href="https://twitter.com/DiogoPortugal" target="_blank">
              <Image
                src="/convidados/diogoportugal.png"
                alt="Diogo Portugal"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

      </Container>

      <Container>
        {/********************************TERÇA**********************************/}
        <Convidado>
          <CardImg>
            <Image
              src="/ter.png"
              alt="terça"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />
          </CardImg>
          <CardText />
        </Convidado>
        <Convidado>
          <CardImg>
            <Link href="http://www.twitter.com/kvshmusic" target="_blank">
              <Image
                src="/convidados/kvsh.png"
                href="http://www.twitter.com/froidubr"
                alt="froid"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

      </Container>
      {/********************************QUARTA********************************/}

      <Container>
        <Convidado>
          <CardImg>
            <Image
              src="/qua.png"
              alt="quarta"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />
          </CardImg>
          <CardText />
        </Convidado>

        <Convidado>
          <CardImg>
            <Link href="http://www.twitter.com/froidubr" target="_blank">
              <Image
                src="/convidados/froid.jpg"
                href="http://www.twitter.com/froidubr"
                alt="froid"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

      </Container>
      {/*******************************QUINTA*********************************/}
      <Container>
        <Convidado>
          <CardImg>
            <Image
              src="/qui.png"
              alt="quinta"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />
          </CardImg>
          <CardText />
        </Convidado>

        <Convidado>
          <CardImg>
            <Link href="http://www.twitter.com/froidubr" target="_blank">
              <Image
                src="/convidados/froid.jpg"
                href="http://www.twitter.com/froidubr"
                alt="froid"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

      </Container>
      {/**************************************SEXTA******************************/}
      <Container>
        <Convidado>
          <CardImg>
            <Image
              src="/sex.png"
              alt="sexta"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />
          </CardImg>
          <CardText />
        </Convidado>

        <Convidado>
          <CardImg>
            <Link href="https://twitter.com/Daniel Mastral" target="_blank">
              <Image
                src="/convidados/danielmastral.png"
                alt="Daniel Mastral"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

      </Container>
      {/*****************************SABADO***********************************/}
      <Container>
        <Convidado>
          <CardImg>
            <Image
              src="/sab.png"
              alt="sábado"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />
          </CardImg>
          <CardText />
        </Convidado>

        <Convidado>
          <CardImg>
            <Link href="http://www.twitter.com/froidubr" target="_blank">
              <Image
                src="/convidados/froid.jpg"
                href="http://www.twitter.com/froidubr"
                alt="froid"
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

      </Container>
      {/****************************DOM************************************/}
      <Container>
        <Convidado>
          <CardImg>
            <Image
              src="/dom.png"
              alt="domingo"
              width={200}
              height={200}
              position="absolute"
              objectFit="cover"
              quality={100}
            />
          </CardImg>
          <CardText />
        </Convidado>

        <Convidado>
          <CardImg>
            <Link href="http://www.twitter.com" target="_blank">
              <Image
                src="/convidados/drgustavocabral.png"
                alt="Dr Gustavo Cabral                "
                width={200}
                height={200}
                position="absolute"
                objectFit="cover"
                quality={100}
              />
            </Link>

          </CardImg>
          <CardText />
        </Convidado>

      </Container>
      {/*******************************************************************/}

    </>
  );
}

export default Box;
