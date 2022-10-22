import express from 'express';
import route from './livrosRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Aprendendo Node" });
  });
  app.use(
    express.json(),
    route
  );
};

export default routes;
