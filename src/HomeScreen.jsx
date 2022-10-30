import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, FlatList, View, Image } from "react-native";
import CoinItem from "./index.jsx";
// import cryptocurrencies from "./assets/data/cryptocurrencies.json";
// import Coin from "./assets/data/crypto.json";
// import CoinDetailedScreen from "./src/CoinDetailedScreen.jsx";

export default function HomeScreen({ cryptocurrencies }) {
  return (
    <View className="pt-10">
      <StatusBar style="light" />
      <View className="flex-row mx-4">
        <Text className="text-white text-xl mb-4 font-bold">Cryptoassets</Text>
        <Text className="text-gray-500 mt-2 mx-4 mr-2">Exchanges</Text>
        <Text className="text-gray-500 mt-2 mx-2">Sectors</Text>
      </View>
      <View className="flex-row mx-4 mb-2 mt-1">
        <Text className="text-white font-semibold mr-3 bg-gray-800 text-xs px-2 py-1 rounded-md">
          My Watchlists
        </Text>
        <Text className="text-white font-semibold mr-3 bg-gray-800 text-xs px-2 py-1 rounded-md">
          USD
        </Text>
        <Text className="text-white font-semibold mr-3 bg-gray-800 text-xs px-2 py-1 rounded-md">
          Portfolio
        </Text>
      </View>
      <View className="mb-44">
        <FlatList
          data={cryptocurrencies}
          renderItem={({ item }) => <CoinItem marketCoin={item} />}
        />
      </View>
    </View>
  );
}
