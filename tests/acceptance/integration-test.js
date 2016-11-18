import { skip } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | integration');

skip('Component is active when in viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    assert.ok(find('.my-component.top.start-enabled.active').length);
  });
});

skip('Component is inactive when not in viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    assert.ok(find('.my-component.bottom.inactive').length);
  });
});

skip('Component moves to active when scrolled into viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    find(window).scrollTop(2000);
  });

  waitFor('.my-component.bottom.active');

  andThen(() => {
    assert.ok(find('.my-component.bottom.active').length);
  });
});

skip('Component moves back to inactive when scrolled out of viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    find(window).scrollTop(2000);
  });

  waitFor('.my-component.top.start-enabled.inactive');

  andThen(() => {
    assert.ok(find('.my-component.top.start-enabled.inactive').length);
  });
});

skip('Component can be disabled', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    assert.ok(find('.my-component.top.start-disabled.inactive').length);
  });
});
