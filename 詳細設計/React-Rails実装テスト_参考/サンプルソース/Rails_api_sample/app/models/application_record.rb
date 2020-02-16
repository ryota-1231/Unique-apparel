class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  # config.load_defaults 5.1

  # config.api_only = true
  # config.middleware.insert_before 0, Rack::Cors do
  #   allow do
  #     origins 'http://localhost:3000'
  #     resource '*',
  #     :headers => :any,
  #     :methods => [:get, :post, :patch, :delete, :options]
  #   end
  # end

end
