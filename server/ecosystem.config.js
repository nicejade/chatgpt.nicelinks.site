module.exports = {
  apps: [
    {
      name: 'chatgpt',
      script: './src/index.ts',
      // Options reference: http://pm2.keymetrics.io/docs/usage/application-declaration/
      exec_mode: 'cluster',
      instances: 1, // "max",
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      interpreter: 'tsx',
      restart_delay: 3000
    }
  ]
}
