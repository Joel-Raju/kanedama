import styled from 'styled-components';
import { Account } from '../../types/Account';

interface Props {
  accountData: Account;
}

const AccountCard: React.FC<Props> = ({ accountData }) => {
  return <AccountCardWrapper>account card</AccountCardWrapper>;
};

export default AccountCard;

const AccountCardWrapper = styled.div`
  flex: 0 0 200px;
  padding: 16px;
  background-color: rgba(241, 244, 254);
  margin: 0 8px;
`;
