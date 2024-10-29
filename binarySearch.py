def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:     #This is example of binary search
            low = mid + 1
        else:
            high = mid - 1
    return -1 

arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)
if result != -1:
    print("Element position at", str(result))
else:
    print("Element is not present")