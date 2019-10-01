'use strict';

const BoardModel = require('../models/boards.model');

const error = require('../lib/error');

module.exports = {

    get_board_list() {
        return new Promise((resolve, reject) => {
            try {
                if (!BoardModel.length) reject(error.get(204, 'No Content'));
                resolve(BoardModel);
            } catch (error) {
                reject(error);
            }
        });
    },

    get_board_detail(board_id) {
        return new Promise((resolve, reject) => {
            try {
                const board = BoardModel.filter(board => board.board_id == board_id);
                if (!board.length) reject(error.get(204, 'No Content'));
                resolve(board);
            } catch (error) {
                reject(error);
            }
        });
    },

    create_board(data) {
        return new Promise((resolve, reject) => {
            try {
                if (!data) reject(error.get(400, 'Bad Request'));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    },

    update_board(board_id, data) {
        return new Promise((resolve, reject) => {
            try {
                if (!board_id || !data) reject(error.get(400, 'Bad Request'));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    },

    delete_board(board_id) {
        return new Promise((resolve, reject) => {
            try {
                if (!board_id) reject(error.get(400, 'Bad Request'));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
}
