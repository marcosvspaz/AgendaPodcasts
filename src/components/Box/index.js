import Image from 'next/image';
import Link from 'next/link';
import ConvidadoBox from '../Convidado'

import {
  Container, MediaSpacing, 
} from './styles';

function Box({posts}) {
  return (
    <>
          <MediaSpacing>_</MediaSpacing>

   
        {/********************************SEGUNDA**********************************/}
        <Container>
          <ConvidadoBox></ConvidadoBox>
        </Container>
        {/*******************************TERÇA**********************************/}
        <Container></Container>
        {/*******************************QUARTA********************************/}

        <Container></Container>
        {/******************************QUINTA*********************************/}
        <Container></Container>
        {/******************************SEXTA******************************/}
        <Container></Container>
        {/*****************************SABADO***********************************/}
        <Container></Container>
        {/****************************DOM************************************/}
        <Container></Container>
        {/*******************************************************************/}

    </>
  );
}

export default Box;
