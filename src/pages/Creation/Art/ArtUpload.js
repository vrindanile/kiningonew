// // import React, { useEffect, useState, useRef } from 'react';
// // import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native';
// // import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
// // import SearchInput2 from '../../../component/SearchInput2';
// // import SearchInputEnt from '../../../component/SearchInputEnt';
// // import FashionSearch from './components/FashionSearch';
// // import SerchInput from '../../../component/SerchInput';
// // import { dimensions, Mycolors } from '../../../utility/Mycolors';
// // import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
// // import ImagePicker from 'react-native-image-crop-picker';
// // import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2 } from '../../../WebApi/Service'

// // import MyButtons from '../../../component/MyButtons';
// // import MultiSlider from '@ptomasroos/react-native-multi-slider';
// // import Modal from 'react-native-modal';
// // import Toast from 'react-native-simple-toast'
// // import LinearGradient from 'react-native-linear-gradient'
// // import AppIntroSlider from 'react-native-app-intro-slider';
// // import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
// // import { androidCameraPermission } from '../../../pages/Connect/People/Permissions';
// // import { useSelector, useDispatch } from 'react-redux';
// // import Loader from '../../../WebApi/Loader';
// // import VideoPlayer from 'react-native-video-player'
// // import { createThumbnail } from "react-native-create-thumbnail";
// // import ViewMoreText from 'react-native-view-more-text';
// // import axios from 'axios';
// // const ArtUpload = (props) => {
// //   const dispatch = useDispatch();
// //   const User = useSelector(state => state.user.user_details)
// //   console.log('User', User.token);
// //   const [searchValue, setsearchValue] = useState('')
// //   const [scrollEnabled, setScrollEnabled] = useState(false)
// //   const myTextInput = useRef()
// //   const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
// //   const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
// //   const [selectedCategory, setSelectedCategory] = useState(null)
// //   const [loading, setLoading] = useState(false)
// //   const [showModal, setShowModal] = useState({ isVisible: false, data: null });
// //   const [picker, setPicker] = useState('')
// //   const [showVideoModal, setShowVideoModal] = useState(false)
// //   const [selectedVideo, setSelectedVideo] = useState({})
// //   const [showReportModal, setShowReportModal] = useState(false)
// //   const [selectedReasonId, setSelectedReasonId] = useState(null)
// //   const [headingTitle, setHeadingTitle] = useState('')
// //   const [newsArticle, setNewsArticle] = useState('')
// //   const [reportReasonData, setReportReasonData] = useState([
// //     {
// //       id: '1',
// //       name: 'I just don’t like it',
// //       description: '',
// //       selected: true
// //     },
// //     {
// //       id: '2',
// //       name: 'Nudity or pornography',
// //       description: '',
// //       selected: false
// //     },
// //     {
// //       id: '3',
// //       name: 'Hate speech or symbols',
// //       description: 'Racist, homophobic or sexist slurs',
// //       selected: false
// //     },
// //     {
// //       id: '4',
// //       name: 'Violence or threat of violence',
// //       description: `Graphic injury, unlawful activity, dangerous or criminal organizations`,
// //       selected: false
// //     },
// //     {
// //       id: '5',
// //       name: 'Sale or promotion of firearms',
// //       description: '',
// //       selected: false
// //     },
// //     {
// //       id: '6',
// //       name: 'Sale or promotion of drugs',
// //       description: '',
// //       selected: false
// //     },
// //     {
// //       id: '7',
// //       name: 'Harassment or bullying',
// //       description: '',
// //       selected: false
// //     },
// //     {
// //       id: '8',
// //       name: 'Intellectual property violation',
// //       description: 'Copyright or trademark infringement',
// //       selected: false
// //     },
// //   ])
// //   const [videoDetails, setVideoDetails] = useState([
// //     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
// //     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
// //     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
// //   ])
// //   const [classesList, setClassesList] = useState([
// //     {
// //       id: '1',
// //       title: 'Graphic Design Class',
// //       price: 949,
// //       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
// //       distance: '3 kms away',
// //       img: require('../../../assets/images/service-product-image.png'),
// //     },
// //     {
// //       id: '2',
// //       title: 'Graphic Design Class',
// //       price: 949,
// //       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
// //       distance: '3 kms away',
// //       img: require('../../../assets/images/service-product-image.png'),
// //     },
// //     {
// //       id: '3',
// //       title: 'Graphic Design Class',
// //       price: 949,
// //       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
// //       distance: '3 kms away',
// //       img: require('../../../assets/images/service-product-image.png'),
// //     },
// //   ])
// //   const [aroundTheWorldData, setAroundTheWorldData] = useState([
// //     {
// //       id: '1',
// //       name: 'Leslie Alexander',
// //       desc: '',
// //       time: '14 hours ago',
// //       img: require('../../../assets/images/fashion-around-the-world-image.png'),
// //       likes: '4k',
// //       dislikes: '1k',
// //     },
// //     {
// //       id: '2',
// //       name: 'Leslie Alexander',
// //       desc: '',
// //       time: '14 hours ago',
// //       img: require('../../../assets/images/fashion-around-the-world-image.png'),
// //       likes: '4k',
// //       dislikes: '1k',
// //     },
// //     {
// //       id: '3',
// //       name: 'Leslie Alexander',
// //       desc: '',
// //       time: '14 hours ago',
// //       img: require('../../../assets/images/fashion-around-the-world-image.png'),
// //       likes: '4k',
// //       dislikes: '1k',
// //     },
// //   ])
// //   const [courseData, setCourseData] = useState([
// //     {
// //       id: '1',
// //       title: 'Celebrity Style',
// //       desc: '',
// //       time: '',
// //       img: require('../../../assets/images/fashion-celebrity-style.png'),
// //     },
// //     {
// //       id: '2',
// //       title: 'Street Style',
// //       desc: '',
// //       time: '',
// //       img: require('../../../assets/images/fashion-celebrity-style.png'),
// //     },
// //     {
// //       id: '3',
// //       title: 'Models',
// //       desc: '',
// //       time: '',
// //       img: require('../../../assets/images/fashion-celebrity-style.png'),
// //     },
// //   ])
// //   const [upData, setupData] = useState([
// //     {
// //       id: '1',
// //       catId: '1',
// //       title: 'Intel 3rd Gen Motherboard',
// //       desc: '',
// //       price: '$140.00',
// //       time: '',
// //       img: require('../../../assets/images/intel_motherboard.png'),
// //     },
// //     {
// //       id: '2',
// //       catId: '2',
// //       title: 'Intel 3rd Gen Motherboard',
// //       desc: '',
// //       price: '$140.00',
// //       time: '',
// //       img: require('../../../assets/images/intel_motherboard.png'),
// //     },
// //     {
// //       id: '3',
// //       catId: '3',
// //       title: 'Intel 3rd Gen Motherboard',
// //       desc: '',
// //       price: '$140.00',
// //       time: '',
// //       img: require('../../../assets/images/intel_motherboard.png'),
// //     },
// //     {
// //       id: '4',
// //       catId: '4',
// //       title: 'Intel 3rd Gen Motherboard',
// //       desc: '',
// //       price: '$140.00',
// //       time: '',
// //       img: require('../../../assets/images/intel_motherboard.png'),
// //     },
// //     {
// //       id: '5',
// //       catId: '1',
// //       title: 'Intel 3rd Gen Motherboard',
// //       desc: '',
// //       price: '$140.00',
// //       time: '',
// //       img: require('../../../assets/images/intel_motherboard.png'),
// //     },
// //     {
// //       id: '6',
// //       catId: '2',
// //       title: 'Intel 3rd Gen Motherboard',
// //       desc: '',
// //       price: '$140.00',
// //       time: '',
// //       img: require('../../../assets/images/intel_motherboard.png'),
// //     },
// //     {
// //       id: '7',
// //       catId: '3',
// //       title: 'Intel 3rd Gen Motherboard',
// //       desc: '',
// //       price: '$140.00',
// //       time: '',
// //       img: require('../../../assets/images/intel_motherboard.png'),
// //     },
// //   ])
// //   // const [selectedCategory, setSelectedCategory] = useState({})
// //   const [modlevisual, setmodlevisual] = useState(false);
// //   const [categoryData, setCategorydata] = useState('')
// //   const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
// //   useEffect(() => {

// //   }, [])

// //   useEffect(() => {
// //     ArtCategory()
// //   }, [])
// //   const ArtCategory = async () => {
// //     setLoading(true)
// //     var fUrl = art_getCollection
// //     var urls = '?module_id=' + '53'
// //     console.log('my url---------->', urls)
// //     if (urls != undefined) {
// //       fUrl = fUrl + urls
// //     }
// //     // console.log("LIKE CLICK:::",isSaved);
// //     const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
// //     setLoading(false)
// //     console.log('the res Home==>>', responseJson)
// //     if (responseJson.headers.success == 1) {
// //       console.log('the res after sucess', responseJson.body.data)
// //       setCategorydata(responseJson.body.data)
// //       // Toast.show({ text1: responseJson.headers.message });
// //     } else {

// //       setalert_sms(err)
// //       setMy_Alert(true)
// //     }
// //   }


// //   const _renderItem = ({ item }) => {
// //     return (
// //       <Image source={{ uri: item.image }} style={{ width: '100%', height: 170, borderRadius: 20, alignSelf: 'center' }} />
// //       // <View key={item.key} style={styles.slide}>
// //       //   <Text style={styles.title}>{item.title}</Text>
// //       //   <Text style={styles.text}>{item.text}</Text>
// //       // </View>
// //     );
// //   }

// //   const openImageModal = (index) => {

// //     console.log('my image')
// //     setmodlevisual(true)
// //   }
// //   const onVideo = async () => {
// //     console.log('picker');
// //     try {
// //       let value =
// //         ImagePicker.openPicker({
// //           mediaType: 'video',
// //           cropping: false,
// //           includeBase64: false,
// //           compressVideoPreset: 'MediumQuality',
// //           writeTempFile: true,
// //         }).then(video => {
// //           console.log('---------then block------->', video);
// //           //setPicker(video);
// //           // setcurrentSelection('image')
// //           //setmodlevisual(false)
// //         });
// //     } catch (error) {
// //       console.log('error in openLibrary', error);
// //     }
// //   }
// //   const onGallery = async () => {
// //     console.log('picker');
// //     try {
// //       let value = await ImagePicker.openPicker({
// //         width: 1080,
// //         height: 1080,
// //         cropping: true,
// //         mediaType: 'photo',
// //         compressImageQuality: 1,
// //         compressImageMaxHeight: 1080 / 2,
// //         compressImageMaxWidth: 1080 / 2,
// //         multiple: true
// //       }).then(images => {
// //         console.log('---------then block------->', images);
// //         setPicker(images);
// //         // setcurrentSelection('image')
// //         setmodlevisual(false)
// //       });
// //     } catch (error) {
// //       console.log('error in openLibrary', error);
// //     }
// //   };

// //   //////image picker 
// //   const onSelectImage = async () => {

// //     const permissionStatus = await androidCameraPermission()
// //     if (permissionStatus) {
// //       console.log('jjjjjalert');
// //       Alert.alert(
// //         'choose Picture',
// //         'choose an option',
// //         [
// //           { text: 'camera', onPress: onCamera },
// //           { text: 'Gallery', onPress: onVideo },
// //           { text: 'Cancel', onPress: () => { } }
// //         ]
// //       )
// //     } else {
// //       Alert.alert(
// //         'choose Picture',
// //         'choose an option',
// //         [
// //           { text: 'camera', onPress: onCamera },
// //           { text: 'Gallery', onPress: onGallery },
// //           { text: 'Cancel', onPress: () => { } }
// //         ]
// //       )
// //     }
// //   }
// //   const onCamera = () => {
// //     ImagePicker.openCamera({
// //       width: 300,
// //       height: 400,
// //       cropping: true,
// //     }).then(image => {
// //       console.log(image)
// //       setPicker(image);
// //       // setcurrentSelection('image')
// //       setmodlevisual(false)

// //     });
// //   }

// //   // const Createpost = async () => {
// //   //   console.log('creaye post', picker);

// //   //   const data = new FormData();
// //   //   data.append(`headline`, headingTitle)
// //   //   data.append(`description`, newsArticle)
// //   //   data.append(`status`, 1)
// //   //   data.append(`category_id`, selectedCategory)
// //   //   data.append(`module_id`, 53)
// //   //   if (picker.length > 0) {
// //   //     const imgs = []
// //   //     picker.map((item, index) => {
// //   //       const imageName = item.path.slice(
// //   //         item.path.lastIndexOf('/'),
// //   //         item.path.length,
// //   //       );
// //   //       imgs.push({
// //   //         name: imageName,
// //   //         type: item.mime,
// //   //         uri: item.path,
// //   //       });
// //   //     });
// //   //     data.append(`files`, imgs)
// //   //   }
// //   //   console.log(data, 'data');

// //   //   const { responseJson, err } = await requestPostApi(art_PostCollection, data, 'POST', User.token)
// //   //   setLoading(false)
// //   //   console.log('the res create post==>>', responseJson)
// //   //   if (responseJson.headers.success == 1) {
// //   //     console.log('the res after sucess', responseJson.body.data)
// //   //     setCategorydata(responseJson.body.data)
// //   //     // Toast.show({ text1: responseJson.headers.message });
// //   //   } else {
// //   //     console.log('error', responseJson.headers.message);
// //   //     setalert_sms(err)
// //   //     setMy_Alert(true)
// //   //   }
// //   // }





