import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { ZLIB_ERROR_DECOMPRESS } from '../constants/constants.js';

const decompress = async () => {
  try {
    const archiveUrl = new URL('./files/archive.gz', import.meta.url);
    const decompressUrl = new URL('./files/fileToCompress.txt', import.meta.url);

    const archive = createReadStream(archiveUrl);
    const decompress = createWriteStream(decompressUrl);
    const unzip = createUnzip();

    archive.pipe(unzip).pipe(decompress);
  } catch {
    throw new Error(ZLIB_ERROR_DECOMPRESS);
  }
};

await decompress();
