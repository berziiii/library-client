// import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
// import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  description: attr('string'),
  cover_img: attr('string'),
});