// //   const Createpost = async () => {
// //     console.log('kkkkkkkkk', selectedCategory)
// //     try {
// //       const data = new FormData();
// //       data.append(`headline`, headingTitle)
// //       data.append(`description`, newsArticle)
// //       data.append(`status`, 1)
// //       data.append(`category_id`, selectedCategory.id)
// //       data.append(`module_id`, 53)
// //       if (picker.length > 0) {
// //         picker.map((item, index) => {
// //           const imageName = item.path.slice(
// //             item.path.lastIndexOf('/'),
// //             item.path.length,
// //           );
// //           data.append(`files`, {
// //             name: imageName,
// //             type: item.mime,
// //             uri: item.path,
// //           });
// //         });

// //       }
// //       console.log(data, 'data');
// //       const { response, status } = await axios

// //         .post(
// //           'http://54.153.75.225/backend/api/v1/creation/art/create-article',
// //           data,

// //           {
// //             headers: {
// //               'Content-Type': 'multipart/form-data',
// //               Authorization: `Bearer ${User.token}`,
// //             },
// //           },
// //         )
// //         .then(res => {
// //           return {
// //             response: res.data,
// //             status: true,
// //           };

// //         }
// //         )

// //         .catch(err => {
// //           return {
// //             response: err,
// //             status: false,
// //           };
// //         });
// //       console.log(response, status);
// //       if (status === true) {
// //         props.navigation.navigate('ArtHome')
// //       } else {
// //         console.log(response.headers.message);
// //       }

// //     } catch (error) {
// //       console.error('error in TestingUploading', response.headers.messagerror);
// //     }
// //   };
// //   return (
// //     <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
// //       <ScrollView>
// //         <HomeHeaderRoundBottom height={100} paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#0089CF'
// //           press1={() => { props.navigation.goBack() }} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18}
// //           press2={() => { }} title2={'Upload'} fontWeight={'500'} img2height={20} color={'#fff'}
// //           press3={() => { }} img3={require('../../../assets/images/fashion-bell-icon.png')} img3width={25} img3height={22} />

// //         <View style={{ width: '85%', alignSelf: 'center', marginTop: 30 }}>

// //           <Text style={{ fontSize: 16, fontWeight: '500', color: '#263238', marginBottom: 5 }}>Choose Category</Text>

// //           <View style={{ width: dimensions.SCREEN_WIDTH * 0.9, alignSelf: 'flex-start', marginTop: 0, marginBottom: 10, marginTop: 10 }}>
// //             <FlatList
// //               data={categoryData}
// //               showsHorizontalScrollIndicator={true}
// //               horizontal
// //               renderItem={({ item, index }) => {
// //                 return (

// //                   <TouchableOpacity style={[{ width: dimensions.SCREEN_WIDTH / 2.8, height: 160, marginRight: 15, borderRadius: 10, overflow: 'hidden', position: 'relative', alignItems: 'center', borderRadius: 15, paddingHorizontal: 10, }, selectedCategory?.name
// //                     === item?.name
// //                     ? styles.categorySelectedStyle : null]}
// //                     onPress={() => { setSelectedCategory(item) }}>
// //                     <Image source={{ uri: item.category_image }} style={{ width: dimensions.SCREEN_WIDTH / 2.8, height: 160 }} resizeMode='stretch'></Image>
// //                     <LinearGradient
// //                       colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.43)']}
// //                       style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, }}
// //                     >
// //                       {/* {selectedCategory === item.id ?
// //                         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
// //                           <Image source={require('../../../assets/images/fashion-selected-category-check-circle.png')} style={{ alignSelf: 'flex-end', top: 10, right: 10 }} />
// //                           <Text style={{
// //                             fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
// //                               === item?.name) ? '#29913C' : Mycolors.Black, textAlign: 'center', bottom: 20
// //                           }}>{item.name}</Text>
// //                         </View>
// //                         : */}
// //                       <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
// //                         <Text style={{
// //                           fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
// //                             === item?.name) ? 'black' : 'white', bottom: 20
// //                         }}>{item.name}</Text>
// //                       </View>
// //                       {/* } */}
// //                     </LinearGradient>
// //                   </TouchableOpacity>
// //                 )
// //               }}
// //               keyExtractor={item => item.id}
// //             />
// //           </View>

// //           <TextInput
// //             value={headingTitle}
// //             onChangeText={(e) => setHeadingTitle(e)}
// //             placeholder={'Heading Title'}
// //             placeholderTextColor="#8F93A0"
// //             multiline={true}
// //             // maxLength={500}
// //             // keyboardType="number-pad"
// //             autoCapitalize='none'
// //             style={styles.headingTitleStyle}
// //           />

// //           <TextInput
// //             value={newsArticle}
// //             onChangeText={(e) => setNewsArticle(e)}
// //             placeholder={'Type your news Article here...'}
// //             placeholderTextColor="#8F93A0"
// //             multiline={true}
// //             // maxLength={500}
// //             // keyboardType="number-pad"
// //             autoCapitalize='none'
// //             style={styles.newsArticleStyle}
// //           />
// //           <ScrollView horizontal>
// //             <View style={{ flexDirection: 'row', paddingVertical: '6%', height: 110 }}>
// //               {picker.length > 0 ? (
// //                 picker.map((y, index) => {
// //                   console.log('images yyyyyyy--------->', y);
// //                   return (
// //                     <View key={index} style={styles.uploadedImageBox}>
// //                       <Image
// //                         source={{
// //                           uri: y?.path ? y?.path : null,
// //                         }}
// //                         style={styles.imagePickerStyle}
// //                       />
// //                       <TouchableOpacity
// //                         onPress={() => {
// //                           const updated = picker.filter(el => el.path !== y.path);
// //                           setPicker(updated);
// //                           console.log('Updated', updated.length);

// //                         }}
// //                         style={styles.deleteButton}
// //                       >
// //                         <Image
// //                           style={styles.deleteIcon}
// //                           source={require('../../../assets/cutRed.png')}
// //                         />
// //                       </TouchableOpacity>
// //                     </View>
// //                   );
// //                 })
// //               ) : (
// //                 null
// //               )}
// //             </View>
// //           </ScrollView>
// //           <TouchableOpacity style={styles.uploadButtonView} onPress={openImageModal}>
// //             <Image source={require('../../../assets/images/fashion-upload-screen-upload-button.png')} />
// //             <Text style={{ fontSize: 14, fontWeight: '500', color: '#263238', }}>Upload</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity style={styles.saveButtonView} onPress={() => { Createpost() }}>
// //             <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Save</Text>
// //           </TouchableOpacity>

// //           <View style={{ height: 10 }} />


// //         </View>
// //         <View style={{ height: 100 }} />
// //       </ScrollView>
// //       <Modal
// //         isVisible={showReportModal}
// //         swipeDirection="down"
// //         onBackdropPress={() => setShowReportModal(false)}
// //         onSwipeComplete={(e) => {
// //           setShowReportModal(false)
// //         }}
// //         scrollTo={() => { }}
// //         scrollOffset={1}
// //         propagateSwipe={true}
// //         coverScreen={false}
// //         backdropColor='transparent'
// //         style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
// //       >
// //         <View style={{ height: '90%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
// //           <Text style={{ fontSize: 18, fontWeight: '700', color: '#455A64', textAlign: 'center', marginBottom: 20, marginTop: 30 }}>Report</Text>
// //           <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

// //             <FlatList
// //               data={reportReasonData}
// //               showsHorizontalScrollIndicator={false}
// //               numColumns={1}
// //               keyExtractor={item => item.id}
// //               style={{ marginBottom: 10 }}
// //               renderItem={({ item, index }) => {
// //                 return (
// //                   <TouchableOpacity key={item.id} onPress={() => setSelectedReasonId(item.id)} style={selectedReasonId === item.id ? styles.selectedReasonView : styles.reasonView}>
// //                     <Image source={selectedReasonId === item.id ? require('../../../assets/images/fastion-selected-reason-icon.png') : require('../../../assets/images/fastion-reason-icon.png')} />
// //                     <View style={{ marginLeft: 10 }}>
// //                       <Text style={{ fontSize: 14, lineHeight: 14, fontWeight: '400', color: '#455A64' }}>{item.name}</Text>
// //                       {item.description ?
// //                         <Text style={{ fontSize: 12, lineHeight: 12, fontWeight: '400', color: '#C5C6C9', marginTop: 2 }}>{item.description}</Text>
// //                         : null}
// //                     </View>
// //                   </TouchableOpacity>
// //                 )
// //               }}
// //             />

// //             <TouchableOpacity style={styles.reportButtonView}>
// //               <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Report</Text>
// //             </TouchableOpacity>

// //           </ScrollView>

// //         </View>
// //       </Modal>
// //       <Modal

// //         isVisible={modlevisual}
// //         swipeDirection="down"
// //         onSwipeComplete={() => setmodlevisual(false)}
// //         coverScreen={false}
// //         backdropColor="transparent"
// //         style={{ justifyContent: 'flex-end', margin: 0 }}
// //       >
// //         <View style={{ height: 150, backgroundColor: Mycolors.BG_COLOR, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, margin: 0, bottom: 0 }}>
// //           <View style={styles.mainView}>
// //             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
// //               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onGallery}>
// //                 <Image source={require('../../../assets/gallery.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
// //                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Library</Text>
// //               </TouchableOpacity>
// //               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onCamera}>
// //                 <Image source={require('../../../assets/camera.png')} style={{ width: 40, height: 35, alignSelf: 'center' }} />
// //                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Camera</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </View>
// //       </Modal>
// //       {loading ? <Loader /> : null}
// //     </SafeAreaView>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   unselectedTabText: {
// //     fontSize: 14,
// //     fontWeight: '500',
// //     color: '#263238'
// //   },
// //   requestCallView: {
// //     marginTop: 10,
// //     width: 140,
// //     height: 30,
// //     borderRadius: 15,
// //     backgroundColor: '#29913C',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     shadowColor: '#6D2F91',
// //     shadowOffset: { width: 3, height: 3 },
// //     shadowRadius: 5,
// //     shadowOpacity: 0.17,
// //     elevation: 2
// //   },
// //   VideoThumbWrapper: {
// //     position: 'relative',
// //     // width: '48%',
// //     // marginRight: 8,
// //     marginBottom: 4,

// //     width: dimensions.SCREEN_WIDTH / 1.5,
// //     height: 160,
// //     marginRight: 20,
// //     borderRadius: 15,
// //     // shadowColor:'#000',
// //     // shadowOffset: {width: 0,height: 3},
// //     // shadowRadius: 1,
// //     // shadowOpacity: 0.03,
// //     // elevation: 1,
// //   },
// //   uploadedImageBox: {
// //     height: 70,
// //     width: 80,
// //     position: 'relative',
// //     marginRight: 29,

