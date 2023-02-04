import express, { Request, Response } from "express";
import { Todo } from "../Models/user_model";

const router = express.Router();

// Post Request

router.post("/add", async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const dataItem = Todo.set({ title, description });

  await dataItem.save();

  return res.status(200).json({
    data: dataItem,
  });
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const dataItem = await Todo.find({});

    res.status(200).json({
      data: dataItem,
    });
  } catch (error) {
    console.log(error);
  }
});
//Delete Request
router.delete("/delete", async (req: Request, res: Response) => {
  // try {
  const filter = { id: req.body.id };

  const dataItem = await Todo.deleteOne(filter)
    .then((data) =>
      res.json({
        data: data,
      })
    )
    .catch((error) => {
      return res.send(error);
    });
  // } catch (error) {
  //   console.log(error);
  // }
});

router.put("/update", async (req: Request, res: Response) => {
  // try {
  const filter = { id: req.body.id };

  const UpdatedData = {
    title: req.body.title,
    description: req.body.description,
  };

  const dataItem = await Todo.updateOne(filter, UpdatedData, { new: true })
    .then((data) =>
      res.json({
        data: data,
      })
    )
    .catch((error) => {
      return res.send(error);
    });
  // } catch (error) {
  //   console.log(error);
  // }
});

export { router };
// router.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Api is Running.." });
// });

// router.get("/about", (req: Request, res: Response) => {
//   res.json({ message: "This is the About Page" });
// });
// router.get("/Profile", (req: Request, res: Response) => {
//   res.json({ message: "This is the Profile Page" });
// });

// router.post("/", (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   console.log(name);
//   console.log(email);
//   res.json({
//     user: {
//       name,
//       email,
//     },
//   });
// });

// export { router };
