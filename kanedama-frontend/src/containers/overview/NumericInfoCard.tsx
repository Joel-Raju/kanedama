import styled from 'styled-components';
import CountUp from 'react-countup';
import CardBase from '../../components/card/CardBase';

interface Props {
  suffix?: string;
  prefix?: string;
  value: number;
  title: string;
}

const Card = styled(CardBase)``;

const CardWrapper = styled.div`
  flex: 1;
  div {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const NumericInfoCard: React.FC<Props> = ({ value, title, prefix, suffix }) => {
  return (
    <Card>
      <CardWrapper>
        <h3>
          <span>{prefix}</span>
          <span>
            <CountUp start={0} duration={1} end={value} />
          </span>
          <span>{suffix}</span>
        </h3>
        <div>{title}</div>
      </CardWrapper>
    </Card>
  );
};

export default NumericInfoCard;
