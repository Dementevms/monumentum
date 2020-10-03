import Mongoose from "mongoose";

export default class Items {
  constructor() {
    const scheme = new Mongoose.Schema(
      {
        desc: String,
        date: Date,
        time: {
          hours: { type: Number, default: 0 },
          minuts: { type: Number, default: 0 },
        },
        status: {
          type: Number,
          default: 0
        }
      },
      { timestamps: true }
    );
    this.model = Mongoose.model("Items", scheme);
  }

  async getItems() {
    const response = await this.model.find({}, { desc: true, date: true, time: true, status: true } );
    return response;
  }

  async getItem(ctx) {
    const response = await this.model.find({ _id: ctx.params._id });
    return response;
  }

  async addItem(ctx) {
    const response = await this.model.create(ctx.request.body);
    return response;
  }

  async updateItem(ctx) {
    const response = await this.model.updateOne({_id: ctx.params.id }, ctx.request.body);
    return response;
  }

  async removeItem(ctx) {
    const response = await this.model.deleteOne({ _id: ctx.params.id });
    return response;
  }
}
