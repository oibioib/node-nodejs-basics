import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const fileUrl = new URL('./files/script.js', import.meta.url);
  fork(fileUrl, args);
};

spawnChildProcess(['arg1', 'arg2', 12, 34]);
