import { shade } from 'polished';
import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 450px;
  font-size: 48px;
  line-height: 56px;
  color: #3A3A3A;
  margin-top: 40px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 714px;
  
  display: flex;

  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border:0;
    border-radius: 5px 0 0 5px;

    &::placeholder{
      color: #A8A8B3;
    }
  }

  button{
    width: 210px;
    height: 70px;
    background: #04D361;
    color: #FFFFFF;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    border: 0;
    transition: background-color 0.2s;

    &:hover{
     background: ${shade(0.2, '#04D361')} 
    }
  }
`;

export const Repositories = styled.div`
  max-width: 714px;
  margin-top: 80px;
  
  a{
    color: #3D3D4D;
    font-size: 24px;
    line-height: 28px;
    background: #FFFFFF;
    padding: 16px;
    border-radius:5px;

    display: flex;
    align-items: center;

    & + a{
      margin-top: 16px;
    }

    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div{
      margin-left: 16px;
      display: flex;
      flex-direction: column;

      strong{
        font-size: 24px;
        line-height: 28px;
      }

      p{
        font-size: 18px;
        color:#A8A8B3;
      }
    }
    svg{
        margin-left: auto;
        color: #C9C9D4;
      }
  }
`;
