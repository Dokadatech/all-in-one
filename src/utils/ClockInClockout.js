import React, { useState } from "react";
import { View, Button, TextInput, Text } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const ClockInOutApp = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [workLocation, setWorkLocation] = useState("");
  const [isWithinRange, setIsWithinRange] = useState(false);

  const handleClockInOut = () => {
    setIsClockedIn(!isClockedIn);
  };

  const handleWorkLocationChange = (location) => {
    setWorkLocation(location);
  };

  Geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const distance = calculateDistance(
        latitude,
        longitude,
        workLocation.latitude,
        workLocation.longitude
      );
      if (distance <= 100) {
        setIsWithinRange(true);
      } else {
        setIsWithinRange(false);
      }
    },
    (error) => console.log(error),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );

  return (
    <View>
      <Button
        title={isClockedIn ? "Clock Out" : "Clock In"}
        onPress={handleClockInOut}
      />
      <TextInput
        placeholder="Enter work location"
        onChangeText={handleWorkLocationChange}
      />
      <Text>{isClockedIn ? "Clocked In" : "Clocked Out"}</Text>
      <Text>{isWithinRange ? "Within 100 feet" : "Not within 100 feet"}</Text>
    </View>
  );
};

export default ClockInOutApp;
