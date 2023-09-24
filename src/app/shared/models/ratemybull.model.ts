import { User } from "../../access/models/user.model";
import { Content } from "./post.model";


interface RateMyBull {
  id: number;
  images?: Content[];
  video?: Content;
  title: string;
  description: string;
  totalRating: number;
  averageRating?: number;
  submittedRating?: number;
  raterInfo?: User[];
}
//id name image and submitted rating
export { RateMyBull };
