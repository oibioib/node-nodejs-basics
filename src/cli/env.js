const parseEnv = () => {
  const rssEnvVariables = Object.entries(process.env).filter(([key]) => key.startsWith('RSS_'));
  const output = rssEnvVariables.map((variable) => variable.join('=')).join('; ');
  console.log(output);
};

parseEnv();
