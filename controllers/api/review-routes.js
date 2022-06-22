const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Trail, User, Review } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;