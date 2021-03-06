const passport = require('passport');

module.exports = app => {
  // access google profile and email
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // authenticate
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // cookie request and response
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // cookie request and response
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
