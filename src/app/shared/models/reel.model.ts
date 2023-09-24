import { Content } from "./post.model";

interface Reel {
  autherName: string;
  autherImage: string;
  id: number;
  images: Content[];
  videos: Content[];
  title: string;
  description: string
  userStoryDetails?: any[]
  isExpired: boolean
}

export { Reel }
