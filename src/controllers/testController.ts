import { Request, Response } from "express";

class TestFunctions {
  async test(req: Request, res: Response) {
    console.log("Testing")
    res.send("Test Function 1")
  }

  async testTwo(req: Request, res: Response) {
    res.send("Test Function 2")
  }
}

module.exports = new TestFunctions();