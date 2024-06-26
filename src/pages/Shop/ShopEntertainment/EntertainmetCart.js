import React, { useEffect, useState, useRef } from 'react';
import { RefreshControl, View, Image, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, TextInput, FlatList, Alert, TouchableOpacity, Pressable, ScrollView, ImageBackground } from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import { Rating } from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';
import Toggle from "react-native-toggle-element";
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setSelectedCarTab } from '../../../redux/actions/user_action';
import DatePicker from 'react-native-datepicker';
import { baseUrl, delete_Update_Address, shop_eat_cart, shop_eat_cart_id, user_address, shop_eat_coupons_userid, shop_eat_cart_apply_coupon, login, shop_eat_business_id, shop_eat_menu_userid, requestPostApi, requestGetApi, shop_eat, add_cart, get_coupons } from '../../../WebApi/Service'
import Loader from '../../../WebApi/Loader';

import MyAlert from '../../../component/MyAlert';
import { useSelector, useDispatch } from 'react-redux';
import GetLocation from 'react-native-get-location'

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

const EntertainmetCart = (props, route) => {
    console.log('my routes function----->>>', props?.route?.params?.buisnessId);
    const person_Image = "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    const [checkitem, setcheckitem] = useState('')
    const [res, setres] = useState('')
    const [upData, setupData] = useState([
        {
            id: '1',
            title: '**** **** **** 5967',
            height: 33,
            width: 55,
            time: 'Expires 24/22',
            img: require('../../../assets/images/layer_48.png'),
        },
        {
            id: '2',
            title: '**** **** **** 5967',
            height: 18,
            width: 55,
            time: 'Expires 24/22',
            img: require('../../../assets/images/group_36.png'),
        },

    ])
    const User = useSelector(state => state.user.user_details)
    const VenderDetails = useSelector(state => state.user.venderDeatil)
    console.log('my vendor detailssss---->>>', User.userid);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [resData, setresData] = useState([])
    const [promocode, setpromocode] = useState('')
    const [rescopun, setrescopun] = useState([{ "coupon_code": "KINENGO3", "coupon_name": "Dummy Coupon", "coupon_type": "flat", "discount_id": 9, "discount_value": "3.00", "expred_on": "2023-10-31", "image": "http://54.153.75.225/images/app-icons/offer2.jpg", "min_order_value": 10 }])
    const [discount_id, setdiscount_id] = useState(null)
    const [discountPrice, setdiscountPrice] = useState('0.0')
    const [subTotal, setsubTotal] = useState('0.0')
    const [dilivery, setdilivery] = useState('0.0')
    const [totla, settotal] = useState('0.0')
    const [applyedCoupen, setapplyedCoupen] = useState('')
    const [modlevisual, setmodlevisual] = useState(false)
    const [addressList, setaddressList] = useState(false)
    const [addressListData, setaddressListData] = useState([])
    const [landmark, setlandmark] = useState('');
    const [address_type, setaddress_type] = useState('2');
    const [city, setCity] = useState('');
    const [full_name, setfull_name] = useState('');
    const [area_village, setarea_village] = useState('');
    const [ShippingAddressPopUp, setShippingAddressPopUp] = useState(false);
    const [house_no, sethouse_no] = useState('');
    const [phone, setphone] = useState('');
    const [pincode, setpincode] = useState('');
    const [state, setstate] = useState('');
    const [selectedAddress, setselectedAddress] = useState('');
    const [lat, setlat] = useState('28.6176')
    const [lan, setlan] = useState('77.422')
    const [ordertype, setordertype] = useState('delivery')
    const [reloades, setreloades] = useState(false)
    const [edit, setedit] = useState(false)
    const [AddressId, setAddressId] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [My_Alert, setMy_Alert] = useState(false)
    const [alert_sms, setalert_sms] = useState('')
    useEffect(() => {

        console.log('hello ji ==>>',);
        getcart()
        getCopun()
        getAddress()
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                // console.log('locations latitude longitude',location);
                setlat(location.latitude)
                setlan(location.longitude)
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }, [])


    const checkcon = () => {
        getcart()
        getCopun()
        getAddress()
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


    const putcart = async (item, add) => {
        setLoading(true)
        var data = ''
        if (add == '+') {
            data = {
                id: item.id,
                product_id: item.product_id,
                quantity: item.quantity + 1,
            }
        } else {
            if (item.quantity > 1) {
                data = {
                    id: item.id,
                    product_id: item.product_id,
                    quantity: item.quantity - 1,
                }
            } else {
                deletcart(item)
            }
        }
        const { responseJson, err } = await requestPostApi(shop_eat_cart_id + item.id, data, 'PUT', User.token)
        setLoading(false)
        console.log('the res==>>', responseJson)
        if (responseJson.headers.success == 1) {
            Toast.show({ text1: responseJson.headers.message })
            getcart()
        } else {
            // setalert_sms(err)
            // setMy_Alert(true)
        }
    }

    const deletcart = async (item) => {
        setLoading(true)
        const { responseJson, err } = await requestPostApi(shop_eat_cart_id + item.id, '', 'DELETE', User.token)
        setLoading(false)
        console.log('the res==>>', responseJson)
        if (responseJson.headers.success == 1) {
            Toast.show({
                text1: responseJson.headers.message
            })
            getcart()
        } else {
            getcart()
            // setalert_sms(err)
            // setMy_Alert(true)
        }
    }

    const deletAddress = async (item) => {
        console.log('itemsss', item);
        setLoading(true)

        const { responseJson, err } = await requestPostApi(delete_Update_Address + item.id, '', 'DELETE', User.token)
        setLoading(false)
        console.log('the res==>>', responseJson)
        if (responseJson.headers.success == 1) {
            Toast.show({
                text1: responseJson.headers.message
            })
            getAddress()
            setreloades(!reloades)
        } else {

            // setalert_sms(err)
            // setMy_Alert(true)
        }
    }

    const UpdateAddress = async (item) => {
        var data = {
            "location_name": full_name,
            "location_type": address_type,
            "latitude": lat,
            "longitude": lan,
            "address_line1": house_no,
            "address_line2": area_village,
            "city": city,
            "state": state,
            "country_id": 1,
            "is_default": 1
        }
        setLoading(true)
        const { responseJson, err } = await requestPostApi(delete_Update_Address + AddressId, data, 'PUT', User.token)
        setLoading(false)
        console.log('the res==>>', responseJson)
        if (responseJson.headers.success == 1) {
            Toast.show({ text1: responseJson.headers.message })
            setShippingAddressPopUp(false)
            setaddressList(true)
            setedit(false)
            setAddressId('')
            setfull_name('')
            setaddress_type('')
            sethouse_no('')
            setarea_village('')
            setCity('')
            setstate('')
            getAddress()
        } else {
            // setalert_sms(err)
            // setMy_Alert(true)
        }
    }

    const getcart = async () => {
        // setresData([])
        setLoading(true)
        var url = add_cart
        var murl = `?business_id=` + props?.route?.params?.buisnessId
        url = url + murl
        const { responseJson, err } = await requestGetApi(url, '', 'GET', User.token)
        setLoading(false)
        console.log('the res get shop_eat_cart ==>>', url)
        if (responseJson.headers.success == 1) {
            console.log('status 11111111ioioiooio', responseJson.body.items[0].serviceType);
            if (responseJson.body.items[0].serviceType == 'Take Away') {
                setordertype('take-away')
            }
            setres(responseJson.body)
            // var myCartItem = []
            // for (let i = 1; i <= responseJson.body.items.length; i++) {
            //     if (responseJson.body.items[i - 1].serviceType != null) {
            //         myCartItem.push(responseJson.body.items[i - 1])
            //     }
            // }
            console.log('my cart items----->>>>', responseJson.body.sub_total
            );
            setresData(responseJson?.body?.items)
            // setresData(responseJson.body.items)
            setsubTotal(responseJson.body.sub_total)
            setdilivery(responseJson.body.delivery_charge)
            settotal(responseJson.body.total)
            setreloades(!reloades)
        } else {
            setres([])
            setresData([])
            setsubTotal('')
            setdilivery('')
            settotal('0')
            setreloades(!reloades)
            //  setalert_sms(err)
            //  setMy_Alert(true)
        }

    }

    const applyCoupan = async () => {
        console.log('my discount id promocode--->>', promocode);
        if (promocode === null) {
            Toast.show({ text1: 'Please select any coupon' })
            return
        } else {
            setLoading(true)
            var data = {
                discount_id: promocode,
                business_id: props?.route?.params?.buisnessId
            }
            const { responseJson, err } = await requestPostApi(shop_eat_cart_apply_coupon, data, 'POST', User.token)
            setLoading(false)
            console.log('the res shop_eat_cart_apply_coupon==>>', responseJson.body.coupon_discount)
            if (responseJson.headers.success == 1) {
                setdiscountPrice(responseJson.body.coupon_discount)
                setsubTotal(responseJson.body.sub_total)
                setdilivery(responseJson.body.delivery_charge)
                settotal(responseJson.body.total)
                setapplyedCoupen(responseJson.body.coupon)
                getcart()
            } else {
                { console.log('my eror in coupon applyy', responseJson?.headers?.message) }
                setalert_sms(responseJson?.headers?.message)
                setMy_Alert(true)
            }
        }

    }

    const AddAddress = async () => {

        setLoading(true)
        var data = {
            "location_name": full_name,
            "location_type": address_type,
            "latitude": lat,
            "longitude": lan,
            "address_line1": house_no,
            "address_line2": area_village,
            "city": city,
            "state": state,
            "country_id": 1,
            "is_default": 1
        }
        const { responseJson, err } = await requestPostApi(user_address, data, 'POST', User.token)
        setLoading(false)
        console.log('the res user_address set==>>', responseJson)
        if (responseJson.headers.success == 1) {
            getAddress()
            setfull_name('')
            setaddress_type('')
            sethouse_no('')
            setarea_village('')
            setCity('')
            setstate('')
            setShippingAddressPopUp(false)
        } else {
            // setalert_sms(err)
            // setMy_Alert(true)
        }


    }

    const getAddress = async () => {
        setLoading(true)
        const { responseJson, err } = await requestGetApi(user_address, '', 'GET', User.token)
        setLoading(false)
        console.log('the res get user_address get==>>', responseJson)
        if (responseJson.headers.success == 1) {
            setaddressListData(responseJson.body)
            setselectedAddress(responseJson.body[0])
        } else {
            //  setalert_sms(err)
            //  setMy_Alert(true)
        }
    }


    const getCopun = async () => {
        setLoading(true)
        const { responseJson, err } = await requestGetApi(get_coupons + props?.route?.params?.addedBy, '', 'GET', User.token)
        setLoading(false)
        console.log('the res get shop_eat_coupons_userid ==>>', responseJson)
        if (responseJson.headers.success == 1) {
            setrescopun(responseJson.body)
        } else {
            //  setalert_sms(err)
            //  setMy_Alert(true)
        }
    }

    const flatliistDesign = (img, ti, rs, des, mpress, apress, dpress, qty) => {
        return (
            <View style={{
                width: '100%', marginHorizontal: 5, marginVertical: 5, padding: 10, backgroundColor: '#fff',
                borderColor: '#dee4ec',
                borderWidth: 1,
                elevation: 5, borderRadius: 10, alignSelf: 'center', flexDirection: 'row', alignItems: 'center'
            }}
            >
                <View style={{ width: 90, height: 90, alignSelf: 'center', borderRadius: 15, borderWidth: 3, borderColor: '#dee4ec' }}>
                    <Image source={{ uri: img }} style={{ width: '100%', height: '100%', alignSelf: 'center', borderRadius: 15, resizeMode: 'stretch' }} ></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: Mycolors.GrayColor, fontWeight: '600', fontSize: 12, marginTop: 9 }} >{ti}</Text>
                    <Text style={{ color: Mycolors.Black, fontWeight: '600', fontSize: 14, marginTop: 9 }} >{rs}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: Mycolors.Black, fontWeight: '600', fontSize: 14, marginTop: 9 }} >{des}</Text>

                    </View>

                </View>
                <TouchableOpacity style={{ position: 'absolute', width: 20, height: 22, top: 10, right: 10, borderRadius: 3, justifyContent: 'center' }}
                    onPress={dpress}>
                    <Image source={require('../../../assets/bin.png')} style={{ width: '100%', height: '100%', alignSelf: 'center', resizeMode: 'stretch' }} ></Image>
                </TouchableOpacity>
                <View style={{ width: 100, height: 30, flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 70, position: 'absolute', bottom: 5, right: 0 }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: '#FFE2E6', justifyContent: 'center' }}
                        onPress={mpress}>
                        <Text style={{ textAlign: 'center', fontSize: 25, color: 'red', top: -1 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, color: Mycolors.Black }}>{qty}</Text>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: 'red', justifyContent: 'center' }}
                        onPress={apress}>
                        <Text style={{ textAlign: 'center', fontSize: 25, color: '#fff', top: -1 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
                    press2={() => { }} title2={'Cart'} fontWeight={'500'} img2height={20}
                    press3={() => { }} img3width={25} img3height={25} />

                <View style={{ width: '92%', alignSelf: 'center' }}>
                    {console.log('red data console yuyuyuy above choose addresss---->>>', resData)}
                    {resData.length !== 0 ?
                        resData.map((item, index) => {
                            return (
                                <View>
                                    {console.log('did it reach to the flatList')}
                                    {flatliistDesign(item.image, item.
                                        category_type
                                        , item.name, '$' + item.price, () => { putcart(item, '-') }, () => { putcart(item, '+') }, () => { deletcart(item) }, item.quantity)}
                                </View>
                            )
                        }
                        )
                        : null
                    }
                    {console.log('my response data for the new items---->>>', resData)}

                    {resData.length !== 0 ?
                        <View>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12, width: '100%' }}>
                                <Text style={{ color: Mycolors.Black, fontWeight: '600', fontSize: 14, }} >Choose Delivery Address</Text>
                                <Text style={{ color: '#1689CE', fontSize: 13, }} onPress={() => { setShippingAddressPopUp(true) }}>Add Address</Text>
                            </View> */}

                            {/* <View style={{
                                width: '100%', marginHorizontal: 5, marginVertical: 5, padding: 10, backgroundColor: '#fff',
                                borderColor: '#dee4ec',
                                borderWidth: 1,
                                elevation: 5, borderRadius: 10, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                            }}
                            >

                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{selectedAddress.location_name}</Text>
                                    <Text style={{ fontSize: 13, marginVertical: 5 }}>{selectedAddress.address_line1} , {selectedAddress.city} , {selectedAddress.state}</Text>
                                    <Text style={{ fontSize: 13 }}>{selectedAddress.address_line2}</Text>
                                </View>

                                <TouchableOpacity style={{ width: 25, height: 25, alignSelf: 'center' }} onPress={() => { setaddressList(true) }}>
                                    <Image source={require('../../../assets/arrow_right_black.png')} style={{ width: 25, height: 25, resizeMode: 'stretch' }} ></Image>
                                </TouchableOpacity>

                            </View> */}

                            <View style={{ width: dimensions.SCREEN_WIDTH - 30, marginTop: 15, alignSelf: 'center' }}>
                                <TextInput
                                    value={promocode}
                                    onChangeText={(text) => {
                                        setpromocode(text)
                                    }}
                                    placeholder="Promo Code"
                                    placeholderTextColor={Mycolors.placeholdercolor}
                                    style={[styles.input, { paddingRight: 70 }]}
                                />
                                <View style={{ position: 'absolute', right: 3, top: 3, backgroundColor: '#1689CE', paddingHorizontal: 10, height: 40, justifyContent: 'center', borderRadius: 5 }}>
                                    <TouchableOpacity onPress={() => { applyCoupan() }} style={{ with: '100%', height: '100%', justifyContent: 'center', }}>
                                        <Text style={{ textAlign: 'center', color: '#fff' }}>Apply</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 12, width: '100%' }}>
                                <Text style={{ color: Mycolors.Black, fontWeight: '600', fontSize: 14, }} >Other Coupons</Text>
                                <Text style={{ color: '#1689CE', fontSize: 13, }} onPress={() => { setmodlevisual(true) }}>View All</Text>
                            </View>

                            {applyedCoupen != '' ?
                                <View style={{
                                    width: '100%', marginHorizontal: 5, marginVertical: 5, padding: 10, backgroundColor: '#fff',
                                    borderColor: '#dee4ec', borderWidth: 1, elevation: 5, borderRadius: 7, alignSelf: 'center', flexDirection: 'row', alignItems: 'center'
                                }}
                                >
                                    <View style={{ width: 25, height: 25, alignSelf: 'center', borderRadius: 2, borderWidth: 0.5, borderColor: '#dee4ec' }}>
                                        <Image source={{ uri: applyedCoupen.image }} style={{ width: '100%', height: '100%', alignSelf: 'center', borderRadius: 2, resizeMode: 'stretch' }} ></Image>
                                    </View>
                                    <View style={{ marginLeft: 10, width: '63%' }}>
                                        <Text style={{ color: Mycolors.TEXT_COLOR, fontSize: 13 }} >{applyedCoupen.coupon_desc}</Text>
                                        <Text style={{ color: Mycolors.GREEN, fontSize: 11, marginTop: 5 }} >Save ${applyedCoupen.discount_value} with this code</Text>
                                    </View>
                                    <View style={{ position: 'absolute', right: 10, top: 10 }}>
                                        {console.log('my discount id-->>', applyedCoupen)}
                                        <View style={{ width: 80, }}>
                                            <MyButtons title={applyedCoupen.coupon_code} height={27} width={'100%'} borderRadius={15} alignSelf="center" press={() => {
                                                setpromocode(applyedCoupen.coupon_code)
                                                setdiscount_id(applyedCoupen.discount_id)
                                            }} marginHorizontal={20} fontSize={12}
                                                titlecolor={Mycolors.RED} borderColor={Mycolors.RED} borderWidth={0.5} backgroundColor={'transparent'} fontWeight={'300'} />
                                        </View>
                                    </View>
                                </View>
                                : null
                            }

                            <View style={{
                                width: '100%', marginHorizontal: 5, marginVertical: 5, padding: 10, backgroundColor: '#fff',
                                borderColor: '#dee4ec', borderWidth: 1, elevation: 5, borderRadius: 7, alignSelf: 'center'
                            }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <Text style={{ color: Mycolors.Black, fontSize: 13, fontWeight: '600' }} >Sub Total</Text>
                                    <Text style={{ color: Mycolors.TEXT_COLOR, fontSize: 13, marginTop: 5 }} >${subTotal}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Text style={{ color: Mycolors.Black, fontSize: 13, }} >Delivery Charges</Text>
                                    <Text style={{ color: Mycolors.TEXT_COLOR, fontSize: 13, marginTop: 5 }} >${dilivery}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Text style={{ color: Mycolors.Black, fontSize: 13, }} >Discount</Text>
                                    <Text style={{ color: Mycolors.TEXT_COLOR, fontSize: 13, marginTop: 5 }} >-${discountPrice}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={{ color: Mycolors.Black, fontSize: 14, fontWeight: '600' }} >Total Cost</Text>
                                    <Text style={{ color: Mycolors.TEXT_PCOLOR, fontSize: 14, marginTop: 5, fontWeight: '600' }} >${totla}</Text>
                                </View>
                            </View>
                            <View style={{ width: '95%', alignSelf: 'center', marginTop: 15 }}>
                                <MyButtons title="Proceed to payment" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={() => { props.navigation.navigate('EntertainmentPayment', { address: selectedAddress, orderType: ordertype }) }} marginHorizontal={20} fontSize={11}
                                    titlecolor={Mycolors.BG_COLOR} backgroundColor={'#1689CE'} marginVertical={0} />
                            </View>

                        </View>
                        :
                        <View style={{ justifyContent: 'center', alignSelf: 'center', height: dimensions.SCREEN_HEIGHT - 250 }}>
                            <Image style={{ width: 150, height: 150, alignSelf: 'center' }} source={require('../../../assets/Cart.png')}></Image>
                            <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 20, color: '#000' }}>Your cart is empty.</Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 4, color: '#000' }}> Please add </Text>
                                <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 4, color: 'red', textDecorationLine: 'underline' }} onPress={() => { props.navigation.navigate('ShopEat') }}>items </Text>
                                <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 4, color: '#000', }}>to order.</Text>

                            </View>
                        </View>
                    }


                </View>


                <View style={{ height: 100 }} />
            </ScrollView>

            {modlevisual ?
                <View style={{ width: dimensions.SCREEN_WIDTH, height: dimensions.SCREEN_HEIGHT, backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', left: 0, top: 0, justifyContent: 'center' }}>
                    <View style={{ height: 300, backgroundColor: '#fff', borderRadius: 30, position: 'absolute', width: '95%', borderColor: '#fff', borderWidth: 0.3, alignSelf: 'center', padding: 10 }}>
                        <Image source={require('../../../assets/images/add.png')}></Image>

                        {
                            rescopun.map((item, index) => {
                                return (
                                    <View style={{
                                        width: '95%', marginHorizontal: 5, marginVertical: 5, padding: 10, backgroundColor: '#fff',
                                        borderColor: '#dee4ec', borderWidth: 1, elevation: 5, borderRadius: 7, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 40
                                    }}
                                    >
                                        <View style={{ width: 25, height: 25, alignSelf: 'center', borderRadius: 2, borderWidth: 0.5, borderColor: '#dee4ec' }}>
                                            <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%', alignSelf: 'center', borderRadius: 2, resizeMode: 'stretch' }} ></Image>
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ color: Mycolors.TEXT_COLOR, fontSize: 13 }} >{item.coupon_name}</Text>
                                            <Text style={{ color: Mycolors.GREEN, fontSize: 11, marginTop: 5 }} >Save ${item.discount_value} with this code</Text>
                                        </View>
                                        <View style={{ position: 'absolute', right: 10, top: 10 }}>
                                            <View style={{ width: 80, }}>
                                                {console.log('my discount id rrrrr--->>', item)}
                                                <MyButtons title={item.coupon_code} height={27} width={'100%'} borderRadius={15} alignSelf="center" press={() => {
                                                    setpromocode(item.coupon_code)
                                                    setdiscount_id(item.discount_id)

                                                    setmodlevisual(false)
                                                }} marginHorizontal={20} fontSize={12}
                                                    titlecolor={Mycolors.RED} borderColor={Mycolors.RED} borderWidth={0.5} backgroundColor={'transparent'} fontWeight={'300'} />
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                            )
                        }

                    </View>

                </View>
                : null
            }

            {ShippingAddressPopUp ?
                <View style={{ width: dimensions.SCREEN_WIDTH, height: dimensions.SCREEN_HEIGHT, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>

                    <View style={{ width: '100%', height: dimensions.SCREEN_HEIGHT * 80 / 100, position: 'absolute', bottom: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: '#fff' }}>
                        <KeyboardAwareScrollView>



                            <View style={{ marginTop: 15, height: 30, flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ marginTop: 2, marginLeft: 10, textAlign: 'center', fontSize: 20, color: '#1689CE', fontWeight: '500' }}>Add Address</Text>


                            </View>
                            <TouchableOpacity onPress={() => { setShippingAddressPopUp(false) }}
                                style={{ position: "absolute", width: 30, borderRadius: 35, height: 30, right: 10, top: 10 }}>
                                <Image
                                    source={require('../../../assets/crossed.png')}
                                    style={{
                                        width: 35,
                                        height: 35, alignSelf: 'center'
                                    }}

                                />
                            </TouchableOpacity>
                            <TextInput style={styles.textInput}
                                placeholder='Full Name'
                                placeholderTextColor="#8F93A0"
                                label="full name"
                                value={full_name}
                                onChangeText={e => setfull_name(e)}
                            />
                            {/* <TextInput style={styles.textInput}
                                          placeholder='Phone number'
                                          placeholderTextColor="#8F93A0"
                                          maxLength={12}
                                          label="phone"
                                          value={phone}
                                          onChangeText={e => setphone(e)}
                                      /> */}
                            <TextInput style={styles.textInput}
                                placeholder='Zip code'
                                placeholderTextColor="#8F93A0"
                                label="pincode"

                                maxLength={9}
                                value={pincode}
                                onChangeText={e => setpincode(e)}
                            />
                            <TextInput style={styles.textInput}
                                placeholder='State'
                                placeholderTextColor="#8F93A0"
                                label="state"
                                value={state}
                                onChangeText={e => setstate(e)}
                            />
                            <TextInput style={styles.textInput}
                                placeholder='City'
                                placeholderTextColor="#8F93A0"
                                label="ity"
                                value={city}
                                onChangeText={e => setCity(e)}
                            />
                            <TextInput style={styles.textInput}
                                placeholder='Address'
                                placeholderTextColor="#8F93A0"
                                value={house_no}
                                onChangeText={e => sethouse_no(e)}
                            />
                            <TextInput style={styles.textInput}
                                placeholder='Area Colony'
                                placeholderTextColor="#8F93A0"
                                label="area village"
                                value={area_village}
                                onChangeText={e => setarea_village(e)}
                            />
                            <TextInput style={styles.textInput}
                                placeholder='Landmark'
                                placeholderTextColor="#8F93A0"
                                label="landmark"
                                value={landmark}
                                onChangeText={e => setlandmark(e)}
                            />

                            <View style={{ height: 45, width: "98%", marginTop: 14, alignItems: 'flex-start', justifyContent: "flex-start", marginLeft: 10 }}>

                                <Text style={{ color: 'black', textAlign: "left", fontSize: 16, fontWeight: "400" }}>Address Type</Text>

                                <View style={{ height: 45, width: "90%", marginTop: 5, alignItems: 'center', justifyContent: "flex-start", flexDirection: "row" }}>

                                    <View
                                        style={{
                                            marginLeft: 10,
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            height: 40,
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setaddress_type('1')
                                            }}>

                                            <View
                                                style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}>
                                                <View style={{ width: 17, height: 17, borderRadius: 15, borderColor: '#000', borderWidth: 0.5, justifyContent: 'center' }}>
                                                    <View style={{ width: 12, height: 12, borderRadius: 15, justifyContent: 'center', alignSelf: 'center', backgroundColor: address_type == '1' ? '#000' : 'transparent' }} />
                                                </View>
                                                <Text
                                                    style={{
                                                        fontWeight: "500",
                                                        textAlign: 'left',
                                                        fontSize: 11,
                                                        color: "black",
                                                        marginLeft: 3
                                                    }}>
                                                    Home
                                                </Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            marginLeft: 30,
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            height: 40,
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setaddress_type('2')
                                            }}>

                                            <View
                                                style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}>
                                                <View style={{ width: 17, height: 17, borderRadius: 15, borderColor: '#000', borderWidth: 0.5, justifyContent: 'center' }}>
                                                    <View style={{ width: 12, height: 12, borderRadius: 15, justifyContent: 'center', alignSelf: 'center', backgroundColor: address_type == '2' ? '#000' : 'transparent' }} />
                                                </View>

                                                <Text
                                                    style={{
                                                        fontWeight: "500",
                                                        textAlign: 'left',
                                                        fontSize: 11,
                                                        color: "black",
                                                        marginLeft: 4
                                                    }}>
                                                    Work
                                                </Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                            {/* <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 0, flexDirection: 'row', height: 34, marginHorizontal: 20, marginTop: 60 }}>
                                          <TouchableOpacity
                                              onPress={() => {AddAddress()}} >
                                              <View style={{ justifyContent: 'center', width: 200, flex: 1, backgroundColor: '#ffcc00', borderRadius: 50 }}>
                                                  <Text style={{textAlign:'center'}}>Save</Text>
                                              </View>
                                          </TouchableOpacity>
                                      </View> */}
                            <View style={{ width: '70%', alignSelf: 'center', marginTop: 55 }}>
                                <MyButtons title={edit ? "Update" : "Save"} height={40} width={'100%'} borderRadius={5} alignSelf="center" press={() => {
                                    edit ? UpdateAddress() : AddAddress()
                                }} marginHorizontal={20} fontSize={11}
                                    titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027', '#fd001f']} />
                            </View>

                            <View style={{ width: '100%', height: 200 }}></View>

                            {loading ? <Loader /> : null}
                        </KeyboardAwareScrollView>


                    </View>


                </View>
                :
                null
            }


            {addressList ?
                <View style={{ width: dimensions.SCREEN_WIDTH, height: dimensions.SCREEN_HEIGHT, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: '100%', height: dimensions.SCREEN_HEIGHT * 80 / 100, position: 'absolute', bottom: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: '#fff' }}>

                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => { setaddressList(false) }}
                                style={{ position: "absolute", width: 30, borderRadius: 35, height: 30, right: 10, top: 10 }}>
                                <Image
                                    source={require('../../../assets/crossed.png')}
                                    style={{
                                        width: 35,
                                        height: 35, alignSelf: 'center'
                                    }}

                                />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 15, marginTop: 15, textAlign: 'left', fontSize: 17, color: '#000000', fontWeight: "500" }}>Select Delivery Address</Text>
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    flexDirection: "row",
                                    height: '78%',
                                    marginHorizontal: 10,
                                    marginTop: 10,
                                    marginBottom: 200
                                }}>


                                <FlatList
                                    vertical
                                    data={addressListData}
                                    keyExtractor={(item, index) => String(index)}

                                    renderItem={({ item, index }) => {
                                        // console.warn('checked ----------->', item, props?.route?.params?.address)
                                        return <View style={{
                                            width: '95%',
                                            height: 150,
                                            marginHorizontal: 10,
                                            // marginLeft: 10,
                                            // marginRight: 15,
                                            shadowColor: '#000000',
                                            // shadowOffset: { width: 0, height: 4 },
                                            shadowRadius: 6,
                                            shadowOpacity: 0.2,
                                            //elevation: 3,
                                            borderRadius: 20,
                                            borderColor: "#ffcc00",
                                            borderWidth: 1,
                                            // backgroundColor: 'red'
                                            marginTop: 8,
                                            marginBottom: addressListData.length - 1 == index ? 100 : 10
                                        }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ height: 30, flexDirection: 'row', marginLeft: 15 }}>
                                                    <View style={{ width: 25, height: 50, justifyContent: "center", alignItems: 'center', marginTop: 15, left: 6 }} >

                                                    </View>
                                                    <View style={{ flex: 1, marginTop: 10, left: 20, }}>
                                                        <Text style={{ textAlign: 'left', fontSize: 12, color: '#000000', fontWeight: "500", fontSize: 16 }}>{item.location_name}</Text>
                                                    </View>

                                                </View>
                                            </View>

                                            <View style={{ marginHorizontal: 10, marginLeft: 50, width: "80%", right: -9, height: 65, marginTop: 5, paddingVertical: 4 }}>
                                                <ScrollView>
                                                    <Text style={{ textAlign: 'left', fontSize: 14, color: '#676767', fontWeight: '400' }}>{item.address_line1},  {item.city}, {item.state},</Text>
                                                    <Text style={{ textAlign: 'left', fontSize: 14, color: '#676767', fontWeight: '400', marginTop: 4 }}>{item.address_line2} </Text>
                                                </ScrollView>
                                            </View>


                                            <View style={{ flexDirection: 'row', left: 30, marginTop: 10, position: "absolute", bottom: 10 }}>

                                                <View style={{ width: 25, height: 25, justifyContent: "center", alignItems: 'center', marginTop: 10, left: 27 }}>
                                                    <TouchableOpacity onPress={() => {

                                                        setfull_name(item.location_name)
                                                        setaddress_type(item.location_type)
                                                        setlat(item.latitude)
                                                        setlan(item.longitude)
                                                        sethouse_no(item.address_line1)
                                                        setarea_village(item.address_line2)
                                                        setCity(item.city)
                                                        setstate(item.state)
                                                        setAddressId(item.id)
                                                        setShippingAddressPopUp(true)
                                                        setaddressList(false)
                                                        setedit(true)
                                                    }}>
                                                        <Image source={require('../../../assets/pen.png')}
                                                            style={{ width: 25, height: 25 }} />
                                                    </TouchableOpacity>

                                                </View>



                                                <View style={{ width: 25, height: 25, justifyContent: "center", alignItems: 'center', borderRadius: 20 / 2, marginTop: 10, left: 57, }}>
                                                    <TouchableOpacity onPress={() => { deletAddress(item) }}>
                                                        <Image source={require('../../../assets/bin.png')}
                                                            style={{ width: 25, height: 25 }} />
                                                    </TouchableOpacity>
                                                </View>

                                                <TouchableOpacity style={{ width: 170, height: 30, justifyContent: "center", alignItems: 'center', borderRadius: 20, marginTop: 9, left: 80, backgroundColor: "red" }}
                                                    onPress={() => {
                                                        setselectedAddress(item)
                                                        setaddressList(false)
                                                    }}>
                                                    <View style={{}}>
                                                        {/* <Image source={require('../assets/buttonSave.png')}
                                                    /> */}
                                                        <Text style={{ color: '#FFFFFF', fontWeight: "600", fontSize: 12, textAlign: 'left' }}>Select Address</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    }
                                    }
                                />

                            </View>

                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', position: 'absolute', bottom: 100 }}>
                            <MyButtons title="Add New Address" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={() => {
                                setShippingAddressPopUp(true)
                                setaddressList(false)
                            }} marginHorizontal={20} fontSize={11}
                                titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027', '#fd001f']} />
                        </View>

                    </View>
                </View>
                :
                null
            }

            {loading ? <Loader /> : null}
            {loading ? <Loader /> : null}
            {My_Alert ? <MyAlert sms={alert_sms} okPress={() => { setMy_Alert(false) }} /> : null}
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
    textInput: {
        marginTop: 14, borderRadius: 10, marginHorizontal: 20, paddingLeft: 15,
        flexDirection: 'row',
        height: 45,
        shadowColor: '#11032586',
        backgroundColor: 'white',
        alignItems: 'center',
        borderColor: "#D7D7D7",
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: "center", color: 'black',
        fontWeight: '400',
        fontSize: 14,
    },
});
export default EntertainmetCart


















