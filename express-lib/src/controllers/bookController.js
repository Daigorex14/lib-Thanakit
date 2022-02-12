const Book = require('../models/bookModel');

exports.addBook= async (req, res) => {
    try {

        let book = new Book({
            bookId : req.body.bookId,
            bookName : req.body.bookName,
            author : req.body.author,
            publisher : req.body.publisher,
            price : req.body.price
        })

        let createdBook = await book.save();

        res.status(200).json({
            msg: "New Book created",
            data: createdBook
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
};

exports.editWholeBook = async (req, res) => {
    let book = {
        bookName : req.body.bookName,
        author : req.body.author,
        publisher : req.body.publisher,
        price : req.body.price
    };
    Book.findByIdAndUpdate(req.params.id, book)
        .exec((err, result) => {
            Book.findById(req.params.id)
                .exec((err, result) => {
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};


exports.getBooks = async (req, res) => {
    Book.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "Ok",
                data: result
            })
        });
};

exports.getBookByName = async (req, res) => {
    let bookName = req.params.bookName;
    Book.find({      
        name: {
            $regex: new RegExp(bookName),
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

exports.deleteBook = async(req, res) => {
    Book.findByIdAndDelete(req.params.id,book)
        .exec((err)=>{
            if(err){
                res.status(500).json({
                    msg: err
                });
            } else{
                res.status(200).json({
                    msg: "Delete complete"
                });
            }
        });
};