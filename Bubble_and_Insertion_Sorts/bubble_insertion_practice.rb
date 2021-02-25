# Write Bubble Sort:
    # Compare first and second indexes: if first is *greater* than second, switch them
    # Do this through the entire array
    # Repeat steps 1 & 2 a number of times equal to the overall length of the list


# list = [1, 4, 2, 3, 5, 6, 9, 8, 10, 7]
# list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
# i = 0
# storage = 0
# repeater = list.length
# p repeater 

# while repeater > 0                    # Repeat 'swapper' through array (at most) as many times as there are indeces
#   while i < (list.length - 1)         # Go through the array once
#       if list[i] > list[i + 1]        # Swapper
#         storage = list[i]
#         list[i] = list[i + 1]
#         list[i + 1] = storage
#         p list
#       end
#     i += 1
#   end
#   repeater -= 1                       # Efficiency tracker: as a given indecy is moved right as far as it can go, we no longer need to run through as many indeces and reduce number of checks by 1
#   p repeater
#   i = 0
# end 

# p list


# Write Insertion Sort:

# Compare the first two indeces: if the right is smaller than the left, switch them
# Compare the new, left index value to see if it's smaller than the next index to the left
# Do this for each index space in the array

list = [1, 4, 2, 3, 5, 6, 9, 8, 10, 7]

i = 0
storage = 0

while i < list.length               # Mistake: didn't need to -1 bc we're checking indexes *to the left*

  comparer = i
  while comparer > 0
    if list[i] < list[i - 1]        # Swapper
      storage = list[i]
      list[i] = list[i - 1]
      list[i - 1] = storage
      p list
    else 
      break 
    end
    comparer -= 1
  end
  i += 1
  p i
end 

p list
