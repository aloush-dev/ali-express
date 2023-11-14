const http = require("http");

module.exports = (() => {
  const routes: Route[] = [];

  const newRoute = (method: Method, path: string, handler: () => void) => {
    routes.push({ method, path, handler });
  };

  const findRoute = (method: Method, path: string) => {
    const foundRoute = routes.find((route) => {
      return route.method === method && route.path === path;
    });

    if (!foundRoute) return null;

    return { url: foundRoute.path, handler: foundRoute.handler };
  };
  const get = (path: string, handler: () => void) => {
    return newRoute("GET", path, handler);
  };

  const post = (path: string, handler: () => void) => {
    return newRoute("POST", path, handler);
  };

  const router = () => {
    const listen = (port: number, cb: () => void) => {
      http
        .createServer((req: any, res: any) => {
          const method = req.method.toUpperCase();
          const path = req.url.toLowerCase();
          const route = findRoute(method, path);

          if (route){
            res.send()
          }
          
          res.end("No Route Found");
        })
        .listen(port, cb);
    };

    return {
      get,
      post,
      listen,
    };
  };
  return router;
})();
