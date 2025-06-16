import { Text, View } from "react-native";
import styles from "./styles"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Root";

type Props = NativeStackScreenProps<RootStackParamList, "signup">;

const Signup= (props:Props) => {
    const {route} = props;
    const {text} =route.params;
  return (
    <View style={styles.container}>
     <Text>Signup</Text>
     <Text>{text}</Text>
    </View>
  )
}

export default Signup;