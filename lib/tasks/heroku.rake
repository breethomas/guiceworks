namespace :heroku do
  namespace :db do
    desc "Pulls remote db to local - defaults to production."
    task :pull => :environment do
      # grab vars
      name = 'guiceworks'
      env = ENV['env'] || 'production'
      app_name = ENV['app_name'] || "#{name}"
      db_name = ENV['db_name'] || "#{name}_development"
      # capture db
      puts "heroku pgbackups:capture -e -a #{app_name}"
      `heroku pgbackups:capture -e -a "#{app_name}"`
      # grab the url
      puts "heroku pgbackups:url -a #{app_name}"
      url = `heroku pgbackups:url -a "#{app_name}"`
      # curl the db file locally
      puts "curl -o db.dump #{url}"
      `curl -o db.dump "#{url}"`
      # restore localhost from dump file
      puts "pg_restore -v -c -O -h localhost -d #{db_name} db.dump"
      `pg_restore -v -c -O -h localhost -d "#{db_name}" db.dump`
      # remove dump file
      puts "rm db.dump"
      `rm db.dump`
    end
  end
end