// //   },
// //   PlayIconContainer: {
// //     position: 'absolute',
// //     top: 0,
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     zIndex: 1,
// //   },
// //   PlayIconWrapper: {
// //     flex: 1,
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   BackGroundImage: {
// //     width: '100%',
// //     height: 160,
// //     justifyContent: 'center',
// //     borderRadius: 15
// //   },
// //   buttonsRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginTop: 20
// //   },
// //   buttonView: {
// //     flexDirection: 'row',
// //     alignItems: 'center'
// //   },
// //   buttonText: {
// //     fontSize: 10,
// //     fontWeight: '500',
// //     color: '#8F93A0',
// //     marginLeft: 5
// //   },
// //   reasonView: {
// //     alignSelf: 'center',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     marginBottom: 15,
// //     // paddingVertical:10,
// //     paddingHorizontal: 10,
// //     width: '90%',
// //     height: 60,
// //   },
// //   selectedReasonView: {
// //     alignSelf: 'center',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     marginBottom: 15,
// //     // paddingVertical:10,
// //     paddingHorizontal: 10,
// //     width: '90%',
// //     height: 60,
// //     borderColor: '#E7F7FF',
// //     borderWidth: 1,
// //     shadowColor: '#455A64',
// //     shadowOffset: { width: 3, height: 3 },
// //     shadowRadius: 5,
// //     shadowOpacity: 0.10,
// //     elevation: 1
// //   },
// //   uploadButtonView: {
// //     marginTop: 20,
// //     height: 60,
// //     width: '100%',
// //     alignSelf: 'center',
// //     backgroundColor: 'rgba(255, 255, 255, 0.13)',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderWidth: 1,
// //     borderColor: '#263238',
// //     borderStyle: 'dashed',
// //     borderRadius: 5,
// //     marginBottom: 30,
// //     backgroundColor: '#fff',
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 3
// //     },
// //     shadowRadius: 5,
// //     shadowOpacity: 0.10,
// //     elevation: 5,
// //   },
// //   headingTitleStyle: {
// //     paddingLeft: 15,
// //     width: '100%',
// //     fontSize: 13,
// //     borderColor: '#dbdbd9',
// //     borderWidth: 1,
// //     backgroundColor: '#fff',
// //     color: '#fff',
// //     marginTop: 20,
// //     height: 60,
// //     borderRadius: 5,
// //     paddingHorizontal: 15,
// //     paddingVertical: 10,
// //     color: Mycolors.Black,
// //     shadowColor: '#DFDDDD',
// //     shadowOffset: { width: 3, height: 3 },
// //     shadowRadius: 5,
// //     shadowOpacity: 0.05,
// //     elevation: 1
// //   },
// //   deleteButton: {
// //     position: 'absolute',
// //     top: 5,
// //     right: 5,

// //   },
// //   newsArticleStyle: {
// //     paddingLeft: 15,
// //     width: '100%',
// //     fontSize: 13,
// //     borderColor: '#dbdbd9',
// //     borderWidth: 1,
// //     backgroundColor: '#fff',
// //     color: '#fff',
// //     marginTop: 20,
// //     height: 168,
// //     borderRadius: 5,
// //     paddingHorizontal: 15,
// //     paddingVertical: 10,
// //     color: Mycolors.Black,
// //     shadowColor: '#DFDDDD',
// //     shadowOffset: { width: 3, height: 3 },
// //     shadowRadius: 5,
// //     shadowOpacity: 0.05,
// //     elevation: 1
// //   },
// //   saveButtonView: {
// //     marginTop: 55,
// //     height: 60,
// //     width: '100%',
// //     alignSelf: 'center',
// //     backgroundColor: '#0089CF',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: 5,
// //     marginBottom: 30,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 3, height: 3 },
// //     shadowRadius: 5,
// //     shadowOpacity: 0.10,
// //     elevation: 2
// //   },
// //   imagePickerStyle: {
// //     height: '100%',
// //     width: '100%',
// //     borderWidth: 2,
// //     borderRadius: 10,
// //     marginTop: 10,
// //     backgroundColor: 'yellow'
// //   },
// //   deleteIcon: {
// //     // backgroundColor: 'red',
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     right: -12,
// //     alignItems: 'center',
// //     backgroundColor: 'white',
// //     top: 1
// //   },
// //   categorySelectedStyle: {
// //     borderWidth: 4,
// //     borderColor: '#29913C',
// //     borderRadius: 10
// //   },
// // });
// // export default ArtUpload 



// import React, { useEffect, useState, useRef } from 'react';
// import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native';
// import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
// import SearchInput2 from '../../../component/SearchInput2';
// import SearchInputEnt from '../../../component/SearchInputEnt';
// import FashionSearch from './components/FashionSearch';
// import SerchInput from '../../../component/SerchInput';
// import { dimensions, Mycolors } from '../../../utility/Mycolors';
// import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
// import ImagePicker from 'react-native-image-crop-picker';
// import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2 } from '../../../WebApi/Service'
// import DocumentPicker from 'react-native-document-picker';
// import MyButtons from '../../../component/MyButtons';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import Modal from 'react-native-modal';
// import Toast from 'react-native-toast-message'
// import LinearGradient from 'react-native-linear-gradient'
// import AppIntroSlider from 'react-native-app-intro-slider';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
// import Video from 'react-native-video';
// import { androidCameraPermission } from '../../../pages/Connect/People/Permissions';
// import { useSelector, useDispatch } from 'react-redux';
// import Loader from '../../../WebApi/Loader';
// import VideoPlayer from 'react-native-video-player'
// import { createThumbnail } from "react-native-create-thumbnail";
// import ViewMoreText from 'react-native-view-more-text';
// import axios from 'axios';
// const ArtUpload = (props) => {
//   const dispatch = useDispatch();
//   const User = useSelector(state => state.user.user_details)
//   console.log('User', User.token);
//   const [searchValue, setsearchValue] = useState('')
//   const [scrollEnabled, setScrollEnabled] = useState(false)
//   const myTextInput = useRef()
//   const [multiSliderValue, setMultiSliderValue] = useState([0, 100])

//   const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
//   const [selectedCategory, setSelectedCategory] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [showModal, setShowModal] = useState({ isVisible: false, data: null });
//   const [picker, setPicker] = useState('')
//   const [showVideoModal, setShowVideoModal] = useState(false)
//   const [selectedVideo, setSelectedVideo] = useState({})
//   const [showReportModal, setShowReportModal] = useState(false)
//   const [selectedReasonId, setSelectedReasonId] = useState(null)
//   const [headingTitle, setHeadingTitle] = useState('')
//   const [newsArticle, setNewsArticle] = useState('')
//   const [reportReasonData, setReportReasonData] = useState([
//     {
//       id: '1',
//       name: 'I just don’t like it',
//       description: '',
//       selected: true
//     },
//     {
//       id: '2',
//       name: 'Nudity or pornography',
//       description: '',
//       selected: false
//     },
//     {
//       id: '3',
//       name: 'Hate speech or symbols',
//       description: 'Racist, homophobic or sexist slurs',
//       selected: false
//     },
//     {
//       id: '4',
//       name: 'Violence or threat of violence',
//       description: `Graphic injury, unlawful activity, dangerous or criminal organizations`,
//       selected: false
//     },
//     {
//       id: '5',
//       name: 'Sale or promotion of firearms',
//       description: '',
//       selected: false
//     },
//     {
//       id: '6',
//       name: 'Sale or promotion of drugs',
//       description: '',
//       selected: false
//     },
//     {
//       id: '7',
//       name: 'Harassment or bullying',
//       description: '',
//       selected: false
//     },
//     {
//       id: '8',
//       name: 'Intellectual property violation',
//       description: 'Copyright or trademark infringement',
//       selected: false
//     },
//   ])
//   const [videoDetails, setVideoDetails] = useState([
//     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
//     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
//     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
//   ])
//   const [classesList, setClassesList] = useState([
//     {
//       id: '1',
//       title: 'Graphic Design Class',
//       price: 949,
//       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
//       distance: '3 kms away',
//       img: require('../../../assets/images/service-product-image.png'),
//     },
//     {
//       id: '2',
//       title: 'Graphic Design Class',
//       price: 949,
//       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
//       distance: '3 kms away',
//       img: require('../../../assets/images/service-product-image.png'),
//     },
//     {
//       id: '3',
//       title: 'Graphic Design Class',
//       price: 949,
//       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
//       distance: '3 kms away',
//       img: require('../../../assets/images/service-product-image.png'),
//     },
//   ])
//   const [aroundTheWorldData, setAroundTheWorldData] = useState([
//     {
//       id: '1',
//       name: 'Leslie Alexander',
//       desc: '',
//       time: '14 hours ago',
//       img: require('../../../assets/images/fashion-around-the-world-image.png'),
//       likes: '4k',
//       dislikes: '1k',
//     },
//     {
//       id: '2',
//       name: 'Leslie Alexander',
//       desc: '',
//       time: '14 hours ago',
//       img: require('../../../assets/images/fashion-around-the-world-image.png'),
//       likes: '4k',
//       dislikes: '1k',
//     },
//     {
//       id: '3',
//       name: 'Leslie Alexander',
//       desc: '',
//       time: '14 hours ago',
//       img: require('../../../assets/images/fashion-around-the-world-image.png'),
//       likes: '4k',
//       dislikes: '1k',
//     },
//   ])
//   const [courseData, setCourseData] = useState([
//     {
//       id: '1',
//       title: 'Celebrity Style',
//       desc: '',
//       time: '',
//       img: require('../../../assets/images/fashion-celebrity-style.png'),
//     },
//     {
//       id: '2',
//       title: 'Street Style',
//       desc: '',
//       time: '',
//       img: require('../../../assets/images/fashion-celebrity-style.png'),
//     },
//     {
//       id: '3',
//       title: 'Models',
//       desc: '',
//       time: '',
//       img: require('../../../assets/images/fashion-celebrity-style.png'),
//     },
//   ])
//   const [videoInfo, setVideoInfo] = useState([]);
//   const [upData, setupData] = useState([
//     {
//       id: '1',
//       catId: '1',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '2',
//       catId: '2',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '3',
//       catId: '3',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '4',
//       catId: '4',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '5',
//       catId: '1',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '6',
//       catId: '2',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '7',
//       catId: '3',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//   ])
//   const [currentSelection, setcurrentSelection] = useState('All')
//   // const [selectedCategory, setSelectedCategory] = useState({})
//   const [modlevisual, setmodlevisual] = useState(false);
//   const [categoryData, setCategorydata] = useState('')
//   const [selectorModal, setSelectorModal] = useState('')
//   const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
//   useEffect(() => {

//   }, [])

//   useEffect(() => {
//     ArtCategory()
//   }, [])
//   const openVideoModal = () => {

//     if (picker.length == 0) {
//       setSelectorModal(false)

//       console.log(picker.length, 'picker length');
//       setcurrentSelection('video')
//       handleVideoUpload()

//       // pickvideo()
//     } else {
//       Toast.show({ text1: 'Delete image to upload  video ' });
//     }
//   }
//   const openImageModal = (index) => {
//     console.log('video info', videoInfo);
//     if (videoInfo.length == 0) {
//       setSelectorModal(false)
//       setmodlevisual(true)

//     }
//     else {
//       Toast.show({ text1: 'Delete Video to select image ' });
//     }

//   }
//   const ArtCategory = async () => {
//     setLoading(true)
//     var fUrl = art_getCollection
//     var urls = '?module_id=' + '53'
//     console.log('my url---------->', urls)
//     if (urls != undefined) {
//       fUrl = fUrl + urls
//     }
//     // console.log("LIKE CLICK:::",isSaved);
//     const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
//     setLoading(false)
//     console.log('the res Home==>>', responseJson)
//     if (responseJson.headers.success == 1) {
//       console.log('the res after sucess', responseJson.body.data)
//       setCategorydata(responseJson.body.data)
//       // Toast.show({ text1: responseJson.headers.message });
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }


//   const _renderItem = ({ item }) => {
//     return (
//       <Image source={{ uri: item.image }} style={{ width: '100%', height: 170, borderRadius: 20, alignSelf: 'center' }} />
//       // <View key={item.key} style={styles.slide}>
//       //   <Text style={styles.title}>{item.title}</Text>
//       //   <Text style={styles.text}>{item.text}</Text>
//       // </View>
//     );
//   }

//   // const openImageModal = (index) => {

//   //   console.log('my image')
//   //   setmodlevisual(true)
//   // }
//   const openSelectorModal = (index) => {
//     console.log('my image')
//     setSelectorModal(true)
//   }
//   const onGallery = async () => {
//     console.log('picker');
//     try {
//       let value = await ImagePicker.openPicker({
//         width: 1080,
//         height: 1080,
//         cropping: true,
//         mediaType: 'photo',
//         compressImageQuality: 1,
//         compressImageMaxHeight: 1080 / 2,
//         compressImageMaxWidth: 1080 / 2,
//         multiple: true
//       }).then(images => {
//         console.log('---------then block------->', images);
//         setPicker(images);
//         setcurrentSelection('image')
//         setmodlevisual(false)
//       });
//     } catch (error) {
//       console.log('error in openLibrary', error);
//     }
//   };


//   const onCamera = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       console.log(image, 'camera image')
//       setPicker(image);
//       setcurrentSelection('image')
//       setmodlevisual(false)

//     });
//   }

//   // const Createpost = async () => {
//   //   console.log('creaye post', picker);

//   //   const data = new FormData();
//   //   data.append(`headline`, headingTitle)
//   //   data.append(`description`, newsArticle)
//   //   data.append(`status`, 1)
//   //   data.append(`category_id`, selectedCategory)
//   //   data.append(`module_id`, 53)
//   //   if (picker.length > 0) {
//   //     const imgs = []
//   //     picker.map((item, index) => {
//   //       const imageName = item.path.slice(
//   //         item.path.lastIndexOf('/'),
//   //         item.path.length,
//   //       );
//   //       imgs.push({
//   //         name: imageName,
//   //         type: item.mime,
//   //         uri: item.path,
//   //       });
//   //     });
//   //     data.append(`files`, imgs)
//   //   }
//   //   console.log(data, 'data');

//   //   const { responseJson, err } = await requestPostApi(art_PostCollection, data, 'POST', User.token)
//   //   setLoading(false)
//   //   console.log('the res create post==>>', responseJson)
//   //   if (responseJson.headers.success == 1) {
//   //     console.log('the res after sucess', responseJson.body.data)
//   //     setCategorydata(responseJson.body.data)
//   //     // Toast.show({ text1: responseJson.headers.message });
//   //   } else {
//   //     console.log('error', responseJson.headers.message);
//   //     setalert_sms(err)
//   //     setMy_Alert(true)
//   //   }
//   // }

//   const handleVideoUpload = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.video],
//       });

//       // The selected video can be accessed using 'res.uri'
//       console.log('Selected Video URI:', res[0].uri);
//       //setVideoUri(res[0].uri);
//       setmodlevisual(false)
//       setVideoInfo(res);
//       setSelectorModal(false)

//       //setIsVideoSelected(true);

//       // Add your upload logic here
//       // You can use a network library (e.g., axios) to send the video to the server
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User canceled the picker
//         console.log('User canceled video picker');
//       } else {
//         // Error occurred while picking the video
//         console.log('Error picking video:', err);
//       }
//     }
//   };



