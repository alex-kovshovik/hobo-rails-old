class AddModeToBudgets < ActiveRecord::Migration[5.0]
  def change
    change_table :budgets do |t|
      t.string :mode, limit: 32, null: false, default: 'normal'
    end
  end
end
