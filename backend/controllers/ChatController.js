const Chat = require("../models/Chat");
const Message = require("../models/Message");
const User = require("../models/User");

//! Still have validation gaps.
//! Like undefined chat_id crashes the server.
exports.ChatController = {
    getChatList: async(req, res, next) => {
        let user_id = req.user.userId;

        let chats = await Chat.find().where({
            $or: [{ user1: user_id }, { user2: user_id }]
        }).populate({path: "message", select: "from_id timestamp message updatedAt createdAt"})
        .populate({match: { _id: { $ne: user_id}}, path: "user1", select: "name avatar"})
        .populate({match: { _id: { $ne: user_id}}, path: "user2", select: "name avatar"})
        .sort({"timestamp": -1});

        res.status(200).json({
            status: true,
            chats
        });
    },

    startChat: async (req, res, next) => {
        user_id = req.params.userId;
        friend_id = req.body.friend_id;

        try {
            let chat = await Chat.findOne({
                $or: [{ user1: user_id, user2: friend_id }, {user1: friend_id, user2: user_id}]
            });

            if(chat)
                return res.json({"result": "success"});

            chat = await Chat.create({ user1: user_id, user2: friend_id, message: null });
            res.json({
                "success": true,
                chat
            });
        } catch(err) {
            return next(err);
        }
    },

    checkMessage: async (req, res, next) => {
        // 
    },

    sendMessage: async (req, res, next) => {
        // -> Update the chats last message.
        const chatId = req.params.chatId;
        const user_id = req.user.userId;
        console.log("chatid: ", chatId, "user_id", user_id);

        if(!chatId || !user_id) {
            return next(new Error("Invalid Request"));
        }
        
        let chat = await Chat.findOne().where({
            $or: [{ "user1": user_id, "_id": chatId }, { "user2": user_id, "_id": chatId }]
        }).exec();

        if(!chat)
            return next(new Error("Invalid Request"));

        let msg = req.body.message;

        try {
            msg = await Message.create({ chat_id: chatId, from_id: user_id, message: msg });
            // chat = await Chat.findOneAndUpdate({ _id: chatId }, { message: msg._id });
        } catch (err) {
            return res.status(500).json({
                error_message: err.message,
                message: msg,
            });
        }

        res.status(200).json({
            success: true,
            msg
        });
    },

    getMessage: async(req, res, next) => {
        let user_id = req.user.userId;
        let chatId = req.params.chatId;
        let createdAt = req.body.createdAt;
        let msgs;
        
        try {
            // Check if the messages required are old or new.
            if(createdAt) {
                msgs = await Message.find({
                    "createdAt": { $gt : createdAt }
                }).select("from_id message createdAt").where({
                    chat_id: chatId
                }).sort({"timestamp": -1});
            }
            else {
                msgs = await Message.find().select("from_id message createdAt").where({
                    chat_id: chatId
                }).sort({"timestamp": -1});
            }
            
            res.status(200).json({
                "user_id": user_id,
                "messages": msgs
            });
        } catch (err) {
            return res.status(500).json({
                error_message: err.message,
                message: "Some error Occurred.",
            });
        }
    }
}