import { HttpResponse, delay, http } from 'msw';

export const handlers = [
  http.get('/api/posts', async () => {
    await delay(1000);
    return HttpResponse.json([
      {
        body: 'Some interesting facts',
        id: 1,
        title: 'Mock Post #1',
        userId: 1,
      },
      {
        body: 'Some facts, but not so interesting',
        id: 2,
        title: 'Mock Post #2',
        userId: 1,
      },
    ]);
  }),
];
