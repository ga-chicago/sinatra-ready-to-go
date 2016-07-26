class CreateUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |table|
      table.string :username
      table.string :email
      table.string :password
    end
  end
end
