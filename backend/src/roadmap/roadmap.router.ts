import { Router } from 'express';
import { Server, WebSocket } from 'ws';
import RoadmapService from './roadmap.service';
import RoadmapController from './roadmap.controller';

const roadmapRouter = Router();

const roadmapService = new RoadmapService();
const roadmapController = new RoadmapController(roadmapService);

const wss = new Server({ noServer: true });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', async (message: string) => {
    const userPrompt = message.toString();
    await roadmapController.handleWebSocketConnection(ws, userPrompt);
  });

  ws.send('Connected to WebSocket server');
});

roadmapRouter.get('/roadmaps', (req, res) => {
  res.send('Roadmap API is running');
});

export { roadmapRouter, wss };
