export const isAdmin = (req, res, next) => {
  console.log(req.user)
 
  if (req.user && req.user.isAdmin) {

    next();
  } else {
    res.status(403).json({ error: 'Access denied. You are not an admin.' });
  }
};