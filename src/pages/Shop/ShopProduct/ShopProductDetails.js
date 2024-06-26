import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import { Rating } from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';
import Toggle from "react-native-toggle-element";
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setSelectedCarTab } from '../../../redux/actions/user_action';
import DatePicker from 'react-native-datepicker';

const ShopProductDetails = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [selectedTab,setselectedTab]=useState('Description')
  const [cookingIns,setcookingIns]=useState('')
  const [selectedTime,setselectedTime]=useState('1')
  const [selectedTime2,setselectedTime2]=useState('1')
  const [counter,setcounter]=useState(1)
  const [date, setDate] = useState('')
  const [toggleValue, setToggleValue] = useState(false);
  const [modlevisual1,setmodlevisual1] = useState(false)
  const [modlevisual2,setmodlevisual2] = useState(false)
  const [modlevisual3,setmodlevisual3] = useState(false)
  const [modlevisual4,setmodlevisual4] = useState(false)
  const [dayData, setDayData]=useState([{dayPart:'Day', id: 1},{dayPart:'Afternoon', id: 2},{dayPart:'Evening', id: 3}])
  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Hair Cut',
      desc:'',
      time:'10:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      title: 'Shaving',
      desc:'',
      time:'10:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      title: 'Facial',
      desc:'',
      time:'11:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      title: 'Hair Color',
      desc:'',
      time:'11:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '5',
      title: 'Hair wash',
      desc:'',
      time:'12:00PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '6',
      title: 'Beard style',
      desc:'',
      time:'12:30PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '7',
      title: 'Facial',
      desc:'',
      time:'01:00PM',
      img:require('../../../assets/images/images.png'),
    },
  ])
  useEffect(()=>{

 },[])


const design=(img,ti,tit,w,imgh,imgw,bg,redious)=>{
  return(
    <View style={{flexDirection:'row',alignItems:'center',width:w,marginTop:10}}>
   <View style={{width:40,height:40,backgroundColor:bg,justifyContent:'center',borderRadius:redious}}>
    <Image source={img} style={{width:imgw,height:imgh,overflow:'hidden',alignSelf:'center'}}></Image>
   </View>
   <View style={{marginLeft:5,width:'85%'}}>
    <Text style={{fontSize:10,fontWeight:'bold',color:Mycolors.Black}}>{ti}</Text>
    <Text style={{fontSize:10,color:Mycolors.GrayColor,top:3}}>{tit}</Text>
   </View>
   
  </View>
  )
}


