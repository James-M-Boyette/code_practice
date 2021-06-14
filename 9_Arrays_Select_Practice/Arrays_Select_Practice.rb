#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

input_array = [2, 32, 80, 18, 12, 3]

# loop through the array, checking whether the given index is less than 20,
# and store those that are in a new array

## With .map
# def less_than_20(array)
#   result = []
#   result << array.filter_map { |index| index if index < 20 }
#   result
# end

## With .select
# def less_than_20(array)
#   result = array.select! { |index| index < 20 }
# end

# output = less_than_20(input_array)
# p output

# output should be [2, 18, 12, 3]

#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

# input = ["winner", "winner", "chicken", "dinner"]

# def find_w(array)
#   result = array.select! { |index| index[0] == "w" }
# end

# output = find_w(input)
# p output
# output should be ["winner", "winner"]

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

# input = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

# # An array of hashes means each array index stores an hash, within-which keys are storing values
# # Find those KeyPrices that are greater than 5, using symbols for the key

# def above_5(array)
#   # Grab the entire Hash
#   # result = array.select! { |index| index[:price] > 5 }
#   # Grab just the value of :price
#   result = array.select! { |index| index[:price] > 5 }  # Grab all of the hashes where the key of price has a value greater than 5
#   p result = result.map { |index| index[:price] }       # Of those hashes we just acquired, now only store the values of :price
#   result
# end

# output = above_5(input)
# p output
# output should be [{name: "chair", price: 100}]

#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

# input = [2, 4, 5, 1, 8, 9, 7]

# def evens(array)
#   result = array.select! { |index| index.even? }
#   result
# end

# output = evens(input)
# p output

# output should be [2, 4, 8]

#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

# input = ["a", "man", "a", "plan", "a", "canal", "panama"]

# def shorter_than_4(array)
#   result = array.select! { |index| index.length < 4 }
#   result
# end

# output = shorter_than_4(input)
# p output

# output should be["a", "man", "a", "a"]

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

# input = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

# def shorter_than_6(array)
#   result = array.select! { |index| index[:name].length < 6 }
#   result
# end

# output = shorter_than_6(input)
# p output

# output should be[{ name: "chair", price: 100 }, { name: "book", price: 4 }]

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

# input = [8, 23, 0, 44, 1980, 3]

# def less_than_10(array)
#   result = array.select! { |index| index < 10 }
#   result
# end

# output = less_than_10(input)
# p output

# output should be[8, 0, 3]

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

# input = ["big", "little", "good", "bad"]

# def no_b_words(array)
#   result = array.select! { |index| index[0] != "b" }
#   result
# end

# output = no_b_words(input)
# p output

# output should be ["little", "good"]

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

# input = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

# def less_than_10(array)
#   result = array.select! { |index| index[:price] < 10 }
#   result
# end

# output = less_than_10(input)
# p output

# output should be[{ name: "pencil", price: 1 }, { name: "book", price: 4 }]

# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

# input = an array of numbers
# use a .select! method

# input = [2, 4, 5, 1, 8, 9, 7]

# def odds(array)
#   result = array.select! { |index| index.odd? }
#   result
# end

# output = odds(input)
# p output

# output should be a new array with only odd numbers ; grab only the odd numbers
# output should be [5, 1, 9, 7]

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/7de16ed43ea506e98df3fa15074b84f8
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/a702894841c7018ed8c127b647ae21f8
# SOLUTIONS (using .select shortcut): https://gist.github.com/peterxjang/b8c8fb8b77b2cae7bb9cc62a3a434761
