// import React, { useEffect, useState, useRef, cloneElement } from 'react';
// import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, Keyboard } from 'react-native';
// import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
// import SearchInput2 from '../../../component/SearchInput2';
// import SearchInputEnt from '../../../component/SearchInputEnt';
// // import { ImageSlider } from "react-native-image-slider-banner";
// import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2, art_HomePage, art_likeDislike, article_id, all_coments, add_comments, react_comments, delete_comments, edit_comment, post_reportSuggestion, get_reportSuggestion, creation_article, creation_home, creation_react, creation_addComments, creation_reactComment, creation_getComment, creation_editComment, creation_deleteComment, creation_get_report, creation_post_report } from '../../../WebApi/Service'
// import { useSelector, useDispatch } from 'react-redux';
// import { VideoModel } from '../../../component/VideoModel';

// import FashionSearch from './components/FashionSearch';
// import SerchInput from '../../../component/SerchInput';
// import { dimensions, Mycolors } from '../../../utility/Mycolors';
// import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
// import MyButtons from '../../../component/MyButtons';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import Modal from 'react-native-modal';

// import Toast from 'react-native-toast-message';
// import LinearGradient from 'react-native-linear-gradient'
// import AppIntroSlider from 'react-native-app-intro-slider';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
// import Loader from '../../../WebApi/Loader';
// import VideoPlayer from 'react-native-video-player'
// import { createThumbnail } from "react-native-create-thumbnail";
// import ViewMoreText from 'react-native-view-more-text';
// import RepliesModal from './components/RepliesModal'
// import ImagePicker from 'react-native-image-crop-picker';
// const StartupPost = (props, route) => {
//   const dispatch = useDispatch();
//   const User = useSelector(state => state.user.user_details)

//   const [searchValue, setsearchValue] = useState('')
//   const [scrollEnabled, setScrollEnabled] = useState(false)
//   const myTextInput = useRef()
//   const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
//   const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
//   const [selectedCategory, setSelectedCategory] = useState('1')
//   const [loading, setLoading] = useState(false)

//   const [showReportModal, setShowReportModal] = useState(false)
//   const [selectedVideo, setSelectedVideo] = useState({})
//   const [userMessage, setUserMessage] = useState('')
//   const [message, setMessage] = useState('')
//   const [showModal, setShowModal] = useState({ isVisible: false, data: null });
//   const [replyingTo, setReplyingTo] = useState('')
//   const [showAtUsername, setShowAtUsername] = useState(false)
//   const [showRepliesModal, setShowRepliesModal] = useState(false)
//   const [viewmore, setviewmore] = useState(true)
//   const [selectedId, setSelectedId] = useState(null);
//   const [commentdata, setCommentdata] = useState([])
//   const [commenttype, setCommenttype] = useState('');
//   const [commentid, setCommentid] = useState('');
//   const [isVisible, setIsVisible] = useState(false);
//   const [commentI, setCommentI] = useState('')
//   const [initalMess, setIntitalMess] = useState('')
//   const [selectedReasonId, setSelectedReasonId] = useState(null)
//   const [reportGet, setReportGet] = useState('')
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleItemChanged = (item) => {
//     console.log("item", item);
//     // Update the currentIndex when the item changes
//     setCurrentIndex(item);
//   };
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
//   const [upData, setupData] = useState([
//     {
//       id: '1',
//       name: 'Maude Hall',
//       message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
//       time: '14 min',
//       img: require('../../../assets/images/comment-person-image.png'),
//       isLiked: true,
//       replies: []
//     },
//     {
//       id: '2',
//       name: 'Eleanor Pena',
//       message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
//       time: '14 min',
//       img: require('../../../assets/images/comment-person-image.png'),
//       isLiked: false,
//       replies: []
//     },
//     {
//       id: '3',
//       name: 'Floyd Miles',
//       message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
//       time: '14 min',
//       img: require('../../../assets/images/comment-person-image.png'),
//       isLiked: true,
//       replies: []
//     },
//     {
//       id: '4',
//       name: 'Robert Fox',
//       message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
//       time: '14 min',
//       img: require('../../../assets/images/comment-person-image.png'),
//       isLiked: true,
//       replies: []
//     },

//   ])
//   const [articleId, setArticleID] = useState(props.route.params.id)
//   const [headline, SetHeadline] = useState('')
//   const [description, SetDescription] = useState('')
//   const [createdDate, SetCreateDate] = useState('')
//   const [id, setId] = useState('')
//   const [moduleID, setModuleId] = useState('')
//   const [moduleName, setModuleName] = useState('')
//   const [isLiked, setIsLiked] = useState(false);
//   const [editModal, setEditModal] = useState(false)
//   const [totalDislike, setTotalDislike] = useState('')
//   const [totlaLike, setTotalLike] = useState('')
//   const [statusLike, setStatusLike] = useState('')
//   const [profile_img, setProfile] = useState('')
//   const [postType, setPostType] = useState('')
//   const [username, SetUsername] = useState('')
//   const [profileModal, setProfileModal] = useState('')
//   const [modalData, setModalData] = useState(null);
//   const [loading2, setLoading2] = useState(false)
//   const [typeEdit, setTypeEdit] = useState('')
//   const [allImg, setAllImg] = useState([{ img: "" }]);

//   const [introSliderData] = useState([
//     // require('../../assets/Group75972.png'),
//     { key: 'one', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
//     { key: 'two', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
//     { key: 'three', image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
//   ])
//   const [images, setImages] = useState('')
//   useEffect(() => {
//     const id = props.route.params.id
//     console.log('id article reiceved form other fr startup', id);
//     setArticleID(id);
//     ArtCategory(id)

//     if (id !== undefined) {
//       // Call the 'GetComments' function
//       GetComments();
//     }

//   }, [id])
//   React.useEffect(() => {
//     const unsubscribe = props.navigation.addListener('focus', () => {
//       // The screen is focused
//       // Call any action
//       ArtCategory(articleId)
//       GetComments()
//       getReport()
//       // console.log('my user id of state----->', userID);
//     });
//     // Return the function to unsubscribe from the event so it gets removed on unmount
//     return unsubscribe;
//   }, [props]);


//   const ArtCategory = async (id) => {
//     console.log('myyy rrrr');
//     setLoading(true);
//     var fUrl = creation_article;
//     var urls = id
//     var murl = '?module_id=' + '57'

//     console.log('my url art ---------->', urls);

//     if (urls != undefined) {
//       fUrl = fUrl + urls + murl;
//     }



//     console.log('my url-- for cooking article-------->', fUrl);

//     const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token);
//     setLoading(false);

//     console.log('the res of specific id from cooking', responseJson);
//     setPostType(responseJson.body.data.images[0].post_type)
//     generateThumb(responseJson.body.data.images);

//     if (responseJson.headers.success == 1) {
//       console.log('the res of specific id', responseJson.body.data.category
//       );

//       SetHeadline(responseJson.body.data.headline);
//       SetDescription(responseJson.body.data.description);
//       SetUsername(responseJson.body.data.username);
//       setId(responseJson.body.data.id);
//       SetCreateDate(responseJson.body.data.created_date);
//       setModuleId(responseJson.body.data.module_id);
//       setModuleName(responseJson.body.data.category);
//       setTotalDislike(responseJson.body.data.total_Dislikes);
//       setTotalLike(responseJson.body.data.total_Likes);
//       setStatusLike(responseJson.body.data.is_Liked);
//       setProfile(responseJson.body.data.user_profile_image);

//       const latestRecordsArray = responseJson.body.articles.slice(0, 3);

//       // Update the state with the latest records
//       setLatestRecords(latestRecordsArray);
//       // Toast.show({ text1: responseJson.headers.message });
//     } else {
//       setalert_sms(err);
//       setMy_Alert(true);
//     }
//   }



//   const Likepost = async () => {
//     console.log('my post is liked or not');
//     setLoading(true)
//     var data = {
//       object_id: id,
//       object_type: 'article',
//       reaction_type: "like"
//     }
//     const { responseJson, err } = await requestPostApi(creation_react + 57, data, 'POST', User.token)
//     setLoading(false)
//     if (responseJson.headers.success == 1) {
//       // console.log('the res like of comments==>>', responseJson, User.token)
//       // ArtCategory()
//       // GetComments()
//       console.log('like is need to be called');
//       ArtCategory(articleId)
//       //Toast.show({ text1: responseJson.headers.message });
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }

//   const Dislikepost = async () => {
//     setLoading(true)
//     var data = {
//       object_id: id,
//       object_type: 'article',
//       reaction_type: "dislike"
//     }
//     const { responseJson, err } = await requestPostApi(creation_react + 57, data, 'POST', User.token)
//     ArtCategory(articleId)
//     setLoading(false)
//     console.log('the res of dislike comments comments==>>', responseJson)
//     if (responseJson.headers.success == 1) {
//       console.log('like is need to be called');
//       ArtCategory(articleId)
//       // Toast.show({ text1: responseJson.headers.message });
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }
//   const GetComments = async () => {

//     var fUrl = creation_getComment
//     var urls = id
//     // console.log('my url art ---------->', urls)
//     if (urls != undefined) {
//       fUrl = fUrl + urls
//     }
//     // console.log('my url---------->', fUrl)
//     setLoading(true)
//     const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
//     setLoading(false)
//     // console.log('the res  get commentss  >', responseJson.data)
//     if (responseJson.success == 1) {
//       // console.log('setCommentdata', responseJson.data.comments);
//       setCommentdata(responseJson.data.comments);
//       setCommenttype(responseJson.data?.comments.comment_type);
//       setCommentid(responseJson.data?.comments.parent_id);
//       setCommentI(responseJson.data?.isLiked)
//       // console.log("response Comment TYPE of post", responseJson.data?.comments.id);

//       // console.log("response parent id", responseJson.data?.comments.isLiked);
//       // Toast.show({ text1: responseJson.headers.message });
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }
//   const Sendcomment = async () => {

//     if (userMessage?.trim()?.length === 0 || (userMessage?.trim()?.length === initalMess.trim()?.length)) {
//       //  console.log('userMessage', userMessage);
//       Toast.show({ text1: 'Comment field cannot be blank' });
//     } else {
//       setLoading(true)
//       var data = {

//         article_id: articleId,
//         comment_id: commentid == undefined ? null : commentid,
//         comment: userMessage
//       }
//       // if (isComment) {
//       //   data.comment_id = commentid
//       // }
//       console.log('creation_addComments', creation_addComments, articleId);
//       const { responseJson, err } = await requestPostApi(creation_addComments + 51, data, 'POST', User.token)
//       setLoading(false)
//       console.log('the res==>>', responseJson)
//       if (responseJson.headers.success == 1) {
//         console.log('the res fr cooking==>>', responseJson)
//         setUserMessage('')
//         setIntitalMess('')
//         // replyingTo == ''
//         setReplyingTo('')
//         GetComments()
//         Keyboard.dismiss()
//         // Toast.show({ text1: responseJson.headers.message });
//       } else {

//         setalert_sms(err)
//         setMy_Alert(true)
//       }
//     }
//   }

//   const sendMessage = () => {
//     if (userMessage?.trim()?.length === 0) {
//       return
//     }
//     if (replyingTo) {
//       const upDataCopy = [...upData]
//       upDataCopy.map(el => {
//         if (replyingTo === el.id) {
//           el.replies.push({
//             id: 99,
//             name: 'saurabh saneja',
//             message: userMessage,
//             time: '0 min',
//             img: require('../../../assets/images/people-sender-image.png'),
//             isLiked: false
//           })
//           return el
//         }
//       })
//       setupData([...upDataCopy])
//     } else {
//       const nextId = upData?.length + 1
//       setupData([...upData,
//       {
//         id: String(nextId),
//         name: 'Saurabh Saneja',
//         message: userMessage,
//         time: '14 min',
//         img: require('../../../assets/images/comment-person-image.png'),
//         isLiked: false,
//         replies: []
//       },
//       ])
//     }
//     Keyboard.dismiss()
//     setUserMessage('')
//     setReplyingTo('')
//   }

//   const LikeComment = async (item) => {
//     console.log('kkkkk', item);
//     setLoading(true)
//     var data = {
//       object_id: item,
//       object_type: "comment",
//       reaction_type: "like"
//     }
//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');
//     const { responseJson, err } = await requestPostApi(creation_reactComment + 57, data, 'POST', User.token)
//     setLoading(false)
//     console.log('the res like of replyyyy1111==>>', responseJson)

//     if (responseJson.headers.success == 1) {
//       //ArtCategory()
//       // Toast.show({ text1: responseJson.headers.message });
//       GetComments()
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }



//   const dislikeComment = async (item) => {
//     console.log('kkkkk', item);


//     setLoading(true)
//     setLoading(true)
//     var data = {
//       object_id: item,
//       object_type: 'comment',
//       reaction_type: "dislike"
//     }
//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');
//     const { responseJson, err } = await requestPostApi(creation_reactComment + 57, data, 'POST', User.token)
//     setLoading(false)
//     console.log('the res dislike of reply==>>', responseJson)