const flatliistDesign=(img,ti,rs,des,press,allpress)=>{
  return(
    <TouchableOpacity style={{width:'95%',height:120,marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
    borderColor:'#dee4ec',
    borderWidth:1,
    elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
    onPress={allpress}>
<View style={{width:60,height:75,alignSelf:'center',borderRadius:5,borderWidth:3,borderColor:'#dee4ec'}}>
<Image source={img}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{ti}</Text>
<Text style={{color:Mycolors.RED,fontWeight:'600',fontSize:12,marginTop:9}} >{rs}</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >Food Preparation Time:</Text>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{des}</Text>
</View>



{press ?
<View style={{width:70}}>
<MyButtons title="ADD" height={30} width={'100%'} borderRadius={5} alignSelf="center" press={press} marginHorizontal={20} fontSize={11}
titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} />
</View>
: null
}
</View>
  <View style={{position:'absolute',width:20,height:20,top:10,right:10,borderRadius:3,backgroundColor:'red',justifyContent:'center'}}>
  <View style={{width:10,height:10,borderRadius:10,alignSelf:'center',backgroundColor:'#fff'}} />
  </View>
</TouchableOpacity>
  )
}

  return(
    <SafeAreaView style={{height:'100%', backgroundColor: '#F8F8F8'}}>
      <ScrollView>
      <HomeHeader height={60}  paddingHorizontal={15}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1backgroundColor={'#fff'} img1width={30} img1height={30} img1padding={5} img1borderRadius={4} 
   press2={()=>{}} title2={'24/7 Hardware Store'} fontWeight={'500'} img2height={20}
   press3={()=>{}} />
 <View style={{height:200,borderRadius:20,overflow:'hidden',marginTop:40,width:'96%',alignSelf:'center'}}>
     <ImageSlider 
    //  localImg={true}
    data={[
        // require('../../assets/Group75972.png'),
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
   // onClick={(item, index) => {alert('hello'+index)}}
    autoPlay={true}
   // onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>
   </View>

<View style={{width:'96%',alignSelf:'center',backgroundColor:'#F8F8F8'}}>

<View style={{width:'96%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',backgroundColor:'#F8F8F8',borderRadius:9,paddingVertical:10}}>
  <View>
<Text style={{color:Mycolors.Black,fontWeight:'600'}}>Intel 3rd Gen Motherboard</Text>
<Text style={{color:Mycolors.GrayColor,fontSize:13,fontWeight:'500',marginVertical:4}}>Electronics</Text>
  </View>

  <View>
    <Text style={{color:'#FFC40C', textAlign:'right', fontSize:16}}>$140.00</Text>
    <Text style={{color: Mycolors.GrayColor, fontSize:11}}>30% off, $200</Text>
  </View>

</View>

<View style={{flexDirection:'row',}}>
<View style={{width:'32%'}}>
<MyButtons title="Description" height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Description')}} marginHorizontal={20} fontSize={10}
  titlecolor={selectedTab=='Description' ? Mycolors.BG_COLOR : Mycolors.Black} marginVertical={0} backgroundColor={selectedTab=='Description' ? '#FFC40C' : 'transparent'}/>
</View>

<View style={{width:'32%', marginLeft:20}}>
<MyButtons title="Store Location" height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Store Location')}} marginHorizontal={20} fontSize={12}
  titlecolor={selectedTab=='Store Location' ? Mycolors.BG_COLOR : Mycolors.Black} marginVertical={0} backgroundColor={selectedTab=='Store Location' ? '#FFC40C' : 'transparent'}/>
</View>

</View>



{selectedTab=='Description' ? 
<View>
<View style={{width:'95%',alignSelf:'center'}}>
<ViewMoreText
          numberOfLines={3}
          renderViewMore={(onPress)=>{
            return(
              <Text onPress={onPress} style={{color:'#FFC40C',textDecorationLine: "underline"}}>View more</Text>
            )
          }}
          renderViewLess={(onPress)=>{
            return(
              <Text onPress={onPress} style={{color:'#FFC40C',textDecorationLine: "underline"}}>View less</Text>
            )
           }}
          textStyle={{textAlign: 'left',width:'95%'}}
        >
          <Text style={{color:Mycolors.DARK_GREY}}>
          In publishing and graphic design, Lorem ipsum is a place-
          holder text commonly used to demonstrate the visual form
          of a document or a typeface without relying on meaningful
          of a document or a typeface without relying on meaningful
          content.
          </Text>
</ViewMoreText>
<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:20, marginBottom:20,}}>
  <Text style={{color:Mycolors.Black,fontWeight:'600'}}>Explore Similar Products</Text>
  <Text style={{color:'#FFC40C',textDecorationLine: "underline", textDecorationColor:'#FFC40C'}} onPress={()=>{}}>View More</Text>
</View>

<FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={true}
                  horizontal
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:dimensions.SCREEN_WIDTH/2.2,marginHorizontal:5}}>
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH/2.2,height:170,backgroundColor:'#fff',alignSelf:'center', borderRadius:15, overflow:'hidden'}}
          onPress={()=>{props.navigation.navigate('ShopProductDetails')}}>
          <Image source={item.img} style={{width:'100%',height:'100%',alignSelf:'center'}}></Image>
          </TouchableOpacity>
          <View style={{}}>
          <Text style={{fontSize:11,color:Mycolors.Black,marginTop:5,textAlign:'left',fontWeight:'bold'}}>{item.title}</Text>
          </View>
          <View style={{padding:5,paddingLeft:0,top:-5}}>
          <Text style={{fontSize:9,color:Mycolors.GrayColor,marginTop:5,textAlign:'left',}}>{item.price}</Text>
          </View>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
