import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function CoinDetailedScreen({ route, Coin }) {
  //   const [isLoading, setLoading] = useState(true);
  const [Coin2, setCoin2] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${route.params.id}`
      );
      setCoin2(res.data);
      setCoin2(res.data);
      //   setLoading(false);
    }

    getData();
  }, []);

  const {
    id,
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin2 == undefined ? Coin : Coin2;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || "white";

  const navigation = useNavigation();

  //   if (isLoading) {
  //     return (
  //       <View className="App">
  //         <Text>Loading...</Text>
  //       </View>
  //     );
  //   }

  // Price calucluate for different currency function
  //   const [
  //     valueofcoin_leftsideofequaltosign,
  //     setvalueofcoin_leftsideofequaltosign,
  //   ] = useState(1);
  //   const [price, setprice] = useState(route.params.current_price);
  //   function Price() {
  //     setprice(valueofcoin_leftsideofequaltosign * route.params.current_price);
  //     setprice(valueofcoin_leftsideofequaltosign * route.params.current_price);
  //   }
//   let valueofcoin_leftsideofequaltosign = route.params.current_price,
//     price = valueofcoin_leftsideofequaltosign;
//   function Price() {
//     price = valueofcoin_leftsideofequaltosign * route.params.current_price;
    // setprice(valueofcoin_leftsideofequaltosign * route.params.current_price);
//   }

  return (
    <>
      <View className="flex-row pt-10 px-[10px] justify-between">
        <Ionicons
          name="chevron-back-sharp"
          size={30}
          color="white"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <View className="flex-row">
          <Image
            className="h-[30px] w-[30px] my-auto mr-3"
            source={{ uri: small }}
          />
          <Text className="text-white font-bold mr-3 my-auto">
            {symbol.toUpperCase()}
            {/* {route.params.id} */}
          </Text>
          <Text className="text-white font-semibold my-auto bg-gray-500 rounded-md px-1">
            #{market_cap_rank}
          </Text>
        </View>
        <EvilIcons name="user" className="" size={30} color="white" />
      </View>
      <View className="flex-row mx-2 mb-2 mt-4">
        <Text className="text-white font-semibold mr-3 bg-gray-600 text-xs px-2 py-1 rounded-md">
          Overview
        </Text>
        <Text className="text-white font-semibold mr-3 bg-gray-600 text-xs px-2 py-1 rounded-md">
          Markets
        </Text>
        <Text className="text-white font-semibold mr-3 bg-gray-600 text-xs px-2 py-1 rounded-md">
          Portfolio
        </Text>
      </View>
      <View className="flex-row justify-between mx-4 my-2">
        <View>
          <Text className="text-white font-semibold mr-3">{name}</Text>
          <Text className="text-white text-xl font-bold mr-3">
            {current_price.usd} US$
          </Text>
        </View>
        <Text
          className="text-white rounded-md p-2 my-auto font-semibold"
          style={{ backgroundColor: percentageColor }}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            // color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text className=""> {price_change_percentage_24h.toFixed(3)} %</Text>
        </Text>
      </View>
      <View>
        <Text className="text-white text-center">Convert -- into USD</Text>
        <TextInput
          placeholder="1"
          placeholderTextColor="white"
          className="text-white border-2 border-white text-center"
          onChangeText={(val) => {
            // setvalueofcoin_leftsideofequaltosign(val);
            // setvalueofcoin_leftsideofequaltosign(val);
            // valueofcoin_leftsideofequaltosign = val;
            // Price();
            // Price();
          }}
        ></TextInput>
        {/* <Text className="text-white text-center">{price}</Text> */}
      </View>
    </>
  );
}
