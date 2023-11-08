import { Container, BadgeText, Content } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface BadgeProps {
  type: string;
}

export function Badge({ type }: BadgeProps) {

  function getBadgeText() {
    if(type === 'pending') {
      return 'Pending'
    }
    if(type === 'completed') {
      return 'Completed'
    }
    if(type === 'in_progress') {
      return 'In Progress'
    }
  }

  function getBadgeIcon() {
    if(type === 'pending') {
      return 'pending'
    }

    if(type === 'completed') {
      return 'done-all'
    }

    if(type === 'in_progress') {
      return 'timer'
    }
  }

  function getBadgeColor() {
    if(type === 'pending') {
      return '#ABB2B9'
    }

    if(type === 'completed') {
      return '#0D9488'
    }

    if(type === 'in_progress') {
      return '#3498DB'
    }
  }

  return (
    <Container
      style={{
        backgroundColor: getBadgeColor()
      }}
    >
      <Content>
        <BadgeText>{getBadgeText()}</BadgeText>
        <MaterialIcons name={getBadgeIcon()} size={20} color="white" />
      </Content>
    </Container>
  )
}
