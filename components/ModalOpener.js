import { TouchableOpacity, StyleSheet, View, Text  } from "react-native";

export default function ModalOpener({ onPressBtn }) {

    return (
        <View style={styles.inputContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.btn}
          onPress={onPressBtn}>
          <Text style={styles.btnText}>Ajouter un élément</Text>
        </TouchableOpacity>
      </View>
    )
}
    const styles = StyleSheet.create({
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
      });