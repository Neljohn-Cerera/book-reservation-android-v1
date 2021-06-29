import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { useBorrowedBooks } from "../../hooks/useBorrowedBooks";
import { useTheme } from "@react-navigation/native";

const ReturnBooks = () => {
  const { background, colors } = useTheme();
  const [qrCode, setQrCode] = useState("test");
  const [loading_, setLoading_] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  const { data, loading } = useBorrowedBooks("60d47cc4f5ded222ccfc5ca2");

  //handle qrcode if to be shown
  const handleQrCode = (qrCode) => {
    setLoading_(true);
    if (showQrCode) {
      setTimeout(() => {
        setShowQrCode(false);
        setQrCode(qrCode);
        setLoading_(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowQrCode(true);
        setQrCode(qrCode);
        setLoading_(false);
      }, 1000);
    }
  };

  return (
    <View style={styles.containerMain}>
      {loading_ ? (
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            zIndex: 2,
          }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : null}
      <Text style={styles.titleMain}>Unreturn Books</Text>
      <FlatList
        keyExtractor={(book) => book._id}
        data={data?.borrowedBooks.borrowers}
        renderItem={({ item, index }) => (
          <>
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
                <Text style={styles.bookTitle}>{item.bookTitle}</Text>
                <Text style={styles.subTitle}>{item.bookId}</Text>
                <TouchableOpacity
                  style={styles.qrcodeButton}
                  onPress={() => handleQrCode(item.qrCode)}
                >
                  <Text style={styles.qrcodeButton_text}>Show QRCODE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      />
      {showQrCode ? (
        <View style={styles.qrcodeContainer}>
          <QRCode content={qrCode} />
          <TouchableOpacity
            style={styles.qrcodeButton}
            onPress={() => handleQrCode("test")}
          >
            <Text style={styles.qrcodeButton_text}>Close QRCODE</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default ReturnBooks;

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
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
  qrcodeContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleMain: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 110,
    marginRight: 10,
    marginLeft: 10,
  },
  bookTitle: {
    width: 220,
    fontSize: 16,
    fontWeight: "700",
  },
  qrcodeButton: {
    width: 120,
    height: 25,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  qrcodeButton_text: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});
