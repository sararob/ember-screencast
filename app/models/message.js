import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string')
});

DS.Model.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Sara',
            body: 'Hello!'
        }
    ]
});
