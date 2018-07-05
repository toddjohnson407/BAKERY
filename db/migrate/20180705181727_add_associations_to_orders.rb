class AddAssociationsToOrders < ActiveRecord::Migration[5.2]
  def change
    add_reference :orders, :cookie, foreign_key: true
    add_reference :orders, :customer, foreign_key: true
  end
end
