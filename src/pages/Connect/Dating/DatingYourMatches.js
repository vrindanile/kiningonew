import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'
import ViewMoreText from 'react-native-view-more-text';

const DatingYourMatches = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [matchesValues, setMatchesValues] = useState([
    {id:'1',name:'Rose', img: require('../../../assets/images/dating-your-matches-person-image.png')}, 
    {id:'2',name:'Rose', img: require('../../../assets/images/dating-your-matches-person-image.png')}, 
    {id:'3',name:'Rose', img: require('../../../assets/images/dating-your-matches-person-image.png')}, 
    {id:'4',name:'Rose', img: require('../../../assets/images/dating-your-matches-person-image.png')}, 
    {id:'5',name:'Rose', img: require('../../../assets/images/dating-your-matches-person-image.png')},
  ])
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '2',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '3',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '4',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },

  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])

 const changeSaved = (id) => {
  const updataCopy = [...upData]
  const updatedData = updataCopy?.map(el=>el.id === id ? {...el, isSaved: !el.isSaved }: el)
  setupData([...updatedData])
 }
 const changeLiked = (id) => {
  const updataCopy = [...upData]
  const updatedData = updataCopy?.map(el=>el.id === id ? {...el, isLiked: !el.isLiked }: el)
  setupData([...updatedData])
 }

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#fff5f7', height:'100%'}}>
      <ScrollView>
      <View style={{flexDirection:'row', alignItems:'center', height:80,padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{flex:1}}>
    <Image source={require('../../../assets/images/dating-back-arrow.png')} style={{width:25, height:15}} resizeMode='contain'/>
  </TouchableOpacity>
  <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:12.5, fontWeight:'600', color:'#31313f'}}>Your Matches</Text>
  </View>
  <View style={{flex:1}}/>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>

<View style={{marginBottom:20}}>
  <Text style={{fontSize:22, fontWeight:'500',color:'#FF3B7F',marginBottom:5}}>Your Matches</Text>
  <Text style={{fontSize:14, fontWeight:'400',color:'#455A64'}}>Here you can see people who liked you</Text>
</View>

<View style={{width:'100%',alignSelf:'center',}}>
  <FlatList
      data={matchesValues}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      style={{alignSelf:'center'}}
      keyExtractor={item => item.id}
      renderItem={({item,index})=>{
        return(
          <View key={item.name} style={styles.flatListView}>
            <Image source={item.img} style={styles.flatListImage} />
            <View style={styles.absoluteView}>
              <Text style={styles.nameStyle}>{item.name}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonView}>
                  <Image source={require('../../../assets/images/dating-matches-reject-icon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonView}>
                  <Image source={require('../../../assets/images/dating-matches-love-icon.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      }}
    />
</View>

 </View>
<View style={{height:100}} />

</ScrollView>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  flatListView:{
    width:dimensions.SCREEN_WIDTH/2.2,
    marginHorizontal:5,
    height:250, 
    marginBottom:10
  },
  flatListImage:{
    width:'100%',
    height:'100%',
    alignSelf:'center',
    borderRadius:15
  },
  absoluteView:{
    position:'absolute',
    bottom:10,
    left:dimensions.SCREEN_WIDTH/(2.2*4)
  },
  nameStyle:{
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
    textAlign:'center'
  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    width:100,
    marginTop:10
  },
  buttonView:{
    width:40,
    height:40,
    borderRadius:40/2,
    backgroundColor:'#FFF1ED',
    alignItems:'center',
    justifyContent:'center'
  }
});
export default DatingYourMatches 