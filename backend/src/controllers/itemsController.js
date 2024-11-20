const Item = require("../model/Items");
// Create a new Item
const createItem = async (req, res) => {
  try {
    const Item = await Item.create(req.body);
    res.status(201).json(Item);
  } catch (error) {
    console.error("Error creating Item:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all Items
const getItems = async (req, res) => {
  try {
    const Items = await Item.findAll();
    res.status(200).json(Items);
  } catch (error) {
    console.error("Error fetching Items:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get a single Item by ID
const getItemById = async (req, res) => {
  try {
    const Item = await Item.findByPk(req.params.id);
    if (Item) {
      res.status(200).json(Item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error fetching Item by ID:", error);
    res.status(500).json({ error: error.message });
  }
};

// Update a Item by ID
const updateItem = async (req, res) => {
  try {
    const [updated] = await Item.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedItem = await Item.findByPk(req.params.id);
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error updating Item:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete a Item by ID
const deleteItem = async (req, res) => {
  try {
    const deleted = await Item.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.error("Error deleting Item:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};