//     if (responseJson.headers.success == 1) {
//       //ArtCategory()
//       // Toast.show({ text1: responseJson.headers.message });
//       GetComments()
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }
//   const EditComment = async (item) => {
//     console.log(' for check of item', item);

//     // var fUrl = edit_comment
//     // var urls = item
//     // console.log('my url art ---------->', urls)
//     // if (urls != undefined) {
//     //   fUrl = fUrl + urls
//     // }
//     // console.log('my url---------->', fUrl)
//     // setLoading(true)
//     // var data = {
//     //   new_comment: ''
//     // }
//     // console.log('====================================');
//     // console.log(data);
//     // console.log('====================================');
//     // const { responseJson, err } = await requestPostApi(fUrl, data, 'POST', User.token)
//     // setLoading(false)
//     // console.log('the res of edit comments ', responseJson)

//     // if (responseJson.headers.success == 1) {
//     //   //ArtCategory()
//     //   // Toast.show({ text1: responseJson.headers.message });
//     //   GetComments()
//     // } else {

//     //   setalert_sms(err)
//     //   setMy_Alert(true)
//     // }
//   }
//   const LikeReply = async (item) => {
//     console.log('kkkkk', item);
//     setLoading(true)
//     var data = {
//       object_id: item,
//       object_type: "reply",
//       reaction_type: "like"
//     }
//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');
//     const { responseJson, err } = await requestPostApi(creation_reactComment + 57, data, 'POST', User.token)
//     setLoading(false)
//     console.log('the res like of replyyyy1111==>>', responseJson)

//     if (responseJson.headers.success == 1) {
//       //ArtCategory()
//       // Toast.show({ text1: responseJson.headers.message });
//       GetComments()
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }

//   const dislikeReply = async (item) => {
//     console.log('kkkkk', item);


//     setLoading(true)
//     var data = {
//       object_id: item,
//       object_type: 'reply',
//       reaction_type: "dislike"
//     }
//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');
//     const { responseJson, err } = await requestPostApi(creation_reactComment + 57, data, 'POST', User.token)
//     setLoading(false)
//     console.log('the res dislike of reply==>>', responseJson)

//     if (responseJson.headers.success == 1) {
//       //ArtCategory()
//       // Toast.show({ text1: responseJson.headers.message });
//       GetComments()
//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }


//   const likeChildComment = (parentId, childIndex) => {
//     const upDataCopy = [...upData]
//     upDataCopy.map(el => {
//       if (el.id === parentId) {
//         el.replies[childIndex].isLiked = !el.replies[childIndex].isLiked
//       }
//       return el
//     })
//     setupData([...upDataCopy])
//   }

//   const generateThumb = async (images) => {
//     setLoading2(true);
//     console.log(images, 'el.images hhhhhh hhhhhhh');

//     const filteredData = images.filter((imgData) => imgData.file_url !== null);
//     const allData1 = await Promise.all(filteredData.map(async (imgData, index) => {
//       console.log('imgData', imgData);

//       if (imgData.post_type === "Image") {
//         console.log('Reached Image');
//         return { ...imgData, type: 'image', id: index };
//       } else if (imgData.post_type === "Video") {
//         console.log("Reached Video, creating thumbnail", imgData);
//         const thumb = await createThumbnail({
//           url: imgData.file_url,
//           timeStamp: 10, // Specify the time position for the thumbnail (in milliseconds)
//         });
//         return {
//           ...imgData,
//           thumb,
//           type: "video",
//           id: index,
//         };
//       }

//       return null; // Return null for unsupported post_type or invalid data
//     }));

//     console.log(allData1, 'my specific thumbs');
//     // setData(allData1);
//     setImages(allData1)
//     var allimgs = [];
//     for (let i = 1; i <= allData1.length; i++) {
//       console.log(i, 'my updated functionnn');
//       allimgs.push({ img: allData1[i - 1].file_url });
//     }
//     setAllImg(allimgs);
//     setLoading2(false);
//   };

//   const toggleModal = (state) => {
//     console.log('state', state);
//     setShowModal({
//       isVisible: state.isVisible,
//       data: state.data,
//     });
//   };

//   const _renderItem = ({ item }) => {
//     console.log('item of renderItem', item.file_url);
//     return (
//       <>
//         {/* {
//           item.type === 'video' ? <VideoPlayer
//             resizeMode="contain"
//             video={{ uri: item.file_url }}
//             style={{ borderWidth: 2, }}
//             videoWidth={dimensions.SCREEN_WIDTH}
//             videoHeight={200}
//             autoplay={false}
//             thumbnail={{ uri: item.thumb.path }}
//             endWithThumbnail
//             disableControlsAutoHide
//             customStyles={{
//               thumbnail: { width: '100%', height: (dimensions.SCREEN_HEIGHT * 35) / 100, alignSelf: 'center', },
//               videoWrapper: { width: '100%', height: 350, },
//               // wrapper: { width: '100%', height: 227 },
//             }}
//           />
//             :
//             <Image source={{ uri: item.file_url }} style={{ width: dimensions.SCREEN_WIDTH, height: 380, alignSelf: 'center' }} resizeMode='stretch' />
//         } */}

//         <TouchableOpacity style={{ width: '100%', height: 227, borderRadius: 10, alignSelf: 'center', resizeMode: 'cover' }} onPress={() => {
//           setShowModal({
//             isVisible: true,
//             data: item
//           })
//         }} >

//           <ImageBackground source={{ uri: item.thumb.path }} style={{
//             width: '100%', height: (dimensions.SCREEN_HEIGHT * 35) / 100, alignSelf: 'center', justifyContent: 'center',
//             overflow: 'hidden',
//           }} resizeMode='cover' >
//             <Image source={require('../../../assets/images/people-play-button.png')} style={{ width: '20%', height: '20%', alignSelf: 'center', }} resizeMode='contain' ></Image>
//           </ImageBackground>
//         </TouchableOpacity>

//       </>

//     );
//   }
//   const DeletePost = async (id) => {
//     console.log('DeletePost Pressed!', id.id)
//     var fUrl = creation_deleteComment
//     var urls = id.id
//     console.log('my url art ---------->', urls)
//     if (urls != undefined) {
//       fUrl = fUrl + urls
//     }
//     console.log('my url art ---------->', fUrl)
//     setLoading(true)
//     const { responseJson, err } = await requestGetApi(fUrl, '', 'DELETE', User.token)
//     setLoading(false)
//     console.log('the DeletePost==>>', responseJson)
//     if (responseJson.headers.success == 1) {
//       GetComments()
//     }
//     Toast.show({ text1: responseJson.headers.message });
//     // } else {

//     //   setalert_sms(err)
//     //   setMy_Alert(true)
//     // }
//   }
//   const Createpos = async (item) => {
//     console.log(' item for edit of reply', item);
//     if (message?.trim()?.length === 0) {
//       Toast.show({ text1: 'Comment field cannot be blank' });
//     } else {
//       setLoading(true)
//       console.log('llll', item)
//       const data = {
//         "new_comment": message,

//       }
//       const { responseJson, err } = await requestPostApi(creation_editComment + item, data, 'PUT', User.token)
//       GetComments()
//       setEditModal(false)
//       console.log('the edit post', responseJson.post.post_description)
//       if (responseJson.success == 1) {
//         Toast.show({ text1: responseJson.headers.message });
//         GetComments()
//         // setUserid(nameAgeList[0].rest.userid)
//         //props.navigation.navigate('MyProfile')
//         // setdescrbe(responseJson.post.post_description)
//         // setLoading(false)


//       } else {

//         setalert_sms(err)
//         setMy_Alert(true)

//       }
//       setLoading(false)
//     }
//   }



//   const getReport = async () => {
//     setLoading(true)
//     const { responseJson, err } = await requestGetApi(creation_get_report, '', 'GET', User.token)
//     setLoading(false)
//     console.log('the res of get suggest post', responseJson)
//     if (responseJson.headers.success == 1) {
//       console.log('the res after sucess report get', responseJson.body.data)
//       setReportGet(responseJson.body.data)

//     } else {

//       setalert_sms(err)
//       setMy_Alert(true)
//     }
//   }

//   const postReport = async (items) => {
//     console.log('kkkkk', selectedReasonId);
//     if (selectedReasonId === null) {
//       Toast.show({ text1: 'Select a reason for report' });
//       return; // Exit the function to prevent further execution
//     }

//     setLoading(true);
//     console.log(fUrl, 'ggggggggggggg bbbbbb');
//     var fUrl = creation_post_report;
//     var urls = articleId;
//     console.log('my url---------->', urls);
//     if (urls !== undefined) {
//       fUrl = fUrl + urls;
//     }
//     var data = {
//       report_id: items,
//       comment: ""
//     };

//     const { responseJson, err } = await requestPostApi(fUrl, data, 'POST', User.token);
//     setLoading(false);
//     console.log('the res of report', responseJson);
//     setShowReportModal(false);

//     if (responseJson.headers.success === 1) {
//       Toast.show({ text1: responseJson.headers.message });
//       setSelectedReasonId(null);
//       console.log('report post article', responseJson);
//     } else {
//       setalert_sms(err);
//       setMy_Alert(true);
//     }
//   }
//   return (
//     <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
//       <View>
//         <ScrollView>
//           {console.log(allImg, 'images photos')}
//           <>
//             <View style={{ height: (dimensions.SCREEN_HEIGHT * 35) / 100, overflow: 'hidden', }}>
//               {Array.isArray(images) && images.length > 0 && images[0].post_type !== 'Image' ? (
//                 <AppIntroSlider
//                   data={images}
//                   renderItem={_renderItem}
//                   // renderPagination={() => null}
//                   renderDoneButton={() => <View />}
//                   renderNextButton={() => <View />}
//                   activeDotStyle={{ backgroundColor: '#FFC40C', height: 4, width: 18, borderRadius: 0, top: 20 }}
//                   dotStyle={{ backgroundColor: '#fff', height: 4, width: 18, borderRadius: 0, top: 20 }}
//                   keyExtractor={(item) => item.id}
//                 />
//               ) : (
//                 <>
//                   {images.length != 0 ? (
//                     <>
//                       <ImageSlider
//                         data={allImg}
//                         autoPlay={false}

//                         closeIconColor="#FFC40C"
//                         onItemChanged={handleItemChanged}
//                         activeIndicatorStyle={{ backgroundColor: '#FFC40C', }}

//                         inActiveIndicatorStyle={{ backgroundColor: '#fff' }}
//                         caroselImageStyle={{ resizeMode: "stretch", height: (dimensions.SCREEN_HEIGHT * 35) / 100, }}

//                       />
//                       {/* <View style={styles.dotContainer}>
//                         {allImg.map((item, index) => (
//                           <View key={index} style={[styles.dot, index === currentIndex ? styles.activeDot : styles.inactiveDot]} />
//                         ))}
//                       </View> */}
//                     </>
//                   ) : (
//                     null
//                   )}
//                 </>
//               )

//               }


//               <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ position: 'absolute', left: 20, top: 30 }}>
//                 <Image source={require('../../../assets/images/service-header-back-button.png')} style={{ width: 25, height: 20 }} />
//               </TouchableOpacity>
//             </View>
//           </>
//           <View style={{ width: '90%', alignSelf: 'center', paddingVertical: 20 }}>
//             <Text numberOfLines={2} style={{ fontSize: 20, lineHeight: 20, fontWeight: '400', color: '#000' }}>

//               {headline}
//             </Text>
//             <View>
//               <Text style={{
//                 fontSize: 14,
//                 fontWeight: '500',
//                 color: '#FFC40C',
//                 // Align the text within its container to the top
//                 marginRight: 10,
//                 marginTop: 10
//               }}>{moduleName}</Text>
//             </View>
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
//               <Text style={{ fontSize: 12, fontWeight: '400', color: '#455A64' }}>Author: {username}</Text>
//               <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
//                 <Image source={require('../../../assets/images/fashion-calendar-icon.png')} />
//                 <Text style={{ fontSize: 12, fontWeight: '400', color: '#455A64', marginLeft: 5 }}>{createdDate}</Text>
//               </View>
//             </View>


//             <View style={styles.buttonsRow}>
//               <TouchableOpacity
//                 onPress={() =>
//                   Likepost(
//                   )}
//                 style={styles.buttonView}>
//                 <Image

//                   source={
//                     totlaLike
//                       <= 0
//                       ?
//                       require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
//                       : require('../../../assets/Art/ThumbsUpStartup.png')}

//                   style={{ height: 30, width: 30 }} />
//                 <Text style={styles.buttonText2}>{totlaLike
//                 }</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.buttonView} onPress={() =>
//                 Dislikepost(
//                 )}>
//                 <Image
//                   source={
//                     totalDislike

//                       <= 0
//                       ? require('../../../assets/images/fashion-dark-dislike-button.png')
//                       // Use dislike image
//                       : require

