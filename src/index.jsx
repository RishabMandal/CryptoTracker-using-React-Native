import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CoinItem = ({ marketCoin }) => {
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || "white";

  const navigation = useNavigation();

  return (
    <>
      <Pressable
        className="flex-row py-2"
        style={styles.coinContainer}
        onPress={() =>
          navigation.navigate("BitCoin", {
            id: id,
            current_price: current_price,
          })
        }
      >
        <Image
          className="h-[30px] w-[30px] my-auto mx-3"
          source={{ uri: image }}
        />
        <View>
          <Text className="text-white font-bold">{name}</Text>
          <View className="flex-row">
            <Text className="text-gray-100 mr-[5px] bg-gray-500 rounded-md px-2">
              {market_cap_rank}
            </Text>
            <Text className="text-gray-400 text-xs mr-[5px]">
              {symbol.toUpperCase()}
            </Text>
            {/* Up or Down arrow icon here */}
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={12}
              color={percentageColor}
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text
              className="text-gray-400 text-xs mr-[5px]"
              style={{ color: percentageColor }}
            >
              {price_change_percentage_24h.toFixed(3)}%
            </Text>
          </View>
        </View>
        <View className="ml-auto">
          <Text className="text-white font-bold">{current_price}</Text>
          <View className="flex-row">
            <Text className="text-gray-400 text-xs mr-[5px]">
              MCap {market_cap}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  coinContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
  },
});

export default CoinItem;
