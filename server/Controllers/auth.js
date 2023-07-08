const User = require("../Models/User");
const bcrytp = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    //1.Chek user ว่ามีใน ฐานข้อมูลหรือยัง
    const { name, password } = req.body; //ดีสตรัคเจอริ่ง แยกข้อมูลออกมาแต่ละตัว
    var user = await User.findOne({ name });
    if (user) {
      return res.send("User Alerady Exists").status(400);
    }

    //2.Encrypt  เข้ารหัส
    const salt = await bcrytp.genSalt(5);
    user = new User({
      name,
      password,
    });
    user.password = await bcrytp.hash(password, salt);

    //3.Save
    await user.save();
    res.send("Register Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    //1. Check User in database
    const { name, password } = req.body;
    var user = await User.findOneAndUpdate({ name }, { new: true });
    console.log(user);
    if (user) {
      const isMatch = await bcrytp.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send("Password Invalid");
      }

      //2. Payload เตรียมข้อมูลให้หน้าบ้าน
      var payload = {
        user: {
          name: user.name
        }
      }
      //3.สร้างโทนเค็น
      jwt.sign(payload, "jwtsecret", { expiresIn: '1d' }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    }else{
        return res.status(400).send('User not found')
    }

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
