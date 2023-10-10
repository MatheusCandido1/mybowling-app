import { IFrame } from "../../../entities/Frame";
import { useGame } from "../../../hooks/useGame";
import {
  Container,
  Content,
  ScoreContainer,
  DateText,
  ScoreText,
  Header,
  HeaderText,
  DateBadge,
  FrameContainer,
  FrameNumberLabel,
  Footer,
  FooterText
} from "./styles";

export function GameCard() {
  const { frames } = useGame();

  const ScoreColumn = ({ frame }:{frame: IFrame}) => {
    return (
      <FrameContainer
        style={{
          borderLeftWidth: frame.frameNumber === 1 ? 0 : 1,
          borderRightWidth: frame.frameNumber === 10 ? 0 : 1,
          borderRightColor: '#c9ccd1',
          borderLeftColor: '#c9ccd1',
        }}
      >
        <FrameNumberLabel>{frame.frameNumber}</FrameNumberLabel>
        <ScoreText>-</ScoreText>
        <ScoreText>100</ScoreText>
      </FrameContainer>
    )
  }

  return (
    <Container>
       <Header>
          <HeaderText>South Point Bowling Center</HeaderText>
          <DateBadge>
            <DateText>10/09/2023</DateText>
          </DateBadge>
        </Header>
      <Content>
        <ScoreContainer>
            {frames.map((frame) => (
            <ScoreColumn
              key={frame.frameNumber} frame={frame}
            />
          ))}
        </ScoreContainer>
      </Content>
      <Footer>
      </Footer>
    </Container>
  )
}
