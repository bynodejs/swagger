'use strict';

module.exports = {
    swaggerDefinition: {
        info: {
            title: 'Swagger UI - Example',
            version: '1.0.0',
            description: 'Swagger TEST'
        },
        host: "localhost:3000",
        basePath: "/",
        contact: {
            email: "ljlm0402@naver.com"
        },
        components: {
            res: {
                Ok: {
                    status: '200',
                    description: '성공',
                    schema: {
                        $ref: '#/statusCodes/Success/Ok'
                    }
                },
                Created: {
                    status: '201',
                    description: '생성',
                    schema: {
                        $ref: '#/statusCodes/Success/Created'
                    }
                },
                NoContent: {
                    status: '204',
                    description: '빈 컨텐츠',
                    schema: {
                        $ref: '#/statusCodes/Success/NoContent'
                    }
                },
                BadRequest: {
                    status: '400',
                    description: '잘못된 요청',
                    schema: {
                        $ref: '#/statusCodes/Error/Client/BadRequest'
                    }
                },
                Forbidden: {
                    status: '403',
                    description: '권한이 없음',
                    schema: {
                        $ref: '#/statusCodes/Error/Client/Forbidden'
                    }
                },
                NotFound: {
                    status: '404',
                    description: '찾을 수 없음',
                    schema: {
                        $ref: '#/statusCodes/Error/Client/NotFound'
                    }
                },
                InternalServerError: {
                    status: '500',
                    description: '내부 서버 오류',
                    schema: {
                        $ref: '#/statusCodes/Error/Server/Error'
                    }
                },
            }
        },
        statusCodes: {
            Success: {
                Ok: {
                    type: 'string',
                    description: 'Ok'
                },
                Created: {
                    type: 'string',
                    description: 'Created'
                },
                NoContent: {
                    type: 'string',
                    description: 'No Content'
                }
            },
            Error: {
                Client: {
                    BadRequest: {
                        type: 'string',
                        description: 'Bad Request'
                    },
                    Forbidden: {
                        type: 'string',
                        description: 'Forbidden'
                    },
                    NotFound: {
                        type: 'string',
                        description: 'Not Found'
                    }
                },
                Server: {
                    Error: {
                        type: 'string',
                        description: 'Internal Server Error'
                    }
                }
            }
        },
        schemes: ["http", "https"],
        definitions:
        {
            'User': {
                type: 'object',
                properties: {
                    user_id: {
                        type: 'integer'
                    },
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    }
                }
            },
            'Board': {
                type: 'object',
                properties: {
                    board_id: {
                        type: 'integer'
                    },
                    title: {
                        type: 'string'
                    },
                    content: {
                        type: 'string'
                    }
                }
            }
        }
    },
    apis: ['./routes/*.js']
};
