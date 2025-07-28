import "@testing-library/jest-dom";

import { TextDecoder, TextEncoder } from "util";
import { vi } from "vitest";

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

beforeEach(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

  vi.mock("@/shared/config/firebase", () => ({
    database: {},
    ref: vi.fn(),
    onValue: vi.fn(),
    set: vi.fn(),
    get: vi.fn(),
    push: vi.fn(),
    FirebaseError: vi.fn(),
    auth: {},
  }));
});
