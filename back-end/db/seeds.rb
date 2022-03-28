require 'faker'
puts "🌱 Seeding Users..."
50.times do 
    User.create(username: Faker::Name.unique.name, password:Faker::Bank.account_number, email: Faker::Internet.unique.email)
end

puts "🌱 Seeding Products..."
50.times do 
Product.create(name: Faker::Commerce.product_name,desc: Faker::Quote.famous_last_words, price: Faker::Number.between(from: 1, to: 500))
end
puts "🌱 Seeding Reviews..."
50.times do 
Review.create(content: Faker::Quote.famous_last_words, rating: Faker::Number.between(from: 1, to: 5),user_id: User.ids.sample,product_id: Product.ids.sample)
end

# Seed your database here

puts "✅ Done seeding!"