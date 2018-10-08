import {Request, Response} from "express";

/**
 * GET /
 * Brewery page.
 */
export let getBrewery = (req: Request, res: Response) => {
  res.render("brewery", {
    title: "Brewery"
  });
};