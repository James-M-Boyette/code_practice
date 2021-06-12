#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

# input = [1, 2, 3]

# def times3(array)
#   ouput = array.map { |n| n * 3 }
#   p ouput
# end

# ouput = times3(input)

#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

# input = ["hello", "goodbye"]

# def scream(array)
#   output = array.map { |index| index.upcase }
#   output
# end

# output = scream(input)
# p output

# output should be ["HELLO", "GOODBYE"]

#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

# input = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]

# def find_name(array)
#   output = array.map { |index| index[:name] }
#   output
# end

# output = find_name(input)
# p output

# output should be ["Alice", "Blane"]
# Note: the keys in this array were in 'symbol' form

#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].

# input = [1, 2, 3]

# def plus7(array)
#   output = array.map { |index| index + 7 }
#   output
# end

# output = plus7(input)
# p output
# output should be[8, 9, 10]

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].

# input = ["hello", "goodbye"]

# def length_counter(array)
#   output = array.map { |index| index.length }
# end

# output = length_counter(input)
# p output
# output should be [5, 7]

#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

# input = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]

# def age(array)
#   output = array.map { |index| index[:age] }
#   output
# end

# output = age(input)
# p output

# output should be [27, 16]

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

# input = [1, 2, 3]

# def dividedBy2(array)
#   output = array.map { |index| index.to_f / 2 }
#   output
# end

# result = dividedBy2(input)
# p result

# output should be [0.5, 1.0, 1.5]

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

# input = ["hello", "goodbye"]

# def first_letter(array)
#   output = array.map { |index| index[0] }
#   output
# end

# output = first_letter(input)
# p output

# output should be ["h", "g"]

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

# input = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]

# def double_age(array)
#   output = array.map { |index| index[:age] * 2 }
#   output
# end

# output = double_age(input)
# p output

# output should be[54, 32]

# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

# input = [1, 2, 3]

# def to_string(array)
#   output = array.map { |index| index.to_s }
#   output
# end

# result = to_string(input)
# p result

# output should be ["1", "2", "3"]

# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
# SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98
