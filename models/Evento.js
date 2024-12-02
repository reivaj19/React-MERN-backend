const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

EventoSchema.method("toJSON", function () {
  const { __v, _id, ...Object } = this.toObject();
  Object.id = _id;
  return Object;
});
module.exports = model("Evento", EventoSchema);
