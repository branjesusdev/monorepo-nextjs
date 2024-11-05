"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ArrayUtils: () => ArrayUtils,
  assertIncludes: () => assertIncludes,
  assertIsPresent: () => assertIsPresent,
  assertNonEmptyString: () => assertNonEmptyString,
  assertSafeInteger: () => assertSafeInteger,
  getRandomInt: () => getRandomInt,
  isHttpStatusCode: () => isHttpStatusCode,
  isIsoDateString: () => isIsoDateString,
  isNonEmptyArray: () => isNonEmptyArray,
  isNonEmptyString: () => isNonEmptyString,
  isParsableNumeric: () => isParsableNumeric,
  isParsableSafeInteger: () => isParsableSafeInteger,
  isPlainObject: () => isPlainObject,
  isPresent: () => isPresent,
  isSafeInteger: () => isSafeInteger,
  stringToFloat: () => stringToFloat,
  stringToSafeInteger: () => stringToSafeInteger
});
module.exports = __toCommonJS(src_exports);

// src/random/getRandomInt.ts
function getRandomInt(min, max) {
  [min, max].forEach((v, idx) => {
    if (!Number.isSafeInteger(v)) {
      throw new Error(`${idx === 0 ? "min" : "max"} is not a valid integer`);
    }
  });
  if (max < min) {
    throw new Error("Min cannot be greater than max");
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// src/array/ArrayUtils.ts
var ArrayUtils = class {
  static getRandom(items) {
    if (items.length === 1) return items[0];
    return items[getRandomInt(0, items.length - 1)];
  }
  static removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
};

// src/typeguards/typeguards.ts
var isIsoDateString = (dateStr) => {
  if (typeof dateStr !== "string" || !/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(dateStr)) {
    return false;
  }
  try {
    const d = new Date(dateStr);
    return d.toISOString() === dateStr;
  } catch (e) {
    return false;
  }
};
var isNonEmptyArray = (v) => {
  return Array.isArray(v) && v.length > 0;
};
var isNonEmptyString = (v, trim = true) => {
  return typeof v === "string" && (trim ? v.trim() : v).length > 0;
};
var isPlainObject = (v) => {
  return typeof v === "object" && v !== null && v.constructor === Object && Object.getPrototypeOf(v) === Object.prototype;
};
var isSafeInteger = (v) => {
  return typeof v === "number" && Number.isSafeInteger(v);
};
var isParsableNumeric = (v) => {
  if (typeof v === "number" && !Number.isNaN(v)) {
    return true;
  }
  if (!isNonEmptyString(v)) {
    return false;
  }
  return !Number.isNaN(
    Number.parseInt(v, 10) || Number.isNaN(Number.parseFloat(v))
  );
};
var isParsableSafeInteger = (v) => {
  const value = typeof v === "string" && /^-?\d+$/.test(v) ? Number.parseInt(v, 10) : v;
  return isSafeInteger(value);
};
var isHttpStatusCode = (v) => {
  return isSafeInteger(v) && v < 600 && v >= 100;
};
function isPresent(v) {
  return v !== void 0 && v !== null;
}

// src/asserts/asserts.ts
function assertNonEmptyString(v, msgOrErrorFactory, trim) {
  if (!isNonEmptyString(v, trim ?? true)) {
    throw createAssertException(msgOrErrorFactory);
  }
}
function assertIncludes(v, stringArray, msgOrErrorFactory, caseInsensitive) {
  const insensitive = caseInsensitive ?? false;
  const val = insensitive ? v?.toUpperCase() : v;
  const allowed = insensitive ? stringArray.map((v2) => v2.toUpperCase()) : stringArray;
  if (!val || !allowed.includes(val)) {
    const msg = [
      `Value '${v ? v : typeof v}' is not in allowed values`,
      `(${stringArray.join(",")}`,
      insensitive ? "(case insensitive)." : "(case sensitive)."
    ].join(",");
    throw createAssertException(msgOrErrorFactory, msg);
  }
}
function assertIsPresent(v, msgOrErrorFactory) {
  if (v === null || v === void 0) {
    throw createAssertException(
      msgOrErrorFactory,
      "Value is null or undefined."
    );
  }
}
function assertSafeInteger(v, msgOrErrorFactory) {
  if (typeof v !== "number" || !Number.isSafeInteger(v)) {
    throw createAssertException(
      msgOrErrorFactory,
      "Value is not a safe integer"
    );
  }
}
function createAssertException(msgOrErrorFactory, fallbackMsg) {
  if (typeof msgOrErrorFactory === "string" || msgOrErrorFactory === void 0) {
    throw new Error(
      msgOrErrorFactory ?? fallbackMsg ?? "Assertion did not pass."
    );
  }
  throw msgOrErrorFactory();
}

// src/convert/string-convert.ts
function stringToSafeInteger(value) {
  if (!isParsableSafeInteger(value)) {
    return null;
  }
  return typeof value === "string" ? Number.parseInt(value, 10) : value;
}
function stringToFloat(value) {
  if (!isParsableNumeric(
    typeof value === "number" ? value.toString(10) : value ?? ""
  )) {
    return null;
  }
  const v = Number.parseFloat(
    typeof value === "string" ? value : value.toString(10)
  );
  return Number.isNaN(v) ? null : v;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrayUtils,
  assertIncludes,
  assertIsPresent,
  assertNonEmptyString,
  assertSafeInteger,
  getRandomInt,
  isHttpStatusCode,
  isIsoDateString,
  isNonEmptyArray,
  isNonEmptyString,
  isParsableNumeric,
  isParsableSafeInteger,
  isPlainObject,
  isPresent,
  isSafeInteger,
  stringToFloat,
  stringToSafeInteger
});
