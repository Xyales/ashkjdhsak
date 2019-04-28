export interface User {
    $key: string;
    firstName: string;
    lastName: string;
    email: string
    mobileNumber: Number;
}

export interface UserAcc {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }