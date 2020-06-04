import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e0a14;

  .content {
    text-align: center;

    svg {
      margin-bottom: 15px;
    }

    h1 {
      color: #fff;
    }
  }
`;
