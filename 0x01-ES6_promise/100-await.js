import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userPromise = await createUser();
  const photoPromise = await uploadPhoto();

  try {
    return ({ photo: photoPromise, user: userPromise });
  } catch (e) {
    return ({ photo: null, user: null });
  }
}
