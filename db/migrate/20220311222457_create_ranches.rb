class CreateRanches < ActiveRecord::Migration[7.0]
  def change
    create_table :ranches do |t|
      t.string :name

      t.timestamps
    end
  end
end
