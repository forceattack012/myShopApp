const userService = require('../services/user');

exports.getUsers = (req,res,next) => {
  userService.getAllUser().then(users =>
  {
    res.status(200).json({
      message : 'Fetch Users sucessfully',
      users : users
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetch Users failed '+ error
    });
  });
}

exports.getUserById = (req, res, next) => {
  const id = parseInt(req.params.id);
  userService.getUserById(id).then(user => {
    res.status(200).json({
      message : 'Fetch User sucessfully',
      user : user
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetch Users failed '+ error
    });
  })
}

exports.createUser = (req, res, next) => {
  const {name, email} = req.body;
  userService.createUser(name, email).then(result => {
    res.status(201).json({
      message : result
    });
  }).catch(error => {
    res.status(500).json({
      message: 'Add Users failed '+ error
    })
  });
}

exports.updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const {name, email} = req.body;

  userService.updateUser(id, name, email).then(result => {
    res.status(200).json({
      message : result
    });
  }).catch(error => {
    res.status(500).json({
      message: 'Update Users failed '+ error
    })
  });
}
