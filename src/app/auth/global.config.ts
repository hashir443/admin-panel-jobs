export class GLOBAL {
    private static _currentUserInfo: UserINFO;


    public static get currentUserInfo(): any {
        return this._currentUserInfo;
    }

    public static set currentUserInfo(id: any) {
        this._currentUserInfo = id;
    }

}

export type UserINFO = {
    userID: number,
    mobileNumber:string,
    firstName? : string,
    lastName? : string,
    token?: string,
    password?: string
}
