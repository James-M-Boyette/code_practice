# Insertion Sort Loop

## My first Attempt
# list = [3, 2, 5, 1, 6, 1, 8, 9, 7, 10, 4]
# array_index = 0
# storage = 0
# check_index = 0
# p list
# while array_index < list.size - 1
#   if list[array_index] > list[array_index + 1]
#     storage = list[array_index] # Shovel didn't work here
#     # Stores lists's current index value in storage variable
#     # p storage
#     list[array_index] = list[array_index + 1]
#     list[array_index + 1] = storage
#     check_index = array_index
#     p array_index
#     p check_index
#     if list[check_index + 1] > list[check_index]
#       storage = list[check_index]
#       # p storage
#       check_index -= 1
#       p list
#     else
#       list[check_index] = storage
#       p list
#       # [2,3,1,5]
#     end
#   end

#   array_index += 1
# end

# p list

## Internet's Version
# list = [3, 2, 5, 1, 6, 1, 8, 9, 7, 10, 4]
# for index in 1...(list.length) # Loop
#   # p index
#   j = index                     # index = 1; j = 1
#   while j > 0
#     p j
#     p list
#     if list[j - 1] > list[j] # if list's previous index space is greater than the current one ...
#       temp = list[j]            # temp stores this current index
#       list[j] = list[j - 1]     # the current index has the previous one written to it
#       list[j - 1] = temp        # temp's contents (the previous "current" value) is written to the previous one - flipping them
#     else # if list's previous index is smaller, break
#       break
#     end
#     j -= 1
#     p j                    # j loses 1
#     p list
#   end
# end
# pp list

# My Second Attempt
list = [3, 2, 5, 1, 6, 1, 8, 9, 7, 10, 4]
array_index = 1
storage = 0
check_index = 0
p list
while array_index < list.size - 1
  check_index = array_index
  p "check index was set to array_index; check index is #{check_index} and array index is #{array_index}"
  while check_index > 0 # Checks everything (back to the first index, if necessary)
    if list[check_index - 1] > list[check_index] # For a while I had a problem here where, first, I had the array index being used ... probably because they seemed interchangeable ... but the whole point of making two trackers was to be able to keep them seperate! They only interact once this "comparer" finished going through it's necessary checks.
      p "Index #{check_index - 1} (#{list[check_index - 1]}) was larger than index #{check_index} (#{list[check_index]})"
      storage = list[check_index]
      p "Index #{check_index} was stored in storage; storage is now #{storage}"
      list[check_index] = list[check_index - 1]
      list[check_index - 1] = storage
      p list
      # check_index = array_index I had it right that we'd need to reset the check_index ... but I hadn't considered that we'd want to use break to *add* to it / be more selective about when we check an index to one or more other spaces
    else
      p "Index #{check_index - 1} (#{list[check_index - 1]}) was NOT larger than index #{check_index} (#{list[check_index]}); break"
      break
    end
    p "check_index was #{check_index}"
    check_index -= 1
    p "check_index is now #{check_index}"
  end
  array_index += 1
end

p list

# Lessons Learned:
# Using two tickers was correct. But I needed to keep them seperate: the array ticker didn't end up being necessary for any part of the "checker" loop. I originally thought they'd both need to be used in the nested "sorter" function. Instead, the second "check" ticker was able to do *all* the work on its own, and then be reset once that work (see next) was complete (to 'look' at the next indecy)
# I was correct in thinking the check ticker would need to work backwards through the code, but didn't really know why...If anything, I worried that somehow I was missing a logical pitfall in the indeces already analyzed ... that somehow, the current number being checked against this subset woudl fail to get properly inserted. HOWEVER > as the sorter moves forward, we *can* rely on the previous indeces/the subset of "already-sorted" being both properly sorted *and* therefor effectively its own (sub) list against-which we're comparing our current number. IOW we've made a new (sub)list that's ordered left-to-right in ascending order, so now we can work back (right-to-left) to see where our current number should go. Best-case, it's the biggest so-far and nothing happens. Else, it'll get worked back through the sub-set until we *do* find a number it's bigger than ... or we'll end up placing it at the front of the list. And we'll repeat this process until there are no new numbers to compare to the preceding, ordered list.
# To this same point (or restating the last two, somewhat) I thought I'd need a second 'if' check and a second variable to store another number ... maybe the first would store the current index's integer, and the second would be used to move one or more preceeding indeces to the right - and then we'd insert the first variable into the new slot. IOW, would we need to be storing and moving two or three indexes at once? ... I think my intuition isn't wrong, here, if we're trying to save even more writing? The if loop I borrowed from the internet runs a cycle of "move the left index one to the right, write and compare to the next one to the left, *re*-save" and repeat ... the integer being moved is effectively tumbled to the left until it should no-longer tumble. If two variables were used we could store our current, compare it to the next-left, and then store and move/write it one space to the right (rinse and repeat) ... with a second, more-nested loop that would address how to download our original integer once it was no longer necessary to shuffle preceeding numbers to the right. Effectively, I had the idea of standing in front of a row of apples, and picking one up in the middle; then, you'd hold it in one hand and pick up others in the row, one by one, with your other hand to compare and (when necessary) be moved with that second hand ... and you'd then have to put back down an apple that didn't need to be moved and finally place the original down. At the very least, we've got the apple/integer in question distinctly heald in a varaible ... but we could just call the index we've just dumped into ... so I'm not sure what benefit there would be in this "compare a bunch of apples to one that's held for the duration in your off-hand" over comparing two and switching them until no more switching need take place ...
