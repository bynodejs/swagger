'use strict';

const UserModel = require('../models/user.model');

const error = require('../lib/error');

module.exports = {

    get_user_list() {
        return new Promise((resolve, reject) => {
            try {
                if (!UserModel.length) resolve(error.get(204, 'No Content'));
                resolve(UserModel);
            } catch (error) {
                reject(error);
            }
        });
    },

    get_user_detail(user_id) {
        return new Promise((resolve, reject) => {
            try {
                const user = UserModel.filter(user => user.user_id == user_id);
                if (!user.length) resolve(error.get(204, 'No Content'));
                resolve(user);
            } catch (error) {
                reject(error);
            }
        });
    },

    create_user(data) {
        return new Promise((resolve, reject) => {
            try {
                if (!data) reject(error.get(400, 'Bad Request'));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    },

    update_user(user_id, data) {
        return new Promise((resolve, reject) => {
            try {
                if (!user_id || !data) reject(error.get(400, 'Bad Request'));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    },

    delete_user(user_id) {
        return new Promise((resolve, reject) => {
            try {
                if (!user_id) reject(error.get(400, 'Bad Request'));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
}
