import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

import { Container } from './styles';

const Success: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  }, [history]);

  return (
    <Container>
      <div className="content">
        <BsCheckCircle color="#34CB79" size={60} />
        <h1>Cadastro concluído!</h1>
      </div>
    </Container>
  );
};

export default Success;
