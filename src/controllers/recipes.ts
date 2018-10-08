import {Request, Response} from "express";

/**
 * GET /
 * Recipes page.
 */
export let getRecipes = (req: Request, res: Response) => {
  res.render("recipes", {
    title: "Recipes"
  });
};