//external imports
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"
import React from "react"
//internal imports
// import SubmitButton from "../../constants/SubmitButton"
import SubmitButton from "../../Constants/SubmitButton"
import { Mycolors } from "../../../../utility/Mycolors"
const PlanPurchaseModal = ({
    onClose,
    onSubmitClick,
    responseMsg,
    visibleModal
}) => {
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                    onClose()
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalViewGroup}>
                        {/* cross button section  */}
                        <TouchableOpacity
                            style={styles.crossContainer}
                            onPress={() => {
                                onClose()
                            }}
                        >
                            {/* <Image
                                style={styles.imageStyle}
                                resizeMode="contain"
                                source={require("../../assets/pngImage/cross.png")}
                            /> */}
                        </TouchableOpacity>

                        {/* error msg section */}
                        <Text style={styles.alertMsg}>{responseMsg}</Text>

                        {/* button section */}
                        <View style={styles.buttonContainer}>
                            <SubmitButton
                                submitButton={() => {
                                    onSubmitClick()
                                }}
                                buttonText={"Purchase a plan"}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PlanPurchaseModal

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: "rgba(0, 0, 0, 0.66)",
        flex: 1,
        justifyContent: "center"
    },
    modalViewGroup: {
        backgroundColor: Mycolors.WHITE,
        borderRadius: 10,
        margin: 20,
        padding: 20
    },
    crossContainer: {
        backgroundColor: Mycolors.THEME_ORANGE,
        borderRadius: 50,
        height: 30,
        position: "absolute",
        right: 15,
        top: 10,
        width: 30,
        zIndex: 1
    },
    imageStyle: {
        borderRadius: 10,
        height: "100%",
        width: "100%"
    },
    alertMsg: {
        color: Mycolors.BLACK,
        fontSize: 18,
        paddingVertical: 10
    },
    buttonContainer: { paddingTop: 30 }
})
