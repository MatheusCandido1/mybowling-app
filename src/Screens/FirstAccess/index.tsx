import { Text, Touchable, View } from 'react-native'
import { CheckContainer, Container, IconContainer, ItemContainer, ItemText, CheckboxContainer } from './styles'
import Swiper from 'react-native-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFirstAccessController } from './useFirstAccessController'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ball2Icon } from '../../components/Icons/Ball2Icon'
import { PinIcon } from '../../components/Icons/PinIcon'
import { Checkbox } from '../../components/Shared/Forms/Checkbox'
import Logo2 from '../../assets/img/logo2.svg';

export function FirstAccess() {
  const { onSubmit, terms, handleTermCheck, promotions, handlePromotionCheck } = useFirstAccessController();

  const AverageMonitoringComponent = () => {
    return (
      <ItemContainer>
        <IconContainer>
          <MaterialCommunityIcons name="chart-line" size={24} color="#0d9488" />
        </IconContainer>
        <ItemText>
          Monitor your bowling average over time for continuous improvement.
        </ItemText>
        <CheckContainer>
          <MaterialCommunityIcons name="check" size={24} color="#0d9488" />
        </CheckContainer>
      </ItemContainer>
    )
  }

  const ArsenalManagementComponent = () => {
    return (
      <ItemContainer>
        <IconContainer>
          <Ball2Icon height={24} width={24} color="#0d9488" />
        </IconContainer>
        <ItemText>
          Easily manage and organize your bowling arsenal.
        </ItemText>
        <CheckContainer>
          <MaterialCommunityIcons name="check" size={24} color="#0d9488" />
        </CheckContainer>
      </ItemContainer>
    )
  }

  const ScoreTrackingComponent = () => {
    return (
      <ItemContainer>
        <IconContainer>
          <MaterialCommunityIcons name="monitor-screenshot" size={24} color="#0d9488" />
        </IconContainer>
        <ItemText>
        Keep track of your scores with precision and accuracy.
        </ItemText>
        <CheckContainer>
          <MaterialCommunityIcons name="check" size={24} color="#0d9488" />
        </CheckContainer>
      </ItemContainer>
    )
  }

  const SplitComponent = () => {
    return (
      <ItemContainer>
        <IconContainer>
          <PinIcon
            color="#0d9488"
            height={30}
            width={30}
          />
        </IconContainer>
        <ItemText>
          Master split conversions by tracking and analyzing your performance.
        </ItemText>
        <CheckContainer>
          <MaterialCommunityIcons name="check" size={24} color="#0d9488" />
        </CheckContainer>
      </ItemContainer>
    )
  }

  const GroupComponent = () => {
    return (
      <ItemContainer>
        <IconContainer>
          <MaterialCommunityIcons name="account-group" size={24} color="#0d9488" />
        </IconContainer>
        <ItemText>
          Create or join groups to compare scores, share achievements, and engage in friendly competitions..
        </ItemText>
        <CheckContainer>
          <MaterialCommunityIcons name="check" size={24} color="#0d9488" />
        </CheckContainer>
      </ItemContainer>
    )
  }

  return (
    <Container>
      <Swiper
        showsPagination={true}
        loop={false}
        activeDotColor="#FFF"
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0d9488',
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <Text style={{color: 'white'}}>
            Welcome to the
          </Text>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 28, marginBottom: 24}}> BowlingApp!</Text>
          <AverageMonitoringComponent />
          <ArsenalManagementComponent />
          <ScoreTrackingComponent />
          <SplitComponent />
          <GroupComponent />

          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 36}}>
            <Text style={{color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Slide to start!</Text>
          </View>


        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0d9488',
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <Logo2 />
          <CheckboxContainer>
            <Checkbox
              isSelected={terms}
              setSelection={handleTermCheck}
              text="By creating an account, you agree to our Terms of Service and Privacy Policy."
            />
             <Checkbox
              isSelected={promotions}
              setSelection={handlePromotionCheck}
              text="If would like to sign up for marketing emails from BowlingApp, to keep up to date with the latest news and updates, offers, and more, please check the box below"
            />

          </CheckboxContainer>
          <Text style={{color: 'white'}}>

          </Text>



          <TouchableOpacity
            onPress={onSubmit}
            style={{
              backgroundColor: '#FFF',
              height: 48,
              width: 200,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >

            <Text style={{color: '#0d9488', fontWeight: 'bold'}}>Ready to bowl!</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </Container>
  )
}
