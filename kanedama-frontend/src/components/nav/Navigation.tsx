import styled from 'styled-components';

const Navigation: React.FC = ({ children }) => {
  return (
    <StyledNav>
      <ul>{children}</ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 16px;

  ul {
    list-style: none;
    padding: 16px;
  }
`;
export default Navigation;
