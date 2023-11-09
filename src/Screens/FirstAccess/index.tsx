import { Text, View } from 'react-native'
import { Container } from './styles'
import Swiper from 'react-native-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function FirstAccess() {
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
          <Text style={{color: 'white'}}>Welcome 2</Text>
        </View>
      </Swiper>
    </Container>
  )
}
