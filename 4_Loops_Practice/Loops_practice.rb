# 1. Write a while loop to print the numbers 1 through 10.

# def ten(n)
#   num = n
#   while num <= 10
#     p num
#     num += 1
#   end
# end

# ten(1)

# 2. Write a while loop that prints the word "hello" 5 times.

# def hello(n)
#   word = n.capitalize()
#   5.times do
#     p word
#   end
# end

# hello("hello")

# 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

# p "I'm about to spin a wheel - tell me when to stop!"
# word = ""

# while word != "stop"
#   p "<wheel spins>"
#   word = gets.chomp.downcase
#   if word == "stop"
#     break
#   end
# end
# p "Thank goodness that's over!"

# 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.
# n = 0
# while n <= 100
#   p n
#   n += 5
# end

# 5. Write a while loop that prints the number 9000 ten times.

# 10.times do p 9000 end

# 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

# print "Please enter a number: "
# number = 0

# while number <= 10
#   number = gets.chomp.to_i
# end

# print "Ok - good"

# 7. Write a while loop that prints the numbers 50 to 70.

# n = 50
# while n <= 70
#   p n
#   n += 1
# end

# 8. Write a while loop that prints the phrase "Around the world" 144 times.

# i = 1
# 144.times do
#   p i.to_s + ". Around the world"
#   i += 1
# end

# 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

# print "Please enter a word: "
# word = ""
# while word.length <= 5
#   word = gets.chomp
# end

# print "Done!"

# 10. Write a while loop that prints the even numbers from 2 to 40.

# def even(n)
#   while n <= 40
#     p n
#     n += 2
#   end
# end

# even(0)

# SOLUTIONS: https://gist.github.com/peterxjang/c4ec0e0f8f6e123d65ada9bf3100068b
