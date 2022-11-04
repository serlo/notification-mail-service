/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * This file is part of Serlo.org API
 *
 * Copyright (c) 2022 Serlo Education e.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @copyright Copyright (c) 2022 Serlo Education e.V.
 * @license   http://www.apache.org/licenses/LICENSE-2.0 Apache License 2.0
 */
import { setupServer } from 'msw/node'

declare global {
  /* eslint-disable no-var */
  var server: ReturnType<typeof import('msw/node').setupServer>
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
global.server = setupServer()

beforeAll(() => global.server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => {
  global.server.resetHandlers()
})

afterAll(() => global.server.close())

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace NodeJS {
    interface Global {
      server: ReturnType<typeof import('msw/node').setupServer>
    }
  }
}
