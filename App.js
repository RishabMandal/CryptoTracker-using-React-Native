// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, FlatList, View, Image } from "react-native";
// import CoinItem from "./src/index.jsx";
import cryptocurrencies2 from "./assets/data/cryptocurrencies.json";
import Coin from "./assets/data/crypto.json";
import CoinDetailedScreen from "./src/CoinDetailedScreen.jsx";
import HomeScreen from "./src/HomeScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Stack = createNativeStackNavigator();

export default function App() {
  const [cryptocurrencies, setcryptocurrencies] = useState(cryptocurrencies2);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
      );

      // cryptocurrencies = res;
      setcryptocurrencies(res.data);
      setcryptocurrencies(res.data);
      // console.log(res);
      // console.log(cryptocurrencies);
    }

    getData();
  }, []);

  return (
    <NavigationContainer theme={{ colors: { background: "#121212" } }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} cryptocurrencies={cryptocurrencies} />
          )}
        </Stack.Screen>
        <Stack.Screen name="BitCoin">
          {(props) => <CoinDetailedScreen {...props} Coin={Coin} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  coinContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
  },
});
