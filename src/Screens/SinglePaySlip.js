import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";

const { primary, goldish, black, secondary2, lightGrey } = colors;

const SinglePaySlip = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <RegularText
          style={{
            display: "flex",
            position: "absolute",
            color: black,
            top: 40,
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Payslip details
        </RegularText>

        <View
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            top: 100,
            flex: 1,
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              width: "40%",
            }}
          >
            <SmallText style={{ color: lightGrey, fontSize: 15 }}>
              Pay Period{" "}
              <SmallText style={{ color: black, fontSize: 15 }}>
                {" "}
                Sept 01 2022 - Sept 15 2022
              </SmallText>
            </SmallText>
          </View>

          <View
            style={{ height: "100%", width: 1, backgroundColor: "#909090" }}
          ></View>

          <View>
            <SmallText style={{ color: primary, fontSize: 20 }}>
              $1,050.50
            </SmallText>
            <SmallText
              style={{ color: lightGrey, fontSize: 15, paddingTop: 5 }}
            >
              NET PAY
            </SmallText>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            top: 200,
          }}
        >
          <RegularText style={styles.userText}>John Russell</RegularText>
          <RegularText style={styles.userText}>Network Engineer</RegularText>
          <RegularText style={styles.userText}>IT Department</RegularText>
        </View>

        <View
          style={{
            display: "flex",
            position: "absolute",
            flexDirection: "row",
            top: 280,
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: secondary2,
            height: 40,
            alignItems: "center",
            padding: 5,
          }}
        >
          <RegularText style={styles.headingText}>Earnings</RegularText>

          <View
            style={{ height: "100%", width: 1, backgroundColor: "#909090" }}
          ></View>

          <RegularText style={styles.headingText}>Current</RegularText>

          <View
            style={{ height: "100%", width: 1, backgroundColor: "#909090" }}
          ></View>

          <RegularText style={styles.headingText}>YTD</RegularText>
        </View>

        <View
          style={{
            position: "absolute",
            top: 330,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>Salary</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>
              {" "}
              $1,050.50
            </RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>
              {" "}
              $15,150.00
            </RegularText>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 365,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>Vacation</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 395,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>Bonus</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 425,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>Overtime</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 455,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>Allowance</RegularText>
          </View>
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 485,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>
              Total Earnings
            </RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>
              {" "}
              $1,150.00
            </RegularText>
          </View>
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>
              {" "}
              $15,350.00
            </RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 525,
          }}
        >
          <RegularText style={[styles.headingText, { marginTop: 22 }]}>
            Deductions
          </RegularText>
        </View>

        <View
          style={{
            display: "flex",
            position: "absolute",
            flexDirection: "row",
            top: 575,
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: secondary2,
            height: 40,
            alignItems: "center",
            padding: 5,
          }}
        >
          <RegularText style={styles.headingText}>Taxes</RegularText>

          <View
            style={{ height: "100%", width: 1, backgroundColor: "#909090" }}
          ></View>

          <RegularText style={styles.headingText}>Current</RegularText>

          <View
            style={{ height: "100%", width: 1, backgroundColor: "#909090" }}
          ></View>

          <RegularText style={styles.headingText}>YTD</RegularText>
        </View>

        <View
          style={{
            position: "absolute",
            top: 620,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>
              Nat. Insurance
            </RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 650,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View
            style={{
              width: "20%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <RegularText
              style={[
                styles.underHeadingText,
                {
                  display: "flex",
                  flexWrap: "wrap",
                },
              ]}
            >
              Emp. Insurance
            </RegularText>
          </View>

          <View
            style={{
              width: "20%",
              display: "flex",
              flexWrap: "wrap",
              marginLeft: 5,
            }}
          >
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 680,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,

            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>VAT</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: 710,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: lightGrey,
            borderBottomWidth: 1,
            // paddingBottom: 30,
            alignItems: "center",
            height: 35,
          }}
        >
          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}>
              Total Deductions
            </RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={[styles.underHeadingText]}> $0.00</RegularText>
          </View>

          <View style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
            <RegularText style={styles.underHeadingText}> $0.00</RegularText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userText: {
    paddingVertical: 2,
    color: black,
  },
  headingText: {
    fontSize: 15,
    fontWeight: "bold",
    color: black,
  },
  underHeadingText: {
    color: black,
    marginRight: 4,
  },
  textWrapper: {
    marginRight: 2,
  },
});
export default SinglePaySlip;
