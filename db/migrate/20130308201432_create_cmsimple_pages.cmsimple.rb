# This migration comes from cmsimple (originally 20120201221410)
class CreateCmsimplePages < ActiveRecord::Migration
  def change
    create_table :cmsimple_pages do |t|
      t.string :path, :null => false
      t.string :template
      t.text :content
    end
    add_index :cmsimple_pages, :path
  end
end