</View>
 
  
</View>
:
selectedTab=='Store Location' ? 
<View>
<View style={{width:'100%',alignSelf:'center',marginTop:10}}>
<View style={{width:'95%',marginTop:15,alignSelf:'center'}}>
  
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row'}}>
    <Image source={require('../../../assets/images/store_image.png')}/>
    <View style={{marginLeft:15, marginTop:5}}>
      <Text style={{fontSize:16, fontWeight:'500', color:'#263238'}}>Favlily Store</Text>
      <View style={{flexDirection:'row',marginTop:5}}>
        <Image source={require('../../../assets/images/Star.png')} style={{width:18,height:18}}></Image>
        <Text style={{color:Mycolors.Black,fontSize:14,fontWeight:'600',left:5}}>4.5</Text>
      </View>
    </View>
    </View>
    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:5,height:45, width:'35%', borderRadius:20, backgroundColor:'#FFC40C', shadowColor:  '#000',shadowOffset: {width:3,height:3}, shadowRadius: 5,shadowOpacity: 1.0,elevation: 5}}>
      <Text style={{fontSize:14, fontWeight:'500',color:'#fff'}}>Contact store</Text>
    </TouchableOpacity>
  </View>

  <Text style={{fontSize:14, fontWeight:'400', color:'#455A64', marginTop:15}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

  <View style={{flexDirection:'row', marginTop:15}}>
    <Image source={require('../../../assets/images/product_location2.png')} style={{height:30, width:30, flex:1 }} resizeMode='contain'/>
    <View style={{marginLeft:15, flex:4}}>
      <Text style={{fontSize:14, fontWeight:'500', color:'#455A64'}}>Location</Text>
      <Text style={{fontSize:14, fontWeight:'500', color:'#B2B7B9'}}>500 S Buena Vista St, Burbank, CA 91521, United States</Text>
    </View>
    <Image source={require('../../../assets/images/product_google_maps_2.png')} style={{height:42, width:42, flex:2 }} resizeMode='contain'/>
  </View>

</View>
</View>

</View>
:
null
}
 </View>

 

<View style={{height:100}} />

</ScrollView>
{selectedTab=='Description' ? 
<View style={{width:'100%',position:'absolute',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:80, borderTopLeftRadius:10, borderTopRightRadius:10,bottom:10, paddingHorizontal:20, backgroundColor:'#fff'}}>
<MyButtons title="Add to Cart" height={45} width={'48%'} borderRadius={5} press={()=>{
}} fontSize={12}
  titlecolor={'#FFC40C'} marginVertical={0} backgroundColor={'#FFF'} borderColor={'#FFC40C'} borderWidth={1}/>
<MyButtons title="Buy Now" height={45} width={'48%'} borderRadius={5} press={()=>{
setmodlevisual4(true)}} fontSize={12}
  titlecolor={Mycolors.BG_COLOR} marginVertical={0} backgroundColor={'#FFC40C'}/>
</View>
: null
}
{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model1 Search Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual1}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual1(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '70%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <View style={{paddingHorizontal:4}}>
               <SearchInput2 marginTop={10} placeholder={'Restaurant Name. Cuisine, Dishes'} 
          serchValue={searchValue} 
          onChangeText={(e)=>{setsearchValue(e)}} 
          press={()=>{Alert.alert('Hi')}}
          presssearch={()=>{Alert.alert('Search Pressed')}}
          paddingLeft={50}/>
            </View>
        
         <Text style={{fontWeight:'bold',fontSize:16,marginTop:15,left:5,color:'#cbcbcb'}}>7 Result Found</Text>
        
          <View style={{width:'100%',alignSelf:'center',marginTop:10}}>
          {
      upData.map((item,index)=> {
        return(
          <View>
          {flatliistDesign(require('../../../assets/images/layer_40.png'),'Match Time Feast','$140.00',' 34 minutes',()=>{Alert.alert('Add Pressed')},()=>{})}
           </View>
        )
      }
      )
    }
         
         </View>

            <View style={{width:100,height:100}} />
            </ScrollView>
           
            </View>
</Modal>

{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model2 Product Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual2}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual2(false)
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
        
          <TouchableOpacity style={{width:'95%',height:90,marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
    borderColor:'#dee4ec',
    borderWidth:1,
    elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
   >
<View style={{width:60,height:75,alignSelf:'center',borderRadius:5,borderWidth:3,borderColor:'#dee4ec'}}>
<Image source={require('../../../assets/images/layer_40.png')}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >Match Time Feast</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >Food Preparation Time:</Text>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} > 34 minutes</Text>
</View>
</View>
<View style={{position:'absolute',width:20,height:20,top:10,right:10,borderRadius:3,backgroundColor:'red',justifyContent:'center'}}>
  <View style={{width:10,height:10,borderRadius:10,alignSelf:'center',backgroundColor:'#fff'}} />
  </View>
 </TouchableOpacity>
        
          <View style={{width:'95%',height:100,borderRadius:2,marginTop:10,alignSelf:'center'}}>

          <TextInput
                value={cookingIns}
                onChangeText={(e) => setcookingIns(e)}
                placeholder={'Add Cooking Instruction'}
                placeholderTextColor="#bbbbbb"
                multiline={true}
              // maxLength={500}
              // keyboardType="number-pad"
                autoCapitalize = 'none'
                style={[styles.input]}
              />

          </View>

          <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginVertical:15}}>
          <Text style={{color:Mycolors.Black,fontWeight:'500'}}>Total Payable Amount</Text>
          <Text style={{color:Mycolors.Black,fontWeight:'500'}}>$140.00</Text>
          </View>        
          <View style={{width:'95%',alignSelf:'center'}}>
          <MyButtons title="Proceed to payment" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{props.navigation.navigate('ShopPayment')}} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027','#fd001f']}/>
          </View>

            <View style={{width:100,height:100}} />
            </ScrollView>
           
            </View>
