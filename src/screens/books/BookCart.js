import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  bookCart,
  set_removeBookToCart,
  set_resetBookToCart,
} from "../../redux/slice/borrowerSlice";
import { set_searchBookResult_empty } from "../../redux/slice/bookSlice";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useMutation } from "@apollo/client";
import { BORROW_BOOK } from "../../grapql/borrowers";
import { useTheme } from "@react-navigation/native";

const BookCart = ({ navigation }) => {
  const { background, colors } = useTheme();
  const bookCart_ = useSelector(bookCart);
  const dispatch = useDispatch();
  //mutation
  const [borrowBook, { data }] = useMutation(BORROW_BOOK, {
    onCompleted: (data) => {
      if (data.borrowBook.isSuccessfull) {
        Alert.alert("Message", data.borrowBook.message, [
          {
            text: "OK",
          },
        ]);
        dispatch(set_resetBookToCart());
        dispatch(set_searchBookResult_empty());
      }
    },
  });

  const handleCancel = (item) => {
    dispatch(set_removeBookToCart(item));
  };

  const handleBorrow = () => {
    if (bookCart_.length === 0) {
      Alert.alert("Your List has no items", "", [
        {
          text: "OK",
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    } else {
      Alert.alert(
        "Reserved Now ?",
        "",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              borrowBook({ variables: { input: bookCart_ } });
            },
          },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <View
      style={[
        styles.containerMain,
        { backgroundColor: background.screenBackground },
      ]}
    >
      <Text style={styles.titleMain}>Borrowed List</Text>
      <FlatList
        keyExtractor={(book) => book.bookId}
        contentContainerStyle={{
          padding: 10,
          paddingTop: 10,
          paddingBottom: 20,
        }}
        data={bookCart_}
        renderItem={({ item, index }) => (
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
              <Text style={styles.title}>{item.bookTitle}</Text>
              <Text style={styles.subTitle}>{item.bookId}</Text>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => handleCancel(item)}
              >
                <Text style={styles.touchable_text}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.borrowButton} onPress={handleBorrow}>
        <Text style={styles.borrowButton_text}>Procceed Reservation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookCart;

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  titleMain: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 140,
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  image: {
    width: 70,
    height: 110,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    width: 220,
    fontSize: 16,
    fontWeight: "700",
  },
  subTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "400",
  },
  touchable: {
    width: 80,
    height: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  touchable_text: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  borrowButton: {
    backgroundColor: "#FF9900",
    padding: 20,
  },
  borrowButton_text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
