interface PersonalInfo {
  aboutMe?: string;
  mobileNumber?: string;
  email?: string;
}

interface BasicInfo {
  id: number;
  aboutMe?: any;
  dateOfBirth: string;
  language: string;
  city: string;
  relationStatus: number;
  strRelationStatus: string;
  gender: number;
  strGender: string;
  userID: number;
}

interface WorkInfo {
  id: number;
  jobTitle: string;
  employmentStatus: number;
  strEmploymentStatus: string;
  companyName: string;
  officeLocation: string;
  isCurrentlyWorking: boolean;
  startDate: string;
  endDate?: string;
  description: string;
  userID: number;
}

interface EducationInfo {
  id: number;
  instituteName: string;
  grade: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  activities: string;
  description: string;
  userID: number;
}

interface Profile {
  personalInfo: PersonalInfo;
  basicInfo: BasicInfo;
  workInfo: WorkInfo[];
  educationInfo: EducationInfo[];
}

class Education {
  public static GetEducation(): EducationInfo {
    return {
      id: 0,
      instituteName: '',
      grade: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      activities: '',
      description: '',
      userID: 0,
    };
  }
}

class Work {
  public static GetWork(): WorkInfo {
    return {
      id: 0,
      jobTitle: '',
      employmentStatus: 0,
      strEmploymentStatus: '',
      companyName: '',
      officeLocation: '',
      isCurrentlyWorking: true,
      startDate: '',
      endDate: '',
      description: '',
      userID: 0,
    };
  }
}
export { PersonalInfo, BasicInfo, WorkInfo, EducationInfo, Profile, Education, Work };
