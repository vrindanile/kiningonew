//external imports
import {
    ActivityIndicator,
    FlatList,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native"
//internal imports
import CameraGalleryModal from "./CameraGalleryModal"
import CommentImagesTab from "./CommentImagesTab"
import ImagePicker from "react-native-image-crop-picker"
import Toast from 'react-native-toast-message'
import React, { useCallback, useEffect, useState } from "react"
import UploadImageTab from "./UploadImageTab"
import moment from "moment"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
// import { colors } from "../../constants/ColorConstant"
import { Mycolors } from "../../../../utility/Mycolors"
import { log } from "react-native-reanimated"
const AddSubCommentModal = ({
    commentDetails,
    onClose,
    onSubmitClick,
    visibleModal
}) => {
    console.log('my comment details---->>>', commentDetails);
    const [buttonLoader, setButtonLoader] = useState(false)
    const [cameraGalleryModal, setCameraGalleryModal] = useState(false)
    const [feedbackImage, setFeedbackImage] = useState([])
    const [lengthMore, setLengthMore] = useState(false) //to show the "Read more & Less Line"
    const [taskComments, setTaskComments] = useState("")
    const [textShown, setTextShown] = useState(false) //To show ur remaining Text

    // convert time from moment
    const commentTime = moment(commentDetails?.created_date)
        .startOf("second")
        .fromNow()

    //To toggle the show text or hide it
    const toggleNumberOfLines = () => {
        setTextShown(!textShown)
    }

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 2) //to check the text is more than 2 lines or not
    }, [])

    useEffect(() => {
        setTaskComments("")
        setFeedbackImage([])
    }, [visibleModal])

    // function for open camera
    const openCamera = async () => {
        try {
            let value = await ImagePicker.openCamera({
                width: 1080,
                height: 1080,
                cropping: true,
                mediaType: "photo",
                compressImageQuality: 1,
                compressImageMaxHeight: 1080 / 2,
                compressImageMaxWidth: 1080 / 2
            }).then(image => {
                const img = {
                    name: image.path.slice(
                        image.path.lastIndexOf("/"),
                        image.path.length
                    ),
                    uri: image.path,
                    type: image.mime
                }
                setFeedbackImage([img])
                setCameraGalleryModal(false)
            })
        } catch (error) {
            setCameraGalleryModal(false)
            console.log("error in openLibrary", error)
        }
    }

    // function for open gallery
    const openLibrary = async () => {
        try {
            let imageList = []
            let value = await ImagePicker.openPicker({
                width: 1080,
                height: 1080,
                multiple: true,
                cropping: true,
                mediaType: "photo",
                compressImageQuality: 1,
                compressImageMaxHeight: 1080 / 2,
                compressImageMaxWidth: 1080 / 2
            }).then(image => {
                image.map(e => {
                    imageList.push({
                        name: e.path.slice(e.path.lastIndexOf("/"), e.path.length),
                        uri: e.path,
                        type: e.mime
                    })
                })
                setFeedbackImage(imageList)
                setCameraGalleryModal(false)
            })
        } catch (error) {
            setCameraGalleryModal(false)
            console.log("error in openLibrary", error)
        }
    }

    // function for submit button click
    const handleSubmitClick = () => {
        console.log('my feddbackImage', feedbackImage)
        Keyboard.dismiss();
        setButtonLoader(true);

        // Perform your actions here
        // ...
        setButtonLoader(false);
        onSubmitClick(taskComments, feedbackImage);




        //     if (taskComments === "" || (feedbackImage.length === 0)) {
        //         // Show a toast message when either taskComments is empty or feedbackImage is empty
        //         Toast.show({ text1: 'Please provide a comment or an image' });
        //     } else {
        //         // Both taskComments and feedbackImage are not empty
        //         Keyboard.dismiss();
        //         setButtonLoader(true);

        //         // Perform your actions here
        //         // ...
        //         setButtonLoader(false);
        //         onSubmitClick(taskComments, feedbackImage);
        //     }
    }



    // list for comments images
    const renderAddedSubCommentsImages = ({ item }) => {
        return <CommentImagesTab commentImages={item} />
    }

    // list for upload images
    const renderUploadFeedbackImages = ({ item }) => {
        console.log('item rennedr uploaded feedback', item);
        return <UploadImageTab commentImages={item} />
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                style={styles.body}
            >
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
                            {/* profile image , user name and time section  */}
                            <View style={styles.direction}>
                                <View style={styles.profileImageContainer}>
                                    <Image
                                        source={
                                            commentDetails?.profileimage
                                                ? { uri: `${commentDetails?.profileimage}` }
                                                : require("../../../../assets/Remindably/avatar.png")
                                        }
                                        resizeMode="contain"
                                        style={styles.image}
                                    />
                                </View>
                                <Text style={styles.userName}>
                                    {commentDetails?.commentusername
                                        ? commentDetails?.commentusername
                                        : commentDetails?.username}
                                </Text>
                            </View>
                            <Text style={styles.commentTime}>{commentTime}</Text>

                            {/* feedback comment image section */}
                            {commentDetails?.commentimages?.length >= 0 ? (
                                <FlatList
                                    data={commentDetails?.commentimages}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={renderAddedSubCommentsImages}
                                    keyExtractor={(item, index) => String(index)}
                                />
                            ) : null}

                            {/* comment section  */}
                            <View style={styles.commentContainer}>
                                {/* quotes image section  */}
                                <View style={styles.backGroundImageContainer}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="contain"
                                        source={require("../../../../assets/Remindably/Quotes.png")}
                                    />
                                </View>

                                <Text
                                    style={styles.userComments}
                                    onTextLayout={onTextLayout}
                                    numberOfLines={textShown ? undefined : 2}
                                >
                                    {commentDetails?.comment}
                                </Text>
                                {lengthMore ? (
                                    <Text
                                        onPress={toggleNumberOfLines}
                                        style={styles.readMoreText}
                                    >
                                        {textShown ? "View less..." : "View more..."}
                                    </Text>
                                ) : null}
                            </View>
                        </View>

                        {/* add comment section  */}
                        <View style={styles.addCommentContainer}>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    placeholder="Reply..."
                                    placeholderTextColor={Mycolors.textGray}
                                    style={styles.textIsetTaskCommentsnput}
                                    value={taskComments}
                                    onChangeText={text => {
                                        setTaskComments(text)
                                    }}
                                />
                                {/* upload image section  */}
                                { }
                                {feedbackImage?.length >= 0 ? (
                                    <View style={styles.uploadImageContainer}>
                                        <FlatList
                                            data={feedbackImage}
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={renderUploadFeedbackImages}
                                            keyExtractor={(item, index) => String(index)}
                                        />
                                    </View>
                                ) : null}
                            </View>

                            <TouchableOpacity
                                style={styles.cameraIconContainer}
                                onPress={() => setCameraGalleryModal(true)}
                            >
                                <Image
                                    resizeMode="contain"
                                    style={{ height: 25, width: 25 }}
                                    source={require("../../../../assets/Remindably/cameraIcon.png")}
                                />
                            </TouchableOpacity>
                            {!buttonLoader ? (
                                <TouchableOpacity
                                    style={styles.submitButtonContainer}
                                    onPress={() => {
                                        handleSubmitClick()
                                    }}
                                >
                                    <Text style={styles.submitText}>Post</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.submitButtonContainer}>
                                    <ActivityIndicator color={Mycolors.WHITE} />
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Camera Gallery Modal  */}
                    <CameraGalleryModal
                        visibleModal={cameraGalleryModal}
                        onClose={() => {
                            setCameraGalleryModal(false)
                        }}
                        cameraClick={openCamera}
                        galleryClick={openLibrary}
                    />
                </Modal>
            </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddSubCommentModal

const styles = StyleSheet.create({
    container: { flex: 1 },
    body: { flex: 1, padding: 5 },
    centeredView: {
        backgroundColor: "rgba(0, 0, 0, 0.66)",
        flex: 1,
        justifyContent: "flex-end"
    },
    modalViewGroup: {
        backgroundColor: Mycolors.THEME_WHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: "auto",
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    textInput: {
        borderRadius: 8,
        color: Mycolors.THEME_BLACK,
        fontSize: 16,
        padding: 15
    },
    errorText: {
        color: Mycolors.RED,
        padding: 10,
        position: "absolute",
        top: -18
    },
    image: {
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    direction: { flexDirection: "row" },
    profileImageContainer: {
        borderRadius: 50,
        height: 30,
        width: 30
    },
    userName: {
        color: Mycolors.THEME_BLACK,
        fontSize: 17,
        fontWeight: "700",
        padding: 5,
        width: "80%"
    },
    commentTime: {
        color: Mycolors.textGray,
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 3,
        marginLeft: 30,
        padding: 5
    },
    userComments: {
        color: Mycolors.THEME_BLACK,
        textAlign: "justify"
    },
    feedbackImageContainer: {
        borderRadius: 15,
        height: 100,
        width: 110
    },
    commentContainer: {
        paddingHorizontal: 10
    },
    backGroundImageContainer: {
        height: 80,
        opacity: 0.5,
        position: "absolute",
        right: 50,
        width: 80
    },
    cameraIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "10%"
    },
    submitButtonContainer: {
        alignItems: "center",
        backgroundColor: Mycolors.THEME_ORANGE,
        borderRadius: 5,
        height: 42,
        justifyContent: "center",
        padding: 7,
        width: "19%"
    },
    submitText: {
        color: Mycolors.WHITE,
        fontSize: 14,
        fontWeight: "500"
    },
    addCommentContainer: {
        alignItems: "center",
        backgroundColor: Mycolors.WHITE,
        flexDirection: "row",
        height: 60,
        justifyContent: "center"
    },
    textInputContainer: { width: "70%" },
    editIconBox: {
        flexDirection: "row",
        marginLeft: "22%"
    },
    editContainer: {
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center",
        marginHorizontal: 3,
        padding: 3
    },
    readMoreText: {
        color: Mycolors.THEME_ORANGE,
        lineHeight: 21
    },
    uploadImageContainer: {
        position: "absolute",
        top: -60,
        marginVertical: 20
    }
})
