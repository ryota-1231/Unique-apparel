class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :item_cord,     null: false, unique: true
      t.string  :name,          null: false
      t.bigint  :category_id,   foreign_key: true
      t.bigint  :size_id,       foreign_key: true
      t.bigint  :company_id,    foreign_key: true
      t.integer :color
      t.text    :description,   null: false
      t.integer :price,         null: false, default: 300
      t.timestamps
    end
  end
end