//   const Createpost = async () => {
//     console.log('kkkkkkkkk', picker.length)
//     if (selectedCategory === null) {
//       Toast.show({ text1: 'Please select category' });
//     }
//     else if (headingTitle == '') {

//       Toast.show({ text1: 'Please enter title' });
//     }
//     else if (newsArticle == '') {

//       Toast.show({ text1: 'Please enter description' });
//     }
//     else if (picker.length == 0 && videoInfo.length == 0) {
//       console.log('kkkkkrrrr');
//       Toast.show({ text1: 'Please select photo or video' });
//     }
//     else {
//       try {
//         const data = new FormData();
//         data.append(`headline`, headingTitle)
//         data.append(`description`, newsArticle)
//         data.append(`status`, 1)
//         data.append(`category_id`, selectedCategory.id)
//         data.append(`module_id`, 53)
//         if (currentSelection == 'video') {
//           data.append(`files`, {
//             name: videoInfo[0].name,
//             type: videoInfo[0].type,
//             uri: videoInfo[0].uri,
//           });
//         } else {
//           if (picker.length > 0) {
//             picker.map((item, index) => {
//               const imageName = item.path.slice(
//                 item.path.lastIndexOf('/'),
//                 item.path.length,
//               );
//               data.append(`files`, {
//                 name: imageName,
//                 type: item.mime,
//                 uri: item.path,
//               });
//             });
//           }
//         }
//         console.log(data, 'data');
//         const { response, status } = await axios

//           .post(
//             'http://54.153.75.225/backend/api/v1/creation/art/create-article',
//             data,

//             {
//               headers: {
//                 'Content-Type': 'multipart/form-data',
//                 Authorization: `Bearer ${User.token}`,
//               },
//             },
//           )
//           .then(res => {
//             return {
//               response: res.data,
//               status: true,
//             };

//           }
//           )

//           .catch(err => {
//             return {
//               response: err,
//               status: false,
//             };
//           });
//         console.log(response, status, 'myyyyy response');
//         if (status === true) {
//           props.navigation.navigate('ArtHome')
//         } else {
//           console.log(response.headers.message);
//         }

//       } catch (error) {
//         console.error('error in TestingUploading', response.headers.messagerror);
//       }
//     }
//   };
//   return (
//     <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
//       <ScrollView>
//         <HomeHeaderRoundBottom height={100} paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#29913C'
//           press1={() => { props.navigation.goBack() }} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18}
//           press2={() => { }} title2={'Upload'} fontWeight={'500'} img2height={20} color={'#fff'}
//           press3={() => { }} img3={require('../../../assets/images/fashion-bell-icon.png')} img3width={25} img3height={22} />

//         <View style={{ width: '85%', alignSelf: 'center', marginTop: 30 }}>

//           <Text style={{ fontSize: 16, fontWeight: '500', color: '#263238', marginBottom: 5 }}>Choose Category</Text>

//           <View style={{ width: dimensions.SCREEN_WIDTH * 0.9, alignSelf: 'flex-start', marginTop: 0, marginBottom: 10, marginTop: 10 }}>
//             <FlatList
//               data={categoryData}
//               showsHorizontalScrollIndicator={true}
//               horizontal
//               renderItem={({ item, index }) => {
//                 return (

//                   <TouchableOpacity style={[{ width: dimensions.SCREEN_WIDTH / 3, height: 140, marginRight: 15, borderRadius: 10, overflow: 'hidden', position: 'relative', alignItems: 'center', borderRadius: 15, paddingHorizontal: 10, }, selectedCategory?.name
//                     === item?.name
//                     ? styles.categorySelectedStyle : null]}
//                     onPress={() => { setSelectedCategory(item) }}>
//                     <Image source={{ uri: item.image }} style={{ width: dimensions.SCREEN_WIDTH / 2.8, height: 160 }} resizeMode='stretch'></Image>
//                     <LinearGradient
//                       colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.43)']}
//                       style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, }}
//                     >
//                       {/* {selectedCategory === item.id ?
//                         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
//                           <Image source={require('../../../assets/images/fashion-selected-category-check-circle.png')} style={{ alignSelf: 'flex-end', top: 10, right: 10 }} />
//                           <Text style={{
//                             fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
//                               === item?.name) ? '#29913C' : Mycolors.Black, textAlign: 'center', bottom: 20
//                           }}>{item.name}</Text>
//                         </View>
//                         : */}
//                       <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
//                         <Text style={{
//                           fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
//                             === item?.name) ? 'black' : 'white', bottom: 20
//                         }}>{item.name}</Text>
//                       </View>
//                       {/* } */}
//                     </LinearGradient>
//                   </TouchableOpacity>
//                 )
//               }}
//               keyExtractor={item => item.id}
//             />
//           </View>

//           <TextInput
//             value={headingTitle}
//             onChangeText={(e) => setHeadingTitle(e)}
//             placeholder={'Art title'}
//             placeholderTextColor="#8F93A0"
//             multiline={true}
//             // maxLength={500}
//             // keyboardType="number-pad"
//             autoCapitalize='none'
//             style={styles.headingTitleStyle}
//           />

//           <TextInput
//             value={newsArticle}
//             onChangeText={(e) => setNewsArticle(e)}
//             placeholder={'Describe something about  Art ...'}
//             placeholderTextColor="#8F93A0"
//             multiline={true}
//             // maxLength={500}
//             // keyboardType="number-pad"
//             autoCapitalize='none'
//             style={styles.newsArticleStyle}
//           />
//           <ScrollView horizontal>
//             <View style={picker.length || videoInfo?.length > 0 ? styles.myImage : styles.myImagePicker}>
//               {console.log(picker.length, 'picker.length')}
//               {picker.length > 0 ? (
//                 picker.map((y, index) => {
//                   console.log('images yyyyyyy--------->', y);
//                   return (
//                     <View key={index} style={styles.uploadedImageBox}>
//                       <Image
//                         source={{
//                           uri: y?.path ? y?.path : null,
//                         }}
//                         style={styles.imagePickerStyle}
//                       />
//                       <TouchableOpacity
//                         onPress={() => {
//                           const updated = picker.filter(el => el.path !== y.path);
//                           setPicker(updated);
//                           console.log('Updated', updated.length);
//                           { updated.length == 0 ? setcurrentSelection('All') : null }

//                         }}
//                         style={{
//                           position: 'absolute',


//                         }}
//                       >
//                         <Image
//                           style={styles.deleteIcon}
//                           source={require('../../../assets/cutRed.png')}
//                         />
//                       </TouchableOpacity>
//                     </View>
//                   );
//                 })
//               ) : (
//                 <View style={{ height: 70, width: 80, position: 'relative', marginRight: 29, marginTop: 22 }}>
//                   {videoInfo?.length > 0 && videoInfo[0]?.uri && (
//                     <Video
//                       source={{ uri: videoInfo[0]?.uri }}
//                       style={{ width: 90, height: 90 }}

//                       resizeMode="cover"
//                     />
//                   )}
//                   {videoInfo?.length > 0 && videoInfo[0]?.uri && (
//                     <TouchableOpacity
//                       onPress={() => {
//                         setVideoInfo([]);

//                       }}
//                       style={styles.deleteButtonn}
//                     >
//                       <Image
//                         style={{
//                           width: 20,
//                           height: 20,
//                           borderRadius: 10,
//                           left: 78,
//                           alignItems: 'center',
//                           backgroundColor: 'white',
//                           top: -98,

//                         }}
//                         source={require('../../../assets/cutRed.png')}
//                       />
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               )}
//             </View>
//           </ScrollView>
//           {picker.length > 0 ? <TouchableOpacity style={styles.uploadButtonView} onPress={openSelectorModal}>
//             <Image source={require('../../../assets/images/fashion-upload-screen-upload-button.png')} />
//             <Text style={{ fontSize: 14, fontWeight: '500', color: '#263238', }}>Upload Photos or Video</Text>
//           </TouchableOpacity> : <TouchableOpacity style={styles.uploadButton} onPress={openSelectorModal}>
//             <Image source={require('../../../assets/images/fashion-upload-screen-upload-button.png')} />
//             <Text style={{ fontSize: 14, fontWeight: '500', color: '#263238', }}>Upload Photos or Video</Text>
//           </TouchableOpacity>}

//           <TouchableOpacity style={styles.saveButtonView} onPress={() => { Createpost() }}>
//             <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Save</Text>
//           </TouchableOpacity>

//           <View style={{ height: 10 }} />


//         </View>
//         <View style={{ height: 100 }} />
//       </ScrollView>
//       <Modal
//         isVisible={showReportModal}
//         swipeDirection="down"
//         onBackdropPress={() => setShowReportModal(false)}
//         onSwipeComplete={(e) => {
//           setShowReportModal(false)
//         }}
//         scrollTo={() => { }}
//         scrollOffset={1}
//         propagateSwipe={true}
//         coverScreen={false}
//         backdropColor='transparent'
//         style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
//       >
//         <View style={{ height: '90%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
//           <Text style={{ fontSize: 18, fontWeight: '700', color: '#455A64', textAlign: 'center', marginBottom: 20, marginTop: 30 }}>Report</Text>
//           <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

//             <FlatList
//               data={reportReasonData}
//               showsHorizontalScrollIndicator={false}
//               numColumns={1}
//               keyExtractor={item => item.id}
//               style={{ marginBottom: 10 }}
//               renderItem={({ item, index }) => {
//                 return (
//                   <TouchableOpacity key={item.id} onPress={() => setSelectedReasonId(item.id)} style={selectedReasonId === item.id ? styles.selectedReasonView : styles.reasonView}>
//                     <Image source={selectedReasonId === item.id ? require('../../../assets/images/fastion-selected-reason-icon.png') : require('../../../assets/images/fastion-reason-icon.png')} />
//                     <View style={{ marginLeft: 10 }}>
//                       <Text style={{ fontSize: 14, lineHeight: 14, fontWeight: '400', color: '#455A64' }}>{item.name}</Text>
//                       {item.description ?
//                         <Text style={{ fontSize: 12, lineHeight: 12, fontWeight: '400', color: '#C5C6C9', marginTop: 2 }}>{item.description}</Text>
//                         : null}
//                     </View>
//                   </TouchableOpacity>
//                 )
//               }}
//             />

//             <TouchableOpacity style={styles.reportButtonView}>
//               <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Report</Text>
//             </TouchableOpacity>

//           </ScrollView>

//         </View>
//       </Modal>
//       <Modal

//         isVisible={modlevisual}
//         //new added for pop up not 
//         swipeDirection="down"
//         coverScreen={false}
//         onBackdropPress={() => setmodlevisual(false)}
//         scrollOffset={1}
//         propagateSwipe={true}

//         // {}
//         animationType="slide"
//         onSwipeComplete={() => setmodlevisual(false)}

//         backdropColor="transparent"
//         style={{ justifyContent: 'flex-end', margin: 0 }}
//       >
//         <View style={{ height: 150, backgroundColor: Mycolors.BG_COLOR, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, margin: 0, bottom: 0 }}>
//           <View style={styles.mainView}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
//               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onGallery}>
//                 <Image source={require('../../../assets/gallery.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
//                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Library</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onCamera}>
//                 <Image source={require('../../../assets/camera.png')} style={{ width: 40, height: 35, alignSelf: 'center' }} />
//                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Camera</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* selector modal */}

//       <Modal
//         isVisible={selectorModal}
//         swipeDirection="down"
//         onSwipeComplete={() => setSelectorModal(false)}
//         coverScreen={false}
//         onBackdropPress={() => setSelectorModal(false)}
//         scrollOffset={1}
//         propagateSwipe={true}

//         backdropColor="transparent"
//         style={{ justifyContent: 'flex-end', margin: 0 }}
//       >
//         <View style={{ height: 150, backgroundColor: Mycolors.BG_COLOR, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, margin: 0, bottom: 0 }}>
//           <View style={styles.mainView}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
//               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={openImageModal}>
//                 <Image source={require('../../../assets/gallery.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
//                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Select Photos</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={openVideoModal} >
//                 <Image source={require('../../../assets/camera.png')} style={{ width: 40, height: 35, alignSelf: 'center' }} />
//                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Select Videos</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//       {loading ? <Loader /> : null}
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   unselectedTabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#263238'
//   },
//   requestCallView: {
//     marginTop: 10,
//     width: 140,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#29913C',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#6D2F91',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.17,
//     elevation: 2
//   },
//   VideoThumbWrapper: {
//     position: 'relative',
//     // width: '48%',
//     // marginRight: 8,
//     marginBottom: 4,

//     width: dimensions.SCREEN_WIDTH / 1.5,
//     height: 160,
//     marginRight: 20,
//     borderRadius: 15,
//     // shadowColor:'#000',
//     // shadowOffset: {width: 0,height: 3},
//     // shadowRadius: 1,
//     // shadowOpacity: 0.03,
//     // elevation: 1,
//   },
//   uploadedImageBox: {
//     height: 70,
//     width: 80,
//     position: 'relative',
//     marginRight: 29,

