const Item = require("../models/Item");

exports.ItemController = {
    // Return all the items.
    index: (req, res) => {
        res.status(200).json({message: "Route is working fine"});
    },

    // Return create form.
    create: async (req, res) => {
        // 
    },

    // Save the values sent through create form.
    store: async (req, res) => {
        try {
            const item = await Item.create(req.body);
            res.status(201).json({ item });
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },

    // Return single item.
    show: () => {
        // 
    },

    // Return Edit form.
    edit: () => {
        // 
    },

    // Update the value sent through update form.
    update: () => {
        // 
    },

    // Delete the specified item.
    destroy: () => {
        // 
    }
}