import intersectsViewport from 'ember-in-viewport/utils/intersects-viewport';
import { module, test, skip } from 'qunit';

let fakeRectNotInViewport, fakeRectInViewport, fakeWindow, fakeNoTolerance, fakeTolerance, fakeRectIntersectingViewport;

module('Unit | Utility | intersects viewport', {
  beforeEach() {
    fakeRectNotInViewport = {
      top: 450,
      left: 150,
      bottom: 550,
      right: 1130
    };

    fakeRectInViewport = {
      top: 300,
      left: 150,
      bottom: 400,
      right: 1130
    };

    fakeRectIntersectingViewport = {
      top: 100,
      left: 150,
      bottom: 2000,
      right: 1130
    };

    fakeWindow = {
      innerHeight: 400,
      innerWidth: 1280
    };

    fakeNoTolerance = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };

    fakeTolerance = {
      top: 200,
      bottom: 200
    };
  }
});

test('returns true if dimensions are within viewport', function(assert) {
  const { innerHeight, innerWidth } = fakeWindow;
  const result = intersectsViewport(fakeRectInViewport, innerHeight, innerWidth, fakeNoTolerance);
  assert.ok(result);
});

test('returns false if dimensions not within viewport', function(assert) {
  const { innerHeight, innerWidth } = fakeWindow;
  const result = intersectsViewport(fakeRectNotInViewport, innerHeight, innerWidth, fakeNoTolerance);
  assert.ok(!result);
});

skip('returns true if dimensions not within viewport but within tolerance', function(assert) {
  const { innerHeight, innerWidth } = fakeWindow;
  const result = intersectsViewport(fakeRectNotInViewport, innerHeight, innerWidth, fakeTolerance);
  assert.ok(result);
});

test('returns true if dimensions partially overlap viewport', function(assert) {
  const { innerHeight, innerWidth } = fakeWindow;
  const result = intersectsViewport(fakeRectIntersectingViewport, innerHeight, innerWidth, fakeTolerance);
  assert.ok(result);
});
