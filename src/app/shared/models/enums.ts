enum Action {
  Create = 'Create',
  Update = 'Update',
  View = 'View',
}

enum UserRole {
  Guest = '3',
}

enum PostUploadType {
  Image = 1,
  Video = 2,
  Defualt = 3,
}

enum UserGender {
  Male = 1,
  Female = 2,
}

enum UserRelationStatus {
  Single = 1,
  NotSingle = 2,
  Married = 3,
}

enum GroupCategory {
  Entertainment = '0',
  PetsAndEvents = '1',
  CommunitiesAndOccasions = '2',
  General = '3',
}

enum OpenedModalAs {
  Admin = '0',
  User = '1',
}

enum UserGroupStatus {
  Invitaion = '0',
  Accepted = '1',
  Rejected = '2',
  Leaved = '3',
  Canceled = '4',
}

enum GroupMediaSection {
  GroupMediaCategory = 7,
  GroupNotificationRefType = 16,
}


export {
  Action,
  UserRole,
  PostUploadType,
  UserGender,
  UserRelationStatus,
  GroupCategory,
  OpenedModalAs,
  UserGroupStatus,
  GroupMediaSection
};
