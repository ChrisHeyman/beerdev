import {Request, Response} from "express";

/**
 * GET /
 * Statistics page.
 */
export let getStatistics = (req: Request, res: Response) => {
  res.render("statistics", {
    title: "Statistics"
  });
};