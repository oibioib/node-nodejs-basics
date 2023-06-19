import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { getPath } from '../helpers/helpers.js';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const fileName = 'fileToCalculateHashFor.txt';
const filePath = getPath(import.meta.url, 'files', fileName);

const calculateHash = async () => {
  try {
    const fileBuffer = await readFile(filePath);
    const hash = createHash('sha256').update(fileBuffer).digest('hex');
    console.log(`${fileName} hash: `, hash);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await calculateHash();
