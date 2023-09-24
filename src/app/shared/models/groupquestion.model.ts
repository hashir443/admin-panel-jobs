import { OwnerInfo } from "./post.model";


interface GroupQuestionPost {
    id: number;
    title: string;
    description: string;
    tags?: string;
    shareCount: number;
    commentCount: number;
    heartCount: number;
    ownerInfo?: OwnerInfo;
    groupID?: number;
    likes?:Array<any>
  }
  
  class QuestionPost {
    public static GetPost(): GroupQuestionPost {
      return {
        id: 0,
        title: '',
        description: '',
        tags: '',
        shareCount: 0,
        commentCount: 0,
        heartCount: 0,
        groupID: 0,
      };
    }
  }

  export { QuestionPost, GroupQuestionPost }