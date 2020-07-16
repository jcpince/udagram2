import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';

const router: Router = Router();

router.use('/feed', FeedRouter);

router.get('/', async (req: Request, res: Response) => {
  var origin = req.header('origin');
  var userIP = req.socket.remoteAddress;
  var host = req.get('host');
  console.log(`Request coming from origin ${origin}, host ${host}, ip ${userIP}`);
  res.send(`V0`);
});

export const IndexRouter: Router = router;
