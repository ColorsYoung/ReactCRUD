const multer = require("multer") 

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, './uploads') // ที่เก็บรูป
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,"Noom-" +uniqueSuffix+ file.originalname)//ตั้งชื่อไฟล์ที่อัพโหลดมา
    }
  })
  
exports.upload = multer({ storage: storage }).single('file')