/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

let createRuntime;

describe('Runtime', () => {
  beforeEach(() => {
    createRuntime = require('createRuntime');
  });

  describe('wrapCodeInModuleWrapper', () => {
    it('generates the correct args for the module wrapper', async () => {
      const runtime = await createRuntime(__filename);

      expect(
        runtime.wrapCodeInModuleWrapper('module.exports = "Hello!"'),
      ).toMatchSnapshot();
    });

    it('injects "extra globals"', async () => {
      const runtime = await createRuntime(__filename, {extraGlobals: ['Math']});

      expect(
        runtime.wrapCodeInModuleWrapper('module.exports = "Hello!"'),
      ).toMatchSnapshot();
    });
  });
});
