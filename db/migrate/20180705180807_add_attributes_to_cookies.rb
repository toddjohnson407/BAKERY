class AddAttributesToCookies < ActiveRecord::Migration[5.2]
  def change
    add_column :cookies, :type, :string
    add_column :cookies, :quantity, :integer
    add_column :cookies, :size, :string
    add_column :cookies, :boxing, :string
  end
end
