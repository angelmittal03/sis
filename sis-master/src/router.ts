// app.message('ping', async ({message, say}) => {
//   console.log(message);
//   await say('pong');
// });

// export var bruh = 50;
import {echo} from './scripts/echo';
import {roles} from './scripts/roles';


export function routing(app: any) {
  echo(app);
  roles(app);
}