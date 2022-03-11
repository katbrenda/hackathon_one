# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ranch kilgore
# ranch hefner
# ranch gaylord
# ranch crass

Ranch.destroy_all


r1 = Ranch.create(name: "Crass Ranch")
r2 = Ranch.create(name: "Gaylord Ranch")
r3 = Ranch.create(name: "Hefner Ranch")
r4 = Ranch.create(name: "Kilgore Ranch")

r1.animals.create(kind: "Horse",price: 13076)
r1.animals.create(kind: "Elephant",price: 6049)
r1.animals.create(kind: "Komodo Dragon",price: 11567)
r1.animals.create(kind: "Wolf",price: 2098742)

r2.animals.create(kind: "Giraffe",price: 398277)
r2.animals.create(kind: "Snake",price: 384)
r2.animals.create(kind: "Siamese Cat",price: 7388)
r2.animals.create(kind: "Parrot",price: 984759874)

r3.animals.create(kind:"Griffin",price: 7000000)
r3.animals.create(kind: "Lion",price: 3000.01)
r3.animals.create(kind: "Sloth",price: 13.97)
r3.animals.create(kind: "Hawk",price: 177658)

r4.animals.create(kind: "Highland Cow",price: 5000)
r4.animals.create(kind: "Dire Wolf",price: 3000)
r4.animals.create(kind: "gigantopithecus",price: 897867)
r4.animals.create(kind: "giganotosaurus",price: 999999999)


puts "database seeded"
puts "Ranches: #{Ranch.all.count}"
puts "Animals: #{Animal.all.count}"