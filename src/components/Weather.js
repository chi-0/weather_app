import { styled } from "styled-components";

const Layout = styled.div`
  width: 370px;
  height: 750px;
  margin: 0 auto;
  text-align: center;
  border-radius: 20px;
  background-color: lightblue;
`;

const Location = styled.h3`
  font-size: 28px;
  font-weight: 500;
`;

const Temp = styled.h3`
  font-size: 35px;
  font-weight: 500;
`;

const Desc = styled.h3``;

const ConWrap = styled.div``;

const Con = styled.div``;

export const Weather = ({ data }) => {
  const {
    name,
    main: { feels_like, temp, temp_max, temp_min },
    weather,
  } = data;

  return (
    <Layout>
      <Location>{name}</Location>
      <Temp>{temp}℃</Temp>
      <Desc>{weather[0].description}</Desc>
      <ConWrap>
        <Con>
          <p>체감온도</p>
          <p>{feels_like}℃</p>
        </Con>
        <Con>
          <p>최고온도</p>
          <p>{temp_max}℃</p>
        </Con>
        <Con>
          <p>최저온도</p>
          <p>{temp_min}℃</p>
        </Con>
      </ConWrap>
    </Layout>
  );
};
