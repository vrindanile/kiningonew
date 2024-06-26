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

const ServiceBooking = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory]=useState('1')
  const [servicesList, setServicesList]=useState([
    {
        id: '1',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        serviceImg:require('../../../assets/images/service-product-image.png'),
        personImg:require('../../../assets/images/service-booking-person-image.png'),
        personName:'John Smith',
        serviceStatus:'Cancelled'
    },
    {
        id: '2',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        serviceImg:require('../../../assets/images/service-product-image.png'),
        personImg:require('../../../assets/images/service-booking-person-image.png'),
        personName:'John Smith',
        serviceStatus:'Completed'
    },
    {
        id: '3',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        serviceImg:require('../../../assets/images/service-product-image.png'),
        personImg:require('../../../assets/images/service-booking-person-image.png'),
        personName:'John Smith',
        serviceStatus:'Completed'
    },
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
   press2={()=>{}} title2={'My Booking'} fontWeight={'500'} img2height={20} color={'#fff'}
   press3={()=>{}} />

<View style={{marginTop:15,width:'90%',alignSelf:'center'}}>

<View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
    <View style={{width:'85%'}}>
      <ServiceSearch marginTop={0} placeholder={'Select'} 
      serchValue={searchValue}
      searchIcon={require('../../../assets/images/service-booking-caret-down.png')} 
      onChangeText={(e)=>{setsearchValue(e)}} 
      press={()=>{Alert.alert('Hi')}}
      presssearch={()=>{Alert.alert('Search Pressed')}}
      paddingLeft={20}/>
    </View>
    <View style={{width:'15%',flexDirection:'row', justifyContent:'flex-end'}}>
      <View style={{backgroundColor:'#6D2F91', height:50, width:50, borderRadius:10,alignItems:'center', justifyContent:'center',}}>
        <Image source={require('../../../assets/images/service-booking-filter-icon.png')} style={{width:30, height:30}}/>
      </View>
    </View>

</View> 
  <View style={{height:10}}/> 

<View style={{width:'95%',alignSelf:'center',marginTop:20}}>
<FlatList
                  data={servicesList}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={{width:dimensions.SCREEN_WIDTH*0.85, backgroundColor:'#fff',borderRadius:15, padding:10, paddingBottom:30,marginBottom:20, alignSelf:'center', shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
         >
                       {/* <View style={{width:dimensions.SCREEN_WIDTH*0.85, backgroundColor:'#fff',borderRadius:15, padding:10, paddingBottom:30,marginBottom:20, alignSelf:'center'}}> */}
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image source={item.personImg} style={{width:40,height:40,borderRadius:40/2}}></Image>
                </View>
                
                <View style={{flex:6, marginLeft:5, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:14, fontWeight:'500', color:'#455A64'}}>{item.personName}</Text>
                    {item.serviceStatus === 'Completed'? 
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <View style={styles.completedCircle}/>
                      <Text style={{fontSize:14, fontWeight:'400', color:'#29913C'}}>{item.serviceStatus}</Text>
                    </View>
                    :
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <View style={styles.cancelledCircle}/>
                      <Text style={{fontSize:14, fontWeight:'400', color:'#ED1C24'}}>{item.serviceStatus}</Text>
                    </View>
                    }
                 </View>

            </View>

            <View style={styles.seperatorView}/>          

            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image source={item.serviceImg} style={{width:60,height:60,borderRadius:60/2,alignSelf:'center'}}></Image>
                </View>
                
                <View style={{flex:4, marginLeft:10, marginTop:10}}>
                    <Text style={styles.unselectedTabText}>{item.title}</Text>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:3}}>
                        <Text style={styles.unselectedTabText}>${item.price}</Text>
                        <Text style={{fontSize:10,fontWeight:'400',color: '#455A64', marginLeft:40}}>${item.time}</Text>
                    </View>
                 </View>

            </View>
          
          {/* </View> */}
          </LinearGradient>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>






 </View>
<View style={{height:100}} />

</ScrollView>
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
  unselectedTabText:{
    fontSize:14,
    fontWeight:'500',
    color: '#263238'
  },
  bulletPoints:{
    fontSize:12,
    fontWeight:'400',
    color: '#263238'
  },
  addView:{
    marginTop:10,
    width:90,
    height:30,
    borderRadius:15,
    backgroundColor:'#ED1C24',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#6D2F91',
    shadowOffset: {width:3,height:3}, 
    shadowRadius: 5,
    shadowOpacity: 0.17,
    elevation: 2
  },
  seperatorView:{
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'#E0E0E0',
    marginVertical:15
  },
  completedCircle:{
    backgroundColor:'#29913C',
    width:15,
    height:15,
    borderRadius:15/2,
    marginRight:5
  },
  cancelledCircle:{
    backgroundColor:'#ED1C24',
    width:15,
    height:15,
    borderRadius:15/2,
    marginRight:5
  },
});
export default ServiceBooking 