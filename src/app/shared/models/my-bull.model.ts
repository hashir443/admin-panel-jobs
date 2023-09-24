import { Content } from "./post.model";


interface MyBull {
    id: number;
    title: string;
    description?: string;
    images?: Content[];
    video?: Content;
    totalRating?: number;
    usersInfo: UserInfo[];
    convertedAvgScore?:any
}

interface UserInfo {
    id: number;
    name: string;
    photoURL: string;
    rating: number;
    createdDate: string;
    comment: string;
}

export { MyBull, UserInfo }