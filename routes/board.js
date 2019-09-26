'use strict';

const router = require('express').Router();

const board = require('../controllers/board.ctrl');

/**
 * @swagger
 * /board:
 *  get:
 *    summary: 게시글 리스트 조회
 *    tags: [Board]
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      204:
 *         $ref: '#/components/res/NoContent'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.get('/', (req, res, next) => {

  board
    .get_board_list()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /board/{board_id}:
 *  get:
 *    summary: 게시글 상세 조회
 *    tags: [Board]
 *    parameters:
 *      - in: path
 *        name: board_id
 *        schema:
 *          type: integer
 *        required: true
 *        description: 게시글 ID
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
router.get('/:board_id(\\d+)', (req, res, next) => {
  const { board_id } = req.params;

  board
    .get_board_detail(board_id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /board:
 *  post:
 *    summary: 게시글 생성
 *    tags: [Board]
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        description: 게시글 데이터
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            content:
 *              type: string
 *    responses:
 *      201:
 *        $ref: '#/components/res/Created'
 *      400:
 *        $ref: '#/components/res/BadRequest'
 *      500:
 *        $ref: '#/components/res/InternalServerError'
 */
router.post('/', (req, res, next) => {
  const data = req.body;

  board
    .create_board(data)
    .then(() => {
      res.status(201).json({ 'created': true });
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /board/{board_id}:
 *  put:
 *    summary: 게시글 수정
 *    tags: [Board]
 *    consumes:
 *      - applicaion/json
 *    parameters:
 *      - in: path
 *        name: board_id
 *        schema:
 *          type: integer
 *        required: true
 *        description: 게시글 ID
 *      - in: body
 *        description: 게시글 데이터
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            content:
 *              type: string
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      400:
 *         $ref: '#/components/res/BadRequest'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.put('/:board_id(\\d+)', (req, res, next) => {
  const { board_id } = req.params, data = req.body;

  board
    .update_board(board_id, data)
    .then(() => {
      res.status(200).json({ 'updated': true });
    })
    .catch(error => {
      next(error);
    });
});

/**
 * @swagger
 * /board/{board_id}:
 *  delete:
 *    summary: 게시글 삭제
 *    tags: [Board]
 *    parameters:
 *      - in: path
 *        name: board_id
 *        schema:
 *          type: integer
 *        required: true
 *        description: 게시글 ID
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      400:
 *         $ref: '#/components/res/BadRequest'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.delete('/:board_id(\\d+)', (req, res, next) => {
  const { board_id } = req.params;

  board
    .delete_board(board_id)
    .then(() => {
      res.status(200).json({ 'deleted': true });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