</Modal>

{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model3 Book A Table sloat Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual3}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual3(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '70%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        
        <Text style={{fontWeight:'bold',color:Mycolors.Black,marginVertical:10}}>Book A Slot</Text>
        
        {flatliistDesign(require('../../../assets/images/layer_40.png'),'Match Time Feast','$140.00',' 34 minutes',null,()=>{}   )}

        <View style={{width:'95%',marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:Mycolors.TimingColor,
              borderColor:Mycolors.RED,borderWidth:0.2,borderRadius:7,alignSelf:'center',}}
            >
        <Text style={{fontSize:12,fontWeight:'500',color:Mycolors.Black}}>Enter number of person</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{marginTop:10}}>
<Text style={{fontSize:11,fontWeight:'500',color:Mycolors.Black}}>Person</Text>
<Text style={{fontSize:10,fontWeight:'500',color:Mycolors.RED,marginTop:4}}>{counter}</Text>
</View>
<View style={{width:65,right:5,borderWidth:0.2,borderColor:Mycolors.RED,borderRadius:2}}>
<HomeHeader height={21}  paddingHorizontal={7}
   press1={()=>{counter<=0 ? setcounter(1) : setcounter(counter-1) }} img1={require('../../../assets/images/remove.png')} img1width={10} img1height={3} 
   press2={()=>{}} title2={counter} fontWeight={'500'} img2height={20} fontSize={12}
   press3={()=>{setcounter(counter+1)}} img3={require('../../../assets/images/add.png')} img3width={10} img3height={10} />
</View>
        </View>

          </View>

          <TouchableOpacity style={{width:'95%',height:50,marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:Mycolors.TimingColor,
              borderColor:'#dee4ec',borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
            >
          <View style={{width:25,height:25,alignSelf:'center',top:-2}}>
          <Image source={require('../../../assets/images/shape_42.png')}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
          </View>
          <View style={{marginLeft:10}}>
          <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:11,}} >Timings</Text>
          <Text style={{color:Mycolors.GrayColor,fontWeight:'400',fontSize:10,marginTop:4}} >10-00AM- 11-00 PM</Text>
          </View>
          </TouchableOpacity>

          <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginVertical:10}}>
          <Text style={{color:Mycolors.Black,fontWeight:'500',fontSize:13}}>Select From Available Slot</Text>
          </View> 

          <View style={{width:'97%',alignSelf:'center'}}>
          <FlatList
                  data={upData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:90,marginHorizontal:5}}>
          <TouchableOpacity style={{width:90,height:40,justifyContent:'center',borderWidth:0.5,borderRadius:5,borderColor:selectedTime==item.id ? Mycolors.RED: Mycolors.GrayColor}}
          onPress={()=>{setselectedTime(item.id)}}>
          <Text style={{fontSize:11,color:selectedTime==item.id ? Mycolors.RED: Mycolors.GrayColor,textAlign:'center',fontWeight:'bold'}}>{item.time}</Text>
          </TouchableOpacity>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>

           <View style={{width:'95%',height:100,borderRadius:2,marginTop:25,alignSelf:'center'}}>

          <TextInput
                value={cookingIns}
                onChangeText={(e) => setcookingIns(e)}
                placeholder={'Add Cooking Instruction'}
                placeholderTextColor="#bbbbbb"
                multiline={true}
              // maxLength={500}
              // keyboardType="number-pad"
                autoCapitalize = 'none'
                style={[styles.input]}
              />

          </View>       
          <View style={{width:'95%',alignSelf:'center'}}>
          <MyButtons title="Confirm & Book Store Location Slot" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{}} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027','#fd001f']}/>
          </View>

            <View style={{width:100,height:100}} />
            </ScrollView>
           
            </View>
