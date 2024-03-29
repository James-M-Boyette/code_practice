#### https://www.leighhalliday.com/recursion-in-ruby

# What is recursion?

> Recursion in computer science is a method where the solution to a problem depends on solutions to smaller instances of the same problem (as opposed to iteration).

Graham, Ronald; Donald Knuth; Oren Patashnik (1990). Concrete Mathematics. Chapter 1: Recurrent Problems.

# An example in pseudocode

Let's look at an example in pseudocode and talk about what is happening. We're going to sum all of the numbers in an array.

The usual flow of a recursive function is as follows:

- Perform an operation on the first element (head) of the array.
- Call the same function (hence recursion) with the remaining elements (tail) of array.
- Have a guard clause to stop recursion from happening when we've reached the end.

Ex:

      def sum_array
        if the array is empty
          return 0
        else
        head of array + sum_array(tail of array)
        end
      end

What happens is sort of like this:

      array = [1,2,3,4,5]

      1 + 2 + 3 + 4 + 5
      1 + 2 + 3 + 9
      1 + 2 + 12
      1 + 14
      15

# Recursion vs Iteration

In Ruby it is often preferable to avoid recursion and use iteration instead. Ruby (and most imperative programming languages) have very useful language constructs to aid with iterating over data.

Recursion can end up being slower and use more memory than it's iterative counterpart for a number of reasons discussed here in Stack Overflow.

Certain languages, especially functional languages which deal with immutable data (Elixir, Haskell, etc...), don't have language constructs at all to deal with iteration and all of it is performed through recursion. These languages are optimized for recursion using a technique called tail call optimization and also come with handy pattern matching to deal with the head and tail of arrays.

# Why recursion in Ruby?

Despite what I said above, I wanted to see what recursion might look like to solve a number of problems in Ruby. Because Ruby doesn't have an easy way of grabbing the head and tail of an array through pattern matching, I've added a head_tail method to the Array class to aid in this.

    class Array
      def head_tail
      head, *tail = *self
      [head, tail]
      end
    end

In the array [1,2,3,4,5], the head is 1 and the tail is [2,3,4,5].

# Recursion Examples

## Factorials

Factorials in math are written like `6!` and are the result of `6 _ 5 _ 4 _ 3 _ 2 \* 1.`

    def recur_fact(num)
      if num == 0 || num == 1
        1
      else
        num \* recur_fact(num - 1)
      end
    end

    recur_fact(6) // 720

Let's look at the same method done in an iterative manner:

    def iter_fact(num)
      if num == 0 || num == 1
        1
      else
        sum = 1
        num.times do |n|
          sum \*= (n + 1)
        end
      sum
      end
    end

    iter_fact(6) // 720

## Fibonacci

I heard a funny definition of Fibonacci that goes like this: "Fibonacci - A problem used to teach recursion in computer science." The first 10 Fibonacci numbers go like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 - The next number is the sum of the previous 2 numbers.

    def recur_fib(n)
    acc = [0, 1]

    f = ->(acc) {
      if acc.size == n
        acc
      else
        cur, last = acc.last(2)
        f.(acc + [cur + last])
      end
    }

    f.(acc)
    end

    recur_fib(10) # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

## Summing Array

    def recur_sum(array)
      if array.empty?
        0
     else
        head, tail = array.head_tail
        head + recur_sum(tail)
      end
    end

    recur_sum([1,2,3,4,5]) # 15

Done iteratively:

    def iter_sum(array)
      sum = 0
      array.each do |elem|
        sum += elem
      end
    sum
    end

    iter_sum([1,2,3,4,5]) # 15

## Mapping Array

    def recur_map(array, f)
      if array.empty?
        []
      else
        head, tail = array.head_tail
        [f.(head)] + recur_map(tail, f)
      end
    end

    recur_map([1,2,3,4,5], ->(elem) {
        elem \* elem
    }) # [1, 4, 9, 16, 25]

Done iteratively:

    def iter_map(array, f)
      new_array = []
      array.each do |elem|
        new_array << f.(elem)
      end
      new_array
    end

    iter_map([1,2,3,4,5], ->(elem) {
      elem \* elem
    }) # [1, 4, 9, 16, 25]

## Reducing Array

    def recur_reduce(array, acc, f)
      if array.empty?
        acc
      else
        head, tail = array.head_tail
      recur_reduce(tail, f.(acc, head), f)
      end
    end

    // Join

    recur_reduce(["Leigh", "Christopher", "Halliday"], "", ->(r, elem) {
      "#{r} #{elem}".strip
    }) # "Leigh Christopher Halliday"

    // Sum

    recur_reduce([1,2,3,4,5], 0, ->(r, elem) {
      r + elem
    }) # 15

    // Longest String

    recur_reduce(["Leigh", "Christopher", "Halliday"], "", ->(r, elem) {
     r.length > elem.length ? r : elem
    }) # "Christopher"

    // Count

    recur_reduce(["Leigh", "Christopher", "Halliday"], 0, ->(r, elem) {
      r + 1
    }) # 3

    // Map

    recur_reduce([1,2,3,4,5], [], ->(r, elem) {
      r + [elem * elem]
    }) # [1, 4, 9, 16, 25]
