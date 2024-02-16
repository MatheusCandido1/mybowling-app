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
  InitalFormContainer,
  ValidationCodeContainer,
  SingleDigitInput,
  SingleDigitContainer,
} from './styles';
import HeroSvg from '../../../assets/img/hero.svg'
import Logo from '../../../assets/img/logo.svg';
import { ScrollView } from 'react-native';
import { Separator } from '../../../components/Shared/Separator';
import { Controller } from 'react-hook-form';
import { CustomTextInput } from '../../../components/Shared/Forms/CustomTextInput';
import { useResetPasswordController } from './useResetPasswordController';
import { MainButton } from '../../../components/Shared/Buttons/MainButton';

export function ResetPassword() {

  const {
    errors,
    handleSubmit,
    onSubmit,
    control,
    isValidUser,
    code,
    onUpdateCode,
    onPaste,
    handleAlreadyUserPress
  } = useResetPasswordController();


  const InitalForm = () => {
    return (
      <InitalFormContainer>
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
              error={errors.email?.message}
            />
          )}
        />

      <MainButton
        onPress={handleSubmit(onSubmit)}
        label={"Get Validation Code"}
        style={{
          marginTop: 0,
        }}
      />
      </InitalFormContainer>
    )
  }

  const ValidationCode = () => {
    return (
      <ValidationCodeContainer>
        <SingleDigitContainer>
          {code.map((value, index) => (
            <SingleDigitInput
              key={index}
              keyboardType='numeric'
              value={value}
              onChangeText={(newValue) => onUpdateCode(index, newValue)}
              maxLength={1}
              onChange={onPaste}
            />
          ))}
        </SingleDigitContainer>

      </ValidationCodeContainer>
    )
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
       <Container>
       <LogoContainer>
         <Logo />
       </LogoContainer>
       <HeroContainer>
         <HeroSvg />
       </HeroContainer>
       <Content>
         <TextContainer>
           <Title>Forgot your password?</Title>
           <Subtitle>No problem, we can help you! </Subtitle>
         </TextContainer>
         <Form>
          {isValidUser ? <ValidationCode /> : <InitalForm />}

         </Form>

         <Footer>
           <CreateAccountLink
              onPress={handleAlreadyUserPress}
           >
           <CreateAccountLinkText>Back to Login</CreateAccountLinkText>
           </CreateAccountLink>
         </Footer>
         <Separator
          height={40}
         />
       </Content>
     </Container>
    </ScrollView>
  )
}

