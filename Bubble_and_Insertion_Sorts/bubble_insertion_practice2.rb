# bubble-sort the following array
# array1 = [65, 55, 45, 35, 25, 15, 10]

def bubble_sort(array)
  n1 = 0
  n2 = 0
  box = 0
  not_clear = 0
  i = 0

  while not_clear >= 1
    while i < array.length - 1
      if array[i] > array[i + 1]
        box = array[i]
        array[i] = array[i + 1]
        array[i + 1] = box
        p array
        not_clear += 1
        p "not_clear = true"
      else
        not_clear = 0
        p "not_clear = false"
      end

      i += 1
      p i
    end

    p "not_clear = " + not_clear.to_s
    i = 0
    p "i = " + i.to_s
    # break
    # output = array
    # p output
    # output
  end

  # p output
  # output
end

bubble_sort([65, 55, 45, 35, 25, 15, 10])
