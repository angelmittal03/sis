import * as dotenv from 'dotenv';
dotenv.config();

import {App} from '@slack/bolt';
import {redisInit} from './services/redis';
import {routing} from './router';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN,
});

// app.message('ping', async ({message, say}) => {
//   await say('pong');
// });

async function init() {
  await app.start(process.env.PORT || 3000);
  console.log('Sisbot is running');
  await redisInit();
  routing(app);
}

init();
