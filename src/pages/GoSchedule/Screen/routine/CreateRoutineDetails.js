//external imports
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native"
import DatePicker from "react-native-date-picker"
import React, { useEffect, useRef, useState } from "react"
import moment from "moment"
import axios from "axios"
// import { Formik } from "formik"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
//internal imports
import AllTimeWithCross from "../groups/AllTimeWithCross"
import CommonToast from "../../Constants/CommonToast"
import CustomHeader from "../../Constants/CustomHeaader"
import CustomModal from "../groups/CustomModal"
// import GroupServices from "../../service/GroupServices"
import InviteMemberOnRoutineModal from "./InviteMemberOnRoutineModal"
import RecentlyAddedMembersTab from "../groups/RecentlyAddedMembersTab"
import RepeatCalendarModal from "../groups/RepeatCalendarModal"
import RepeatModal from "../groups/RepeatModal"
import SubmitButton from "../../Constants/SubmitButton"
// import { colors } from "../../constants/ColorConstant"
import { Mycolors } from "../../../../utility/Mycolors"
import Toast from 'react-native-toast-message'
import { requestGetApi, get_memberList, add_members, invite_user, add_task, requestPostApi, creation, createRoutine } from '../../../../WebApi/Service'
import { useSelector, useDispatch } from 'react-redux';
// import { routineValidation } from "../../constants/SchemaValidation"

