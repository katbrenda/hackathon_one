class CreateAnimals < ActiveRecord::Migration[7.0]
  def change
    create_table :animals do |t|
      t.string :kind
      t.float :price
      t.belongs_to :ranch, null: false, foreign_key: true

      t.timestamps
    end
  end
end
