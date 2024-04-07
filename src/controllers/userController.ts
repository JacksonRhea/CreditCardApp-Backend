import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
  async addUser(req: Request, res: Response) {
    console.log("Adding User")
    console.log(req.body)

    const { firstName, lastName, email, password } = req.body;
    
    try {
      const newUser = await userService.insertUser(firstName, lastName, email, password);

      res.status(201).json({message: 'User added', newUser});
    } catch (error) {
      console.error(error);
      res.status(500).json({message: "Failed to add user", error: error})
    }
  }
}

module.exports = new UserController();