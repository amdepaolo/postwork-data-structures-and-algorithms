def find_shortest_string_recursive(arr)
  # type your code in here
  if arr.length == 1
    return arr.first
  elsif arr[0].length <= arr[1].length
    arr.delete_at 1
    find_shortest_string_recursive(arr)
  else find_shortest_string_recursive(arr[1..-1])
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string_recursive(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string_recursive(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string_recursive(['flower', 'juniper', 'lily', 'dandelion'])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# if array has length of 1 return first item
# else compare
# And a written explanation of your solution
# If the array has only one element that means it is the shortest by default, so we can compare the elements, removing it from the array until their is only one left 
