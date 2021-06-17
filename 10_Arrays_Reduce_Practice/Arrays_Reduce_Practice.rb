#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

# input = [1, 2, 3, 4]

# def add(array)
#   result = array.reduce(0) { |sum, index| sum += index }
#   result
# end

# output = add(input)
# p output
# ouput should be [10]

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

# input = ["A", "man", "with", "a", "plan"]

# def string_add(array)
#   result = array.reduce("") { |sum, index| sum += index + " " }
#   result
# end

# output = string_add(input)
# p output
# output should be "A man with a plan"

#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

# input = [
#   { item: "book", price: 5.99 },
#   { item: "chair", price: 49.99 },
#   { item: "TV", price: 1549.99 },
# ]

# def total_price(array)
#   result = array.reduce(0) { |sum, index| sum += index[:price] }
#   result
# end

# output = total_price(input)
# p output

# output should be 5.99 + 49.99 + 1549.99
# output = 5.99 + 49.99 + 1549.99 (1605.97)
# p output

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

# input = [1, 2, 3, 4, 5]

# def min_number(array)
#   result = array.reduce(array[0]) do
#     |smallest, index|
#     if index < smallest
#       index
#     else
#       smallest
#     end
#   end
#   result
# end

# output = min_number(input)
# p output
# output should be 1

#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

# input = ["volleyball", "basketball", "badminton"]

# def sum_letters(array)
#   result = array.reduce(0) do |sum, index| sum += index.length end
#   result
# end

# output = sum_letters(input)
# p output
# output should be 29

#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

# input = [
#   { name: "chair", price: 100 },
#   { name: "pencil", price: 1 },
#   { name: "book", price: 4 },
# ]

# def cheap_item(array)
#   result = array.reduce(array[0]) do |lowest, index|
#     if index[:price] < lowest[:price]
#       index
#     else
#       lowest
#     end
#   end
#   result
# end

# output = cheap_item(input)
# p output
# output should be the entire hash of the lowest-priced item ...

#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

# input = [1, 2, 3, 4, 5]

# def product(array)
#   result = array.reduce(array[0]) do |product, index| product = product * index end
#   result
# end

# output = product(input)
# p output
# output should be the product of all numbers...120
# p output = 1 * 2 * 3 * 4 * 5

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

# input = ["volleyball", "basketball", "badminton"]

# def dash(array)
#   result = array.reduce("-") do
#     |combined, index| combined += index + "-" end
#   result
# end

# output = dash(input)
# p output

# output should be "-volleyball-basketball-badminton-"

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

# input = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

# def shortest_name(array)
#   result = array.reduce(array[0]) do
#     |short, index|
#     if index[:name].length < short[:name].length
#       index
#     else
#       short
#     end
#   end
#   result
# end

# output = shortest_name(input)
# p output

# output should be the book hash

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.

# input = [1, 2, 3, 4, 15, 6]

# def largest(array)
#   result = array.reduce() do
#     |big, index|
#     if index > big
#       index
#     else
#       big
#     end
#   end
#   result
# end

# output = largest(input)
# p output
# output should be the maximum number (the largest) .. which is 6

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
# SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35