//   },
//   PlayIconContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1,
//   },
//   PlayIconWrapper: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   BackGroundImage: {
//     width: '100%',
//     height: 160,
//     justifyContent: 'center',
//     borderRadius: 15
//   },
//   buttonsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20
//   },
//   buttonView: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   buttonText: {
//     fontSize: 10,
//     fontWeight: '500',
//     color: '#8F93A0',
//     marginLeft: 5
//   },
//   reasonView: {
//     alignSelf: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     // paddingVertical:10,
//     paddingHorizontal: 10,
//     width: '90%',
//     height: 60,
//   },
//   selectedReasonView: {
//     alignSelf: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     // paddingVertical:10,
//     paddingHorizontal: 10,
//     width: '90%',
//     height: 60,
//     borderColor: '#E7F7FF',
//     borderWidth: 1,
//     shadowColor: '#455A64',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.10,
//     elevation: 1
//   },
//   uploadButtonView: {
//     marginTop: 20,
//     height: 60,
//     width: '100%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.13)',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#263238',
//     borderStyle: 'dashed',
//     borderRadius: 5,
//     marginBottom: 30,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3
//     },


//     shadowRadius: 5,
//     shadowOpacity: 0.10,
//     elevation: 5,
//   },
//   uploadButton: {
//     marginTop: 10,

//     height: 60,
//     width: '100%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.13)',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#263238',
//     borderStyle: 'dashed',
//     borderRadius: 5,
//     marginBottom: 30,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3
//     },


//     shadowRadius: 5,
//     shadowOpacity: 0.10,
//     elevation: 5,
//   },
//   headingTitleStyle: {
//     paddingLeft: 15,
//     width: '100%',
//     fontSize: 13,
//     borderColor: '#dbdbd9',
//     borderWidth: 1,
//     backgroundColor: '#fff',
//     color: '#fff',
//     marginTop: 20,
//     height: 60,
//     borderRadius: 5,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     color: Mycolors.Black,
//     shadowColor: '#DFDDDD',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.05,
//     elevation: 1
//   },
//   deleteButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,

//   },
//   newsArticleStyle: {
//     paddingLeft: 15,
//     width: '100%',
//     fontSize: 13,
//     borderColor: '#dbdbd9',
//     borderWidth: 1,
//     backgroundColor: '#fff',
//     color: '#fff',
//     marginTop: 20,
//     height: 168,
//     borderRadius: 5,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     color: Mycolors.Black,
//     shadowColor: '#DFDDDD',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.05,
//     elevation: 1
//   },
//   saveButtonView: {
//     marginTop: 55,
//     height: 60,
//     width: '100%',
//     alignSelf: 'center',
//     backgroundColor: '#29913C',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     marginBottom: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.10,
//     elevation: 2
//   },
//   imagePickerStyle: {
//     height: '100%',
//     width: '100%',
//     borderWidth: 2,
//     borderRadius: 10,
//     marginTop: 10,
//     backgroundColor: 'yellow'
//   },
//   deleteIcon: {
//     // backgroundColor: 'red',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     left: 70,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     top: 1
//   },
//   categorySelectedStyle: {
//     borderWidth: 4,
//     borderColor: '#29913C',
//     borderRadius: 10
//   },
//   deleteButtonn: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     right: -12,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     top: 1,

//   },
//   myImage: { flexDirection: 'row', paddingVertical: '6%', height: 110, marginTop: 10 },
//   myImagePicker: { flexDirection: 'row', paddingVertical: '6%', height: 40, marginTop: 10 }
// });
// export default ArtUpload 







// import React, { useEffect, useState, useRef } from 'react';
// import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native';
// import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
// import SearchInput2 from '../../../component/SearchInput2';
// import SearchInputEnt from '../../../component/SearchInputEnt';
// import FashionSearch from './components/FashionSearch';
// import SerchInput from '../../../component/SerchInput';
// import { dimensions, Mycolors } from '../../../utility/Mycolors';
// import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
// import ImagePicker from 'react-native-image-crop-picker';
// import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2 } from '../../../WebApi/Service'

// import MyButtons from '../../../component/MyButtons';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import Modal from 'react-native-modal';
// import Toast from 'react-native-simple-toast'
// import LinearGradient from 'react-native-linear-gradient'
// import AppIntroSlider from 'react-native-app-intro-slider';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
// import { androidCameraPermission } from '../../../pages/Connect/People/Permissions';
// import { useSelector, useDispatch } from 'react-redux';
// import Loader from '../../../WebApi/Loader';
// import VideoPlayer from 'react-native-video-player'
// import { createThumbnail } from "react-native-create-thumbnail";
// import ViewMoreText from 'react-native-view-more-text';
// import axios from 'axios';
// const ArtUpload = (props) => {
//   const dispatch = useDispatch();
//   const User = useSelector(state => state.user.user_details)
//   console.log('User', User.token);
//   const [searchValue, setsearchValue] = useState('')
//   const [scrollEnabled, setScrollEnabled] = useState(false)
//   const myTextInput = useRef()
//   const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
//   const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
//   const [selectedCategory, setSelectedCategory] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [showModal, setShowModal] = useState({ isVisible: false, data: null });
//   const [picker, setPicker] = useState('')
//   const [showVideoModal, setShowVideoModal] = useState(false)
//   const [selectedVideo, setSelectedVideo] = useState({})
//   const [showReportModal, setShowReportModal] = useState(false)
//   const [selectedReasonId, setSelectedReasonId] = useState(null)
//   const [headingTitle, setHeadingTitle] = useState('')
//   const [newsArticle, setNewsArticle] = useState('')
//   const [reportReasonData, setReportReasonData] = useState([
//     {
//       id: '1',
//       name: 'I just don’t like it',
//       description: '',
//       selected: true
//     },
//     {
//       id: '2',
//       name: 'Nudity or pornography',
//       description: '',
//       selected: false
//     },
//     {
//       id: '3',
//       name: 'Hate speech or symbols',
//       description: 'Racist, homophobic or sexist slurs',
//       selected: false
//     },
//     {
//       id: '4',
//       name: 'Violence or threat of violence',
//       description: `Graphic injury, unlawful activity, dangerous or criminal organizations`,
//       selected: false
//     },
//     {
//       id: '5',
//       name: 'Sale or promotion of firearms',
//       description: '',
//       selected: false
//     },
//     {
//       id: '6',
//       name: 'Sale or promotion of drugs',
//       description: '',
//       selected: false
//     },
//     {
//       id: '7',
//       name: 'Harassment or bullying',
//       description: '',
//       selected: false
//     },
//     {
//       id: '8',
//       name: 'Intellectual property violation',
//       description: 'Copyright or trademark infringement',
//       selected: false
//     },
//   ])
//   const [videoDetails, setVideoDetails] = useState([
//     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
//     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
//     { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
//   ])
//   const [classesList, setClassesList] = useState([
//     {
//       id: '1',
//       title: 'Graphic Design Class',
//       price: 949,
//       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
//       distance: '3 kms away',
//       img: require('../../../assets/images/service-product-image.png'),
//     },
//     {
//       id: '2',
//       title: 'Graphic Design Class',
//       price: 949,
//       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
//       distance: '3 kms away',
//       img: require('../../../assets/images/service-product-image.png'),
//     },
//     {
//       id: '3',
//       title: 'Graphic Design Class',
//       price: 949,
//       desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
//       distance: '3 kms away',
//       img: require('../../../assets/images/service-product-image.png'),
//     },
//   ])
//   const [aroundTheWorldData, setAroundTheWorldData] = useState([
//     {
//       id: '1',
//       name: 'Leslie Alexander',
//       desc: '',
//       time: '14 hours ago',
//       img: require('../../../assets/images/fashion-around-the-world-image.png'),
//       likes: '4k',
//       dislikes: '1k',
//     },
//     {
//       id: '2',
//       name: 'Leslie Alexander',
//       desc: '',
//       time: '14 hours ago',
//       img: require('../../../assets/images/fashion-around-the-world-image.png'),
//       likes: '4k',
//       dislikes: '1k',
//     },
//     {
//       id: '3',
//       name: 'Leslie Alexander',
//       desc: '',
//       time: '14 hours ago',
//       img: require('../../../assets/images/fashion-around-the-world-image.png'),
//       likes: '4k',
//       dislikes: '1k',
//     },
//   ])
//   const [courseData, setCourseData] = useState([
//     {
//       id: '1',
//       title: 'Celebrity Style',
//       desc: '',
//       time: '',
//       img: require('../../../assets/images/fashion-celebrity-style.png'),
//     },
//     {
//       id: '2',
//       title: 'Street Style',
//       desc: '',
//       time: '',
//       img: require('../../../assets/images/fashion-celebrity-style.png'),
//     },
//     {
//       id: '3',
//       title: 'Models',
//       desc: '',
//       time: '',
//       img: require('../../../assets/images/fashion-celebrity-style.png'),
//     },
//   ])
//   const [upData, setupData] = useState([
//     {
//       id: '1',
//       catId: '1',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '2',
//       catId: '2',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '3',
//       catId: '3',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '4',
//       catId: '4',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '5',
//       catId: '1',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '6',
//       catId: '2',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//     {
//       id: '7',
//       catId: '3',
//       title: 'Intel 3rd Gen Motherboard',
//       desc: '',
//       price: '$140.00',
//       time: '',
//       img: require('../../../assets/images/intel_motherboard.png'),
//     },
//   ])
//   // const [selectedCategory, setSelectedCategory] = useState({})
//   const [modlevisual, setmodlevisual] = useState(false);
//   const [categoryData, setCategorydata] = useState('')
//   const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
//   useEffect(() => {

//   }, [])

//   useEffect(() => {
//     ArtCategory()
//   }, [])
//   const ArtCategory = async () => {
//     setLoading(true)
//     var fUrl = art_getCollection
//     var urls = '?module_id=' + '53'
//     console.log('my url---------->', urls)
//     if (urls != undefined) {
//       fUrl = fUrl + urls
//     }
//     // console.log("LIKE CLICK:::",isSaved);
//     const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
//     setLoading(false)
//     console.log('the res Home==>>', responseJson)
//     if (responseJson.headers.success == 1) {
//       console.log('the res after sucess', responseJson.body.data)
//       setCategorydata(responseJson.body.data)
//       // Toast.show({ text1: responseJson.headers.message });
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }


//   const _renderItem = ({ item }) => {
//     return (
//       <Image source={{ uri: item.image }} style={{ width: '100%', height: 170, borderRadius: 20, alignSelf: 'center' }} />
//       // <View key={item.key} style={styles.slide}>
//       //   <Text style={styles.title}>{item.title}</Text>
//       //   <Text style={styles.text}>{item.text}</Text>
//       // </View>
//     );
//   }

//   const openImageModal = (index) => {

//     console.log('my image')
//     setmodlevisual(true)
//   }
//   const onVideo = async () => {
//     console.log('picker');
//     try {
//       let value =
//         ImagePicker.openPicker({
//           mediaType: 'video',
//           cropping: false,
//           includeBase64: false,
//           compressVideoPreset: 'MediumQuality',
//           writeTempFile: true,
//         }).then(video => {
//           console.log('---------then block------->', video);
//           //setPicker(video);
//           // setcurrentSelection('image')
//           //setmodlevisual(false)
//         });
//     } catch (error) {
//       console.log('error in openLibrary', error);
//     }
//   }
//   const onGallery = async () => {
//     console.log('picker');
//     try {
//       let value = await ImagePicker.openPicker({
//         width: 1080,
//         height: 1080,
//         cropping: true,
//         mediaType: 'photo',
//         compressImageQuality: 1,
//         compressImageMaxHeight: 1080 / 2,
//         compressImageMaxWidth: 1080 / 2,
//         multiple: true
//       }).then(images => {
//         console.log('---------then block------->', images);
//         setPicker(images);
//         // setcurrentSelection('image')
//         setmodlevisual(false)
//       });
//     } catch (error) {
//       console.log('error in openLibrary', error);
//     }
//   };

//   //////image picker 
//   const onSelectImage = async () => {

//     const permissionStatus = await androidCameraPermission()
//     if (permissionStatus) {
//       console.log('jjjjjalert');
//       Alert.alert(
//         'choose Picture',
//         'choose an option',
//         [
//           { text: 'camera', onPress: onCamera },
//           { text: 'Gallery', onPress: onVideo },
//           { text: 'Cancel', onPress: () => { } }
//         ]
//       )
//     } else {
//       Alert.alert(
//         'choose Picture',
//         'choose an option',
//         [
//           { text: 'camera', onPress: onCamera },
//           { text: 'Gallery', onPress: onGallery },
//           { text: 'Cancel', onPress: () => { } }
//         ]
//       )
//     }
//   }
//   const onCamera = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       console.log(image)
//       setPicker(image);
//       // setcurrentSelection('image')
//       setmodlevisual(false)

//     });
//   }

//   // const Createpost = async () => {
//   //   console.log('creaye post', picker);

//   //   const data = new FormData();
//   //   data.append(`headline`, headingTitle)
//   //   data.append(`description`, newsArticle)
//   //   data.append(`status`, 1)
//   //   data.append(`category_id`, selectedCategory)
//   //   data.append(`module_id`, 53)
//   //   if (picker.length > 0) {
//   //     const imgs = []
//   //     picker.map((item, index) => {
//   //       const imageName = item.path.slice(
//   //         item.path.lastIndexOf('/'),
//   //         item.path.length,
//   //       );
//   //       imgs.push({
//   //         name: imageName,
//   //         type: item.mime,
//   //         uri: item.path,
//   //       });
//   //     });
//   //     data.append(`files`, imgs)
//   //   }
//   //   console.log(data, 'data');

