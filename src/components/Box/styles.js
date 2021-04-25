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

export const Container = styled.div`
color: black;
  height:218px;
  width: 100%;

display: inline-flex;
  overflow-y: auto;

@media(max-width: 654px) {
}
`
