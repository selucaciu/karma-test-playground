const { rest } = require('msw')

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      }),
    )
  }),
  rest.post('/count', (req, res, ctx) => {
    console.log('counte handler test');
    return res(
      ctx.json({
        count: 2,
        type: 'test',
      }),
    )
  }),
]