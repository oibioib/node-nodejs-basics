import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, constants } from 'fs/promises';

export const getPath = (importMetaUrl, ...args) => {
  const __dirname = dirname(fileURLToPath(importMetaUrl));
  const path = join(__dirname, ...args);
  return path;
};

export const isDirOrFileExist = async (path) => {
  try {
    await access(path, constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
};
