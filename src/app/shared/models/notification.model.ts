import { OwnerInfo } from "./post.model";


interface Notifications {
  title?: string;
  description: string;
  dateTime: string;
  id: number;
  ownerInfo:OwnerInfo;
  url: string;
  statusImageURL?: string;
  type: string;
  refType?:number;
  ref_ID?:number;
  isRead: string;
  read?: Notifications[];
  unread?: Notifications[];
}

export { Notifications }
