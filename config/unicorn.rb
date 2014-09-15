worker_processes Integer(ENV['WEB_CONCURRENCY'] || 2)
timeout (ENV['TIMEOUT'] || 10).to_i
preload_app true
listen (ENV['PORT'] || 3000).to_i, tcp_nopush: false

before_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end

  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.connection.disconnect!
    Rails.logger.info('Disconnected from ActiveRecord')
  end

end

after_fork do |server, worker|

  Signal.trap 'TERM' do
    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
  end

  if defined?(ActiveRecord::Base)
    Rails.logger.info('Connected to ActiveRecord')
    config = ActiveRecord::Base.configurations[Rails.env] ||
                Rails.application.config.database_configuration[Rails.env]
    config['reaping_frequency'] = (ENV['DB_REAP_FREQ'] || 10).to_i # seconds
    config['pool']            =   (ENV['DB_POOL'] || 2).to_i
    ActiveRecord::Base.establish_connection(config)
  end

  if Rails.cache.respond_to?(:reset)
    Rails.cache.reset
    Rails.logger.info('Rails cache has been reset')
  end

end
