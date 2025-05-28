import { useState } from "react";
import CustomModal from "./components/CustomModal";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Modal,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputResult, setInputResult] = useState([]);

  const onCreateItem = () => {
    setInputResult((current) => [...current, inputValue]);
    setInputValue("");
  };

  const onPressBtn = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.btn}
          onPress={onPressBtn}>
          <Text style={styles.btnText}>Ajouter un élément</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={inputResult}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item}</Text>
            </View>
          )}
        />
      </View>

      <CustomModal
        isModalVisible={isModalVisible}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onCreateItem={onCreateItem}
        onPressBtn={onPressBtn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 12,
    marginTop: 8,
  },
  btn: {
    width: "100%",
    height: 50,
    marginTop: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "violet",
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },


  resultContainer: {
    width: "100%",
    padding: 8,
    flex: 1,
  },
  itemContainer: {
    width: "100%",
    height: 38,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    color: "white",
    fontSize: 20,
  },


});
