import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 18px;
  display: flex;
`;

const CardBase: React.FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default CardBase;
