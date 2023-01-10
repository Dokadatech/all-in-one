import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { Component } from "react";
import UserAvatar from "react-native-user-avatar";





// const { primary, secondary, lightGrey, goldish, white, black } = colors;
class Home extends Component{

  render() {
    return (
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{padding:10, width:'100%', backgroundColor:'#000', height:150}}>
            <TouchableOpacity>
              <Image source={require('../../assets/icon.png')} 
              style={{width: 30, height: 30}}></Image>
              <View></View>
              <View></View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <UserAvatar size={100} name="Orion Bethell" style={{width: 140, height: 140,
            borderRadius:100, marginTop:-70, backgroundColor:'#1E9CE8'}}></UserAvatar>
            <Text style={{fontSize:25, fontWeight:'bold', padding:10}}>Bethell Enterprise LTD</Text>
            <Text style={{fontSize:15, fontWeight:'bold', color:'grey'}}>23, Male</Text>
          </View>
          <View style={{
            alignSelf:'center', 
            flexDirection:'row', 
            justifyContent:'center', 
            backgroundColor:'#fff', 
            width: '98%', 
            padding:20, 
            paddingBottom: 22, 
            borderRadius:10, 
            shadowOpacity: 80, 
            elevation: 15, 
            marginTop:20
            }}>
            <Image source={require('../../assets/person.png')} 
            style={{width:25, height:25}}></Image>
            <Text style={{fontSize:15, color:'#818181', fontWeight:'bold', marginLeft:10}}>Orion Bethell</Text>
          </View>
          <View style={{
            alignSelf:'center', 
            flexDirection:'row', 
            justifyContent:'center', 
            backgroundColor:'#fff', 
            width: '98%', 
            padding:20, 
            paddingBottom: 22, 
            borderRadius:10, 
            shadowOpacity: 80, 
            elevation: 15, 
            marginTop:20
            }}>
            <Image source={require('../../assets/location.png')} 
            style={{width:20, height:20}}></Image>
            <Text style={{fontSize:15, color:'#818181', fontWeight:'bold', marginLeft:10}}>New Providence, Nassau Bahamas</Text>
          </View>
          <View style={{
            alignSelf:'center', 
            flexDirection:'row', 
            justifyContent:'center', 
            backgroundColor:'#fff', 
            width: '98%', 
            padding:20, 
            paddingBottom: 22, 
            borderRadius:10, 
            shadowOpacity: 80, 
            elevation: 15, 
            marginTop:20, 
            }}>
            <Image source={require('../../assets/briefcase.png')} 
            style={{width:20, height:20}}></Image>
            <Text style={{fontSize:15, color:'#818181', fontWeight:'bold', marginLeft:10}}>Product Designer</Text>
          </View>
          <TouchableOpacity style={{
            alignSelf:'center', 
            flexDirection:'row', 
            justifyContent:'center', 
            backgroundColor:'#fff', 
            width: '98%', 
            padding:20, 
            paddingBottom: 22, 
            borderRadius:10, 
            shadowOpacity: 80, 
            elevation: 15, 
            marginTop:20, 
            marginBottom: 40, 
            backgroundColor: '#000'
            }}>
            <Text style={{fontSize:15, color:'#fff', fontWeight:'bold', marginLeft:10}}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
  
export default Home;
// const Profiles = () => {
//   const [jobTitle, setJobTitle] = useState("Network engineer");
//   const [Pic, SetPic] = React.useState(Pic);

//   const setToast = msg => {
//     ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
//   }

//   const uploadImage = () => {
//     let options = {
//       mediaType: 'photo', 
//       quality: 1, 
//       includeBase64: true,
//     };

//     launchImageLibrary(options, response => {
//       if(response.didCancel) {
//         setToast('Cancelled image selection');
//       }else if(response.errorCode == 'permission') {
//         setToast('Permission not sastified');
//       }else if(response.errorCode == 'others') {
//         setToast(response.errorMessage);
//       }else if(response.assets[0].fileSize > 20971520) {
//         Alert.alert(
//         'Maximum image size exceeded', 
//         'Please choose image under 2 MB', 
//         [{text: 'OK'}],
//         );
//       }else{
//         SetPic(response.assets[0].base64);
//       }
//     });
//   };

//   const removeImage = () => {
//     SetPic('')
//     setToast('Image Removed');
//   };

//   return (
//     <><View>
//       <View style={styles.createContent}>
//       <TouchableHighlight
//         onPress={() => uploadImage()}
//         underlayColor='rgba(0,0,0,0)'>
//           <Avatar.Image
//           size={250}
//           source={{uri: 'data:image/png;base64,' + Pic}}
//           />
//         </TouchableHighlight>
//       </View>
//       <View style={[styles.createContent, {marginTop:25, flexDirection: 'row'}]}>
//         <Button mode='contained' onPress={() => uploadImage()}>
//         Upload Image
//         </Button>
//         <Button mode='contained' 
//         style={{marginLeft: 20}} 
//         onPress={() => removeImage()}>
//         Remove Image
//         </Button>
//       </View>
//     </View>
//     <View
//       style={{
//         display: "flex",
//         position: "absolute",
//         width: ScreenWidth,
//       }}
//     >
//         <View
//           style={{
//             flex: 0.5,
//             justifyContent: "center",
//             alignItems: "center",
//             position: "absolute",
//           }}
//         >
//           <Card
//             style={{
//               display: "flex",
//               width: ScreenWidth,
//               position: "relative",
//             }}
//           >
//             <RegularText
//               style={{
//                 textAlign: "center",
//                 //display: "flex",
//                 flexWrap: "wrap",
//                 // position: "absolute",
//                 color: black,
//                 marginTop: -15,
//                 // top: 80,
//                 fontWeight: "bold",
//                 // fontSize: 25,
//               }}
//             >
//               {jobTitle} at Bethell''s Enterprise LTD
//             </RegularText>
//             <RegularText
//               style={{
//                 textAlign: "center",
//                 display: "flex",
//                 marginTop: -115,
//                 flexWrap: "wrap",
//                 // position: "absolute",
//                 color: black,
//                 // top: 80,
//                 fontWeight: "bold",
//                 // fontSize: 25,
//               }}
//             >
//               Nassau, Bahamas
//             </RegularText>
//             <Card.Content>
//               <Paragraph
//                 style={{
//                   textAlign: "center",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <RegularText
//                   style={{
//                     fontWeight: "bold",
//                     color: "black",
//                   }}
//                 >
//                   Job Description:{" "}
//                 </RegularText>
//                 Lorem ipsum dolor sit amet. Sed repellendus quisquam in dolorem t
//                 corrupti voluptate ex nisi natus At sapiente error aut iusto quos
//                 ut optio consequ
//               </Paragraph>
//             </Card.Content>
//           </Card>
//     </View>
//     </View>
//     </>
//   );
// }

// export default Profiles;

// const styles = StyleSheet.create({
//   createContent: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 100, 
//   },
// });
