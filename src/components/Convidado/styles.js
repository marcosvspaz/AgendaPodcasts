import styled from 'styled-components'


export const MediaSpacing = styled.div`
background: blue;
width: 100px;
height: 0px;
@media(max-width: 654px) {
display: block;
background: transparent;
width: 100%;
height: 30px;
}
`

export const Convidado = styled.div`
  height:200px;
  width: 200px;
  :hover{
  }
@media(max-width: 654px) {

}
`

export const CardImg = styled.div`
  height:200px;
  width: 200px;

display: contents;
z-index: 1;

@media(max-width: 654px) {

}
`
export const Datas = styled.div`
font-size: 25px;
 margin: 15px;
color: white;
font-family: poppins light,sans-serif;
background:transparent;
position: absolute;
:hover{
  color:black;
}
z-index: 500;
@media(max-width: 654px) {

}
`
export const Podcast = styled.div`
 font-size: 23px;
 margin: 3px;
color: white;
font-family: poppins light,sans-serif;
background:transparent;
position: absolute;
:hover{
  color:black;
}
z-index: 500;
@media(max-width: 654px) {

}
`

export const ConvidadoNome = styled.div`
 font-size: 23px;
 margin: 3px;
 margin-top:140px;
color: white;
font-family: poppins light,sans-serif;
background:transparent;
position: absolute;
:hover{
  color:black;
}
z-index: 499;
@media(max-width: 654px) {

}
`
export const P = styled.p`
color: #f8f8f2;
`


