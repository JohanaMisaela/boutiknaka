var userService = require('../user/Service');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var getDataConntrollerfn = async (req, res) => {
  var empolyee = await userService.getDataFromDBService();
  res.send({ "status": true, "data": empolyee });
}


var getOneController = async (req, res) => {
    console.log(req.params.index);
    var employee = await userService.getOneFromDBService(req.params.id);
    res.send({ "status": true, "data": employee });
  };

var createUserControllerFn = async (req, res) => {
  try {
    var userDetails = req.body;
    console.log(userDetails)
    userDetails.image = req.file.filename;

    var status = await userService.createUserDBService(userDetails);

    if (status) {
      res.send({ "status": true, "message": "User created successfully" });
    } else {
      res.send({ "status": false, "message": "Error creating user" });
    }
  } catch (error) {
    console.error(error);
    res.send({ "status": false, "message": "Error creating user" });
  }
}

var updateUserController = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  var result = await userService.updateUserDBService(req.params.id, req.body);

  if (result) {
    res.send({ "status": true, "message": "User Updated" });
  } else {
    res.send({ "status": false, "message": "User Update Failed" });
  }
}

var deleteUserController = async (req, res) => {
  console.log(req.params.id);
  var result = await userService.removeUserDBService(req.params.id);
  if (result) {
    res.send({ "status": true, "message": "User Deleted" });
  } else {
    res.send({ "status": false, "message": "User Deletion Failed" });
  }
}

var createOrderFn = async (req,res) =>{
  try{
      var orderDetails = req.body;
      console.log(orderDetails)
      // orderDetails.image = req.file.filename;
      var status = await userService.createOrder(orderDetails);

  if (status) {
    res.send({ "status": true, "message": "order created successfully" });
  } else {
    res.send({ "status": false, "message": "Error creating order" });
  }
} catch (error) {
  console.error(error);
  res.send({ "status": false, "message": "Error creating order" });

  }
}

module.exports = { getDataConntrollerfn, createUserControllerFn, updateUserController, deleteUserController , getOneController, createOrderFn};
