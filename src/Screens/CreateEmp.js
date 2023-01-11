import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Platform,
  Pressable,
  Modal,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext } from "react";
import RegularText from "../components/Texts/RegularText";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { colors } from "../components/colors";
import Checkbox from "expo-checkbox";
import KeyboardAvoid from "../components/Containers/KeyboardAvoid";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GlobalStates } from "../GlobalStates/GlobalContext";

const { primary, white, goldish, secondary2, secondary, black, lightGrey } =
  colors;

const CreateEmp = () => {
  const [reasonInput, setReasonInput] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const { workLocation, setWorkLocation } = useContext(GlobalStates);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: primary, zIndex: 1 }}>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
              position: "relative",
              backgroundColor: primary,
              marginHorizontal: 10,
              top: 20,
            },
            textInput: { fontSize: 18 },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          placeholder="Location"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data.place_id);
            setWorkLocation(data.place_id);
          }}
          query={{
            key: "AIzaSyDrt1sIUQyyTQ-Fb889zUsDzH2askT2rvQ",
            language: "en",
          }}
        />
      </View>
      <KeyboardAvoid>
        <View
          style={{
            backgroundColor: primary,
            width: "100%",
            display: "flex",
            height: 450,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
          }}
        >
          <View
            style={{
              position: "relative",
              top: 50,
              // alignItems: "center",
            }}
          >
            <View
              style={[
                styles.inputContainer,
                {
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  justifyContent: "space-evenly",
                  // marginBottom: 50,
                },
              ]}
            >
              <TextInput style={styles.input} placeholder="First Name" />

              <TextInput style={styles.input} placeholder="Last Name" />
              <TextInput style={styles.input} placeholder="Email" />
              <TextInput style={styles.input} placeholder="Password" />
              <TextInput style={styles.input} placeholder="Job Title" />
              <TextInput
                style={styles.input}
                placeholder="Payrate"
                keyboardType="numeric"
              />
            </View>
            <RegularText
              style={{ color: white, position: "relative", marginLeft: 15 }}
            >
              Check the box below if the new employee is an admin.
            </RegularText>
            <View
              style={{
                marginLeft: 15,
                marginTop: 5,
                flex: 1,
              }}
            >
              <Checkbox
                style={{ backgroundColor: secondary2 }}
                disabled={false}
                value={isEnabled}
                onValueChange={(val) => {
                  setIsEnabled(val), console.log(val);
                }}
              />
            </View>
          </View>
        </View>

        {
          //next view starts here
        }

        <View>
          <TextInput
            style={{
              backgroundColor: white,
              position: "relative",
              padding: 5,
              height: 100,
              borderRadius: 20,
              marginHorizontal: 10,
              marginTop: -40,
            }}
            placeholder="Job Desription"
            onChangeText={setReasonInput}
            value={reasonInput}
          />
        </View>
        <MainBtn
          onPress={() => {
            console.log("Submit");
            //  navigation.navigate("RequestDays")
          }}
          style={{
            height: 57,
            position: "relative",
            backgroundColor: goldish,
            top: 60,
            marginBottom: 180,
          }}
        >
          <BigText
            style={{
              color: primary,
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "left",
            }}
          >
            Create User
          </BigText>
        </MainBtn>
      </KeyboardAvoid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    width: "45%",

    padding: 10,
    borderRadius: 10,
    backgroundColor: white,
  },
  inputContainer: {
    position: "relative",
    // top: 70,
  },
});
export default CreateEmp;
