import styled from 'styled-components';
import { FiBriefcase, FiUser } from 'react-icons/fi';
import { Business } from '../../types/Business';
import { User } from '../../types/User';

interface Props {
  business: Business;
  user: User;
}

const CompanyInfo: React.FC<Props> = ({ business, user }) => {
  return (
    <StyledWrapper>
      <UserInfoSection>
        <Header>
          <h3>
            <FiUser /> M Tinco Remy
          </h3>
          <span>
            <Label>Last active:</Label> 12 June 2021
          </span>
        </Header>
        <InfoBody>
          <div>
            <Label>Email:</Label>
            john@example.com
          </div>
          <div>
            <Label>Ph:</Label>
            +1 403 456 1211
          </div>
        </InfoBody>
      </UserInfoSection>
      <Spacer />
      <CompanyInfoSection>
        <Header>
          <h3>
            <FiBriefcase /> Mansa Group
          </h3>
        </Header>
        <InfoBody>
          <div>
            <Label>SIRET:</Label> 101010 1010010
          </div>
          <div>
            <Label>Address:</Label>
            112 Ave DV PARIS
          </div>
        </InfoBody>
      </CompanyInfoSection>
    </StyledWrapper>
  );
};

export default CompanyInfo;

const StyledWrapper = styled.div`
  background-color: black;
  padding: 18px;
  margin: 8px;
  flex: 1;
  border-radius: 2px;

  > div {
    color: white;
  }
`;

const UserInfoSection = styled.div`
  margin: 8px;
  padding: 8px;
`;

const CompanyInfoSection = styled.div`
  margin: 8px;
  padding: 8px;
`;

const Spacer = styled.div`
  width: 100%;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.5);
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-botton: 16px;
`;

const InfoBody = styled.div`
  margin: 8px 0;
  > div {
    margin-bottom: 12px;
  }
`;

const Label = styled.span`
  color: rgba(255, 255, 255, 0.7);
  margin-right: 8px;
`;
