import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import NumericInfoCard from './NumericInfoCard';
import AccountDetails from './AccountDetails';
import { Col, FlexGrid, Row } from '../../components';

const Overview: React.FC = () => {
  return (
    <FlexGrid>
      <Row>
        <Col>
          <NumericInfoCard value={1000000} title='Balance' />
        </Col>
        <Col>
          <NumericInfoCard value={1000000} title='Balance' />
        </Col>
        <Col>
          <NumericInfoCard value={1000000} title='Balance' />
        </Col>
      </Row>

      <Row>
        <Col>
          <CompanyInfo />
        </Col>
        <Col>
          <ChartWrapper>chart</ChartWrapper>
        </Col>
      </Row>
      <Row>
        <AccountDetails />
      </Row>
    </FlexGrid>

    // <StyledWrapper>
    //   <StatsWrapper>
    //     <NumericInfoCard value={1000000} title='Balance' />
    //     <NumericInfoCard value={1000000} title='Balance' />
    //     <NumericInfoCard value={1000000} title='Balance' />
    //   </StatsWrapper>
    //   <CompanyInfoWrapper>
    //     <CompanyInfo />
    //     <ChartWrapper>chart</ChartWrapper>
    //   </CompanyInfoWrapper>
    //   <AccountsWrapper><AccountDetails /></AccountsWrapper>
    // </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 16px;
`;

const CompanyInfoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-flow: row wrap;
  padding: 16px;
`;

const AccountsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 16px;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex: 2;
  background: rgb(250, 248, 243);
  margin: 8px;
`;

export default Overview;
