# Write a Bubble Sort

list = [1, 4, 2, 3, 5, 6, 9, 8, 7, 10]
i = 0
store = 0

while i < list.length
  # check index 0 against index 1; if greater, switch them
  if list[i] > list [i+1]
    store = list [i]
    list [i] = list[i + 1]
  end
  
  # run through list
  # repeat process (on each index) for a number of times equal to the total amount of indexes in the array


  i += 1
end

p list

#Write an Insertion Sort

list = [1, 4, 2, 3, 5, 6, 9, 8, 7, 10]