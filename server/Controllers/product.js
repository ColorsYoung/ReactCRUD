const Product = require("../Models/Product");
const fs = require("fs");

exports.read = async (req, res) => {
  try {
    const id = req.params.id;

    const producted = await Product.findOne({ _id: id }).exec();
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.list = async (req, res) => {
  try {
    const producted = await Product.find({}).exec();
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.create = async (req, res) => {
  try {
    var data = req.body;
    if (req.file) {
      data.file = req.file.filename;
    }
    const producted = await Product(data).save();
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    var newData = req.body;

    if (typeof req.file !== "undefined") {
      newData.file = req.file.filename;
      await fs.unlink("./uploads/" + newData.fileold, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Edit success");
        }
      });
    }
    const updated = await Product
       .findOneAndUpdate({ _id: id }, newData, { new: true,})
       .exec();
    res.send(updated);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const remove = await Product.findOneAndDelete({ _id: id }).exec();
    if (remove?.file) {
      await fs.unlink("./uploads/" + remove.file, (err) => {
        // ลบไฟล์รูป
        if (err) {
          console.log(err);
        } else {
          console.log("login success");
        }
      });
    }

    res.send(remove);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};
