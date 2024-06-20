import { Router } from 'express';
import { roadmapRouter } from './roadmap/roadmap.router';
// other routers can be imported here

const globalRouter = Router();

// Use the userRouter for user-related routes
globalRouter.use(roadmapRouter);

// other routers can be added here

export default globalRouter;
