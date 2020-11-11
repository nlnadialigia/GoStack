import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore repositórios no GitHub</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img src="https://4.bp.blogspot.com/-_6aUx4Busz0/WVU6BQnKNiI/AAAAAAAASis/MvM1cNgoWeAad2QomAPVUsBNv3wDuR65ACLcBGAs/s1600/f5ab2f3daeffc410713a8454fe1ab709.jpg" alt="Avatar" />
        <div>
          <strong> nlnadialigia/Genius </strong>
          <p>Jogo da Memória no estilo Genius</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://4.bp.blogspot.com/-_6aUx4Busz0/WVU6BQnKNiI/AAAAAAAASis/MvM1cNgoWeAad2QomAPVUsBNv3wDuR65ACLcBGAs/s1600/f5ab2f3daeffc410713a8454fe1ab709.jpg" alt="Avatar" />
        <div>
          <strong> nlnadialigia/Genius </strong>
          <p>Jogo da Memória no estilo Genius</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://4.bp.blogspot.com/-_6aUx4Busz0/WVU6BQnKNiI/AAAAAAAASis/MvM1cNgoWeAad2QomAPVUsBNv3wDuR65ACLcBGAs/s1600/f5ab2f3daeffc410713a8454fe1ab709.jpg" alt="Avatar" />
        <div>
          <strong> nlnadialigia/Genius </strong>
          <p>Jogo da Memória no estilo Genius</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>

  </>
);

export default Dashboard;
