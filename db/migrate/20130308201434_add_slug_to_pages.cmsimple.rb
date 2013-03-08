# This migration comes from cmsimple (originally 20120229185214)
class AddSlugToPages < ActiveRecord::Migration
  def change
    change_table :cmsimple_pages do |t|
      t.string :slug
    end
  end
end
