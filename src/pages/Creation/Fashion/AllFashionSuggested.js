
import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';
import HomeHeaderRoundBottom from './components/HomeHeaderRoundBottom';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import FashionSearch from './components/FashionSearch';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../../WebApi/Loader';
import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2, art_HomePage, art_likeDislike, get_suggestion, creation_searchHome, creation_home, creation_getView, creation_startup, creation_Fashion } from '../../../WebApi/Service'
import { VideoModel } from '../../../component/VideoModel';

import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
// import Loader from '../../../WebApi/Loader';
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import ViewMoreText from 'react-native-view-more-text';

import ArtSearch from './components/ArtSearch'


const AllFashionSuggested = (props, route) => {
    const dispatch = useDispatch();
    const User = useSelector(state => state.user.user_details)
    console.log('User', User.token);

    const [searchValue, setsearchValue] = useState('')
    const [loading2, setLoading2] = useState(false)
    const [scrollEnabled, setScrollEnabled] = useState(false)
    const myTextInput = useRef()
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
    const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('1')
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState({ isVisible: false, data: null });
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState({})
    const [showReportModal, setShowReportModal] = useState(false)
    const [selectedReasonId, setSelectedReasonId] = useState(null)
    const [categoryData, setCategorydata] = useState([])
    const [allData, setAlldata] = useState([])
    const [isLiked, setIsLiked] = useState(false);
    const [latestRecords, setLatestRecords] = useState([]);

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
    const [introSliderData] = useState([
        // require('../../assets/Group75972.png'),
        { key: 'one', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU', title: 'Art-Aficionado Tim Newton on How to Collect Art', status: 'Fine Art', date: 'March 4, 2022' },
        { key: 'two', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg', title: 'Art-Aficionado Tim Newton on How to Collect Art', status: 'Fine Art', date: 'March 4, 2022' },
        { key: 'three', image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg', title: 'Art-Aficionado Tim Newton on How to Collect Art', status: 'Fine Art', date: 'March 4, 2022' }
    ])

    const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
    useEffect(() => {
        ArtAll()
        ArtCategory()
        // getSuggestion()
    }, [])

    const toggleModal = (state) => {
        console.log('state', state);
        setShowModal({
            isVisible: state.isVisible,
            data: state.data,
        });
    };

    const ArtCategory = async () => {
        setLoading(true)
        var fUrl = creation_getView
        var urls = 57
        console.log('my url---------->', urls)
        if (urls != undefined) {
            fUrl = fUrl + urls
        }
        console.log(' get suggestion url', fUrl)

        console.log('my url---------->', fUrl)

        const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
        setLoading(false)

        console.log('the res Home==>>', responseJson)
        if (responseJson.headers.success == 1) {
            console.log('the res f lal suggested', responseJson.body)
            generateThumb(responseJson.body.data)
            // setCategorydata(responseJson.body.articles)
            const latestRecordsArray = responseJson.body.articles.slice(0, 3);

            // Update the state with the latest records
            setLatestRecords(latestRecordsArray);
            // Toast.show({ text1: responseJson.headers.message });
        } else {

            setalert_sms(err)
            setMy_Alert(true)
        }
    }
    const ArtSearch = async (item) => {
        setLoading(true)
        var fUrl = creation_Fashion
        var ru = `?page_no=1&limit=10`
        var urls = '&headline=' + item
        console.log('my url---------->', searchValue.text)
        if (urls != undefined) {
            fUrl = fUrl + ru + urls
        }
        console.log('my urln home page---------->', fUrl)
        console.log('my url---------->', art_HomePage)

        const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
        setLoading(false)
        console.log('the res Home searcg==>>', responseJson)
        if (responseJson.body.total > 0) {
            console.log('the res after sucess of search cooking', responseJson.body.total)
            generateThum(responseJson.body.articles)
        } else {
            setAlldata([]);
        }
    }

    const generateThumb = async (item) => {
        console.log('my array for thumbnail for suggested', item);
        setLoading2(true)
        // const videos = item.filter(el => {
        //   if (!el.files) {
        //     return false
        //   } else {
        //     if (el.files.find(js => js.post_type == 'Video')) {
        //       return true
        //     } else {
        //       return false
        //     }
        //   }
        // })

        const allData = await Promise.all(
            item.map?.(async (el) => {
                if (!el.files) {
                    return { ...el, type: "none" };
                }
                else if (el.files.find((js) => js.post_type == "Image")) {
                    return {
                        ...el,
                        type: "image",
                    };
                } else {
                    console.log("createThumbnail will be called", el.files[0].file_url);
                    const thumb = await createThumbnail({
                        url: el.files[0].file_url,
                        timeStamp: 1000, // Specify the time position for the thumbnail (in milliseconds)
                    });
                    return {
                        ...el,
                        thumb,
                        type: "video",
                    };
                }
            })

        );


        console.log("allData  search", allData);
        const data = allData
        console.log(data, 'data111');
        setCategorydata(data);

        setLoading2(false)
    };

    // const getSuggestion = async () => {
    //     setLoading(true)
    //     var fUrl = get_suggestion
    //     var urls = 53
    //     console.log('my url---------->', urls)
    //     if (urls != undefined) {
    //         fUrl = fUrl + urls
    //     }
    //     console.log(' get suggestion url', fUrl)

    //     console.log('my url---------->', fUrl)

    //     const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
    //     setLoading(false)
    //     console.log('the res of get suggest post', responseJson)
    //     if (responseJson.headers.success == 1) {
    //         console.log('the res after sucess of post suggested1111', responseJson.body.data)
    //         //setGetSuggested(responseJson.body)
    //         generateThum(responseJson.body.data)
    //         // setCategorydata(responseJson.body.articles)
    //         // generateThumb(responseJson.body.articles)
    //         // const latestRecordsArray = responseJson.body.articles.slice(0, 3);

    //         // // Update the state with the latest records
    //         // setLatestRecords(latestRecordsArray);
    //         // Toast.show({ text1: responseJson.headers.message });
    //     } else {

    //         setalert_sms(err)
    //         setMy_Alert(true)
    //     }
    // }

    const ArtAll = async () => {
        setLoading(true)
        var fUrl = creation_Fashion + `?page_no=${1}&limit=10`;
        console.log('my url---------->', art_HomePage)

        const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
        setLoading(false)
        console.log('the res Home after hit after suggestion==>>', responseJson)
        if (responseJson.headers.success == 1) {
            console.log('the res after sucess of all suggested', responseJson.body.articles)
            // setCategorydata(responseJson.body.articles)
            generateThum(responseJson.body.articles)
            const latestRecordsArray = responseJson.body.articles.slice(0, 3);

            // Update the state with the latest records
            setLatestRecords(latestRecordsArray);
            // Toast.show({ text1: responseJson.headers.message });
        } else {

            setalert_sms(err)
            setMy_Alert(true)
        }
    }
    const generateThum = async (item) => {
        console.log('my array for thumbnail for suggested', item);
        setLoading2(true)
        // const videos = item.filter(el => {
        //   if (!el.files) {
        //     return false
        //   } else {
        //     if (el.files.find(js => js.post_type == 'Video')) {
        //       return true
        //     } else {
        //       return false
        //     }
        //   }
        // })

        const allData = await Promise.all(
            item.map?.(async (el) => {
                if (!el.files) {
                    return { ...el, type: "none" };
                }
                else if (el.files.find((js) => js.post_type == "Image")) {
                    return {
                        ...el,
                        type: "image",
                    };
                } else {
                    console.log("createThumbnail will be called", el.files[0].file_url);
                    const thumb = await createThumbnail({
                        url: el.files[0].file_url,
                        timeStamp: 1000, // Specify the time position for the thumbnail (in milliseconds)
                    });
                    return {
                        ...el,
                        thumb,
                        type: "video",
                    };
                }
            })

        );


        console.log("allData  search", allData);
        const data = allData
        console.log(data, 'data111');
        setAlldata(data);

        setLoading2(false)
    };
    return (
        <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
            <ScrollView>
                <HomeHeaderRoundBottom height={100} extraStyle={{ paddingtop: 10, paddingBottom: 25 }} paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#0089CF'
                    press1={() => { props.navigation.goBack() }} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18}
                    press2={() => { }} title2={'Fashion'} fontWeight={'500'} img2height={20} color={'#fff'}
                    press3={() => { props.navigation.navigate('FashionNotification') }} img3={require('../../../assets/images/fashion-bell-icon.png')} img3width={25} img3height={22} />


                <View style={{ top: -20, width: '90%', alignSelf: 'center' }} >

                    <FashionSearch marginTop={0}
                        serchValue={searchValue}
                        placeholder={'Search by title'}
                        searchIcon={require('../../../assets/Art/CreationArtSearch.png')}
                        onChangeText={(e) => {
                            console.log('my e', e);
                            if (e.text === '') {
                                console.log('my empyt text',)
                            }
                            setsearchValue(e);
                            if (e.text === '') {
                                ArtCategory();
                                ArtAll()
                            } else { ArtSearch(e.text); }
                        }}
                        presssearch={() => {

                        }} paddingLeft={20} />

                </View>
                <View style={{
                    flex: 1, width: '90%',
                    marginLeft: 'auto',
                    marginRight: 'auto',

                }}>



                    <View style={{ width: dimensions.SCREEN_WIDTH * 0.9, alignSelf: 'center', marginTop: 10 }}>


                        <View style={{ width: dimensions.SCREEN_WIDTH * 0.9, alignSelf: 'center', marginTop: 5 }}>
                            {categoryData.length > 0 ? (
                                <FlatList
                                    data={categoryData}
                                    showsHorizontalScrollIndicator={false}
                                    numColumns={1}
                                    style={{}}
                                    renderItem={({ item, index }) => {
                                        console.log(item.user_profile_image
                                            , 'my itemsssss suggested');
                                        item?.files?.map((image, index) => (console.log(item, 'my file url')))

                                        return (

                                            <TouchableOpacity onPress={() => {
                                                props.navigation.navigate('ArtPost', { id: item.id })
                                            }}
                                                style={{ width: '95.5%', marginVertical: 10, borderRadius: 30, }}>
                                                <View style={styles.flatlistMainView}>

                                                    <View style={styles.followingImageView}>
                                                        <TouchableOpacity
                                                        >

                                                            {item.user_profile_image
                                                                ? (
                                                                    <Image
                                                                        source={{
                                                                            uri: item.user_profile_image

                                                                        }}
                                                                        style={{ width: 35, height: 35, borderRadius: 90, }}
                                                                        resizeMode="contain"
                                                                    />
                                                                ) : (
                                                                    <Image
                                                                        source={require('../../../assets/blankProfile.png')}
                                                                        style={{ width: 35, height: 35, borderRadius: 40 }}
                                                                    />
                                                                )}
                                                        </TouchableOpacity>
                                                        <View style={styles.followingView}>
                                                            <TouchableOpacity onPress={() => {


                                                            }}>
                                                                <Text style={{ fontSize: 14, fontWeight: '600', color: '#455A64' }}>  {item.username

                                                                }</Text>
                                                            </TouchableOpacity>

                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        {/* <TouchableOpacity onPress={() => { setThreedotclickdata(item.userid), setShowModal(true) }} style={[styles.rightButtonsView, { marginRight: 12, marginLeft: -10 }]}> */}
                                                        {/* <TouchableOpacity
                                                            onPress={() => {

                                                                // setEditItemId(item.id);
                                                                // setEditModal({
                                                                //     active: true,
                                                                //     id: item.id,

                                                                // });
                                                                setProfileModal({
                                                                    active: true,
                                                                    id_article: item[0].article_id,
                                                                    category: item.category_id,
                                                                    description: item.description
                                                                })

                                                                setSelectedId(item[0].article_id);
                                                                setSelectedCategoryy(item.category_id);
                                                                setdesc(item[0].description)

                                                                setTile(item[0].title)
                                                            }}
                                                            style={[styles.rightButtonsView, { marginRight: 12, marginLeft: -10 }]}
                                                        >
                                                            <Image source={require('../../../assets/images/people-three-dots.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />
                                                        </TouchableOpacity> */}

                                                    </View>

                                                </View>

                                                {/* addd new view heree */}
                                                <View style={{ width: dimensions.SCREEN_WIDTH, alignSelf: 'center', }}>
                                                    <View style={{ justifyContent: 'flex-start', }}>
                                                        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
                                                            {item.type == 'video' ? (
                                                                // <VideoPlayer
                                                                //     resizeMode="contain"
                                                                //     video={{ uri: item?.files?.[0]?.file_url }}
                                                                //     style={styles.videoPlayer}
                                                                //     videoWidth={dimensions.SCREEN_WIDTH}
                                                                //     videoHeight={200}
                                                                //     autoplay={false}
                                                                //     thumbnail={{ uri: item.thumb?.path }}
                                                                //     endWithThumbnail
                                                                //     disableControlsAutoHide
                                                                //     customStyles={{
                                                                //         thumbnail: { width: dimensions.SCREEN_WIDTH, height: 200, alignSelf: 'center' },
                                                                //         videoWrapper: { width: dimensions.SCREEN_WIDTH, height: 200 },
                                                                //         controls: { width: '80%', alignSelf: 'center' },
                                                                //     }}
                                                                // />

                                                                <TouchableOpacity style={{ width: dimensions.SCREEN_WIDTH, height: 200, borderRadius: 10, alignSelf: 'center', resizeMode: 'cover' }} onPress={() => {
                                                                    setShowModal({
                                                                        isVisible: true,
                                                                        data: item?.files?.[0],
                                                                    })
                                                                }}>

                                                                    <ImageBackground source={{ uri: item.thumb?.path }} style={{
                                                                        width: dimensions.SCREEN_WIDTH, height: 200, alignSelf: 'center', justifyContent: 'center',


                                                                    }} resizeMode='cover' >
                                                                        <Image source={require('../../../assets/images/people-play-button.png')} style={{ width: '20%', height: '20%', alignSelf: 'center', }} resizeMode='contain' ></Image>
                                                                    </ImageBackground>
                                                                </TouchableOpacity>

                                                            ) :
                                                                // (
                                                                //     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                                                //         {item?.files?.map((image, index) => (
                                                                //             <Image
                                                                //                 source={{ uri: `${image.file_url}` }}
                                                                //                 style={styles.image}
                                                                //                 resizeMode='stretch'
                                                                //             // key={index}
                                                                //             />
                                                                //         ))}
                                                                //     </ScrollView>
                                                                // )
                                                                <View style={{ width: dimensions.SCREEN_WIDTH, height: 200, }}>

                                                                    <Image
                                                                        source={{ uri: `${item.cover_photo}` }}
                                                                        style={styles.image}
                                                                        resizeMode='stretch'
                                                                    // key={index}
                                                                    />

                                                                </View>
                                                            }

                                                        </ScrollView>
                                                    </View>
                                                </View>


                                                <View style={styles.flatlistMainBottomView}>

                                                    <View style={styles.flatlistBottomView}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                            < View style={styles.buttonsContainer} >
                                                                <TouchableOpacity style={styles.buttonView}>
                                                                    <Image
                                                                        source={require('../../../assets/images/fashion-dark-like-button.png')}
                                                                        style={styles.buttonIcon}
                                                                    />
                                                                    <Text style={styles.buttonText}>{item.totalLikes}</Text>

                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={styles.buttonView}>
                                                                    <Image
                                                                        source={require('../../../assets/images/fashion-dark-dislike-button.png')}
                                                                        style={styles.buttonIcon}
                                                                    />
                                                                    <Text style={styles.buttonText}>{item.totalDislikes}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <View style={{ marginRight: 10 }}>

                                                            </View>

                                                        </View>
                                                    </View>

                                                    {

                                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} onPress={() => {

                                                            // props.navigation.navigate('LikedUserList', { postid: item.id })
                                                        }}>

                                                            <View style={styles.textContainerrrr}>
                                                                <Text style={styles.descriptionTextrrrr}>{item.headline}</Text>
                                                                {/* <Text style={styles.createdTimeText}>{item.created_date}</Text> */}
                                                            </View>
                                                        </TouchableOpacity>

                                                    }
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }
                                    }
                                    keyExtractor={item => item.id}
                                />) :
                                <FlatList
                                    data={allData.sort((a, b) => new Date(a.created_date) - new Date(b.created_date))}
                                    showsHorizontalScrollIndicator={false}
                                    numColumns={1}
                                    style={{}}
                                    renderItem={({ item, index }) => {
                                        console.log(item, 'my itemsssss');
                                        item?.files?.map((image, index) => (console.log(item, 'my file url')))

                                        return (

                                            <View
                                                style={{ width: '95.5%', marginVertical: 10, borderRadius: 30, }}>
                                                <TouchableOpacity style={styles.flatlistMainView} onPress={() => {
                                                    props.navigation.navigate('FashionPost', { id: item.id })
                                                }}>

                                                    <View style={styles.followingImageView}>
                                                        <View
                                                        >

                                                            {item.user_profile_image ? (
                                                                <Image
                                                                    source={{
                                                                        uri: item.user_profile_image
                                                                    }}
                                                                    style={{ width: 35, height: 35, borderRadius: 90, }}
                                                                    resizeMode="contain"
                                                                />
                                                            ) : (
                                                                <Image
                                                                    source={require('../../../assets/blankProfile.png')}
                                                                    style={{ width: 35, height: 35, borderRadius: 40 }}
                                                                />
                                                            )}
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '88%' }}>
                                                            <View style={styles.followingView}>
                                                                <View onPress={() => {


                                                                }}>
                                                                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#455A64' }}>  {item.username

                                                                    }</Text>
                                                                </View>

                                                            </View>
                                                            <Text style={{
                                                                fontSize: 14,
                                                                fontWeight: '500',
                                                                color: '#263238',
                                                                textAlign: 'right',
                                                                width: '56%'
                                                            }}>{item.created_date}</Text>

                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                                    </View>

                                                </TouchableOpacity>

                                                {/* addd new view heree */}
                                                <View style={{ width: dimensions.SCREEN_WIDTH, alignSelf: 'center', }}>
                                                    <View style={{ justifyContent: 'flex-start', }}>
                                                        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
                                                            {item.type == 'video' ? (

                                                                <TouchableOpacity style={{ width: dimensions.SCREEN_WIDTH, height: 200, borderRadius: 10, alignSelf: 'center', resizeMode: 'cover' }} onPress={() => {
                                                                    setShowModal({
                                                                        isVisible: true,
                                                                        data: item?.files?.[0],
                                                                    })
                                                                }}>

                                                                    <ImageBackground source={{ uri: item.thumb?.path }} style={{
                                                                        width: dimensions.SCREEN_WIDTH, height: 200, alignSelf: 'center', justifyContent: 'center',


                                                                    }} resizeMode='cover' >
                                                                        <Image source={require('../../../assets/images/people-play-button.png')} style={{ width: '20%', height: '20%', alignSelf: 'center', }} resizeMode='contain' ></Image>
                                                                    </ImageBackground>
                                                                </TouchableOpacity>

                                                            ) :

                                                                <View style={{ width: dimensions.SCREEN_WIDTH, height: 200, }}>

                                                                    <Image
                                                                        source={{ uri: `${item.cover_photo}` }}
                                                                        style={styles.image}
                                                                        resizeMode='stretch'
                                                                    // key={index}
                                                                    />

                                                                </View>
                                                            }

                                                        </ScrollView>
                                                    </View>
                                                </View>


                                                <TouchableOpacity style={styles.flatlistMainBottomView} onPress={() => {
                                                    props.navigation.navigate('FashionPost', { id: item.id })
                                                }}>
                                                    {
                                                        <View>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, justifyContent: 'center', width: '93%' }}>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }} >
                                                                    <View style={{
                                                                        flexDirection: 'row',
                                                                        justifyContent: 'space-between',
                                                                        width: '100%',


                                                                    }}>
                                                                        <Text numberOfLines={2} style={{

                                                                            width: '59%', fontSize: 14,
                                                                            fontWeight: '400',
                                                                            color: '#263238',

                                                                            justifyContent: 'flex-start',
                                                                            textAlign: 'left',



                                                                        }}>

                                                                            {item.headline}

                                                                        </Text>
                                                                        <Text style={{ width: '35%', textAlign: 'right', color: '#0089CF' }}>
                                                                            {item.category}

                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.flatlistBottomView}>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%' }}>
                                                                    < View style={styles.buttonsContainer} >
                                                                        <View style={styles.buttonView}>
                                                                            <Image
                                                                                source={require('../../../assets/images/fashion-dark-like-button.png')}
                                                                                style={styles.buttonIcon}
                                                                            />
                                                                            <Text style={styles.buttonText}>{item.totalLikes} Likes</Text>
                                                                        </View>
                                                                        <View style={styles.buttonView}>
                                                                            <Image
                                                                                source={require('../../../assets/images/fashion-dark-dislike-button.png')}
                                                                                style={styles.buttonIcon}
                                                                            />
                                                                            <Text style={styles.buttonText}>{item.totalDislikes} Dislikes</Text>
                                                                        </View>
                                                                        <View style={styles.buttonView}>
                                                                            <Image
                                                                                source={require('../../../assets/People/commentPostPeople.png')}
                                                                                style={styles.buttonIcon}
                                                                            />
                                                                            <Text style={styles.buttonText}>{item.totalComments
                                                                            } Comments</Text>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>

                                                    }
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }
                                    }
                                    keyExtractor={item => item.id}
                                />}
                        </View>


                    </View>


                    <View style={{ height: 10 }} />


                </View>
                <View style={{ height: 100 }} />
            </ScrollView>

            {loading || loading2 ? <Loader /> : null}
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
                                            {item.headline ?
                                                <Text style={{ fontSize: 12, lineHeight: 12, fontWeight: '400', color: '#C5C6C9', marginTop: 2 }}>{item.headline}</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
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
        backgroundColor: '#0089CF',
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
    flatlistMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: dimensions.SCREEN_WIDTH * 0.9,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomWidth: 1,
        borderLeftColor: '#EDEEEE',
        borderRightColor: '#EDEEEE',
        borderBottomColor: '#EDEEEE',


    },
    followingImageView: {
        flexDirection: 'row',
        alignItems: 'center',

        width: '100%'

    },
    followingView: {
        justifyContent: 'center',

    },
    flatlistMainBottomView: {
        backgroundColor: '#fff',
        // paddingVertical: 10,
        width: dimensions.SCREEN_WIDTH * 0.9,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftColor: '#EAEBEB',
        borderRightColor: '#EAEBEB',
        borderBottomColor: '#EAEBEB',
    },
    flatlistBottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        alignSelf: 'center'
    },
    textContainerrrr: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: dimensions.SCREEN_WIDTH * 0.82,


    },
    descriptionTextrrrr: {
        fontSize: 14,
        fontWeight: '400',
        color: '#263238',
        width: '59%',

    },
    createdTimeText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#0089CF',
        textAlign: 'right',
        marginRight: 20
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    image: {
        width: dimensions.SCREEN_WIDTH * 1,
        height: '99%',
        alignSelf: 'center',
        //  backgroundColor: 'red',
        justifyContent: 'center',


    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4, // Add margin between text and buttons
        // Align buttons with the text,

        width: '93%',
        marginHorizontal: 10,
        marginBottom: 3,

    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20, // Add margin between buttons

    },
    buttonIcon: {
        height: 20,
        width: 20,
    },
    buttonText: {
        marginLeft: 5, // Add spacing between icon and text
        fontSize: 14,
        color: '#263238',
    },
    topRightImage: {
        position: 'absolute',
        top: 10, // Adjust the top position as needed
        right: 10, // Adjust the right position as needed
        width: 30,
        height: 30,
        resizeMode: 'contain',


    }, topRightImageContainer: {
        position: 'absolute',
        top: 30, // Adjust the top position as needed
        right: 30, // Adjust the right position as needed
        zIndex: 999,
        backgroundColor: 'transparent'
    },

});
export default AllFashionSuggested 