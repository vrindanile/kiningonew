
import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, } from 'react-native';
import HomeHeaderRoundBottom from './components/HomeHeaderRoundBottom';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import FashionSearch from './components/FashionSearch';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';

import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
import ImagePicker from 'react-native-image-crop-picker';
import { baseUrl, shop_eat_cart, user_payment_method, shop_eat_orders, shop_eat_cart_book_dining, shop_eat_cart_book_table, shop_eat_cart_id, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, connect_people_create_post, connect_people_newPost, art_getCollection, requestPostApiMedia, art_PostCollection, postApiWithToken2, edit_article, creation_editArticle, creation_article } from '../../../WebApi/Service'
import Animated from "react-native-reanimated";
import MyButtons from '../../../component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import { TextInput } from "react-native-paper";

import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { androidCameraPermission } from '../../Connect/People/Permissions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../../WebApi/Loader';
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import ViewMoreText from 'react-native-view-more-text';
import axios from 'axios';
const FashionEditArticle = (props) => {
    const dispatch = useDispatch();
    const User = useSelector(state => state.user.user_details)
    console.log('User', User.token);
    const [searchValue, setsearchValue] = useState('')
    const [images, setImages] = useState('')
    const [scrollEnabled, setScrollEnabled] = useState(false)
    const myTextInput = useRef()
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
    const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(props.route.params.category)
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState({ isVisible: false, data: null });
    const [picker, setPicker] = useState('')
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState({})
    const [showReportModal, setShowReportModal] = useState(false)
    const [selectedReasonId, setSelectedReasonId] = useState(null)
    const [headingTitle, setHeadingTitle] = useState('')
    const [loading2, setLoading2] = useState(false)
    const [newsArticle, setNewsArticle] = useState('')
    const [modlevisual5, setmodlevisual5] = useState(false)
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
    // const [selectedCategory, setSelectedCategory] = useState({})
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const isAutoScrolling = React.useRef(true);
    const activeIndex = React.useRef(0);
    const flatListRef = React.useRef(null);
    const [modlevisual, setmodlevisual] = useState(false);
    const [categoryData, setCategorydata] = useState([])
    const [article_id, setArticle_id] = useState(props.route.params.id)
    const [category_id, setCategry_id] = useState(props.route.params.cat)
    const [des, setDest] = useState(props.route.params.desc)
    const [title, setTile] = useState(props.route.params.title)
    const startAutoScroll = (toIndex) => {

        console.log('auto scroll clicked', toIndex)

        if (categoryData.length > 0) {
            console.log('is it reactd', categoryData.length > 0);
            isAutoScrolling.current = true;
            activeIndex.current = toIndex;
            if (activeIndex.current > categoryData.length - 1) {
                activeIndex.current = 0;
            }
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: activeIndex.current,
                viewPosition: 0.5,
            });
        }
    };
    const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
    React.useEffect(() => {
        return () => {
            isAutoScrolling.current = true;
            activeIndex.current = 0;
        };
    }, []);
    useEffect(() => {

        const id =
            props.route.params.category
        console.log(props.route.params.id, 'my id fro coking update');
        SpecificArticle(props.route.params.id)
        setArticle_id(props.route.params.id)
        const cat = props.route.params.cat
        console.log('cat', cat);
        setNewsArticle(props.route.params.desc)
        setHeadingTitle(props.route.params.title)
        setCategry_id(props.route.params.cat)

        setSelectedCategory(props.route.params.category)
    }, [])

    useEffect(() => {
        ArtCategory()

    }, [])
    const ArtCategory = async () => {
        setLoading(true)
        var fUrl = art_getCollection
        var urls = '?module_id=' + '52'
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
        console.log('item of renderItem', item.file_url);
        return (
            <>
                {
                    item.type === 'video' ? <VideoPlayer
                        resizeMode="contain"
                        video={{ uri: item.file_url }}
                        style={{ borderWidth: 2, }}
                        videoWidth={dimensions.SCREEN_WIDTH}
                        videoHeight={350}
                        autoplay={false}
                        thumbnail={{ uri: item.thumb.path }}
                        endWithThumbnail
                        disableControlsAutoHide
                        customStyles={{
                            thumbnail: { width: '90%', height: 200, alignSelf: 'center', resizeMode: 'cover' },
                            videoWrapper: { width: '100%', height: 350, resizeMode: 'stretch' },
                            // wrapper: { width: '100%', height: 227 },
                        }}
                    />
                        :
                        <Image source={{ uri: item.file_url }} style={{ width: dimensions.SCREEN_WIDTH * 0.9, height: 200, alignSelf: 'center', borderRadius: 10, marginTop: 15 }} resizeMode='stretch' />
                }
            </>

        );
    }

    const SpecificArticle = async (id) => {
        console.log('myyy rrrr');
        setLoading(true);
        var fUrl = creation_article;
        var urls = id
        var murl = '?module_id=' + '52'

        console.log('my url art ---------->', urls);

        if (urls != undefined) {
            fUrl = fUrl + urls + murl;
        }



        console.log('my url-- for cooking article-------->', fUrl);

        const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token);
        setLoading(false);

        console.log('the res of specific id from cooking', responseJson);

        generateThumb(responseJson.body.data.images);

        if (responseJson.headers.success == 1) {
            console.log('the res of specific id', responseJson.body.data.user_profile_image);

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
            setProfile(responseJson.body.data.user_profile_image);

            const latestRecordsArray = responseJson.body.articles.slice(0, 3);

            // Update the state with the latest records
            setLatestRecords(latestRecordsArray);
            // Toast.show({ text1: responseJson.headers.message });
        } else {
            setalert_sms(err);
            setMy_Alert(true);
        }
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

        setLoading2(false);
    };


    const Createpos = async () => {
        console.log(
            'nyyyyyyyyyyselectedCategory', selectedCategory
        );
        if (headingTitle?.trim()?.length === 0) {
            Toast.show({ text1: 'Please enter title' });
        } else if (newsArticle?.trim()?.length === 0) {
            Toast.show({ text1: 'Please enter description' });
        } else {
            setLoading(true);
            console.log('llll');
            const data = {
                "headline": headingTitle,
                "description": newsArticle,
                "category_id": selectedCategory
            };

            const { responseJson, err } = await requestPostApi(creation_editArticle + article_id, data, 'PUT', User.token);
            console.log('the edit post', responseJson);

            if (responseJson.headers.success == 1) {
                console.log('the edit post after suceds', responseJson);
                Toast.show({ text1: 'Article Edited' });
                props.navigation.navigate('FashionProfile');
            } else {
                setalert_sms(err);
                setMy_Alert(true);
            }

            setLoading(false);
        }
    }


    return (
        <SafeAreaView scrollEnabled={scrollEnabled} style={{ height: '100%', backgroundColor: '#F8F8F8' }}>
            <ScrollView>
                <HomeHeaderRoundBottom height={100} paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#0089CF'
                    press1={() => { props.navigation.goBack() }} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18}
                    press2={() => { }} title2={'Edit'} fontWeight={'500'} img2height={20} color={'#fff'}
                    press3={() => { props.navigation.navigate('FashionNotification') }} img3={require('../../../assets/images/fashion-bell-icon.png')} img3width={25} img3height={22} />



                <View style={{ width: '85%', alignSelf: 'center', marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#263238', marginBottom: 5 }}>Choose Category</Text>
                        <TouchableOpacity onPress={() => { setmodlevisual5(true) }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#0089CF', marginBottom: 5 }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: dimensions.SCREEN_WIDTH * 0.9, alignSelf: 'flex-start', marginTop: 0, marginBottom: 10, marginTop: 10, alignSelf: 'center' }}>
                    <Animated.FlatList
                        ref={flatListRef}
                        data={categoryData}
                        showsHorizontalScrollIndicator={true}
                        horizontal
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false },
                        )}
                        renderItem={({ item, index }) => {
                            console.log('selectedCategory', selectedCategory
                            )
                            return (

                                <TouchableOpacity style={[{ width: dimensions.SCREEN_WIDTH / 3, height: 140, marginRight: 15, borderRadius: 10, overflow: 'hidden', position: 'relative', alignItems: 'center', borderRadius: 15, paddingHorizontal: 10, }, selectedCategory
                                    === item?.id
                                    ? styles.categorySelectedStyle : null]}
                                    onPress={() => { setSelectedCategory(item.id); }}>
                                    <Image source={{ uri: item.image }} style={{ width: dimensions.SCREEN_WIDTH / 2.8, height: 160 }} resizeMode='stretch'></Image>
                                    <LinearGradient
                                        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.43)']}
                                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, }}
                                    >

                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                                            <Text style={{
                                                fontSize: 14, fontWeight: '500', color: (selectedCategory?.id
                                                    === item?.name) ? 'white' : 'white', bottom: 20
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

                <View style={{ width: '85%', alignSelf: 'center', marginTop: 10 }}>
                    <TextInput
                        mode="outlined"
                        label="Startup title"
                        maxLength={50}
                        underlineColor="red"
                        underlineColorAndroid="transparent"
                        keyboardType="default"
                        value={headingTitle}
                        textColor="#000000"
                        onChangeText={(e) => setHeadingTitle(e)}
                        outlineStyle={{ borderColor: '#dbdbd9' }}
                        style={[
                            styles.input,
                            {
                                width: "97%",
                                paddingLeft: 0,
                                fontSize: 13,
                                height: 50,
                                fontWeight: "400",
                                color: "#000000",

                            },
                        ]}
                    />

                    <TextInput
                        mode="outlined"
                        label="Describe something about Startup ..."
                        multiline   // Set multiline prop to true
                        numberOfLines={4} // Adjust the initial number of visible lines
                        maxLength={500}
                        outlineColor="red"
                        outlineStyle={{ borderColor: '#dbdbd9' }}
                        underlineColorAndroid="transparent"
                        keyboardType="default" // You might want to use "default" keyboardType for multiline input
                        value={newsArticle}
                        onChangeText={(e) => setNewsArticle(e)}
                        textColor="#000000"

                        style={[
                            styles.input,
                            {
                                width: "97%",
                                paddingLeft: 0,
                                fontSize: 13,
                                height: 150, // Adjust the height for multiline input
                                fontWeight: "400",
                                color: "#000000",
                            },
                        ]}
                    />

                </View>

                <View style={{ position: 'relative', marginTop: 10 }}>
                    {console.log('images to appintroSlide', images)}
                    <AppIntroSlider
                        data={images}
                        renderItem={_renderItem}
                        // renderPagination={() => null}
                        renderDoneButton={() => <View />}
                        renderNextButton={() => <View />}
                        activeDotStyle={{ backgroundColor: '#0089CF', height: 4, width: 18, borderRadius: 0, top: 20 }}
                        dotStyle={{ backgroundColor: '#fff', height: 4, width: 18, borderRadius: 0, top: 20 }}
                        keyExtractor={(item) => item.id}
                    />

                </View>
                <View style={{ width: '85%', alignSelf: 'center', marginTop: 10 }}>
                    <TouchableOpacity style={styles.saveButtonView} onPress={() => { Createpos() }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff', }}>Update</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10 }} />



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
                isVisible={modlevisual5}
                swipeDirection="down"
                onSwipeComplete={(e) => {
                    setmodlevisual5(false)
                }}
                scrollTo={() => { }}
                onBackdropPress={() => setmodlevisual5(false)}
                scrollOffset={1}
                propagateSwipe={true}
                coverScreen={false}
                backdropColor='transparent'
                style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <View style={{ height: '80%', backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

                        <Text style={{ color: Mycolors.Black, fontWeight: '500', fontSize: 22, textAlign: 'center' }} >Pick from a wide range of categories</Text>

                        <View style={{ width: '100%', alignSelf: 'center', marginTop: 20 }}>
                            <FlatList
                                data={categoryData}


                                // horizontal={true}
                                // showsHorizontalScrollIndicator={false}
                                // numColumns={2}
                                renderItem={({ item, index }) => {
                                    console.log('selectedCategory?.name === item?.name',

                                        selectedCategory ===

                                        item?.id

                                    );
                                    return (
                                        <TouchableOpacity
                                            style={[{
                                                width: '96%', marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 10, marginBottom: 20,
                                                padding: 7,
                                                overflow: 'hidden',
                                                // borderWidth:1, borderColor:'black'
                                                // shadowColor: '#E0E0E0',
                                                // shadowOffset: {
                                                //     width: 0,
                                                //     height: 3
                                                // },
                                                // shadowRadius: 5,
                                                // shadowOpacity: 0.6,
                                                // elevation: 3,
                                            }, selectedCategory ===

                                                item?.id ? styles.categorySelectedStyle : styles.categoryUnSelectedStyle]}
                                            onPress={() => {
                                                setSelectedCategory(item.id);

                                                // HomePage2(false, item)

                                                setmodlevisual5(false);
                                                startAutoScroll(index)
                                            }}
                                        >
                                            <Image source={{ uri: item.image }} style={{ width: '20%', height: 60, borderRadius: 7, }} resizeMode='contain' ></Image>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', width: "60%" }}>
                                                <Text style={{
                                                    fontSize: 16, color: (selectedCategory ===

                                                        item?.id) ? '#0089CF' : '#455A64', marginTop: 5, textAlign: 'center', fontWeight: 'bold'
                                                }}>{item?.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        // <View style={{ width: 100, marginHorizontal: 5 }}>
                                        //   <TouchableOpacity style={{ width: 100, height: 80, backgroundColor: '#F8F8F8', alignSelf: 'center' }}
                                        //     onPress={() => { setSelectedCategory(item) }}>
                                        //     <Image source={{ uri: item.category_image }} style={{ width: "100%", height: "100%", alignSelf: 'center', borderRadius: 7 }}></Image>
                                        //   </TouchableOpacity>
                                        //   <View style={{}}>
                                        //     <Text style={{ fontSize: 11, color: (selectedCategory?.category_id === item?.category_id) ? '#835E23' : Mycolors.Black, marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}>{item?.category_name}</Text>
                                        //   </View>
                                        // </View>
                                    )
                                }}
                            // keyExtractor={item => item.id}
                            />
                        </View>


                        <View style={{ width: 100, height: 30 }} />
                    </ScrollView>

                </View >
            </Modal >
            {loading || loading2 ? <Loader /> : null}
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
        height: 'auto',
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
    imagePickerStyle: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'yellow'
    },
    deleteIcon: {
        // backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        right: -12,
        alignItems: 'center',
        backgroundColor: 'white',
        top: 1
    },
    categorySelectedStyle: {
        borderWidth: 4,
        borderColor: '#0089CF',
        borderRadius: 10
    },
    categoryUnSelectedStyle: {
        borderWidth: 2,
        borderColor: '#B2B7B9',
        borderRadius: 10
    },
    input: {

        // borderColor: '#dbdbd9',
        // borderWidth: 1,
        // backgroundColor: '#fff',
        // color: '#fff',


        // paddingHorizontal: 15,
        // paddingVertical: 10,
        // color: Mycolors.Black,
        marginTop: 20


    }
});
export default FashionEditArticle 