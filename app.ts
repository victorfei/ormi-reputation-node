import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get('/data', (req: Request, res: Response) => {
  const id: string = req.query.id?.toString();
  const id_type: string = req.query.type?.toString();

  if (id == '0x0' && id_type == 'ETH') {
    return res.end(JSON.stringify({ 'id': id, 'type': id_type, 'reputation': 10 }));
  } else if (id == '0x1' && id_type == 'ETH') {
    return res.end(JSON.stringify({ 'id': id, 'type': id_type, 'reputation': 9 }));
  } else if (id == '0x2' && id_type == 'ETH') {
    return res.end(JSON.stringify({ 'id': id, 'type': id_type, 'reputation': 8 }));
  }

  return res.end(JSON.stringify({'id': -1, 'type': 'invalid', 'reputation': -1}));
});

app.listen(port, () => {
  console.log(`Ormi Reputation Node server application is running on port ${port}.`);
});
