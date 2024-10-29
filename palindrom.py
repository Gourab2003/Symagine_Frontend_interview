def is_palindrome(input_str):
    cleaned_str = input_str.lower().replace(" ", "")
    return cleaned_str == cleaned_str[::-1]
number = 12321

print(is_palindrome(str(number)))  # Output: True