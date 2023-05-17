import {getList} from '../services/redis';
import * as types from '../types';

export function roles(app: types.App) {
    app.event('mentions', async ({ event, say }: types.mention) => {
      const input: string = event.text;
      if (input.includes(' who is ')) {
        const id: string = input.split(' who is ')[1];
        const list: string[] = await getList(id);
        const size: number = list.length;
  
        if (size === 0) {
          await say(`${id} ? I don't know them.`);
        } else {
          const output: string = list.slice(0, -1).join(', ');
          const lastItem: string = list[size - 1];
          const response: string = output ? `${id} is ${output}, and ${lastItem}.` : `${id} is ${lastItem}.`;
          await say(response);
        }
      }
    });
  }
  