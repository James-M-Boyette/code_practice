#  1. Start with an array of numbers and create a new array with each number times 3.



#     For example, [1, 2, 3] becomes [3, 6, 9].



# arrayOne = [1, 2, 3]



# arrayTwo = arrayOne.map { |number| number * 3 }



# p arrayTwo



#  2. Start with an array of strings and create a new array with each string upcased.



#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].



# arrayOne = ["stringOne", "stringTwo", "stringThree"]



# arrayTwo = arrayOne.map { |input| input.upcase }



# p arrayTwo



#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.



#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].



# arrayOne = [{ :name => "Alice", :location => "Wonderland" }, { :name => "Luke Skywalker", :location => "Degobah System" }]



# arrayTwo = arrayOne.map { |input| input[:name] }



# p arrayTwo



#  4. Start with an array of numbers and create a new array with each number plus 7.



#     For example, [1, 2, 3] becomes [8, 9, 10].



# originalArray = [1, 2, 3]



# newArray = originalArray.map { |input| input + 7 }



# p newArray



# newArray should equal [8, 9, 10]



#  5. Start with an array of strings and create a new array with each string's length.



# original array ["various", "words", "here"]



# new array = [7, 5, 4]



#     For example, ["hello", "goodbye"] becomes [5, 7].



# originalArray = ["various", "words", "here"]



# newArray = originalArray.map { |input| input.length }



# p newArray



#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.



# originalArray = [{ :name => "Jay", :age => 27 },



#                  { :name => "Ben", :age => 18 },



#                  { :name => "Cindy", :age => 38 }]



# newArray = [27, 18, 38]



#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].



# original_array = [



#   { :name => "Jay", :age => 27 },



#   { :name => "Ben", :age => 18 },



#   { :name => "Cindy", :age => 38 },



# ]



# new_array = original_array.map { |input| input[:age] }



# p new_array



#  7. Start with an array of numbers and create a new array with each number divided by 2.



# original_array = [1,2,3,2,1]



# new_array = [.5, 1, 1.5, 1, .5]



#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].



# original_array = [1, 2, 3, 2, 1]



# new_array = original_array.map { |element| element.to_f / 2 }



# p new_array



#  8. Start with an array of strings and create a new array with each string's first letter only.



# original_array = ["Here", "are", "some", "strings"]



# new_array = ["H", "a", "s", "s"]



#     For example, ["hello", "goodbye"] becomes ["h", "g"].



# new_array = original_array.map { |element| element[0] }



# p new_array



# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.



# original_array = [



#   { name: "Jess", age: 36 },



#   { name: "May", age: 16 },



#   { name: "Karen", age: 55 },



# ]



# newArray = [72, 32, 110]



#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].



# new_array = original_array.map { |element| element[:age] * 2 }



# p new_array



# 10. Start with an array of numbers and create a new array with each number converted into a string.



# original_array = [1, 2, 4, 6]



# new_array = ["1", "2", "4", "6"]



#     For example, [1, 2, 3] becomes ["1", "2", "3"].



# new_array = original_array.map { |element| element.to_s }



# p new_array



# p new_array.map { |element| element.class }



# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d



# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf



# SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98

