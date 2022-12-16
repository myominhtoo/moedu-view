
export type Assigment = {
    id : number,
    assignmentName : string,
    descirption : string,
    assignmentFile : File,
    assignmentFileUri : string,
    createdUser : User,
    batch : Batch,
    startDate : Date | string,
    dueDate : Date | string
}

export type Attendance = {
    id : number,
    signedDate : Date | string,
    sign : string,
    batchSchedule : BatchSchedule
}

export type Batch = {
    id : number,
    batchNumber : number,
    maxStudent : number,
    description : string,
    discount : number,
    startDate : Date  | string,
    endDate : Date | string,
    subjects : Subject []
}

export type BatchSchedule = {
    id : number,
    createdDate : Date | string,
    lastUpdatedDate : Date | string,
    batch : Batch,
    schedules : Schledule [],
}

export type Course = {
    id : number,
    courseName : string,
    description : string,
    duration : string,
    fees : number,
    courseImgUri : string,
    courseImg : File,
    batches : Batch []
}

export type IncomeSalary = {
    id : number,
    totalFees : number,
    receivedFees : number,
    batch : Batch
}

export type Notification = {
    id : number,
    content : string,
    isPersonalNotification : boolean,
    sentUser : User,
    batch : Batch,
    createdDate : Date | string,
    lastUpdateDate : Date | string,
}

export type Resource = {
    id : number,
    resourceName : string,
    description : string,
    resourceFile : File,
    resourceFileUri : string,
    updatedDate : Date | string,
    lastUpdatedDate : Date | string,
    uploadedUser : User
}

export type ResourceComment = {
    id : number,
    content : string,
    commentedDate : Date | string,
    lastUpdatedDate : Date | string,
    commentedUser : User,
    parentComment : ResourceComment,
    resource : Resource
}

export type ResourceFolder = {
    id : number,
    resourceFolderName : string,
    description : string,
    createdDate : Date | string,
    lastUpdatedDate : Date | string,
    createdUser : User,
    resources : Resource [],
}

export type Role = {
    id : number,
    roleName : string,
}

export type Schledule = {
    id : number,
    about : string,
    date : Date | string,
    timeFrom : Date | string,
    timeTo : Date | string
}

export type StudentHasTutorial = {
    id : number,
    gotMarks : number,
    tutorialStatus : boolean,
    tutorialGrade : string,
    savedDate : Date | string,
    lastUpdatedDate : Date | string,
    studentHasTutorialQuestions : StudentHasTutorialQuestion[],
}

export type StudentHasTutorialQuestion = {
    id : number,
    answers : string,
    student : User,
    tutorialQuestion : TutorialQuestion,
    answerIds : number [] | string []
}

export type StudentAttendBatch = {
    id : number,
    student : User,
    batch : Batch,
    hasConfirmedRegistration : boolean,
    hasPaidFullFees : boolean,
    remainFeesPercent : number,
    registeredDate : Date | number,
    lastUpdatedDate : Date| string
}

export type StudentDoAssigment = {
    id : number,
    uploadedDate : Date | string,
    student : User,
    assigment : Assigment
}

export type Subject = {
    id : number,
    subjectName : string,
    detail : string,
    referenceBooks : string,
    startedDate : Date | string,
    lastUpdatedDate : Date | string
}

export type TeacherTeachBatch = {
    id : number,
    teacher : User,
    batch : Batch
}

export type Tutorial = {
    id : number,
    tutorialName : string,
    description : string,
    allowedTime : string | number,
    isAbleOnlyLimitedtime : boolean,
    timeFrom : Date | string,
    timeTo : Date | string,
    tutorialFile : File,
    tutorialFileUri : string,
    createdUser : User
}

export type TutorialQuestion = {
    id : number,
    questionContent : string,
    totalMark : number,
    canUploadFile : boolean,
    createdDate : Date | string,
    lastUpdatedDate : Date | string,
    answers : TutorialQuestionAnswer []
}

export type TutorialQuestionAnswer = {
    id : number,
    answerContent : string,
    isRight : boolean,
    createdDate : Date | string,
    lastUpdatedDate : Date | string,
}

export type User = {
    id : number,
    firstName : string,
    lastName : string,
    email :string,
    password : string,
    role : Role,
    phone : string,
    address : string,
    bio : string,
    profileImage : File,
    profileImageUri : string,
    isEnable : boolean,
    verifyCode : string,
    createdDate : Date | string,
    updatedDate : Date | string,
    lastLoggedInDate : Date | string,
    lastLoggedInDeviceId : string,
    nickName : string,
    deviceId : string
}

export type UserMuteRingtone = {
    id : number,
    user : User
}