import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { dimensions, Mycolors } from '../../../utility/Mycolors';


const MusicCumstomHeader = (props) => {
    return (
        <View
            style={{
                height: props.height ? props.height : 'auto',
                width: '100%',
                padding: props.padding ? props.padding : 'auto',
                paddingVertical: props.paddingVertical ? props.paddingVertical : 'auto',
                paddingHorizontal: props.paddingHorizontal ? props.paddingHorizontal : 'auto',
                backgroundColor: props.backgroundColor ? props.backgroundColor : 'transparent',
                flexDirection: "row",
                justifyContent: 'flex-start',
                alignItems: "center",
            }}
        >
            {props.press1 ?
                <TouchableOpacity style={{
                    width: props.img1width ? props.img1width : 'auto',
                    height: props.img1height ? props.img1height : 'auto',
                    justifyContent: 'center',
                    padding: props.img1padding ? props.img1padding : 'auto',
                    borderRadius: props.img1borderRadius ? props.img1borderRadius : 0,
                    backgroundColor: props.img1backgroundColor ? props.img1backgroundColor : 'transparent'
                }} onPress={props.press1}>
                    {props.img1 ?
                        <Image source={props.img1} style={{ width: '100%', height: '100%', alignSelf: 'center' }}></Image>
                        : null}
                </TouchableOpacity>
                : null
            }

            {props.press2 ?
                <TouchableOpacity style={{
                    width: props.img2width ? props.img2width : 'auto',
                    height: props.img2height ? props.img2height : 'auto',
                    justifyContent: 'center',
                }} onPress={props.press2}>
                    {props.img2 ?
                        <Image source={props.img2} style={{ width: '100%', height: '100%', alignSelf: 'center' }}></Image>
                        : null}
                    {props.title2 ?
                        <View style={{}}>
                            <Text style={{ fontWeight: props.fontWeight ? props.fontWeight : 'normal', fontSize: props.fontSize ? props.fontSize : 14, color: props.color ? props.color : Mycolors.Black, right: props.right ? props.right : 'auto' }}>{props.title2}</Text>
                        </View>
                        : null}
                </TouchableOpacity>
                : null
            }
            <View
                style={{
                    height: props.height ? props.height : 'auto',
                    width: '100%',
                    padding: props.padding ? props.padding : 'auto',
                    paddingVertical: props.paddingVertical ? props.paddingVertical : 'auto',
                    paddingHorizontal: props.paddingHorizontal ? props.paddingHorizontal : 'auto',
                    backgroundColor: props.backgroundColor ? props.backgroundColor : 'transparent',
                    flexDirection: "row",
                    justifyContent: 'flex-end',

                    alignItems: "center",
                }}
            >
                <View style={{ marginRight: 15 }}>
                    {props.press3 ?
                        <TouchableOpacity style={{
                            width: props.img3width ? props.img3width : 'auto',
                            height: props.img3height ? props.img3height : 'auto',
                            justifyContent: 'center',
                        }} onPress={props.press3}>
                            {props.img3 ?
                                <Image source={props.img3} style={{ width: '100%', height: '100%', alignSelf: 'center' }}></Image>
                                : null}
                        </TouchableOpacity>
                        : null
                    }
                </View>

                <View style={{ marginRight: 10 }}>
                    {props.press4 ?
                        <TouchableOpacity style={{
                            width: props.img4width ? props.img4width : 'auto',
                            height: props.img4height ? props.img4height : 'auto',
                            justifyContent: 'center',
                        }} onPress={props.press4}>
                            {props.img4 ?
                                <Image source={props.img4} style={{ width: '100%', height: '100%', alignSelf: 'center' }}></Image>
                                : null}
                        </TouchableOpacity>
                        : null
                    }
                </View>

                {props.press5 ?
                    <TouchableOpacity style={{
                        width: props.img5width ? props.img5width : 'auto',
                        height: props.img5height ? props.img5height : 'auto',
                        justifyContent: 'center',
                    }} onPress={props.press5}>
                        {props.img5 ?
                            <Image source={props.img5} style={{ width: '100%', height: '100%', alignSelf: 'center' }}></Image>
                            : null}
                    </TouchableOpacity>
                    : null
                }
            </View>
        </View>
    )
}
export default MusicCumstomHeader;


