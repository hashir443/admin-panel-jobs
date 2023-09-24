interface Content {
    label?: any;
    imageURL?: string;
    videoURL?: string;
    url?: string;
    type?: MenuType;
    imageURLhvr?: string;
    routeURL?: string;
    id?: number | string;
  }
  
  interface OwnerInfo {
    displayName?: string;
    name: string;
    imageURL: string;
    imageUrl?: string;
    lastSeen?: string;
    id: number;
    description?: string;
  }
  
  interface Post {
    id: number;
    title: string;
    description: string;
    tags?: string;
    images?: Content[];
    videos?: Content[];
    shareCount: number;
    commentCount: number;
    heartCount: number;
    ownerInfo?: OwnerInfo;
    postDetails?: any[];
    groupID?: number;
    isVideo?: number;
    likes?:Array<any>
  }
  
  
  class UserPost {
    public static GetPost(): Post {
      return {
        id: 0,
        title: '',
        description: '',
        tags: '',
        images: [],
        videos: [],
        shareCount: 0,
        commentCount: 0,
        heartCount: 0,
        groupID: 0,
        isVideo: 1,
      };
    }
  }
  
  interface Comments {
    id: number;
    createdDate: string;
    createdBy: number;
    lastUpdatedDate: null;
    commentDate?: string;
    lastUpdatedBy: null;
    recordStatus: number;
    ref_ID: number;
    ref_Type: number;
    comment: string;
    ownerInfo: OwnerInfo;
    parentID: number;
  }
  
  interface Followers {
    label?: string;
    imageURL?: string;
    description: string;
    type?: number;
    id: number | string;
    tags?: string;
  }
  
  enum MenuType {
    Default = 0,
    Menu = 1,
    Catelog = 2,
    SubMenu = 3,
    Group = 4,
  }
  
  interface Likes {
    id: number;
    ref_ID: number;
    ref_Type: RefTypeLikes;
  }
  
  enum RefTypeLikes {
    Default = 0,
    Post = 1,
    UserStory = 2,
    Event = 3,
    Comment = 4,
    Album = 5,
    Catalog = 6,
    Group = 7,
    RateMyBull = 8,
  }
  
  export {
    Post,
    OwnerInfo,
    Content,
    Comments,
    RefTypeLikes,
    Likes,
    Followers,
    UserPost
  };
  