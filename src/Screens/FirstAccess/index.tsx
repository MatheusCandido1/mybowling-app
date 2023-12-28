import { Text, Touchable, View } from 'react-native'
import { Container } from './styles'
import Swiper from 'react-native-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFirstAccessController } from './useFirstAccessController'

export function FirstAccess() {
  const { onSubmit } = useFirstAccessController()
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
          }}
        >
          <Text style={{color: 'white'}}>Welcome 1</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0d9488',
          }}
        >
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
