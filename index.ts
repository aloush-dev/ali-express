const aliExpress = require("./ali-express/index");

const app = aliExpress();

const port = 1066;

app.get("/home", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;
