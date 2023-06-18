import { cpus } from 'os';
import { Worker } from 'worker_threads';

const createWorkers = (workersNumber, workerUrl, workerStartData) => {
  const workerPromises = [];

  for (let i = 0; i < workersNumber; i += 1) {
    workerPromises.push(
      new Promise((resolve, reject) => {
        const workerData = workerStartData + i;
        const worker = new Worker(workerUrl, { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
      })
    );
  }

  return workerPromises;
};

const checkWorkersResults = (workersResults) => {
  return workersResults.map((workerResult) => {
    let status;
    let data;

    switch (workerResult.status) {
      case 'fulfilled':
        status = 'resolved';
        data = workerResult.value;
        break;
      case 'rejected':
        status = 'error';
        data = null;
        break;
    }

    return { status, data };
  });
};

const performCalculations = async () => {
  const workerUrl = new URL('./worker.js', import.meta.url);
  const cpuCores = cpus().length;
  const workerStartData = 10;

  const workers = createWorkers(cpuCores, workerUrl, workerStartData);
  const workersResults = await Promise.allSettled(workers);
  const result = checkWorkersResults(workersResults);

  console.log(result);
};

await performCalculations();
