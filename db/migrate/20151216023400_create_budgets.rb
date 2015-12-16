class CreateBudgets < ActiveRecord::Migration[5.0]
  def change
    create_table :budgets do |t|
      t.integer :user_id, null: false
      t.string :name
      t.decimal :amount, precision: 10, scale: 2

      t.timestamps
    end

    add_index :budgets, :user_id
  end
end
