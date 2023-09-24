import { Content } from "./post.model";


interface Pet {
  title: string;
  id: number;
  images?: Content[];
  videos?: Content[];
  description: string;
  type?: Type;
  tags?: string;
  isVideo?: number;
}

interface PetById {
  id:number;
  title: string,
  description: string,
  ownerInfo:PetOwnerInfo,
  resources: PetResources[],
  comments: PetComments[],
};

interface PetOwnerInfo {
  displayName: string,
    id: number,
    imageUrl: string,
}

interface PetResources {
  id:number,
  label: string,
  url: string,
}

interface PetComments {
    comments: string,
    createdDate: string,
    imageUrl: string,
    userID: number,
    userName: string,
}

enum Type{
  All = 1,
  MyPet = 2,
}

class NewPet {
  public static GetPet(): Pet {
    return {
      title: '',
      id: 0,
      description: '',
      videos: [],
      images: [],
      tags: ''
    };
  }
}

export { Pet,NewPet,Type,PetById };
