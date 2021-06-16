import styled from 'styled-components';

const StyledCol = styled.div<{
  flex?: number;
}>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${(props) => (props.flex ? props.flex : 1)};
`;

interface Props {
  flex?: number;
}

const Col: React.FC<Props> = ({ children, flex }) => {
  return <StyledCol flex={flex}>{children}</StyledCol>;
};

export default Col;
