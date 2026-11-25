// jest-dom adds custom matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/vitest";

// jsdom does not implement IntersectionObserver, which
// react-vertical-timeline-component relies on. A no-op stub is enough for tests.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

if (!("IntersectionObserver" in globalThis)) {
  globalThis.IntersectionObserver = IntersectionObserverStub;
}
