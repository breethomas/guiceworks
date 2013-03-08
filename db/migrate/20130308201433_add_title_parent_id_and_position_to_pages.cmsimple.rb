# This migration comes from cmsimple (originally 20120222185901)
class AddTitleParentIdAndPositionToPages < ActiveRecord::Migration
  def change
    change_table :cmsimple_pages do |t|
      t.string :title
      t.integer :parent_id
      t.integer :position, :default => 0
    end
    add_index :cmsimple_pages, :parent_id
  end
end
