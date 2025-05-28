import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ItemList({ inputResult }) {

    return (
        <View style={styles.resultContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item) => item}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text>Aucun élément</Text>
            </View>
          }
          data={inputResult}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item}</Text>
            </View>
          )}
        />
      </View>


    )
};


const styles = StyleSheet.create({
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
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });