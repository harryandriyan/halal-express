// Import node module
import express from 'express';
import Req from 'superagent';
const api = express.Router();

api.get('/', (req, res) => {
  res.send({message: 'Hello World!!'});
});

api.post('/cek', (req, res) => {
    Req
        .get('http://ibacor.com/api/produk-halal-mui')
        .query({ menu: req.body.berdasar, query: req.body.produk })
        .set('Accept', 'application/json')
        .end(function (error, result) {
            if (result.status === 200) {
                res.send(result.text)
            }
        });
    //console.log(req.body.berdasar)
});

export default api;
