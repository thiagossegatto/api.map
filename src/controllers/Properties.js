const Properties = require('../models/Properties');

module.exports = {
  async getProperties(req, res){

    var page = Math.max(0, req.body.page - 1); // using a zero-based page index for use with skip()
    var take = req.body.take || 50;

    var query = Properties.find({latitude: {$gte: req.body.north, $lte: req.body.south}}).find({longitude: {$gte: req.body.west, $lte: req.body.east}}).sort('price');

    query.countDocuments(function (err, count) {
      query.select('title latitude longitude');
      query.skip(page * take).limit(take).exec('find', function (err, docs) {
        if (err) {
          return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
          });
        } else {
          res.json({
            count: count,
            docs: docs
          });
        }
       });
    });

    //const properties = await Properties.paginate(query, options);
    //.find()                      .find({latitude: {$gte: req.body.north}}, {latitude: {$lte: req.body.south}})
    //.sort('price').paginate();  

    //return res.json({properties})

  }
}