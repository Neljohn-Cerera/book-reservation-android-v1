import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { useTheme } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const { background, colors } = useTheme();
  const { data, loading } = useBooks("");

  return (
    <View style={{ flex: 1, backgroundColor: background.screenBackground }}>
      <Text style={styles.text_recommended}>Recommended For You</Text>

      <FlatList
        data={data?.books.books}
        keyExtractor={(item) => item.bookId}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={5}
        decelerationRate={"normal"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View
                style={[
                  styles.container,
                  { backgroundColor: background.flatlistBackground },
                ]}
              >
                <Image
                  source={require("../../../assets/book.jpg")}
                  style={styles.image}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.title} ellipsizeMode="tail">
                    {item.bookTitle}
                  </Text>
                </View>
                <Text style={styles.bookType}>{item.status.bookType}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text_recommended: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  bookType: {
    position: "absolute",
    right: 10,
    bottom: 10,
    fontSize: 12,
    opacity: 0.5,
  },
  container: {
    flexDirection: "row",
    padding: 10,
    borderColor: "gray",
    borderWidth: 0.5,
    backgroundColor: "white",
    width,
    height: height / 4,
  },
  image: {
    width: 90,
    height: "100%",
    marginRight: 10,
  },
  title: {
    width: 220,
    fontSize: 16,
    fontWeight: "700",
  },
});
