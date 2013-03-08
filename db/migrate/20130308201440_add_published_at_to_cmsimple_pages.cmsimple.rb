# This migration comes from cmsimple (originally 20120425211937)
class AddPublishedAtToCmsimplePages < ActiveRecord::Migration
  def change
    add_column :cmsimple_pages, :published_at, :datetime
    add_index  :cmsimple_pages, :published_at
  end
end
