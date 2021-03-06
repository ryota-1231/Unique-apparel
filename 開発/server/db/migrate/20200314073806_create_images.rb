class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.bigint :item_id, foreign_key: true
      t.text   :image_url, null: false
      t.timestamps
    end
  end
end
