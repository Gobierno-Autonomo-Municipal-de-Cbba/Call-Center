import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  private conversationData() {
    return [
      // API
      {
        id: 1,
        number: 76487237,
        agent: 'AGENTE 01',
        date: '2024-06-15 20:21:56'
      },
      {
        id: 2,
        number: 71496625,
        agent: 'AGENTE 02',
        date: '2024-06-16 12:17:50'
      },
      {
        id: 3,
        number: 60701213,
        agent: 'AGENTE 01',
        date: '2022-06-15 07:29:18'
      },
      {
        id: 4,
        number: 79344443,
        agent: 'AGENTE 02',
        date: '2022-06-15 22:08:01'
      },
      {
        id: 5,
        number: 79344443,
        agent: 'AGENTE 02',
        date: '2022-06-15 22:08:01'
      },
      {
        id: 6,
        number: 60701213,
        agent: 'AGENTE 01',
        date: '2022-06-15 07:29:18'
      },
      {
        id: 7,
        number: 71496625,
        agent: 'AGENTE 02',
        date: '2022-06-15 12:17:50'
      },
      {
        id: 8,
        number: 76487237,
        agent: 'AGENTE 01',
        date: '2023-06-15 20:21:56'
      },
      {
        id: 9,
        number: 76487237,
        agent: 'AGENTE 01',
        date: '2023-06-15 20:21:56'
      },
      {
        id: 10,
        number: 71496625,
        agent: 'AGENTE 01',
        date: '2022-06-15 12:17:50'
      },
      {
        id: 11,
        number: 60701213,
        agent: 'AGENTE 02',
        date: '2022-06-15 07:29:18'
      },
      {
        id: 12,
        number: 79344443,
        agent: 'AGENTE 02',
        date: '2022-06-15 22:08:01'
      }
    ];
  }

  public getConversations() {
    return Promise.resolve(this.conversationData());
  }
};
