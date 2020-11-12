import { shade } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  a{
    color: #A8A8B3;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;

    display: flex;
    align-items: center;

    &:hover{
      color: ${shade(0.2, '#A8A8B3')}
    }

    svg{
      margin-right: 12px;
    }
  }

`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;

    img{
      width: 120px;
      height: 120px;
      border-radius: 50%
    }

    div{
      margin-left: 32px;

      strong{
        font-size: 36px;
        line-height: 42px;
        color: #3D3D4D;
      }

      p{
        font-size: 20px;
        line-height: 23px;
        color: #737380;
      }
    }
  }

  ul{
    margin-top: 40px;
    display: flex;

    li{
      list-style: none;
      display: flex;
      flex-direction: column;

      & + li{
        margin-left: 80px;
      }

      strong{
        font-size: 36px;
        line-height: 42px;
        color: #3D3D4D;
      }

      span{
        font-size: 20px;
        line-height: 23px;
        color: #6C6C80;
      }
    }

  }

`;

export const RepositoryIssues = styled.div`
  margin-top: 80px;
  
  a{
    color: #3D3D4D;
    font-size: 24px;
    line-height: 28px;
    background: #FFFFFF;
    padding: 16px;
    border-radius:5px;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    & + a{
      margin-top: 16px;
    }

    &:hover{
      transform: translate(10px);
    }

    div{
      margin-left: 16px;
      flex: 1;
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
