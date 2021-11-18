# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.



# p "Please tell me a word - any word!"



# var = gets.chomp



# p var.upcase



# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.



# p "Please give me an whole number - any number other than zero!"



# var = gets.chomp



# var2 = var.to_i



# if var2 == 0



#   p "I'm afraid that's either not a number, or not a zero"



# else



#   p "Nice pick, #{var2}"



#   if var2 > 100



#     p "In fact, that's a bIg number!"



#   else



#     p "Although, I thought you'd tell me something higher ..."



#   end



# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.



# p "Please give me a number:"



# var1 = gets.chomp.to_i



# p "Please give me second number:"



# var2 = gets.chomp.to_i



# p var1 + var2



# p "Let's do some addition: would you please give me two numbers (seperated by a comma)?"



# var = gets.chomp.split(",")



# p "Ok! That's #{var[0].to_i} and #{var[1].to_i}, correct?"



# p "If so, then their sum would be #{var[0].to_i + var[1].to_i}"



# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.



# p "Please tell me a word, and let's see if I can reverse it:"



# var = gets.chomp



# p "#{var.reverse}"



# 5. Write a program that asks the user to enter a number, then prints the number times 10.



# p "Please give me a number, and I'll see if I can make it ten times bigger:"



# var = gets.chomp



# p "#{var.to_i * 10}"



# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.



# p "Please give me two words, seperated by a comma:"



# var = gets.chomp.split(",")



# p "#{var[0].upcase} #{var[1].upcase}!"



# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.



# p "Please give me a word and I'll tell you how many letters are in that word:"



# var = gets.chomp



# p "#{var}"



# p "Your word has #{var.size} letters"



# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.



# p "Please give me a number, and I'll tell you whether it's a negative or positive one:"



# var = gets.chomp



# if var.to_i < 0



#   p "That's a NEGATIVE number"



# elsif var.to_i > 0



#   p "That's a POSITIVE number"



# else



#   p "That's ZERO!"



# end



# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.



# p "Please tell me two numbers and I'll multiply them"



# var = gets.chomp.split



# p var[0]



# p var[1]



# p var[0].to_i * var[1].to_i



# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.



# p "Please tell me a word and we'll see if it's long:"



# var = gets.chomp



# if var.size > 5



#   p "That's a long word!"



# else



#   p "Not a particularly-big word"



# end



# SOLUTIONS: https://gist.github.com/peterxjang/1539a3ad79728ba4fb68dd8d07279c29

