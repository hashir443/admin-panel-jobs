import { OwnerInfo, Post } from "./post.model";


interface Group {
  id: number | string;
  coverImageURL?: string;
  title: string;
  description: string;
  imageURL: string;
  adminInfo: OwnerInfo[];
  posts: Post[];

}

interface GroupMember {
  name: string;
  imageURL: string;
  lastSeen?: string;
  userID: number;
  city?: string;
  joinDate: string;
  role?: MemberRole;
}

interface Pagination {
    pageNumber: number;
    pageSize: number;
    total: number;
    from?: number;
    to?: number;
    lastPageURL?: string;
}

enum MemberRole {
  Admin = "Admin",
  Moderator = "Moderator",
  Member = "Member",
}

export { Group, GroupMember, MemberRole, Pagination }
