import React from 'react';
import styled from 'styled-components';
import { Account } from '../../types/Account';
import AccountCard from './AccountCard';

interface Props {
  accountList: Account[];
}

const AccountDetails: React.FC<Props> = ({ accountList }) => {
  return (
    <AccountDetailsWrapper>
      <h3>Account details</h3>
      <div>
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
    </AccountDetailsWrapper>
  );
};

export default AccountDetails;

const AccountDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  flex: 1;

  > div {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }
`;