</Modal>
{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model4 Book A Sloat Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual4}
        swipeDirection="down"
        onBackdropPress={()=>{setmodlevisual4(false)}}
        onSwipeComplete={(e) => {
          setmodlevisual4(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '57%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <View style={{backgroundColor:'rgba(255, 196, 12, 0.1)', paddingVertical:10}}>
          <Text style={{fontWeight:'bold',color:Mycolors.Black,marginVertical:10,marginHorizontal:20,}}>Select Pickup date and time</Text>
        </View>
        
        <View style={{padding:20}}>
          
        <View style={{height:50,marginTop:10, marginBottom:30, padding:10,backgroundColor:'#fff',
              borderColor:'#dee4ec',borderRadius:7,flexDirection:'row',alignItems:'center',shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 1,
              shadowOpacity: 0.1,
              justifyContent: 'center',
              elevation: 3,}}
            >

       <DatePicker
          customStyles={{
            dateInput: {borderColor:'transparent',left:-90},
            dateText: {color:Mycolors.Black},
            dateIcon: styles.dateIcon,
            dateplaceholder: {
              alignContent: 'flex-start',
             
            },
            placeholderText: {
              fontSize: 15,
              color: Mycolors.GrayColor,
              marginLeft: '5%',
              // left:100
            },
            zIndex:99999
          }}
         
          androidMode={'spinner'}
          readOnly={true}
          style={[styles.datePickerSelectInput]}
          date={date}
          mode="date"
          placeholder={'Select date'}
          minDate={new Date ()}
          format='YYYY-MM-DD'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require ('../../../assets/images/shape_38.png')}
          onDateChange={date => {
            setDate(date)
          }}
        />



          </View>
        <FlatList
                  data={dayData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index})=>{
                    return(
          <TouchableOpacity style={{flexDirection:'row',width:100,marginRight:10,height:40,justifyContent:'space-between',alignItems:'center',borderWidth:0.5,borderRadius:5,paddingHorizontal:10,borderColor:selectedTime==item.id ? '#FFC40C': Mycolors.GrayColor, backgroundColor: selectedTime==item.id ? 'rgba(255, 196, 12, 0.05)' : 'transparent'}}
          onPress={()=>{setselectedTime(item.id)}}>
          <Text style={{fontSize:11,color:selectedTime==item.id ? '#FFC40C': Mycolors.GrayColor,textAlign:'center',fontWeight:'bold'}}>{item.dayPart}</Text>
          {selectedTime==item.id ? 
            <Image source={require('../../../assets/images/product_sel_circle.png')}  style={{width:20,height:20,alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
            :
            <Image source={require('../../../assets/images/ent_unsel_circle.png')}  style={{width:20,height:20,alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
          }
          </TouchableOpacity>
                    )
                  }}
                  keyExtractor={item => item.id}
                />  
                <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <Text style={{color:Mycolors.Black,fontWeight:'500',fontSize:13}}>Select Time Slot</Text>
          </View> 

          <View style={{width:'97%',marginTop:10}}>
          <FlatList
                  data={upData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:90,marginRight:5}}>
          <TouchableOpacity style={{width:90,height:40,justifyContent:'center',borderWidth:0.5,borderRadius:5,borderColor:selectedTime2==item.id ? '#FFC40C' : Mycolors.GrayColor, backgroundColor: selectedTime2==item.id ? 'rgba(255, 196, 12, 0.05)' : 'transparent'}}
          onPress={()=>{setselectedTime2(item.id)}}>
          <Text style={{fontSize:11,color:selectedTime2==item.id ? '#FFC40C' : Mycolors.GrayColor,textAlign:'center',fontWeight:'bold'}}>{item.time}</Text>
          </TouchableOpacity>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
                
                <MyButtons title="Confirm & Proceed To Payment" height={45} width={'100%'} borderRadius={5} press={()=>{
}} marginHorizontal={20} fontSize={12} alignSelf='center'
  titlecolor={Mycolors.BG_COLOR} marginVertical={30} backgroundColor={'#FFC40C'}/>
         </View>


            <View style={{width:100,height:100}} />
            </View>
            </ScrollView>
           
            </View>
</Modal>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    width:'100%',
    fontSize: 13,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth:0.5,
   // backgroundColor: '#34333a',
    color:'#fff',
    height:80,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
    color:Mycolors.Black
  },
  dateIcon:{
    width:22,
    height:23,
    // marginRight:20
  },
  datePickerSelectInput:{
    height: 45,
    width:'100%',
    fontSize: 15,
    borderColor: null,
    backgroundColor: '#fff',
    borderRadius:10,
    color:'#fff',
  },
});
export default ShopProductDetails 