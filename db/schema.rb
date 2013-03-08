# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130308201442) do

  create_table "cmsimple_images", :force => true do |t|
    t.string   "attachment"
    t.string   "width"
    t.string   "height"
    t.string   "file_size"
    t.string   "content_type"
    t.string   "title"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "cmsimple_pages", :force => true do |t|
    t.string   "uri",                              :null => false
    t.string   "template"
    t.text     "content"
    t.string   "title"
    t.integer  "parent_id"
    t.integer  "position",      :default => 0
    t.string   "slug"
    t.boolean  "is_root",       :default => false
    t.string   "keywords"
    t.text     "description"
    t.string   "browser_title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "published_at"
  end

  add_index "cmsimple_pages", ["parent_id"], :name => "index_cmsimple_pages_on_parent_id"
  add_index "cmsimple_pages", ["published_at"], :name => "index_cmsimple_pages_on_published_at"
  add_index "cmsimple_pages", ["uri"], :name => "index_cmsimple_pages_on_path"

  create_table "cmsimple_paths", :force => true do |t|
    t.string   "uri"
    t.string   "redirect_uri"
    t.integer  "page_id"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "cmsimple_versions", :force => true do |t|
    t.text     "content"
    t.string   "template"
    t.datetime "published_at"
    t.integer  "page_id"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "cmsimple_versions", ["page_id"], :name => "index_cmsimple_versions_on_page_id"
  add_index "cmsimple_versions", ["published_at"], :name => "index_cmsimple_versions_on_published_at"

end
