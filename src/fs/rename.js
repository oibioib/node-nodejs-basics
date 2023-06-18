import { rename as fsRename } from 'node:fs/promises';
import { isDirOrFileExist } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const rename = async () => {
  try {
    const wrongFilenameUrl = new URL('./files/wrongFilename.txt', import.meta.url);
    const properFilenameUrl = new URL('./files/properFilename.md', import.meta.url);
    const isProperFilExist = await isDirOrFileExist(properFilenameUrl);

    if (isProperFilExist) throw new Error('Proper file exist');

    await fsRename(wrongFilenameUrl, properFilenameUrl);
  } catch (e) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await rename();
