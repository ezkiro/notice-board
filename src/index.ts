import express, { Request, Response } from 'express';
import * as Eta from 'eta';

const app = express();
const port = 3000;

app.engine('eta', Eta.renderFile);
Eta.configure({ views: './views', cache: true });
app.set('view engine', 'eta');
app.set('views', './views');
app.set('view cache', true);

app.get('/', (req: Request, res: Response) => {
   res.render('hello', { favorite: "Eta", reasons: ["It's fast", "It's simple", "It's fun!"] });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
