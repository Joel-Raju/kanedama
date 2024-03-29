import React from 'react';
import styled from 'styled-components';
import { Col, FlexGrid, Row } from '../../components';
import { Account } from '../../types/Account';
import AccountCard from './AccountCard';

interface Props {
  accountList: Account[];
}

const AccountDetails: React.FC<Props> = ({ accountList }) => {
  return (
    <AccountDetailsWrapper>
      <h3>Account details</h3>
      <FlexGrid>
        <Row>
          <Col>
            <AccountCard />
          </Col>
          <Col>
            <AccountCard />
          </Col>
          <Col>
            <AccountCard />
          </Col>
          <Col>
            <AccountCard />
          </Col>
          <Col>
            <AccountCard />
          </Col>
        </Row>
      </FlexGrid>
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
    padding-bottom: 16px;

    &::-webkit-scrollbar-track {
      width: 2px;
    }
  }
`;