//                         ('../../../assets/Art/ThumbsDownStartup.png') // Use like image
//                   } // Use like image

//                   style={{ height: 30, width: 30 }} />
//                 <Text style={styles.buttonText2}>{totalDislike}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.buttonView}>
//                 <Image source={require('../../../assets/images/fashion-dark-share-button.png')} style={{ height: 30, width: 30 }} />
//                 <Text style={styles.buttonText2}>Share</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => { setShowReportModal(true) }} style={styles.buttonView}>
//                 <Image source={require('../../../assets/images/fashion-dark-report-button.png')} style={{ height: 30, width: 30 }} />
//                 <Text style={styles.buttonText2}>Report</Text>
//               </TouchableOpacity>
//             </View>

//             <Text style={styles.descriptionText}>
//               {description}
//             </Text>



//           </View>
//           <View style={{ width: '90%', alignSelf: 'center', paddingVertical: 20 }}>
//             <Text style={{ fontSize: 20, lineHeight: 20, fontWeight: '400', color: '#000' }}>
//               Comments</Text>
//           </View>

//           {
//             commentdata.length != 0 ?
//               <View style={{ width: '96%', alignSelf: 'center', marginTop: 10, height: '100%', paddingBottom: 40 }}>


//                 <View style={{ width: '100%', alignSelf: 'center', }}>
//                   <FlatList
//                     data={commentdata}
//                     showsHorizontalScrollIndicator={false}
//                     numColumns={1}
//                     keyExtractor={item => item.id}
//                     renderItem={({ item, index }) => {
//                       console.log('item send11 uuuuu', item.userid === User.userid || item.article_created_by === User.userid);
//                       // userid == User.userid

//                       // item.userid == User.userid


//                       return (
//                         <TouchableOpacity onLongPress={() => { }} style={{ width: dimensions.SCREEN_WIDTH * 0.9, marginHorizontal: 5, marginBottom: 15, paddingHorizontal: 20 }}>
//                           <>
//                             <View>
//                               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                 {/* <Image source={require('../../../assets/images/comment-person-image.png')} /> */}
//                                 {item.profile_image
//                                   ? (
//                                     <Image
//                                       source={{
//                                         uri: item.profile_image

//                                       }}
//                                       style={{ width: 35, height: 35, borderRadius: 100, }}

//                                     />
//                                   ) : (
//                                     <Image
//                                       source={require('../../../assets/blankProfile.png')}
//                                       style={{ width: 35, height: 35, borderRadius: 90 }}
//                                     />
//                                   )}


//                                 <View>
//                                   <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', marginLeft: 10 }}>{item.first_name + ' ' + item.last_name}</Text>
//                                   <Text style={{ fontSize: 12, fontWeight: '400', color: '#B4BBC6', marginLeft: 12, marginTop: 5 }}>{item.created_date}</Text>
//                                 </View>

//                                 <View style={{ flexDirection: 'row', position: 'absolute', right: -10 }}>
//                                   {item.userid === User.userid || item.article_created_by === User.userid ? <TouchableOpacity onPress={() => {


//                                     setModalData(item);

//                                     setProfileModal(true)


//                                   }} style={[styles.rightButtonsView, { marginRight: 0 }]}>
//                                     <Image source={require('../../../assets/ent_delete_image.png')} style={{ width: 29, height: 29 }} />
//                                   </TouchableOpacity> : null}

//                                 </View>

//                               </View>

//                               <View style={{ marginTop: 10 }}>
//                                 <Text style={{ fontSize: 14, fontWeight: '400', color: '#272727' }}>{item.comment}</Text>
//                               </View>
//                               <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

//                                 <TouchableOpacity
//                                   onPress={() =>
//                                     LikeComment(item.id
//                                     )}
//                                   style={styles.buttonView}>
//                                   <Image
//                                     source={
//                                       item.totalLikes
//                                         <= 0
//                                         ?
//                                         require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
//                                         : require('../../../assets/Art/ThumbsUpStartup.png')
//                                     }

