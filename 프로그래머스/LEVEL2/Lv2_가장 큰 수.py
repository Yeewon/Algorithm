import itertools

def find_max(numbers): #['3', '30', '34']
    combiList = list(itertools.combinations(numbers, len(numbers)))

find_max(['3', '30', '34'])
# def solution(numbers):
#     answer = ''
#
#     dict = {}
#     for data in numbers:
#         start = str(data)[0]
#         if start in dict:
#             dict[start].append(str(data))
#         else:
#             dict[start] = [str(data)]
#
#     dict = sorted(dict.items(), reverse=True)
#     print(dict)
#
#
#     for data in dict:
#         if len(data[1]) > 1:
#             answer += find_max(data[1])
#         else:
#             answer += ''.join(data[1])
#     return answer
#
#
#
# # numbers = [6, 100, 123, 2]
# numbers = [9, 3, 30, 34, 5]
# print(solution(numbers))