import {
  KeyboardAvoidingView,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import CustomBtn from "./UI/CustomBtn";

export default function CustomModal({
  isModalVisible,
  inputValue,
  setInputValue,
  onCreateItem,
  onPressBtn,
}) {
  return (
    <Modal visible={isModalVisible} animationType='slide'>
      <KeyboardAvoidingView style={styles.keybordView} behavior='height'>
        <View style={styles.modalView}>
          <Image
            style={styles.image}
            source={{
              uri: "https://franklinpetfood.com/cdn/shop/files/600x600_SAMOYEDE_HEADER_11zon.webp?v=1741700181&width=642",
            }}
          />
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
          />

          <View style={styles.modalBtnContainer}>
            <CustomBtn text='Créer' onPressAction={onCreateItem} color='red' />
            <CustomBtn text='Fermer' onPressAction={onPressBtn} color='blue' />
          </View>

        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  keyboardView: {
    flex: 1,
  },
  modalBtnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
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
  createBtn: {
    width: "40%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginTop: 16,
  },
  closeBtn: {
    width: "40%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    marginTop: 16,
  },
  image: {
    width: 160,
    height: 260,
    borderRadius: 12,
    marginBottom: 40,
    marginTop: 500,
  },
  modalBtnText: {
    color: "white",
    fontSize: 20,
  },
});
