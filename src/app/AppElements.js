import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin: 30px 0 10px;
  color: ${({ theme }) => theme.jsColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export { Wrapper, Title, Description };
