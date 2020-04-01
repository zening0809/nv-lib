import filter from '../filter'

const users: any[] = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
]
const result: any[] = [{ 'user': 'barney', 'active': true }]

test('map values in `collection` to a new array', (): void => {
  expect(filter(users, ({ active }: any) => active)).toEqual(result)
});
