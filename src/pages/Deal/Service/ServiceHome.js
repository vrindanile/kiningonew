import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from '../../../component/HomeHeaderRoundBottom';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import ServiceSearch from './Components/ServiceSearch';
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

const ServiceHome = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory]=useState('1')
  const [introSliderData] = useState([
    // require('../../assets/Group75972.png'),
    {key:'one' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
    {key:'two' ,image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
    {key:'three' ,image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
])
  const [categoryData, setCategoryData]=useState([
    {
      id: '1',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/images/service-category-image.png'),
    },
    {
      id: '2',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/images/service-category-image.png'),
    },
    {
      id: '3',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/images/service-category-image.png'),
    },
    {
      id: '4',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/images/service-category-image.png'),
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
    <HomeHeaderRoundBottom height={100} extraStyle={{paddingtop:10, paddingBottom:25}}  paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#6D2F92'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/images/service-header-back-button.png')} img1width={25} img1height={18} 
   press2={()=>{}} title2={'Service'} fontWeight={'500'} img2height={20} color={'#fff'}
   press3={()=>{props.navigation.navigate('ServiceCart')}} img3={require('../../../assets/images/service-cart-icon.png')} img3width={25} img3height={20} />

<View style={{width:'85%',alignSelf:'center'}}>
<View style={{top:-20}}>
    <ServiceSearch marginTop={0} placeholder={'Search for Service'} 
    serchValue={searchValue}
    searchIcon={require('../../../assets/images/service-search-icon.png')} 
    onChangeText={(e)=>{setsearchValue(e)}} 
    press={()=>{Alert.alert('Hi')}}
    presssearch={()=>{Alert.alert('Search Pressed')}}
    paddingLeft={20}/>
</View>
 

  {/* <View style={{height:140,borderRadius:10,overflow:'hidden',marginVertical:10,width:'98%',alignSelf:'center'}}>
     <ImageSlider 
    //  localImg={true}
    data={[
        // require('../../assets/Group75972.png'),
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    onClick={(item, index) => {Alert.alert('hello'+index)}}
    autoPlay={true}
   // onItemChanged={(item) => console.log("item", item)}
    closeIconColor="transparent"
/>
   </View> */}

  <View style={{height:10}}/> 

  <AppIntroSlider
      data={introSliderData}
      renderItem={_renderItem}
      // renderPagination={() => null}
      renderDoneButton={()=><View />}
      renderNextButton={()=><View />}
      activeDotStyle={{top:60,backgroundColor:'#6D2F91'}}
      dotStyle={{top:60,backgroundColor:'#D9D9D9'}}
      keyExtractor={(item) => item.id}
    />

<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:40}}>
   <Text style={{fontSize:18,fontWeight:'500',color:'#263238'}}>Our Category</Text>
   <TouchableOpacity onPress={()=>{props.navigation.navigate('ServiceCategories')}}>
     <Text style={{fontSize:13,fontWeight:'400',color:'#6D2F91'}}>View all</Text>
   </TouchableOpacity>
</View>

<View style={{width:'100%',alignSelf:'center',marginTop:20}}>
          <FlatList
                  data={categoryData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={3}
                  renderItem={({item,index})=>{
                    return(
                      <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={{width:dimensions.SCREEN_WIDTH/3.8,marginHorizontal: index % 3 == 1 ? 10 : 0,marginVertical:5, shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
         >
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH/3.8,height:120, alignItems:'center', borderRadius:15, paddingHorizontal:10}}
          onPress={()=>{props.navigation.navigate('ServiceProductList', {name: item.title})}}>
          <LinearGradient
          colors={['rgba(247, 234, 255, 1)', 'rgba(255, 255, 255, 0)']}
          style={{justifyContent:'center', alignItems:'center', width:60,height:60,borderRadius:60/2, marginTop:10}}
         >
          <Image source={item.img} style={{width:40,height:40}} resizeMode='contain'></Image>
         </LinearGradient>
          
          <Text style={{fontSize:13,fontWeight:'500',color:'#263238',marginTop:5,textAlign:'center',fontWeight:'600'}}>{item.title}</Text>
          </TouchableOpacity>
          </LinearGradient>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>






 </View>
<View style={{height:100}} />

</ScrollView>
  <TouchableOpacity onPress={()=>{props.navigation.navigate('ServiceBooking')}} style={styles.bookingsView}>
      <Image source={require('../../../assets/images/service-bookings-icon.png')} style={{width:30}}/>
      <Text style={styles.bookingsText}>My Booking</Text>
  </TouchableOpacity>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  bookingsView:{
    position:'absolute',
    bottom:20,
    right:20,
    paddingVertical:20,
    paddingHorizontal:10,
    // marginTop:30,
    borderRadius:25, 
    backgroundColor:'#6D2F91', 
    // width:'30%',
    alignSelf:'center', 
    // height:100, 
    // width:100, 
    // justifyContent:'center', 
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 3
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    elevation: 1,
  },
  bookingsText:{
    fontSize:14,
    fontWeight:'500',
    color:'#fff',
    marginTop:5
  },
});
export default ServiceHome 