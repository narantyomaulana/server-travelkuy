const isLogin = (req, res, next) => {
  if(req.session.user == null || req.session == undefined) {
    req.flash('alertMessage', 'Session telah habis silahkan login kembali');
    req.flash('alertStatus', 'danger');
    res.redirect('/admin/signin');
  }else{
    next();
  }
}

module.exports = isLogin;