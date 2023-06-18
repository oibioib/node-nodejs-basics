const parseArgs = () => {
  const args = process.argv.slice(2);
  const output = [];

  for (let i = 0; i < args.length; i += 2) {
    const arg = args[i].slice(2);
    const argValue = args[i + 1];
    output.push(`${arg} is ${argValue}`);
  }

  console.log(output.join(', '));
};

parseArgs();
