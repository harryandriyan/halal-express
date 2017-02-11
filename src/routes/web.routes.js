// Import node module
import express from 'express';
const web = express.Router();

// Arrow functions
web.get('/', (req, res) => {
  res.render('index.ejs', {data: ''})
});
// Exporting an object as the default import for this module
export default web;
