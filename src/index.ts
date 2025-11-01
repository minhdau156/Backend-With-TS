import 'module-alias/register';

import { setupBrandHexagon } from '@modules/brand';
import { setupCategoryHexagon } from '@modules/category';
import { setupProductHexagon } from '@modules/product';
import { sequelize } from '@share/component/sequelize';

import express, { Request, Response } from 'express';
import { setupUserHexagon } from './modules/user';
import { TokenIntrospectRPCClient } from './share/repository/verify-token.rpc';
import { authMiddleware } from './share/middleware/auth';
import { setupMiddlewares } from './share/middleware';
import { setupCartHexagon } from './modules/cart';
import { setupOrderHexagon } from './modules/order';
import { RedisClient } from './share/component/redis';
import { config } from '@share/component/config';
import { Job, Queue, Worker } from 'bullmq';
import { v7 } from 'uuid';
import { EvtMyCreatedEvent, MyCreatedEvent } from './share/event';



(async () => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');

  //Pub/Sub

  // await RedisClient.init(config.redis.url);

  // await RedisClient.getInstance().subscribe(EvtMyCreatedEvent, (msg) => {
  //   console.log('Received message: ', msg);
  // })

  // RedisClient.getInstance().publish(MyCreatedEvent.create({name: 'Minh'}, '123'));


  //Queue

  // const redisConnection = {
  //   host: config.redis.host,
  //   port: config.redis.port,
  // };
  

  // const queue = new Queue('OrderSubmitted', {connection: redisConnection});

  // const worker1 = new Worker('OrderSubmitted', async (job: Job) => {
  //   console.log("(Worker 1) Received message: ", job.data);
  // }, {connection: redisConnection});

  // const worker2 = new Worker('OrderSubmitted', async (job: Job) => {
  //   console.log("(Worker 2) Received message: ", job.data);
  // }, {connection: redisConnection});

  // queue.add('OrderSubmitted', { orderId: v7(), payload: {name: 'Minh', userId: '123'}});

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello 200Lab!');
  });
  const introspector = new TokenIntrospectRPCClient(process.env.VERIFY_TOKEN_URL || 'http://localhost:3000/v1/rpc/introspect');
  
  const sctx = { mdlFactory: setupMiddlewares(introspector) };

  app.use('/v1', setupCategoryHexagon(sequelize));
  app.use('/v1', setupBrandHexagon(sequelize));
  app.use('/v1', setupProductHexagon(sequelize));
  app.use('/v1', setupUserHexagon(sequelize, sctx));
  app.use('/v1', setupCartHexagon(sequelize, sctx));
  app.use('/v1', setupOrderHexagon(sequelize));

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();
