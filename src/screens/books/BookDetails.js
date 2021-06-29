import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BookDetails = ({ route }) => {
  const item = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/book.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>{item.bookTitle}</Text>

      <View style={styles.text_container}>
        <Text style={styles.label}>Book ID </Text>
        <Text style={styles.data}>: {item.bookId}</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Account Number </Text>
        <Text style={styles.data}>: {item.accountNumber}</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>ISBN Number </Text>
        <Text style={styles.data}>: {item.isbnNumber}</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Author </Text>
        <Text style={styles.data}>: {item.authors}</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Publisher Name </Text>
        <Text style={styles.data}>: {item.publisher.publisherName}</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Copyright Year </Text>
        <Text style={styles.data}>: {item.publisher.copyrightYear}</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Book Type </Text>
        <Text style={styles.data}>: {item.status.bookType}</Text>
      </View>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    textAlign: "left",
    fontWeight: "700",
    fontSize: 18,
  },
  text_container: {
    flexDirection: "row",
    marginTop: 10,
  },
  label: {
    textAlign: "left",
    fontWeight: "300",
    fontSize: 14,
    width: 150,
    marginTop: 1,
  },
  data: {
    textAlign: "left",
    fontWeight: "500",
    fontSize: 16,
  },
});
