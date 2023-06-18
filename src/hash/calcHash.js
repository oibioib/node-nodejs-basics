import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { FS_ERROR_MESSAGE } from '../constants/constants.js';

const filePath = './files/fileToCalculateHashFor.txt';
const fileUrl = new URL(filePath, import.meta.url);

const calculateHash = async () => {
  try {
    const fileBuffer = await readFile(fileUrl);
    const hash = createHash('sha256').update(fileBuffer).digest('hex');
    console.log(`${filePath} hash: `, hash);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await calculateHash();
