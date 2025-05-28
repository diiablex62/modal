import { useState } from "react";
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
          onPress={onPressBtn}
        >
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
      

      <Modal visible={isModalVisible} animationType="slide">

        <View style={styles.modalView}>

          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
          />

          <View style={styles.modalBtnContainer}>

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.createBtn}
              onPress={onCreateItem}
            >

              <Text style={styles.btnText}>Créer</Text>
            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.closeBtn}
              onPress={onPressBtn}
            >
              <Text style={styles.btnText}>Fermer</Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>
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
  modalView: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  closeBtn: {
    width: "40%",
    height: 50,
    marginTop: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    height: 42,
    fontSize: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  modalBtnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  createBtn: {
    width: "40%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginTop: 16,
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