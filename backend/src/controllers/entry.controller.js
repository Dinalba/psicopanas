const diaryCtrl = {};
const Entry = require("../models/Entry");

diaryCtrl.getEntrys = async (req, res) => {
  const notes = await Entry.find();
  res.json(notes);
};

diaryCtrl.createEntry = async (req, res) => {
  const { title, content, author } = req.body;
  const newEntry = new Entry({
    title,
    content,
    author    
  });
  await newEntry.save();
  res.json({ message: "Entrada guardada" });
};

diaryCtrl.getEntry = async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  res.json(entry);
};

diaryCtrl.deleteEntry = async (req, res) => {
  await Entry.findByIdAndDelete(req.params.id);
  res.json({ message: "Entrada eliminada" });
};

diaryCtrl.updateEntry = async (req, res) => {
  const { title, content, author } = req.body;
  await Entry.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author,
  });
  res.json({
    message: "Entrada modificada",
  });
};

module.exports = diaryCtrl;
