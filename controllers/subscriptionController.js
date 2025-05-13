import { Subscription } from "../models/subscriptionModel.js";

// ➕ ახალი გამოწერა
export const createSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    // პირველ რიგში ვამოწმებთ არსებობს თუ არა
    const existing = await Subscription.findOne({ email });

    if (existing) {
      return res.status(409).json({ message: "ეს ემაილი უკვე დამატებულია!" });
    }

    // თუ არ არსებობს — ვქმნით
    const subscription = new Subscription({ email });
    const saved = await subscription.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 📥 ყველა გამოწერის წამოღება
export const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find().sort({ createdAt: -1 });
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ გამოწერის წაშლა (არასავალდებულო, სურვილისამებრ)
export const deleteSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    await Subscription.findByIdAndDelete(id);
    res.json({ message: "წაშლილია" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
