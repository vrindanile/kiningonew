import React, { useEffect, useState, useRef } from 'react';
import { RefreshControl, View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import { Rating } from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';
import Toggle from "react-native-toggle-element";
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setSelectedCarTab } from '../../../redux/actions/user_action';
import DatePicker from 'react-native-datepicker';
import { baseUrl, shop_eat_cart, shop_eat_cart_id, shop_eat_coupons_userid, shop_eat_cart_apply_coupon, login, shop_eat_business, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat } from '../../../WebApi/Service'
import Loader from '../../../WebApi/Loader';
import Toast from 'react-native-simple-toast'
import MyAlert from '../../../component/MyAlert';
import { useSelector, useDispatch } from 'react-redux';
import Geolocation from "react-native-geolocation-service";
import { GoogleApiKey } from '../../../WebApi/GoogleApiKey'
import DropDownPicker from 'react-native-dropdown-picker';

Geolocation.setRNConfiguration(GoogleApiKey);

const ShopEatFilter = (props) => {
  const person_Image = "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  const [checkitem, setcheckitem] = useState('')
  const [res, setres] = useState('')

  const User = useSelector(state => state.user.user_details)
  const VenderDetails = useSelector(state => state.user.venderDeatil)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [resData, setresData] = useState([])
  const [filterClick, setfilterClick] = useState(false)
  const [rescopun, setrescopun] = useState([{ "coupon_code": "KINENGO3", "coupon_name": "Dummy Coupon", "coupon_type": "flat", "discount_id": 9, "discount_value": "3.00", "expred_on": "2023-10-31", "image": "http://54.153.75.225/images/app-icons/offer2.jpg", "min_order_value": 10 }])
  const [discount_id, setdiscount_id] = useState(null)
  const [discountPrice, setdiscountPrice] = useState('0.0')
  const [subTotal, setsubTotal] = useState('0.0')
  const [dilivery, setdilivery] = useState('0.0')
  const [totla, settotal] = useState('0.0')
  const [applyedCoupen, setapplyedCoupen] = useState('')
  const [modlevisual, setmodlevisual] = useState(false)
  const [searchValue, setsearchValue] = useState('')
  const [refreshing, setRefreshing] = useState(false);
  const [lat, setlat] = useState('')
  const [long, setlong] = useState('')
  const [filterData, setFilterData] = useState([
    {
      id: 1,
      title: 'Fast Delivery'
    },
    {
      id: 2,
      title: 'Veg'
    },
    {
      id: 3,
      title: 'Non Veg'
    },
    {
      id: 4,
      title: 'Rated 4+'
    }
  ])
  const [serviceOpen, setserviceOpen] = useState(false);
  const [servicevalue, setservicevalue] = useState([]);

  const [servicedate, setservicedate] = useState([
    { label: 'Relevance', value: 'Relevance' },
    { label: 'Rating', value: 'Rating' },
    { label: 'Delivery Time', value: 'Delivery Time' },
    { label: 'Price', value: 'Price' },
  ]);

  useEffect(() => {
    console.log('hello ji ==>>', User);
    getData()
    myposition()
  }, [])

  const checkcon = () => {
    getData()
  }
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    // setRefreshing(true);
    // fetchSuccessDetails()
    checkcon()
    wait(2000).then(() => {

      setRefreshing(false)

    });
  }, []);


  const myposition = () => {
    Geolocation.getCurrentPosition(
      position => {
        let My_cord = { latitude: position.coords.latitude, longitude: position.coords.longitude }

        setlat(position.coords.latitude)
        setlong(position.coords.longitude)
      },
      error => {
        // Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );
  }

  const getData = async (urls) => {

    setLoading(true)
    //'?name='+searchValue.text+'&lat='+lat+'&long='+long
    var fUrl = shop_eat_business
    if (urls != undefined) {
      fUrl = fUrl + urls
    }
    const { responseJson, err } = await requestGetApi(fUrl, '', 'GET', User.token)
    setLoading(false)
    console.log('the res get shop_eat_business ==>>', responseJson.body)
    if (responseJson.headers.success == 1) {
      //setres(responseJson.body)
      setresData(responseJson.body)
    } else {
      //  setalert_sms(err)
      //  setMy_Alert(true)
    }

  }

  const makeUrl = (val) => {
    if (val == 'Rating') {
      var murl = '?lat=' + lat + '&long=' + long + '&sortBy=rating_desc'
      return murl
    } else if (val == 'Relevance') {
      var murl = '?lat=' + lat + '&long=' + long + '&sortBy=rating_desc'
      return murl
    } else {
      return undefined
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}

          />
        }
      >
        <HomeHeader height={60} paddingHorizontal={15} backgroundColor={'#fff'}
          press1={() => { props.navigation.goBack() }} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15}
          press2={() => { }} title2={'Food'} fontWeight={'500'} img2height={20}
          press3={() => { }} img3width={25} img3height={25} />

        <View style={{ width: '92%', alignSelf: 'center' }}>
          <View>
            <SearchInput2 marginTop={10} placeholder={'Search...'}
              serchValue={searchValue}
              // value={props.serchValue}
              onChangeText={(e) => { setsearchValue(e) }}
              press={() => { Alert.alert('Hi') }}
              presssearch={() => {
                var murl = '?name=' + searchValue.text + '&lat=' + lat + '&long=' + long
                getData(murl)
              }}
              paddingLeft={50} />
            <View style={{ position: 'absolute', right: 5, top: 13, backgroundColor: 'red', paddingHorizontal: 10, height: 40, justifyContent: 'center', borderRadius: 5 }}>
              <TouchableOpacity onPress={() => { setfilterClick(!filterClick) }} style={{ with: '100%', height: '100%', justifyContent: 'center', }}>
                <Image source={require('../../../assets/filter.png')} style={{ width: 18, height: 18, resizeMode: 'stretch', top: 2 }} ></Image>
              </TouchableOpacity>
            </View>
          </View>
          {filterClick ?
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 100, zIndex: 999, backgroundColor: 'red', borderRadius: 5, marginTop: 15, height: 40 }}>
                <DropDownPicker
                  open={serviceOpen}
                  value={servicevalue}
                  items={servicedate}
                  //multiple={true}
                  setOpen={() => { setserviceOpen(!serviceOpen) }}
                  setValue={(v) => { setservicevalue(v) }}
                  setItems={(i) => { setservicedate(i) }}
                  //listMode="MODAL"
                  placeholder="Sort by"
                  onChangeValue={(value) => {
                    setservicevalue(value)
                    getData(makeUrl(value))
                  }}
                  placeholderStyle={{
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: "600"
                  }}
                  textStyle={{
                    color: '#000',
                    //  fontSize:5
                  }}
                  style={{ borderColor: 'transparent', backgroundColor: 'red', height: 40 }}
                  containerStyle={{
                    borderColor: 'red',
                    height: 40
                  }}
                  disabledStyle={{
                    opacity: 0.5
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: "#fff",
                    borderColor: '#000',
                    borderWidth: 0.2,
                    shadowColor: '#000000',
                    shadowOffset: {
                      width: 0,
                      height: 3
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0,
                    elevation: 5,
                    zIndex: 999
                  }}
                />
              </View>
              <View style={{ width: '100%', alignSelf: 'center', marginTop: 15 }}>

                <FlatList
                  data={filterData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  // numColumns={2}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={{ marginHorizontal: 5, }}>
                        <TouchableOpacity style={{ backgroundColor: 'red', justifyContent: 'center', padding: 10, borderRadius: 5 }}
                          onPress={() => { }}>
                          <Text style={{ color: '#fff' }}>{item.title}</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />

              </View>
            </View>
            : null}



          <View style={{ width: '100%', alignSelf: 'center', marginTop: 20, zIndex: -999 }}>
            {
              resData.map((item, index) => {
                return (
                  <View style={{
                    width: '100%', marginHorizontal: 5, alignSelf: 'center', backgroundColor: '#fff', marginVertical: 10, borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3
                    },
                    shadowRadius: 1,
                    shadowOpacity: 0.3,
                    justifyContent: 'center',
                    elevation: 5, paddingBottom: 15
                  }}>
                    <TouchableOpacity style={{ width: '100%', height: 180, backgroundColor: Mycolors.LogininputBox, alignSelf: 'center' }}
                      onPress={() => {
                        props.navigation.navigate('FoodDetails', { data: item })
                        // dispatch(setVenderDetail(item))
                      }}>
                      <Image source={{ uri: item.banner_image }} style={{ width: '100%', height: '100%', alignSelf: 'center', borderTopLeftRadius: 7, borderTopRightRadius: 7, resizeMode: 'stretch' }} resizeMode={'stretch'}></Image>

                      <View style={{ position: 'absolute', bottom: -5, left: 5, width: 80, height: 60 }}>
                        <Image source={require('../../../assets/images/coupon.png')} style={{ width: '100%', height: '100%', alignSelf: 'center', resizeMode: 'stretch' }} resizeMode={'stretch'}></Image>
                      </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                      <View style={{}}>
                        <Text style={{ fontSize: 11, color: Mycolors.Black, marginTop: 5, textAlign: 'left', fontWeight: 'bold', left: 7 }}>{item.name}</Text>
                        <Text style={{ fontSize: 11, color: Mycolors.Black, marginTop: 5, textAlign: 'left', fontWeight: '300', left: 7 }}>{item.address_line}</Text>
                        <Text style={{ fontSize: 11, color: Mycolors.Black, marginTop: 5, textAlign: 'left', fontWeight: '200', left: 7, fontStyle: 'italic' }}>Food Preparation Time : 34 Minutes</Text>

                      </View>
                      <View style={{ padding: 5, alignItems: 'flex-end' }}>
                        <TouchableOpacity style={{
                          width: 50, height: 28, borderRadius: 5, backgroundColor: 'red',
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 3
                          },
                          shadowRadius: 1,
                          shadowOpacity: 0.3,
                          justifyContent: 'center',
                          elevation: 5, flexDirection: 'row', alignItems: 'center'
                        }}>

                          <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginHorizontal: 4, color: '#fff', top: 1 }}>4.0</Text>
                          <Image source={require('../../../assets/Star.png')} style={{ width: 13, height: 13, alignSelf: 'center', marginRight: 4 }}></Image>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 11, color: Mycolors.ORANGE, marginTop: 5, textAlign: 'left', fontWeight: '500', }}>1000+ orders served.</Text>

                      </View>

                    </View>

                  </View>
                )
              })

            }

          </View>


        </View>

        {/* <View style={{width:'95%',alignSelf:'center',marginTop:15}}>
          <MyButtons title="Proceed to payment" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{props.navigation.navigate('ShopPayment')}} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027','#fd001f']}/>
          </View> */}

        <View style={{ height: 100 }} />
      </ScrollView>



      {loading ? <Loader /> : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '100%',
    // fontSize: 12,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    color: Mycolors.TEXT_COLOR,
    paddingLeft: 15,

    backgroundColor: Mycolors.BG_COLOR,
    top: 1
  },
});
export default ShopEatFilter