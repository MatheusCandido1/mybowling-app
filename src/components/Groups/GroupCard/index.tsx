import {
  Container,
  Content,
  Title,
  Description,
  MembersContainer,
  MemberNumberContainer,
  MemberNumber,
} from "./styles";
import { Avatar } from "../../Shared/Avatar";

interface GroupCardProps {
  name: string;
  description: string;
  members: any[];
  onPress?: () => void;
}

export function GroupCard({ name, description, members, onPress }: GroupCardProps) {
  const memberQuantity = members && members.length > 0 ? members.length : 0;

  return (
    <Container
      onPress={onPress}
    >
      <Content>
      <Title>
        {name}
      </Title>
        <Description>
          {description}
        </Description>
      <MembersContainer>
        {members && members.slice(0,3).map((member: any) => (
          <Avatar
            key={member.id}
            imageUri={member.avatar}
          />
        ))}
          {memberQuantity > 3 ? (
            <MemberNumberContainer>
              <MemberNumber>
                {`+${memberQuantity - 3}`}
              </MemberNumber>
            </MemberNumberContainer>
          ) : (null)}
      </MembersContainer>
      </Content>

    </Container>
  )
}
