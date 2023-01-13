import * as mongoose from "mongoose";

interface TodoI {
  title: string;
  description: string;
}

interface todoDocument extends mongoose.Document {
  title: string;
  description: string;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

interface todoModelInterface extends mongoose.Model<todoDocument> {
  set(x: TodoI): todoDocument;
}

todoSchema.statics.set = (x: TodoI): todoDocument => {
  return new Todo(x);
};

const Todo = mongoose.model<todoDocument, todoModelInterface>(
  "Todo",
  todoSchema
);

try {
  Todo.set({
    title: "Some title",
    description: "Some Description",
  });
} catch (error) {
  console.log(error);
}

export { Todo };
