import { Content } from "./post.model";


interface Album {
  title: string;
  description: string;
  viewCount: number;
  heartCount: number;
  createdDatetime: string;
  id: number;
  url?: string;
  groupID?: number;
  imageURL?: string;
  images?: Content[];
  videoURL?: string;
  videos?: Content[];
  isVideo?: boolean
}
class Photo {
  public static GetPhoto(): Album {
    return {
      title: '',
      description: '',
      viewCount: 0,
      heartCount: 0,
      url: '',
      createdDatetime: '',
      id: 0,
      imageURL: '',
      videoURL: '',
    };
  }
}

class Video {
  public static GetVideo(): Album {
    return {
      title: '',
      description: '',
      viewCount: 0,
      heartCount: 0,
      createdDatetime: '',
      id: 0,
      imageURL: '',
      videoURL: '',
    };
  }
}

 export  {Album, Photo,Video}
