import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Row: React.FC = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
