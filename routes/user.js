'use strict';

const router = require('express').Router();

const user = require('../controllers/user.ctrl');

/**
 * @swagger
 * /user:
 *  get:
 *    summary: 유저 리스트 조회
 *    tags: [User]
 *    responses:
 *      200:
 *         $ref: '#/components/res/Ok'
 *      204:
 *         $ref: '#/components/res/NoContent'
 *      500:
 *         $ref: '#/components/res/InternalServerError'
 */
router.get('/', (req, res, next) => {

    user
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
 * /user/{user_id}:
 *  get:
 *    summary: 유저 상세 조회
 *    tags: [User]
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
router.get('/:user_id(\\d+)', (req, res, next) => {
    const { user_id } = req.params;

    user
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
 * /user:
 *  post:
 *    summary: 유저 생성
 *    tags: [User]
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
router.post('/', (req, res, next) => {
    const data = req.body;

    user
        .create_user(data)
        .then(() => {
            res.status(201).json({ 'created': true });
        })
        .catch(error => {
            next(error);
        });
});

/**
 * @swagger
 * /user/{user_id}:
 *  put:
 *    summary: 유저 수정
 *    tags: [User]
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
router.put('/:user_id(\\d+)', (req, res, next) => {
    const { user_id } = req.params, data = req.body;

    user
        .update_user(user_id, data)
        .then(() => {
            res.status(200).json({ 'updated': true });
        })
        .catch(error => {
            next(error);
        });
});

/**
 * @swagger
 * /user/{user_id}:
 *  delete:
 *    summary: 유저 삭제
 *    tags: [User]
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
router.delete('/:user_id(\\d+)', (req, res, next) => {
    const { user_id } = req.params;

    user
        .delete_user(user_id)
        .then(() => {
            res.status(200).json({ 'deleted': true });
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;
