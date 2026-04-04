module.exports = {
  apps: [{
    name: "mousa-code",
    script: "./dist/index.js",
    cwd: "/var/www/mousa-code",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      MY_GOOGLE_AI_KEY: "AIzaSyAIMIAu6wWYjHj8CFjm4fq7uQOo2PNEibA",
      OPENAI_API_KEY: "AIzaSyAIMIAu6wWYjHj8CFjm4fq7uQOo2PNEibA",
      OPENAI_MODEL: "gemini-2.5-flash",
      PORT: "3006"
    },
    error_file: "/var/log/mousa-code/error.log",
    out_file: "/var/log/mousa-code/out.log",
    log_file: "/var/log/mousa-code/combined.log",
    time: true,
    max_memory_restart: "512M",
    restart_delay: 3000,
    max_restarts: 10
  }]
};
