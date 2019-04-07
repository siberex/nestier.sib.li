/**
 * Created by sib.li on 2019-04-08.
 */

'use strict';

const path = require('path')
    , express = require('express')
;

const app = module.exports = express();

app.set('trust proxy', true);
app.set('x-powered-by', false);

app.get('/', (req, res) => {
    res.send('OK');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});