import { Image } from "react-native";

import {
  Container,
  CoverContainer,
  Content,
  Title,
  Description,
  MembersContainer,
  MemberNumberContainer,
  MemberNumber,
} from "./styles";
import { Avatar } from "../../Shared/Avatar";

interface GroupCardProps {
  cover?: string;
  name: string;
  description: string;
  members: any[];
  onPress?: () => void;
}

export function GroupCard({ cover, name, description, members, onPress }: GroupCardProps) {
  const memberQuantity = members && members.length > 0 ? members.length : 0;

  const background = cover ? cover : 'https://i.ibb.co/HdNtcf6/gradient.png';

  return (
    <Container
      onPress={onPress}
    >
      <CoverContainer>
        <Image
          source={{
            uri: background,
          }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            overflow: 'hidden',
          }}
        />
      </CoverContainer>
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
