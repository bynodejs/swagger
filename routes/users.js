"use strict";

const router = require("express").Router();

const users = require("../controllers/users.ctrl");

/**
 * @swagger
 * /users:
 *  get:
 *    summary: 유저 리스트 조회
 *    tags: [USER]
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      204:
 *         $ref: '#/components/res/NoContent'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.get("/", (req, res, next) => {
  users
    .get_user_list()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /users/{user_id}:
 *  get:
 *    summary: 유저 상세 조회
 *    tags: [USER]
 *    parameters:
 *      - in: path
 *        name: user_id
 *        schema:
 *          type: integer
 *        required: true
 *        description: 유저 ID
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      204:
 *         $ref: '#/components/res/NoContent'
 *      400:
 *         $ref: '#/components/res/BadRequest'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.get("/:user_id(\\d+)", (req, res, next) => {
  const { user_id } = req.params;

  users
    .get_user_detail(user_id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /users:
 *  post:
 *    summary: 유저 생성
 *    tags: [USER]
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        description: 유저 데이터
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      201:
 *         $ref: '#/components/res/Created'
 *      400:
 *         $ref: '#/components/res/BadRequest'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.post("/", (req, res, next) => {
  const data = req.body;

  users
    .create_user(data)
    .then(() => {
      res.status(201).json({ created: true });
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /users/{user_id}:
 *  put:
 *    summary: 유저 수정
 *    tags: [USER]
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: user_id
 *        schema:
 *          type: integer
 *        required: true
 *        description: 유저 ID
 *      - in: body
 *        description: 유저 데이터
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      400:
 *         $ref: '#/components/res/BadRequest'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.put("/:user_id(\\d+)", (req, res, next) => {
  const { user_id } = req.params,
    data = req.body;

  users
    .update_user(user_id, data)
    .then(() => {
      res.status(200).json({ updated: true });
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /users/{user_id}:
 *  delete:
 *    summary: 유저 삭제
 *    tags: [USER]
 *    parameters:
 *      - in: path
 *        name: user_id
 *        schema:
 *          type: integer
 *        required: true
 *        description: 유저 ID
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      400:
 *         $ref: '#/components/res/BadRequest'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.delete("/:user_id(\\d+)", (req, res, next) => {
  const { user_id } = req.params;

  users
    .delete_user(user_id)
    .then(() => {
      res.status(200).json({ deleted: true });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
