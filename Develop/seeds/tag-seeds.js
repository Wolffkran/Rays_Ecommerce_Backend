const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'classic rock',
  },
  {
    tag_name: 'modern pop',
  },
  {
    tag_name: 'sky blue',
  },
  {
    tag_name: 'fiery red',
  },
  {
    tag_name: 'forest green',
  },
  {
    tag_name: 'pure white',
  },
  {
    tag_name: 'shiny gold',
  },
  {
    tag_name: 'entertainment',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
