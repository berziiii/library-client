import { moduleForModel, test } from 'ember-qunit';

moduleForModel('books', 'Unit | Serializer | books', {
  // Specify the other units that are required for this test.
  needs: ['serializer:books']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
