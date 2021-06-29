import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { searchBookResult } from "../../redux/slice/bookSlice";
import { user_id } from "../../redux/slice/userSlice";
import { set_addBookToCart, bookCart } from "../../redux/slice/borrowerSlice";
import { Icon } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const SearchBook = ({ navigation }) => {
  const { background, colors } = useTheme();
  const searchBookResult_ = useSelector(searchBookResult);
  const bookCart_ = useSelector(bookCart);
  const user_id_ = useSelector(user_id);
  const dispatch = useDispatch();

  const handlepress = (item) => {
    navigation.navigate("BookDetails", item);
  };

  const handleBorrow = (item) => {
    let date = new Date();
    date.setDate(date.getDate() + 3);
    let returnDate = Date.parse(date);

    dispatch(
      set_addBookToCart({
        returnDate: returnDate.toString(),
        user: user_id_,
        qrCode: uuidv4(),
        bookTitle: item.bookTitle,
        bookId: item.bookId,
        status: "borrowed",
      })
    );
  };

  const handleCart = () => {
    navigation.navigate("BookCart");
  };

  return (
    <View
      style={{
        paddingBottom: 10,
        backgroundColor: background.screenBackground,
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <Icon
          name="bookshelf"
          color={colors.screenIconColor}
          size={25}
          type="material-community"
        />
        <Text style={[styles.result, { color: colors.screenIconColor }]}>
          {searchBookResult_.length}
        </Text>
        <View style={styles.cart}>
          <TouchableOpacity onPress={handleCart}>
            <Icon
              name="cart-arrow-down"
              color={colors.screenIconColor}
              size={25}
              type="material-community"
            />
            <Text style={[styles.cart_text, { color: colors.screenIconColor }]}>
              {bookCart_.length}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        keyExtractor={(book) => book.bookId}
        contentContainerStyle={{
          padding: 10,
          paddingTop: 10,
          paddingBottom: 20,
        }}
        data={searchBookResult_}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlepress(item)}>
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
              <View>
                <Text
                  style={styles.title}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {item.bookTitle}
                </Text>
                <Text style={styles.authors}>{item.authors}</Text>
                <Text style={styles.copyrightYear}>
                  {item.publisher.copyrightYear}
                </Text>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => handleBorrow(item)}
                  disabled={bookCart_.length > 2 ? true : false}
                >
                  <Text style={styles.touchable_text}>Add to Bookcart</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.bookType}>{item.status.bookType}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchBook;

const styles = StyleSheet.create({
  result: {
    color: "#2699FB",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    width: 220,
    fontSize: 16,
    fontWeight: "700",
  },
  bookType: {
    position: "absolute",
    right: 10,
    bottom: 10,
    fontSize: 12,
    opacity: 0.5,
  },
  authors: {
    fontSize: 14,
    opacity: 0.7,
  },
  copyrightYear: {
    fontSize: 12,
    opacity: 0.5,
  },
  touchable: {
    width: 100,
    height: 30,
    backgroundColor: "#FF9900",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  touchable_text: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  cart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    position: "absolute",
    right: 0,
    top: 10,
  },
  cart_text: {
    position: "absolute",
    left: 30,
    color: "#2699FB",
    fontSize: 20,
    fontWeight: "900",
  },
});
