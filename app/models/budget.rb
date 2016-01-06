# Budget supports the following modes:
#  - normal
#  - accumulating

class Budget < ActiveRecord::Base
  belongs_to :user
  has_many :expenses
end
