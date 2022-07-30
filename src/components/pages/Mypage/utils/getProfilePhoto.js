import { PROFILE_LIST } from '@common/constants';

const getProfilePhoto = id => {
  const profile = PROFILE_LIST[id];
  return profile ?? PROFILE_LIST[8];
};

export default getProfilePhoto;