const CreateRoutineDetails = ({ navigation, route }) => {
    const [buttonLoader, setButtonLoader] = useState(false)
    const [calendarModal, setCalendarModal] = useState(false)
    const [customModal, setCustomModal] = useState(false)
    const [date, setDate] = useState(new Date())
    const [daysList, setDaysList] = useState([])
    const [errMsg, setErrMsg] = useState(false)
    const [memberIdModal, setMemberIdModal] = useState(false)
    const [open, setOpen] = useState(false)
    const [repeatModal, setRepeatModal] = useState(false)
    const [repeatValue, setRepeatValue] = useState("O")
    const [routineType, setRoutineType] = useState("S")
    const [selectedDate, setSelectedDate] = useState("")
    const [selectedMembersId, setSelectedMembersId] = useState([])
    const [selectedMembersList, setSelectedMembersList] = useState([])
    const [showRepeatValue, setShowRepeatValue] = useState("Once")
    const [timeChecked, setTimeChecked] = useState(false)
    const [title, setTitle] = useState('')
    const [subHeading, setSubHeading] = useState('')
    const [description, setDescription] = useState('')
    const [timeList, setTimeList] = useState([])
    const [scheduleStartDate] = useState([
        moment(new Date()).format("YYYY-MM-DD")
    ])
    const toastRef = useRef()
    const User = useSelector(state => state.user.user_details)
    const initalValue = () => {
        setSelectedDate(''), setSelectedMembersId([]), setSelectedMembersList([]), setDescription(''), setTimeList([]), setTitle('')
        setSubHeading('')

    }
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            initalValue()
            console.log('route.params createRoutine', route.params);

        })
        return unsubscribe
    }, [navigation])

    // list for time with cross button
    const renderAllTimeTab = ({ item }) => {
        return (
            <AllTimeWithCross items={item} handleChecked={handleTimeCrossCLick} />
        )
    }

    // function on remove selected time click
    const handleTimeCrossCLick = selectedValue => {
        setTimeChecked(true)
        if (timeList.includes(selectedValue)) {
            setTimeList(timeList.filter(ids => ids !== selectedValue))
        } else {
            setTimeList([...timeList, selectedValue])
        }
        setErrMsg(false)
    }

    // function for close modal after select the repeat data
    const handleRepeatModalClose = text => {
        setRepeatModal(false)

        if (text === "" && repeatValue == "") {
            setRepeatValue("O")
            setShowRepeatValue("Once")
        } else {
            if (text === "O") {
                setRepeatValue("O")
                setShowRepeatValue("Once")
            } else if (text === "D") {
                setRepeatValue("D")
                setShowRepeatValue("Daily")
            } else if (text === "T") {
                setRepeatValue("T")
                setShowRepeatValue("Date")
                setCalendarModal(true)
            } else if (text === "C") {
                setRepeatValue("C")
                setShowRepeatValue("Custom")
                setCustomModal(true)
            }
        }
    }

    // function for close modal after select the once data
    const handleCustomModalClose = () => {
        setCustomModal(false)
        setRepeatValue("O")
        setShowRepeatValue("Once")
    }

    // function for close modal after select the custom data
    const handleCustomSubmitClick = dayList => {
        setCustomModal(false)
        setDaysList(dayList)
    }

    // function for close calender modal after select the date
    const handleCalendarModalClose = () => {
        setCalendarModal(false)
        setRepeatValue("O")
        setShowRepeatValue("Once")
    }

    // function for close calender modal after select the date and submit click
    const handleCalendarSubmitClick = selectDate => {
        setCalendarModal(false)
        setSelectedDate(moment(selectDate).format("YYYY-MM-DD"))
    }

    // function for member modal close
    const handleMemberIdModalClose = () => {
        setMemberIdModal(false)
    }

    // function for close modal after member add
    const handleMemberIdAddClick = (memberList, userList) => {
        console.log('memberListttt frpm details---->>', userList);
        Toast.show({ text1: 'Member invited successfully' });
        setMemberIdModal(false)
        setSelectedMembersId(memberList)
        setSelectedMembersList(userList)
    }

    // list for time with cross icon
    const renderAddedMembers = ({ item }) => {
        return <RecentlyAddedMembersTab item={item} />
    }

    //  function for routine submit button click api call to create routine
    // const onSubmit = async () => {
    //     console.log('my create routine')
    //     // if (timeList.length >= 1) {
    //     // setButtonLoader(true)
    //     // setErrMsg(false)

    //     const feedBackData = new FormData()
    //     // feedBackData.append("businessid", route?.params?.businessId)
    //     feedBackData.append("name", title)
    //     // feedBackData.append("subtitle", subHeading)
    //     feedBackData.append("description", description)
    //     // timeList.map((e, index) => {
    //     //     feedBackData.append(`schedule_time`, e)
    //     // })
    //     // feedBackData.append("repeat", repeatValue)
    //     // daysList.map((e, index) => {
    //     //     feedBackData.append(`custom`, e)
    //     // })
    //     // feedBackData.append("date", selectedDate)
    //     // feedBackData.append("task_type", "R")
    //     // feedBackData.append("repeat_time", 0)
    //     // feedBackData.append("privacy", routineType)
    //     // feedBackData.append("schedule_startdate", scheduleStartDate)
    //     // feedBackData.append("preference_id", route?.params?.preferenceId[0])
    //     // selectedMembersId.map((e, index) => {
    //     //     feedBackData.append(`member`, e)
    //     // })
    //     console.log('my data from thepost api------>>', feedBackData);
    //     const { responseJson, err } = await requestPostApi(createRoutine, feedBackData, 'POSt', User.token)
    //     setLoader(false)
    //     console.log('response of rotune create', responseJson)
    //     // setMyGroupList(responseJson.body)
    //     if (responseJson.headers.success == true) {
    //         // console.log('the res after sucess of specific members tasks', responseJson)
    //         // const data = responseJson.body.map((el, index) => ({ ...el, memdId: (index + 1)?.toString() }))
    //         // setAllMembersData(data)
    //         // setGroupName(responseJson.body.name)
    //         // setGroupDetails(responseJson.body)

    //     } else {

    //         setalert_sms(err)
    //         setMy_Alert(true)
    //     }
    //     // }
    // }
    const onSubmit = async () => {
        if (!title || !description) {
            // Show a toast message if title or description is empty
            Toast.show({ text1: 'Title and description are required' });
            return; // Exit the function without making the API call
        }
        if (timeList.length == 0) {
            Toast.show({ text1: 'Please select schedule time' });
            return;
        }
        try {
            console.log('Starting post creation...', route?.params?.preferenceId[0]);


            const data = new FormData();
            data.append("name", title);
            data.append("preference_id", route?.params?.preferenceId[0])

            data.append("description", description)
            data.append("subtitle", subHeading)

            // timeList.map((e, index) => {
            //     console.log(e, 'timeList');
            //     data.append(`schedule_time`, e)
            // })
            timeList.forEach((e, index) => {
                data.append(`schedule_time[${index}]`, e);
            });
            data.append("repeat", repeatValue)
            daysList.map((e, index) => {
                data.append(`custom`, e)
            })
            data.append("date", selectedDate)
            data.append("repeat_time", 0)
            data.append("privacy", routineType)

            selectedMembersId.map((e, index) => {

                console.log('my memer for stred routie---->>', e);
                data.append(`members[]`, e)
            })
            daysList.map((e, index) => {
                data.append(`custom`, e)
            })

            data.append("task_type", "R");
            // console.log('my respinse from tge start date', scheduleStartDate);
            // data.append("schedule_startdate", scheduleStartDate)
            // console.log('does it reac here ');


            console.log('Data to be sent for routine:', data);

            const response = await axios.post(
                'http://54.153.75.225/backend/api/v1/goaccounting/add-task',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${User.token}`,
                    },
                }
            );

            console.log('Response:', response.data);

            if (response.status === 200) {
                console.log('Post created successfully', response);
                navigation.goBack()
                Toast.show({ text1: response.data.headers.message });
                setTitle('')
                setDescription('')
                setSubHeading('')
                setTimeList([])
                setDaysList([])
                setSelectedDate('')
                setSelectedMembersId([])
                setSelectedMembersList([])

            } else {
                console.log('Error creating post:', response.data.headers.message);
            }

            // Assuming you want to set loading to false after the request.

        } catch (error) {
            console.error('Error in CreatePost', error);
        }
    }
    const initialValues = {
        description: "",
        subTitle: "",
        title: ""
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {/* header section */}
            <CustomHeader
                headerText={"Create Your Routine"}
                backButton={{
                    visible: true,
                    onClick: () => {
                        navigation.goBack()
                    }
                }}
            />

            {/* body section */}
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <View
                // validationSchema={routineValidation}
                // initialValues={initialValues}
                // onSubmit={values => {
                //     onSubmit(values)
                // }}
                >
                    {/* {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        setFieldTouched
                    }) => 
                    
                    
                    ( */}
                    <View style={styles.body}>
                        {/* public and private section  */}
                        <View style={styles.routineContainer}>
                            <TouchableOpacity
                                style={
                                    routineType === "S"
                                        ? styles.selectedPublicContainer
                                        : styles.publicContainer
                                }
                                onPress={() => {
                                    setRoutineType("S")
                                }}
                            >
                                <Image
                                    resizeMode="contain"
                                    tintColor={
                                        routineType === "S"
                                            ? Mycolors.THEME_ORANGE
                                            : Mycolors.THEME_BLACK
                                    }
                                    source={require("../../../../assets/Remindably/Lock.png")}
                                />
                                <Text
                                    style={
                                        routineType === "S"
                                            ? styles.selectedPublicText
                                            : styles.publicText
                                    }
                                >
                                    Private Routine
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={
                                    routineType === "P"
                                        ? styles.selectedPublicContainer
                                        : styles.publicContainer
                                }
                                onPress={() => {
                                    setRoutineType("P")
                                }}
                            >
                                <Image
                                    resizeMode="contain"
                                    tintColor={
                                        routineType === "P"
                                            ? Mycolors.THEME_ORANGE
                                            : Mycolors.THEME_BLACK
                                    }
                                    source={require("../../../../assets/Remindably/Globe.png")}
                                />
                                <Text
                                    style={
                                        routineType === "P"
                                            ? styles.selectedPublicText
                                            : styles.publicText
                                    }
                                >
                                    Public Routine
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* text according to routine type  */}
                        {routineType === "P" ? (
                            <Text style={styles.noteText}>
                                Public Routine:- Routine will be shared in the public
                                community.
                            </Text>
                        ) : routineType === "S" ? (
                            <Text style={styles.noteText}>
                                Private Routine:- Routine can be shared with the group only.
                            </Text>
                        ) : null}

                        {/* date time section  */}
                        <View style={styles.textDirection}>
                            <Text style={styles.preferenceText}>Time</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setOpen(true)
                                }}
                            >
                                <Text style={styles.addTimeText}>Add Time</Text>
                            </TouchableOpacity>

                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                title={"Select Time"}
                                mode={"time"}
                                minuteInterval={15}
                                onConfirm={date => {
                                    setOpen(false)
                                    setDate(date)
                                    setErrMsg(false)

                                    let selectedTime = moment(date).format("hh:mm A")
                                    if (timeList.includes(selectedTime)) {
                                    } else {
                                        setTimeList([...timeList, selectedTime])
                                    }
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>

                        {timeList?.length > 0 ? (
                            <FlatList
                                data={timeList}
                                renderItem={renderAllTimeTab}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => String(index)}
                            />
                        ) : (
                            <Text style={styles.noTimeText}>
                                No Time selected. Click on
                                <Text style={styles.noTimeTextOrange}> “Add Time” </Text>
                                to add Time.
                            </Text>
                        )}

                        {errMsg ? (
                            <Text style={styles.errorMessage}>
                                Please choose repeat time
                            </Text>
                        ) : (
                            <Text style={styles.errorMessage} />
                        )}

                        {/* repeat container  */}
                        <TouchableOpacity
                            onPress={() => setRepeatModal(true)}
                            style={styles.repeatContainer}
                        >
                            <Text style={styles.preferenceText}>Select Repeat Option</Text>
                            <TouchableOpacity
                                onPress={() => setRepeatModal(true)}
                                style={styles.direction}
                            >
                                {console.log('my repeat value selected--->>', showRepeatValue)}
                                {showRepeatValue === 'Date' ? <Text style={styles.repeatValue}>{selectedDate}</Text> : <Text style={styles.repeatValue}>{showRepeatValue}</Text>}
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../../assets/Remindably/repeatArrow.png")}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>

                        {/* title section  */}
                        <View style={{ paddingVertical: 12 }}>
                            <TextInput
                                placeholder="Enter title"
                                placeholderTextColor={Mycolors.textGray}
                                style={styles.textInput}
                                value={title}


                                onChangeText={(e) => setTitle(e)}
                            // value={values.title}
                            // onChangeText={handleChange("title")}
                            // onBlur={() => {
                            //     handleBlur("title")
                            //     setFieldTouched("title")
                            // }}
                            />

                            {/* <Text style={styles.errorMessage}>
                                {touched.title && errors.title}
                            </Text> */}
                        </View>

                        {/*Sub title section  */}
                        <View style={{ paddingVertical: 12 }}>
                            <TextInput
                                placeholder="Enter sub title"
                                placeholderTextColor={Mycolors.textGray}
                                style={styles.textInput}
                                value={subHeading}
                                onChangeText={(e) => setSubHeading(e)}
                            // value={values.subTitle}
                            // onChangeText={handleChange("subTitle")}
                            // onBlur={() => {
                            //     handleBlur("subTitle")
                            //     setFieldTouched("subTitle")
                            // }}
                            />

                            {/* <Text style={styles.errorMessage}>
                                {touched.subTitle && errors.subTitle}
                            </Text> */}
                        </View>

                        {/*Description section  */}
                        <View style={{ paddingVertical: 12 }}>
                            <TextInput
                                placeholder="Enter description here…"
                                placeholderTextColor={Mycolors.textGray}
                                style={styles.descriptionInput}
                                // value={values.description}
                                numberOfLines={3}
                                multiline={true}
                                textAlignVertical="top"
                                value={description}
                                onChangeText={(e) => setDescription(e)}
                            // onChangeText={handleChange("description")}
                            // onBlur={() => {
                            //     handleBlur("description")
                            //     setFieldTouched("description")
                            // }}
                            />
                            {/* <Text style={styles.errorMessage}>
                                {touched.description && errors.description}
                            </Text> */}
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.inviteMemberContainer}
                                onPress={() => {
                                    setMemberIdModal(true)
                                }}
                            >
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../../assets/Remindably/UserPlus.png")}
                                />
                                <Text style={styles.inviteMemberText}>Invite new user</Text>
                            </TouchableOpacity>
                        </View>

                        {selectedMembersList?.length > 0 ? (
                            <FlatList
                                data={selectedMembersList}
                                renderItem={renderAddedMembers}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => String(index)}
                            />
                        ) : null}

                        {/* save group button  */}
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => onSubmit()}>
                            <SubmitButton
                                loader={buttonLoader}
                                buttonText={"Publish Routine"}
                            // submitButton={handleSubmit}
                            />
                        </TouchableOpacity>

                        {/* repeat modal  */}
                        <RepeatModal
                            visibleModal={repeatModal}
                            onClose={handleRepeatModalClose}
                            repeatValue={repeatValue}
                        />
                        {/* Custom modal  */}
                        <CustomModal
                            visibleModal={customModal}
                            onClose={handleCustomModalClose}
                            onSubmitClick={handleCustomSubmitClick}
                        />
                        {/* Calender modal  */}
                        <RepeatCalendarModal
                            visibleModal={calendarModal}
                            onClose={handleCalendarModalClose}
                            onSubmitClick={handleCalendarSubmitClick}
                        />
                        {/* Member Email Id modal  */}
                        <InviteMemberOnRoutineModal
                            visibleModal={memberIdModal}
                            onClose={handleMemberIdModalClose}
                            onSubmitClick={handleMemberIdAddClick}
                            navigation={navigation}
                            selectedMembersId={selectedMembersId}
                            selectedMembersList={selectedMembersList}
                        />
                        {/* toaster message for error response from API  */}
                        <CommonToast ref={toastRef} />
                    </View>
                    {/* // ) */}


                </View>
            </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
    )
}

export default CreateRoutineDetails

const styles = StyleSheet.create({
    container: { flex: 1 },
    body: { flex: 1, padding: 10, paddingBottom: "20%" },
    repeatContainer: {
        alignItems: "center",
        backgroundColor: Mycolors.WHITE,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
        padding: 5,
        paddingVertical: 10
    },
    repeatValue: {
        color: Mycolors.THEME_BLACK,
        fontSize: 16,
        fontWeight: "400"
    },
    direction: { flexDirection: "row" },
    dateTimeLabel: {
        color: Mycolors.THEME_BLACK,
        fontSize: 18,
        fontWeight: "500",
        padding: 5
    },
    noteText: {
        color: Mycolors.BLACK,
        fontSize: 14,
        fontWeight: "400",
        padding: 5
    },
    preferenceText: {
        color: Mycolors.THEME_BLACK,
        fontSize: 18,
        fontWeight: "500",
        letterSpacing: 0.5,
        paddingVertical: 8
    },
    textInput: {
        backgroundColor: Mycolors.WHITE,
        borderRadius: 10,
        color: Mycolors.THEME_BLACK,
        fontSize: 16,
        padding: 15,
        boderColor: Mycolors.placeholdercolor,
        borderWidth: 1
    },
    descriptionInput: {
        backgroundColor: Mycolors.WHITE,
        borderRadius: 10,
        color: Mycolors.THEME_BLACK,
        fontSize: 16,
        height: 100,
        padding: 12,
        boderColor: Mycolors.placeholdercolor,
        borderWidth: 1
    },
    errorMessage: {
        color: Mycolors.RED,
        paddingHorizontal: 10
    },
    inviteMemberContainer: {
        alignItems: "center",
        backgroundColor: Mycolors.WHITE,
        borderColor: Mycolors.GRAY,
        borderRadius: 30,
        borderStyle: "dotted",
        borderWidth: 2,
        flexDirection: "row",
        height: 45,
        justifyContent: "center",
        marginBottom: 10,
        width: "48%"
    },
    inviteMemberText: {
        color: Mycolors.THEME_BLACK,
        fontSize: 14,
        fontWeight: "500",
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    routineContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    publicContainer: {
        alignItems: "center",
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        width: "45%"
    },
    publicText: {
        color: Mycolors.THEME_BLACK,
        fontSize: 16,
        fontWeight: "500",
        paddingHorizontal: 5,
        paddingVertical: 15
    },
    selectedPublicContainer: {
        alignItems: "center",
        backgroundColor: Mycolors.WHITE,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        width: "45%"
    },
    selectedPublicText: {
        color: Mycolors.THEME_ORANGE,
        fontSize: 16,
        fontWeight: "500",
        paddingHorizontal: 5,
        paddingVertical: 15
    },
    buttonContainer: { paddingVertical: 10 },
    textDirection: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    addTimeText: {
        color: Mycolors.THEME_ORANGE,
        fontSize: 14
    },
    noTimeText: {
        color: Mycolors.THEME_BLACK,
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center"
    },
    noTimeTextOrange: {
        color: Mycolors.THEME_ORANGE,
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center"
    }
})
