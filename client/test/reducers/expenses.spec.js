import expect from 'expect'
import expenses from '../../reducers/expenses'
import { ADD_EXPENSE } from '../../actions/expense'

describe('reducers', () => {
  describe('expenses', () => {
    it('should handle initial state', () => {
      expect(expenses(undefined, {})).toEqual([])
    });

    it('should handle ADD_EXPENSE', () => {
      const expected = [{
        id: undefined,
        date: '1/1/2016',
        amount: '12.23',
        budget: 'Test',
        comment: ''
      }]

      expect(expenses([], { type: ADD_EXPENSE, amount: '12.23', budget: 'Test', date: '1/1/2016', comment: '' })).toEqual(expected)
    });

    it('should handle unknown action type', () => {
      expect(expenses([], { type: 'unknown' })).toEqual([])
    })
  })
});
