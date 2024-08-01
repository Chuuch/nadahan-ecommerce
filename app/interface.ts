import mongoose, { Document, Model, Schema } from "mongoose";

export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}

export interface AuthProps {
  email: string;
  password: string;
}

export interface IUser extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  orders: { orderId: mongoose.Types.ObjectId }[];
}
