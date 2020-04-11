(0..4).each do |i|
  i += 1
  @item=Item.create!(item_cord: "#{i}",
    name: "テスト商品名#{i}",
    category_id: 1, #暫定値
    size_id:     1, #sizeテーブル作成したら変更
    company_id:  1, #暫定値 companyログインできたら変更
    color:       1, #colorテーブル作成したら変更
    description: "テスト商品名#{i}の説明",
    price:       "#{i}980",
  )
  Image.create!(item_id: @item.id,
    image_url: open("#{Rails.root}/db/fixtures/women.png")
  )
end