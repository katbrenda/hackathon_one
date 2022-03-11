class Ranch < ApplicationRecord
    has_many :animals, dependent: :destroy
end
