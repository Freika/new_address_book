unless defined?(Rails)
  ENV["RAILS_ROOT"] = File.expand_path("../../", __FILE__)
  require File.expand_path("../../config/environment", __FILE__)
end

Teaspoon.configure do |config|
  config.suite do |suite|
    suite.use_framework :qunit
    suite.matcher = "{spec/javascripts,app/assets}/**/*_spec.{js,js.coffee,coffee}"
    suite.helper = 'spec_helper'
    suite.stylesheets = ['teaspoon', 'teaspoon_custom']
  end

  config.coverage do |coverage|

  end

end
