// external imports
import * as yup from "yup"

// validation for signUp page
export const signUpValidation = yup.object().shape({
    email: yup
        .string()
        .email("*Please enter valid email id")
        .trim()
        .required("*Email Id is required")
})

// validation for signUp details page
export const nameValidation = yup.object().shape({
    name: yup
        .string()
        .min(3, "*Name must be at least 3 characters")
        .max(20, "*Name must be less than 20 characters")
        .matches(/^[aA-zZ][aA-zZ\s]*$/, "*Please enter valid name")
        .required("*Name is required")
})

// validation for name on group page
export const name = yup.object().shape({
    groupName: yup.string().required("*Group name is required")
})

// validation for name on task page
export const taskName = yup.object().shape({
    taskName: yup.string().required("*Task name is required")
})

// validation for add member with email id on member modal
export const searchMemberValidation = yup.object().shape({
    email: yup
        .string()
        .email("*Please enter valid email id")
        .trim()
        .required("*Email id is required"),
    firstName: yup
        .string()
        .matches(/^[aA-zZ][aA-zZ\s]*$/, "*Please enter valid name")
        .required("First name is required"),
    secondName: yup
        .string()
        .matches(/^[aA-zZ][aA-zZ\s]*$/, "*Please enter valid name")
})

// validation for name and description on routine page
export const routineValidation = yup.object().shape({
    title: yup.string().required("*Title is required"),
    description: yup.string().required("*Description is required")
})

// validation for name and description on notes page
export const notesValidation = yup.object().shape({
    title: yup.string().required("*Title is required"),
    description: yup.string().required("*Description is required")
})

// validation for card details on payment page
export const cardValidation = yup.object().shape({
    cardNumber: yup.number().required("*Card number is required"),
    expMonth: yup.number().required("*Month is required"),
    expYear: yup.number().required("*Year is required"),
    cvv: yup.number().required("*Cvv is required")
})

// validation for comment
export const comment = yup.object().shape({
    commentText: yup.string().required("*Comment is required")
})

// validation for card name on add expense page
export const card = yup.object().shape({
    cardName: yup.string().required("*Card name is required")
})

// validation for cheque details on add expense page
export const cheque = yup.object().shape({
    chequeNumber: yup.string().required("*Cheque number is required"),
    accountNumber: yup.string().required("*Account number is required"),
    bankName: yup.string().required("*Bank name is required")
})

// validation for cheque details on add expense page
export const eft = yup.object().shape({
    accountNumber: yup.string().required("*Account number is required"),
    bankName: yup.string().required("*Bank name is required")
})

// validation for expense details on add expense page
export const expansesValidation = yup.object().shape({
    title: yup.string().required("*Title is required"),
    description: yup.string().required("*Description is required")
})

// validation for budgetary name on add budgetary page
export const budgetaryValidation = yup.object().shape({
    title: yup.string().required("*Title is required")
})

// validation for split name on add split page
export const splitValidation = yup.object().shape({
    title: yup.string().required("*Title is required")
})

// validation for business details on create business page
export const businessValidation = yup.object().shape({
    name: yup.string().required("*Business name is required"),
    number: yup
        .string()
        .required("*Number is required")
        .min(10, "*Phone number must be 10 characters"),
    email: yup
        .string()
        .email("*Please enter valid email id")
        .trim()
        .required("*Email id is required"),
    description: yup.string().required("*Description is required")
})

// validation for add post on business page
export const postValidation = yup.object().shape({
    description: yup.string().required("*Details is required")
})

// validation for event details on create event page
export const eventValidation = yup.object().shape({
    title: yup.string().required("*Title is required"),
    description: yup.string().required("*Description is required"),
    eventType: yup.string().required("*Event type is required")
})

// validation for event details on create event details page
export const eventDetailsValidation = yup.object().shape({
    eventDetails: yup.string(),
    eventTag: yup.string(),
    number: yup
        .string()
        .required("*Number is required")
        .min(10, "*Phone number must be 10 characters")
})

// validation for create category on create budgetary page
export const categoryValidation = yup.object().shape({
    name: yup.string().required("*Name is required")
})
