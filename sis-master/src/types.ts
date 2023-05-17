export interface App {
  message: Function;
  action: Function;
  event: Function;
  client: {
    users: {
      list: Function;
    };
  };
}

export interface Response {
  message: {
    user: string;
    text: string;
  };
  say: Function;
}

interface mention {
    event: {
      text: string;
    };
    say: (message: string | object) => Promise<any>;
  }
  