import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import RegularText from "../components/Texts/RegularText";
import { colors } from "../components/colors";
import SmallText from "../components/Texts/SmallText";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import { useState } from "react";
import {printToFileAsync} from "expo-print";
import { shareAsync } from "expo-sharing";


const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json);


//DB Connection
mongoose.connect("mongodb://localhost:")

const { primary, goldish, black, secondary2, lightGrey } = colors;

 const SinglePaySlip = ({ navigation }) => {
  // const ExportPdf = () => {

  // const createPdf = async () => {
  //   let options = {
  //     html: '<h1>Paystub Details<h1>', 
  //     fileName: 'Paystub Details', 
  //     directory: 'Downloads',
  //   };
    
  //   let file = await RNHTMLtoPDF.convert(options);
    
  //   alert(file.filePath);
  // };

  const data = {
    name: 'Orion Bethell',
    address: 'New Providence, Nassau Bahamas',
    phone: '242-356-5311',
    company: 'Bethell Enterprises LTD',
    amount: '356.00',
    amt: '100.50',
    rate: 'Pay Rate: 6.5',
    payFrequency: 'Pay Frequency: Semi-Monthly',
    description: 'Job: Security Officer'
  }

  var date = new Date().getDate();

  const html = `
  <html>
  <head>
    <meta charset="utf-8">
    <title>PayStub</title>
    <title>Date: ${date} </title>
    <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
    <style>
      ${htmlStyles}
    </style>
  </head>
  <body>
    <header>
      <h1>PayStub Details</h1>
      <address>
        <p>${'' + data.name}</p>
        <p>${'' + data.address}</p>s
        <p>${'' + data.phone}</p>
        <p>${'' + data.rate}</p>
        <p>${'' + data.payFrequency}</p>
        <p>${'' + data.description}</p>
      </address>
    </header>
    <article>
      <h1>Recipient</h1>
      <address>
        <p>${data.company}<br>${data.name}</p>
      </address>
      <table class="meta">
        <tr>
          <th><span>Paystub #</span></th>
          <td><span>101138</span></td>
        </tr>
        <tr>
          <th><span>Date</span></th>
          <td><span>${new Date()}</span></td>
        </tr>
        <tr>
          <th><span>Amount Due</span></th>
          <td><span id="prefix">$</span><span>${data.amount}</span></td>
        </tr>
      </table>
      <table class="inventory">
        <thead>
          <tr>
            <th><span>Earnings</span></th>
            <th><span>Current</span></th>
            <th><span>YTD</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>Salary</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
          <tr>
            <td><span>Vacation</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
          <tr>
            <td><span>Bonus</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
          <tr>
            <td><span>Overtime</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
          <tr>
            <td><span>Allowance</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
          <tr>
            <td><span>Total Earnings</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th><span>Taxes</span></th>
            <th><span>Current</span></th>
            <th><span>YTD</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>Nat. Insurance</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span>VAT<span>${data.amt}</span></td>
          </tr>
          <tr>
            <td><span>Emp. Insurance</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
          <tr>
            <td><span>VAT</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
            <td><span data-prefix>$</span><span>${data.amt}</span></td>
          </tr>
        </tbody>
      </table>
      <table class="balance">
        <tr>
          <th><span>Total Deductions</span></th>
          <td><span data-prefix>$</span><span>${data.amt}</span></td>
        </tr>
        <tr>
          <th><span>Amount Paid</span></th>
          <td><span data-prefix>$</span><span>0.00</span></td>
        </tr>
      </table>
    </article>
    <aside>
      <h1><span>Contact Info.</span></h1>
      <div>
        <p>Metro Security Solutions Company Limited</p>
        <p>V.B. Munnings Building,</p>
        <p>Horse Shoe Drive,</p>
        <p>New Providence, Nassau Bahamas</p>
        <p>242-356-5311</p>
      </div>
    </aside>
  </body>
</html>
  `;

  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html, 
      base64: false
    });

    await shareAsync(file.uri);
  };

  return (
    <SafeAreaView>
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        <RegularText
          style={{
            display: "flex",
            position: "absolute",
            color: black,
            top: 40,
            marginTop: -1,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Payslip details
        </RegularText>

        <View style={{flex: 1, marginHorizontal: 25}}>
        <TouchableOpacity onPress={() => generatePdf()}>
          <RegularText
          style={{
            display: "flex",
            position: "absolute",
            color: black, 
            top: 40, 
            marginTop: -1,
            marginLeft: 230,
            fontWeight: "bold", 
            fontSize: 20,
          }}
          >Convert
          </RegularText>
        </TouchableOpacity>
        </View>
        

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
  )
  }
// };


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

const htmlStyles = `
*{
  border: 0;
  box-sizing: content-box;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: top;
}

h1 { font: bold 100% sans-serif; letter-spacing: 0.5em; text-align: center; text-transform: uppercase; }
/* table */
table { font-size: 75%; table-layout: fixed; width: 100%; }
table { border-collapse: separate; border-spacing: 2px; }
th, td { border-width: 1px; padding: 0.5em; position: relative; text-align: left; }
th, td { border-radius: 0.25em; border-style: solid; }
th { background: #9FD8F5; border-color: #BBB; }
td { border-color: #DDD; }
/* page */
html { font: 16px/1 'Open Sans', sans-serif; overflow: auto; }
html { background: #999; cursor: default; }
body { box-sizing: border-box;margin: 0 auto; overflow: hidden; padding: 0.25in; }
body { background: #FFF; border-radius: 1px; box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5); }
/* header */
header { margin: 0 0 3em; }
header:after { clear: both; content: ""; display: table; }
header h1 { background: #FFF; border-radius: 0.25em; color: #1E9CE8; margin: 0 0 1em; padding: 0.5em 0; }
header address { float: left; font-size: 75%; font-style: normal; line-height: 1.25; margin: 0 1em 1em 0; }
header address p { margin: 0 0 0.25em; }
header span, header img { display: block; float: right; }
header span { margin: 0 0 1em 1em; max-height: 25%; max-width: 60%; position: relative; }
header img { max-height: 100%; max-width: 100%; }
/* article */
article, article address, table.meta, table.inventory { margin: 0 0 3em; }
article:after { clear: both; content: ""; display: table; }
article h1 { clip: rect(0 0 0 0); position: absolute; }
article address { float: left; font-size: 125%; font-weight: bold; }
/* table meta & balance */
table.meta, table.balance { float: right; width: 36%; }
table.meta:after, table.balance:after { clear: both; content: ""; display: table; }
/* table meta */
table.meta th { width: 40%; }
table.meta td { width: 60%; }
/* table items */
table.inventory { clear: both; width: 100%; }
table.inventory th { font-weight: bold; text-align: center; }
table.inventory td:nth-child(1) { width: 26%; }
table.inventory td:nth-child(2) { width: 38%; }
table.inventory td:nth-child(3) { text-align: right; width: 12%; }
table.inventory td:nth-child(4) { text-align: right; width: 12%; }
table.inventory td:nth-child(5) { text-align: right; width: 12%; }
/* table balance */
table.balance th, table.balance td { width: 50%; }
table.balance td { text-align: right; }
/* aside */
aside h1 { border: none; border-width: 0 0 1px; margin: 0 0 1em; }
aside h1 { border-color: #999; border-bottom-style: solid; }
`;

export default SinglePaySlip;

