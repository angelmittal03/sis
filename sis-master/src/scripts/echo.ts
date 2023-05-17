import * as types from '../types';

export function echo(app: types.App) {
    app.message(/sis repeat/, async ({ message, say }: types.Response) => {
      const input: string = message.text;
      const output: string | null = input.includes('echo') ? input.replace('sis repeat', '') : null;
      await say(output);
    });
  }
  
  