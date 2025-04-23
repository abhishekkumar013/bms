import { Client } from "@repo/db/client";
import express, { Request, Response, Router } from "express";
import asyncHandler from "../utils/asyncHandler";

const router: Router = express.Router();

router.route("/").get((req: Request, res: Response) => {
  res.status(200).json({ message: "pass" });
});

router.route("/signup").post(
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await Client.users.create({
        data: { username, password },
      });

      return res.status(201).json({ message: "User created", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  })
);

export default router;
