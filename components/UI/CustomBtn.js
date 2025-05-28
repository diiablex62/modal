import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function CustomBtn({ text, onPressAction, color }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.btn, { backgroundColor: color }]}
      onPress={onPressAction}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "40%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
});
