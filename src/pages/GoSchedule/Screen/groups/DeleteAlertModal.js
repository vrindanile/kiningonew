//external imports
import React from "react"
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
//internal imports
// import { colors } from "../../constants/ColorConstant"
import { Mycolors } from "../../../../utility/Mycolors"
export default function DeleteAlertModal({
    info,
    onPressRightButton,
    onRequestClosed,
    subHeading,
    visibleModal
}) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visibleModal}
            onRequestClose={() => {
                onRequestClosed()
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.whiteContainer}>
                    <Image
                        style={styles.alertIconDimensions}
                        source={require("../../../../assets/Remindably/alerts.png")}
                    />
                    <View style={styles.alertModalIconContainer}>
                        <View style={styles.textHeadingContainer}>
                            <Text style={styles.headingStyles}>ALERT</Text>
                        </View>
                    </View>
                    <Text style={styles.subHeading}>{subHeading}</Text>
                    {info ? <Text style={styles.infoLine}>{info}</Text> : null}

                    <View style={styles.buttonContainer}>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonPositionLeft}
                                onPress={() => {
                                    onRequestClosed()
                                }}
                            >
                                <Text style={styles.buttonStylesLeft}>No</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonPositionRight}
                                onPress={() => {
                                    onPressRightButton()
                                }}
                            >
                                <Text style={styles.buttonStylesRight}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                        {/* button part end  */}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.66)",
        flex: 1,
        justifyContent: "center"
    },
    whiteContainer: {
        alignContent: "center",
        backgroundColor: Mycolors.WHITE,
        borderRadius: 13,
        justifyContent: "center",
        paddingVertical: 18,
        width: "90%"
    },
    headingStyles: {
        color: Mycolors.THEME_ORANGE,
        fontSize: 25,
        fontWeight: "500"
    },
    subHeading: {
        color: Mycolors.THEME_BLACK,
        fontSize: 18,
        fontWeight: "500",
        paddingBottom: 20,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    infoLine: {
        color: Mycolors.GRAY,
        fontSize: 16,
        fontWeight: "500",
        paddingBottom: 10,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },
    buttonPositionLeft: {
        backgroundColor: Mycolors.THEME_ORANGE,
        borderRadius: 5,
        height: 45,
        justifyContent: "center",
        marginRight: 10,
        width: 140
    },
    buttonStylesLeft: {
        color: Mycolors.WHITE,
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    buttonPositionRight: {
        backgroundColor: Mycolors.WHITE,
        borderColor: Mycolors.THEME_ORANGE,
        borderRadius: 5,
        borderWidth: 2,
        height: 45,
        justifyContent: "center",
        width: 140
    },
    buttonStylesRight: {
        color: Mycolors.THEME_ORANGE,
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    alertModalIconContainer: {
        alignSelf: "center",
        flexDirection: "row",
        paddingBottom: 8
    },
    alertIconDimensions: {
        alignSelf: "center",
        height: 50,
        marginBottom: 5,
        width: 50
    },
    textHeadingContainer: {
        justifyContent: "center",
        paddingHorizontal: 8
    }
})
