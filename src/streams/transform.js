import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const reverse = chunk.toString().split('').reverse().join('');
      callback(null, `${reverse}\n\n`);
    },
  });

  stdin.pipe(reverseStream).pipe(stdout);
};

await transform();
