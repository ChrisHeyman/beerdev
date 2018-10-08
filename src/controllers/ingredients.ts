import {Request, Response} from "express";

/**
 * GET /
 * Ingredients page.
 */
export let getIngredients = (req: Request, res: Response) => {
  res.render("ingredients", {
    title: "Ingredients"
  });
};