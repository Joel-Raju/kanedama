import styled from 'styled-components';
import { Business } from '../../types/Business';
import { User } from '../../types/User';

const StyledWrapper = styled.div`
  background-color: black;
  padding: 18px;
`;

interface Props {
  business: Business;
  user: User;
}

const CompanyInfo: React.FC<Props> = ({ business, user }) => {
  return (
    <StyledWrapper>
      <div>info</div>
    </StyledWrapper>
  );
};

export default CompanyInfo;
