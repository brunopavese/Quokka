import { User } from "./types";

const getUserImageSrc = (user: User ): string | null => {
  if (!user || !user.avatarImage || !user.avatarImage.data) {
    return null;
  }

  const imageData = user.avatarImage.data;
  const base64 = Buffer.from(imageData).toString('base64');
  const imageUrl = `data:${user.avatarImage.type};base64,${base64}`;
  return imageUrl;
};

export default getUserImageSrc;