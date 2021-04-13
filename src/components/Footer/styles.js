import styled from 'styled-components';
import { linearGradient } from 'polished';

export const Container = styled.div`
margin-top: 65px;
border:0;
width: 100%;
margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;


height: 110px;
background: #44475a;
color: white;

text-align: center;
${linearGradient({
    colorStops: ['#282a36 0%', 'rgba(0, 0, 255, 0) 0%', '#282a36 150%'],
    toDirection: 'to top',
    fallback: '#44475a',
  })};
`;
export const P = styled.p`


`;
export const Space = styled.p`
width: 100%;
height:60%;
background: transparent;
`;
