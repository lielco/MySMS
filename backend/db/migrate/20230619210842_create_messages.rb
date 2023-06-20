class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :recipient_phone_number
      t.text :body

      t.timestamps
    end
  end
end
