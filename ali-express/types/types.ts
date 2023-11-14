type Router = {};

type Route = {
  method: Method;
  path: string;
  handler: () => void;
};

type Method = "GET" | "POST";

type GetRequest = (route: string, handler: () => void) => {};

type Listener = (port: number, cb: () => void) => {};
