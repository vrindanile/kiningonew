// external imports
import React, { useCallback, useState } from "react"
import moment from "moment"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
// internal imports
// import { colors } from "../../constants/ColorConstant"
import { Mycolors } from "../../../../utility/Mycolors"

const PublishedRoutinesTab = ({ item, onTabClick }) => {
    console.log('my prefered ------>>>', item?.preferenceicon)
    const [textShown, setTextShown] = useState(false) //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false) //to show the "Read more & Less Line"

    //To toggle the show text or hide it
    const toggleNumberOfLines = () => {
        setTextShown(!textShown)
    }

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 2) //to check the text is more than 2 lines or not
    }, [])

    return (
        <TouchableOpacity
            onPress={() => {
                onTabClick(item.routineid)
            }}
            style={styles.container}
        >
            <View style={styles.preferenceContainer}>
                <View style={styles.preferenceIcon}>
                    <Image
                        style={{ height: 25, width: 25 }}
                        resizeMode="cover"
                        source={{
                            uri: `${item?.preferenceicon
                                }`
                        }}
                    />
                </View>
                <Text style={styles.preferenceTitle}>{item?.preferencename}</Text>
                <Text style={styles.date}>{moment(item.date).format("ddd DD")}</Text>
            </View>

            {item?.routinetype ? (
                <Text style={styles.routineType}>({item?.routinetype})</Text>
            ) : null}

            <View style={styles.routineContainer}>
                <Text style={styles.routineTitle}>{item.routinename}</Text>
                <Text style={styles.routineSubTitle}>{item.routinesubtitle}</Text>
            </View>

            {/* description section on basis of read more and read less */}
            <View style={styles.descriptionContainer}>
                <Text
                    style={styles.descriptionText}
                    onTextLayout={onTextLayout}
                    numberOfLines={textShown ? undefined : 2}
                >
                    {item?.description}
                </Text>
                {/* {lengthMore ? (
                    <Text onPress={toggleNumberOfLines} style={styles.readMoreText}>
                        {textShown ? "View less..." : "View more..."}
                    </Text>
                ) : null} */}
            </View>

            {/* background image section  */}
            <View style={styles.backgroundImageContainer}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require("../../../../assets/Remindably/communityBackground.png")}
                />
            </View>
        </TouchableOpacity>
    )
}

export default PublishedRoutinesTab

const styles = StyleSheet.create({
    container: {
        backgroundColor: Mycolors.WHITE,
        borderLeftColor: Mycolors.THEME_ORANGE,
        borderLeftWidth: 3,
        borderRadius: 15,
        borderStyle: "solid",
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    preferenceContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    preferenceIcon: {
        alignItems: "center",
        backgroundColor: Mycolors.brightGray,
        borderRadius: 5,
        height: 33,
        justifyContent: "center",
        width: 33
    },
    preferenceTitle: {
        color: Mycolors.THEME_BLACK,
        fontSize: 16,
        fontWeight: "400",
        paddingHorizontal: 8,
        width: "75%"
    },
    routineType: {
        color: Mycolors.THEME_ORANGE,
        fontSize: 16,
        paddingVertical: 3,
        width: "75%"
    },
    date: {
        color: Mycolors.THEME_BLACK,
        fontSize: 14,
        fontWeight: "500",
        width: "17%",
        zIndex: 1
    },
    routineContainer: {
        height: "auto",
        paddingVertical: 10,
        width: "80%"
    },
    routineTitle: {
        color: Mycolors.THEME_ORANGE,
        fontSize: 18,
        fontWeight: "500"
    },
    routineSubTitle: {
        color: Mycolors.THEME_BLACK,
        fontSize: 16,
        fontWeight: "500"
    },
    image: { height: "100%", width: "100%", borderRadius: 50 },
    backgroundImageContainer: {
        bottom: 0,
        height: 110,
        position: "absolute",
        right: 10,
        width: 110
    },
    descriptionContainer: {
        height: "auto",
        paddingVertical: 3
    },
    descriptionText: { color: Mycolors.THEME_BLACK },
    readMoreText: {
        color: Mycolors.THEME_ORANGE,
        fontWeight: "500",
        lineHeight: 21,
        width: "35%"
    }
})
