import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export const uploadImage = async (file, path) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};
