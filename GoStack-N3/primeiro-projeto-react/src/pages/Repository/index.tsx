import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, RepositoryIssues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://i.pinimg.com/564x/31/a8/cd/31a8cd31da32e25ad31d95ba72de658f.jpg" alt="Imagem" />
          <div>
            <strong>nome do repositório</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <RepositoryIssues>
        <Link
          key="abc"
          to="teste"
        >
          <div>
            <strong>nome repositorio</strong>
            <p>autor</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </RepositoryIssues>
    </>
  );
};

export default Repository;
