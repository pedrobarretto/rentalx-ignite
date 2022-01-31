import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
