import { View, Text } from "react-native";
import React from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Lockup before leaving",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Do not leave without locking up",
  },
];

const AnnouncementModal = () => {
  const renderItem = ({item}) => <Item title={item.title}/>;
  return (
    <View style={{flex: 1, marginHorizontal: 15}}>
      <Text data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      >AnnouncementModal</Text>
    </View>
  );
};

export default AnnouncementModal;