//                                     style={{ height: 20, width: 20 }} />
//                                   <Text style={styles.buttonText2}>{item.totalLikes}</Text>
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style={styles.buttonView} onPress={() =>
//                                   dislikeComment(item.id
//                                   )}>
//                                   <Image source={
//                                     // total_Disikes
//                                     item.total_Disikes
//                                       <= 0
//                                       ? require('../../../assets/images/fashion-dark-dislike-button.png')
//                                       : require

//                                         ('../../../assets/Art/ThumbsDownStartup.png') // Use like 


//                                     // Use like image
//                                   } style={{ height: 20, width: 20, marginLeft: 23 }} />

//                                   <Text style={styles.buttonText2}>{item.total_Disikes}</Text>
//                                 </TouchableOpacity>
//                                 {item.userid == User.userid ? <TouchableOpacity style={styles.buttonView}
//                                   onPress={() => {
//                                     setEditModal({
//                                       active: true,
//                                       id: item.id,

//                                     })
//                                     setSelectedId(item.id);
//                                     setMessage(item.comment)

//                                   }}
//                                 >
//                                   <Image source={

//                                     require
//                                       ('../../../assets/People/editProfilePEople.png') // Use dislike image

//                                   } style={{ height: 20, width: 20, marginLeft: 23, tintColor: '#FFC40C' }} />

//                                   <Text style={{
//                                     fontSize: 14,
//                                     fontWeight: '500',
//                                     color: '#FFC40C',
//                                     marginLeft: 5
//                                   }}>Edit</Text>
//                                 </TouchableOpacity> : null
//                                 }
//                                 <TouchableOpacity onPress={() => {
//                                   // setShowAtUsername(true);
//                                   console.log("item.id", item.id);
//                                   setUserMessage(`@${commentdata?.find(el => el.id === item.id)?.first_name}`)
//                                   setIntitalMess(`@${commentdata?.find(el => el.id === item.id)?.first_name}`)

//                                   myTextInput.current.focus()
//                                   setCommentid(item.id)
//                                   // replyingTo = item.id
//                                   // setReplyingTo(item);
//                                   // setShowRepliesModal(true); 
//                                 }} style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                   <Image source={require('../../../assets/images/people-reply-image.png')} style={{ tintColor: '#FFC40C' }} />
//                                   <Text style={{ fontSize: 14, fontWeight: '500', color: '#FFC40C', marginLeft: 10 }}>Reply</Text>
//                                 </TouchableOpacity>

//                               </View>
//                               <View>


//                               </View>
//                             </View>
//                             <View style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop: 10 }} />

//                             {item?.replyComments?.length > 0 ?
//                               <>
//                                 {/* <View style={{ alignItems: 'flex-end', right: -10 }}>
//                                 <Text onPress={() => { setviewmore(!viewmore) }} style={{ color: '#835E23', textDecorationLine: "underline", fontSize: 12, }}>{viewmore ? 'View less' : 'View more'}</Text>
//                               </View> */}
//                                 {
//                                   item?.replyComments?.map((item, index) => {
//                                     // console.log('reply stttttt', item);
//                                     return (
//                                       <>
//                                         {
//                                           viewmore ?
//                                             (<>
//                                               <View style={{ width: '90%', marginLeft: 30, marginTop: 10 }}>
//                                                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                                   {/* <Image source={require('../../../assets/images/people-sender-image.png')} style={{ height: 40, width: 40 }} /> */}
//                                                   {item.profile_image ? (
//                                                     <Image
//                                                       source={{
//                                                         uri: item.profile_image
//                                                       }}
//                                                       style={{ width: 35, height: 35, borderRadius: 90 }}
//                                                     />
//                                                   ) : (
//                                                     <Image
//                                                       source={require('../../../assets/blankProfile.png')}
//                                                       style={{ width: 35, height: 35, borderRadius: 90 }}
//                                                     />
//                                                   )}

//                                                   <View style={{ flex: 1, marginLeft: 10 }}>
//                                                     <Text style={{ fontSize: 14, fontWeight: '500', color: '#000' }}>{item.first_name + ' ' + item.last_name}</Text>
//                                                     <Text style={{ fontSize: 12, fontWeight: '400', color: '#B4BBC6', marginTop: 4 }}>{item.created_date}</Text>
//                                                   </View>

//                                                   {item.userid == User.userid && (
//                                                     <TouchableOpacity
//                                                       onPress={() => {
//                                                         setModalData(item);
//                                                         setProfileModal(true);
//                                                       }}
//                                                       style={[styles.rightButtonsView, { marginLeft: 10 }]}
//                                                     >
//                                                       <Image source={require('../../../assets/ent_delete_image.png')} style={{ width: 29, height: 29 }} />
//                                                     </TouchableOpacity>
//                                                   )}
//                                                 </View>
//                                                 <View style={{ marginTop: 10 }}>
//                                                   <Text style={{ fontSize: 14, fontWeight: '400', color: '#272727' }}>{item.comment}</Text>
//                                                 </View>
//                                                 <View style={{
//                                                   width: '80%',
//                                                   flexDirection: 'row',

//                                                   alignItems: 'center',
//                                                   marginTop: 10
//                                                 }}>
//                                                   <TouchableOpacity
//                                                     onPress={() =>
//                                                       LikeReply(item.id
//                                                       )}
//                                                     style={styles.buttonView}>
//                                                     <Image

//                                                       source={
//                                                         item.total_Likes
//                                                           <= 0
//                                                           ?
//                                                           require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
//                                                           : require('../../../assets/Art/ThumbsUpStartup.png')}
//                                                       // Use like image


//                                                       style={{ height: 20, width: 20 }} />
//                                                     <Text style={styles.buttonText2}>{item.total_Likes
//                                                     }</Text>
//                                                   </TouchableOpacity>
//                                                   <TouchableOpacity style={styles.buttonView} onPress={() =>
//                                                     dislikeReply(item.id
//                                                     )}>
//                                                     <Image source={
//                                                       item.total_Disikes

//                                                         <= 0
//                                                         ? require('../../../assets/images/fashion-dark-dislike-button.png')
//                                                         // Use dislike image
//                                                         : require

//                                                           ('../../../assets/Art/ThumbsDownStartup.png') // Use like image
//                                                     } // Use l 
//                                                       style={{ height: 20, width: 20, marginLeft: 23 }} />
//                                                     <Text style={styles.buttonText2}>{item.total_Disikes
//                                                     }</Text>
//                                                   </TouchableOpacity>
//                                                   {item.userid == User.userid ? <TouchableOpacity style={styles.buttonView}
//                                                     onPress={() => {
//                                                       setEditModal({
//                                                         active: true,
//                                                         id: item.id,
//                                                         type: 'reply'

//                                                       })
//                                                       setSelectedId(item.id);
//                                                       setMessage(item.comment)
//                                                       setTypeEdit('reply')

//                                                     }}
//                                                   >
//                                                     <Image source={

//                                                       require
//                                                         ('../../../assets/People/editProfilePEople.png') // Use dislike image

//                                                     } style={{ height: 20, width: 20, marginLeft: 23, tintColor: '#FFC40C' }} />

//                                                     <Text style={{
//                                                       fontSize: 14,
//                                                       fontWeight: '500',
//                                                       color: '#FFC40C',
//                                                       marginLeft: 5
//                                                     }}>Edit</Text>
//                                                   </TouchableOpacity> : null
//                                                   }
//                                                 </View>
//                                               </View>
//                                               <View style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop: 10 }} />
//                                             </>)
//                                             :
//                                             null
//                                         }
//                                       </>
//                                     )

//                                   })}
//                               </>
//                               : null}
//                           </>
//                         </TouchableOpacity>
//                       )
//                     }}

//                   />
//                 </View>



//               </View>

//               :
//               <View style={{ width: '100%', alignSelf: 'center', height: '100%' }}>
//                 <Text style={{ fontSize: 14, fontWeight: '500', color: '#B4BBC6', marginHorizontal: 20 }}> No comments available</Text>
//               </View>
//           }

//           <View style={{ height: 10 }} />

//           <View style={{ width: '85%', alignSelf: 'center' }}>
//           </View>
//           <View style={{ height: 100 }} />
//         </ScrollView>
//       </View>
//       <Modal
//         isVisible={editModal}
//         swipeDirection="down"
//         selectedId={selectedId}
//         typeEdit={typeEdit}

//         onBackdropPress={() => setEditModal(false)}
//         onSwipeComplete={e => {
//           setEditModal(false);
//         }}

//         scrollTo={() => { }}
//         scrollOffset={1}
//         propagateSwipe={true}
//         coverScreen={false}
//         backdropColor="transparent"
//         style={{
//           justifyContent: 'flex-end',
//           margin: 0,
//           backgroundColor: 'rgba(211, 211, 211, 0.7)',
//         }}>
//         <View
//           style={{
//             height: '28%',
//             backgroundColor: '#FFF',
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//             paddingVertical: 20,
//           }}
//         >

//           <View
//             style={{

//               width: '80%',
//               backgroundColor: '#E0E0E0',
//               padding: 5,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               alignSelf: 'center',
//               borderRadius: 20,
//             }}
//           >
//             {/* <Image
//               source={require('../../../assets/blankProfile.png')}
//               style={{ width: 35, height: 35, borderRadius: 40 }}
//             /> */}
//             {profile_img
//               ? (
//                 <Image
//                   source={{
//                     uri: profile_img

//                   }}
//                   style={{ width: 35, height: 35, borderRadius: 40 }}
//                   resizeMode="contain"
//                 />
//               ) : (
//                 <Image
//                   source={require('../../../assets/blankProfile.png')}
//                   style={{ width: 35, height: 35, borderRadius: 40 }}
//                 />
//               )}
//             {/* //profile_img */}
//             <TextInput
//               // ref={myTextInput}
//               value={message}
//               onChangeText={(text) => {
//                 setMessage(text);
//               }}
//               placeholder="Edit Comment"
//               placeholderTextColor={'#B2B7B9'}
//               style={{
//                 paddingLeft: 20,
//                 fontSize: 14,
//                 fontWeight: '500',
//                 color: '#000',


//               }}
//               multiline
//             />

//             {/* Add your buttons here */}
//             {/* <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>Button 1</Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>Button 2</Text>
//               </TouchableOpacity> */}
//             {/* End of buttons */}
//           </View>
//           <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30, marginRight: 40 }}>
//             <TouchableOpacity style={{ backgroundColor: '#FFC40C', height: 40, width: 100, marginRight: 30, borderRadius: 10 }} onPress={() => { setEditModal(false) }}>
//               <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 8, fontSize: 14, fontWeight: '600' }}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={{ backgroundColor: '#FFC40C', height: 40, width: 100, borderRadius: 10 }}
//               onPress={() => { typeEdit === 'reply' ? Createpos(selectedId) : Createpos(selectedId) }

//               }>
//               <Text
//                 style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 8, fontSize: 14, fontWeight: '600' }}
//               >Update</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ width: 100, height: 100 }} />
//         </View>
//       </Modal >
//       < Modal
//         isVisible={profileModal}
//         // swipeDirection="down"
//         onBackdropPress={() => setProfileModal(false)}
//         // onSwipeComplete={e => {
//         //   setProfileModal(false);
//         // }}

//         style={{
//           justifyContent: 'center', // Update justifyContent to 'flex-start'
//           margin: 0,
//           height: 30,
//           backgroundColor: 'transparent',
//           alignItems: 'center',

//           width: '100%',
//         }}>
//         <View
//           style={{
//             height: '15%',
//             backgroundColor: '#FFF',
//             justifyContent: 'center', // Update justifyContent to 'flex-start'
//             alignItems: 'center',


//             borderRadius: 20
//           }}>

//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             nestedScrollEnabled={true}>
//             <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
//               {/* <View>
//                 <TouchableOpacity onPress={() => { setProfileModal(false) }} style={{ alignSelf: 'flex-end', width: 30, height: 25, marginTop: 9 }}>
//                   <Image source={require('../../../assets/People/ModelClode.png')} style={{ alignSelf: 'flex-end' }}></Image></TouchableOpacity>
//               </View> */}
//               <View style={{ borderRadius: 10, }}>


//                 <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => {
//                   props.navigation.navigate('EditArticle', { id: selectedId, cat: selectedCategoryy, desc: desc, title: title }), setProfileModal(false)

//                 }}>

//                   <Text style={{ fontSize: 14, left: 10, color: 'black', justifyContent: 'center', textAlign: 'center' }}>Are you sure you want to delete comment</Text>
//                 </TouchableOpacity>
//               </View >

//               <View style={{ marginTop: 10 }}>
//                 <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => {
//                   DeletePost(modalData)
//                     , setProfileModal(false)
//                 }} >
//                 </TouchableOpacity>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                   <TouchableOpacity onPress={() => {
//                     DeletePost(modalData)
//                       , setProfileModal(false)
//                   }}>
//                     <Text style={{ fontSize: 14, left: 14, color: 'black', }}>Yes</Text>

//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={() => setProfileModal(false)}>
//                     <Text style={{ fontSize: 14, left: 14, color: 'black', marginRight: 10 }}>No</Text>
//                   </TouchableOpacity>
//                 </View>

//               </View>


//             </View>

//             <View style={{ width: 100, height: 100 }} />
//           </ScrollView>
//         </View>
//       </Modal >
//       {loading ? <Loader /> : null}
//       <RepliesModal
//         isVisible={showRepliesModal}
//         setIsVisible={setShowRepliesModal}
//         data={commentdata}
//         setData={setCommentdata}
//         replyingTo={replyingTo}
//         setReplyingTo={setReplyingTo}
//         showAtUsername={showAtUsername}
//         likeChildComment={likeChildComment}

//       // startFromIndex={startFromIndex}
//       />

//       <View style={{
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         backgroundColor: '#fff',
//         padding: 15,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//       }}>
//         <TextInput
//           ref={myTextInput}
//           value={userMessage}
//           onChangeText={(text) => {
//             setUserMessage(text)
//           }}
//           placeholder="What's on your mind"
//           placeholderTextColor={'#B2B7B9'}
//           style={styles.input}
//           multiline
//         />
//         <TouchableOpacity onPress={() => {
//           Sendcomment()

//           // :Sendcomment(true)

//         }} style={styles.sendButtonView}>
//           <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}>Send</Text>
//         </TouchableOpacity>
//       </View>


//       {
//         loading || loading2 ?
//           <Loader />
//           : null
//       }
//       {console.log('showModal?.data', showModal?.data)}
//       {
//         showModal.isVisible ? (

//           <VideoModel
//             isVisible={showModal.isVisible}
//             toggleModal={toggleModal}
//             videoDetail={{ ...showModal?.data, url: showModal?.data?.file_url }}
//             {...props}
//           />
//         ) : null
//       }


//       <Modal
//         isVisible={showReportModal}
//         swipeDirection="down"
//         onBackdropPress={() => { setShowReportModal(false), setSelectedReasonId(null) }}
//         onSwipeComplete={(e) => {
//           setShowReportModal(false)
//           setSelectedReasonId(null);
//         }}
//         scrollTo={() => { }}
//         scrollOffset={1}
//         propagateSwipe={true}
//         coverScreen={false}
//         backdropColor='transparent'
//         style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
//       >
//         <View style={{ height: 'auto', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
//           <Text style={{ fontSize: 20, fontWeight: '700', color: '#455A64', textAlign: 'center', marginBottom: 20, marginTop: 30 }}>Report</Text>
//           <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

//             <FlatList
//               data={reportGet}
//               showsHorizontalScrollIndicator={false}
//               numColumns={1}
//               keyExtractor={item => item.id}
//               style={{ marginBottom: 10 }}
//               renderItem={({ item, index }) => {
//                 console.log('item.report_id', item.report_id);
//                 return (
//                   <TouchableOpacity key={item.report_id} onPress={() => setSelectedReasonId(item.report_id)} style={selectedReasonId === item.report_id ? styles.selectedReasonView : styles.reasonView}>
//                     <Image source={selectedReasonId === item.report_id ? require('../../../assets/images/fastion-selected-reason-icon.png') : require('../../../assets/images/fastion-reason-icon.png')} style={{ tintColor: '#FFC40C' }} />
//                     <View style={{ marginLeft: 10 }}>
//                       <Text style={{ fontSize: 14, lineHeight: 14, fontWeight: '400', color: '#455A64' }}>{item.feedback}</Text>
//                       {item.description ?
//                         <Text style={{ fontSize: 12, lineHeight: 12, fontWeight: '400', color: '#C5C6C9', marginTop: 2 }}>{item.description}</Text>
//                         : null}
//                     </View>
//                   </TouchableOpacity>
//                 )
//               }}
//             />

//             <TouchableOpacity onPress={() => { postReport(selectedReasonId) }} style={styles.reportButtonView}>
//               <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Report</Text>
//             </TouchableOpacity>

//           </ScrollView>

//         </View>
//       </Modal>
//     </SafeAreaView >
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
//     width: '80%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10
//   },
//   buttonView: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   buttonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#8F93A0',
//     marginLeft: 5
//   },
//   buttonText2: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#455A64',
//     marginLeft: 5
//   },
//   descriptionText: {
//     fontSize: 14,
//     lineHeight: 17.64,
//     fontWeight: '400',
//     color: '#455A64',
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
//   addCommentView: {
//     position: 'absolute',
//     bottom: 10,
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // shadowColor: '#000',
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 3
//     // },
//     // shadowRadius: 1,
//     // shadowOpacity: 0.3,
//     // elevation: 5,
//   },
//   input: {
//     paddingLeft: 20,
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#000',
//     flex: 7
//   },
//   sendButtonView: {
//     backgroundColor: '#FFC40C',
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//     borderRadius: 5,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
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
//   reportButtonView: {
//     height: 60,
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: '#FFC40C',
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
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: '#FFC40C',
//   },
//   inactiveDot: {
//     backgroundColor: '#fff',
//   },
// });
// export default StartupPost 
import React, { useEffect, useState, useRef, cloneElement } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, Keyboard } from 'react-native';
import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
// import { ImageSlider } from "react-native-image-slider-banner";
import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2, art_HomePage, art_likeDislike, article_id, all_coments, add_comments, react_comments, delete_comments, edit_comment, post_reportSuggestion, get_reportSuggestion, creation_article, creation_home, creation_react, creation_addComments, creation_reactComment, creation_getComment, creation_editComment, creation_deleteComment, creation_get_report, creation_post_report, Invention_article } from '../../../WebApi/Service'
import { useSelector, useDispatch } from 'react-redux';
import { VideoModel } from '../../../component/VideoModel';
import ProgressBar from 'react-native-progress/Bar'
import FashionSearch from './components/FashionSearch';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Loader from '../../../WebApi/Loader';
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import ViewMoreText from 'react-native-view-more-text';
import RepliesModal from './components/RepliesModal'
import ImagePicker from 'react-native-image-crop-picker';