//   //   const { responseJson, err } = await requestPostApi(art_PostCollection, data, 'POST', User.token)
//   //   setLoading(false)
//   //   console.log('the res create post==>>', responseJson)
//   //   if (responseJson.headers.success == 1) {
//   //     console.log('the res after sucess', responseJson.body.data)
//   //     setCategorydata(responseJson.body.data)
//   //     // Toast.show({ text1: responseJson.headers.message });
//   //   } else {
//   //     console.log('error', responseJson.headers.message);
//   //     setalert_sms(err)
//   //     setMy_Alert(true)
//   //   }
//   // }





//   const Createpost = async () => {
//     console.log('kkkkkkkkk', selectedCategory)
//     try {
//       const data = new FormData();
//       data.append(`headline`, headingTitle)
//       data.append(`description`, newsArticle)
//       data.append(`status`, 1)
//       data.append(`category_id`, selectedCategory.id)
//       data.append(`module_id`, 53)
//       if (picker.length > 0) {
//         picker.map((item, index) => {
//           const imageName = item.path.slice(
//             item.path.lastIndexOf('/'),
//             item.path.length,
//           );
//           data.append(`files`, {
//             name: imageName,
//             type: item.mime,
//             uri: item.path,
//           });
//         });

//       }
//       console.log(data, 'data');
//       const { response, status } = await axios

//         .post(
//           'http://54.153.75.225/backend/api/v1/creation/art/create-article',
//           data,

//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//               Authorization: `Bearer ${User.token}`,
//             },
//           },
//         )
//         .then(res => {
//           return {
//             response: res.data,
//             status: true,
//           };

//         }
//         )

//         .catch(err => {
//           return {
//             response: err,
//             status: false,
//           };
//         });
//       console.log(response, status);
//       if (status === true) {
//         props.navigation.navigate('ArtHome')
//       } else {
//         console.log(response.headers.message);
//       }

//     } catch (error) {
//       console.error('error in TestingUploading', response.headers.messagerror);
//     }
//   };
//   return (
//     <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
//       <ScrollView>
//         <HomeHeaderRoundBottom height={100} paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#0089CF'
//           press1={() => { props.navigation.goBack() }} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18}
//           press2={() => { }} title2={'Upload'} fontWeight={'500'} img2height={20} color={'#fff'}
//           press3={() => { }} img3={require('../../../assets/images/fashion-bell-icon.png')} img3width={25} img3height={22} />

//         <View style={{ width: '85%', alignSelf: 'center', marginTop: 30 }}>

//           <Text style={{ fontSize: 16, fontWeight: '500', color: '#263238', marginBottom: 5 }}>Choose Category</Text>

//           <View style={{ width: dimensions.SCREEN_WIDTH * 0.9, alignSelf: 'flex-start', marginTop: 0, marginBottom: 10, marginTop: 10 }}>
//             <FlatList
//               data={categoryData}
//               showsHorizontalScrollIndicator={true}
//               horizontal
//               renderItem={({ item, index }) => {
//                 return (

//                   <TouchableOpacity style={[{ width: dimensions.SCREEN_WIDTH / 2.8, height: 160, marginRight: 15, borderRadius: 10, overflow: 'hidden', position: 'relative', alignItems: 'center', borderRadius: 15, paddingHorizontal: 10, }, selectedCategory?.name
//                     === item?.name
//                     ? styles.categorySelectedStyle : null]}
//                     onPress={() => { setSelectedCategory(item) }}>
//                     <Image source={{ uri: item.category_image }} style={{ width: dimensions.SCREEN_WIDTH / 2.8, height: 160 }} resizeMode='stretch'></Image>
//                     <LinearGradient
//                       colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.43)']}
//                       style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, }}
//                     >
//                       {/* {selectedCategory === item.id ?
//                         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
//                           <Image source={require('../../../assets/images/fashion-selected-category-check-circle.png')} style={{ alignSelf: 'flex-end', top: 10, right: 10 }} />
//                           <Text style={{
//                             fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
//                               === item?.name) ? '#29913C' : Mycolors.Black, textAlign: 'center', bottom: 20
//                           }}>{item.name}</Text>
//                         </View>
//                         : */}
//                       <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
//                         <Text style={{
//                           fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
//                             === item?.name) ? 'black' : 'white', bottom: 20
//                         }}>{item.name}</Text>
//                       </View>
//                       {/* } */}
//                     </LinearGradient>
//                   </TouchableOpacity>
//                 )
//               }}
//               keyExtractor={item => item.id}
//             />
//           </View>

//           <TextInput
//             value={headingTitle}
//             onChangeText={(e) => setHeadingTitle(e)}
//             placeholder={'Heading Title'}
//             placeholderTextColor="#8F93A0"
//             multiline={true}
//             // maxLength={500}
//             // keyboardType="number-pad"
//             autoCapitalize='none'
//             style={styles.headingTitleStyle}
//           />

//           <TextInput
//             value={newsArticle}
//             onChangeText={(e) => setNewsArticle(e)}
//             placeholder={'Type your news Article here...'}
//             placeholderTextColor="#8F93A0"
//             multiline={true}
//             // maxLength={500}
//             // keyboardType="number-pad"
//             autoCapitalize='none'
//             style={styles.newsArticleStyle}
//           />
//           <ScrollView horizontal>
//             <View style={{ flexDirection: 'row', paddingVertical: '6%', height: 110 }}>
//               {picker.length > 0 ? (
//                 picker.map((y, index) => {
//                   console.log('images yyyyyyy--------->', y);
//                   return (
//                     <View key={index} style={styles.uploadedImageBox}>
//                       <Image
//                         source={{
//                           uri: y?.path ? y?.path : null,
//                         }}
//                         style={styles.imagePickerStyle}
//                       />
//                       <TouchableOpacity
//                         onPress={() => {
//                           const updated = picker.filter(el => el.path !== y.path);
//                           setPicker(updated);
//                           console.log('Updated', updated.length);

//                         }}
//                         style={styles.deleteButton}
//                       >
//                         <Image
//                           style={styles.deleteIcon}
//                           source={require('../../../assets/cutRed.png')}
//                         />
//                       </TouchableOpacity>
//                     </View>
//                   );
//                 })
//               ) : (
//                 null
//               )}
//             </View>
//           </ScrollView>
//           <TouchableOpacity style={styles.uploadButtonView} onPress={openImageModal}>
//             <Image source={require('../../../assets/images/fashion-upload-screen-upload-button.png')} />
//             <Text style={{ fontSize: 14, fontWeight: '500', color: '#263238', }}>Upload</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.saveButtonView} onPress={() => { Createpost() }}>
//             <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Save</Text>
//           </TouchableOpacity>

//           <View style={{ height: 10 }} />


//         </View>
//         <View style={{ height: 100 }} />
//       </ScrollView>
//       <Modal
//         isVisible={showReportModal}
//         swipeDirection="down"
//         onBackdropPress={() => setShowReportModal(false)}
//         onSwipeComplete={(e) => {
//           setShowReportModal(false)
//         }}
//         scrollTo={() => { }}
//         scrollOffset={1}
//         propagateSwipe={true}
//         coverScreen={false}
//         backdropColor='transparent'
//         style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
//       >
//         <View style={{ height: '90%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
//           <Text style={{ fontSize: 18, fontWeight: '700', color: '#455A64', textAlign: 'center', marginBottom: 20, marginTop: 30 }}>Report</Text>
//           <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

//             <FlatList
//               data={reportReasonData}
//               showsHorizontalScrollIndicator={false}
//               numColumns={1}
//               keyExtractor={item => item.id}
//               style={{ marginBottom: 10 }}
//               renderItem={({ item, index }) => {
//                 return (
//                   <TouchableOpacity key={item.id} onPress={() => setSelectedReasonId(item.id)} style={selectedReasonId === item.id ? styles.selectedReasonView : styles.reasonView}>
//                     <Image source={selectedReasonId === item.id ? require('../../../assets/images/fastion-selected-reason-icon.png') : require('../../../assets/images/fastion-reason-icon.png')} />
//                     <View style={{ marginLeft: 10 }}>
//                       <Text style={{ fontSize: 14, lineHeight: 14, fontWeight: '400', color: '#455A64' }}>{item.name}</Text>
//                       {item.description ?
//                         <Text style={{ fontSize: 12, lineHeight: 12, fontWeight: '400', color: '#C5C6C9', marginTop: 2 }}>{item.description}</Text>
//                         : null}
//                     </View>
//                   </TouchableOpacity>
//                 )
//               }}
//             />

//             <TouchableOpacity style={styles.reportButtonView}>
//               <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Report</Text>
//             </TouchableOpacity>

//           </ScrollView>

//         </View>
//       </Modal>
//       <Modal

//         isVisible={modlevisual}
//         swipeDirection="down"
//         onSwipeComplete={() => setmodlevisual(false)}
//         coverScreen={false}
//         backdropColor="transparent"
//         style={{ justifyContent: 'flex-end', margin: 0 }}
//       >
//         <View style={{ height: 150, backgroundColor: Mycolors.BG_COLOR, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, margin: 0, bottom: 0 }}>
//           <View style={styles.mainView}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
//               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onGallery}>
//                 <Image source={require('../../../assets/gallery.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
//                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Library</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onCamera}>
//                 <Image source={require('../../../assets/camera.png')} style={{ width: 40, height: 35, alignSelf: 'center' }} />
//                 <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Camera</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//       {loading ? <Loader /> : null}
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   unselectedTabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#263238'
//   },
//   requestCallView: {
//     marginTop: 10,
//     width: 140,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#29913C',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#6D2F91',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.17,
//     elevation: 2
//   },
//   VideoThumbWrapper: {
//     position: 'relative',
//     // width: '48%',
//     // marginRight: 8,
//     marginBottom: 4,

//     width: dimensions.SCREEN_WIDTH / 1.5,
//     height: 160,
//     marginRight: 20,
//     borderRadius: 15,
//     // shadowColor:'#000',
//     // shadowOffset: {width: 0,height: 3},
//     // shadowRadius: 1,
//     // shadowOpacity: 0.03,
//     // elevation: 1,
//   },
//   uploadedImageBox: {
//     height: 70,
//     width: 80,
//     position: 'relative',
//     marginRight: 29,

//   },
//   PlayIconContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1,
//   },
//   PlayIconWrapper: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   BackGroundImage: {
//     width: '100%',
//     height: 160,
//     justifyContent: 'center',
//     borderRadius: 15
//   },
//   buttonsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20
//   },
//   buttonView: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   buttonText: {
//     fontSize: 10,
//     fontWeight: '500',
//     color: '#8F93A0',
//     marginLeft: 5
//   },
//   reasonView: {
//     alignSelf: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     // paddingVertical:10,
//     paddingHorizontal: 10,
//     width: '90%',
//     height: 60,
//   },
//   selectedReasonView: {
//     alignSelf: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     // paddingVertical:10,
//     paddingHorizontal: 10,
//     width: '90%',
//     height: 60,
//     borderColor: '#E7F7FF',
//     borderWidth: 1,
//     shadowColor: '#455A64',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.10,
//     elevation: 1
//   },
//   uploadButtonView: {
//     marginTop: 20,
//     height: 60,
//     width: '100%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.13)',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#263238',
//     borderStyle: 'dashed',
//     borderRadius: 5,
//     marginBottom: 30,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3
//     },
//     shadowRadius: 5,
//     shadowOpacity: 0.10,
//     elevation: 5,
//   },
//   headingTitleStyle: {
//     paddingLeft: 15,
//     width: '100%',
//     fontSize: 13,
//     borderColor: '#dbdbd9',
//     borderWidth: 1,
//     backgroundColor: '#fff',
//     color: '#fff',
//     marginTop: 20,
//     height: 60,
//     borderRadius: 5,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     color: Mycolors.Black,
//     shadowColor: '#DFDDDD',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.05,
//     elevation: 1
//   },
//   deleteButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,

//   },
//   newsArticleStyle: {
//     paddingLeft: 15,
//     width: '100%',
//     fontSize: 13,
//     borderColor: '#dbdbd9',
//     borderWidth: 1,
//     backgroundColor: '#fff',
//     color: '#fff',
//     marginTop: 20,
//     height: 168,
//     borderRadius: 5,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     color: Mycolors.Black,
//     shadowColor: '#DFDDDD',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.05,
//     elevation: 1
//   },
//   saveButtonView: {
//     marginTop: 55,
//     height: 60,
//     width: '100%',
//     alignSelf: 'center',
//     backgroundColor: '#0089CF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     marginBottom: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 3, height: 3 },
//     shadowRadius: 5,
//     shadowOpacity: 0.10,
//     elevation: 2
//   },
//   imagePickerStyle: {
//     height: '100%',
//     width: '100%',
//     borderWidth: 2,
//     borderRadius: 10,
//     marginTop: 10,
//     backgroundColor: 'yellow'
//   },
//   deleteIcon: {
//     // backgroundColor: 'red',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     right: -12,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     top: 1
//   },
//   categorySelectedStyle: {
//     borderWidth: 4,
//     borderColor: '#29913C',
//     borderRadius: 10
//   },
// });
// export default ArtUpload 



