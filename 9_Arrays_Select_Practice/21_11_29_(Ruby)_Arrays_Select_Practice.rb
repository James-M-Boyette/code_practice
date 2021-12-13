# Note: the .select method works like the .map method *except* that it evaluates the incoming input based on its *truthiness*



#  1. Start with an array of numbers and create a new array with only the numbers less than 20.



# original_array = [1, 2, 4, 6, 21]



# new_array = [1, 2, 4, 6]



#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].



# new_array = original_array.select { |element| element < 20 }



# p new_array



#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".



original_array = ["These", "are", "words", "words", "WORDS"]



new_array = ["words", "words", "WORDS"]



#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].



p original_array.map { |element| element[0] }



p original_array[0][0]



p original_array[0][0].class



p original_array[0][0] == "t" and "T"



p original_array[0][0] == "t" or "T"



# new_array = original_array.select { |element| element[0] == "W" || element[0] == "w" }



new_array = original_array.select { |element| (element[0] == "W" || "w") }



p new_array



#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).



# original_array = [



#   { item_name: "Pastry", price: 5.5 },



#   { item_name: "Milkyway bar", price: 1 },



#   { item_name: "Apple", price: 2 },



#   { item_name: "Pork Shoulder", price: 12 },



# ]



# new_array = [



#     { item_name: "Pastry", price: 5.5 },



#     { item_name: "Pork Shoulder", price: 12 },



# ]



#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].



# new_array = original_array.select { |element| element[:price].to_f > 5 }



# p new_array



#  4. Start with an array of numbers and create a new array with only the even numbers.



# original_array = [1, 3, 12, 55, 126]



# new_array = [12, 126]



#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].



# new_array = original_array.select { |element| element.even? }



# p new_array



# new_array = original_array.select { |element| element / 2 == 1 }



# p new_array



#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.



#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].



#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).



#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].



#  7. Start with an array of numbers and create a new array with only the numbers less than 10.



#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].



#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".



#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].



#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).



#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].



# 10. Start with an array of numbers and create a new array with only the odd numbers.



#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].



# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/7de16ed43ea506e98df3fa15074b84f8



# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/a702894841c7018ed8c127b647ae21f8



# SOLUTIONS (using .select shortcut): https://gist.github.com/peterxjang/b8c8fb8b77b2cae7bb9cc62a3a434761

