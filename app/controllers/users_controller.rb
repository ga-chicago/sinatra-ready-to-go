class UsersController < ApplicationController
  ##
  # GET /users/:id
  ##
  get '/:id/?' do |id|
    # Returns individual user info
    user = User.find id

    if user
      user.to_json
    else
      { status: 'error', message: 'No user by that ID found' }.to_json
    end
  end

  ##
  # PATCH /users/:id
  ##
  patch '/:id/?' do |id|
    # Update a single user
    user = User.find id

    user.update username: params['username'] || user.username, email: params['email'] || user.email, password: params['password'] || user.password

    { status: 'ok', message: 'user updated' }.to_json
  end

  delete '/:id/?' do |id|
    # Delete a single user
    user = User.find id

    if user
      user.destroy
      { status: 'ok', message: 'User deleted' }.to_json
    else
      { status: 'error', message: 'Cannot delete user' }.to_json
    end
  end

  ##
  # GET /users/
  ##
  get '/?' do
    # Return list of all users
    users = User.all

    if users
      users.to_json
    else
      { status: 'error', message: 'No users found' }.to_json
    end
  end

  ##
  # POST /
  ##
  post '/?' do
    # Creates a new user
    password = BCrypt::Password.create(params['password'])
    user = User.create username: params['username'], email: params['email'], password: password

    if user
      { status: 'ok', message: 'New user created' }.to_json
    else
      { status: 'error', message: 'Could not save user' }.to_json
    end
  end
end
