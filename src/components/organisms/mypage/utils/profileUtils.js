const PROFILE_LIST = [
  { id: 0, image: "bbo.png" },
  { id: 1, image: "bora.png" },
  { id: 2, image: "ddub.png" },
  { id: 3, image: "nana.png" },
  { id: 4, image: "bongsoon.png" },
  { id: 5, image: "hyeonkim.png" },
  { id: 6, image: "babybbo.png" },
  { id: 7, image: "babynana.png" },
  { id: 8, image: "babybora.png" },
  { id: 9, image: "babyddub.png" },
  { id: 10, image: "babyhyeonkim.png" },
];

const getProfilePhoto = (id) => {
  const profile = PROFILE_LIST.find((imgRef) => imgRef.id === id);
  return profile?.image;
};

const profileUtils = {
  PROFILE_LIST,
  getProfilePhoto,
};

export default profileUtils;
