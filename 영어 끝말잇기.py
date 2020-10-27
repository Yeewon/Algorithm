def solution(n, words):
    #번호 : cnt%n; 차례: cnt/n
    prev = words[0]
    for i in range(1, len(words)):
        word = words[i]
        if prev[-1] != word[0] or word in words[:i]: #규칙에 어긋나거나 이미 나왔던 단어이면
            s = '[' + str(i % n + 1) + ',' + str(i // n + 1) + ']'
            return s
        else:
            prev = word
            continue
    s = '[0,0]'
    return s


'''
n = 3
words = ["tank", "kick", "know", "wheel", 'land', 'dream', 'mother', 'robot', 'tank']
'''
'''
n = 5
words = ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']
'''
n = 2
words = ['hello', 'one','even','never','now','world','draw']


print(solution(n,words))