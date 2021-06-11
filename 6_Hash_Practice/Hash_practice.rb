# 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

# def bio(first, last, email)
#   vitals = { ""f_name"" =>" firs"t," "l_na"me" "=> last, "email" => email }
#   p vitals["f_name"]
# end

# bio("James", "Boyette", "jb@gmail.com")

# 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

# members = []

# def add_memebers(f_name, l_name)
#   members = { "first_name" => f_name, "last_name" => l_name }
#   return members
# end

# members << add_memebers("James", "Boyette")
# members << add_memebers("John", "Evans")
# members << add_memebers("Suzy", "Gray")
# p members
# p members[0]["first_name"]

# 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

# menu = { "Spaghetti" => 7.99, "Cheese Burger Deluxe" => 12.99, "Turkey BLT" => 8.99 }

# def add_to_menu(item, price)
#   menu = { item.to_s => price.to_i }
#   p menu
#   menu
# end

# menu = menu.merge(add_to_menu("Chicken Noodle Soup", 4.99))
# p menu

# 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

# fav_book = { "title" => "The Epistemology of Belief", "author" => "William James", "pages" => 150, "language" => "English" }

# fav_book.each do |attribute|
#   p attribute
# end

# 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

# book_shelf = [
#   { "title": "Star Wars", "author": "George Lucas" },
#   { "title": "Where the Wildthings Are", "author": "Wish I knew" },
#   { "title": "Horton Hears a Who", "author": "Dr Seus" },
# ]
# p book_shelf[2]

# 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

# states = [
#   { "state" => "New York", "capital" => "Albany" },
#   { "state" => "North Carolina", "capital" => "Durham" },
#   { "state" => "Texas", "capital" => "Mars" },
# ]

# p states

# 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

# laptop = { "brand" => "alienware", "model" => "desert storm", "year" => 2021 }

# laptop.each do |attribute|
#   p attribute
# end

# 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

# laptops = [
#   { "brand": "Dell", "model": "dude" },
#   { "brand": "Gateway", "model": "moo" },
#   { "brand": "Apple", "model": "paperweight" },
# ]

# p laptops[1]

# 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

# dictionary = {
#   "crazy" => "unhinged; confusing; scattered",
#   "sane" => "sensible; measured; aware",
# }

# dictionary["hungry"] = "empty stomach; interested; desperate"

# p dictionary

# 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

# shirt = {
#   "brand": "Calvin Klein",
#   "color": "White",
#   "size": "X-Small",
# }

# shirt.each do |attribute|
#   p attribute
# end

# SOLUTIONS: https://gist.github.com/peterxjang/d257aec07882d78009bd796ed53f81bb
