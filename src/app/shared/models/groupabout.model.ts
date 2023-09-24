import { GroupMember } from "./group.model";

interface ContactBasicInfo {
  groupId: number;
  email: string;
  contactNumber: string;
  category: string;
  rating: number; //out of 5 stars
  ratingCount: number; //total rating count aka by all users
  name?: string;
  description: string;
  createdAt: string;
  users?: GroupMember[]
}

class CreateGroupBasicInfo {
  public static BasicGroupInfo(): ContactBasicInfo {
    return {
      groupId: 0,
      email: '',
      contactNumber: '',
      category: '',
      rating: 0,
      ratingCount: 0,
      name: '',
	    description: '',
      createdAt: '',
      users: []
    };
  }
}

interface PageTransparency {
  groupId: number;
  groupUniqueId: string;
  createdDate: string;
  adminInfo: string;
}

class CreateGroupPageTransparency{
    public static PageTransparencyInfo(): PageTransparency {
      return {
        groupId: 0,
        groupUniqueId: '',
        createdDate: '',
        adminInfo: ''
      };
    }
  }

interface PrivacyLegalInfo {
  groupId: number;
  privacyLink: string;
  legalLink: string;
}

interface GroupAboutInfo {
  id: number;
  email: string;
  contactNumber: string;
  category: string;
  title?: string;
  description: string;
  coverImageURL:string;
  imageURL:string;
  users?: GroupMember[];
  groupUniqueId?: string;
  createdDate: string;
  adminInfo?: string;
  privacyLink?: string;
  legalLink: string;
  rating?: number;
  ratingCount?: number;
  adminInfos: SenderReceiverInfo[];
  memberInfo: SenderReceiverInfo
}

interface SenderReceiverInfo {
    name: string,
    imageUrl: string,
    lastSeen: string,
    joinDate: string,
}

class CreateGroupPrivacyLegalInfo{
    public static GroupPrivacyLegalInfo(): PrivacyLegalInfo {
      return {
        groupId: 0,
        privacyLink: '',
        legalLink: ''
      };
    }
  }

export {
  ContactBasicInfo,
  CreateGroupBasicInfo,
  PageTransparency,
  CreateGroupPageTransparency,
  PrivacyLegalInfo,
  CreateGroupPrivacyLegalInfo,
  GroupAboutInfo,
  SenderReceiverInfo
};
