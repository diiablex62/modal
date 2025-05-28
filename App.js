import { useState } from "react";
import CustomModal from "./components/CustomModal";
import ItemList from "./components/ItemList";
import ModalOpener from "./components/ModalOpener";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
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
  
      <ModalOpener onPressBtn={onPressBtn} />

      <ItemList inputResult={inputResult} />

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
  


});
