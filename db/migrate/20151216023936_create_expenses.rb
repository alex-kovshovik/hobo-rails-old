class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.integer :budget_id, null: false
      t.date :date, null: false
      t.decimal :amount, precision: 10, scale: 2, null: false
      t.string :comment

      t.timestamps
    end

    add_index :expenses, :budget_id
  end
end
