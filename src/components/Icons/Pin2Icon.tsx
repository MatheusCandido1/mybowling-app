import styled from 'styled-components/native';

const Container = styled.View`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
`;

const Text = styled.Text`
  color: #FFF;
  font-weight: bold;
`;

interface Pin2IconProps {
  color: string;
  pin: number;
}

export function Pin2Icon({ color, pin }: Pin2IconProps) {
  return (
    <Container
      style={{
        backgroundColor: color,
      }}
    >
      <Text>{pin}</Text>
    </Container>
  )
}
