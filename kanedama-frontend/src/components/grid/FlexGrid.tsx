import styled from 'styled-components';

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexGrid: React.FC = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default FlexGrid;
