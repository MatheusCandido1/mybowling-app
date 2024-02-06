import { Dimensions, Modal, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Overlay,
  Container,
  Header,
  Title,
  Content,
} from "./styles";
import {
  LineChart,
} from "react-native-chart-kit";
import { useAverageModalController } from "./useAverageModalController";

export function AverageModal() {
  const { labels, values, showAverageModal, handleCloseAverageModal } = useAverageModalController();

  return (
    <Modal
      visible={showAverageModal}
      animationType="fade"
      transparent
    >
    <Overlay>
      <Container>
        <Header>
          <Title>Average History</Title>
          <TouchableOpacity onPress={handleCloseAverageModal}>
            <MaterialCommunityIcons name="close" size={32} color="#000" />
          </TouchableOpacity>
        </Header>
        <Content>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
        <LineChart
    data={{
      labels: labels,
      datasets: [
        {
          data: values
        }
      ],
      legend: ["Average Per Month"]
    }}
    width={Dimensions.get('window').width * 0.85} // from react-native
    height={340}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundGradientFrom: "#55b4ab",
      backgroundGradientTo: "#0d9488",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        width: "100%",
        backgroundColor: "#0F0"
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#09675f"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  /></View>

        </Content>
      </Container>
    </Overlay>
    </Modal>
  )
}
