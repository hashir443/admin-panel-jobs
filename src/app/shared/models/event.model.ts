import { Content, OwnerInfo } from "./post.model";


interface Event {
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location: string;
  attendingUsers: interestedUser[];
  interestedUsers: interestedUser[];
  interestedCount: number;
  attendingCount: number;
  shareURL: string;
  pollingStartDate: string;
  pollingEndDate: string;
  isPollingEnabled: boolean;
  ownerInfo?: OwnerInfo;
  id: number;
  images?: Content[];
  videos?: Content[];
  eventPolling?: PetDetail[];
}

interface interestedUser {
  comment?: string;
  createdDate?: string;
  id?: number;
  name?: string;
  photoURL?: string;
  rating?: string;
}

class NewEvent {
  public static GetEvent(): Event {
    return {
      title: '',
      description: '',
      images: [],
      startDate: '',
      endDate: '',
      pollingStartDate: '',
      pollingEndDate: '',
      location: '',
      isPollingEnabled: false,
      interestedCount: 0,
      attendingCount: 0,
      shareURL: '',
      id: 0,
      videos: [],
      attendingUsers: [],
      interestedUsers: [],
    };
  }
}

interface PetDetail {
  id: number;
  eventID?: number;
  name: string;
  ownerInfo: string;
  images: Content[];
  videos?: Content[];
  description: string;
  existingImages?: Content[];
  checkValueForIdReset?: number;
  percentage?: number;
  count?: number;
  users?: UserList[];
  isNew?: boolean;
  voteInfo?: VoteInfo;
}

class NewPetDetail {
  public static GetPetDetail(): PetDetail {
    return {
      id: 0,
      name: '',
      ownerInfo: '',
      images: [],
      videos: [],
      description: '',
    };
  }
}

interface VoteInfo {
  id: number;
  ref_ID: number;
  ref_Type: number;
}

interface UserList {
  id: number;
  name: string;
  imageURL: string;
  lastSeen: string;
}

interface getVotingStats {
  ref_ID: number;
  ref_Type: number;
  count: number;
  users: any;
  percentage: any;
}

enum EventType {
  Interested = 1,
  Attending = 2,
}

export { Event, NewEvent, EventType, PetDetail, NewPetDetail, getVotingStats };
