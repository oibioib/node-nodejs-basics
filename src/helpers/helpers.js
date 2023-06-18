import { access, constants } from 'node:fs/promises';

export const isDirOrFileExist = async (url) => {
  try {
    await access(url, constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
};
