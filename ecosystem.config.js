module.exports = {
  apps: [{
    name: 'server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-58-126.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/hpineda_0.pem',
      ref: 'origin/master',
      repo: 'git@github.com:herman-19/Node.js-server-on-AWS',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
