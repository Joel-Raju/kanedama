import styled from 'styled-components';
import { Account } from '../../types/Account';
import getSymbolFromCurrency from 'currency-symbol-map';

interface Props {
  accountData: Account;
}

const AccountCard: React.FC<Props> = ({ accountData }) => {
  return (
    <AccountCardWrapper>
      <div>
        <Label>A/C no: </Label>
        110 998 7560 11
      </div>
      <div>
        <Label>Last active: </Label>
        12 June 2021
      </div>
      <Spacer />
      <h4>
        <Label>Balance: </Label>$ 123.55
      </h4>
    </AccountCardWrapper>
  );
};

export default AccountCard;

const AccountCardWrapper = styled.div`
  flex: 0 0 250px;
  padding: 16px;
  background-color: rgba(241, 244, 254);
  margin: 0 8px;
  border-radius: 2px;

  > div {
    margin: 8px 0;
  }

  h4 {
    margin: 4px 0px;
  }
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
`;

const Spacer = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: rgba(0, 0, 0, 0.25);
`;
