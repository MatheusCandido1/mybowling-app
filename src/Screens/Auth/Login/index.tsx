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
  SocialButton,
  LoginButton,
  LoginButtonText
} from './styles';

import HeroSvg from '../../../assets/img/hero.svg'
import Logo from '../../../assets/img/logo.svg';
import { CustomTextInput } from '../../../components/Shared/Forms/CustomTextInput';
import { MainButton } from '../../../components/Shared/Buttons/MainButton';
import { AntDesign } from "@expo/vector-icons";
import { useLoginController } from './useLoginController';
import { Controller } from 'react-hook-form';
import { OverlayLoading } from '../../../components/Shared/OverlayLoading';
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';


export function Login() {
  const { register, handleSubmit, onSubmit, control, isLoading, handleNewAccountPress } = useLoginController();

  const SocialButtons = () => (
    <SocialButtonsContainer>
      <SocialButton>
        <AntDesign name="google" size={24} color="#c71610" />
      </SocialButton>
      <SocialButton>
        <AntDesign name="apple1" size={24} color="black" />
      </SocialButton>
    </SocialButtonsContainer>
  )

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
    {isLoading ? <OverlayLoading /> : (
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
           <Controller
             name="email"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Email"}
                 icon={"envelope"}
                 value={value}
                 onChangeText={onChange}
               />
             )}
           />
           <Controller
             name="password"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Password"}
                 icon={"lock"}
                 value={value}
                 onChangeText={onChange}
                 isPassword
               />
             )}
           />
           <LoginButton
             onPress={handleSubmit(onSubmit)}
           >
             <LoginButtonText>Sign In</LoginButtonText>
           </LoginButton>
         </Form>

         <Footer>
           <CreateAccountLink
              onPress={handleNewAccountPress}
           >
             <CreateAccountLinkText>Don't have an account? Sign up!</CreateAccountLinkText>
           </CreateAccountLink>
         </Footer>
       </Content>
     </Container>
    )}
    </ScrollView>
  )
}