const InventionPost = (props, route) => {
  const dispatch = useDispatch();
  const User = useSelector(state => state.user.user_details)

  const [searchValue, setsearchValue] = useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('1')
  const [loading, setLoading] = useState(false)

  const [showReportModal, setShowReportModal] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState({})
  const [userMessage, setUserMessage] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState({ isVisible: false, data: null });
  const [replyingTo, setReplyingTo] = useState('')
  const [showAtUsername, setShowAtUsername] = useState(false)
  const [showRepliesModal, setShowRepliesModal] = useState(false)
  const [viewmore, setviewmore] = useState(true)
  const [selectedId, setSelectedId] = useState(null);
  const [commentdata, setCommentdata] = useState([])
  const [commenttype, setCommenttype] = useState('');
  const [commentid, setCommentid] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [commentI, setCommentI] = useState('')
  const [initalMess, setIntitalMess] = useState('')
  const [selectedReasonId, setSelectedReasonId] = useState(null)
  const [reportGet, setReportGet] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleItemChanged = (item) => {
    console.log("item", item);
    // Update the currentIndex when the item changes
    setCurrentIndex(item);
  };
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
  const [upData, setupData] = useState([
    {
      id: '1',
      name: 'Maude Hall',
      message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time: '14 min',
      img: require('../../../assets/images/comment-person-image.png'),
      isLiked: true,
      replies: []
    },
    {
      id: '2',
      name: 'Eleanor Pena',
      message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time: '14 min',
      img: require('../../../assets/images/comment-person-image.png'),
      isLiked: false,
      replies: []
    },
    {
      id: '3',
      name: 'Floyd Miles',
      message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time: '14 min',
      img: require('../../../assets/images/comment-person-image.png'),
      isLiked: true,
      replies: []
    },
    {
      id: '4',
      name: 'Robert Fox',
      message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time: '14 min',
      img: require('../../../assets/images/comment-person-image.png'),
      isLiked: true,
      replies: []
    },

  ])
  const [articleId, setArticleID] = useState(props.route.params.id)
  const [headline, SetHeadline] = useState('')
  const [description, SetDescription] = useState('')
  const [createdDate, SetCreateDate] = useState('')
  const [id, setId] = useState('')
  const [moduleID, setModuleId] = useState('')
  const [moduleName, setModuleName] = useState('')
  const [isLiked, setIsLiked] = useState(false);
  const [editModal, setEditModal] = useState(false)
  const [totalDislike, setTotalDislike] = useState('')
  const [totlaLike, setTotalLike] = useState('')
  const [statusDislike, setStatusDislike] = useState('')
  const [statusLike, setStatusLike] = useState('')
  const [profile_img, setProfile] = useState('')
  const [postType, setPostType] = useState('')
  const [username, SetUsername] = useState('')
  const [profileModal, setProfileModal] = useState('')
  const [modalData, setModalData] = useState(null);
  const [loading2, setLoading2] = useState(false)
  const [typeEdit, setTypeEdit] = useState('')
  const [allImg, setAllImg] = useState([{ img: "" }]);
  const [typeArticle, setTypeArticle] = useState('')
  const [days, setDays] = useState('')
  // const totalAmount = 9000
  const [totalAmount, setTotalAmount] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [raisedAmount, setRaisedAmount] = useState('')
  const [paymnentModal, setPaymentModal] = useState('')
  const [myammount, setMyAmmount] = useState('30')
  const [contributed, setContributed] = useState([])
  // const progress = raisedAmount / totalAmount;
  const progress = raisedAmount / totalAmount;
  console.log('progess ammaount', (progress * 100).toFixed(0));
  const calculatedProgress = progress * 100;
  const formattedProgress = calculatedProgress.toFixed(0);

  // Now you can use formattedProgress wherever you need to display the progress percentage
  console.log(formattedProgress + '%', 'my formated progress');
  const [introSliderData] = useState([
    // require('../../assets/Group75972.png'),
    { key: 'one', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
    { key: 'two', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { key: 'three', image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
  ])
  const [images, setImages] = useState('')
  useEffect(() => {
    const id = props.route.params.id
    console.log('id article reiceved form other fr startup', id);
    setArticleID(id);
    ArtCategory(id)

    if (id !== undefined) {
      // Call the 'GetComments' function
      GetComments();
      // const creatdDate = new Date();
      // console.log(createdDate, 'llllllllcreatedDate');
      // const expiryDat = new Date(expiryDate);

      // // Calculate the time difference in milliseconds
      // const timeDifference = expiryDat - creatdDate;

      // // Convert milliseconds to days
      // const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      // console.log('daysDifference', daysDifference);
      // setDays(daysDifference)
    }

  }, [id])
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      ArtCategory(articleId)
      GetComments()
      getReport()
      // console.log('my user id of state----->', userID);
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props]);


  const ArtCategory = async (id) => {
    console.log('myyy rrrr');
    setLoading(true);
    var fUrl = Invention_article;
    var urls = id
    var murl = '?module_id=' + '59'

    console.log('my url art ---------->', urls);

    if (urls != undefined) {
      fUrl = fUrl + urls + murl;
    }



    console.log('my url-- for cooking article-------->', fUrl);

    const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token);
    setLoading(false);

    console.log('the res of specific id from cooking', responseJson
      //  responseJson.type, responseJson.price, responseJson.
      //   console.log('the res of specific id from cooking', responseJson, responseJson.price, responseJson.type, responseJson.price, responseJson.created_date, responseJson.expiry_date

    );
    setPostType(responseJson.body.data.images[0].post_type)
    generateThumb(responseJson.body.data.images);

    if (responseJson.headers.success == 1) {
      console.log('the res of specific id', responseJson.body.data.is_Disliked

      );
      const daysDifference = Math.floor(moment(responseJson.body.data.expiry_date).diff(moment(), 'days'))
      setDays(daysDifference)

      SetHeadline(responseJson.body.data.headline);
      SetDescription(responseJson.body.data.description);
      SetUsername(responseJson.body.data.username);
      setId(responseJson.body.data.id);
      SetCreateDate(responseJson.body.data.created_date);

      setModuleId(responseJson.body.data.module_id);
      setModuleName(responseJson.body.data.category);
      setTotalDislike(responseJson.body.data.total_Dislikes);
      setTotalLike(responseJson.body.data.total_Likes);
      setStatusLike(responseJson.body.data.is_Liked);
      setStatusDislike(responseJson.body.data.is_Disliked);
      setProfile(responseJson.body.data.user_profile_image);
      setTotalAmount(responseJson.body.data.project_estimate)
      setTypeArticle(responseJson.body.data.type)
      setExpiryDate(responseJson.body.data.expiry_date)
      setRaisedAmount(responseJson.body.data.total_amount_raised)

      setContributed(responseJson.body.data.my_contribution)
      const latestRecordsArray = responseJson.body.articles.slice(0, 3);

      // Update the state with the latest records
      setLatestRecords(latestRecordsArray);
      // Toast.show({ text1: responseJson.headers.message });
    } else {
      setalert_sms(err);
      setMy_Alert(true);
    }
  }



  const Likepost = async () => {
    console.log('my post is liked or not');
    setLoading(true)
    var data = {
      object_id: id,
      object_type: 'article',
      reaction_type: "like"
    }
    const { responseJson, err } = await requestPostApi(creation_react + 59, data, 'POST', User.token)
    setLoading(false)
    if (responseJson.headers.success == 1) {
      console.log('the res like of comments==>>', responseJson, User.token)
      // ArtCategory()
      // GetComments()
      console.log('like is need to be called');
      ArtCategory(articleId)
      //Toast.show({ text1: responseJson.headers.message });
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }

  const Dislikepost = async () => {
    setLoading(true)
    var data = {
      object_id: id,
      object_type: 'article',
      reaction_type: "dislike"
    }
    const { responseJson, err } = await requestPostApi(creation_react + 59, data, 'POST', User.token)
    ArtCategory(articleId)
    setLoading(false)
    console.log('the res of dislike comments comments==>>', responseJson)
    if (responseJson.headers.success == 1) {
      console.log('like is need to be called');
      ArtCategory(articleId)
      // Toast.show({ text1: responseJson.headers.message });
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }
  const GetComments = async () => {

    var fUrl = creation_getComment
    var urls = id
    // console.log('my url art ---------->', urls)
    if (urls != undefined) {
      fUrl = fUrl + urls
    }
    // console.log('my url---------->', fUrl)
    setLoading(true)
    const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
    setLoading(false)
    // console.log('the res  get commentss  >', responseJson.data)
    if (responseJson.success == 1) {
      // console.log('setCommentdata', responseJson.data.comments);
      setCommentdata(responseJson.data.comments);
      setCommenttype(responseJson.data?.comments.comment_type);
      setCommentid(responseJson.data?.comments.parent_id);
      setCommentI(responseJson.data?.isLiked)
      // console.log("response Comment TYPE of post", responseJson.data?.comments.id);

      // console.log("response parent id", responseJson.data?.comments.isLiked);
      // Toast.show({ text1: responseJson.headers.message });
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }
  const Sendcomment = async () => {

    if (userMessage?.trim()?.length === 0 || (userMessage?.trim()?.length === initalMess.trim()?.length)) {
      //  console.log('userMessage', userMessage);
      Toast.show({ text1: 'Comment field cannot be blank' });
    } else {
      setLoading(true)
      var data = {

        article_id: articleId,
        comment_id: commentid == undefined ? null : commentid,
        comment: userMessage
      }
      // if (isComment) {
      //   data.comment_id = commentid
      // }
      console.log('creation_addComments', creation_addComments, articleId);
      const { responseJson, err } = await requestPostApi(creation_addComments + 59, data, 'POST', User.token)
      setLoading(false)
      console.log('the res==>>', responseJson)
      if (responseJson.headers.success == 1) {
        console.log('the res fr cooking==>>', responseJson)
        setUserMessage('')
        setIntitalMess('')
        // replyingTo == ''
        setReplyingTo('')
        GetComments()
        Keyboard.dismiss()
        // Toast.show({ text1: responseJson.headers.message });
      } else {

        setalert_sms(err)
        setMy_Alert(true)
      }
    }
  }

  const sendMessage = () => {
    if (userMessage?.trim()?.length === 0) {
      return
    }
    if (replyingTo) {
      const upDataCopy = [...upData]
      upDataCopy.map(el => {
        if (replyingTo === el.id) {
          el.replies.push({
            id: 99,
            name: 'saurabh saneja',
            message: userMessage,
            time: '0 min',
            img: require('../../../assets/images/people-sender-image.png'),
            isLiked: false
          })
          return el
        }
      })
      setupData([...upDataCopy])
    } else {
      const nextId = upData?.length + 1
      setupData([...upData,
      {
        id: String(nextId),
        name: 'Saurabh Saneja',
        message: userMessage,
        time: '14 min',
        img: require('../../../assets/images/comment-person-image.png'),
        isLiked: false,
        replies: []
      },
      ])
    }
    Keyboard.dismiss()
    setUserMessage('')
    setReplyingTo('')
  }

  const LikeComment = async (item) => {
    console.log('kkkkk', item);
    setLoading(true)
    var data = {
      object_id: item,
      object_type: "comment",
      reaction_type: "like"
    }
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const { responseJson, err } = await requestPostApi(creation_reactComment + 59, data, 'POST', User.token)
    setLoading(false)
    console.log('the res like of replyyyy1111==>>', responseJson)

    if (responseJson.headers.success == 1) {
      //ArtCategory()
      // Toast.show({ text1: responseJson.headers.message });
      GetComments()
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }



  const dislikeComment = async (item) => {
    console.log('kkkkk', item);


    setLoading(true)
    setLoading(true)
    var data = {
      object_id: item,
      object_type: 'comment',
      reaction_type: "dislike"
    }
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const { responseJson, err } = await requestPostApi(creation_reactComment + 59, data, 'POST', User.token)
    setLoading(false)
    console.log('the res dislike of reply==>>', responseJson)

    if (responseJson.headers.success == 1) {
      //ArtCategory()
      // Toast.show({ text1: responseJson.headers.message });
      GetComments()
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }
  const EditComment = async (item) => {
    console.log(' for check of item', item);

    // var fUrl = edit_comment
    // var urls = item
    // console.log('my url art ---------->', urls)
    // if (urls != undefined) {
    //   fUrl = fUrl + urls
    // }
    // console.log('my url---------->', fUrl)
    // setLoading(true)
    // var data = {
    //   new_comment: ''
    // }
    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    // const { responseJson, err } = await requestPostApi(fUrl, data, 'POST', User.token)
    // setLoading(false)
    // console.log('the res of edit comments ', responseJson)

    // if (responseJson.headers.success == 1) {
    //   //ArtCategory()
    //   // Toast.show({ text1: responseJson.headers.message });
    //   GetComments()
    // } else {

    //   setalert_sms(err)
    //   setMy_Alert(true)
    // }
  }
  const LikeReply = async (item) => {
    console.log('kkkkk', item);
    setLoading(true)
    var data = {
      object_id: item,
      object_type: "reply",
      reaction_type: "like"
    }
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const { responseJson, err } = await requestPostApi(creation_reactComment + 59, data, 'POST', User.token)
    setLoading(false)
    console.log('the res like of replyyyy1111==>>', responseJson)

    if (responseJson.headers.success == 1) {
      //ArtCategory()
      // Toast.show({ text1: responseJson.headers.message });
      GetComments()
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }

  const dislikeReply = async (item) => {
    console.log('kkkkk', item);
    setLoading(true)
    var data = {
      object_id: item,
      object_type: 'reply',
      reaction_type: "dislike"
    }
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const { responseJson, err } = await requestPostApi(creation_reactComment + 59, data, 'POST', User.token)
    setLoading(false)
    console.log('the res dislike of reply==>>', responseJson)

    if (responseJson.headers.success == 1) {
      //ArtCategory()
      // Toast.show({ text1: responseJson.headers.message });
      GetComments()
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }


  const likeChildComment = (parentId, childIndex) => {
    const upDataCopy = [...upData]
    upDataCopy.map(el => {
      if (el.id === parentId) {
        el.replies[childIndex].isLiked = !el.replies[childIndex].isLiked
      }
      return el
    })
    setupData([...upDataCopy])
  }

  const generateThumb = async (images) => {
    setLoading2(true);
    console.log(images, 'el.images hhhhhh hhhhhhh');

    const filteredData = images.filter((imgData) => imgData.file_url !== null);
    const allData1 = await Promise.all(filteredData.map(async (imgData, index) => {
      console.log('imgData', imgData);

      if (imgData.post_type === "Image") {
        console.log('Reached Image');
        return { ...imgData, type: 'image', id: index };
      } else if (imgData.post_type === "Video") {
        console.log("Reached Video, creating thumbnail", imgData);
        const thumb = await createThumbnail({
          url: imgData.file_url,
          timeStamp: 10, // Specify the time position for the thumbnail (in milliseconds)
        });
        return {
          ...imgData,
          thumb,
          type: "video",
          id: index,
        };
      }

      return null; // Return null for unsupported post_type or invalid data
    }));

    console.log(allData1, 'my specific thumbs');
    // setData(allData1);
    setImages(allData1)
    var allimgs = [];
    for (let i = 1; i <= allData1.length; i++) {
      console.log(i, 'my updated functionnn');
      allimgs.push({ img: allData1[i - 1].file_url });
    }
    setAllImg(allimgs);
    setLoading2(false);
  };

  const toggleModal = (state) => {
    console.log('state', state);
    setShowModal({
      isVisible: state.isVisible,
      data: state.data,
    });
  };

  const _renderItem = ({ item }) => {
    console.log('item of renderItem', item.file_url);
    return (
      <>
        {/* {
          item.type === 'video' ? <VideoPlayer
            resizeMode="contain"
            video={{ uri: item.file_url }}
            style={{ borderWidth: 2, }}
            videoWidth={dimensions.SCREEN_WIDTH}
            videoHeight={200}
            autoplay={false}
            thumbnail={{ uri: item.thumb.path }}
            endWithThumbnail
            disableControlsAutoHide
            customStyles={{
              thumbnail: { width: '100%', height: (dimensions.SCREEN_HEIGHT * 35) / 100, alignSelf: 'center', },
              videoWrapper: { width: '100%', height: 350, },
              // wrapper: { width: '100%', height: 227 },
            }}
          />
            :
            <Image source={{ uri: item.file_url }} style={{ width: dimensions.SCREEN_WIDTH, height: 380, alignSelf: 'center' }} resizeMode='stretch' />
        } */}

        <TouchableOpacity style={{ width: '100%', height: 227, borderRadius: 10, alignSelf: 'center', resizeMode: 'cover' }} onPress={() => {
          setShowModal({
            isVisible: true,
            data: item
          })
        }} >

          <ImageBackground source={{ uri: item.thumb.path }} style={{
            width: '100%', height: (dimensions.SCREEN_HEIGHT * 35) / 100, alignSelf: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }} resizeMode='cover' >
            <Image source={require('../../../assets/images/people-play-button.png')} style={{ width: '20%', height: '20%', alignSelf: 'center', }} resizeMode='contain' ></Image>
          </ImageBackground>
        </TouchableOpacity>

      </>

    );
  }
  const _renderIte = ({ item }) => {
    console.log('iem of renderItem', item.file_url);
    return (
      <>
        {/* {
          item.type === 'video' ? <VideoPlayer
            resizeMode="contain"
            video={{ uri: item.file_url }}
            style={{ borderWidth: 2, }}
            videoWidth={dimensions.SCREEN_WIDTH}
            videoHeight={200}
            autoplay={false}
            thumbnail={{ uri: item.thumb.path }}
            endWithThumbnail
            disableControlsAutoHide
            customStyles={{
              thumbnail: { width: '100%', height: (dimensions.SCREEN_HEIGHT * 35) / 100, alignSelf: 'center', },
              videoWrapper: { width: '100%', height: 350, },
              // wrapper: { width: '100%', height: 227 },
            }}
          />
            :
            <Image source={{ uri: item.file_url }} style={{ width: dimensions.SCREEN_WIDTH, height: 380, alignSelf: 'center' }} resizeMode='stretch' />
        } */}

        <TouchableOpacity style={{ width: '100%', height: 227, borderRadius: 10, alignSelf: 'center', resizeMode: 'cover' }} onPress={() => {
          setShowModal({
            isVisible: true,
            data: item
          })
        }} >

          <ImageBackground source={{ uri: item.thumb.path }} style={{
            width: '100%', height: (dimensions.SCREEN_HEIGHT * 35) / 100, alignSelf: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }} resizeMode='cover' >
            <Image source={require('../../../assets/images/people-play-button.png')} style={{ width: '20%', height: '20%', alignSelf: 'center', }} resizeMode='contain' ></Image>
          </ImageBackground>
        </TouchableOpacity>

      </>

    );
  }
  const DeletePost = async (id) => {
    console.log('DeletePost Pressed!', id.id)
    var fUrl = creation_deleteComment
    var urls = id.id
    console.log('my url art ---------->', urls)
    if (urls != undefined) {
      fUrl = fUrl + urls
    }
    console.log('my url art ---------->', fUrl)
    setLoading(true)
    const { responseJson, err } = await requestGetApi(fUrl, '', 'DELETE', User.token)
    setLoading(false)
    console.log('the DeletePost==>>', responseJson)
    if (responseJson.headers.success == 1) {
      GetComments()
    }
    Toast.show({ text1: responseJson.headers.message });
    // } else {

    //   setalert_sms(err)
    //   setMy_Alert(true)
    // }
  }
  const Createpos = async (item) => {
    console.log(' item for edit of reply', item);
    if (message?.trim()?.length === 0) {
      Toast.show({ text1: 'Comment field cannot be blank' });
    } else {
      setLoading(true)
      console.log('llll', item)
      const data = {
        "new_comment": message,

      }
      const { responseJson, err } = await requestPostApi(creation_editComment + item, data, 'PUT', User.token)
      GetComments()
      setEditModal(false)
      console.log('the edit post', responseJson.post.post_description)
      if (responseJson.success == 1) {
        Toast.show({ text1: responseJson.headers.message });
        GetComments()
        // setUserid(nameAgeList[0].rest.userid)
        //props.navigation.navigate('MyProfile')
        // setdescrbe(responseJson.post.post_description)
        // setLoading(false)


      } else {

        setalert_sms(err)
        setMy_Alert(true)

      }
      setLoading(false)
    }
  }



  const getReport = async () => {
    setLoading(true)
    const { responseJson, err } = await requestGetApi(creation_get_report, '', 'GET', User.token)
    setLoading(false)
    console.log('the res of get suggest post', responseJson)
    if (responseJson.headers.success == 1) {
      console.log('the res after sucess report get', responseJson.body.data)
      setReportGet(responseJson.body.data)

    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }

  const postReport = async (items) => {
    console.log('kkkkk', selectedReasonId);
    if (selectedReasonId === null) {
      Toast.show({ text1: 'Select a reason for report' });
      return; // Exit the function to prevent further execution
    }

    setLoading(true);
    console.log(fUrl, 'ggggggggggggg bbbbbb');
    var fUrl = creation_post_report;
    var urls = articleId;
    console.log('my url---------->', urls);
    if (urls !== undefined) {
      fUrl = fUrl + urls;
    }
    var data = {
      report_id: items,
      comment: ""
    };

    const { responseJson, err } = await requestPostApi(fUrl, data, 'POST', User.token);
    setLoading(false);
    console.log('the res of report', responseJson);
    setShowReportModal(false);

    if (responseJson.headers.success === 1) {
      Toast.show({ text1: responseJson.headers.message });
      setSelectedReasonId(null);
      console.log('report post article', responseJson);
    } else {
      setalert_sms(err);
      setMy_Alert(true);
    }
  }
  return (
    <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
      <View>
        <ScrollView>
          {console.log(allImg, 'images photos')}
          <>
            <View style={{ height: (dimensions.SCREEN_HEIGHT * 35) / 100, overflow: 'hidden', }}>
              {Array.isArray(images) && images.length > 0 && images[0].post_type !== 'Image' ? (
                <AppIntroSlider
                  data={images}
                  renderItem={_renderItem}
                  // renderPagination={() => null}
                  renderDoneButton={() => <View />}
                  renderNextButton={() => <View />}
                  activeDotStyle={{ backgroundColor: '#FFC40C', height: 4, width: 18, borderRadius: 0, top: 20 }}
                  dotStyle={{ backgroundColor: '#fff', height: 4, width: 18, borderRadius: 0, top: 20 }}
                  keyExtractor={(item) => item.id}
                />
              ) : (
                <>
                  {images.length != 0 ? (
                    <>
                      <ImageSlider
                        data={allImg}
                        autoPlay={false}

                        closeIconColor="#FFC40C"
                        onItemChanged={handleItemChanged}
                        activeIndicatorStyle={{ backgroundColor: '#FFC40C', }}

                        inActiveIndicatorStyle={{ backgroundColor: '#fff' }}
                        caroselImageStyle={{ resizeMode: "stretch", height: (dimensions.SCREEN_HEIGHT * 35) / 100, }}

                      />
                      {/* <View style={styles.dotContainer}>
                        {allImg.map((item, index) => (
                          <View key={index} style={[styles.dot, index === currentIndex ? styles.activeDot : styles.inactiveDot]} />
                        ))}
                      </View> */}
                    </>
                  ) : (
                    null
                  )}
                </>
              )

              }


              <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ position: 'absolute', left: 20, top: 30 }}>
                <Image source={require('../../../assets/images/service-header-back-button.png')} style={{ width: 25, height: 20 }} />
              </TouchableOpacity>
            </View>
          </>
          <View style={{ width: '90%', alignSelf: 'center', paddingVertical: 10 }}>
            <Text numberOfLines={2} style={{ fontSize: 20, lineHeight: 20, fontWeight: '400', color: '#000' }}>

              {headline}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
              <Text style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#FFC40C',
                // Align the text within its container to the top
                marginRight: 10,
                marginTop: 10
              }}>{moduleName}</Text>
              {typeArticle == 'Fundraiser' ? <TouchableOpacity onPress={() => setPaymentModal(true)} style={{
                backgroundColor: '#FFC40C',
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: '40%'
              }}><Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>Contribute</Text></TouchableOpacity> : null}

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#455A64' }}>Author: {username}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                <Image source={require('../../../assets/images/fashion-calendar-icon.png')} />
                <Text style={{ fontSize: 12, fontWeight: '400', color: '#455A64', marginLeft: 5 }}>{createdDate}</Text>
              </View>
            </View>


            <View style={styles.buttonsRow}>
              {typeArticle == 'Fundraiser' ? <TouchableOpacity
                onPress={() =>
                  Likepost(
                  )}
                style={styles.buttonView}>
                <Image

                  source={
                    statusLike == false
                      ?
                      require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
                      : require('../../../assets/Art/ThumbsUpStartup.png')}

                  style={{ height: 30, width: 30 }} />
                <Text style={styles.buttonText2}>{totlaLike
                } Backers</Text>
              </TouchableOpacity> : <TouchableOpacity
                onPress={() =>
                  Likepost(
                  )}
                style={styles.buttonView}>
                <Image

                  source={
                    statusLike == false
                      ?
                      require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
                      : require('../../../assets/Art/ThumbsUpStartup.png')}

                  style={{ height: 30, width: 30 }} />
                <Text style={styles.buttonText2}>{totlaLike
                } Likes</Text>
              </TouchableOpacity>}
              {typeArticle != 'Fundraiser' ? <TouchableOpacity style={styles.buttonView} onPress={() =>
                Dislikepost(
                )}>
                <Image
                  source={
                    statusDislike == false
                      ? require('../../../assets/images/fashion-dark-dislike-button.png')
                      // Use dislike image
                      : require

                        ('../../../assets/Art/ThumbsDownStartup.png') // Use like image
                  } // Use like image

                  style={{ height: 30, width: 30, }} />
                <Text style={styles.buttonText2}>{totalDislike} Dislikes</Text>
              </TouchableOpacity> : null}
              <TouchableOpacity style={styles.buttonView}>
                <Image source={require('../../../assets/images/fashion-dark-share-button.png')} style={{ height: 30, width: 30 }} />
                <Text style={styles.buttonText2}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setShowReportModal(true) }} style={styles.buttonView}>
                <Image source={require('../../../assets/images/fashion-dark-report-button.png')} style={{ height: 30, width: 30 }} />
                <Text style={styles.buttonText2}>Report</Text>
              </TouchableOpacity>
            </View>
            {contributed != 0 ? <View style={{ marginTop: 10, marginVertical: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: '#FFC40C' }}>You have already contributed ${contributed} to this project</Text>
            </View> : null}
            <Text style={styles.descriptionText}>
              {description}
            </Text>
            {typeArticle == 'Fundraiser' ? < View >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 3 }}>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{raisedAmount} <Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}> USD</Text></Text>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{totlaLike} <Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}>Backers</Text></Text>
              </View>
              <ProgressBar height={15} width={dimensions.SCREEN_WIDTH * 0.90} backgroundColor={'#E0E0E0'} borderColor={'#E0E0E0'} progress={progress} color={'#FFC40C'} borderRadius={10} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3, paddingHorizontal: 3 }}>
                <Text style={{ fontWeight: '400', fontSize: 14, color: 'black' }}>{(progress * 100).toFixed(0)}% of {'$' + totalAmount} <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', }}>Flexible Goal</Text></Text>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{days}<Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}> Days left</Text> </Text>
              </View>
            </View> : null
            }

          </View>
          <View>

          </View>
          <View style={{ width: '90%', alignSelf: 'center', paddingVertical: 20 }}>
            <Text style={{ fontSize: 20, lineHeight: 20, fontWeight: '400', color: '#000' }}>
              Comments</Text>
          </View>

          {
            commentdata.length != 0 ?
              <View style={{ width: '96%', alignSelf: 'center', marginTop: 10, height: '100%', paddingBottom: 40 }}>


                <View style={{ width: '100%', alignSelf: 'center', }}>
                  <FlatList
                    data={commentdata}
                    showsHorizontalScrollIndicator={false}
                    numColumns={1}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                      console.log('item send11', item);
                      return (
                        <TouchableOpacity onLongPress={() => { }} style={{ width: dimensions.SCREEN_WIDTH * 0.9, marginHorizontal: 5, marginBottom: 15, paddingHorizontal: 20 }}>
                          <>
                            <View>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* <Image source={require('../../../assets/images/comment-person-image.png')} /> */}
                                {item.profile_image
                                  ? (
                                    <Image
                                      source={{
                                        uri: item.profile_image

                                      }}
                                      style={{ width: 35, height: 35, borderRadius: 100, }}

                                    />
                                  ) : (
                                    <Image
                                      source={require('../../../assets/blankProfile.png')}
                                      style={{ width: 35, height: 35, borderRadius: 90 }}
                                    />
                                  )}


                                <View>
                                  <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', marginLeft: 10 }}>{item.first_name + ' ' + item.last_name}</Text>
                                  <Text style={{ fontSize: 12, fontWeight: '400', color: '#B4BBC6', marginLeft: 12, marginTop: 5 }}>{item.created_date}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', position: 'absolute', right: -10 }}>
                                  {item.userid == User.userid ? <TouchableOpacity onPress={() => {


                                    setModalData(item);

                                    setProfileModal(true)


                                  }} style={[styles.rightButtonsView, { marginRight: 0 }]}>
                                    <Image source={require('../../../assets/ent_delete_image.png')} style={{ width: 29, height: 29 }} />
                                  </TouchableOpacity>
                                    : null}
                                </View>

                              </View>

                              <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: '#272727' }}>{item.comment}</Text>
                              </View>
                              <View style={{
                                marginTop: 15,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',

                                width: dimensions.SCREEN_WIDTH * 0.78,
                                padding: 10, // Added padding for spacing

                              }}>

                                <TouchableOpacity
                                  onPress={() =>
                                    LikeComment(item.id
                                    )}
                                  style={styles.buttonView}>
                                  <Image
                                    source={
                                      item.totalLikes
                                        <= 0
                                        ?
                                        require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
                                        : require('../../../assets/Art/ThumbsUpStartup.png')
                                    }

                                    style={{ height: 20, width: 20 }} />
                                  <Text style={styles.buttonText2}>{item.totalLikes} Likes</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonView} onPress={() =>
                                  dislikeComment(item.id
                                  )}>
                                  <Image source={
                                    // total_Disikes
                                    item.total_Disikes
                                      <= 0
                                      ? require('../../../assets/images/fashion-dark-dislike-button.png')
                                      : require

                                        ('../../../assets/Art/ThumbsDownStartup.png') // Use like 


                                    // Use like image
                                  } style={{ height: 20, width: 20, marginLeft: 6 }} />

                                  <Text style={styles.buttonText2}>{item.total_Disikes} Dislikes</Text>
                                </TouchableOpacity>

                                {item.userid == User.userid ? <TouchableOpacity style={styles.buttonView}
                                  onPress={() => {
                                    setEditModal({
                                      active: true,
                                      id: item.id,

                                    })
                                    setSelectedId(item.id);
                                    setMessage(item.comment)

                                  }}
                                >
                                  <Image source={

                                    require
                                      ('../../../assets/People/editProfilePEople.png') // Use dislike image

                                  } style={{ height: 20, width: 20, tintColor: '#FFC40C', marginLeft: 5 }} />

                                  {/* <Text style={{
                                    fontSize: 14,
                                    fontWeight: '500',
                                    color: '#FFC40C',
                                    marginLeft: 5
                                  }}>Edit</Text> */}
                                </TouchableOpacity> : null
                                }
                                <TouchableOpacity onPress={() => {
                                  // setShowAtUsername(true);
                                  console.log("item.id", item.id);
                                  setUserMessage(`@${commentdata?.find(el => el.id === item.id)?.first_name}`)
                                  setIntitalMess(`@${commentdata?.find(el => el.id === item.id)?.first_name}`)

                                  myTextInput.current.focus()
                                  setCommentid(item.id)
                                  // replyingTo = item.id
                                  // setReplyingTo(item);
                                  // setShowRepliesModal(true); 
                                }} style={{ flexDirection: 'row', alignItems: 'center', }}>
                                  <Image source={require('../../../assets/images/people-reply-image.png')} style={{ tintColor: '#FFC40C', marginLeft: -20 }} />
                                  {/* <Text style={{ fontSize: 14, fontWeight: '500', color: '#FFC40C', }}>Reply</Text> */}
                                </TouchableOpacity>

                              </View>

                            </View>
                            <View style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop: 10 }} />

                            {item?.replyComments?.length > 0 ?
                              <>
                                {/* <View style={{ alignItems: 'flex-end', right: -10 }}>
                                <Text onPress={() => { setviewmore(!viewmore) }} style={{ color: '#835E23', textDecorationLine: "underline", fontSize: 12, }}>{viewmore ? 'View less' : 'View more'}</Text>
                              </View> */}
                                {
                                  item?.replyComments?.map((item, index) => {
                                    // console.log('reply stttttt', item);
                                    return (
                                      <>
                                        {
                                          viewmore ?
                                            (<>
                                              <View style={{ width: '90%', marginLeft: 30, marginTop: 10 }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                  {/* <Image source={require('../../../assets/images/people-sender-image.png')} style={{ height: 40, width: 40 }} /> */}
                                                  {item.profile_image ? (
                                                    <Image
                                                      source={{
                                                        uri: item.profile_image
                                                      }}
                                                      style={{ width: 35, height: 35, borderRadius: 90 }}
                                                    />
                                                  ) : (
                                                    <Image
                                                      source={require('../../../assets/blankProfile.png')}
                                                      style={{ width: 35, height: 35, borderRadius: 90 }}
                                                    />
                                                  )}

                                                  <View style={{ flex: 1, marginLeft: 10 }}>
                                                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#000' }}>{item.first_name + ' ' + item.last_name}</Text>
                                                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#B4BBC6', marginTop: 4 }}>{item.created_date}</Text>
                                                  </View>

                                                  {item.userid == User.userid && (
                                                    <TouchableOpacity
                                                      onPress={() => {
                                                        setModalData(item);
                                                        setProfileModal(true);
                                                      }}
                                                      style={[styles.rightButtonsView, { marginLeft: 10 }]}
                                                    >
                                                      <Image source={require('../../../assets/ent_delete_image.png')} style={{ width: 29, height: 29 }} />
                                                    </TouchableOpacity>
                                                  )}
                                                </View>
                                                <View style={{ marginTop: 10 }}>
                                                  <Text style={{ fontSize: 14, fontWeight: '400', color: '#272727' }}>{item.comment}</Text>
                                                </View>
                                                <View style={{
                                                  width: '80%',
                                                  flexDirection: 'row',

                                                  alignItems: 'center',
                                                  marginTop: 10,

                                                }}>
                                                  <TouchableOpacity
                                                    onPress={() =>
                                                      LikeReply(item.id
                                                      )}
                                                    style={styles.buttonView}>
                                                    <Image

                                                      source={
                                                        item.total_Likes
                                                          <= 0
                                                          ?
                                                          require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
                                                          : require('../../../assets/Art/ThumbsUpStartup.png')}
                                                      // Use like image


                                                      style={{ height: 20, width: 20 }} />
                                                    <Text style={styles.buttonText2}>{item.total_Likes
                                                    } Likes</Text>
                                                  </TouchableOpacity>
                                                  <TouchableOpacity style={styles.buttonView} onPress={() =>
                                                    dislikeReply(item.id
                                                    )}>
                                                    <Image source={
                                                      item.total_Disikes

                                                        <= 0
                                                        ? require('../../../assets/images/fashion-dark-dislike-button.png')
                                                        // Use dislike image
                                                        : require

                                                          ('../../../assets/Art/ThumbsDownStartup.png') // Use like image
                                                    } // Use l 
                                                      style={{ height: 20, width: 20, marginLeft: 23 }} />
                                                    <Text style={styles.buttonText2}>{item.total_Disikes
                                                    } Dislikes</Text>
                                                  </TouchableOpacity>
                                                  {item.userid == User.userid ? <TouchableOpacity style={styles.buttonView}
                                                    onPress={() => {
                                                      setEditModal({
                                                        active: true,
                                                        id: item.id,
                                                        type: 'reply'

                                                      })
                                                      setSelectedId(item.id);
                                                      setMessage(item.comment)
                                                      setTypeEdit('reply')

                                                    }}
                                                  >
                                                    <Image source={

                                                      require
                                                        ('../../../assets/People/editProfilePEople.png') // Use dislike image

                                                    } style={{ height: 20, width: 20, marginLeft: 23, tintColor: '#FFC40C' }} />

                                                    {/* <Text style={{
                                                      fontSize: 14,
                                                      fontWeight: '500',
                                                      color: '#FFC40C',
                                                      marginLeft: 5
                                                    }}>Edit</Text> */}
                                                  </TouchableOpacity> : null
                                                  }
                                                </View>
                                              </View>
                                              <View style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop: 10 }} />
                                            </>)
                                            :
                                            null
                                        }
                                      </>
                                    )

                                  })}
                              </>
                              : null}
                          </>
                        </TouchableOpacity>
                      )
                    }}

                  />
                </View>



              </View>

              :
              <View style={{ width: '100%', alignSelf: 'center', height: '100%' }}>
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#B4BBC6', marginHorizontal: 20 }}> No comments available</Text>
              </View>
          }

          <View style={{ height: 10 }} />

          <View style={{ width: '85%', alignSelf: 'center' }}>
          </View>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View >
      <Modal
        isVisible={editModal}
        swipeDirection="down"
        selectedId={selectedId}
        typeEdit={typeEdit}

        onBackdropPress={() => setEditModal(false)}
        onSwipeComplete={e => {
          setEditModal(false);
        }}

        scrollTo={() => { }}
        scrollOffset={1}
        propagateSwipe={true}
        coverScreen={false}
        backdropColor="transparent"
        style={{
          justifyContent: 'flex-end',
          margin: 0,
          backgroundColor: 'rgba(211, 211, 211, 0.7)',
        }}>
        <View
          style={{
            height: '28%',
            backgroundColor: '#FFF',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 20,
          }}
        >

          <View
            style={{

              width: '80%',
              backgroundColor: '#E0E0E0',
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
              borderRadius: 20,
            }}
          >
            {/* <Image
              source={require('../../../assets/blankProfile.png')}
              style={{ width: 35, height: 35, borderRadius: 40 }}
            /> */}
            {profile_img
              ? (
                <Image
                  source={{
                    uri: profile_img

                  }}
                  style={{ width: 35, height: 35, borderRadius: 40 }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../../assets/blankProfile.png')}
                  style={{ width: 35, height: 35, borderRadius: 40 }}
                />
              )}
            {/* //profile_img */}
            <TextInput
              // ref={myTextInput}
              value={message}
              onChangeText={(text) => {
                setMessage(text);
              }}
              placeholder="Edit Comment"
              placeholderTextColor={'#B2B7B9'}
              style={{
                paddingLeft: 20,
                fontSize: 14,
                fontWeight: '500',
                color: '#000',
                flex: 7,
                marginBottom: 2,
              }}
              multiline
            />

            {/* Add your buttons here */}
            {/* <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button 1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Button 2</Text>
              </TouchableOpacity> */}
            {/* End of buttons */}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30, marginRight: 40 }}>
            <TouchableOpacity style={{ backgroundColor: '#FFC40C', height: 40, width: 100, marginRight: 30, borderRadius: 10 }} onPress={() => { setEditModal(false) }}>
              <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 8, fontSize: 14, fontWeight: '600' }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#FFC40C', height: 40, width: 100, borderRadius: 10 }}
              onPress={() => { typeEdit === 'reply' ? Createpos(selectedId) : Createpos(selectedId) }

              }>
              <Text
                style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 8, fontSize: 14, fontWeight: '600' }}
              >Update</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: 100, height: 100 }} />
        </View>
      </Modal >
      < Modal
        isVisible={profileModal}
        // swipeDirection="down"
        onBackdropPress={() => setProfileModal(false)}
        // onSwipeComplete={e => {
        //   setProfileModal(false);
        // }}

        style={{
          justifyContent: 'center', // Update justifyContent to 'flex-start'
          margin: 0,
          height: 30,
          backgroundColor: 'transparent',
          alignItems: 'center',

          width: '100%',
        }}>
        <View
          style={{
            height: '15%',
            backgroundColor: '#FFF',
            justifyContent: 'center', // Update justifyContent to 'flex-start'
            alignItems: 'center',


            borderRadius: 20
          }}>

          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}>
            <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
              {/* <View>
                <TouchableOpacity onPress={() => { setProfileModal(false) }} style={{ alignSelf: 'flex-end', width: 30, height: 25, marginTop: 9 }}>
                  <Image source={require('../../../assets/People/ModelClode.png')} style={{ alignSelf: 'flex-end' }}></Image></TouchableOpacity>
              </View> */}
              <View style={{ borderRadius: 10, }}>


                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => {
                  props.navigation.navigate('EditArticle', { id: selectedId, cat: selectedCategoryy, desc: desc, title: title }), setProfileModal(false)

                }}>

                  <Text style={{ fontSize: 14, left: 10, color: 'black', justifyContent: 'center', textAlign: 'center' }}>Are you sure you want to delete comment</Text>
                </TouchableOpacity>
              </View >

              <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => {
                  DeletePost(modalData)
                    , setProfileModal(false)
                }} >
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TouchableOpacity onPress={() => {
                    DeletePost(modalData)
                      , setProfileModal(false)

                  }} style={{ height: 30, width: 60, backgroundColor: '#FFC40C', borderRadius: 6, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, color: 'white', textAlign: 'center' }}>Yes</Text>

                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setProfileModal(false)} style={{ height: 30, width: 60, backgroundColor: '#C5C6C9', borderRadius: 6, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, color: 'black', textAlign: 'center' }}>No</Text>
                  </TouchableOpacity>
                </View>

              </View>


            </View>

            <View style={{ width: 100, height: 100 }} />
          </ScrollView>
        </View>
      </Modal >
      {loading ? <Loader /> : null}
      <RepliesModal
        isVisible={showRepliesModal}
        setIsVisible={setShowRepliesModal}
        data={commentdata}
        setData={setCommentdata}
        replyingTo={replyingTo}
        setReplyingTo={setReplyingTo}
        showAtUsername={showAtUsername}
        likeChildComment={likeChildComment}

      // startFromIndex={startFromIndex}
      />

      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <TextInput
          ref={myTextInput}
          value={userMessage}
          onChangeText={(text) => {
            setUserMessage(text)
          }}
          placeholder="What's on your mind"
          placeholderTextColor={'#B2B7B9'}
          style={styles.input}
          multiline
        />
        <TouchableOpacity onPress={() => {
          Sendcomment()

          // :Sendcomment(true)

        }} style={styles.sendButtonView}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}>Send</Text>
        </TouchableOpacity>
      </View>


      {
        loading || loading2 ?
          <Loader />
          : null
      }
      {console.log('showModal?.data', showModal?.data)}
      {
        showModal.isVisible ? (

          <VideoModel
            isVisible={showModal.isVisible}
            toggleModal={toggleModal}
            videoDetail={{ ...showModal?.data, url: showModal?.data?.file_url }}
            {...props}
          />
        ) : null
      }


      <Modal
        isVisible={showReportModal}
        swipeDirection="down"
        onBackdropPress={() => { setShowReportModal(false), setSelectedReasonId(null) }}
        onSwipeComplete={(e) => {
          setShowReportModal(false)
          setSelectedReasonId(null);
        }}
        scrollTo={() => { }}
        scrollOffset={1}
        propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: 'auto', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#455A64', textAlign: 'center', marginBottom: 20, marginTop: 30 }}>Report</Text>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

            <FlatList
              data={reportGet}
              showsHorizontalScrollIndicator={false}
              numColumns={1}
              keyExtractor={item => item.id}
              style={{ marginBottom: 10 }}
              renderItem={({ item, index }) => {
                console.log('item.report_id', item.report_id);
                return (
                  <TouchableOpacity key={item.report_id} onPress={() => setSelectedReasonId(item.report_id)} style={selectedReasonId === item.report_id ? styles.selectedReasonView : styles.reasonView}>
                    <Image source={selectedReasonId === item.report_id ? require('../../../assets/images/fastion-selected-reason-icon.png') : require('../../../assets/images/fastion-reason-icon.png')} style={{ tintColor: '#FFC40C' }} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 14, lineHeight: 14, fontWeight: '400', color: '#455A64' }}>{item.feedback}</Text>
                      {item.description ?
                        <Text style={{ fontSize: 12, lineHeight: 12, fontWeight: '400', color: '#C5C6C9', marginTop: 2 }}>{item.description}</Text>
                        : null}
                    </View>
                  </TouchableOpacity>
                )
              }}
            />

            <TouchableOpacity onPress={() => { postReport(selectedReasonId) }} style={styles.reportButtonView}>
              <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Report</Text>
            </TouchableOpacity>

          </ScrollView>

        </View>
      </Modal>

      {/* paymnet modal  */}
      <Modal
        isVisible={paymnentModal}
        swipeDirection="down"
        onBackdropPress={() => { setPaymentModal(false) }}
        onSwipeComplete={(e) => {
          setPaymentModal(false)

        }}
        scrollTo={() => { }}
        scrollOffset={1}
        propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'center', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <ScrollView style={{ height: dimensions.SCREEN_HEIGHT, backgroundColor: '#fff', borderRadius: 8, }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-start', marginLeft: '90%', marginTop: 15 }} onPress={() => setPaymentModal(false)
          }>
            <Image source={require('../../../assets/images/dating-reject-image.png')} style={{ tintColor: '#FFC40C' }}></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#FFC40C', textAlign: 'center', marginBottom: 20, marginTop: 10 }}>Back this project</Text>
          <View style={{}}>
            <Text style={{
              fontSize: 16, lineHeight: 20, fontWeight: '400', color: '#000',
              paddingHorizontal: 14
            }}>Make a contribution</Text>
          </View>
          <View style={{ width: '93%', height: 'auto', borderRadius: 6, borderWidth: 1, borderColor: 'gray', marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', }}>
            <TextInput
              outlineStyle={{ borderColor: '#dbdbd9', }}
              theme={{ colors: { primary: "#FFC40C" } }}
              underlineColor="red"

              textColor="#000000"
              underlineColorAndroid="transparent"
              keyboardType="number-pad"
              mode="outlined"
              // key={input.id}
              placeholder="Enter amount"
              value={myammount !== null ? myammount.toString() : '20'}
              onChangeText={text => setMyAmmount(text)}
              style={[
                styles.input,
                {
                  width: "70%",
                  paddingLeft: 0,
                  fontSize: 16,
                  height: 50,
                  fontWeight: "400",
                  color: "#000000",
                  borderWidth: 1,
                  borderColor: 'gray',
                  marginTop: 12,
                  marginHorizontal: 17,
                  marginBottom: 12,
                  paddingLeft: 10,
                  borderRadius: 4
                },
              ]}
            />
            <TouchableOpacity style={{ width: '30%', height: 50, backgroundColor: '#FFC40C', marginRight: 12, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 4, }} onPress={() => {
              if (!myammount) {
                // Show a toast message if the value is empty
                Toast.show({ text1: "Please Enter Ammount" });
              } else {
                // Navigate to 'Payment' with ammount and id
                setMyAmmount('30')
                props.navigation.navigate('Payment', { ammount: myammount, id: articleId });
              }
            }}>
              <Text style={{ fontSize: 14, color: 'white', fontWeight: '600' }}>Continue</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity onPress={() => { props.navigation.navigate('Payment', { ammount: totalAmount, id: articleId }) }}>
            <Text>Submit</Text>
            <Text>{totalAmount}</Text>
          </TouchableOpacity> */}
          <View>
            <Text style={{
              fontSize: 20, lineHeight: 20, fontWeight: '400', color: '#000',
              paddingHorizontal: 12, paddingVertical: 15, marginTop: 15
            }}>{headline}</Text>
          </View>
          <View style={{}}>
            {console.log(allImg, 'images photos')}
            <>
              <View style={{ height: (dimensions.SCREEN_HEIGHT * 27) / 100, overflow: 'hidden', width: '95%', alignSelf: 'center', borderRadius: 10 }}>
                {Array.isArray(images) && images.length > 0 && images[0].post_type !== 'Image' ? (
                  <AppIntroSlider
                    data={images}
                    renderItem={_renderIte}
                    // renderPagination={() => null}
                    renderDoneButton={() => <View />}
                    renderNextButton={() => <View />}
                    activeDotStyle={{ backgroundColor: '#FFC40C', height: 4, width: 18, borderRadius: 0, top: 20 }}
                    dotStyle={{ backgroundColor: '#fff', height: 4, width: 18, borderRadius: 0, top: 20 }}
                    keyExtractor={(item) => item.id}
                  />
                ) : (
                  <>
                    {images.length != 0 ? (
                      <>
                        <ImageSlider
                          data={allImg}
                          autoPlay={false}

                          closeIconColor="#FFC40C"
                          onItemChanged={handleItemChanged}
                          activeIndicatorStyle={{ backgroundColor: '#FFC40C', }}

                          inActiveIndicatorStyle={{ backgroundColor: '#fff' }}
                          caroselImageStyle={{ resizeMode: "stretch", height: (dimensions.SCREEN_HEIGHT * 35) / 100, }}

                        />
                        {/* <View style={styles.dotContainer}>
                        {allImg.map((item, index) => (
                          <View key={index} style={[styles.dot, index === currentIndex ? styles.activeDot : styles.inactiveDot]} />
                        ))}
                      </View> */}
                      </>
                    ) : (
                      null
                    )}
                  </>
                )

                }


                {/* <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ position: 'absolute', left: 20, top: 30 }}>
                  <Image source={require('../../../assets/images/service-header-back-button.png')} style={{ width: 25, height: 20 }} />
                </TouchableOpacity> */}
              </View>
            </>
            <View style={{ width: '90%', alignSelf: 'center', paddingVertical: 0, }}>
              {/* <Text numberOfLines={2} style={{ fontSize: 20, lineHeight: 20, fontWeight: '400', color: '#000' }}>

                {headline}
              </Text> */}
              {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#FFC40C',
                  // Align the text within its container to the top
                  marginRight: 10,
                  marginTop: 10
                }}>{moduleName}</Text>
                {typeArticle == 'Fundraiser' ? <TouchableOpacity onPress={() => setPaymentModal(true)} style={{ height: 30, width: 70, backgroundColor: '#FFC40C', borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}><Text style={{ color: 'white', fontSize: 12, }}>Contribute</Text></TouchableOpacity> : null}

              </View> */}
              {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 12, fontWeight: '400', color: '#455A64' }}>Author: {username}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                  <Image source={require('../../../assets/images/fashion-calendar-icon.png')} />
                  <Text style={{ fontSize: 12, fontWeight: '400', color: '#455A64', marginLeft: 5 }}>{createdDate}</Text>
                </View>
              </View> */}


              {/* <View style={styles.buttonsRow}>
                <TouchableOpacity
                  onPress={() =>
                    Likepost(
                    )}
                  style={styles.buttonView}>
                  <Image

                    source={
                      totlaLike
                        <= 0
                        ?
                        require('../../../assets/images/fashion-dark-like-button.png') // Use dislike image
                        : require('../../../assets/Art/ThumbsUpStartup.png')}

                    style={{ height: 30, width: 30 }} />
                  <Text style={styles.buttonText2}>{totlaLike
                  }</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonView} onPress={() =>
                  Dislikepost(
                  )}>
                  <Image
                    source={
                      totalDislike

                        <= 0
                        ? require('../../../assets/images/fashion-dark-dislike-button.png')
                        // Use dislike image
                        : require

                          ('../../../assets/Art/ThumbsDownStartup.png') // Use like image
                    } // Use like image

                    style={{ height: 30, width: 30 }} />
                  <Text style={styles.buttonText2}>{totalDislike}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonView}>
                  <Image source={require('../../../assets/images/fashion-dark-share-button.png')} style={{ height: 30, width: 30 }} />
                  <Text style={styles.buttonText2}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setShowReportModal(true) }} style={styles.buttonView}>
                  <Image source={require('../../../assets/images/fashion-dark-report-button.png')} style={{ height: 30, width: 30 }} />
                  <Text style={styles.buttonText2}>Report</Text>
                </TouchableOpacity>
              </View> */}

              <Text style={styles.descriptionText}>
                {description}
              </Text>
              {/* {typeArticle == 'Fundraiser' ? < View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingVertical: 3 }}>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{totalAmount} <Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}> INR</Text></Text>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{totlaLike} <Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}>backers</Text></Text>
                </View>
                <ProgressBar height={15} width={dimensions.SCREEN_WIDTH * 0.90} backgroundColor={'#E0E0E0'} borderColor={'#E0E0E0'} progress={progress} color={'#FFC40C'} borderRadius={10} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3, paddingHorizontal: 3 }}>
                  <Text style={{ fontWeight: '400', fontSize: 14, color: 'black' }}>{(progress * 100).toFixed(0)}% of {raisedAmount} <Text style={{ fontSize: 14, color: 'black', fontWeight: '500', }}>FlexibleGoal</Text></Text>
                  <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>{days}<Text style={{ fontSize: 14, color: 'gray', fontWeight: '400' }}> days left</Text> </Text>
                </View>
              </View> : null
              } */}

            </View>





            <View style={{ height: 30 }} />

            <View style={{ width: '85%', alignSelf: 'center' }}>
            </View>

          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView >
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
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,

  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8F93A0',
    marginLeft: 5
  },
  buttonText2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#455A64',
    marginLeft: 5
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 17.64,
    fontWeight: '400',
    color: '#455A64',
    marginTop: 10
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#8F93A0',
    marginLeft: 5
  },
  addCommentView: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.3,
    // elevation: 5,
  },
  input: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    flex: 7
  },
  sendButtonView: {
    backgroundColor: '#FFC40C',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  reportButtonView: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFC40C',
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
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#008CF',
  },
  inactiveDot: {
    backgroundColor: '#fff',
  },
});
export default InventionPost 