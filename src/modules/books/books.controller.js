import { Router } from "express";
import * as booksService from "./books.service.js";

const router = Router();

// 5. POST /books
router.post("/", async (req, res, next) => {
  try {
    const result = await booksService.insertOneBook(req.body);
    return res.status(201).json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 6. POST /books/batch
router.post("/batch", async (req, res, next) => {
  try {
    const result = await booksService.insertManyBooks(req.body);
    return res.status(201).json({
      acknowledged: result.acknowledged,
      insertedIds: result.insertedIds,
    });
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 8. PATCH /books/Future
router.patch("/:title", async (req, res, next) => {
  try {
    const { title } = req.params;
    const result = await booksService.updateBookYear(title, 2022);

    return res.status(200).json({
      acknowledged: result.acknowledged,
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 9. GET /books/title?title=Brave New World
router.get("/title", async (req, res, next) => {
  try {
    const { title } = req.query;
    const result = await booksService.findBookByTitle(title);

    if (!result) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 10. GET /books/year?from=1990&to=2010
router.get("/year", async (req, res, next) => {
  try {
    const { from, to } = req.query;
    const result = await booksService.findBooksByYearRange(from, to);
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 11. GET /books/genre?genre=Science Fiction
router.get("/genre", async (req, res, next) => {
  try {
    const { genre } = req.query;
    const result = await booksService.findBooksByGenre(genre);
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 12. GET /books/skip-limit
router.get("/skip-limit", async (req, res, next) => {
  try {
    const result = await booksService.getBooksSkipLimit();
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 13. GET /books/year-integer
router.get("/year-integer", async (req, res, next) => {
  try {
    const result = await booksService.getBooksWithIntYear();
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 14. GET /books/exclude-genres
router.get("/exclude-genres", async (req, res, next) => {
  try {
    const result = await booksService.getBooksExcludeGenres();
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 15. DELETE /books/before-year?year=2000
// router.get("/before-year", async (req, res, next) => {
router.delete("/before-year", async (req, res, next) => {
  try {
    const { year } = req.query;
    const result = await booksService.deleteBooksBeforeYear(year);

    return res.status(200).json({
      acknowledged: result.acknowledged,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 16. GET /books/aggregate1
router.get("/aggregate1", async (req, res, next) => {
  try {
    const result = await booksService.getBooksSortAggregate();
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 17. GET /books/aggregate2
router.get("/aggregate2", async (req, res, next) => {
  try {
    const result = await booksService.getBooksFilterFieldsAggregate();
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 18. GET /books/aggregate3
router.get("/aggregate3", async (req, res, next) => {
  try {
    const result = await booksService.getBooksUnwindGenres();
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

// 19. GET /books/aggregate4
router.get("/aggregate4", async (req, res, next) => {
  try {
    const result = await booksService.getLogsWithBooks();
    return res.status(200).json(result);
  } catch (error) {
    return next(new Error(error.message));
  }
});

export default router;
