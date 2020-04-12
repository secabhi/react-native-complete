import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
function BookCount({ type }) {
  const [total, setTotal] = useState(0);
  const totalTypes = type;
  debugger;
  return (
    <React.Fragment>
      {totalTypes.map((value) => (
        <View
          key={value}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20, textTransform: "capitalize" }}>
            {value}
          </Text>
          <Text>{total}</Text>
        </View>
      ))}
    </React.Fragment>
  );
}

export default BookCount;
