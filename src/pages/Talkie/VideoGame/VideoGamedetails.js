import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
// import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import MyButtons from '../../../component/MyButtons';
import Share from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
import Loader from '../../../WebApi/Loader';
import RepliesModal from '../../../component/ReplesModal';
import { Rating, AirbnbRating } from 'react-native-ratings';



const VideoGamedetails = (props) => {

    const myTextInput = useRef()
    const [modlevisual1, setmodlevisual1] = useState(false)
    const [showModal, setShowModal] = useState({ isVisible: false, data: null });
    const [showReportModal, setShowReportModal] = useState(false)
    const [showAtUsername, setShowAtUsername] = useState(false);
    const [showRepliesModal, setShowRepliesModal] = useState(false);
    const [userMessage, setUserMessage] = useState('')
    const [replyingTo, setReplyingTo] = useState('')
    const [loading, setLoading] = useState(false);
    const [postDecs, setPostDesc] = useState('');

    const design = (img, ti, tit, w, imgh, imgw, bg, redious,press) => {
        return (
            <View style={{ alignItems: 'center', width: "32%", borderRadius: 15, height: 60, paddingHorizontal: 10, }}>
                <TouchableOpacity onPress={press ? press : ()=>{}}
                style={{ width: 40, height: 40, backgroundColor: bg, justifyContent: 'center', borderRadius: redious }}>
                    <Image source={img} style={{ width: imgw, height: imgh, overflow: 'hidden', alignSelf: 'center' }}></Image>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#D9D9D9' }}>{ti}</Text>

                </View>
                {/* <View style={{ borderWidth: 1, borderBottomColor: '#212121' }} /> */}
            </View>

        )
    }
    useEffect(() => {

    }, [])
    const MycustomonShare = async () => {
        const shareOptions = {
            title: 'KinenGo Contents',
            icon: 'data:<data_type>/<file_extension>;base64,<base64_data>',
            // type: 'data:image/png;base64,<imageInBase64>',
            // message: "Popfiit App",
            url: 'KinenGo',
          }
          try {
            const shareResponse = await Share.open(shareOptions);

            console.log(JSON.stringify(shareResponse));

          }
          catch (error) {
            console.log('ERROR=>', error);
          }
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
            img: require('../../../assets/dating-home-header-left-image.png'),
            isLiked: true,
            replies: []
        },
        {
            id: '2',
            name: 'Eleanor Pena',
            message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
            time: '14 min',
            img: require('../../../assets/dating-home-header-left-image.png'),
            isLiked: false,
            replies: []
        },
        {
            id: '3',
            name: 'Floyd Miles',
            message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
            time: '14 min',
            img: require('../../../assets/dating-home-header-left-image.png'),
            isLiked: true,
            replies: []
        },
        {
            id: '4',
            name: 'Robert Fox',
            message: `That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
            time: '14 min',
            img: require('../../../assets/dating-home-header-left-image.png'),
            isLiked: true,
            replies: []
        },

    ])
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
                        img: require('../../../assets/dating-home-header-left-image.png'),
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
                img: require('../../../assets/comment-person-image.png'),
                isLiked: false,
                replies: []
            },
            ])
        }
        Keyboard.dismiss()
        setUserMessage('')
        setReplyingTo('')
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

    const returnOneReply = (itemid) => {
        const replies = upData?.find(el => el.id === itemid)?.replies
        if (replies?.length === 0) {
            return
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#000', height: dimensions.SCREEN_HEIGHT * 100 / 100, width: '100%' }}>
            <ScrollView>
                <View style={{ backgroundColor: '#fff', height: dimensions.SCREEN_HEIGHT * 28 / 100, width: '100%', position: 'relative', }}>

                    <ImageBackground source={require('../../../assets/images/Pubg-photo.png')} style={{ width: '100%', height: '100%', overflow: 'hidden' }} resizeMode='stretch'>
                        <HomeHeader height={60} paddingHorizontal={15}
                            press1={() => { props.navigation.goBack() }} img1={require('../../../assets/service-header-back-button.png')}
                            img1width={30} img1height={30} img1backgroundColor={'transparent'} img1padding={5} img1borderRadius={4}
                            press2={() => { }} title2={'Game Video'} fontWeight={'bold'} img2height={20} color={Mycolors.BG_COLOR}
                            press3={() => { }} img3width={25} img3height={25} />

                        <View style={styles.PlayIconWrapper}>

                            <TouchableOpacity>
                                <Image source={require('../../../assets/VideoGame-play-button.png')} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                </View>
                {/* <View style={{ width: '96%', alignItems: 'flex-start', alignSelf: 'center', paddingHorizontal: 15, paddingVertical: 10, top: -130 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 26, fontWeight: '600' }}>Browse the</Text>
                    <Text style={{ color: 'red', fontSize: 26, fontWeight: '600' }}>Games Videos</Text>
                </View> */}

                <View style={{ width: '97%', alignSelf: 'center', }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
                        <Image source={require('../../../assets/dating-home-header-left-image.png')} style={{ width: 50, height: 50, borderRadius: 25 }}></Image>
                        <View style={{ marginLeft: 10, width: '83%' }}>
                            <Text style={{ color: Mycolors.BG_COLOR, fontSize: 13, fontWeight: '600' }}>Pubg Squad Play Video</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                                <Image source={require('../../../assets/Star.png')} style={{ width: 15, height: 15, }}></Image>
                                <Text style={{ color: '#FFD037', fontSize: 11, left: 7 }}>4.5</Text>

                                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginLeft: 60, width: '68%' }}>
                                    <Text style={{ color: '#8F93A0', fontSize: 10, fontWeight: '600' }}>1.4M Views</Text>
                                    <Text style={{ color: '#8F93A0', fontSize: 10, fontWeight: '600' }}>June 13, 2022 6:28AM</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, borderBottomColor: '#212121' }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "80%" }}>

                        {design(require('../../../assets/Heart-like-buttom.png'), 'Like', '', '45%', 25, 28, '', 20)}
                        {design(require('../../../assets/Newspaper.png'), 'Newsfeed', '', '45%', 25, 28, '', 20, ()=>{props.navigation.navigate('VideoNewsfeed')})}
                        {design(require('../../../assets/ArrowCircleDown.png'), 'Download', '', '45%', 25, 28, '', 20)}
                        {design(require('../../../assets/ShareNetwork.png'), 'Share', '', '45%', 25, 28, '', 20,()=>{MycustomonShare()})}
                    </View>
                    <View style={{ borderWidth: 1, borderBottomColor: '#212121' }} />

                    <View style={{ width: '96%', alignItems: 'flex-start', alignSelf: 'center', paddingHorizontal: 15, top: 10, }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600', marginVertical: 10 }}>Description</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '600', textAlign: "left" }}>PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds, or simply PUBG) is an online multiplayer battle royale game developed and published by PUBG Studios, a subsidiary of Krafton. The game is based on previous mods that were created by Brendan "PlayerUnknown" Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters.</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, width: '90%', marginLeft: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#FFFFFF' }}>Comments & Reviews</Text>
                        <TouchableOpacity onPress={() => { setmodlevisual1(true) }}>
                            <Text style={{ fontSize: 13, fontWeight: '400', color: '#ED1C24' }}>Post Your Review</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '100%', alignSelf: 'center', marginTop: 15 }}>
                        <FlatList
                            data={upData}
                            showsHorizontalScrollIndicator={false}
                            numColumns={1}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ width: dimensions.SCREEN_WIDTH * 0.89, marginBottom: 15, alignSelf: 'center', backgroundColor: "#131313", padding: 10, borderRadius: 15 }}>
                                        <>
                                            <View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Image source={item.img} style={{ height: 50, width: 50 }} />
                                                        <View style={{ marginLeft: 10 }}>
                                                            <Text style={{ fontSize: 14, fontWeight: '700', color: '#FFFFFF' }}>{item.name}</Text>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                                                                <Image source={require('../../../assets/Star.png')} style={{ width: 15, height: 15, }}></Image>
                                                                <Text style={{ color: '#FFD037', fontSize: 11, left: 7 }}>4.5</Text>
                                                                <Text style={{ fontSize: 12, fontWeight: '400', color: '#6F6D6D', marginLeft: 25 }}>{item.time}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity onPress={() => { setShowAtUsername(true); setReplyingTo(item.id); setShowRepliesModal(true); }} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Image source={require('../../../assets/Videogame-reply-icon.png')} />
                                                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#B4BBC6', marginLeft: 10 }}>Reply</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ marginTop: 10 }}>
                                                    <Text style={{ fontSize: 14, lineHeight: 20, fontWeight: '400', color: '#FFFFFF' }}>{item.message}</Text>
                                                </View>

                                            </View>

                                            {item?.replies?.length > 0 ?
                                                <>
                                                    {returnOneReply(item.id)}
                                                </>
                                                : null}
                                        </>
                                    </View>
                                )
                            }}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>

                <View style={{ height: 60 }} />

            </ScrollView>
            {loading ? <Loader /> : null}
            <RepliesModal
                isVisible={showRepliesModal}
                setIsVisible={setShowRepliesModal}
                data={upData}
                setData={setupData}
                replyingTo={replyingTo}
                setReplyingTo={setReplyingTo}
                showAtUsername={showAtUsername}
                likeChildComment={likeChildComment}
            // startFromIndex={startFromIndex}
            />

            <View style={styles.addCommentView}>
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
                <TouchableOpacity onPress={sendMessage} style={styles.sendButtonView}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}>Send</Text>
                </TouchableOpacity>
            </View>

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
                                        <Image source={selectedReasonId === item.id ? require('../../../assets/dating-home-header-left-image.png') : require('../../../assets/dating-home-header-left-image.png')} />
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

{/* Post your review modul */}
            <Modal
                isVisible={modlevisual1}
                swipeDirection="down"
                onSwipeComplete={(e) => {
                    setmodlevisual1(false)
                }}
                scrollTo={() => { }}
                scrollOffset={1}
                propagateSwipe={true}
                coverScreen={false}
                backdropColor='transparent'
                style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <TouchableOpacity style={{ flex: 1 }} onPress={() => setmodlevisual1(false)} ></TouchableOpacity>
                <View style={{ height: '74%', backgroundColor: '#2A2B2C', borderRadius: 30, padding: 20, marginBottom: 20, marginHorizontal: 10, }}>
                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

                        <View style={{ width: 180, height: 150, alignSelf: 'center', marginTop: 8 }}>
                            <Image source={require('../../../assets/Post-Your-Review-img.png')} style={{ width: '100%', height: '100%', alignSelf: 'center', borderRadius: 7 }}>

                            </Image>
                        </View>

                        <View style={{ ustifyContent: 'center', alignItems: "center", padding: 5 }}>
                            <Text style={{ fontWeight: 'bold', color: '#FFFFFF', marginVertical: 10, paddingHorizontal: 10, textAlign: "center", fontSize: 18 }}>Your opinion matters to us!</Text>

                            <Rating
                                // type='custom'
                                // type='heart'
                                ratingCount={5}
                                imageSize={50}
                                startingValue={1}
                                // ratingBackgroundColor={'#455A64'}
                                tintColor={'#2A2B2C'}
                                style={{ paddingVertical: 10, }}
                            // readonly={true}
                            // showRating
                            //onFinishRating={this.ratingCompleted}
                            />
                            <View style={{ width: '93%', height: 100, borderRadius: 5, marginTop: 20, alignSelf: 'center', backgroundColor: "#2A2B2C", borderWidth: 1, borderColor: "#455A64" }}>

                                <TextInput
                                    value={postDecs}
                                    textAlignVertical='top'
                                    onChangeText={(e) => setPostDesc(e)}
                                    placeholder='Write Your review here…'
                                    placeholderTextColor="#bbbbbb"
                                    multiline={true}
                                    // maxLength={500}
                                    // keyboardType="number-pad"
                                    autoCapitalize='none'
                                    style={[styles.inputDesc]}
                                />

                            </View>
                        </View>

                        <View style={{ width: '90%', height: 50, justifyContent: 'center', position: 'absolute', bottom: 30, marginHorizontal: 10, alignSelf: "center" }}>
                            <MyButtons title="Post Your Riview" height={50} width={'100%'} borderRadius={5} press={() => {
                                props.navigation.navigate(' '),
                                    setmodlevisual1(false)
                            }} fontSize={13}
                                titlecolor={Mycolors.BG_COLOR} marginVertical={0} backgroundColor={'#ED1C24'} />

                        </View>

                        <View style={{ width: 100, height: 100 }} />
                    </ScrollView>

                </View>
            </Modal>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    VideoThumbWrapper: {
        position: 'relative',
        // width: '48%',
        // marginRight: 8,
        marginBottom: 4,

        width: dimensions.SCREEN_WIDTH / 2.3,
        height: 190,
        marginRight: 16,
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
        height: 50,
        marginTop: 25,
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 999
    },
    BackGroundImage: {
        backgroundColor: "gray",
        width: '100%',
        height: 190,
        justifyContent: 'center',
        borderRadius: 15
    },
    inputDesc: {
        paddingLeft: 20,
        textAlign: "left",
        width: '100%',
        fontSize: 13,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 0.5,
        // backgroundColor: '#34333a',
        color: '#fff',
        height: 100,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: Mycolors.Black
    },
});
export default VideoGamedetails;