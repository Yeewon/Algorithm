def solution(n, words):
    #이전 값을 prev에 담는다.
    prev = words[0]
    for i in range(1, len(words)):
        #규칙에 어긋나거나 이전에 나왔던 단어이면
        if prev[-1] != words[i][0] or words[i] in words[:i]:
            #몇번째 turn인지 = i//n+1
            #몇번째 사람인지 = i%n+1
            return [i%n+1, i//n+1]
        prev = words[i]
    return [0,0]


n = 3
words = ["tank", "kick", "know", "wheel", 'land', 'dream', 'mother', 'robot', 'tank']

'''
n = 5
words = ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']

n = 2
words = ['hello', 'one','even','never','now','world','draw']
'''
print(solution(n, words))
