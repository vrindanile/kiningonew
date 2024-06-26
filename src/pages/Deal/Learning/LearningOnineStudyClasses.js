import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import LearningSearch from './Components/LearningSearch';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Loader from '../../../WebApi/Loader';
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import {VideoModel} from './Components/VideoModel';

const LearningOnineStudyClasses = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory]=useState('1')
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState({isVisible: false, data: null});
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState({})
  const [videoDetails, setVideoDetails] = useState([
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`, title: 'Big Buck Bunny',},
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`, title: 'Big Buck Bunny',},
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`, title: 'Big Buck Bunny',},
  ])
const [teachersList, setTeachersList]=useState([
  {
      id: '1',
      title: 'John Smith',
      nameOfClass:'Graphics Design Class',
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/images/service-product-image.png'),
  },
  {
      id: '2',
      title: 'John Smith',
      nameOfClass:'Graphics Design Class',
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/images/service-product-image.png'),
  },
  {
      id: '3',
      title: 'John Smith',
      nameOfClass:'Graphics Design Class',
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/images/service-product-image.png'),
  },
])
  const [courseData, setCourseData]=useState([
    {
      id: '1',
      title: 'Learning Advisor',
      desc:'',
      time:'',
      img:require('../../../assets/images/learning-learning-advisor-image.png'),
    },
    {
      id: '2',
      title: 'Training Facilitator',
      desc:'',
      time:'',
      img:require('../../../assets/images/learning-training-facilitator-image.png'),
    },
    {
      id: '3',
      title: 'Web Development',
      desc:'',
      time:'',
      img:require('../../../assets/images/learning-web-development-image.png'),
    },
    {
      id: '4',
      title: 'Learning Advisor',
      desc:'',
      time:'',
      img:require('../../../assets/images/learning-learning-advisor-image.png'),
    },
    {
      id: '5',
      title: 'Training Facilitator',
      desc:'',
      time:'',
      img:require('../../../assets/images/learning-training-facilitator-image.png'),
    },
  ])
  const [upData,setupData]=useState([
    {
      id: '1',
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '2',
      catId: '2',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '3',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '4',
      catId: '4',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '5',
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '6',
      catId: '2',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/images/intel_motherboard.png'),
    },
    {
      id: '7',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/images/intel_motherboard.png'),
    },
  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])
 useEffect(()=>{
  generateThumb()
},[])
const toggleModal = state => {
  setShowModal({
    isVisible: state.isVisible,
    data: state.data,
  });
};
const generateThumb = async () => {
  setLoading(true)
  const thumbs = []
  try {
    for(let i = 0; i < videoDetails?.length; i++){
      const resp = await createThumbnail({
        url: videoDetails[0].url,
        timeStamp: 10000,
        // cacheName: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
      })
      thumbs.push(resp.path)
    }
    // const resp = await createThumbnail({
    //   url: videoDetails?.url,
    //   timeStamp: 10000,
    //   // cacheName: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
    // })
    const videoDetailsCopy = [...videoDetails]
    const updatedVideoDetails = videoDetailsCopy.map((el, index)=>{
      return {...el, thumbnail: thumbs[index]}
    })
    setVideoDetails([...updatedVideoDetails])
    // setVideoDetails({...videoDetails, thumbnail: resp.path})
  } catch (error) {
    console.log('thumbnail creating error', error);      
  }
  setLoading(false)
}

 const _renderItem = ({ item }) => {
  return (
      <Image source={{uri: item.image}} style={{width:'100%',height:170, borderRadius:20, alignSelf:'center'}}/>
    // <View key={item.key} style={styles.slide}>
    //   <Text style={styles.title}>{item.title}</Text>
    //   <Text style={styles.text}>{item.text}</Text>
    // </View>
  );
}

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{height:'100%', backgroundColor: '#F8F8F8'}}>
      <ScrollView>
    <HomeHeaderRoundBottom height={100} extraStyle={{paddingtop:10, paddingBottom:25}}  paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#29913C'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18} 
   press2={()=>{}} title2={'Onine Study Classes'} fontWeight={'500'} img2height={20} color={'#fff'}
   press3={()=>{}} img3={require('../../../assets/images/service-cart-icon.png')} img3width={25} img3height={20} />

<View style={{width:'85%',alignSelf:'center'}}>
<View style={{top:-20}}>
    <LearningSearch marginTop={0} placeholder={'Search for teachers'} 
    serchValue={searchValue}
    searchIcon={require('../../../assets/images/learning-search-icon.png')} 
    onChangeText={(e)=>{setsearchValue(e)}} 
    press={()=>{Alert.alert('Hi')}}
    presssearch={()=>{Alert.alert('Search Pressed')}}
    paddingLeft={20}/>
</View>
 
  <View style={{height:10}}/> 
  {showModal.isVisible ? (
        <VideoModel
          isVisible={showModal.isVisible}
          toggleModal={toggleModal}
          videoDetail={showModal.data}
          {...props}
        />
      ) : null}
  <View style={{width:dimensions.SCREEN_WIDTH*0.85,marginTop:10, marginBottom:10}}>
          <FlatList
                  data={videoDetails}
                  // showsHorizontalScrollIndicator={true}
                  // horizontal
                  numColumns={2}
                  renderItem={({item}) => (
                    <View style={styles.VideoThumbWrapper}>
                      <TouchableOpacity
                        onPress={() => {
                          setShowModal({
                            isVisible: true,
                            data: item,
                          });
                        }}>
                        <View style={styles.PlayIconContainer}>
                          <View style={styles.PlayIconWrapper}>
                            {/* <PlayIcon width={28} height={28} /> */}
                            <View style={{backgroundColor:'rgba(0, 0, 0, 0.4)', width:40, height:40, borderRadius:40/2,alignItems:'center', justifyContent:'center'}}>
                              <Image source={require('../../../assets/images/learning-play-button.png')} style={{width:25, height:25}}/>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={styles.BackGroundImage}
                          // theme={theme}
                          source={{uri:item?.thumbnail}}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
         </View>


 </View>
<View style={{height:100}} />

</ScrollView>
{loading ? <Loader /> : null}
<Modal
        isVisible={showVideoModal}
        swipeDirection="down"
        onBackdropPress={()=>setShowVideoModal(false)}
        onSwipeComplete={(e) => {
          setShowVideoModal(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '50%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end', marginBottom:30, marginTop:10}}>
            <TouchableOpacity onPress={()=>setShowVideoModal(false)} style={{}}>
              <Text style={{color:'#FF3B7F',fontWeight:'500', textAlign:'center'}}>Close</Text>
            </TouchableOpacity>
          </View>
          <VideoPlayer
            video={{ uri: selectedVideo?.url }}
            // videoWidth={1600}
            videoWidth={dimensions.SCREEN_WIDTH*0.9}
            videoHeight={250}
            // videoHeight={900}
            thumbnail={{ uri: selectedVideo?.thumbnail }}
            style={{marginRight:10, borderTopLeftRadius:15, borderTopRightRadius:15}}
            customStyles={{
              thumbnail: {width: dimensions.SCREEN_WIDTH*0.9, height:250},
              videoWrapper: {width: dimensions.SCREEN_WIDTH*0.9, height:250},
              // wrapper: {alignSelf:'center'},
            }}
          />
            </ScrollView>
           
            </View>
</Modal>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  unselectedTabText:{
    fontSize:14,
    fontWeight:'500',
    color: '#263238'
  },
  requestCallView:{
    marginTop:10,
    width:140,
    height:30,
    borderRadius:15,
    backgroundColor:'#29913C',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#6D2F91',
    shadowOffset: {width:3,height:3}, 
    shadowRadius: 5,
    shadowOpacity: 0.17,
    elevation: 2
  },
  videoContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  ModalOutsideContainer: {
    flex: 1,
  },
  VideoName: {
    paddingVertical: 1,
    paddingHorizontal: 2,
    fontSize: 16,
  },
  VideoThumbWrapper: {
    position: 'relative',
    width: '48%',
    marginRight: 8,
    marginBottom: 4,
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
    height: 100,
    justifyContent: 'center',
    borderRadius:15
  },
  ModalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: '25%',
  },
  ModalWrapper: {
    flex: 1,
  },
  ModalBox: {
    width: '85%',
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 2,
    opacity: 1,
  },
  VideoPlayerContainer: {
    width: '100%',
    height: 150,
  },
  VideoTitle: {
    paddingTop: 8,
    fontSize: 18,
  },
});
export default LearningOnineStudyClasses 