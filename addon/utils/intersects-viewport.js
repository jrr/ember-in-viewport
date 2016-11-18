import Ember from 'ember';

const assign = Ember.assign || Ember.merge;

const defaultTolerance = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};

function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

export default function intersectsViewport(boundingClientRect = {}, height = 0, width = 0, tolerance = defaultTolerance) {
  return intersectRect(boundingClientRect, {
    top: 0,
    left: 0,
    bottom: height,
    right: width
  });
}
