import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, ImageBackground, Keyboard } from 'react-native';
// import HomeHeaderRoundBottom from './Homeheaderroundbottom';
// import SearchInput2 from 'src/component/SearchInput2';
// import SearchInputEnt from 'src/component/SearchInputEnt';
// import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
// import { ImageSlider, ImageCarousel } from "react-native-image-slider-banner";
// import MyButtons from 'src/component/MyButtons';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import Modal from 'react-native-modal';
// import Toast from 'react-native-simple-toast'
import LinearGradient from 'react-native-linear-gradient'

// const image1 = require('../../assets/people-following-person.png')
// const image2 = require('../../assets/people-sender-image.png')
const DatingChat = (props) => {
    const [searchValue, setsearchValue] = useState('')
    const [scrollEnabled, setScrollEnabled] = useState(false)
    const myTextInput = useRef()
    const [userMessage, setUserMessage] = useState('')
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
    const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
    const [upData, setupData] = useState([
        {
            id: '1',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            me: false,
            time: '12:50 pm'
        },
        {
            id: '2',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            me: false,
            time: '12:51 pm'
        },
        {
            id: '2',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            me: true,
            time: '12:51 pm'
        },
        {
            id: '2',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            me: false,
            time: '12:51 pm'
        },
        {
            id: '2',
            message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            me: true,
            time: '12:51 pm'
        },

    ])
    const sendMessage = () => {
        if (userMessage?.trim()?.length === 0) {
            return
        }
        const lastId = upData?.length
        setupData([...upData, {
            id: String(lastId + 1),
            message: userMessage,
            me: true,
            time: '6:00 pm'
        }])
        Keyboard.dismiss()
        setUserMessage('')
    }
    const multiSliderValuesChange = (values) => { setMultiSliderValue(values) }
    useEffect(() => {

    }, [])

    return (
        <SafeAreaView scrollEnabled={scrollEnabled} style={{ backgroundColor: '#F8F8F8' }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 80, padding: 20, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: Mycolors.B2B_BLUE  }}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Image source={require('../../../assets/service-header-back-button.png')} style={{ width: 25, height: 18 }} resizeMode='contain' />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, }}>
                        <Image source={require('../../../assets/dating-home-header-left-image.png')} style={{ height: 30, width: 30, borderRadius: 30 / 2 }} />
                    </View>
                    {/* <Image source={image1} style={{marginLeft:10, height:40, width:40, borderRadius:40/2, borderWidth:2, borderColor:'e42f5e'}}/> */}
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff', marginLeft: 20 }}>Jerome Bell</Text>
                </View>
                
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>

                    <View style={{ width: '100%', alignSelf: 'center', marginTop: 20 }}>
                        <FlatList
                            data={upData}
                            showsHorizontalScrollIndicator={false}
                            numColumns={1}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ width: '100%', marginBottom: 20 }}>
                                        {item.me ?
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 2 }} />
                                                <View style={{ flex: 6, flexDirection: 'row', alignItems: 'flex-start' }}>
                                                    <Image source={require('../../../assets/dating-home-header-left-image.png')} style={{ height: 30, width: 30, borderRadius: 30 / 2 }} />
                                                    <View>
                                                        <LinearGradient
                                                            colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                                                            style={{ backgroundColor: '#e42f5e', marginLeft: 10, padding: 10, borderRadius: 15, backgroundColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowRadius: 1, shadowOpacity: 0.03, elevation: 1, }}
                                                        >
                                                            <Text style={styles.rightMessage}>{item.message}</Text>
                                                        </LinearGradient>
                                                        <Text style={{ fontSize: 10, fontWeight: '400', color: '#B2B7B9', marginTop: 2, textAlign: 'left', marginLeft: 10 }}>{item.time}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 6, flexDirection: 'row', alignItems: 'flex-start' }}>
                                                    <Image source={require('../../../assets/dating-home-header-left-image.png')} style={{ height: 30, width: 30, borderRadius: 30 / 2 }} />
                                                    <View>
                                                        <LinearGradient
                                                            colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                                                            style={{ marginLeft: 10, padding: 10, borderRadius: 5, backgroundColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowRadius: 1, shadowOpacity: 0.03, elevation: 1, }}
                                                        >
                                                            <Text style={styles.leftMessage}>{item.message}</Text>
                                                        </LinearGradient>
                                                        <Text style={{ fontSize: 10, fontWeight: '400', color: '#B2B7B9', marginTop: 2, textAlign: 'left', marginLeft: 10 }}>{item.time}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 2 }} />
                                            </View>
                                        }
                                    </View>
                                )
                            }}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </View>
                <View style={{ height: 100 }} />

            </ScrollView>

            <View style={styles.addCommentContainer}>
                <View style={styles.addCommentView}>
                    <TextInput
                        value={userMessage}
                        onChangeText={(text) => {
                            setUserMessage(text)
                        }}
                        placeholder="Type a message"
                        placeholderTextColor={'#B2B7B9'}
                        style={[styles.input, { width: '70%' }]}
                        multiline
                    />
                    <TouchableOpacity onPress={sendMessage} style={styles.sendButtonView}>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#fff' }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    addCommentContainer: {
        position: 'absolute',
        bottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // borderTopWidth:0.5, 
        // borderTopColor:'#ffb0ba', 
    },
    addCommentView: {
        width: '100%',
        // backgroundColor:'#fff0f0',
        // padding:15, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 3
        // },
        // shadowRadius: 1,
        // shadowOpacity: 0.3,
        // elevation: 5,
    },
    input: {
        paddingLeft: 20,
        fontSize: 13,
        fontWeight: '400',
        color: '#000',
    },
    sendButtonView: {
        width: '30%',
        backgroundColor:Mycolors.B2B_BLUE ,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 30,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendButton: {
        height: 20,
        width: 20,
    },
    cameraButtonView: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftMessage: {
        fontSize: 13,
        fontWeight: '400',
        color: '#455A64'
    },
    rightMessage: {
        fontSize: 13,
        fontWeight: '400',
        color: '#455A64'
    },
});
export default DatingChat 