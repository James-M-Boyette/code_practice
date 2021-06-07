# 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

# # solicit user input for a string
# p "Hey! Give me a word, please!"
# # store that input in a variable
# word = gets.chomp
# # run .upcase on that variable and print
# p "Did you say #{word.upcase}?!"

# 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

# print "Would you please give me a number? "
# var = gets.chomp.to_i
# if var > 100
#   print "That's a big number!"
# end

# 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

# print "I want to test my addition algorithm; would you please give me a number? "
# v1 = gets.chomp.to_i
# print "Great - and one more number, please? "
# v2 = gets.chomp.to_i
# vsum = v1 + v2
# print "Ok: #{v1} + #{v2} = #{vsum} !"

# 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

# p "I want to test my reading skills: please give me a word? "
# word = gets.chomp.to_s
# p word.reverse
# p "... That was using the .reverse method in ruby"
# i = (word.length - 1)
# p i
# rword = ""
# while i >= 0
#   rword << word[i]
#   p word[i]
#   i -= 1
# end
# p rword
# p " ... And that was using James' algorithm !"

# 5. Write a program that asks the user to enter a number, then prints the number times 10.

# p "I want to practice my repetition skills: please give me a number? "
# n = gets.chomp.to_i
# 10.times do
#   p n
# end

# 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.

# p "I wanna practice yelling (indulge me): please give me a word? "
# w1 = gets.chomp.to_s
# p "Great - and one more, please? "
# w2 = gets.chomp.to_s
# p "GREAT! #{w1.upcase} and #{w2.upcase}"

# 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

# p "I need to practice counting: please give me a word? "
# w = gets.chomp.to_s
# p "I think there are #{w.length} letters in that word, based on the .length method ..."

# 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.
# p "I need to check if I recognize the difference between positive and negative numbers - would you please give me a number? "
# def negative(n)
#   num = n
#   if n.negative?()
#     p "That's a neeeegative number"
#   else
#     p "That's a POSITIVE number"
#   end
# end

# negative(gets.chomp.to_i)

# 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.
# p "I need to practice my multiplication: would you please give me a number? "
# n = gets.chomp.to_i
# p "Great - and one more number, please? "
# m = gets.chomp.to_i

# def multiplication(n, m)
#   n1 = n
#   n2 = m
#   p "Ok - #{n1} times #{n2} should equal #{n1 * n2} !"
#   return n1 * n2
# end

# multiplication(n, m)

# 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.
# p "I need to do some counting - please give me a word?"

# def longword(n)
#   word = n
#   if word.length > 5
#     p "That's a long word! "
#   else
#     p "Nice, short word! "
#   end
# end

# longword(gets.chomp.to_s)

# SOLUTIONS: https://gist.github.com/peterxjang/1539a3ad79728ba4fb68dd8d07279c29
