const User = require('./User');
const Comment = require('./Comment')
const Post = require('./Post');
const { post } = require('../controllers/api');

Post.belongsTo(User,{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Post.hasMany(Comment,{
    foreignKey:'postId',
    onDelete:'CASCADE'
});
Comment.belongsTo(User,{
    foreignKey:'userId',
    onDelete:'CASACADE'
});

module.exports = { User,Comment,Post};