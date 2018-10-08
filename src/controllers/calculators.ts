import {Request, Response} from "express";

/**
 * GET /
 * Calculators page.
 */
export let getCalculators = (req: Request, res: Response) => {
  res.render("calculators", {
    title: "Calculators"
  });
};