# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

# var1 = first name
# var2 = last name

# Add them together and print one string using concatonation

# def full_name(n, m)
#   var1 = n
#   var2 = m
#   full_name = var1 + var2
#   p full_name
#   return full_name
# end

# full_name("James", "Boyette")
# full_name(19, 84)

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

# var1 = first name
# var2 = last name

# def full_name_i(n, m)
#   var1 = n
#   var2 = m
#   full_name = "#{var1} #{var2}"
#   print full_name
#   # return full_name
# end

# full_name_i("James", "Boyette")
# full_name_i("0", "1")

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".
# p "Hello! Please tell me your full name!"

# name = gets.chomp.downcase
# print name
# if name == "marco"
#   print " Polo! An *excellent* name!"
# else
#   print "! Nice to meet you!"
# end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).
# print "Hello! Please give me a color? "

# v1 = gets.chomp
# print "And another? "
# v2 = gets.chomp
# print "And just one more, please! "
# v3 = gets.chomp
# colors = v1 + ", " + v2 + ", & " + v3
# print colors + " ? I love those!"

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

# print "Hello! Please give me your favorite color: "

# c1 = gets.chomp
# print "Great - and your next fav? "
# c2 = gets.chomp
# print "Fantastic. And one more, if you please! "
# c3 = gets.chomp

# print "Niiiice - #{c1}, #{c2}, and #{c3} are some of my favorites, too! "
# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

# print "Hey - tell me a name, please? "
# name = gets.chomp
# p name
# n1 = "Santa"
# n2 = "santa"
# if name == n1
#   print "Hey - yOu're not Santa!!"
# elsif name == n2
#   print "Hey - yOu're not Santa!!"
# else
#   print "Ooo - love that name!"
# end

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

# title = "Altered Carbon"
# author = "Richard K Morgan"

# print "My favorite book right now is " + title + ", by " + author + "!"

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

# title = "Altered Carbon"
# author = "Richard K Morgan"

# print "My favorite book right now is #{title}, by #{author}!"

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

# print "Please enter a new password: "
# pw = gets.chomp

# if pw == "Joshua"
#   print "Shall we play a game?"
# else
#   print "Access Denied!"
# end

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

# v1 = "New York"
# v2 = "Boston"
# v3 = "Charlotte"

# print "I know a few things about " + v1 + ", " + v2 + ", and " + v3 + "..."

# SOLUTIONS: https://gist.github.com/peterxjang/79ba5acc912a86cce2a18c2f14b1c712
