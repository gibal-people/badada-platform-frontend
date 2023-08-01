import styled from 'styled-components';
import Tag from '@components/atoms/Tag';

interface Props {
  imgUrl: string;
  seaName: string;
  per: number;
}

export default function SeaCard({ seaName, per, imgUrl }: Props) {
  return (
    <Card>
      <Image imgUrl={imgUrl} />
      <ContentBox>
        <div className='layout'>
          <div className='titleLayout'>
            <Icon>{/* Icon */}</Icon>
            <p>{seaName}</p>
          </div>
          <p>{per}%</p>
        </div>

        <div>
          <Tag tagIndex={1} />
          <Tag tagIndex={2} />
        </div>
      </ContentBox>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 333px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.2);
`;

const Image = styled.div<{ imgUrl: string }>`
  align-self: stretch;
  height: 150px;
  background:
    url(${(props) => props.imgUrl}),
    lightgray 50% / cover no-repeat;
  border-radius: 8px 8px 0 0;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  /* border: 1px solid red; */
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  .layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .titleLayout {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
