# This migration comes from cmsimple (originally 20120831233927)
class RenamePathToCurrentUriOnPaths < ActiveRecord::Migration
  def change
    rename_column :cmsimple_pages, :path, :uri
  end
end