import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native';
import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import FashionSearch from './components/FashionSearch';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
import ImagePicker from 'react-native-image-crop-picker';
import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2 } from '../../../WebApi/Service'
import DocumentPicker from 'react-native-document-picker';
import MyButtons from '../../../component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message'
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import { androidCameraPermission } from '../../../pages/Connect/People/Permissions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../../WebApi/Loader';
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import ViewMoreText from 'react-native-view-more-text';
import axios from 'axios';
const ArtUpload = (props) => {
  const dispatch = useDispatch();
  const User = useSelector(state => state.user.user_details)
  console.log('User', User.token);
  const [searchValue, setsearchValue] = useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])

  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState({ isVisible: false, data: null });
  const [picker, setPicker] = useState([])
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState({})
  const [showReportModal, setShowReportModal] = useState(false)
  const [selectedReasonId, setSelectedReasonId] = useState(null)
  const [headingTitle, setHeadingTitle] = useState('')
  const [newsArticle, setNewsArticle] = useState('')
  const [reportReasonData, setReportReasonData] = useState([
    {
      id: '1',
      name: 'I just don’t like it',
      description: '',
      selected: true
    },
    {
      id: '2',
      name: 'Nudity or pornography',
      description: '',
      selected: false
    },
    {
      id: '3',
      name: 'Hate speech or symbols',
      description: 'Racist, homophobic or sexist slurs',
      selected: false
    },
    {
      id: '4',
      name: 'Violence or threat of violence',
      description: `Graphic injury, unlawful activity, dangerous or criminal organizations`,
      selected: false
    },
    {
      id: '5',
      name: 'Sale or promotion of firearms',
      description: '',
      selected: false
    },
    {
      id: '6',
      name: 'Sale or promotion of drugs',
      description: '',
      selected: false
    },
    {
      id: '7',
      name: 'Harassment or bullying',
      description: '',
      selected: false
    },
    {
      id: '8',
      name: 'Intellectual property violation',
      description: 'Copyright or trademark infringement',
      selected: false
    },
  ])
  const [videoDetails, setVideoDetails] = useState([
    { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
    { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
    { url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` },
  ])
  const [classesList, setClassesList] = useState([
    {
      id: '1',
      title: 'Graphic Design Class',
      price: 949,
      desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance: '3 kms away',
      img: require('../../../assets/images/service-product-image.png'),
    },
    {
      id: '2',
      title: 'Graphic Design Class',
      price: 949,
      desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance: '3 kms away',
      img: require('../../../assets/images/service-product-image.png'),
    },
    {
      id: '3',
      title: 'Graphic Design Class',
      price: 949,
      desc: ['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance: '3 kms away',
      img: require('../../../assets/images/service-product-image.png'),
    },
  ])
  const [aroundTheWorldData, setAroundTheWorldData] = useState([
    {
      id: '1',
      name: 'Leslie Alexander',
      desc: '',
      time: '14 hours ago',
      img: require('../../../assets/images/fashion-around-the-world-image.png'),
      likes: '4k',
      dislikes: '1k',
    },
    {
      id: '2',
      name: 'Leslie Alexander',
      desc: '',
      time: '14 hours ago',
      img: require('../../../assets/images/fashion-around-the-world-image.png'),
      likes: '4k',
      dislikes: '1k',
    },
    {
      id: '3',
      name: 'Leslie Alexander',
      desc: '',
      time: '14 hours ago',
      img: require('../../../assets/images/fashion-around-the-world-image.png'),
      likes: '4k',
      dislikes: '1k',
    },
  ])
  const [courseData, setCourseData] = useState([
    {
      id: '1',
      title: 'Celebrity Style',
      desc: '',
      time: '',
      img: require('../../../assets/images/fashion-celebrity-style.png'),
    },
    {
      id: '2',
      title: 'Street Style',
      desc: '',
      time: '',
      img: require('../../../assets/images/fashion-celebrity-style.png'),
    },
    {
      id: '3',
      title: 'Models',
      desc: '',
      time: '',
      img: require('../../../assets/images/fashion-celebrity-style.png'),
    },
  ])
  const [videoInfo, setVideoInfo] = useState([]);
  const [upData, setupData] = useState([
    {
      id: '1',
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc: '',
      price: '$140.00',
      time: '',
      img: require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '2',
      catId: '2',
      title: 'Intel 3rd Gen Motherboard',
      desc: '',
      price: '$140.00',
      time: '',
      img: require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '3',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc: '',
      price: '$140.00',
      time: '',
      img: require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '4',
      catId: '4',
      title: 'Intel 3rd Gen Motherboard',
      desc: '',
      price: '$140.00',
      time: '',
      img: require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '5',
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc: '',
      price: '$140.00',
      time: '',
      img: require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '6',
      catId: '2',
      title: 'Intel 3rd Gen Motherboard',
      desc: '',
      price: '$140.00',
      time: '',
      img: require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '7',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc: '',
      price: '$140.00',
      time: '',
      img: require('../../../assets/images/intel_motherboard.png'),
    },
  ])
  const [currentSelection, setcurrentSelection] = useState('All')
  // const [selectedCategory, setSelectedCategory] = useState({})
  const [modlevisual, setmodlevisual] = useState(false);
  const [categoryData, setCategorydata] = useState('')
  const [selectorModal, setSelectorModal] = useState('')
  const [updatedLength, setUpdatedLength] = useState(1)
  console.log(updatedLength, 'updatedLength');
  const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
  useEffect(() => {

  }, [])

  useEffect(() => {
    ArtCategory()
  }, [])
  const openVideoModal = () => {

    if (picker.length == 0) {
      setSelectorModal(false)

      console.log(picker.length, 'picker length');
      setcurrentSelection('video')
      handleVideoUpload()

      // pickvideo()
    } else {
      Toast.show({ text1: 'Delete image to upload  video ' });
    }
  }
  const openImageModal = (index) => {
    console.log('video info', videoInfo);
    if (videoInfo.length == 0) {
      setSelectorModal(false)
      setmodlevisual(true)

    }
    else {
      Toast.show({ text1: 'Delete Video to select image ' });
    }

  }
  const ArtCategory = async () => {
    setLoading(true)
    var fUrl = art_getCollection
    var urls = '?module_id=' + '53'
    console.log('my url---------->', urls)
    if (urls != undefined) {
      fUrl = fUrl + urls
    }
    // console.log("LIKE CLICK:::",isSaved);
    const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
    setLoading(false)
    console.log('the res Home==>>', responseJson)
    if (responseJson.headers.success == 1) {
      console.log('the res after sucess', responseJson.body.data)
      setCategorydata(responseJson.body.data)
      // Toast.show({ text1: responseJson.headers.message });
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }


  const _renderItem = ({ item }) => {
    return (
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 170, borderRadius: 20, alignSelf: 'center' }} />
      // <View key={item.key} style={styles.slide}>
      //   <Text style={styles.title}>{item.title}</Text>
      //   <Text style={styles.text}>{item.text}</Text>
      // </View>
    );
  }

  // const openImageModal = (index) => {

  //   console.log('my image')
  //   setmodlevisual(true)
  // }
  const openSelectorModal = (index) => {
    console.log('my image')
    setSelectorModal(true)
  }
  const onGallery = async () => {
    console.log('picker');
    try {
      let value = await ImagePicker.openPicker({
        width: 1080,
        height: 1080,
        cropping: true,
        mediaType: 'photo',
        compressImageQuality: 1,
        compressImageMaxHeight: 1080 / 2,
        compressImageMaxWidth: 1080 / 2,
        multiple: true
      }).then(images => {
        console.log('---------then block------->', images);
        setPicker([...picker, ...images]);
        // setPicker(images);
        setcurrentSelection('image')
        setmodlevisual(false)
      });
    } catch (error) {
      console.log('error in openLibrary', error);
    }
  };


  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image, 'camera image')
      setPicker([...picker, image]);
      // setPicker(image);
      setUpdatedLength(1)
      setcurrentSelection('camera_image')
      setmodlevisual(false)

    });
  }

  // const Createpost = async () => {
  //   console.log('creaye post', picker);

  //   const data = new FormData();
  //   data.append(`headline`, headingTitle)
  //   data.append(`description`, newsArticle)
  //   data.append(`status`, 1)
  //   data.append(`category_id`, selectedCategory)
  //   data.append(`module_id`, 53)
  //   if (picker.length > 0) {
  //     const imgs = []
  //     picker.map((item, index) => {
  //       const imageName = item.path.slice(
  //         item.path.lastIndexOf('/'),
  //         item.path.length,
  //       );
  //       imgs.push({
  //         name: imageName,
  //         type: item.mime,
  //         uri: item.path,
  //       });
  //     });
  //     data.append(`files`, imgs)
  //   }
  //   console.log(data, 'data');

  //   const { responseJson, err } = await requestPostApi(art_PostCollection, data, 'POST', User.token)
  //   setLoading(false)
  //   console.log('the res create post==>>', responseJson)
  //   if (responseJson.headers.success == 1) {
  //     console.log('the res after sucess', responseJson.body.data)
  //     setCategorydata(responseJson.body.data)
  //     // Toast.show({ text1: responseJson.headers.message });
  //   } else {
  //     console.log('error', responseJson.headers.message);
  //     setalert_sms(err)
  //     setMy_Alert(true)
  //   }
  // }

  const handleVideoUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });

      // The selected video can be accessed using 'res.uri'
      console.log('Selected Video URI:', res[0].uri);
      //setVideoUri(res[0].uri);
      setmodlevisual(false)
      setVideoInfo(res);
      setSelectorModal(false)

      //setIsVideoSelected(true);

      // Add your upload logic here
      // You can use a network library (e.g., axios) to send the video to the server
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
        console.log('User canceled video picker');
      } else {
        // Error occurred while picking the video
        console.log('Error picking video:', err);
      }
    }
  };



  const Createpost = async () => {
    console.log(picker, picker.length, 'picker check camera');
    if (selectedCategory === null) {
      Toast.show({ text1: 'Please select category' });
    }
    else if (headingTitle?.trim()?.length === 0) {

      Toast.show({ text1: 'Please enter title' });
    }
    else if (newsArticle?.trim()?.length === 0) {

      Toast.show({ text1: 'Please enter description' });
    }
    else if (picker.length == 0 && videoInfo.length == 0) {
      console.log('kkkkkrrrr', picker.length);
      Toast.show({ text1: 'Please upload photo or video' });
    }
    else if (picker == 'undefined' && videoInfo.length == 0) {
      console.log('cl of phtoto by camera', picker == 0 || videoInfo.length == 0);
      Toast.show({ text1: 'Please upload photo or video ' });
    }
    else {
      try {
        console.log('hhhhh to');
        setLoading(true)
        const data = new FormData();
        data.append(`headline`, headingTitle)
        data.append(`description`, newsArticle)
        data.append(`status`, 1)
        data.append(`category_id`, selectedCategory.id)
        data.append(`module_id`, 53)
        if (currentSelection == 'video') {
          data.append(`files`, {
            name: videoInfo[0].name,
            type: videoInfo[0].type,
            uri: videoInfo[0].uri,
          });
        } else {
          if (picker.length > 0) {
            console.log('picker gallery');
            picker.map((item, index) => {
              const imageName = item.path.slice(
                item.path.lastIndexOf('/'),
                item.path.length,
              );
              data.append(`files`, {
                name: imageName,
                type: item.mime,
                uri: item.path,
              });
            });
          }
          else if (picker.length == undefined) {
            console.log('picker undefined');
            const imageName = picker.path.slice(
              picker.path.lastIndexOf('/'),
              picker.path.length,
            );
            data.append(`files`, {
              name: imageName,
              type: picker.mime,
              uri: picker.path,
            });
          }
        }

        console.log(data, 'data');
        const { response, status } = await axios

          .post(
            'http://54.153.75.225/backend/api/v1/creation/art/create-article',
            data,

            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${User.token}`,
              },
            },
          )
          .then(res => {

            return {
              response: res.data,
              status: true,
            };

          }
          )

          .catch(err => {
            return {
              response: err,
              status: false,
            };
          });
        console.log(response, status, 'myyyyy response');

        if (status === true) {

          props.navigation.navigate('ArtHome')
          Toast.show({ text1: response.headers.message });
        } else {
          console.log(response.headers.message);

        }
        setLoading('false')
      } catch (error) {
        console.error('error in TestingUploading', response.headers.messagerror);
      }
    }
  };
  return (
    <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
      <ScrollView>
        <HomeHeaderRoundBottom height={100} paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#29913C'
          press1={() => { props.navigation.goBack() }} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18}
          press2={() => { }} title2={'Upload'} fontWeight={'500'} img2height={20} color={'#fff'}
          press3={() => { props.navigation.navigate('ArtNotifications') }} img3={require('../../../assets/images/fashion-bell-icon.png')} img3width={25} img3height={22} />

        <View style={{ width: '85%', alignSelf: 'center', marginTop: 30 }}>

          <Text style={{ fontSize: 16, fontWeight: '500', color: '#263238', marginBottom: 5 }}>Choose Category</Text>

          <View style={{ width: dimensions.SCREEN_WIDTH * 0.9, alignSelf: 'flex-start', marginTop: 0, marginBottom: 10, marginTop: 10 }}>
            <FlatList
              data={categoryData}
              showsHorizontalScrollIndicator={true}
              horizontal
              renderItem={({ item, index }) => {
                return (

                  <TouchableOpacity style={[{ width: dimensions.SCREEN_WIDTH / 3, height: 140, marginRight: 15, borderRadius: 10, overflow: 'hidden', position: 'relative', alignItems: 'center', borderRadius: 15, paddingHorizontal: 10, }, selectedCategory?.name
                    === item?.name
                    ? styles.categorySelectedStyle : null]}
                    onPress={() => { setSelectedCategory(item) }}>
                    <Image source={{ uri: item.image }} style={{ width: dimensions.SCREEN_WIDTH / 2.8, height: 160 }} resizeMode='stretch'></Image>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.43)']}
                      style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, }}
                    >
                      {/* {selectedCategory === item.id ?
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
                          <Image source={require('../../../assets/images/fashion-selected-category-check-circle.png')} style={{ alignSelf: 'flex-end', top: 10, right: 10 }} />
                          <Text style={{
                            fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
                              === item?.name) ? '#29913C' : Mycolors.Black, textAlign: 'center', bottom: 20
                          }}>{item.name}</Text>
                        </View>
                        : */}
                      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={{
                          fontSize: 14, fontWeight: '500', color: (selectedCategory?.name
                            === item?.name) ? 'black' : 'white', bottom: 20
                        }}>{item.name}</Text>
                      </View>
                      {/* } */}
                    </LinearGradient>
                  </TouchableOpacity>
                )
              }}
              keyExtractor={item => item.id}
            />
          </View>

          <TextInput
            value={headingTitle}
            onChangeText={(e) => setHeadingTitle(e)}
            placeholder={'Art title'}
            placeholderTextColor="#8F93A0"


            maxLength={50}
            // keyboardType="number-pad"
            autoCapitalize='none'
            style={styles.headingTitleStyle}
          />

          <TextInput
            value={newsArticle}
            onChangeText={(e) => setNewsArticle(e)}
            placeholder={'Describe something about Art ...'}
            placeholderTextColor="#8F93A0"
            multiline={true}
            textAlignVertical='top'
            // maxLength={500}
            // keyboardType="number-pad"
            autoCapitalize='none'
            style={styles.newsArticleStyle}
          />
          <ScrollView horizontal>
            <View style={picker.length || videoInfo?.length > 0 ? styles.myImage : styles.myImagePicker}>
              {/* {console.log(picker.length, 'picker.length')}
              {picker.length > 0 ? (
                picker.map((y, index) => {
                  console.log('images yyyyyyy--------->', y);
                  return (
                    <View key={index} style={styles.uploadedImageBox}>
                      <Image
                        source={{
                          uri: y?.path ? y?.path : null,
                        }}
                        style={styles.imagePickerStyle}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          const updated = picker.filter(el => el.path !== y.path);
                          setPicker(updated);
                          console.log('Updated', updated.length);
                          { updated.length == 0 ? setcurrentSelection('All') : null }

                        }}
                        style={{
                          position: 'absolute',


                        }}
                      >
                        <Image
                          style={styles.deleteIcon}
                          source={require('../../../assets/cutRed.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : (
                <View style={{ height: 70, width: 80, position: 'relative', marginRight: 29, marginTop: 22 }}>
                  {videoInfo?.length > 0 && videoInfo[0]?.uri && (
                    <Video
                      source={{ uri: videoInfo[0]?.uri }}
                      style={{ width: 90, height: 90 }}

                      resizeMode="cover"
                    />
                  )}
                  {videoInfo?.length > 0 && videoInfo[0]?.uri && (
                    <TouchableOpacity
                      onPress={() => {
                        setVideoInfo([]);

                      }}
                      style={styles.deleteButtonn}
                    >
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          left: 78,
                          alignItems: 'center',
                          backgroundColor: 'white',
                          top: -98,

                        }}
                        source={require('../../../assets/cutRed.png')}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              )} */}


              <>
                {picker.length > 0 ?
                  (picker.map((y, index) => {
                    console.log('images yyyyyyy hhhhh--------->', y.path);
                    return (
                      <View key={index} style={styles.uploadedImageBox}>
                        <Image
                          source={{
                            uri: y?.path ? y?.path : null,
                          }}
                          style={styles.imagePickerStyle}
                        />
                        <TouchableOpacity
                          onPress={() => {
                            const updated = picker.filter(el => el.path !== y.path);
                            setPicker(updated);
                            console.log('Updated gallery', updated.length);
                            { updated.length == 0 ? setcurrentSelection('All') : null }
                          }}
                          style={{
                            position: 'absolute'
                          }}
                        >
                          <Image
                            style={styles.deleteIcon}
                            source={require('../../../assets/cutRed.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })
                  ) : (
                    <View style={{ height: 70, width: 80, position: 'relative', marginRight: 29, marginTop: 22 }}>
                      {videoInfo?.length > 0 && videoInfo[0]?.uri && (
                        <Video
                          source={{ uri: videoInfo[0]?.uri }}
                          style={{ width: 90, height: 90 }}
                          resizeMode="cover"
                        />
                      )}
                      {videoInfo?.length > 0 && videoInfo[0]?.uri && (
                        <TouchableOpacity
                          onPress={() => {
                            setVideoInfo([]);
                          }}
                          style={styles.deleteButtonn}
                        >
                          <Image
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: 10,
                              left: 78,
                              alignItems: 'center',
                              backgroundColor: 'white',
                              top: -98,
                            }}
                            source={require('../../../assets/cutRed.png')}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  )}
              </>

            </View>
          </ScrollView>
          {picker.length > 0 ? <TouchableOpacity style={styles.uploadButtonView} onPress={openSelectorModal}>
            <Image source={require('../../../assets/images/fashion-upload-screen-upload-button.png')} />
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#263238', }}>Upload Photos or Video</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.uploadButton} onPress={openSelectorModal}>
            <Image source={require('../../../assets/images/fashion-upload-screen-upload-button.png')} />
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#263238', }}>Upload Photos or Video</Text>
          </TouchableOpacity>}

          <TouchableOpacity style={styles.saveButtonView} onPress={() => { Createpost() }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Save</Text>
          </TouchableOpacity>

          <View style={{ height: 10 }} />


        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <Modal
        isVisible={showReportModal}
        swipeDirection="down"
        onBackdropPress={() => setShowReportModal(false)}
        onSwipeComplete={(e) => {
          setShowReportModal(false)
        }}
        scrollTo={() => { }}
        scrollOffset={1}
        propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '90%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#455A64', textAlign: 'center', marginBottom: 20, marginTop: 30 }}>Report</Text>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

            <FlatList
              data={reportReasonData}
              showsHorizontalScrollIndicator={false}
              numColumns={1}
              keyExtractor={item => item.id}
              style={{ marginBottom: 10 }}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity key={item.id} onPress={() => setSelectedReasonId(item.id)} style={selectedReasonId === item.id ? styles.selectedReasonView : styles.reasonView}>
                    <Image source={selectedReasonId === item.id ? require('../../../assets/images/fastion-selected-reason-icon.png') : require('../../../assets/images/fastion-reason-icon.png')} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 14, lineHeight: 14, fontWeight: '400', color: '#455A64' }}>{item.name}</Text>
                      {item.description ?
                        <Text style={{ fontSize: 12, lineHeight: 12, fontWeight: '400', color: '#C5C6C9', marginTop: 2 }}>{item.description}</Text>
                        : null}
                    </View>
                  </TouchableOpacity>
                )
              }}
            />

            <TouchableOpacity style={styles.reportButtonView}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Report</Text>
            </TouchableOpacity>

          </ScrollView>

        </View>
      </Modal>
      <Modal
        isVisible={modlevisual}
        //new added for pop up not 
        swipeDirection="down"
        coverScreen={false}
        onBackdropPress={() => setmodlevisual(false)}
        scrollOffset={1}
        propagateSwipe={true}
        animationType="slide"
        onSwipeComplete={() => setmodlevisual(false)}
        backdropColor='rgba(0,0,0,0.5)'
        style={{ justifyContent: 'center', margin: 0 }}
      >
        <View style={{ height: 160, backgroundColor: 'white', borderRadius: 10, padding: 20, margin: 0, bottom: 0, width: '90%', alignSelf: 'center', alignItems: 'center' }}>
          <View style={styles.mainView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onGallery}>
                <Image source={require('../../../assets/gallery.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Library</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 150, height: 150 }} onPress={onCamera}>
                <Image source={require('../../../assets/camera.png')} style={{ width: 40, height: 35, alignSelf: 'center' }} />
                <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Open Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* selector modal */}

      <Modal
        isVisible={selectorModal}
        swipeDirection="down"
        onSwipeComplete={() => setSelectorModal(false)}
        coverScreen={false}
        onBackdropPress={() => setSelectorModal(false)}
        scrollOffset={1}
        propagateSwipe={true}

        backdropColor='rgba(0,0,0,0.5)'
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={{ height: 150, backgroundColor: Mycolors.BG_COLOR, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, margin: 0, bottom: 0 }}>
          <View style={styles.mainView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', }}>
              <TouchableOpacity style={{ width: 150, height: 150 }} onPress={openImageModal}>
                <Image source={require('../../../assets/gallery.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Select Photos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 150, height: 150 }} onPress={openVideoModal} >
                <Image source={require('../../../assets/camera.png')} style={{ width: 40, height: 35, alignSelf: 'center' }} />
                <Text style={{ textAlign: 'center', color: Mycolors.TEXT_COLOR }}>Select Videos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {loading ? <Loader /> : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  unselectedTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263238'
  },
  requestCallView: {
    marginTop: 10,
    width: 140,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#29913C',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6D2F91',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.17,
    elevation: 2
  },
  VideoThumbWrapper: {
    position: 'relative',
    // width: '48%',
    // marginRight: 8,
    marginBottom: 4,

    width: dimensions.SCREEN_WIDTH / 1.5,
    height: 160,
    marginRight: 20,
    borderRadius: 15,
    // shadowColor:'#000',
    // shadowOffset: {width: 0,height: 3},
    // shadowRadius: 1,
    // shadowOpacity: 0.03,
    // elevation: 1,
  },
  uploadedImageBox: {
    height: 70,
    width: 80,
    position: 'relative',
    marginRight: 29,

  },
  PlayIconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  PlayIconWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackGroundImage: {
    width: '100%',
    height: 160,
    justifyContent: 'center',
    borderRadius: 15
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#8F93A0',
    marginLeft: 5
  },
  reasonView: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    // paddingVertical:10,
    paddingHorizontal: 10,
    width: '90%',
    height: 60,
  },
  selectedReasonView: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    // paddingVertical:10,
    paddingHorizontal: 10,
    width: '90%',
    height: 60,
    borderColor: '#E7F7FF',
    borderWidth: 1,
    shadowColor: '#455A64',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.10,
    elevation: 1
  },
  uploadButtonView: {
    marginTop: 20,
    height: 60,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#263238',
    borderStyle: 'dashed',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },


    shadowRadius: 5,
    shadowOpacity: 0.10,
    elevation: 5,
  },
  uploadButton: {
    marginTop: 10,

    height: 60,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#263238',
    borderStyle: 'dashed',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },


    shadowRadius: 5,
    shadowOpacity: 0.10,
    elevation: 5,
  },
  headingTitleStyle: {
    paddingLeft: 15,
    width: '100%',
    fontSize: 13,
    borderColor: '#dbdbd9',
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#fff',
    marginTop: 20,
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: Mycolors.Black,
    shadowColor: '#DFDDDD',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.05,
    elevation: 1
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,

  },
  newsArticleStyle: {
    paddingLeft: 15,
    width: '100%',
    fontSize: 13,
    borderColor: '#dbdbd9',
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#fff',
    marginTop: 20,
    height: 168,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: Mycolors.Black,
    shadowColor: '#DFDDDD',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.05,
    elevation: 1
  },
  saveButtonView: {
    marginTop: 55,
    height: 60,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#29913C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.10,
    elevation: 2
  },
  imagePickerStyle: {
    height: '100%',
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,

  },
  deleteIcon: {
    // backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    left: 70,
    alignItems: 'center',
    backgroundColor: 'white',
    top: 1
  },
  categorySelectedStyle: {
    borderWidth: 4,
    borderColor: '#29913C',
    borderRadius: 10
  },
  deleteButtonn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    right: -12,
    alignItems: 'center',
    backgroundColor: 'white',
    top: 1,

  },
  myImage: { flexDirection: 'row', paddingVertical: '6%', height: 110, marginTop: 10 },
  myImagePicker: { flexDirection: 'row', paddingVertical: '6%', height: 100, marginTop: 10 },
  mainView: { justifyContent: 'center', alignItems: 'center', height: 200, width: '90%', }
});
export default ArtUpload 