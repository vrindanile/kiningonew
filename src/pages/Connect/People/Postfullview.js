import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient'
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import Loader from '../../../WebApi/Loader';
import PostsModal from './modals/PostsModal';
import ProfileScreenMoreModal from './modals/ProfileScreenMoreModal';
import { connect_people_block_user, connect_people_react_post, connect_people_save_post, connect_people_user_profile, requestGetApi, requestPostApi, } from '../../../WebApi/Service';
import { useSelector, useDispatch } from 'react-redux';

const Postfullview = (props) => {
  const User = useSelector(state => state.user.user_details);
  const Userpeople = useSelector(state => state.user.people_user);
  const [loading, setLoading] = useState(false);
  const [searchValue, setsearchValue] = useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showPostsModal, setShowPostsModal] = useState(false)
  const [showMoreModal, setShowMoreModal] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState(1)
  const [startFromIndex, setStartFromIndex] = useState(0)

  const [originalData, setOriginalData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [userdata, setUserdata] = useState('');
  const [uploadedpost, setUploadpostdata] = useState([]);

  const [upData, setupData] = useState([
    {
      id: '1',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    },
    {
      id: '2',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      type: 'video',
      source: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,
    },
    {
      id: '3',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    },
    {
      id: '4',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    },
    {
      id: '5',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    },
    {
      id: '6',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    },
    {
      id: '7',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      type: 'video',
      source: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,
    },
    {
      id: '8',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    }, {
      id: '9',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    }, {
      id: '10',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    }, {
      id: '11',
      name: 'Aryav Nadkarni',
      desc: 'Amazing footbal shorts caption this',
      numViews: '183K',
      numComments: '183',
      time: '',
      type: 'image',
      source: require('../../../assets/images/people-one-post-image.png'),
    },

  ])
  const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
  useEffect(() => {

    Userprofile()
    // generateThumb()
  }, [])
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('blur', () => {
      setShowMoreModal(false)
    });
    return unsubscribe;
  }, [props.navigation]);

  // const generateThumb = async () => {
  //   setLoading(true)
  //   try {
  //     const resp = await createThumbnail({
  //       url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,
  //       timeStamp: 10000,
  //       // cacheName: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
  //     })
  //     const updatedData = upData.map(el => {
  //       if (el.type === 'video') {
  //         return { ...el, thumbnail: resp.path }
  //       } else {
  //         return el
  //       }
  //     })
  //     setupData([...updatedData])
  //     // setOriginalData([...updatedData])
  //     setFilteredData([...updatedData])
  //   } catch (error) {
  //     console.log('thumbnail creating error', error);
  //   }
  //   setLoading(false)
  // }

  const onChangeFilter = (newFilter) => {
    console.log("originalDataoriginalData", originalData);
    if (newFilter === selectedFilter) {
      return
    }

    setSelectedFilter(newFilter)
    if (newFilter === 1) {
      setFilteredData([...originalData])
    } else if (newFilter === 2) {
      setFilteredData(originalData?.filter(el => el?.post_type === 'image'))
    } else if (newFilter === 3) {
      setFilteredData(originalData?.filter(el => el?.post_type === 'video'))
    }
  }
  const Userprofile = async () => {
    setLoading(true)
    console.log("PeopleProfileScreen:::", Userpeople.userid);
    const { responseJson, err } = await requestGetApi(connect_people_user_profile + Userpeople.userid, '', 'GET', User.token)
    setLoading(false)
    console.log('the res==>>', responseJson)
    if (responseJson.success == 1) {
      setUserdata(responseJson.data)
      setOriginalData(responseJson.data.posts)
      setFilteredData(responseJson.data.posts)
      console.log("response hOME", responseJson.data);
      console.log("response hOME post", responseJson.data.posts);
      // Toast.show({ text1: responseJson.headers.message });
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }

  const BlockButton = async (items) => {
    //  console.log("LIKE CLICK:::",isLiked);

    setLoading(true)
    var data = {
      blocked_id: "47",
      blocked_type: 2
    }
    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    const { responseJson, err } = await requestPostApi(connect_people_block_user, data, 'POST', User.token)
    setLoading(false)
    console.log('the res==>>', responseJson)
    if (responseJson.headers.success == 1) {
      // setIsLiked('true')
      Toast.show({ text1: responseJson.headers.message });
    } else {

      setalert_sms(err)
      setMy_Alert(true)
    }
  }
  return (
    <SafeAreaView scrollEnabled={scrollEnabled} style={{ backgroundColor: '#F8F8F8' }}>
      <ScrollView>
        <HomeHeaderRoundBottom height={80} paddingHorizontal={15} backgroundColor='#fff'
          press1={() => { props.navigation.goBack() }} img1={require('../../../assets/images/events_arrow.png')} img1width={25} img1height={20}
          press2={() => { }} title2={'People'} fontWeight={'500'} img2height={20} color='#455A64'
          press3={() => { }} img3width={25} img3height={25} borderBottomLeftRadius={25} borderBottomRightRadius={25} />
        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>

          <LinearGradient
            colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
            style={styles.descriptionView}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Image source={require('../../../assets/images/people-following-person.png')} />
              </View>
              {/* <View style={styles.descriptionView}> */}
              <View style={{ flex: 5 }}>
                <View style={styles.imageRowView}>

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#455A64' }}>{userdata?.first_name + ' ' + userdata?.last_name}</Text>
                  </View>

                  {/* <View style={styles.followingView}>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#455A64' }}>Following</Text>
                  </View> */}

                  <TouchableOpacity style={styles.threeDotsView} onPress={() => { setShowMoreModal(true) }}>
                    <Image source={require('../../../assets/images/people-three-dots.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10 }}>
              <LinearGradient
                colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                style={[styles.numView, { marginRight: 10 }]}
              >
                <Text style={styles.numValue}>{userdata.postsCount}</Text>
                <Text style={styles.numText}>Posts</Text>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                style={[styles.numView, { marginRight: 10 }]}
              >
                <TouchableOpacity onPress={() => props.navigation.navigate('PeopleFollowers', { gotoFollowersTab: 'yes' })} style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.numValue}>{userdata.followersCount}</Text>
                  <Text style={styles.numText}>Followers</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                style={styles.numView}
              >
                <TouchableOpacity onPress={() => props.navigation.navigate('PeopleFollowers', { gotoFollowersTab: 'no' })} style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.numValue}>{userdata.followingsCount}</Text>
                  <Text style={styles.numText}>Following</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:20}}> */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 30 }}>
              <TouchableOpacity style={styles.blueButtonSuperView} onPress={() => { props.navigation.navigate('PeopleChat') }}>
                <View style={styles.blueButtonSubView}>
                  <Image source={require('../../../assets/images/people-message2.png')} />
                  <Text style={styles.blueButtonText}>Message</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.blueButtonSuperView}>
                <View style={styles.blueButtonSubView}>
                  <Image source={require('../../../assets/images/people-block.png')} />
                  <Text style={styles.blueButtonText}>Block</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* </View> */}
          </LinearGradient>

          <View style={styles.allFiltersRow}>
            <View style={styles.filter1View}>
              <TouchableOpacity onPress={() => onChangeFilter(1)}>
                <Image source={selectedFilter === 1 ? require('../../../assets/images/people-all-filter-selected.png') : require('../../../assets/images/people-all-filter.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.filter2View}>
              <TouchableOpacity onPress={() => onChangeFilter(2)}>
                <Image source={selectedFilter === 2 ? require('../../../assets/images/people-image-filter-selected.png') : require('../../../assets/images/people-image-filter.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.filter3View}>
              <TouchableOpacity onPress={() => onChangeFilter(3)}>
                <Image source={selectedFilter === 3 ? require('../../../assets/images/people-video-filter-selected.png') : require('../../../assets/images/people-video-filter.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* {upData?.filter(el=>el.type === 'video').map(item=>{
      return (
        <VideoPlayer
          video={{ uri: item.source }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{ uri: item.thumbnail }}
      />
      )
    })} */}

          <View style={{ marginTop: 10 }}>
            <FlatList
              data={filteredData}
              showsHorizontalScrollIndicator={false}
              numColumns={3}
              style={{ alignSelf: filteredData?.length < 3 ? 'flex-start' : 'center' }}
              renderItem={({ item, index }) => {
                console.log("........::", item);
                return (
                  <View style={{ width: 115, marginHorizontal: index % 3 == 1 ? 5 : 0, height: 120, marginBottom: 5 }}>
                    <TouchableOpacity style={{ width: '100%', height: 'auto', backgroundColor: '#F8F8F8', alignSelf: 'center' }}
                      onPress={() => { setStartFromIndex(index); setShowPostsModal(true); }}>
                      {item.post_type === 'image' ?
                        <Image source={{ uri: item.media }} style={{ width: '100%', height: '100%', alignSelf: 'center', }} resizeMode='contain' ></Image>
                        :
                        <ImageBackground
                          // source={{ uri: item.thumbnail }} 
                          style={{ width: '100%', height: '100%', alignSelf: 'center', justifyContent: 'center', backgroundColor: 'gray' }} resizeMode='cover' >
                          <Image source={require('../../../assets/images/people-play-button.png')} style={{ width: '30%', height: '30%', alignSelf: 'center', }} resizeMode='contain' ></Image>
                        </ImageBackground>
                      }
                    </TouchableOpacity>
                  </View>
                )
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

        </View>
        <View style={{ height: 100 }} />

      </ScrollView>

      <PostsModal
        isVisible={showPostsModal}
        setIsVisible={setShowPostsModal}
        data={filteredData}
        startFromIndex={startFromIndex}
      />
      <ProfileScreenMoreModal
        isVisible={showMoreModal}
        setIsVisible={setShowMoreModal}
      />
      {loading ? <Loader /> : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  descriptionView: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.03,
    elevation: 1,
  },
  imageRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  followingView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#0089CF',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  numView: {
    alignItems: 'center',
    width: 90,
    height: 90,
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.03,
    elevation: 1,
  },
  numValue: {
    fontSize: 20,
    fontWeight: '500',
    color: '#455A64'
  },
  numText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#455A64'
  },
  blueButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0089CF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: '#0089CF',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  blueButtonSuperView: {
    justifyContent: 'center',
    backgroundColor: '#0089CF',
    width: 120,
    height: 40,
    borderRadius: 20,
    shadowColor: '#0089CF',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  blueButtonSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  blueButtonText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginLeft: 10
  },
  allFiltersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20
  },
  filter1View: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  filter2View: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  filter3View: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  threeDotsView: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 20
  },
});
export default Postfullview 