# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :teabag do
  # Implementation files
  watch(%r{app/assets/(.+).coffee}) { |m| "#{m[1]}_spec" }

  # Specs / Helpers
  watch(%r{app/assets/(.*)_spec.coffee})
end
