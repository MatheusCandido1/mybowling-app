import { Linking, Text, Touchable, View } from 'react-native'
import { CheckContainer, Container, IconContainer, ItemContainer, ItemText, CheckboxContainer } from './styles'
import Swiper from 'react-native-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFirstAccessController } from './useFirstAccessController'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ball2Icon } from '../../components/Icons/Ball2Icon'
import { PinIcon } from '../../components/Icons/PinIcon'
import { Checkbox } from '../../components/Shared/Forms/Checkbox'
import Logo2 from '../../assets/img/logo2.svg';
import PushNotifications from '../../notifications/PushNotifications'

export function FirstAccess() {
  const {
    onSubmit,
    terms,
    handleTermCheck,
    promotions,
    handlePromotionCheck,
    handleShowPushNotification,
    showPushNotification
  } = useFirstAccessController();

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

  const handleOpenTerms = () => {
    return (<Text> By creating an account, you agree to our
        <Text>{' '}</Text>
        <Text style={{color: 'white', textDecorationLine:"underline"}} onPress={() => Linking.openURL("https://www.privacypolicies.com/live/b7b86ab6-eb8d-47d0-9c28-a7ca406a45a3")}>
        Privacy Policy
      </Text>
      .
    </Text>)
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
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 28, marginBottom: 24}}> SplitMate!</Text>
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
          <Text style={{color: '#FFF', fontSize: 28, fontWeight: 'bold', marginBottom: 24}}>
            Get Notified!
          </Text>
          <Text style={{color: '#FFF', textAlign: 'center'}}>
            Allow SplitMate to send you push notifications when you have new messages, group invites, and more. Click the button below to enable notifications.
          </Text>
          {showPushNotification ? <PushNotifications /> : null}

          <TouchableOpacity
            onPress={handleShowPushNotification}
            style={{
              backgroundColor: '#FFF',
              height: 48,
              width: 200,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 24,
            }}
          >

            <Text style={{color: '#0d9488', fontWeight: 'bold'}}>Enable Notifications</Text>
          </TouchableOpacity>

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
              content={handleOpenTerms()}
            />
             <Checkbox
              isSelected={promotions}
              setSelection={handlePromotionCheck}
              content={
                <Text>
                  If you would like to sign up for marketing emails from SplitMate, to keep up to date with the latest news and updates, offers, and more, please check the box below
                </Text>
              }
            />

          </CheckboxContainer>


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
