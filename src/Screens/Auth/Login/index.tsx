import {
  Container,
  HeroContainer,
  Content,
  Title,
  Subtitle,
  Form,
  Footer,
  LogoContainer,
  TextContainer,
  CreateAccountLink,
  CreateAccountLinkText,
  SocialButtonsContainer,
  SocialButton
} from './styles';

import HeroSvg from '../../../assets/img/hero.svg'
import Logo from '../../../assets/img/logo.svg';
import { CustomTextInput } from '../../../components/Shared/Forms/CustomTextInput';
import { MainButton } from '../../../components/Shared/Buttons/MainButton';
import { AntDesign } from "@expo/vector-icons";


export function Login() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HeroContainer>
        <HeroSvg />
      </HeroContainer>
      <Content>
        <TextContainer>
          <Title>Welcome!</Title>
          <Subtitle>Sign in to your account to check your bowling stats!</Subtitle>
        </TextContainer>
        <Form>
          <CustomTextInput
            label={"Email"}
            icon={"envelope"}
          />
          <CustomTextInput
            label={"Password"}
            icon={"lock"}
          />
          <MainButton
            label="Sign In"
          />
        </Form>

        <Footer>
          <CreateAccountLink>
            <CreateAccountLinkText>Don't have an account? Sign up!</CreateAccountLinkText>
          </CreateAccountLink>
          <SocialButtonsContainer>
            <SocialButton>
              <AntDesign name="google" size={24} color="#c71610" />
            </SocialButton>
            <SocialButton>
              <AntDesign name="apple1" size={24} color="black" />
            </SocialButton>
          </SocialButtonsContainer>
        </Footer>
      </Content>
    </Container>
  )
}
