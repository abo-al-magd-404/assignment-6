import { Router } from "express";
import * as collectionService from "./collection.service.js";

const router = Router();

// 1. POST /collection/books
router.post("/books", async (req, res, next) => {
  try {
    await collectionService.createBooksCollection();
    return res.status(201).json({ ok: 1 });
  } catch (error) {
    return next(new Error(error.message, { cause: { status: 400 } }));
  }
});

// 2. POST /collection/authors
router.post("/authors", async (req, res, next) => {
  try {
    const result = await collectionService.createAuthorsImplicit(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 3. POST /collection/logs/capped
router.post("/logs/capped", async (req, res, next) => {
  try {
    await collectionService.createLogsCapped();
    return res.status(201).json({ ok: 1 });
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 4. POST /collection/books/index
router.post("/books/index", async (req, res, next) => {
  try {
    await collectionService.createTitleIndex();
    return res.status(201).json({ ok: 1 });
  } catch (error) {
    return next(new Error(error.message));
  }
});

export default router;
