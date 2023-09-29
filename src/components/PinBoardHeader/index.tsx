import { PinIcon } from "../Icons/PinIcon";
import { Container, ShadowContainer, LegendContainer, Label, ScoreContainer } from "./styles";

export function PinBoardHeader() {
  return (
    <Container>
      <ShadowContainer style={{width: '65%'}}>
      <LegendContainer>
        <PinIcon
          width={32}
          height={32}
          color="#0d9488"
        />
        <Label>Pin Up</Label>
      </LegendContainer>
      <LegendContainer>
        <PinIcon
          width={32}
          height={32}
          color="#981b1b"
        />
        <Label>Pin Down</Label>
      </LegendContainer>
      </ShadowContainer>
      <ShadowContainer style={{flexDirection: "column", width: '30%'}}>
        <ScoreContainer>
          <Label>Score:</Label>
          <Label>300</Label>
        </ScoreContainer>
        <ScoreContainer>
          <Label>Max:</Label>
          <Label>300</Label>
        </ScoreContainer>
      </ShadowContainer>
    </Container>
  )
}
