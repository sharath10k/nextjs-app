module.exports = {
  apps : [
    {
      name: 'next-app',
      script: 'npm',
      args: 'start',
      instances: "max",
      exec_mode: 'cluster',
    }
  ]
};
