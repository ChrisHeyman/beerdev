import {Request, Response} from "express";

/**
 * GET /
 * Recipe Editor page.
 */
export let getRecipeEditor = (req: Request, res: Response) => {
  res.render("recipe-editor", {
    title: "Recipe Editor"
  });
};