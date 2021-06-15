import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import NumericInfoCard from './NumericInfoCard';
import AccountDetails from './AccountDetails';

const Overview: React.FC = () => {
  return (
    <StyledWrapper>
      <StatsWrapper>
        <NumericInfoCard value={1000000} title='Balance' />
        <NumericInfoCard value={1000000} title='Balance' />
        <NumericInfoCard value={1000000} title='Balance' />
      </StatsWrapper>
      <CompanyInfoWrapper>
        <CompanyInfo />
        <ChartWrapper>chart</ChartWrapper>
      </CompanyInfoWrapper>
      <AccountsWrapper>
        <AccountDetails />
      </AccountsWrapper>
    </StyledWrapper>
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
  flex-wrap: wrap;
  padding: 16px;
`;

const CompanyInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  padding: 16px;
`;

const AccountsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  margin: 16px;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex: 1;
  background: rgb(250, 248, 243);
  margin: 8px;
`;

export default Overview;
