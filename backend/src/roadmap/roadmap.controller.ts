import RoadmapService from './roadmap.service';
import { Request, Response } from 'express';

class roadmapController {
  private roadmapService: RoadmapService;

  constructor(roadmapService: RoadmapService) {
    this.roadmapService = roadmapService;
  }

  async handleWebSocketConnection(ws: WebSocket, userPrompt: string) {
    try {
      await this.roadmapService.create(userPrompt, (data) => {
        ws.send(JSON.stringify(data));
      });
    } catch (error) {
      ws.send(JSON.stringify({ error: 'Failed to process OpenAI stream' }));
    }
  }
}

export default roadmapController;
