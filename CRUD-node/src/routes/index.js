const express = require('express');
const router = express.Router();
const User = require('../model/user');

/*router.get('/', async (req, res) => {
  const user = await User.find();
  res.render('index', {
    user
  });
});
*/


router.get('/', async (req, res) => {
  const user = await User.find();
  res.json(user);
});


router.post('/add', async (req, res, next) => {
  const user = new User(req.body);
  await user.save();
  res.redirect('/');
});


router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const user = await User.findById(id);
  user.status = !user.status;
  await user.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const user = await User.findById(req.params.id);
  console.log(user)
  res.render('edit', { user });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await User.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await User.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
