const Member = require('../models/memberModel');

exports.addMember= async (req, res) => {
    try {

        let member = new Member({
            memberId: req.body.memberId,
            name: req.body.name,
            password : req.body.password,
            group : req.body.group,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber
        })
        member.password = await member.hashPassword(req.body.password);

        let createdMember = await member.save();

        res.status(200).json({
            msg: "New Member created",
            data: createdMember
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
};

exports.editWholeMember = async (req, res) => {
    let member = {
        memberId: req.body.memberId,
        name: req.body.name,
        password: req.body.password,
        group: req.body.group,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        type: {
            typeName: req.body.typeName,
            dayBorrow: req.body.dayBorrow
        }
    };
    Member.findByIdAndUpdate(req.params.id, member)       //find by id first, then update the returned document
        .exec((err, result) => {
            Member.findById(req.params.id)
                .exec((err, result) => {
                    // return doc ที่แก้ไขแล้วกลับไป
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

exports.getMembers = async (req, res) => {
    Member.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "Ok",
                data: result
            })
        });
};

exports.getMemberByName = async (req, res) => {
    let name = req.params.name;
    Member.find({      
        
        name: {
            $regex: new RegExp(name),
            $options: 'i'
        }
        })
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.deleteMember = async (req, res) => {
    Member.findByIdAndDelete(req.params.id, member)
        .exec((err) => {
            if (err) {
                res.status(500).json({
                    msg: err
                });
            } else {
                res.status(200).json({
                    msg: "Delete complete"
                });
            }
        });
}