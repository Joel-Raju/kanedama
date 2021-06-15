import styled from 'styled-components';

interface Props {
  title: string;
  route: string;
  Icon: React.ReactNode;
  isActive: boolean;
}

const StyledLink = styled.li`
  cursor: pointer;
  padding: 16px 8px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    margin: 0 8px;
  }
`;

const NavLink: React.FC<Props> = ({ Icon, route, title }) => {
  return (
    <StyledLink>
      {Icon}
      <a>{title}</a>
    </StyledLink>
  );
};

export default NavLink;
